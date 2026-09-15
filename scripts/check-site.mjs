import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Checks exported content and routing; not a ranking or browser-performance test.
const outputRoot = resolve('out');
const origin = 'https://school.sk12m.ru';
const previewBase = '/beauty-detali-concept';
const sitemap = readFileSync(resolve(outputRoot, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 16, 'Homepage + catalog + 6 directions + 6 courses + about + contacts');
assert.equal(new Set(urls).size, urls.length, 'Unique canonical URLs');
const pages = new Map();
const titles = new Set();
const descriptions = new Set();
const bodies = new Set();
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'");
const tagValue = (html, expression, label) => {
  const value = html.match(expression)?.[1];
  assert.ok(value, label);
  return decode(value);
};

let courseCount = 0;
let checkedAssets = 0;
for (const url of urls) {
  assert.ok(url.startsWith(origin + '/'));
  const path = url.slice(origin.length);
  const html = readFileSync(resolve(outputRoot, `.${path === '/' ? '' : path}/index.html`), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One H1: ${path}`);
  assert.equal((html.match(/<main(?:\s|>)/g) || []).length, 1, `One main: ${path}`);
  assert.match(html, /<html[^>]*lang="ru"/);
  const icons = [...html.matchAll(/<link\b[^>]*\brel="(?:icon|apple-touch-icon)"[^>]*>/g)];
  assert.equal(icons.length, 4, `SVG, PNG, ICO and Apple icon: ${path}`);
  for (const [tag] of icons) {
    const href = tagValue(tag, /href="([^"]+)"/, `Icon URL: ${path}`);
    assert.ok(href.startsWith(previewBase + '/'), `Icon includes Pages base: ${href}`);
    assert.ok(existsSync(resolve(outputRoot, '.' + href.slice(previewBase.length).split('?')[0])), `Icon exists: ${href}`);
    checkedAssets++;
  }
  assert.match(html, /<meta name="robots" content="noindex, nofollow"\/?\s*>/);
  const title = tagValue(html, /<title>([^<]+)<\/title>/, `Title: ${path}`);
  const description = tagValue(html, /<meta name="description" content="([^"]+)"/, `Description: ${path}`);
  const canonical = tagValue(html, /<link rel="canonical" href="([^"]+)"/, `Canonical: ${path}`);
  assert.equal(canonical, url);
  assert.ok(!titles.has(title), `Unique title: ${path}`); titles.add(title);
  assert.ok(!descriptions.has(description), `Unique description: ${path}`); descriptions.add(description);
  assert.match(description, /СПб|Петербург/);
  assert.ok(!/30\+ программ|две площадки/.test(html), `No stale promotional metadata: ${path}`);
  assert.ok(!/meta name="generator"|@openai|ChatGPT|Codex/.test(html), `No development labels in HTML: ${path}`);
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0];
  assert.ok(main, `Server-rendered main: ${path}`);
  assert.ok(!bodies.has(main), `Distinct content: ${path}`); bodies.add(main);
  const graph = JSON.parse(tagValue(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/, `Structured data: ${path}`))['@graph'];
  assert.ok(graph.some(item => item['@type'] === 'EducationalOrganization'));
  assert.ok(graph.some(item => item['@type'] === 'WebSite'));
  assert.ok(!JSON.stringify(graph).includes('aggregateRating'), 'No invented ratings');
  assert.ok(!graph.some(item => item['@type'] === 'Offer'), 'No unconfirmed offers');
  if (path !== '/') {
    const breadcrumb = graph.find(item => item['@type'] === 'BreadcrumbList');
    assert.ok(breadcrumb, `Breadcrumb data: ${path}`);
    assert.equal(breadcrumb.itemListElement.at(-1).item, url);
    assert.match(html, /aria-label="Хлебные крошки"/);
  }
  if (path.startsWith('/courses/')) {
    courseCount++;
    const course = graph.find(item => item['@type'] === 'Course');
    assert.ok(course, `Course entity: ${path}`);
    assert.equal(course.url, url);
    assert.ok(main.includes(course.name), `Course name visible: ${path}`);
    for (const topic of course.teaches) assert.ok(main.includes(topic), `Course topic visible: ${path}`);
    assert.match(main, /Длительность|длительность/);
  }
  for (const [, image] of html.matchAll(/<meta property="og:image" content="([^"]+)"/g)) {
    assert.ok(image.startsWith('https://derectim.github.io' + previewBase + '/'), `Preview image uses deployed assets: ${path}`);
    const local = image.slice(('https://derectim.github.io' + previewBase).length);
    assert.ok(existsSync(resolve(outputRoot, '.' + local)));
  }
  for (const [, src] of html.matchAll(/\bsrc="(\/[^"]+)"/g)) {
    assert.ok(src.startsWith(previewBase + '/'), `Asset includes Pages base: ${src}`);
    const local = decodeURIComponent(src.slice(previewBase.length).split('?')[0]);
    assert.ok(existsSync(resolve(outputRoot, '.' + local)), `Asset exists: ${local}`);
    checkedAssets++;
  }
  for (const [, srcSet] of html.matchAll(/\bsrc[Ss]et="([^"]+)"/g)) {
    for (const candidate of decode(srcSet).split(',')) {
      const src = candidate.trim().split(/\s+/)[0];
      assert.ok(src.startsWith(previewBase + '/'), `Responsive image includes Pages base: ${src}`);
      const local = decodeURIComponent(src.slice(previewBase.length));
      assert.ok(existsSync(resolve(outputRoot, '.' + local)), `Responsive image exists: ${local}`);
      checkedAssets++;
    }
  }
  pages.set(path.replace(/\/$/, '') || '/', { html, ids: new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])) });
}
assert.equal(courseCount, 6);

let checkedLinks = 0;
for (const [path, { html }] of pages) {
  for (const [, encodedHref] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = decode(encodedHref);
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const relative = href.startsWith('#') ? path + href : href.slice(previewBase.length);
    if (href.startsWith('/')) assert.ok(href.startsWith(previewBase + '/'), `Link includes Pages base: ${href}`);
    const [pathname, hash] = relative.split('#');
    const target = pathname.replace(/\/$/, '') || '/';
    assert.ok(pages.has(target), `Internal page exists: ${path} → ${href}`);
    if (hash) assert.ok(pages.get(target).ids.has(hash), `Anchor exists: ${path} → ${href}`);
    checkedLinks++;
  }
}
assert.match(readFileSync(resolve(outputRoot, '404.html'), 'utf8'), /Давайте найдём/);
assert.match(readFileSync(resolve(outputRoot, 'robots.txt'), 'utf8'), /Allow: \/\s/);
console.log(JSON.stringify({ status: 'passed', pages: pages.size, courses: courseCount, uniqueTitles: titles.size, uniqueDescriptions: descriptions.size, checkedLinks, checkedAssets, indexing: 'preview-noindex', browserTested: false }));

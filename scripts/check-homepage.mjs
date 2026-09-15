import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Static-output checks only; this is not a browser or rich-results validation.
const html = readFileSync(resolve('out/index.html'), 'utf8');
const basePath = '/beauty-detali-concept';
assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, 'Exactly one visible H1');
assert.match(html, /<h1[^>]*>Школа парикмахеров и бьюти-профессий в Санкт-Петербурге<\/h1>/);
assert.match(html, /<html[^>]*lang="ru"/);
const themeButton = html.match(/<button\b[^>]*class="theme-toggle"[\s\S]*?<\/button>/)?.[0];
assert.ok(themeButton, 'Theme switch is rendered');
assert.match(themeButton, /theme-label-light">Светлая<span> тема<\/span>/);
assert.match(themeButton, /theme-label-dark">Тёмная<span> тема<\/span>/);
assert.ok(!themeButton.includes('aria-label='), 'Visible theme action provides the accessible name');
assert.match(html, /<title>Школа парикмахеров и бьюти-профессий в СПб/);
assert.match(html, /<meta name="description" content="Курсы парикмахеров/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
assert.match(html, /<link rel="canonical" href="https:\/\/school\.sk12m\.ru\/"/);

const schemaText = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
assert.ok(schemaText, 'Server-rendered structured data exists');
const graph = JSON.parse(schemaText)['@graph'];
assert.deepEqual(graph.map(entity => entity['@type']), ['EducationalOrganization', 'WebSite', 'WebPage', 'ItemList']);
assert.equal(graph[3].itemListElement.length, 6);
assert.equal(graph[0].telephone, '+7 911 921-30-19');
assert.match(graph[0].address.streetAddress, /^Владимирский проспект, 19/);
assert.ok(!schemaText.includes('aggregateRating'), 'No invented ratings');

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.has(target), 'Anchor target exists: ' + target);
}
const assets = new Set([...html.matchAll(/\bsrc="(\/[^"]+)"/g)].map(match => match[1]));
for (const asset of assets) {
  const relative = asset.startsWith(basePath + '/') ? asset.slice(basePath.length) : asset;
  assert.ok(existsSync(resolve('out', '.' + decodeURIComponent(relative.split('?')[0]))), 'Local asset exists: ' + asset);
}
for (const id of ['programs', 'method', 'people', 'questions', 'contact', 'locations']) {
  assert.ok(ids.has(id), 'Homepage section exists: ' + id);
}
assert.match(html, /Где находится Beauty Detali School\?/);
assert.match(html, /Можно ли сначала прийти на бесплатное занятие\?/);
assert.match(html, /Владимирский проспект, 19/);
assert.ok((html.match(/Достоевская/g) || []).length >= 4, 'Both metro stations appear in the hero, FAQ, contacts and metadata');
assert.match(html, /Владимирский пассаж/);
assert.match(html, /3-й этаж/);
assert.match(html, /До 6 человек/);
assert.match(html, /Расходные материалы от школы/);
assert.match(html, /Старт и программа под ваш запрос/);
assert.match(readFileSync(resolve('out/robots.txt'), 'utf8'), /Allow: \/\s/);
assert.match(readFileSync(resolve('out/sitemap.xml'), 'utf8'), /<loc>https:\/\/school\.sk12m\.ru\/<\/loc>/);
console.log(JSON.stringify({ status: 'passed', h1: 1, schemaEntities: graph.length, directions: 6, checkedAssets: assets.size, indexing: 'preview-noindex', browserTested: false }));

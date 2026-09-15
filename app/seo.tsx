import type { Metadata } from "next";
import { canonicalUrl, schoolSiteUrl } from "./search-config";
import { school } from "./site-config";
import type { Crumb } from "./site-shell";

export { canonicalUrl } from "./search-config";
const mediaOrigin = process.env.GITHUB_PAGES === "true" ? "https://derectim.github.io/beauty-detali-concept" : schoolSiteUrl;

export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(path) },
    openGraph: { type: "website", locale: "ru_RU", siteName: school.name, title: `${title} — ${school.name}`, description, url: canonicalUrl(path), images: image ? [{ url: `${mediaOrigin}${image}`, alt: title }] : [] },
    twitter: { card: image ? "summary_large_image" : "summary", title: `${title} — ${school.name}`, description, images: image ? [`${mediaOrigin}${image}`] : [] },
  };
}

export const organization = {
  "@type": "EducationalOrganization", "@id": `${schoolSiteUrl}/#school`, name: school.name,
  alternateName: "Школа мастеров красивого бизнеса Detali", url: schoolSiteUrl,
  description: "Школа парикмахеров и бьюти-профессий в Санкт-Петербурге. Индивидуальное обучение и группы до 6 человек, практика на моделях, сервис и общение с клиентами.",
  telephone: school.phone, email: school.email, logo: `${mediaOrigin}/brand/detali-black.svg`,
  address: { "@type": "PostalAddress", streetAddress: `${school.address}, ${school.location}`, addressLocality: school.city, addressCountry: "RU" },
  sameAs: [school.vk],
};

export function StructuredData({ entities }: { entities: Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": entities }).replace(/</g, "\\u003c") }} />;
}

export function PageSchema({ title, description, path, crumbs, type = "WebPage", extra = [] }: { title: string; description: string; path: string; crumbs: Crumb[]; type?: string; extra?: Record<string, unknown>[] }) {
  const url = canonicalUrl(path);
  const breadcrumbId = `${url}#breadcrumbs`;
  return <StructuredData entities={[
    organization,
    { "@type": type, "@id": `${url}#webpage`, name: title, description, url, inLanguage: "ru-RU", isPartOf: { "@id": `${schoolSiteUrl}/#website` }, about: { "@id": `${schoolSiteUrl}/#school` }, breadcrumb: { "@id": breadcrumbId } },
    { "@type": "WebSite", "@id": `${schoolSiteUrl}/#website`, url: `${schoolSiteUrl}/`, name: school.name, publisher: { "@id": `${schoolSiteUrl}/#school` }, inLanguage: "ru-RU" },
    { "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: [{ name: "Главная", path: "/" }, ...crumbs].map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: canonicalUrl(item.path) })) },
    ...extra,
  ]} />;
}

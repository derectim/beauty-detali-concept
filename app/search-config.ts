// Enable only for the approved production deployment, never for shared previews.
export const indexingEnabled = process.env.SITE_INDEXING === "true" && process.env.GITHUB_PAGES !== "true";
export const schoolSiteUrl = "https://school.sk12m.ru";
export const canonicalUrl = (path: string) => `${schoolSiteUrl}${path === "/" ? "/" : path.replace(/\/$/, "") + (process.env.GITHUB_PAGES === "true" ? "/" : "")}`;

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://school.sk12m.ru/sitemap.xml",
    host: "https://school.sk12m.ru",
  };
}

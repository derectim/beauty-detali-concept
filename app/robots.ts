import type { MetadataRoute } from "next";
import { schoolSiteUrl } from "./search-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${schoolSiteUrl}/sitemap.xml`,
    host: schoolSiteUrl,
  };
}

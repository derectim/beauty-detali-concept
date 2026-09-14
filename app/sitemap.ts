import type { MetadataRoute } from "next";
import { schoolSiteUrl } from "./search-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${schoolSiteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

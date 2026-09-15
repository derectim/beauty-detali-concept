import type { MetadataRoute } from "next";
import { canonicalUrl } from "./search-config";
import { courses, directions } from "./course-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/vse-kursy", ...directions.map(item => item.path), ...courses.map(item => item.path), "/o-shkole", "/contacts"].map(path => ({ url: canonicalUrl(path) }));
}

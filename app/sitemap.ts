import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  
  return [
    {
      url: SITE_CONFIG.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_CONFIG.url}/gallery`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}

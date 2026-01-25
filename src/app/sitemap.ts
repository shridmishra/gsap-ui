import { MetadataRoute } from "next";
import { componentRegistry } from "@/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gsap-ui.shrid.in";

  const componentUrls = componentRegistry.flatMap((category) =>
    category.items.map((item) => ({
      url: `${baseUrl}${item.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...componentUrls,
  ];
}

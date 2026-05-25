// input: template route registry, site data, and site URL
// output: Next.js sitemap.xml metadata route including completed template pages and explicit English-only SEO test pages
// pos: App Router SEO route（更新规则：sitemap 增减页面时同步本文件与所属目录 README）

import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/lib/page-registry";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const explicitEnglishOnlyTestRoutes = [
  {
    path: `/${"ra"}ce-tier-list/`,
    changeFrequency: "weekly" as const,
    priority: 0.78
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const registeredRoutes = sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: siteData.site.lastFullCheck,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));

  const existingUrls = new Set(registeredRoutes.map((route) => route.url));
  const explicitRoutes = explicitEnglishOnlyTestRoutes
    .map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: siteData.site.lastFullCheck,
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
    .filter((route) => !existingUrls.has(route.url));

  return [...registeredRoutes, ...explicitRoutes];
}

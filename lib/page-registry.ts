// input: template game config route groups
// output: canonical route lists for sitemap, robots, footer, and hreflang
// pos: template route registry

import { gameConfig } from "@/lib/game-config";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type RouteEntry = {
  locale: string;
  slug: string;
  path: string;
  scope: "core" | "english-only";
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const completedLocales = [...gameConfig.completedLocales];
export const coreSlugs = [...gameConfig.coreSlugs];
export const englishOnlySlugs = [...gameConfig.englishOnlySlugs];

export function getTemplateLocalizedPath(locale: string, slug: string): string {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");

  if (locale === gameConfig.defaultLocale) {
    return cleanSlug ? `/${cleanSlug}/` : "/";
  }

  return cleanSlug ? `/${locale}/${cleanSlug}/` : `/${locale}/`;
}

function coreRoutePriority(locale: string, slug: string): number {
  const isDefaultLocale = locale === gameConfig.defaultLocale;
  const isHome = slug === "";
  const isCodes = slug === "codes";

  if (isHome) {
    return isDefaultLocale ? 1 : 0.9;
  }

  if (isCodes) {
    return 0.85;
  }

  return isDefaultLocale ? 0.8 : 0.75;
}

function coreRouteFrequency(slug: string): ChangeFrequency {
  return slug === "" || slug === "codes" ? "daily" : "weekly";
}

function englishOnlyPriority(slug: string): number {
  if (slug === "scripts") {
    return 0.82;
  }

  if (slug === "discord") {
    return 0.76;
  }

  return 0.78;
}

export const completedCoreRoutes: RouteEntry[] = completedLocales.flatMap((locale) =>
  coreSlugs.map((slug) => ({
    locale,
    slug,
    path: getTemplateLocalizedPath(locale, slug),
    scope: "core" as const,
    changeFrequency: coreRouteFrequency(slug),
    priority: coreRoutePriority(locale, slug)
  }))
);

export const englishOnlyRoutes: RouteEntry[] = englishOnlySlugs.map((slug) => ({
  locale: gameConfig.defaultLocale,
  slug,
  path: getTemplateLocalizedPath(gameConfig.defaultLocale, slug),
  scope: "english-only" as const,
  changeFrequency: "weekly",
  priority: englishOnlyPriority(slug)
}));

export const sitemapRoutes: RouteEntry[] = [...completedCoreRoutes, ...englishOnlyRoutes];
export const robotsAllowedRoutes = sitemapRoutes.map((route) => route.path);

export function isCompletedLocale(locale: string): boolean {
  return completedLocales.includes(locale as never);
}

export function isCoreSlug(slug: string): boolean {
  return coreSlugs.includes(slug as never);
}

export function isEnglishOnlySlug(slug: string): boolean {
  return englishOnlySlugs.includes(slug as never);
}

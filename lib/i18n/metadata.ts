// input: locale, slug, title, description, and page localization scope
// output: Next.js metadata alternates for localized, English-only, or pending pages
// pos: i18n metadata helper

import { gameConfig } from "@/lib/game-config";
import { isCompletedSlug } from "@/lib/page-registry";
import { absoluteUrl } from "@/lib/seo";
import { localeMeta, type Locale } from "./locales";
import { getLocalizedPath } from "./routes";

function localizedLanguages(slug: string) {
  const languages: Record<string, string> = {
    "x-default": absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug))
  };

  gameConfig.completedLocales.forEach((locale) => {
    const typedLocale = locale as Locale;
    const hreflang = localeMeta[typedLocale]?.hreflang || locale;
    languages[hreflang] = absoluteUrl(getLocalizedPath(typedLocale, slug));
  });

  return languages;
}

function pendingRobots(slug: string) {
  return isCompletedSlug(slug)
    ? undefined
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false
        }
      };
}

export function buildLocalizedMetadata({
  locale,
  slug,
  title,
  description
}: {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
}) {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(getLocalizedPath(locale, slug)),
      languages: localizedLanguages(slug)
    },
    robots: pendingRobots(slug)
  };
}

export function buildEnglishOnlyMetadata({
  slug,
  title,
  description
}: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug)),
      languages: {
        en: absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug)),
        "x-default": absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug))
      }
    },
    robots: pendingRobots(slug)
  };
}

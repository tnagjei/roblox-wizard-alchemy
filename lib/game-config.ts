// input: reusable site and game template settings
// output: single source of truth for template identity, locales, route groups, and optional integrations
// pos: template configuration boundary

export const gameConfig = {
  siteName: "Example Game Guide",
  shortName: "Example Guide",
  gameName: "Example Roblox Game",
  gameSlug: "example-game",
  primaryKeyword: "Example Roblox Game guide",
  siteDomain: "https://example.com",
  contactEmail: "example@example.com",
  copyrightOwner: "example@example.com",

  defaultLocale: "en",
  completedLocales: ["en", "zh-tw", "th"],

  coreSlugs: ["", "codes", "tier-list", "updates", "beginners-guide", "units"],
  englishOnlySlugs: ["scripts", "value-list", "macros", "discord"],

  robloxUrl: "",
  robloxGroupUrl: "",
  creatorName: "",
  creatorType: "",

  analytics: {
    googleAnalyticsId: "",
    yandexVerification: "",
    clarityId: "",
    adsenseClient: "",
    thirdPartyAdScripts: [] as string[]
  },

  safetyPolicy: {
    noFakeCodes: true,
    noInventedRewards: true,
    noInventedUnitStats: true,
    noOfficialClaimWithoutSource: true,
    noScriptDownloads: true,
    noCredentialCollection: true
  }
} as const;

export type TemplateLocale = (typeof gameConfig.completedLocales)[number];
export type CoreSlug = (typeof gameConfig.coreSlugs)[number];
export type EnglishOnlySlug = (typeof gameConfig.englishOnlySlugs)[number];

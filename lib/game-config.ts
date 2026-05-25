// input: Wizard Alchemy site and game settings
// output: single source of truth for site identity, locales, route groups, and optional integrations
// pos: site configuration boundary（更新规则：文件变更需同步本注释与所属目录 README）

export const gameConfig = {
  siteName: "Wizard Alchemy Guide",
  shortName: "Wizard Alchemy",
  gameName: "Wizard Alchemy",
  gameSlug: "wizard-alchemy",
  primaryKeyword: "Wizard Alchemy Roblox guide",
  siteDomain: "https://www.wizardalchemy.online",
  contactEmail: "tangjei414@gmail.com",
  copyrightOwner: "tangjei",

  defaultLocale: "en",
  completedLocales: ["en", "zh-tw", "th"],

  coreSlugs: ["", "codes", "tier-list", "updates", "beginners-guide", "units"],
  completedCoreSlugs: ["", "codes", "updates", "beginners-guide"],
  englishOnlySlugs: ["scripts", "value-list", "macros", "discord", "chest-locations", "race-tier-list", "potions"],
  completedEnglishOnlySlugs: ["chest-locations"],

  robloxUrl: "https://www.roblox.com/games/118821269826806/Wizard-Alchemy",
  robloxGroupUrl: "https://www.roblox.com/communities/509055872/Muggle-Academy",
  creatorName: "Muggle Academy",
  creatorType: "Group",

  analytics: {
    googleAnalyticsId: "G-HNK0BQ06B7",
    yandexVerification: "a8ec5c781c023eac",
    bingVerification: "CCDF273298A8B64EE24BA7EA87487F7C",
    clarityId: "wsy7wh8pe6",
    adsenseClient: "ca-pub-3083296102953963",
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

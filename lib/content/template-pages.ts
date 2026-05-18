// input: locale, slug, and shared template config
// output: safe placeholder content objects for template pages
// pos: template content factory

import type { CodesPageContent, HomePageContent, StrategyPageContent } from "@/lib/content/page-types";
import { gameConfig } from "@/lib/game-config";

type StrategySlug = StrategyPageContent["slug"];

const localeLabels: Record<string, { suffix: string; readNext: string; related: string }> = {
  en: { suffix: "", readNext: "What to read next", related: "Related guides" },
  "zh-tw": { suffix: "繁體中文", readNext: "下一步可以看什麼", related: "相關攻略" },
  th: { suffix: "ภาษาไทย", readNext: "อ่านอะไรต่อ", related: "คู่มือที่เกี่ยวข้อง" }
};

function withLocale(text: string, locale: string) {
  const suffix = localeLabels[locale]?.suffix;
  return suffix ? `${text} | ${suffix}` : text;
}

function titleCase(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function pageTitle(slug: string) {
  if (slug === "") return "Guide";
  if (slug === "tier-list") return "Tier List";
  if (slug === "value-list") return "Value List";
  if (slug === "beginners-guide") return "Beginner Guide";
  return titleCase(slug);
}

function localizedHref(locale: string, slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  if (locale === gameConfig.defaultLocale) return cleanSlug ? `/${cleanSlug}/` : "/";
  return cleanSlug ? `/${locale}/${cleanSlug}/` : `/${locale}/`;
}

export function createTemplateHomePage(locale = "en"): HomePageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.siteName} | Codes, Tier List, Units, Updates`, locale),
      description: `${gameConfig.siteName} template page for source-aware Roblox guides, codes, tier lists, units, updates, beginner guidance, and safety notes.`
    },
    slug: "",
    hero: {
      eyebrow: "Source-aware Roblox guide template",
      h1: withLocale(`${gameConfig.gameName} Guide`, locale),
      lede: "Replace this placeholder with verified game information from the Roblox page, official channels, and in-game checks. Do not invent codes, rewards, unit stats, or official claims.",
      primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
      secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
    },
    stats: [
      { valueKey: "playing", label: "Playing now", detail: "Replace after source check" },
      { valueKey: "visits", label: "Visits", detail: "Replace after source check" },
      { valueKey: "favorites", label: "Favorites", detail: "Replace after source check" },
      { valueKey: "approval", label: "Approval", detail: "Replace after source check" }
    ],
    directory: {
      eyebrow: "Guide structure",
      title: "Core guide pages",
      cards: [
        { href: localizedHref(locale, "codes"), title: "Codes", description: "Track verified active codes, pending claims, and safe redemption notes." },
        { href: localizedHref(locale, "tier-list"), title: "Tier List", description: "Document unit roles and rankings only after source checks." },
        { href: localizedHref(locale, "units"), title: "Units", description: "List unit roles, usage notes, and source boundaries." },
        { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Create safe first-step guidance for new players." },
        { href: localizedHref(locale, "updates"), title: "Updates", description: "Track official changes and recheck triggers." },
        { href: "/value-list/", title: "Value List", description: "English-only high-intent page until localized content is complete." }
      ]
    },
    research: {
      eyebrow: "Template policy",
      title: "No fake data by default",
      cards: [
        { title: "Codes", description: "Keep active codes empty until official or in-game evidence exists." },
        { title: "Values", description: "Do not publish value tables without traceable source notes." },
        { title: "Official status", description: "Do not claim official affiliation unless it is proven." }
      ]
    },
    verification: {
      eyebrow: "Source status",
      title: "Source confidence",
      labels: { verified: "Verified", pending: "Pending", "needs verification": "Needs verification", "research-only": "Research only" }
    },
    freshness: {
      eyebrow: "Maintenance",
      title: "Freshness fields",
      stats: [
        { valueKey: "lastFullCheck", label: "Last full check", detail: "Template placeholder" },
        { valueKey: "codesLastChecked", label: "Codes checked", detail: "Template placeholder" },
        { valueKey: "statsSnapshot", label: "Stats snapshot", detail: "Template placeholder" },
        { valueKey: "pageCount", label: "Guide pages", detail: "Template placeholder" }
      ]
    },
    videos: { eyebrow: "Media", title: "Videos", openLabel: "Open", viewsLabel: "views" },
    popularSearches: [
      { href: "/codes/", title: `${gameConfig.gameName} Codes`, description: "Replace with GSC-backed search demand after launch.", coversLabel: "Covers", covers: "Codes · Status · Safety" },
      { href: "/tier-list/", title: `${gameConfig.gameName} Tier List`, description: "Replace with verified role-based ranking logic.", coversLabel: "Covers", covers: "Roles · Updates · Units" }
    ],
    faq: [
      { q: "Is this an official website?", a: "No. This is a reusable independent fan guide template unless official ownership is verified." },
      { q: "Can I publish active codes immediately?", a: "No. Active codes require official or in-game proof." }
    ]
  };
}

export function createTemplateCodesPage(locale = "en"): CodesPageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Codes | Verification-Aware Guide`, locale),
      description: `Template codes page for ${gameConfig.gameName}. Separate verified active codes from pending or community-reported claims.`
    },
    slug: "codes",
    hero: {
      eyebrow: "Codes verification",
      h1: withLocale(`${gameConfig.gameName} Codes`, locale),
      lede: "Use this page to record verified codes, pending claims, expired codes, and safe redemption notes. Do not invent rewards or promote untested strings as active.",
      primaryAction: { label: "Open Roblox page", href: "roblox", external: true },
      secondaryAction: { label: "Back home", href: localizedHref(locale, "") }
    },
    verifiedCodes: {
      eyebrow: "Verified active codes",
      title: "Verified active codes",
      description: "Keep this table empty until official or in-game evidence exists.",
      emptyCode: "No verified code yet",
      emptyReward: "No verified reward yet",
      emptySource: "No verified source yet"
    },
    communityCodes: {
      eyebrow: "Community reports",
      title: "Community-reported codes",
      description: "Use this section only for clearly labeled unverified leads.",
      actionLabel: "Test only inside the game UI",
      statusLabels: { "community reported": "Community reported", "not verified": "Not verified", pending: "Pending", verified: "Verified" }
    },
    pendingCodes: {
      eyebrow: "Pending claims",
      title: "Pending code claims",
      description: "Candidates stay pending until evidence improves.",
      reasonLabel: "Reason",
      defaultReason: "Official or in-game proof is missing.",
      statusLabels: { pending: "Pending", verified: "Verified", "not verified": "Not verified" }
    },
    conflictMatrix: {
      eyebrow: "Conflict check",
      title: "Source conflict matrix",
      description: "Use this only when sources disagree.",
      siteStatusLabel: "Site status",
      externalClaimsLabel: "External claims",
      reasonLabel: "Reason",
      notVerifiedLabel: "Not verified",
      defaultReason: "Needs stronger evidence."
    },
    verificationWorkflow: {
      eyebrow: "Workflow",
      title: "How to verify codes",
      cards: [
        { title: "Official source", list: ["Check the Roblox game page.", "Check developer-linked channels only after source verification."] },
        { title: "In-game test", list: ["Redeem only in the game UI.", "Record date, server state, and result."] },
        { title: "Publish rule", list: ["Do not promote community claims to active without proof."] }
      ]
    },
    redeemGuide: {
      eyebrow: "Redeem guide",
      title: "Redemption steps",
      steps: ["Verify the game has a code system.", "Open the game on Roblox.", "Find the in-game code input only after checking the UI.", "Record the result before updating this page."],
      note: "These are template steps. Replace them only after checking the real game."
    },
    sections: [
      { heading: "Template safety rule", body: ["Never ask users for Roblox passwords, recovery codes, cookies, or external downloads."] }
    ],
    faq: [
      { q: "Why are active codes empty?", a: "Because this template does not invent codes. Add only verified codes." },
      { q: "Can third-party lists be used?", a: "Only as leads to test, not as proof." }
    ]
  };
}

export function createTemplateStrategyPage(slug: StrategySlug, locale = "en"): StrategyPageContent {
  const label = pageTitle(slug);

  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} ${label} Guide`, locale),
      description: `Template ${label.toLowerCase()} page for ${gameConfig.gameName}. Replace with verified content and clear source boundaries.`
    },
    slug,
    hero: {
      eyebrow: `${label} template`,
      h1: withLocale(`${gameConfig.gameName} ${label}`, locale),
      lede: "Replace this placeholder with verified game-specific guidance. Keep unknown claims labeled as pending, inference, or research-only.",
      primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
      secondaryAction: { label: "Back home", href: localizedHref(locale, "") }
    },
    summaryCards: [
      { title: "Evidence first", description: "Use official, in-game, or clearly labeled community evidence." },
      { title: "No invented values", description: "Do not invent stats, unit values, rewards, scripts, or Discord links." },
      { title: "Update risk", description: "Mark content for recheck after major updates or source changes." }
    ],
    sections: [
      {
        heading: `How to build this ${label} page`,
        body: [
          "Start from the official Roblox page and any developer-linked sources.",
          "Add gameplay-specific recommendations only after source checks or in-game review."
        ],
        list: ["Keep unknown claims pending.", "Separate facts from recommendations.", "Avoid copying unsupported community tables."]
      },
      {
        heading: "Template boundaries",
        body: ["This placeholder is intentionally generic. Replace it with verified game-specific content before indexing a production site."]
      }
    ],
    relatedLinks: [
      { href: localizedHref(locale, "codes"), title: "Codes", description: "Verify active and pending codes." },
      { href: localizedHref(locale, "tier-list"), title: "Tier List", description: "Build role-based rankings only after verification." },
      { href: localizedHref(locale, "units"), title: "Units", description: "Document units without inventing stats." }
    ],
    faq: [
      { q: `Is this ${label.toLowerCase()} page final?`, a: "No. It is a reusable template placeholder until replaced with verified game-specific content." },
      { q: "What should be checked first?", a: "Official sources, in-game evidence, and whether the page should be localized or kept English-only." }
    ]
  };
}

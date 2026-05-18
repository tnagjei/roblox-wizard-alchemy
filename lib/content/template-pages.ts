// input: locale, slug, and Wizard Alchemy site config
// output: safe first-version content objects for completed and pending pages
// pos: Wizard Alchemy content factory

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
      title: withLocale(`${gameConfig.siteName} | Roblox Codes, Updates & Beginner Tips`, locale),
      description: `${gameConfig.siteName} is an independent Roblox guide for Wizard Alchemy codes, update tracking, beginner guidance, and source-checked research notes.`
    },
    slug: "",
    hero: {
      eyebrow: "Independent Roblox guide",
      h1: withLocale(`${gameConfig.gameName} Guide`, locale),
      lede: "Wizard Alchemy is a Roblox wizard RPG by Muggle Academy. This first version focuses on a clean guide hub: source-checked code status, release notes, beginner direction, and clear pending labels where data is not verified yet.",
      primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
      secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
    },
    stats: [
      { valueKey: "playing", label: "Playing now", detail: "Live Roblox number not stored yet" },
      { valueKey: "visits", label: "Visits", detail: "Live Roblox number not stored yet" },
      { valueKey: "favorites", label: "Favorites", detail: "Live Roblox number not stored yet" },
      { valueKey: "approval", label: "Approval", detail: "Live Roblox number not stored yet" }
    ],
    directory: {
      eyebrow: "First-version structure",
      title: "Completed guide pages",
      cards: [
        { href: localizedHref(locale, "codes"), title: "Codes", description: "Track RELEASE and WIZARD as Roblox-page-mentioned codes while in-game testing remains pending." },
        { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Start from the verified official description: collect ingredients, brew potions, unlock spells, upgrade power, and explore magical areas." },
        { href: localizedHref(locale, "updates"), title: "Updates", description: "Record source-labeled release notes and keep unsupported patch claims out of the index." }
      ]
    },
    research: {
      eyebrow: "Editorial position",
      title: "What this site will not fake",
      cards: [
        { title: "Codes", description: "Roblox-page-mentioned codes are shown as leads, not as fully in-game tested rewards." },
        { title: "Tier and units", description: "Rankings, stats, races, spells, and values stay pending until the data is checked." },
        { title: "Official links", description: "The Roblox game page and Muggle Academy community are linked; Discord stays pending until verified." }
      ]
    },
    verification: {
      eyebrow: "Source status",
      title: "What is verified now",
      labels: { verified: "Verified", pending: "Pending", "needs verification": "Needs verification", "research-only": "Research only" }
    },
    freshness: {
      eyebrow: "Maintenance",
      title: "Current data state",
      stats: [
        { valueKey: "lastFullCheck", label: "Last full check", detail: "Initial source pass" },
        { valueKey: "codesLastChecked", label: "Codes checked", detail: "Roblox page reviewed" },
        { valueKey: "statsSnapshot", label: "Stats snapshot", detail: "Live numbers not stored" },
        { valueKey: "pageCount", label: "Data pages", detail: "Includes pending data records" }
      ]
    },
    videos: { eyebrow: "Media", title: "Videos", openLabel: "Open", viewsLabel: "views" },
    popularSearches: [
      { href: localizedHref(locale, "codes"), title: `${gameConfig.gameName} Codes`, description: "Check which codes are mentioned by the Roblox page and which claims remain untested.", coversLabel: "Covers", covers: "RELEASE · WIZARD · Verification" },
      { href: localizedHref(locale, "beginners-guide"), title: `${gameConfig.gameName} Beginner Guide`, description: "Use the verified gameplay frame before deeper mechanics are added.", coversLabel: "Covers", covers: "Ingredients · Potions · Spells" }
    ],
    faq: [
      { q: "Is this an official Wizard Alchemy website?", a: "No. This is an independent fan guide and is not affiliated with Roblox Corporation or Muggle Academy." },
      { q: "Why are some pages missing from the footer and sitemap?", a: "Tier list, units, scripts, macros, value list, and Discord pages are not complete enough to index yet." }
    ]
  };
}

export function createTemplateCodesPage(locale = "en"): CodesPageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Codes | Source-Checked Roblox Code Status`, locale),
      description: `${gameConfig.gameName} codes page for source-labeled code status. RELEASE and WIZARD are mentioned on the Roblox page, while in-game redemption testing is still pending.`
    },
    slug: "codes",
    hero: {
      eyebrow: "Codes verification",
      h1: withLocale(`${gameConfig.gameName} Codes`, locale),
      lede: "The Roblox game description mentions RELEASE and WIZARD for free launch rewards. This guide keeps them pending until the in-game redemption UI and reward result are checked.",
      primaryAction: { label: "Open Roblox page", href: "roblox", external: true },
      secondaryAction: { label: "Back home", href: localizedHref(locale, "") }
    },
    verifiedCodes: {
      eyebrow: "Fully verified active codes",
      title: "Fully verified active codes",
      description: "No code has been promoted to fully verified active status yet because this site has not completed an in-game redemption test.",
      emptyCode: "No fully verified code yet",
      emptyReward: "Reward not in-game tested",
      emptySource: "Roblox page mentions RELEASE and WIZARD"
    },
    communityCodes: {
      eyebrow: "Community reports",
      title: "Community-reported codes",
      description: "Use this section only for clearly labeled unverified leads.",
      actionLabel: "Test only inside the game UI",
      statusLabels: { "community reported": "Community reported", "not verified": "Not verified", pending: "Pending", verified: "Verified", "official-page-mentioned": "Official page mentioned" }
    },
    pendingCodes: {
      eyebrow: "Roblox-page-mentioned leads",
      title: "Pending code checks",
      description: "These codes are mentioned by the Roblox game description but are not yet marked as in-game tested by this site.",
      reasonLabel: "Reason",
      defaultReason: "In-game redemption result and exact reward need verification.",
      statusLabels: { pending: "Pending", verified: "Verified", "not verified": "Not verified", "official-page-mentioned": "Official page mentioned" }
    },
    conflictMatrix: {
      eyebrow: "Conflict check",
      title: "Claims held back",
      description: "Third-party claims stay out of the active table until a stronger source or in-game test supports them.",
      siteStatusLabel: "Site status",
      externalClaimsLabel: "External claims",
      reasonLabel: "Reason",
      notVerifiedLabel: "Not verified",
      defaultReason: "Not confirmed by the Roblox game page in this first source pass."
    },
    verificationWorkflow: {
      eyebrow: "Workflow",
      title: "How this page verifies codes",
      cards: [
        { title: "Official source", list: ["Start from the Roblox game page.", "Use the Muggle Academy Roblox community only as a developer identity source unless it links more official channels."] },
        { title: "In-game test", list: ["Redeem only inside the Roblox game UI.", "Record the exact reward text, date, and result before updating the active table."] },
        { title: "Safety rule", list: ["Never ask for Roblox passwords, cookies, recovery codes, or external downloads."] }
      ]
    },
    redeemGuide: {
      eyebrow: "Redeem guide",
      title: "Redemption status",
      steps: ["Open the Wizard Alchemy Roblox page.", "Launch the game from Roblox.", "Look for the in-game code or rewards interface.", "Test RELEASE and WIZARD only inside the game UI, then record the result."],
      note: "Do not use external tools, script downloads, or account credentials to redeem codes."
    },
    sections: [
      { heading: "Why the table is strict", body: ["A code can be source-backed but still not fully verified. This site separates Roblox-page-mentioned leads from in-game tested active codes."], list: ["No invented reward quantities.", "No copied third-party active status.", "No script download links."] }
    ],
    faq: [
      { q: "Are RELEASE and WIZARD real Wizard Alchemy codes?", a: "They are mentioned in the Roblox game description, so this site treats them as source-backed leads. They are not marked fully verified until an in-game test is recorded." },
      { q: "Why is MACHI not in the active code table?", a: "It appears in third-party claims, but this first version did not verify it from the Roblox game page or an in-game test." }
    ]
  };
}

export function createTemplateStrategyPage(slug: StrategySlug, locale = "en"): StrategyPageContent {
  const label = pageTitle(slug);
  const completedCopy: Record<string, Pick<StrategyPageContent, "hero" | "summaryCards" | "sections" | "relatedLinks" | "faq">> = {
    "updates": {
      hero: {
        eyebrow: "Source tracker",
        h1: withLocale(`${gameConfig.gameName} Updates`, locale),
        lede: "This first update page tracks only source-labeled information: the game is released, the Roblox description is the primary public source, and deeper patch details are pending.",
        primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
        secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
      },
      summaryCards: [
        { title: "Release status", description: "The Roblox title shows Wizard Alchemy as released." },
        { title: "Known source", description: "Roblox game page and Muggle Academy community are the verified starting points." },
        { title: "Still pending", description: "Patch history, balance changes, Discord, Trello, and wiki links need stronger verification." }
      ],
      sections: [
        { heading: "Current source snapshot", body: ["The first version uses the Roblox game page as the main public source. It records the broad gameplay description and code mentions without inventing patch details."], list: ["Released Roblox game page found.", "Developer identity linked to Muggle Academy.", "No official Discord link verified in this pass."] },
        { heading: "Next update work", body: ["The second version should collect official changelog sources, developer announcements, and in-game version notes before expanding this page."] }
      ],
      relatedLinks: [
        { href: localizedHref(locale, "codes"), title: "Codes", description: "Review RELEASE and WIZARD evidence status." },
        { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Use verified gameplay basics before deeper mechanics are added." }
      ],
      faq: [
        { q: "Is this a full patch log?", a: "No. It is a first-version source tracker until official update notes are verified." },
        { q: "Will third-party update claims be copied?", a: "No. Third-party claims can guide research, but they are not published as facts without stronger evidence." }
      ]
    },
    "beginners-guide": {
      hero: {
        eyebrow: "Beginner direction",
        h1: withLocale(`${gameConfig.gameName} Beginner Guide`, locale),
        lede: "Start from the verified Roblox description: collect ingredients, brew potions, unlock spells, upgrade power, and explore magical areas. Detailed routes and builds stay pending until checked.",
        primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
        secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
      },
      summaryCards: [
        { title: "Core loop", description: "Ingredients, potions, spells, power upgrades, and exploration are the safe first-version gameplay frame." },
        { title: "Do not overfit early", description: "Avoid hard ranking spells, races, or builds until mechanics are verified." },
        { title: "Use code caution", description: "RELEASE and WIZARD are source-backed leads, but exact reward details need testing." }
      ],
      sections: [
        { heading: "First steps", body: ["Launch the Roblox game page, learn the basic UI, and treat early progression as discovery until a verified walkthrough is added."], list: ["Collect ingredients.", "Brew potions.", "Unlock spells.", "Upgrade power.", "Explore new magical areas."] },
        { heading: "What not to do", body: ["Do not enter Roblox passwords, cookies, or recovery codes into third-party tools. Do not download scripts from code pages or video comments."], list: ["No credential sharing.", "No script downloads.", "No fake reward claims."] }
      ],
      relatedLinks: [
        { href: localizedHref(locale, "codes"), title: "Codes", description: "Check the current source-labeled code status." },
        { href: localizedHref(locale, "updates"), title: "Updates", description: "See what has been verified from public sources." }
      ],
      faq: [
        { q: "Does this page include a full build path?", a: "Not yet. Builds require verified mechanics, stats, and balance information." },
        { q: "Can I trust external code tools?", a: "Do not use tools that ask for Roblox account data, cookies, recovery codes, or downloads." }
      ]
    }
  };

  const completed = completedCopy[slug];

  if (completed) {
    return {
      meta: {
        title: withLocale(`${gameConfig.gameName} ${label} Guide`, locale),
        description: `${gameConfig.gameName} ${label.toLowerCase()} page with source-labeled first-version guidance and clear pending boundaries.`
      },
      slug,
      ...completed
    };
  }

  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} ${label} Guide`, locale),
      description: `${gameConfig.gameName} ${label.toLowerCase()} page is pending. Data needs verification before indexing.`
    },
    slug,
    hero: {
      eyebrow: `${label} pending`,
      h1: withLocale(`${gameConfig.gameName} ${label}`, locale),
      lede: "This page is intentionally pending. It should not be treated as a finished guide until verified game-specific data is added.",
      primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
      secondaryAction: { label: "Back home", href: localizedHref(locale, "") }
    },
    summaryCards: [
      { title: "Evidence missing", description: "This page needs official, in-game, or clearly labeled research evidence." },
      { title: "No invented data", description: "Do not invent stats, rankings, values, scripts, macros, or official Discord links." },
      { title: "Noindex", description: "Pending pages are kept out of sitemap and marked noindex by metadata." }
    ],
    sections: [
      {
        heading: `Why this ${label} page is pending`,
        body: ["The current source pass is not enough to publish this as a complete page."],
        list: ["Keep unknown claims pending.", "Separate facts from recommendations.", "Avoid copying unsupported third-party tables."]
      }
    ],
    relatedLinks: [
      { href: localizedHref(locale, "codes"), title: "Codes", description: "Review source-labeled code status." },
      { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Use verified first-step guidance." }
    ],
    faq: [
      { q: `Is this ${label.toLowerCase()} page complete?`, a: "No. It is pending until verified game-specific data is added." },
      { q: "Why not fill it with third-party data now?", a: "Because unsupported data creates fake authority and can damage trust." }
    ]
  };
}

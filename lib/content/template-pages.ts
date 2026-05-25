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
      { q: "Why are some pages missing from the footer and sitemap?", a: "Tier list, units, scripts, macros, value list, Discord, race, potion, and chest pages are not complete enough to index yet." }
    ]
  };
}

export function createTemplateCodesPage(locale = "en"): CodesPageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Codes | RELEASE, WIZARD & Pending Claims`, locale),
      description: `${gameConfig.gameName} codes page with source-labeled status for RELEASE, WIZARD, MACHI, reward claims, and safe Roblox redemption checks.`
    },
    slug: "codes",
    hero: {
      eyebrow: "Codes evidence desk",
      h1: withLocale(`${gameConfig.gameName} Codes`, locale),
      lede: "RELEASE and WIZARD are mentioned in the Roblox game description. MACHI and exact race reroll quantities appear on third-party pages, so this guide keeps them pending until Roblox-page proof or an in-game test confirms them.",
      primaryAction: { label: "Open Roblox page", href: "roblox", external: true },
      secondaryAction: { label: "Back home", href: localizedHref(locale, "") }
    },
    verifiedCodes: {
      eyebrow: "In-game verified active codes",
      title: "No in-game verified active codes yet",
      description: "The active table stays empty until this site records a redemption result inside Wizard Alchemy. Roblox-page mentions are useful, but they are not the same as a completed in-game test.",
      emptyCode: "No in-game verified code yet",
      emptyReward: "Exact reward not verified",
      emptySource: "Waiting for in-game test log"
    },
    communityCodes: {
      eyebrow: "Third-party and community leads",
      title: "Community-reported code leads",
      description: "These are research leads, not active-code claims. Test only inside the Roblox game UI and do not use external code tools.",
      actionLabel: "Keep pending until tested in-game",
      statusLabels: { "community reported": "Community reported", "not verified": "Not verified", pending: "Pending", verified: "Verified", "official-page-mentioned": "Official page mentioned" }
    },
    pendingCodes: {
      eyebrow: "Roblox-page-mentioned leads",
      title: "Codes to test next",
      description: "These codes are source-backed by the Roblox game description but still need an in-game redemption result and exact reward record.",
      reasonLabel: "Why pending",
      defaultReason: "In-game redemption result and exact reward quantity are not recorded yet.",
      statusLabels: { pending: "Pending", verified: "Verified", "not verified": "Not verified", "official-page-mentioned": "Official page mentioned" }
    },
    conflictMatrix: {
      eyebrow: "Claim conflict check",
      title: "Claims held back from active status",
      description: "Third-party guide pages may show extra active codes, Discord links, or reward quantities. This site keeps those claims out of the active table until stronger proof exists.",
      siteStatusLabel: "This site status",
      externalClaimsLabel: "External claim",
      reasonLabel: "Reason",
      notVerifiedLabel: "Held pending",
      defaultReason: "Not confirmed by the Roblox game page or an in-game test in this source pass."
    },
    verificationWorkflow: {
      eyebrow: "Verification workflow",
      title: "How this page promotes a code to active",
      cards: [
        { title: "1. Source check", list: ["Check the Roblox game page first.", "Use Muggle Academy community links only when they clearly point to official channels.", "Treat third-party pages as leads, not proof."] },
        { title: "2. In-game test", list: ["Redeem only inside the Wizard Alchemy game UI.", "Record code text, date, server state, and exact reward result.", "Do not use browser extensions, scripts, or code generators."] },
        { title: "3. Publish rule", list: ["Move a code to active only after source and in-game evidence agree.", "Do not invent race reroll counts or reward names.", "Keep expired and rejected claims separate."] }
      ]
    },
    redeemGuide: {
      eyebrow: "Redeem guide",
      title: "Safe redemption path",
      steps: [
        "Open the official Wizard Alchemy Roblox page.",
        "Launch the game from Roblox, not from a third-party tool.",
        "Look for a code, settings, rewards, or utility interface inside the game.",
        "Test RELEASE and WIZARD first because they are mentioned on the Roblox page.",
        "Record the exact result before changing this page from pending to active."
      ],
      note: "Never enter Roblox passwords, cookies, recovery codes, or session tokens into any Wizard Alchemy code site or tool."
    },
    sections: [
      {
        heading: "Current code verdict",
        body: ["RELEASE and WIZARD have the strongest public source signal because they are mentioned in the Roblox game description.", "MACHI is visible in competitor and third-party code lists, but this first version keeps it as a research lead rather than an active code."],
        list: ["Active table: empty until in-game test evidence exists.", "Pending table: RELEASE and WIZARD.", "Community leads: MACHI stays unverified.", "Reward quantities: not published until recorded in-game."]
      },
      {
        heading: "Why exact rewards are not listed yet",
        body: ["Several third-party pages show race reroll quantities, but copying that number without a recorded in-game test would create fake precision.", "This page will list exact rewards only after the redemption result is checked inside Wizard Alchemy."],
        list: ["No invented reroll counts.", "No copied Discord claims.", "No script or macro download links."]
      }
    ],
    faq: [
      { q: "Are RELEASE and WIZARD active Wizard Alchemy codes?", a: "They are mentioned by the Roblox game description, so this guide treats them as source-backed leads. They are not marked in-game verified until a redemption test is recorded." },
      { q: "Why is MACHI not in the active table?", a: "MACHI appears in third-party claims, but this page has not verified it from the Roblox game page or an in-game redemption result." },
      { q: "Why do other sites show exact race reroll rewards?", a: "They may have tested the codes or may be copying each other. This guide will not publish exact reward quantities until it records stronger proof." },
      { q: "Can a code tool redeem Wizard Alchemy codes for me?", a: "Do not use tools that ask for Roblox credentials, cookies, recovery codes, session tokens, browser extensions, or script downloads." }
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
    },
    "race-tier-list": {
      hero: {
        eyebrow: "Source-reported race ranking",
        h1: "Wizard Alchemy Race Tier List",
        lede: "This is a source-reported draft for Wizard Alchemy race rankings. It is not a final in-game verified tier list. Use it as a research checklist while race effects, reroll behavior, and build fit remain pending verification.",
        primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
        secondaryAction: { label: "Back home", href: localizedHref(locale, "") }
      },
      summaryCards: [
        { title: "Status", description: "Draft page. Rankings are source-reported and kept noindex until stronger evidence exists." },
        { title: "Best lead", description: "Thestrals is the strongest race lead from third-party tier data, not a site-verified final answer." },
        { title: "Do not fake stats", description: "No hidden multipliers, reroll odds, or exact race effects are invented on this page." }
      ],
      sections: [
        {
          heading: "How to read this race tier list",
          body: [
            "Race rankings in Wizard Alchemy are judgment-heavy. A race can look strong for farming, but weaker for boss fights or early progression.",
            "This draft uses third-party ranking signals as leads and rewrites them into a safer evidence-aware format. Treat every tier as pending until checked in-game."
          ],
          list: ["S tier means strongest source-reported lead.", "A tier means strong alternative, not guaranteed best.", "Lower tiers need more testing before being dismissed.", "Do not spend currency or rerolls based only on this draft."]
        },
        {
          heading: "Source-reported race tiers",
          body: ["The table below is a research draft. It should not be treated as an official or fully verified Wizard Alchemy ranking."],
          list: ["S tier lead: Thestrals.", "A tier leads: Stellar Ambassador, Fiendish Demon, Ice Crystal.", "B to D tier entries need more cross-source checks before this site publishes stronger advice."]
        },
        {
          heading: "Beginner recommendation",
          body: ["If you are new, do not chase a perfect race immediately. Learn the potion loop, combat timing, and map routes before spending heavily on rerolls."],
          list: ["Use codes only inside the Roblox game UI.", "Do not trust external race reroll tools.", "Record your current race, effect text, and test result before drawing conclusions."]
        },
        {
          heading: "What still needs verification",
          body: ["This page needs in-game screenshots, exact race effect text, and repeated testing before it should become a completed indexed page."],
          list: ["Exact race effects.", "Reroll odds.", "Best race by farming, bossing, and early game.", "Whether future updates change the ranking."]
        }
      ],
      relatedLinks: [
        { href: localizedHref(locale, "codes"), title: "Codes", description: "Check source-labeled code and race reroll claims." },
        { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Learn the verified early-game loop first." },
        { href: localizedHref(locale, "updates"), title: "Updates", description: "Watch for balance or race changes before trusting old rankings." }
      ],
      faq: [
        { q: "Is this Wizard Alchemy race tier list official?", a: "No. This is an independent fan guide and is not affiliated with Roblox Corporation or Muggle Academy." },
        { q: "Is Thestrals definitely the best race?", a: "Thestrals is the strongest source-reported lead in this draft, but this site has not fully verified every race effect in-game." },
        { q: "Should I use race rerolls immediately?", a: "Not based only on this draft. Wait until you understand the game loop and verify what your current race actually gives you." },
        { q: "Why is this page noindex?", a: "The page contains useful research text, but it is not ready for sitemap or footer promotion until more in-game verification exists." }
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

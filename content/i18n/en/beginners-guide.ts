// input: English Wizard Alchemy beginner guide requirements
// output: typed English beginner guide content object
// pos: English beginners-guide SEO content

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enBeginnersGuidePage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Beginner Guide | First Session, Codes & Safe Progression",
    description: "Wizard Alchemy beginner guide for first-session route, code caution, potion progression, combat basics, and safe Roblox account boundaries."
  },
  slug: "beginners-guide",
  hero: {
    eyebrow: "Beginner route",
    h1: "Wizard Alchemy Beginner Guide",
    lede: "Start with the verified game frame: collect ingredients, brew potions, unlock spells, upgrade power, and explore magical areas. This guide gives a safe first-session route without inventing race tiers, reward amounts, or build rankings.",
    primaryAction: { label: "Check codes", href: "/codes/" },
    secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
  },
  summaryCards: [
    {
      title: "First 10 minutes",
      description: "Learn the UI, collect basic materials, test potion flow, and avoid spending rare resources before the mechanics are verified."
    },
    {
      title: "Code caution",
      description: "RELEASE and WIZARD are Roblox-page-mentioned leads. Exact rewards and redemption UI still need an in-game test log."
    },
    {
      title: "No fake meta",
      description: "Race tiers, best elements, boss farms, and reroll priorities stay pending until stronger evidence exists."
    }
  ],
  sections: [
    {
      heading: "First-session route",
      body: [
        "Open Wizard Alchemy from the official Roblox game page and spend the first session learning the game UI instead of chasing third-party tier claims.",
        "Your first goal is to understand the basic loop shown in the Roblox description: gather resources, brew potions, unlock spells, upgrade power, and push into new areas."
      ],
      list: [
        "Launch from the official Roblox page.",
        "Find the basic menu, settings, inventory, spell, and reward interfaces.",
        "Collect ingredients before judging builds or races.",
        "Test potion effects inside the game before trusting outside tables.",
        "Record anything that looks like a code UI, but do not assume rewards before testing."
      ]
    },
    {
      heading: "Code and reroll warning",
      body: [
        "Competitor pages often show MACHI and exact race reroll rewards. Those can be useful research leads, but they are not enough to publish a verified active code table here.",
        "Use RELEASE and WIZARD first because they are mentioned in the Roblox game description, then record the exact reward result if the in-game UI accepts them."
      ],
      list: [
        "Do not spend rerolls just because a third-party page says a race is S-tier.",
        "Do not use external code generators or script tools.",
        "Do not publish reward quantities until they are recorded inside the game.",
        "Keep MACHI pending unless it is verified from a stronger source or an in-game redemption test."
      ]
    },
    {
      heading: "What to verify next",
      body: [
        "The useful beginner topics are clear, but most of them need direct game evidence before becoming final guide claims.",
        "This page should grow after in-game checks, not by copying race, element, or farming tables from competitor pages."
      ],
      list: [
        "Where the code redemption UI is located.",
        "Whether Settings, Utilities, or another menu handles code input.",
        "How potions affect early power progression.",
        "Which resources are common, rare, or bottlenecked.",
        "Whether parry, ascension, shards, races, or boss farming are core early-game mechanics."
      ]
    },
    {
      heading: "Account safety rules",
      body: [
        "Wizard Alchemy guide pages should never ask for Roblox credentials. Any page or tool asking for account secrets should be treated as unsafe.",
        "Safe guide content can explain where to click inside the game, but it should not require browser extensions, cookies, downloads, or script execution."
      ],
      list: [
        "Never enter Roblox password, cookie, session token, or recovery code.",
        "Avoid script downloads and macro files from comments or code pages.",
        "Redeem codes only inside Roblox game UI.",
        "Use official Roblox and developer-linked sources as the starting point."
      ]
    }
  ],
  relatedLinks: [
    { href: "/codes/", title: "Codes", description: "Review RELEASE, WIZARD, MACHI, and the current evidence status before redeeming anything." },
    { href: "/chest-locations/", title: "Chest Locations", description: "Follow the chest route checklist once you understand the early UI and safe movement." },
    { href: "/race-tier-list/", title: "Race Tier List", description: "Read the reroll cautions before spending scarce race reroll resources." },
    { href: "/potions/", title: "Potions Guide", description: "Use potion progression notes to plan ingredients, spell unlocks, and upgrades." },
    { href: "/updates/", title: "Updates", description: "Track verified public source changes before trusting patch or balance claims." },
    { href: "/", title: "Guide hub", description: "Return to the homepage for source status, pending topics, and research backlog." }
  ],
  faq: [
    {
      q: "What should I do first in Wizard Alchemy?",
      a: "Start from the official Roblox page, learn the UI, collect ingredients, test potion flow, and avoid spending rerolls or chasing race claims until the mechanics are verified."
    },
    {
      q: "Should I use RELEASE and WIZARD immediately?",
      a: "They are mentioned in the Roblox game description, so they are the first codes to test. Record the in-game result before treating the exact reward as verified."
    },
    {
      q: "Is MACHI safe to use?",
      a: "MACHI appears in third-party claims, but this site keeps it pending until stronger evidence or an in-game test confirms it."
    },
    {
      q: "Should beginners follow race tier lists now?",
      a: "Not yet. Race rankings and reroll priorities need verified game data before they should guide early decisions."
    }
  ]
};

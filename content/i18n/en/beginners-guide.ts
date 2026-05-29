// input: English Wizard Alchemy beginner guide requirements, page-level GSC query signals, and safety video IDs
// output: typed English beginner guide content object with tutorial, start-here navigation, first-session route checklist, defensive automation-tool guidance, and video references
// pos: English beginners-guide SEO content（更新规则：新手页标题、视频、H2 或内链调整需同步此文件与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enBeginnersGuidePage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Beginner Guide | Tutorial, Codes & Safe Progression",
    description: "Wizard Alchemy beginner guide with first-session tutorial, code checks, potion progression, update-aware route, and safe Roblox account boundaries."
  },
  slug: "beginners-guide",
  hero: {
    eyebrow: "Beginner route",
    h1: "Wizard Alchemy Beginner Guide",
    lede: "Start with the verified game frame: collect ingredients, brew potions, unlock spells, upgrade power, and explore magical areas. This guide gives a safe first-session tutorial without inventing race tiers, reward amounts, or build rankings.",
    primaryAction: { label: "Start First Session Route", href: "/beginners-guide/#wizard-alchemy-first-session-route" },
    secondaryAction: { label: "Check codes safely", href: "/codes/" }
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
      title: "Safety first",
      description: "Automation tools, downloads, and account-data requests are treated as unsafe for beginners."
    }
  ],
  videos: {
    eyebrow: "Safety video references",
    title: "Account Safety Video References",
    description: "These embedded YouTube videos are third-party references for safety awareness only. They are not endorsements of automation tools, downloads, or Roblox account-data requests.",
    items: [
      {
        id: "PyO9-bwz7TI",
        title: "Roblox safety reference for new players",
        note: "Use this as a general safety reference while reading the tool-warning section. Do not treat it as a recommendation to use any external tool."
      },
      {
        id: "wOJYyNhVlC4",
        title: "Roblox account-risk reference for beginners",
        note: "Use this as a second visual reference for account-risk awareness. This guide still recommends using only in-game UI and official Roblox pages."
      }
    ]
  },
  sections: [
    {
      heading: "Start Here",
      body: [
        "Use this page as a short route map, not a random collection of beginner notes. Start with the first-session route, confirm the checklist, then move to code safety, potions, updates, and account safety only when each step is clear.",
        "This order keeps the beginner guide focused on learning the game instead of chasing unverified rewards, race claims, or tool advice too early."
      ],
      list: [
        "1. Wizard Alchemy First Session Route: learn the UI and basic loop first.",
        "2. First Session Checklist: confirm inventory, spells, one potion test, code UI, and updates.",
        "3. What to Check Before Using Wizard Alchemy Codes: use code claims safely.",
        "4. Beginner Route: Ingredients, Potions, Spells, and Updates: continue after the first pass.",
        "5. Account safety rules: avoid unsafe tools and account-data requests."
      ]
    },
    {
      heading: "Wizard Alchemy Tutorial for New Players",
      body: [
        "A safe Wizard Alchemy tutorial starts with the official Roblox game page, not with a copied ranking table or a tool download. Spend the first session learning the UI, finding the inventory and spell areas, collecting easy ingredients, and brewing one potion at a time.",
        "The goal is to understand the basic loop before making irreversible decisions. Once you know how ingredients, potions, spells, and upgrades connect, you can compare codes, chest routes, potions, and race advice with less risk."
      ],
      list: [
        "Launch from the official Roblox page.",
        "Learn the basic menu, settings, inventory, spell, and reward interfaces.",
        "Collect ingredients before judging builds or races.",
        "Test potion effects inside the game before trusting outside tables.",
        "Check the Updates page before following old patch or route advice."
      ]
    },
    {
      heading: "Wizard Alchemy First Session Route",
      body: [
        "Open Wizard Alchemy from the official Roblox game page and use the first session as a route test, not as a race or build decision. The route is simple: inspect the UI, find where resources and rewards appear, collect basic ingredients, brew one potion, then check codes and updates only after you understand the menu.",
        "This first-session route exists to stop new players from wasting rerolls, trusting old update claims, or following unverified tool advice. Keep the run small, write down what you see, and only move to chest routes, potions, or race rankings after the basic loop feels clear."
      ],
      list: [
        "Step 1: Launch from the official Roblox page.",
        "Step 2: Find the menu, inventory, spell, reward, and settings areas.",
        "Step 3: Collect basic ingredients before judging builds or races.",
        "Step 4: Brew and test one potion, then note the visible effect.",
        "Step 5: Check the code UI, but do not assume reward amounts before testing.",
        "Step 6: Read the Updates page before following old route or patch advice.",
        "Step 7: Move to Chest Locations, Potions, or Race Tier List only after this first pass."
      ]
    },
    {
      heading: "First Session Checklist",
      body: [
        "Use this checklist during the first run. It is intentionally basic because a beginner guide should reduce confusion before it tries to optimize every route. If you cannot confirm one item inside the game, leave it pending instead of copying a confident claim from another page.",
        "The checklist also creates a clean path to the rest of the site: Codes for reward evidence, Updates for change tracking, Potions for brewing roles, Chest Locations for route planning, and Race Tier List for later reroll decisions."
      ],
      list: [
        "Find inventory: confirm where collected ingredients and items appear.",
        "Find spell area: confirm where spell unlocks or equipped skills are shown.",
        "Test one potion: avoid spending multiple materials before you understand the effect.",
        "Check code UI: use the Codes page only as an evidence guide, not as final reward proof.",
        "Read updates: avoid following outdated route, potion, or race advice.",
        "Avoid tools: keep the first session inside the Roblox game UI and official pages."
      ]
    },
    {
      heading: "Should Beginners Use Scripts, Macros, or Hub Tools?",
      body: [
        "No. Beginners should avoid scripts, macros, hub tools, downloads, browser add-ons, and any page that asks for Roblox account access. Even if a video or comment claims a tool is easy, it can still create account, device, or trust risk.",
        "This page mentions scripts and macros only to answer the safety question directly. It does not provide setup steps, download links, or automation recommendations. Use in-game UI, official Roblox pages, and developer-linked sources instead."
      ],
      list: [
        "Do not share Roblox login details with guide sites or tools.",
        "Do not download unknown files from comments or video descriptions.",
        "Do not use auto-farm or reward-claim tools.",
        "Redeem codes only inside the Roblox game UI.",
        "Use official Roblox and developer-linked sources as the starting point."
      ]
    },
    {
      heading: "What to Check Before Using Wizard Alchemy Codes",
      body: [
        "Codes are useful only when the evidence is clear. RELEASE and WIZARD are mentioned by the Roblox game description, so they are worth testing first. MACHI and exact reroll reward quantities appear in third-party claims, but this site keeps them pending until stronger proof exists.",
        "Before using any Wizard Alchemy code, check where the claim came from, whether the game UI accepts it, and what reward actually appears. Do not trust external code generators or pages that ask for account access."
      ],
      list: [
        "Check the Codes page before redeeming.",
        "Use the in-game code UI only.",
        "Record exact reward text before treating a reward as verified.",
        "Keep third-party claims separate from Roblox-page mentions.",
        "Avoid code tools that request downloads or account data."
      ]
    },
    {
      heading: "Beginner Route: Ingredients, Potions, Spells, and Updates",
      body: [
        "The clean beginner route is to collect ingredients, brew simple potions, test spell changes, upgrade power, then check whether an update changed the path. This prevents a new player from wasting rerolls or materials on advice that may be old or unsupported.",
        "Use the Potions Guide for role planning, the Chest Locations page for route checks, and the Updates page before trusting any new map, race, or code claim. Each page keeps source-reported information separate from verified in-game evidence."
      ],
      list: [
        "Ingredients: learn where easy materials appear before chasing rare routes.",
        "Potions: test one potion at a time and note the visible effect.",
        "Spells: verify unlocks from inside the game before copying tables.",
        "Updates: check whether recent changes affect codes, maps, races, or potions.",
        "Routes: use chest and potion pages as planning aids, not final proof."
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
        "Do not use external code generators or automation tools.",
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
        "Safe guide content can explain where to click inside the game, but it should not require browser add-ons, downloads, or external automation."
      ],
      list: [
        "Never share Roblox login details with a guide site.",
        "Avoid downloads from comments or code pages.",
        "Redeem codes only inside Roblox game UI.",
        "Use official Roblox and developer-linked sources as the starting point."
      ]
    }
  ],
  relatedLinks: [
    { href: "/codes/", title: "Codes", description: "Review RELEASE, WIZARD, MACHI, and the current evidence status before redeeming anything." },
    { href: "/updates/", title: "Updates", description: "Track verified public source changes before trusting patch or balance claims." },
    { href: "/chest-locations/", title: "Chest Locations", description: "Follow the chest route checklist once you understand the early UI and safe movement." },
    { href: "/potions/", title: "Potions Guide", description: "Use potion progression notes to plan ingredients, spell unlocks, and upgrades." },
    { href: "/race-tier-list/", title: "Race Tier List", description: "Read the reroll cautions before spending scarce race reroll resources." },
    { href: "/", title: "Guide hub", description: "Return to the homepage for source status, pending topics, and research backlog." }
  ],
  faq: [
    {
      q: "What should I do first in Wizard Alchemy?",
      a: "Start from the official Roblox page, learn the UI, collect ingredients, test potion flow, check updates, and avoid spending rerolls or chasing race claims until the mechanics are verified."
    },
    {
      q: "What is the best first route in Wizard Alchemy?",
      a: "The best first route is to inspect the UI, find inventory and spell areas, collect basic ingredients, test one potion, check the code UI, read updates, and only then move to chests, potions, or race decisions."
    },
    {
      q: "Why should new players avoid automation tools?",
      a: "Automation tools can create account risk, device risk, and bad learning habits. This guide does not provide tool tutorials and recommends using only the Roblox game UI and official pages."
    },
    {
      q: "Should beginners use Wizard Alchemy scripts or macros?",
      a: "No. Beginners should avoid scripts, macros, hub tools, downloads, browser add-ons, and account-data requests."
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

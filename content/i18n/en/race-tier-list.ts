// input: English Wizard Alchemy race tier list requirements and source-reported race leads
// output: typed English race tier list guide content with evidence labels, reroll caution, and original tier structure
// pos: English race-tier-list SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enRaceTierListPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Race Tier List | Best Races, Reroll Priority & Evidence Notes",
    description: "Independent Wizard Alchemy race tier list with source-reported S/A/B/C/D leads, reroll priority, beginner advice, and pending verification labels."
  },
  slug: "race-tier-list",
  hero: {
    eyebrow: "Source-reported race tier guide",
    h1: "Wizard Alchemy Race Tier List",
    lede: "This independent fan guide organizes Wizard Alchemy race ranking leads into a safer S/A/B/C/D framework. It helps players decide whether to save or spend rerolls, but it does not invent hidden stats, reroll odds, or final race effects without in-game proof.",
    primaryAction: { label: "Check code status", href: "/codes/" },
    secondaryAction: { label: "Potions guide", href: "/potions/" }
  },
  summaryCards: [
    {
      title: "Top source-reported lead",
      description: "Thestrals is treated as the strongest race lead, but this site still marks it as pending verification."
    },
    {
      title: "Strong alternatives",
      description: "Stellar Ambassador, Fiendish Demon, and Ice Crystal are useful A-tier research leads, not final tested rankings."
    },
    {
      title: "No fake odds",
      description: "This page does not invent reroll probabilities, hidden multipliers, race buffs, or exact stat values."
    }
  ],
  sections: [
    {
      heading: "Verification status",
      body: [
        "Race rankings in Wizard Alchemy are useful, but they are not the same as verified game data. A race can be real, a ranking can be popular, and the practical value can still change after updates, spell unlocks, or potion choices.",
        "This page uses source-reported tiers as a research map. Treat the list as a decision aid, not as an official or fully tested ranking."
      ],
      list: [
        "Race names and tier positions: source-reported leads.",
        "Exact race effects: pending verification.",
        "Reroll odds: not published.",
        "Best race by farming, bossing, or beginner progression: pending testing.",
        "Official status: this is an independent fan guide, not an official Wizard Alchemy page."
      ]
    },
    {
      heading: "S/A/B/C/D race tier framework",
      body: [
        "The tier framework below is written for practical decision-making. S tier means the strongest reported target. A tier means strong alternatives. Lower tiers should not be dismissed until their actual effects are checked in-game.",
        "Do not spend rare rerolls only because a tier table looks confident. First check whether the race supports your current spell, potion role, and progression stage."
      ],
      list: [
        "S tier lead: Thestrals. Strongest source-reported race target, pending in-game effect confirmation.",
        "A tier leads: Stellar Ambassador, Fiendish Demon, Ice Crystal. Strong alternatives, pending exact effect checks.",
        "B tier: playable or situational races should be tested against farming, bossing, and survival routes before being ranked lower.",
        "C tier: weak-looking races may still be useful early if rerolls are scarce or their effect fits your build.",
        "D tier: avoid calling any race truly bad until its tooltip, combat value, and update status are checked."
      ]
    },
    {
      heading: "Best race for beginners",
      body: [
        "The safest beginner advice is not to chase a perfect race immediately. Early players usually need to understand ingredient collection, potion brewing, spell unlocks, and basic combat before spending heavily on rerolls.",
        "If you already have a race that feels usable, keep it long enough to create a baseline. Compare how fast you farm, how often you die, and whether your spells feel easier to use."
      ],
      list: [
        "Keep your first usable race until you understand the game loop.",
        "Use codes only inside the Roblox game UI.",
        "Do not trust external reroll tools or script downloads.",
        "Record your current race name and visible effect before changing it.",
        "Only reroll aggressively after you know what role you are trying to improve."
      ]
    },
    {
      heading: "Reroll priority guide",
      body: [
        "Rerolls are valuable because a race choice may affect how you farm, fight, survive, or move through routes. The problem is that exact reroll rewards and race probabilities are not verified here yet.",
        "The clean rule: save rerolls unless the new race clearly improves your current bottleneck. If your bottleneck is material farming, a bossing-focused race may not help. If your bottleneck is survival, a damage-only race may still feel bad."
      ],
      list: [
        "High priority reroll: your current race does not help your main route, and you have enough rerolls to absorb bad outcomes.",
        "Medium priority reroll: you are stuck in progression and already understand your potion and spell path.",
        "Low priority reroll: you are still early, still learning the UI, or only have one or two reroll chances.",
        "Do not reroll based on unverified reward quantities from third-party code pages.",
        "Do not enter Roblox credentials, cookies, recovery codes, or session tokens into any reroll tool."
      ]
    },
    {
      heading: "How race choice connects to potions and chests",
      body: [
        "Race choice should not be judged in isolation. In Wizard Alchemy, potions, spell unlocks, material routes, chest routes, and combat comfort all affect whether a race feels strong.",
        "A race that speeds up one part of the game may be less useful if your real problem is missing materials, weak potions, or risky boss routes."
      ],
      list: [
        "Use the potions guide to understand whether your build needs damage, control, mobility, or survival.",
        "Use the chest locations guide to test whether route speed or survival matters more for your account.",
        "Use the updates page to watch for race balance changes.",
        "Do not treat a copied race table as final if your potion path or playstyle is different."
      ]
    },
    {
      heading: "Evidence needed to upgrade this page",
      body: [
        "The next improvement is not more confident wording. The next improvement is evidence. This page becomes stronger when each race has visible effect text, in-game screenshots, and repeated tests across real progression routes.",
        "Until those records exist, the honest version is better than a fake final meta."
      ],
      list: [
        "Race selection or reroll UI screenshot.",
        "Race tooltip showing exact effect text.",
        "Before and after comparison for damage, cooldown, movement, survival, or farming speed.",
        "Code redemption test proving whether any code grants race rerolls.",
        "Update note showing whether race balance changed."
      ]
    }
  ],
  relatedLinks: [
    { href: "/codes/", title: "Codes", description: "Check RELEASE, WIZARD, MACHI, and whether reroll rewards are verified." },
    { href: "/potions/", title: "Potions Guide", description: "Connect race choices with spell unlocks and potion roles." },
    { href: "/chest-locations/", title: "Chest Locations", description: "Use chest routes to decide whether mobility or survival matters more for your account." },
    { href: "/updates/", title: "Updates", description: "Watch for balance or race changes before trusting old rankings." }
  ],
  faq: [
    {
      q: "What is the best race in Wizard Alchemy?",
      a: "Thestrals is the strongest source-reported lead in this guide, but this site has not fully verified every race effect in-game. Treat it as the top research target, not an official final answer."
    },
    {
      q: "Which races are strong alternatives?",
      a: "Stellar Ambassador, Fiendish Demon, and Ice Crystal are treated as strong A-tier leads. Their exact value still needs visible race effect text and repeated play checks."
    },
    {
      q: "Should I reroll my race as a beginner?",
      a: "Usually no. Save rerolls until you understand potions, spells, material routes, and what your current race actually changes."
    },
    {
      q: "Does this page show reroll odds?",
      a: "No. Reroll probabilities are not published here because this site does not have verified odds or official drop-rate evidence."
    },
    {
      q: "Is this Wizard Alchemy race tier list official?",
      a: "No. This is an independent fan guide and is not affiliated with Roblox Corporation or Muggle Academy."
    }
  ]
};

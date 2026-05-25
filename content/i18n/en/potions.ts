// input: English Wizard Alchemy potions guide requirements
// output: typed English potions guide content with recipe and spell evidence boundaries
// pos: English potions SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enPotionsPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Potions Guide | Spells, Recipes & Materials",
    description: "Wizard Alchemy potions guide for spell unlocks, recipe status, material planning, beginner brewing route, and source-labeled progression notes."
  },
  slug: "potions",
  hero: {
    eyebrow: "Potion progression",
    h1: "Wizard Alchemy Potions Guide",
    lede: "Potions sit at the center of Wizard Alchemy progression: collect ingredients, brew potions, unlock spells, upgrade power, and explore. This guide explains the loop without inventing recipes, exact material counts, or untested spell rankings.",
    primaryAction: { label: "Beginner route", href: "/beginners-guide/" },
    secondaryAction: { label: "Chest route", href: "/chest-locations/" }
  },
  summaryCards: [
    {
      title: "Brew to unlock options",
      description: "The verified public description supports the broad potion and spell loop, while exact recipes remain pending."
    },
    {
      title: "Materials matter",
      description: "Material farming and chest routing should feed potion progression, but exact bottlenecks need in-game checks."
    },
    {
      title: "No fake recipe table",
      description: "Recipe names, counts, and spell effects are not published as facts until confirmed from game evidence."
    }
  ],
  sections: [
    {
      heading: "How potions fit progression",
      body: [
        "Wizard Alchemy describes a loop built around collecting ingredients, brewing potions, unlocking spells, upgrading power, and exploring magical areas. That is enough to create a beginner plan, but not enough to publish exact recipes.",
        "The practical goal is to use potions as the bridge between early collection and stronger exploration."
      ],
      list: [
        "Collect ingredients from safe nearby routes first.",
        "Brew basic potions before chasing rare materials.",
        "Watch which spells or effects unlock after brewing.",
        "Use upgrades to reach harder areas and better resources.",
        "Record the recipe, material count, and result before publishing it."
      ]
    },
    {
      heading: "Beginner brewing route",
      body: [
        "Beginners should avoid burning rare materials without knowing what a potion does. Start with repeatable resources, test one potion at a time, and write down the result.",
        "A clean test log is better than a confident copied recipe table."
      ],
      list: [
        "Run one short material route from the main hub.",
        "Brew only one new potion per test when possible.",
        "Record ingredients used, potion name, spell unlock, and power change.",
        "Repeat the route after upgrades to see whether new materials appear.",
        "Link chest notes to potion planning when a route consistently gives useful resources."
      ]
    },
    {
      heading: "Recipe status table",
      body: [
        "This page will use a pending recipe table until direct evidence exists. That keeps the page useful for planning without claiming false certainty.",
        "The table should be filled only after a recipe is observed in-game or documented by an official or developer-linked source."
      ],
      list: [
        "Basic potion: recipe pending, effect pending, source pending.",
        "Spell-unlock potion: recipe pending, unlocked spell pending, source pending.",
        "Power potion: recipe pending, upgrade effect pending, source pending.",
        "Rare material potion: recipe pending, bottleneck material pending, source pending.",
        "Best potion ranking: pending until repeated tests exist."
      ]
    },
    {
      heading: "Spells and materials to verify",
      body: [
        "The next useful content is a spell unlock map: which potion unlocks which spell, which material blocks progress, and which route finds that material reliably.",
        "Until that evidence exists, this guide should help players ask the right questions rather than pretend every answer is known."
      ],
      list: [
        "Which potions unlock new spells.",
        "Which materials are common, uncommon, rare, or area-gated.",
        "Whether chests provide potion materials consistently.",
        "Whether race choice changes potion or spell performance.",
        "Whether updates change recipes or unlock order."
      ]
    }
  ],
  relatedLinks: [
    { href: "/chest-locations/", title: "Chest Locations", description: "Use chest routing to test whether chests provide useful potion materials." },
    { href: "/race-tier-list/", title: "Race Tier List", description: "Keep race advice pending until potion and spell interactions are understood." },
    { href: "/updates/", title: "Updates", description: "Check whether a Wizard Alchemy update changes recipes, materials, or spell unlocks." }
  ],
  faq: [
    {
      q: "What do potions do in Wizard Alchemy?",
      a: "The public game description connects potions with spell unlocks, power upgrades, and exploration. Exact potion effects are still pending here until checked in-game."
    },
    {
      q: "Does this guide list Wizard Alchemy potion recipes?",
      a: "It uses pending recipe slots for now. Exact recipes will be published only after in-game or official evidence confirms ingredients and results."
    },
    {
      q: "What is the best potion in Wizard Alchemy?",
      a: "A best-potion ranking is not verified yet. It needs repeated tests across spell unlocks, material cost, and progression value."
    },
    {
      q: "Do chests help with potion materials?",
      a: "That is a strong research target, but this page does not claim a confirmed chest-to-material route until in-game checks are recorded."
    }
  ]
};

// input: English Wizard Alchemy potions guide requirements and competitor-inspired structure
// output: typed English potions guide content with evidence boundaries and original visual sections
// pos: English potions SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enPotionsPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Potions Guide | Best Roles, Spells & Brewing Notes",
    description: "Independent Wizard Alchemy potions guide with source-reported potion role groups, spell unlock notes, brewing cautions, and pending recipe verification."
  },
  slug: "potions",
  hero: {
    eyebrow: "Source-reported potion role guide",
    h1: "Wizard Alchemy Potions Guide",
    lede: "This independent fan guide explains Wizard Alchemy potions by role instead of pretending every recipe, spell effect, or material count is verified. Use it to understand damage, farming, control, mobility, and bossing potion leads while exact recipes remain pending verification.",
    primaryAction: { label: "Check codes", href: "/codes/" },
    secondaryAction: { label: "Chest route", href: "/chest-locations/" }
  },
  summaryCards: [
    {
      title: "Potion role map",
      description: "Original text-first visual structure: damage, farming, control, mobility, survival, and bossing roles."
    },
    {
      title: "No fake recipes",
      description: "This page does not invent ingredient counts, drop rates, cooldowns, or exact spell numbers."
    },
    {
      title: "Source-reported only",
      description: "Named potion and spell leads are treated as research signals until checked inside the Roblox game."
    }
  ],
  sections: [
    {
      heading: "Verification status",
      body: [
        "This page is not an official Wizard Alchemy recipe book. It is a source-reported potion planning guide built to help players understand what to test first.",
        "Exact recipes, material quantities, spell damage, cooldowns, and best-potion rankings stay pending until in-game evidence or official developer-linked evidence exists."
      ],
      list: [
        "Potion roles: usable as planning categories.",
        "Potion names from third-party pages: source-reported leads.",
        "Exact ingredients and quantities: pending verification.",
        "Best potion ranking: pending repeated testing."
      ]
    },
    {
      heading: "Potion role matrix",
      body: [
        "The safest way to read Wizard Alchemy potions is by role. A potion that is good for farming may not be the best bossing option, and a strong combat spell can still be inefficient if the material cost is high.",
        "Use this matrix as an original visual checklist before spending rare materials."
      ],
      list: [
        "Damage role: potions or spells that help clear enemies faster.",
        "Farming role: potions that may speed up material collection or repeated route runs.",
        "Control role: spells that may slow, block, freeze, or interrupt enemies.",
        "Mobility role: effects that may help reach routes, chests, islands, or vertical areas.",
        "Survival role: potions or spells that help players stay alive during boss or lava-area routes.",
        "Bossing role: high-value effects for longer fights, still pending direct testing."
      ]
    },
    {
      heading: "Source-reported potion leads",
      body: [
        "Some third-party tier data highlights potion and spell names such as Night Wraith Potion and Frost Thorns Potion as strong leads. This page does not copy ranking explanations or claim those are site-verified best choices.",
        "Treat named potions as a test queue: useful to investigate, not proof to spend everything immediately."
      ],
      list: [
        "Night Wraith Potion: source-reported high-tier lead, exact effect pending.",
        "Frost Thorns Potion: source-reported high-tier lead, exact effect pending.",
        "Other spell or potion names: add only after stronger source or in-game evidence exists.",
        "Do not publish exact damage, cooldown, recipe, or material count without proof."
      ]
    },
    {
      heading: "Beginner brewing path",
      body: [
        "Beginners should not chase a copied best-potion table before they understand the core loop. The safer path is to collect repeatable materials, brew one test potion at a time, and write down what changes.",
        "This protects you from wasting rare materials on a potion that looks strong in a list but does not fit your current progression."
      ],
      list: [
        "Start with easy material routes near the main area.",
        "Brew one new potion per test when possible.",
        "Record potion name, ingredients used, visible effect, spell unlock, and power change.",
        "Use chest routes only as a material support system, not as guaranteed recipe proof.",
        "Re-check recipes after updates because potion balance can change."
      ]
    },
    {
      heading: "Recipe table rules",
      body: [
        "A potion guide becomes dangerous when it publishes confident recipes without proof. This site will only turn recipe slots into final rows when the evidence is strong enough.",
        "Until then, the page uses role cards and pending slots instead of fake precision."
      ],
      list: [
        "Recipe observed in-game: can move toward verified.",
        "Recipe from official or developer-linked source: can be source-backed.",
        "Recipe from third-party page only: keep source-reported.",
        "Recipe copied across multiple weak pages: keep pending.",
        "Recipe with missing material count: do not publish as complete."
      ]
    },
    {
      heading: "Original visual plan without stolen images",
      body: [
        "This page does not need copied screenshots to become useful. The better image replacement is an original HTML/CSS potion board that search engines can read and users can scan.",
        "The visual plan is text-based: each role card works like an image but remains editable, indexable, and free of copyright risk."
      ],
      list: [
        "Create a Potion Role Board: Damage, Farming, Control, Mobility, Survival, Bossing.",
        "Create a Verification Badge Row: Verified, Source-reported, Pending.",
        "Create a Beginner Brewing Flow: collect, brew, test, record, repeat.",
        "Avoid AI-generated fake Roblox screenshots.",
        "Avoid screenshots or cropped images from competitor pages or YouTube videos."
      ]
    },
    {
      heading: "What still needs verification",
      body: [
        "The next version should turn this guide from planning content into verified gameplay content. That requires a small test log, not more copied text.",
        "The highest-value missing data is the link between potion, recipe, material route, spell unlock, and practical use case."
      ],
      list: [
        "Exact potion recipes and material counts.",
        "Which potions unlock which spells.",
        "Which potion role is best for farming, bossing, and beginner progression.",
        "Whether chest routes provide useful potion materials consistently.",
        "Whether race choice changes potion or spell performance."
      ]
    }
  ],
  relatedLinks: [
    { href: "/codes/", title: "Codes", description: "Check source-labeled code and reward claims before spending rerolls or resources." },
    { href: "/chest-locations/", title: "Chest Locations", description: "Use chest routes as material research support, not guaranteed recipe proof." },
    { href: "/updates/", title: "Updates", description: "Watch for updates that may change recipes, spell balance, or material routes." }
  ],
  faq: [
    {
      q: "What are the best potions in Wizard Alchemy?",
      a: "This page treats best-potion claims as pending. Some third-party tier data highlights named potion leads, but this site does not mark a final best potion until effects, material cost, and use cases are verified."
    },
    {
      q: "Does this guide list exact Wizard Alchemy potion recipes?",
      a: "Not yet. Exact recipes, ingredient counts, and material requirements stay pending until they are checked in-game or supported by official or developer-linked evidence."
    },
    {
      q: "Why use potion roles instead of a final tier list?",
      a: "Potion value depends on the situation. Farming, bossing, mobility, and survival can favor different choices, so a role guide is safer than a fake final ranking."
    },
    {
      q: "Can I use screenshots from other guide sites for potion images?",
      a: "No. This page uses original text-based visual sections instead of copied images, cropped YouTube frames, or AI-generated fake game screenshots."
    },
    {
      q: "Do chests help with potion materials?",
      a: "Possibly, but this guide does not claim a confirmed chest-to-material route until in-game checks are recorded."
    }
  ]
};

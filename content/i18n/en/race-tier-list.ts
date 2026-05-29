// input: English Wizard Alchemy tier list requirements and Beebom-reported tier leads
// output: typed English tier list guide content with source labels, reroll caution, and original multi-category structure
// pos: English race-tier-list SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enRaceTierListPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Tier List | Best Races, Potions, Wands & Gear",
    description: "Independent Wizard Alchemy tier list covering source-reported races, potions, wands, robes, hats, reroll priority, and verification notes."
  },
  slug: "race-tier-list",
  hero: {
    eyebrow: "Source-reported tier guide",
    h1: "Wizard Alchemy Tier List",
    lede: "This independent fan guide organizes Wizard Alchemy tier list leads for races, potions, wands, robes, and hats. The rankings are useful for planning, but they are not treated as official or fully tested until in-game effects, rewards, and update status are verified.",
    primaryAction: { label: "Check code status", href: "/codes/" },
    secondaryAction: { label: "Potions guide", href: "/potions/" }
  },
  summaryCards: [
    {
      title: "Top race lead",
      description: "Thestrals is treated as the strongest source-reported race target, pending in-game effect checks."
    },
    {
      title: "Top potion leads",
      description: "Night Wraith and Frost Thorns are treated as S-tier potion leads, but this site has not verified every damage or cooldown claim."
    },
    {
      title: "No fake meta",
      description: "This page does not invent hidden stats, reroll odds, reward quantities, or final build rankings."
    }
  ],
  sections: [
    {
      heading: "Verification status",
      body: [
        "Tier lists are useful only when the evidence label is clear. Beebom reports a full Wizard Alchemy tier list across races, potions, wands, robes, and hats, but this page treats those rankings as source-reported leads, not as this site's independent test results.",
        "Use this page as a planning map. Before spending rerolls, materials, or gold, confirm the current in-game tooltip, update status, and how the item feels in your actual farming or boss route."
      ],
      list: [
        "Tier positions: Beebom-reported / source-reported leads.",
        "Exact stats and multipliers: pending verification.",
        "Reroll odds: not published here.",
        "Potion damage, cooldown, and refinement value: pending in-game checks.",
        "Official status: this is an independent fan guide, not an official Wizard Alchemy page."
      ]
    },
    {
      heading: "Wizard Alchemy Races Tier List",
      body: [
        "Race choice can affect damage, movement, survival, and route comfort. The race tiers below follow source-reported ranking leads and should be used as reroll guidance, not as guaranteed final meta.",
        "Do not spend rare rerolls only because a tier table looks confident. First check whether the race supports your potion path and current progression bottleneck."
      ],
      list: [
        "S tier: Thestrals. Best reported all-around target, pending exact effect confirmation.",
        "A tier: Stellar Ambassador, Fiendish Demon, Ice Crystal. Strong reported alternatives for general, fire, or ice-focused play.",
        "B tier: Death Eater, Werewolf. Playable or situational leads that may fit aggressive or balanced routes.",
        "C tier: Undead, Tree Spirit, Elf. Lower reported priority, but still worth testing if rerolls are scarce.",
        "D tier: Human. Lowest reported priority because no strong passive value is currently reported."
      ]
    },
    {
      heading: "Wizard Alchemy Potions and Spells Tier List",
      body: [
        "Potions matter because brewed potions become the spells you use for farming, damage, control, and survival. Beebom reports Night Wraith and Frost Thorns as top potion leads, while several easier options may still be better for early progression.",
        "This page does not verify exact damage numbers. Treat these tiers as route planning until you can compare cooldown, range, refinement cost, and farming speed in-game."
      ],
      list: [
        "S tier: Night Wraith Potion, Frost Thorns Potion. Reported top-end damage, range, and farming leads.",
        "A tier: Dragon Breath Potion, Radiant Sword Potion, Tornado Potion, Earth Spike Potion. Reported strong options for burst, farming, or scaling.",
        "B tier: Lotus Bloom Potion, Fire Arrow Potion, Wind Blade Potion, Meteorite Potion. Reported usable progression options, especially before late-game refinement.",
        "C tier: Ice Spike Potion, Earth Shield Potion, Ice Turtle Potion. Reported lower-pressure or defensive options.",
        "D tier: Lithe Potion, Rock Blast Potion. Reported low priority compared with combat-focused spells."
      ]
    },
    {
      heading: "Wizard Alchemy Wands Tier List",
      body: [
        "Wands affect combat flow through attack value, cooldown comfort, and upgrade cost. The clean question is not only which wand is strongest, but which wand gives the best value for your current farming stage.",
        "Use the list below as a source-reported upgrade map. Do not treat price, critical value, or cooldown claims as verified here until checked in-game."
      ],
      list: [
        "S tier: Ember Staff Wand, Ice Star Wand. Reported top wand leads for damage or cooldown-focused play.",
        "A tier: Demon Trident Wand. Reported strong value option before the most expensive upgrades.",
        "B tier: Azure Wand. Reported early progression option with usable attack value.",
        "C tier: Wingbird Wand. Reported beginner option that may be replaced quickly.",
        "D tier: Twisted Wand. Reported starter-level option with low long-term value."
      ]
    },
    {
      heading: "Wizard Alchemy Robes and Hats Tier List",
      body: [
        "Robes and hats are more defensive than flashy. They matter when your main problem is dying during farming routes or boss attempts, not when your damage spell is already too weak.",
        "Because the reported gear pool is small, this section keeps the ranking simple and marks it as source-reported. Confirm HP values and unlock cost inside the game before treating any gear as final."
      ],
      list: [
        "Robes A tier: Starlight Robe, Golden Reverie Robe. Reported high-value survivability options.",
        "Robes B tier: Starmoon Robe. Reported usable early or mid-game robe option.",
        "Hats A tier: Golden Reverie Hat, Starlight Hat. Reported strongest defensive hat leads.",
        "Hats B tier: Starmoon Hat. Reported budget or early progression hat option.",
        "Verification needed: exact HP values, prices, unlock paths, and whether updates changed the gear list."
      ]
    },
    {
      heading: "Best picks by player goal",
      body: [
        "A tier list is easier to use when it is tied to a player goal. A beginner does not need the same target as a late-game grinder, and a defensive player does not need the same setup as a pure damage player.",
        "Use the goal map below to choose what to test first. It is intentionally conservative because the page is not claiming independent stat verification yet."
      ],
      list: [
        "Best reported race target: Thestrals, with Stellar Ambassador, Fiendish Demon, and Ice Crystal as strong alternatives.",
        "Best reported farming potion lead: Frost Thorns Potion because it is reported as strong, ranged, and practical.",
        "Best reported late-game damage potion lead: Night Wraith Potion, pending grind and refinement checks.",
        "Best reported wand damage lead: Ember Staff Wand.",
        "Best reported cooldown wand lead: Ice Star Wand.",
        "Best reported beginner value direction: test practical B/A-tier options before wasting rare rerolls or materials."
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
      heading: "How tier choices connect to codes, potions, and chests",
      body: [
        "Tier choices should not be judged in isolation. In Wizard Alchemy, codes, potions, spell unlocks, material routes, chest routes, and combat comfort all affect whether a race or item feels strong.",
        "A race that looks strong may feel weak if you lack the right spell. A potion that looks strong may be hard to refine. A wand that looks expensive may not be the best upgrade if your current bottleneck is survival."
      ],
      list: [
        "Use the codes page to check whether reported reroll rewards are verified or only source-reported.",
        "Use the potions guide to understand whether your build needs damage, control, mobility, or survival.",
        "Use the chest locations guide to test whether route speed or survival matters more for your account.",
        "Use the updates page to watch for balance, map, or gear changes.",
        "Do not treat a copied tier table as final if your potion path or playstyle is different."
      ]
    },
    {
      heading: "Evidence needed to upgrade this page",
      body: [
        "The next improvement is not more confident wording. The next improvement is evidence. This page becomes stronger when each race, potion, wand, robe, and hat has visible effect text, in-game screenshots, and repeated tests across real progression routes.",
        "Until those records exist, the honest version is better than a fake final meta. A source-reported tier list can help players plan, but it should not pretend to be a fully verified database."
      ],
      list: [
        "Race selection or reroll UI screenshot.",
        "Potion tooltip or spell result showing actual effect text.",
        "Wand, robe, and hat stat screenshots.",
        "Before and after comparison for damage, cooldown, movement, survival, or farming speed.",
        "Code redemption test proving whether any code grants race rerolls.",
        "Update note showing whether balance changed."
      ]
    }
  ],
  relatedLinks: [
    { href: "/codes/", title: "Codes", description: "Check RELEASE, WIZARD, MACHI, and whether reroll rewards are verified or only source-reported." },
    { href: "/potions/", title: "Potions Guide", description: "Connect potion choices with spell unlocks, materials, and progression roles." },
    { href: "/chest-locations/", title: "Chest Locations", description: "Use chest routes to decide whether mobility or survival matters more for your account." },
    { href: "/updates/", title: "Updates", description: "Watch for balance, race, potion, wand, robe, or hat changes before trusting old rankings." },
    { href: "/beginners-guide/", title: "Beginner Guide", description: "Learn the first-session route before spending rerolls, materials, or gold." }
  ],
  faq: [
    {
      q: "What is the best race in Wizard Alchemy?",
      a: "Thestrals is the strongest source-reported race lead in this guide, but this site has not fully verified every race effect in-game. Treat it as the top research target, not an official final answer."
    },
    {
      q: "What is the best potion in Wizard Alchemy?",
      a: "Night Wraith Potion and Frost Thorns Potion are treated as S-tier source-reported leads. Frost Thorns may be easier to test for farming, while Night Wraith is reported as a high-end damage option."
    },
    {
      q: "What is the best wand in Wizard Alchemy?",
      a: "Ember Staff Wand and Ice Star Wand are treated as S-tier source-reported wand leads. Ember Staff is reported as a damage-focused option, while Ice Star is reported as a cooldown-focused option."
    },
    {
      q: "Should beginners follow this tier list exactly?",
      a: "No. Beginners should first learn ingredients, potions, spells, codes, and routes. Use this tier list as a planning map, not as a reason to waste scarce rerolls or materials."
    },
    {
      q: "Is this Wizard Alchemy tier list official?",
      a: "No. This is an independent fan guide and is not affiliated with Roblox Corporation or Muggle Academy. The tier leads are source-reported until verified in-game."
    }
  ]
};

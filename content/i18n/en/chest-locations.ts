// input: English Wizard Alchemy chest locations requirements
// output: typed English chest locations guide content with evidence boundaries
// pos: English chest-locations SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enChestLocationsPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Chest Locations | All 10 Chests Route",
    description: "Wizard Alchemy chest locations guide with an all 10 chests route, hidden chest notes, respawn status, and source-labeled farming cautions."
  },
  slug: "chest-locations",
  hero: {
    eyebrow: "Chest route",
    h1: "Wizard Alchemy Chest Locations",
    lede: "Use this Wizard Alchemy chest locations page as a route-first checklist. The public research signal says players look for all 10 chests, hidden chest notes, and respawn timing, but this guide keeps exact coordinates pending until screenshot proof or an in-game route log is added.",
    primaryAction: { label: "Start beginner route", href: "/beginners-guide/" },
    secondaryAction: { label: "Check updates", href: "/updates/" }
  },
  summaryCards: [
    {
      title: "Route before coordinates",
      description: "The first version gives a practical route order and landmark checklist without inventing exact chest coordinates."
    },
    {
      title: "Hidden chest caution",
      description: "Hidden chest claims are useful leads, but they stay labeled pending until the location is confirmed in-game."
    },
    {
      title: "Respawn not verified",
      description: "Chest respawn time is a high-demand query, but exact minutes are not published without a timed test."
    }
  ],
  sections: [
    {
      heading: "All 10 chests route plan",
      body: [
        "The safest first route is a loop, not a coordinate dump. Start from the spawn or main safe area, clear nearby low-risk landmarks, move outward into new magical areas, then return to the hub after the final outer check.",
        "This page does not claim exact coordinates yet. It gives a route structure that can be updated with screenshots after an in-game pass confirms each chest."
      ],
      list: [
        "Step 1: start from the main spawn or nearest hub landmark.",
        "Step 2: check obvious building corners, stair landings, and potion-related rooms first.",
        "Step 3: move to outer paths only after nearby chests are cleared.",
        "Step 4: mark any chest near enemies or hazards as a later pickup.",
        "Step 5: return to the hub and repeat only after respawn timing is tested."
      ]
    },
    {
      heading: "Route table to fill during testing",
      body: [
        "Use this table format while checking the game. It prevents fake precision because every chest needs a landmark, reach note, danger note, and evidence status before it becomes final.",
        "A screenshot should be added before any exact route claim is treated as verified."
      ],
      list: [
        "Chest 1: hub-adjacent landmark, status pending screenshot.",
        "Chest 2: potion or crafting area landmark, status pending screenshot.",
        "Chest 3: first outer path landmark, status pending screenshot.",
        "Chest 4: elevated or stair landmark, status pending screenshot.",
        "Chest 5: enemy-adjacent landmark, status pending screenshot.",
        "Chest 6-10: keep as pending route slots until checked in-game."
      ]
    },
    {
      heading: "Hidden chest and danger notes",
      body: [
        "Hidden chest pages often rank because players miss one or two pickups. That demand is real, but a hidden chest claim can be wrong if it was copied after an update or recorded on a different game version.",
        "For now, hidden chest notes should describe where to look broadly: behind large landmarks, around dead ends, under stairs, inside side rooms, and near path turns."
      ],
      list: [
        "Do not call a chest hidden unless the route log explains why players miss it.",
        "Do not publish a dangerous shortcut unless the enemy or hazard nearby is known.",
        "Do not use scripts, macros, or auto farm tools to discover chest paths.",
        "Add screenshots later so the route can earn links instead of copying competitor text."
      ]
    },
    {
      heading: "Chest farming loop",
      body: [
        "A farming loop should minimize backtracking. Clear easy chests first, skip risky combat-adjacent chests if your build is weak, then return after upgrades or potion unlocks make the route safer.",
        "Exact respawn time is still pending. A useful test needs a start time, pickup time, return time, server state, and whether the chest reappears after leaving the area."
      ],
      list: [
        "Begin with low-risk nearby chests.",
        "Save enemy-heavy chests for after power upgrades.",
        "Record respawn tests in minutes instead of guessing.",
        "Treat server-hop claims as unverified unless tested."
      ]
    }
  ],
  relatedLinks: [
    { href: "/beginners-guide/", title: "Beginner Guide", description: "Learn the basic collection, potion, spell, and upgrade loop before routing chest farms." },
    { href: "/potions/", title: "Potions Guide", description: "Plan which potion unlocks or materials may affect safer chest routes." },
    { href: "/updates/", title: "Updates", description: "Check whether route or respawn claims changed after a new Wizard Alchemy update." }
  ],
  faq: [
    {
      q: "Where are all 10 chests in Wizard Alchemy?",
      a: "This first version gives a route checklist but keeps exact chest locations pending until an in-game screenshot route is recorded."
    },
    {
      q: "Does Wizard Alchemy have hidden chests?",
      a: "Hidden chest demand appears in competitor research, but this page does not mark any exact hidden chest verified until location proof is added."
    },
    {
      q: "What is the Wizard Alchemy chest respawn time?",
      a: "The exact respawn time is not verified here yet. It needs a timed in-game test before minutes are published."
    },
    {
      q: "Can I use auto farm scripts for chests?",
      a: "No. This guide does not provide scripts, macros, downloads, or auto farm instructions."
    }
  ]
};

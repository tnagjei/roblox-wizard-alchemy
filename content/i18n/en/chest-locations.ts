// input: English Wizard Alchemy chest locations requirements and video reference IDs
// output: typed English chest locations guide content with evidence boundaries and embedded video references
// pos: English chest-locations SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enChestLocationsPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Chest Locations Guide | World 1 & World 2 Route",
    description: "Video-assisted Wizard Alchemy chest locations guide with source-reported World 1 and World 2 routes, opening notes, and verification cautions."
  },
  slug: "chest-locations",
  hero: {
    eyebrow: "Video-assisted chest route draft",
    h1: "Wizard Alchemy Chest Locations Guide",
    lede: "This independent fan guide organizes source-reported Wizard Alchemy chest locations into a practical World 1 and World 2 route. The page uses third-party embedded videos as visual references, but it does not claim every chest spot, respawn timer, or reward has been fully verified by this site.",
    primaryAction: { label: "Check codes", href: "/codes/" },
    secondaryAction: { label: "Back home", href: "/" }
  },
  summaryCards: [
    {
      title: "Status",
      description: "Source-reported and video-assisted. Kept noindex until stronger in-game verification exists."
    },
    {
      title: "Route split",
      description: "Current route draft covers 10 World 1 chest leads and 11 World 2 chest leads."
    },
    {
      title: "No copied images",
      description: "This page does not use Beebom images, YouTube screenshots, or AI-generated fake game screenshots."
    }
  ],
  videos: {
    eyebrow: "Video references",
    title: "Video-assisted chest route checks",
    description: "These embedded YouTube videos are third-party visual references. They help players compare landmarks, but they do not make every chest spot fully verified by this site.",
    items: [
      {
        id: "jRwxytBiVcY",
        title: "Wizard Alchemy chest route video reference 1",
        note: "Use this as a visual landmark aid while following the written route. Do not treat it as this site's full verification log."
      },
      {
        id: "oYwP4rmLdLc",
        title: "Wizard Alchemy chest route video reference 2",
        note: "Use this as a secondary reference if the first video does not show the area you need clearly."
      }
    ]
  },
  sections: [
    {
      heading: "Verification status",
      body: [
        "This page is not an official Wizard Alchemy map. It is a source-reported route draft built for players who want a checklist before this site can collect its own screenshots.",
        "Chest count, exact route details, respawn timing, and reward claims remain pending until checked inside the Roblox game. The embedded videos are supporting references, not proof owned by this site."
      ],
      list: [
        "Route list: source-reported.",
        "Videos: third-party embedded references.",
        "Screenshots: not added yet.",
        "Rewards and respawn timer: pending verification."
      ]
    },
    {
      heading: "Quick route summary",
      body: [
        "The route draft is split into World 1 and World 2. Start with World 1 if you are new, because the landmarks are easier to read and the route loops around spawn, river, cave, beach, lighthouse, and treehouse areas."
      ],
      list: [
        "World 1: 10 source-reported chest leads.",
        "World 2: 11 source-reported chest leads.",
        "Best use: follow the written route while comparing landmarks in the embedded videos."
      ]
    },
    {
      heading: "World 1 chest route",
      body: [
        "World 1 should be treated as the learning loop. Move from spawn outward, clear the cave side, then finish through the beach and treehouse route."
      ],
      list: [
        "Behind Spawn: turn around after spawning and inspect the shore-side area near the potion brewing and mushroom landmarks.",
        "Spawn River: follow the nearby river toward the first farming area and check the rock edges beside the water.",
        "First Miner Cave: enter the miner cave route and inspect the cave side near the miner path and barrier area.",
        "Secret Cave: continue inside the cave route and look for a hidden wall-side passage. This spot needs in-game confirmation because hidden paths can change.",
        "Miner Cave Mountain: leave the cave and climb toward the nearby mountain top to inspect upper ledges around the cave area.",
        "Goblin Campfire: follow the river toward its end and check the goblin campfire area near the mountain side.",
        "Traveller Tent: return to the main road toward the beach and inspect the back side of the traveller tent.",
        "Dwarf King Throne: move to the beach-side boss throne area and check behind nearby rock cover.",
        "Behind Lighthouse: circle behind the beach lighthouse and look back toward the main island direction.",
        "Treehouse: return to the central island and check near the large treehouse door and platform edges."
      ]
    },
    {
      heading: "World 2 chest route",
      body: [
        "World 2 is more vertical and more dangerous. Expect lava routes, waterfall routes, boss-side checks, and island edges. Movement tools may help, but this page does not claim they are required."
      ],
      list: [
        "Sea of Oblivion Spawn: start near the World 2 spawn and check the mountain area close to the alchemy table.",
        "Enchantment Area: move toward the enchantment table route and inspect the upper-right side around the elevated area.",
        "Small Volcano Triple Chest: return toward the main island and check the small volcano area, which is source-reported as a three-chest cluster.",
        "Top of Waterfall Arch: climb toward the arch above the waterfall and inspect the top before dropping down.",
        "Behind the Behemoth: enter the lava boss route and inspect the cliff and wall-side areas behind the Behemoth zone.",
        "Lava Stream: check the lava stream near the Axe Orc route while watching enemy and terrain hazards.",
        "Magma Hat Platform: move from the boss route toward the lava wizard hat landmark and inspect the platform and moving-rock side.",
        "Mutant Axe Orc Island: look for the isolated island route near the Mutant Axe Orc area and check the smaller land section.",
        "Right-Side Magma House: from spawn, take the right-side route instead of going straight to the volcano and check the house near magma.",
        "Waterfall Cave: enter the waterfall cave, check the inner right side, then follow the left exit route and inspect the rock cavity.",
        "Left of Volcano Beach: finish by moving to the beach left of the volcano and checking near the coconut tree landmark."
      ]
    },
    {
      heading: "Best route order",
      body: [
        "For a first pass, do not jump randomly between islands. Use one loop per world and write down which spots actually contain a chest in your server."
      ],
      list: [
        "World 1 order: Spawn back, river, miner cave, secret cave, mountain, goblin campfire, traveller tent, Dwarf King throne, lighthouse, treehouse.",
        "World 2 order: spawn mountain, enchantment area, small volcano, waterfall arch, Behemoth route, lava stream, magma hat, Mutant Axe Orc island, right-side magma house, waterfall cave, volcano-left beach.",
        "If a chest is missing, note the server time and return later instead of assuming the route is wrong."
      ]
    },
    {
      heading: "How to open chests",
      body: [
        "Walk close to a chest and use the in-game interaction prompt when it appears. Keep inventory space available before opening because reward handling is not fully documented by this site yet."
      ],
      list: [
        "Open chests only inside the Roblox game UI.",
        "Do not use chest finder scripts or browser tools.",
        "Do not enter Roblox passwords, cookies, recovery codes, or session tokens anywhere.",
        "Record any reward result before treating it as verified data."
      ]
    }
  ],
  relatedLinks: [
    { href: "/codes/", title: "Codes", description: "Check source-labeled code status before testing race reroll or reward claims." },
    { href: "/beginners-guide/", title: "Beginner Guide", description: "Learn the basic game loop before running long chest routes." },
    { href: "/updates/", title: "Updates", description: "Watch for map or route changes that could move chest locations." }
  ],
  faq: [
    {
      q: "Is this Wizard Alchemy chest locations page fully verified?",
      a: "No. It is a source-reported and video-assisted draft. The page does not claim every spot has been verified by this site."
    },
    {
      q: "Why does this page use videos instead of screenshots?",
      a: "This page avoids copied images and does not yet have original in-game screenshots. Embedded videos provide visual reference while the written route remains clearly marked as source-reported."
    },
    {
      q: "How many Wizard Alchemy chest spots are listed here?",
      a: "The current draft lists 21 source-reported chest leads: 10 in World 1 and 11 in World 2."
    },
    {
      q: "How often do chests respawn?",
      a: "Some third-party sources report fixed respawn timing, but this site has not verified the timer. Treat respawn timing as pending verification."
    },
    {
      q: "What rewards do chests give?",
      a: "This page does not publish exact reward quantities, drop rates, or guaranteed items without in-game proof."
    }
  ]
};

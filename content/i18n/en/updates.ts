// input: English Wizard Alchemy updates page requirements and week-1 GSC update query signal
// output: typed English updates content object focused on update intent, source tracking, and safe patch verification
// pos: English updates SEO content（更新规则：更新页标题、首屏或内链调整需同步此文件与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enUpdatesPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Update Guide | New Update, Codes & Patch Tracker",
    description: "Wizard Alchemy update guide for Roblox players tracking new update signals, patch claims, code changes, Muggle Academy sources, and pending verification notes."
  },
  slug: "updates",
  hero: {
    eyebrow: "Update guide and source tracker",
    h1: "Wizard Alchemy Update Guide",
    lede: "Track Wizard Alchemy updates without mixing facts with rumors. This page follows the Roblox game page, Muggle Academy source signals, code mentions, and third-party patch claims, while keeping unverified rewards, Discord links, race changes, and potion changes clearly pending.",
    primaryAction: { label: "Check codes", href: "/codes/" },
    secondaryAction: { label: "Beginner guide", href: "/beginners-guide/" }
  },
  summaryCards: [
    {
      title: "Update signal is strong",
      description: "Search data shows Wizard Alchemy update intent is one of the strongest early signals for this site."
    },
    {
      title: "Patch claims need proof",
      description: "New maps, codes, races, potions, and balance claims stay pending until tied to a stronger source or in-game check."
    },
    {
      title: "Codes tracked carefully",
      description: "RELEASE and WIZARD remain source-backed leads. Exact rewards and MACHI claims still need in-game evidence."
    }
  ],
  sections: [
    {
      heading: "Current update snapshot",
      body: [
        "The safest public baseline is still the official Roblox game page. It confirms Wizard Alchemy as a released Roblox wizard RPG by Muggle Academy, but it does not provide a complete public patch log in this site pass.",
        "Use this page to separate update facts from research leads. A claim can be useful for research without being treated as a verified update."
      ],
      list: [
        "Verified public source: Roblox game page.",
        "Developer attribution: Muggle Academy.",
        "Gameplay frame: ingredients, potions, spells, power, and magical exploration.",
        "Full changelog: pending.",
        "Official Discord or Trello: pending until developer-linked proof exists."
      ]
    },
    {
      heading: "What counts as a Wizard Alchemy update here",
      body: [
        "This page records an update only when the claim has a clear source path. Third-party guides and videos can create a research task, but they do not automatically become update facts.",
        "The goal is to help players follow changes without publishing fake patch notes."
      ],
      list: [
        "Roblox description changes can be recorded as source-backed updates.",
        "Developer-linked posts can be recorded if the source path is clear.",
        "In-game UI changes can be recorded after a check is logged.",
        "Third-party claims stay source-reported until verified.",
        "Exact rewards, recipes, race effects, and spawn routes need extra proof."
      ]
    },
    {
      heading: "Code update policy",
      body: [
        "Code changes are high-risk because many Roblox guide pages copy each other. This site will not mark a code as fully active until source evidence and in-game redemption evidence agree.",
        "RELEASE and WIZARD are currently treated as source-backed leads because they appear in the Roblox description. MACHI remains a third-party research lead."
      ],
      list: [
        "Move to pending when a source mentions a code.",
        "Move to active only after in-game redemption is recorded.",
        "Do not publish exact rewards without an in-game result.",
        "Keep community reports separate from Roblox-page mentions."
      ]
    },
    {
      heading: "Update research queue",
      body: [
        "The next useful work is not adding more random pages. It is checking whether update-related claims affect the pages that already have search signal.",
        "This queue is designed for week-by-week validation."
      ],
      list: [
        "Check whether a new Roblox description mentions codes, maps, potions, races, or chests.",
        "Watch whether chest, potion, and race pages start receiving update-related queries.",
        "Verify whether MACHI is accepted in-game before changing the code table.",
        "Track whether New Mainland or similar map claims are real update topics.",
        "Do not treat Discord invite claims as official without developer-linked proof."
      ]
    },
    {
      heading: "What will not be treated as an update",
      body: [
        "This page will not record an update just because a third-party guide publishes a claim.",
        "A useful claim can enter the research queue, but it does not become a verified update until stronger evidence exists."
      ],
      list: [
        "No copied race tier changes.",
        "No invented balance notes.",
        "No unofficial Discord links as official sources.",
        "No reward quantities without test proof.",
        "No script or macro download references."
      ]
    }
  ],
  relatedLinks: [
    { href: "/codes/", title: "Codes", description: "Review RELEASE, WIZARD, MACHI, and the evidence level for each code claim." },
    { href: "/chest-locations/", title: "Chest Locations", description: "Track whether route, respawn, or map claims change after updates." },
    { href: "/race-tier-list/", title: "Race Tier List", description: "Keep race changes source-labeled before changing reroll advice." },
    { href: "/potions/", title: "Potions Guide", description: "Track whether updates change potion recipes, materials, or spell unlocks." },
    { href: "/beginners-guide/", title: "Beginner Guide", description: "Start safely before following unverified update, race, or reroll advice." },
    { href: "/", title: "Guide hub", description: "Return to the homepage for source status and current research priorities." }
  ],
  faq: [
    {
      q: "What is the latest Wizard Alchemy update?",
      a: "This page tracks update signals from the Roblox game page and developer-linked sources. A full patch note is not treated as verified until a clear source or in-game evidence exists."
    },
    {
      q: "Is this a full Wizard Alchemy patch log?",
      a: "No. This is an update guide and source tracker. A full patch log needs official or in-game changelog evidence."
    },
    {
      q: "Do updates change Wizard Alchemy codes?",
      a: "They can, but code rewards are not published as fully active until this site records source evidence and an in-game redemption result."
    },
    {
      q: "Can third-party guides trigger updates here?",
      a: "They can trigger research tasks, but they do not become verified updates without stronger evidence."
    }
  ]
};

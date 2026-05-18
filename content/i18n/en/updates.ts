// input: English Wizard Alchemy updates page requirements
// output: typed English updates content object
// pos: English updates SEO content

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enUpdatesPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Updates | Release Notes, Codes & Source Tracker",
    description: "Wizard Alchemy updates tracker for Roblox release status, description changes, code evidence, pending Discord claims, and future changelog verification."
  },
  slug: "updates",
  hero: {
    eyebrow: "Source tracker",
    h1: "Wizard Alchemy Updates",
    lede: "This page tracks what has actually been verified about Wizard Alchemy: the released Roblox game page, Muggle Academy as developer, the public gameplay description, and the code leads RELEASE and WIZARD. Patch notes, Discord, MACHI, and reward quantities stay pending until stronger evidence exists.",
    primaryAction: { label: "Check codes", href: "/codes/" },
    secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
  },
  summaryCards: [
    {
      title: "Release page verified",
      description: "Wizard Alchemy has a public Roblox game page with the released title and Muggle Academy attribution."
    },
    {
      title: "Codes changed carefully",
      description: "RELEASE and WIZARD are tracked as Roblox-page-mentioned leads, not as fully in-game tested active codes."
    },
    {
      title: "Patch claims pending",
      description: "Discord, Trello, MACHI, race reroll quantities, race tiers, and balance notes remain unverified in this first source pass."
    }
  ],
  sections: [
    {
      heading: "Current verified snapshot",
      body: [
        "The public source baseline is the official Roblox game page. It identifies Wizard Alchemy as a Roblox wizard RPG by Muggle Academy.",
        "The verified gameplay frame is broad: collect ingredients, brew potions, unlock spells, upgrade power, and explore magical areas. This page does not turn that broad description into fake stats or tier rankings."
      ],
      list: [
        "Game page: verified public Roblox source.",
        "Developer attribution: Muggle Academy.",
        "Gameplay loop: ingredients, potions, spells, power, exploration.",
        "Official Discord: still pending.",
        "Detailed patch log: still pending."
      ]
    },
    {
      heading: "Code update policy",
      body: [
        "A code update is not published as fully active until source evidence and in-game redemption evidence agree.",
        "RELEASE and WIZARD are currently treated as source-backed leads because they are mentioned in the Roblox description. MACHI is treated as a third-party lead only."
      ],
      list: [
        "Move to pending when a source mentions a code.",
        "Move to active only after in-game redemption is recorded.",
        "Do not publish exact rewards without an in-game result.",
        "Keep community reports separate from Roblox-page mentions."
      ]
    },
    {
      heading: "Pending update queue",
      body: [
        "These are the next topics to verify before they become standalone guide pages or indexed sections.",
        "The goal is not to copy competitor pages, but to turn useful claims into evidence-backed updates."
      ],
      list: [
        "Where the code redemption UI is located.",
        "Whether MACHI is accepted in-game.",
        "Exact reward results for RELEASE and WIZARD.",
        "Whether the claimed Discord invite is developer-linked.",
        "Whether parry, ascension, shards, races, and boss farming are core mechanics."
      ]
    },
    {
      heading: "What will not be treated as an update",
      body: [
        "This page will not record an update just because a third-party guide publishes a claim.",
        "A useful claim can enter the research queue, but it does not become a verified update until it has stronger evidence."
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
    { href: "/beginners-guide/", title: "Beginner Guide", description: "Start the game safely before following unverified race or reroll advice." },
    { href: "/", title: "Guide hub", description: "Return to the homepage for quick facts, source status, and research backlog." }
  ],
  faq: [
    {
      q: "Is this a full Wizard Alchemy patch log?",
      a: "No. This is a source tracker for the first version. A full patch log needs official or in-game changelog evidence."
    },
    {
      q: "Why are Discord and Trello still pending?",
      a: "They need developer-linked proof from the Roblox page, Muggle Academy community, or another clear official source before they are treated as official."
    },
    {
      q: "When will RELEASE and WIZARD become active codes?",
      a: "They can move from pending to active only after this site records a successful in-game redemption result and exact reward."
    },
    {
      q: "Can third-party guides trigger updates here?",
      a: "They can trigger research tasks, but they do not become verified updates without stronger evidence."
    }
  ]
};

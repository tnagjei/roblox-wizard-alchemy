// input: English Wizard Alchemy codes page requirements from GSC signal and page-level code query data
// output: typed English codes content object optimized for long-tail Wizard Alchemy codes queries without invented rewards
// pos: English codes SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { CodesPageContent } from "@/lib/content/page-types";

export const enCodesPage: CodesPageContent = {
  meta: {
    title: "Wizard Alchemy Codes | RELEASE, WIZARD, MACHI Status",
    description: "Wizard Alchemy codes page for RELEASE, WIZARD, MACHI, safe redeem steps, reward evidence, and Roblox code verification status."
  },
  slug: "codes",
  hero: {
    eyebrow: "Codes evidence desk",
    h1: "Wizard Alchemy Codes",
    lede: "Looking for Wizard Alchemy codes? Current known code leads are RELEASE, WIZARD, and MACHI. RELEASE and WIZARD are mentioned on the Roblox game page, while MACHI appears on third-party pages. Exact reward amounts are not fully verified yet, so redeem only inside the Roblox game UI and treat untested rewards as pending.",
    primaryAction: { label: "Open Roblox page", href: "roblox", external: true },
    secondaryAction: { label: "Beginner guide", href: "/beginners-guide/" }
  },
  verifiedCodes: {
    eyebrow: "Active code table",
    title: "No in-game verified active codes yet",
    description: "The active table is intentionally empty. RELEASE and WIZARD are source-backed leads, but this site has not recorded a completed in-game redemption result or exact reward yet.",
    emptyCode: "No in-game verified code yet",
    emptyReward: "Exact reward not verified",
    emptySource: "Waiting for in-game test log"
  },
  communityCodes: {
    eyebrow: "Community-reported leads",
    title: "MACHI and other third-party code claims",
    description: "MACHI is visible in third-party Wizard Alchemy code lists. It is useful to test, but it is not listed as active here until Roblox-page proof or an in-game result exists.",
    actionLabel: "Test only inside Roblox",
    statusLabels: { "community reported": "Community reported", "not verified": "Not verified", pending: "Pending", verified: "Verified", "official-page-mentioned": "Roblox page mentioned" }
  },
  pendingCodes: {
    eyebrow: "Roblox-page-mentioned codes",
    title: "RELEASE and WIZARD are the first codes to test",
    description: "These two codes have the strongest public signal because they are mentioned by the Roblox game description. Exact rewards are still not published until the result is recorded inside the game.",
    reasonLabel: "Why pending",
    defaultReason: "In-game redemption result and exact reward quantity are not recorded yet.",
    statusLabels: { pending: "Pending", verified: "Verified", "not verified": "Not verified", "official-page-mentioned": "Roblox page mentioned" }
  },
  conflictMatrix: {
    eyebrow: "Code claim conflict check",
    title: "Claims held back from active status",
    description: "Some sites show MACHI, race reroll rewards, or exact reward numbers. This page separates those claims from Roblox-page-mentioned leads.",
    siteStatusLabel: "This site status",
    externalClaimsLabel: "External claim",
    reasonLabel: "Reason",
    notVerifiedLabel: "Held pending",
    defaultReason: "Not confirmed by the Roblox game page or an in-game test in this source pass."
  },
  verificationWorkflow: {
    eyebrow: "Verification workflow",
    title: "How a Wizard Alchemy code becomes active here",
    cards: [
      {
        title: "1. Source check",
        list: [
          "Check the official Roblox game page first.",
          "Treat New Mainland code claims as update leads, not verified active codes.",
          "Keep third-party code lists as research leads only.",
          "Do not treat Discord or video comments as official unless developer-linked proof exists."
        ]
      },
      {
        title: "2. In-game test",
        list: [
          "Redeem only inside the Wizard Alchemy Roblox game UI.",
          "Record code text, date, server state, and exact reward result.",
          "Never use browser extensions, scripts, or code generators."
        ]
      },
      {
        title: "3. Publish rule",
        list: [
          "Move a code to active only after source and in-game evidence agree.",
          "Do not invent race reroll counts or reward names.",
          "Keep expired, rejected, and community-reported claims separate."
        ]
      }
    ]
  },
  redeemGuide: {
    eyebrow: "How to redeem",
    title: "How to redeem Wizard Alchemy codes safely",
    steps: [
      "Open the official Wizard Alchemy Roblox page.",
      "Launch the game from Roblox, not from a third-party code tool.",
      "Look for a code, settings, rewards, utility, or redeem interface inside the game.",
      "Test RELEASE and WIZARD first because they are mentioned on the Roblox page.",
      "Record the exact result before treating any reward amount as verified."
    ],
    note: "Never enter Roblox passwords, cookies, recovery codes, session tokens, or two-factor codes into any Wizard Alchemy code site or tool."
  },
  sections: [
    {
      heading: "Current Wizard Alchemy code verdict",
      body: [
        "RELEASE and WIZARD are the best starting points because they are mentioned in the Roblox game description.",
        "MACHI is still useful as a research lead, but this page does not mark it active without stronger evidence.",
        "New Mainland is tracked as an update context for future checks, not as proof that a new verified code exists."
      ],
      list: [
        "Known code leads: RELEASE, WIZARD, and MACHI.",
        "Active table: empty until in-game test evidence exists.",
        "Pending table: RELEASE and WIZARD.",
        "Community leads: MACHI stays unverified.",
        "New Mainland claims: research queue only until official or in-game proof exists.",
        "Reward quantities: not published until recorded in-game."
      ]
    },
    {
      heading: "Wizard Alchemy Roblox Codes",
      body: [
        "Wizard Alchemy Roblox codes should be checked inside the Roblox game UI, not through an external generator or claim page. The main job of this page is to separate Roblox-page-mentioned code leads from copied community claims.",
        "For now, RELEASE and WIZARD have the strongest public source signal. MACHI is still a useful code lead to test, but it remains community-reported until a stronger source or an in-game result confirms it."
      ],
      list: [
        "Roblox-page-mentioned leads: RELEASE and WIZARD.",
        "Community-reported lead: MACHI.",
        "Exact reward amount: pending.",
        "Safe redeem location: inside the Wizard Alchemy Roblox game UI.",
        "Unsafe route: any tool that claims to redeem codes outside the game."
      ]
    },
    {
      heading: "Muggle Academy Code Status",
      body: [
        "Muggle Academy is the developer attribution tied to Wizard Alchemy, so searches such as code Muggle Academy and Muggle Academy code are relevant to this page. The developer connection does not automatically make every copied code claim active.",
        "A Muggle Academy code claim still needs the same evidence path: source check first, then in-game redemption, then exact reward recording. Without that chain, the code stays pending or community-reported."
      ],
      list: [
        "Developer attribution: Muggle Academy.",
        "Game context: Wizard Alchemy on Roblox.",
        "Source-backed code leads: RELEASE and WIZARD.",
        "Third-party lead: MACHI.",
        "Status rule: no exact reward until in-game evidence exists."
      ]
    },
    {
      heading: "Codes for Alchemy Online: Is This the Same Game?",
      body: [
        "Some users search for codes for Alchemy Online or alchemy online Roblox codes when they are trying to find Wizard Alchemy codes. This page treats those searches carefully because similarly named games, generic alchemy games, and Wizard Alchemy are not always the same target.",
        "If you mean Wizard Alchemy by Muggle Academy, use this page and the official Roblox game page as the starting point. If you mean a different alchemy game, do not assume these code leads apply there."
      ],
      list: [
        "Wizard Alchemy: this page covers the Roblox game by Muggle Academy.",
        "Alchemy Online searches: may be ambiguous.",
        "Do not reuse Wizard Alchemy codes in unrelated games without checking the game identity.",
        "Use the official Roblox page name and developer attribution before redeeming."
      ]
    },
    {
      heading: "Race reroll and progression links",
      body: [
        "Race reroll rewards matter because they affect whether players should spend or save rerolls. This codes page now links to the race tier list and potions guide so code research supports real progression decisions.",
        "Do not treat any code as a reroll source until the redemption result is recorded inside Wizard Alchemy."
      ],
      list: [
        "Use the race tier list before spending scarce rerolls.",
        "Use the potions guide to understand spell and material progression.",
        "Use the chest route when checking whether materials or rewards appear in chests."
      ]
    },
    {
      heading: "Why exact rewards are not listed yet",
      body: [
        "Several third-party pages show race reroll quantities. Copying that number without an in-game test would create fake precision.",
        "This page will list exact rewards only after the redemption result is checked inside Wizard Alchemy."
      ],
      list: [
        "No invented reroll counts.",
        "No copied Discord claims.",
        "No script or macro download links."
      ]
    }
  ],
  faq: [
    { q: "What are the current Wizard Alchemy codes?", a: "RELEASE and WIZARD are mentioned on the Roblox game page and are the first codes to test. MACHI is a community-reported lead. Exact rewards remain pending until this site records an in-game redemption result." },
    { q: "Is MACHI an active Wizard Alchemy code?", a: "MACHI appears in third-party code lists, but this page keeps it as community-reported until Roblox-page proof or an in-game test confirms it." },
    { q: "Are Wizard Alchemy Roblox codes the same as Alchemy Online codes?", a: "Not necessarily. If you mean Wizard Alchemy by Muggle Academy, use this page. If you mean a different alchemy game, do not assume the same code leads apply." },
    { q: "What is the Muggle Academy code status?", a: "Muggle Academy is the developer attribution for Wizard Alchemy. RELEASE and WIZARD are Roblox-page-mentioned leads, while MACHI remains community-reported until stronger evidence exists." },
    { q: "Are there New Mainland Wizard Alchemy codes?", a: "New Mainland is treated as an update-related research signal here. It is not listed as a verified active code until official or in-game proof confirms a redeemable code." },
    { q: "Why are there no verified rewards listed?", a: "Exact rewards are not listed because this site has not recorded the in-game result yet. Publishing reward quantities without a test would be fake precision." },
    { q: "Can a code tool redeem Wizard Alchemy codes for me?", a: "Do not use tools that ask for Roblox credentials, cookies, recovery codes, session tokens, browser extensions, or script downloads." }
  ]
};

// input: English Wizard Alchemy codes page requirements from GSC signal
// output: typed English codes content object optimized for Wizard Alchemy codes queries
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
    lede: "Looking for Wizard Alchemy codes? RELEASE and WIZARD are mentioned on the Roblox game page. MACHI appears on third-party pages, so this guide keeps it pending until stronger proof or an in-game redemption test confirms it.",
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
        "MACHI is still useful as a research lead, but this page does not mark it active without stronger evidence."
      ],
      list: [
        "Active table: empty until in-game test evidence exists.",
        "Pending table: RELEASE and WIZARD.",
        "Community leads: MACHI stays unverified.",
        "Reward quantities: not published until recorded in-game."
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
    { q: "What are the current Wizard Alchemy codes?", a: "RELEASE and WIZARD are mentioned on the Roblox game page and are the first codes to test. They are still pending here until this site records an in-game redemption result." },
    { q: "Is MACHI an active Wizard Alchemy code?", a: "MACHI appears in third-party code lists, but this page keeps it as community-reported until Roblox-page proof or an in-game test confirms it." },
    { q: "Why are there no verified rewards listed?", a: "Exact rewards are not listed because this site has not recorded the in-game result yet. Publishing reward quantities without a test would be fake precision." },
    { q: "Can a code tool redeem Wizard Alchemy codes for me?", a: "Do not use tools that ask for Roblox credentials, cookies, recovery codes, session tokens, browser extensions, or script downloads." }
  ]
};

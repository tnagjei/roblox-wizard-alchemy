// input: English Wizard Alchemy race tier list requirements
// output: typed English race tier list guide content with source labels
// pos: English race-tier-list SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enRaceTierListPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Race Tier List | Best Races & Reroll Guide",
    description: "Wizard Alchemy race tier list with best race targets, reroll priority, Thestrals, Stellar Ambassador, Death Eater, and pending evidence labels."
  },
  slug: "race-tier-list",
  hero: {
    eyebrow: "Race reroll planning",
    h1: "Wizard Alchemy Race Tier List",
    lede: "This Wizard Alchemy race tier list is deliberately source-labeled. It helps you decide whether to save or spend rerolls, but it does not pretend that reported race names, buffs, or exact rankings are verified until in-game evidence is recorded.",
    primaryAction: { label: "Check code status", href: "/codes/" },
    secondaryAction: { label: "Beginner guide", href: "/beginners-guide/" }
  },
  summaryCards: [
    {
      title: "Best race claims are pending",
      description: "Thestrals, Stellar Ambassador, and Death Eater appear in competitor research, but exact ranking evidence is not verified here."
    },
    {
      title: "Rerolls are scarce",
      description: "Do not spend rerolls just because a table looks confident. Wait for stronger source or in-game performance evidence."
    },
    {
      title: "Codes affect race planning",
      description: "RELEASE and WIZARD are source-backed leads, while MACHI remains community-reported until stronger proof exists."
    }
  ],
  sections: [
    {
      heading: "Current tier list verdict",
      body: [
        "The honest verdict is that Wizard Alchemy race data is useful but not fully verified by this site yet. A public table can still help if it separates reported race names from tested race performance.",
        "Use the tiers below as a research framework, not as final in-game truth."
      ],
      list: [
        "S tier candidates: Thestrals and Stellar Ambassador are reported by competitor coverage, status pending.",
        "A tier candidates: Death Eater and other advanced races are reported, status pending.",
        "Starter races: Human and common races need a baseline test before being ranked.",
        "Exact buffs: pending until screenshots, tooltips, or repeated tests are available.",
        "Final reroll advice: save rare rerolls until the race effect is verified."
      ]
    },
    {
      heading: "How to read source-labeled tiers",
      body: [
        "A race tier list can be wrong in two ways: the race name can be real but the ranking can be copied, or the ranking can be reasonable but changed by a balance update.",
        "That is why this page uses evidence labels instead of publishing a fake definitive meta."
      ],
      list: [
        "Verified means this site has in-game proof or official source proof.",
        "Reported means third-party pages mention the race or rank.",
        "Pending means the race needs an in-game tooltip, stat, or performance test.",
        "Rejected means the claim failed a source or in-game check."
      ]
    },
    {
      heading: "Reroll priority",
      body: [
        "Race rerolls are tied to code and progression decisions, so wasting them early can slow a new account. The safest advice is to avoid rerolling until you understand what your current race changes.",
        "If a code grants rerolls, record the exact reward before spending them. RELEASE and WIZARD are still treated as source-backed leads, not verified reward quantities."
      ],
      list: [
        "Do not reroll only because a competitor page says a race is S tier.",
        "Check whether the race effect helps your current spell, potion, or combat route.",
        "Keep one baseline race long enough to compare damage, survival, or farming speed.",
        "Do not treat MACHI as a verified reroll code until tested."
      ]
    },
    {
      heading: "What evidence would upgrade this page",
      body: [
        "The next step is not more copied tables. The next step is evidence: screenshots of race names, race effects, reroll UI, and repeated play checks that show whether a race changes progression.",
        "Once those records exist, this page can move from reported tiers to tested tiers."
      ],
      list: [
        "Race selection or reroll UI screenshot.",
        "Race tooltip showing exact effect.",
        "Before and after comparison for damage, cooldown, farming, or movement.",
        "Update note showing race balance changes.",
        "Code redemption test proving whether any code grants race rerolls."
      ]
    }
  ],
  relatedLinks: [
    { href: "/codes/", title: "Codes", description: "Check RELEASE, WIZARD, MACHI, and whether reroll rewards are verified." },
    { href: "/potions/", title: "Potions Guide", description: "Connect race choices with spell unlocks and potion progression." },
    { href: "/beginners-guide/", title: "Beginner Guide", description: "Avoid wasting rerolls before you understand the early game loop." }
  ],
  faq: [
    {
      q: "What is the best race in Wizard Alchemy?",
      a: "Thestrals, Stellar Ambassador, and Death Eater appear as reported high-interest races, but this site keeps exact best-race claims pending until in-game evidence is recorded."
    },
    {
      q: "Should I reroll my race as a beginner?",
      a: "Usually no. Save rerolls until race effects and code rewards are verified, especially if you are still learning potions, spells, and basic combat."
    },
    {
      q: "Is Human a bad race in Wizard Alchemy?",
      a: "Human is treated as a baseline starter race here, not as a confirmed bad race. It needs comparison data before being ranked."
    },
    {
      q: "Does MACHI give race rerolls?",
      a: "MACHI is community-reported by third-party pages. This site does not treat its reward as verified until stronger proof or an in-game redemption result exists."
    }
  ]
};

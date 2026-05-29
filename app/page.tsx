// input: homepage route request and week-1 GSC homepage query signals
// output: English homepage rendered from typed template content plus focused related-keyword H2 refresh sections
// pos: `/` route（更新规则：首页内容、SEO补强或内链调整需同步此文件与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { HomePageTemplate } from "@/components/templates/HomePageTemplate";
import { enHomePage } from "@/content/i18n/en/home";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enHomePage.slug,
  title: enHomePage.meta.title,
  description: enHomePage.meta.description
});

const refreshSections = [
  {
    heading: "What Is Wizard Alchemy on Roblox?",
    body: "Wizard Alchemy is a Roblox wizard RPG by Muggle Academy. The safe public gameplay frame is simple: collect ingredients, brew potions, unlock spells, upgrade power, and explore magical areas. This guide does not treat every third-party claim as fact. Codes, race rankings, potion recipes, chest routes, and update notes are separated by evidence level so players can see what is verified, source-reported, or still pending.",
    links: [
      { href: "/updates/", label: "Track updates" },
      { href: "/beginners-guide/", label: "Start safely" }
    ]
  },
  {
    heading: "How to Use This Wizard Alchemy Guide",
    body: "Use this homepage as the route map for the whole site. If you are checking what changed, start with Updates. If you are new, read the Beginner Guide before spending rerolls or chasing tier lists. If you only want rewards, read Codes, but keep in mind that source-mentioned codes are not the same as in-game verified rewards. For deeper tasks, move to Potions, Chest Locations, and Race Tier List after reading the evidence notes.",
    links: [
      { href: "/codes/", label: "Check codes" },
      { href: "/potions/", label: "Read potions" }
    ]
  },
  {
    heading: "Wizard Alchemy Tips for New Players",
    body: "Do not start by copying a final build from another site. First, open the official Roblox page, learn the in-game menu, collect basic materials, test one potion at a time, and record what actually changes. Avoid tools that ask for Roblox passwords, cookies, recovery codes, downloads, scripts, or macros. If a claim mentions exact rewards, reroll counts, drop rates, or hidden race effects, treat it as pending until it has stronger proof.",
    links: [
      { href: "/beginners-guide/", label: "Beginner guide" },
      { href: "/race-tier-list/", label: "Race notes" }
    ]
  },
  {
    heading: "Wizard Alchemy Updates, Codes, Potions, and Chest Routes",
    body: "The site is organized around tasks players actually search for: updates, codes, potions, chest routes, and race choices. Updates currently have the strongest early search signal, so they should be checked first. Codes are useful but need careful evidence labels. Potions and chest routes are practical guides, while race rankings should be treated as source-reported until race effects and reroll behavior are verified in-game.",
    links: [
      { href: "/updates/", label: "Updates" },
      { href: "/chest-locations/", label: "Chest routes" }
    ]
  }
];

export default function HomePage() {
  return (
    <>
      <HomePageTemplate content={enHomePage} locale="en" />
      <section className="page-main wizard-home" aria-label="Wizard Alchemy guide refresh sections">
        <section className="alchemy-section research-queue-section">
          <div className="alchemy-section-heading">
            <p>Guide refresh</p>
            <h2>Wizard Alchemy Roblox Guide Topics</h2>
          </div>
          <div className="research-queue-grid">
            {refreshSections.map((section) => (
              <article className="research-queue-card" key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                <div className="hero-actions">
                  {section.links.map((link) => (
                    <Link className="secondary-link" href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

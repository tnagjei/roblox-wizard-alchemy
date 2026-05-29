// input: English homepage template requirements plus week-1 GSC query signals
// output: typed English homepage content object with stronger guide and update entry points
// pos: English homepage SEO content（更新规则：首页标题、内链或搜索意图调整需同步此文件与所属目录 README）

import { createTemplateHomePage } from "@/lib/content/template-pages";

const page = createTemplateHomePage("en");

page.meta.title = "Wizard Alchemy Roblox Guide | Updates, Codes, Potions & Beginner Tips";
page.meta.description = "Independent Wizard Alchemy Roblox guide with update tracking, beginner tips, code evidence, potions, chest routes, and source-labeled research notes.";
page.hero.lede = "Wizard Alchemy is a Roblox wizard RPG by Muggle Academy. Use this guide hub to follow updates, start safely, check code evidence, compare potions, and keep unverified claims separate from facts.";
page.hero.primaryAction = { label: "Read updates", href: "/updates/" };
page.hero.secondaryAction = { label: "Beginner guide", href: "/beginners-guide/" };
page.directory.title = "Start with the strongest guides";
page.directory.cards = [
  { href: "/updates/", title: "Updates", description: "Track Wizard Alchemy update signals, release notes, code mentions, and source-labeled pending claims." },
  { href: "/beginners-guide/", title: "Beginner Guide", description: "Learn the safe first-session path before chasing races, potions, chests, or reroll claims." },
  { href: "/codes/", title: "Codes", description: "Check RELEASE, WIZARD, MACHI, and why exact rewards remain pending until in-game tests exist." }
];
page.popularSearches = [
  { href: "/updates/", title: "Wizard Alchemy Update Guide", description: "Follow update-related searches first because this page currently has the strongest early signal.", coversLabel: "Covers", covers: "Update · Patch notes · Source tracker" },
  { href: "/beginners-guide/", title: "Wizard Alchemy Guide", description: "A practical starting point for players searching for a general Wizard Alchemy Roblox guide.", coversLabel: "Covers", covers: "Beginner path · Potions · Safety" },
  { href: "/codes/", title: "Wizard Alchemy Codes", description: "Use source labels before trusting code rewards or race reroll claims.", coversLabel: "Covers", covers: "RELEASE · WIZARD · MACHI" }
];
page.faq = [
  { q: "What should I read first in this Wizard Alchemy guide?", a: "Start with Updates if you want current changes, Beginner Guide if you are new, and Codes only after checking the evidence labels." },
  { q: "Is this an official Wizard Alchemy website?", a: "No. This is an independent fan guide and is not affiliated with Roblox Corporation or Muggle Academy." },
  { q: "Why does this guide mark some claims as pending?", a: "Because code rewards, race rankings, potion recipes, and Discord links need stronger official or in-game evidence before being treated as verified." }
];

export const enHomePage = page;

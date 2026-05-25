// input: `/race-tier-list/` route request
// output: English race tier list page rendered from typed i18n content with explicit index metadata for low-risk SEO testing
// pos: race-tier-list route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enRaceTierListPage } from "@/content/i18n/en/race-tier-list";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: enRaceTierListPage.meta.title,
  description: enRaceTierListPage.meta.description,
  alternates: {
    canonical: absoluteUrl("/race-tier-list/"),
    languages: {
      en: absoluteUrl("/race-tier-list/"),
      "x-default": absoluteUrl("/race-tier-list/")
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RaceTierListPage() {
  return <StrategyPageTemplate content={enRaceTierListPage} locale="en" />;
}

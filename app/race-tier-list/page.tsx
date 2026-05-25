// input: `/race-tier-list/` route request
// output: English race tier list page rendered from typed i18n content
// pos: race-tier-list route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enRaceTierListPage } from "@/content/i18n/en/race-tier-list";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enRaceTierListPage.slug,
  title: enRaceTierListPage.meta.title,
  description: enRaceTierListPage.meta.description
});

export default function RaceTierListPage() {
  return <StrategyPageTemplate content={enRaceTierListPage} locale="en" />;
}

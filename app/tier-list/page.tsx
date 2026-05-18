// input: `/tier-list/` route request
// output: English tier list page rendered from typed i18n content
// pos: tier-list route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enTierListPage } from "@/content/i18n/en/tier-list";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enTierListPage.slug,
  title: enTierListPage.meta.title,
  description: enTierListPage.meta.description
});

export default function TierListPage() {
  return <StrategyPageTemplate content={enTierListPage} locale="en" />;
}

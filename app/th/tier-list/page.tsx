// input: Thai tier-list route request
// output: Thai tier list page rendered from typed i18n content
// pos: static th tier-list route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { thTierListPage } from "@/content/i18n/th/tier-list";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "th",
  slug: thTierListPage.slug,
  title: thTierListPage.meta.title,
  description: thTierListPage.meta.description
});

export default function ThaiTierListPage() {
  return <StrategyPageTemplate content={thTierListPage} locale="th" />;
}

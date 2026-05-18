// input: Traditional Chinese tier-list route request
// output: Traditional Chinese tier list page rendered from typed i18n content
// pos: static zh-tw tier-list route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { zhTwTierListPage } from "@/content/i18n/zh-tw/tier-list";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "zh-tw",
  slug: zhTwTierListPage.slug,
  title: zhTwTierListPage.meta.title,
  description: zhTwTierListPage.meta.description
});

export default function TraditionalChineseTierListPage() {
  return <StrategyPageTemplate content={zhTwTierListPage} locale="zh-tw" />;
}

// input: Traditional Chinese units route request
// output: Traditional Chinese units page rendered from typed i18n content
// pos: static zh-tw units route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { zhTwUnitsPage } from "@/content/i18n/zh-tw/units";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "zh-tw",
  slug: zhTwUnitsPage.slug,
  title: zhTwUnitsPage.meta.title,
  description: zhTwUnitsPage.meta.description
});

export default function TraditionalChineseUnitsPage() {
  return <StrategyPageTemplate content={zhTwUnitsPage} locale="zh-tw" />;
}

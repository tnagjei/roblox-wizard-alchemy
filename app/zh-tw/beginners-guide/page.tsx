// input: Traditional Chinese beginners-guide route request
// output: Traditional Chinese beginner guide page rendered from typed i18n content
// pos: static zh-tw beginners-guide route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { zhTwBeginnersGuidePage } from "@/content/i18n/zh-tw/beginners-guide";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "zh-tw",
  slug: zhTwBeginnersGuidePage.slug,
  title: zhTwBeginnersGuidePage.meta.title,
  description: zhTwBeginnersGuidePage.meta.description
});

export default function TraditionalChineseBeginnersGuidePage() {
  return <StrategyPageTemplate content={zhTwBeginnersGuidePage} locale="zh-tw" />;
}

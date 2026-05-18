// input: Traditional Chinese updates route request
// output: Traditional Chinese updates page rendered from typed i18n content
// pos: static zh-tw updates route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { zhTwUpdatesPage } from "@/content/i18n/zh-tw/updates";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "zh-tw",
  slug: zhTwUpdatesPage.slug,
  title: zhTwUpdatesPage.meta.title,
  description: zhTwUpdatesPage.meta.description
});

export default function TraditionalChineseUpdatesPage() {
  return <StrategyPageTemplate content={zhTwUpdatesPage} locale="zh-tw" />;
}

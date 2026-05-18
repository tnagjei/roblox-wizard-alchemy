// input: Thai beginners-guide route request
// output: Thai beginner guide page rendered from typed i18n content
// pos: static th beginners-guide route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { thBeginnersGuidePage } from "@/content/i18n/th/beginners-guide";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "th",
  slug: thBeginnersGuidePage.slug,
  title: thBeginnersGuidePage.meta.title,
  description: thBeginnersGuidePage.meta.description
});

export default function ThaiBeginnersGuidePage() {
  return <StrategyPageTemplate content={thBeginnersGuidePage} locale="th" />;
}

// input: Thai units route request
// output: Thai units page rendered from typed i18n content
// pos: static th units route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { thUnitsPage } from "@/content/i18n/th/units";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "th",
  slug: thUnitsPage.slug,
  title: thUnitsPage.meta.title,
  description: thUnitsPage.meta.description
});

export default function ThaiUnitsPage() {
  return <StrategyPageTemplate content={thUnitsPage} locale="th" />;
}

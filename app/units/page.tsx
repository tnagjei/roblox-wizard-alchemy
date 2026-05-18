// input: `/units/` route request
// output: English units page rendered from typed i18n content
// pos: units route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enUnitsPage } from "@/content/i18n/en/units";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enUnitsPage.slug,
  title: enUnitsPage.meta.title,
  description: enUnitsPage.meta.description
});

export default function UnitsPage() {
  return <StrategyPageTemplate content={enUnitsPage} locale="en" />;
}

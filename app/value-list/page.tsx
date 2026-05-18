// input: `/value-list/` route request
// output: English value list page rendered from typed i18n content
// pos: value-list route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enValueListPage } from "@/content/i18n/en/value-list";
import { buildEnglishOnlyMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildEnglishOnlyMetadata({
  slug: enValueListPage.slug,
  title: enValueListPage.meta.title,
  description: enValueListPage.meta.description
});

export default function ValueListPage() {
  return <StrategyPageTemplate content={enValueListPage} locale="en" />;
}

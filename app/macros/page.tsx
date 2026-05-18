// input: `/macros/` route request
// output: English macros page rendered from typed i18n content
// pos: macros route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enMacrosPage } from "@/content/i18n/en/macros";
import { buildEnglishOnlyMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildEnglishOnlyMetadata({
  slug: enMacrosPage.slug,
  title: enMacrosPage.meta.title,
  description: enMacrosPage.meta.description
});

export default function MacrosPage() {
  return <StrategyPageTemplate content={enMacrosPage} locale="en" />;
}

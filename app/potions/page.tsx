// input: `/potions/` route request
// output: English potions page rendered from typed i18n content
// pos: potions route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enPotionsPage } from "@/content/i18n/en/potions";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enPotionsPage.slug,
  title: enPotionsPage.meta.title,
  description: enPotionsPage.meta.description
});

export default function PotionsPage() {
  return <StrategyPageTemplate content={enPotionsPage} locale="en" />;
}

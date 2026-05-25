// input: `/chest-locations/` route request
// output: English chest locations page rendered from typed i18n content
// pos: chest-locations route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enChestLocationsPage } from "@/content/i18n/en/chest-locations";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enChestLocationsPage.slug,
  title: enChestLocationsPage.meta.title,
  description: enChestLocationsPage.meta.description
});

export default function ChestLocationsPage() {
  return <StrategyPageTemplate content={enChestLocationsPage} locale="en" />;
}

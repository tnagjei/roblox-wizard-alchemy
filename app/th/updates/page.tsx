// input: Thai updates route request
// output: Thai updates page rendered from typed i18n content
// pos: static th updates route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { thUpdatesPage } from "@/content/i18n/th/updates";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "th",
  slug: thUpdatesPage.slug,
  title: thUpdatesPage.meta.title,
  description: thUpdatesPage.meta.description
});

export default function ThaiUpdatesPage() {
  return <StrategyPageTemplate content={thUpdatesPage} locale="th" />;
}

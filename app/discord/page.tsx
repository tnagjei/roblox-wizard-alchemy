// input: `/discord/` route request
// output: English Discord and official links page rendered from typed i18n content
// pos: discord route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enDiscordPage } from "@/content/i18n/en/discord";
import { buildEnglishOnlyMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildEnglishOnlyMetadata({
  slug: enDiscordPage.slug,
  title: enDiscordPage.meta.title,
  description: enDiscordPage.meta.description
});

export default function DiscordPage() {
  return <StrategyPageTemplate content={enDiscordPage} locale="en" />;
}

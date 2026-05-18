// input: Thai homepage route request
// output: Thai homepage rendered from typed i18n content
// pos: static th homepage route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { HomePageTemplate } from "@/components/templates/HomePageTemplate";
import { thHomePage } from "@/content/i18n/th/home";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "th",
  slug: thHomePage.slug,
  title: thHomePage.meta.title,
  description: thHomePage.meta.description
});

export default function ThaiHomePage() {
  return <HomePageTemplate content={thHomePage} locale="th" />;
}

// input: Traditional Chinese homepage request
// output: Traditional Chinese homepage rendered from typed template content
// pos: static zh-tw homepage route

import type { Metadata } from "next";
import { HomePageTemplate } from "@/components/templates/HomePageTemplate";
import { zhTwHomePage } from "@/content/i18n/zh-tw/home";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "zh-tw",
  slug: zhTwHomePage.slug,
  title: zhTwHomePage.meta.title,
  description: zhTwHomePage.meta.description
});

export default function TraditionalChineseHomePage() {
  return <HomePageTemplate content={zhTwHomePage} locale="zh-tw" />;
}

// input: Traditional Chinese codes page request
// output: Traditional Chinese codes page rendered from typed i18n content
// pos: static zh-tw codes route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { CodesPageTemplate } from "@/components/templates/CodesPageTemplate";
import { zhTwCodesPage } from "@/content/i18n/zh-tw/codes";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "zh-tw",
  slug: zhTwCodesPage.slug,
  title: zhTwCodesPage.meta.title,
  description: zhTwCodesPage.meta.description
});

export default function TraditionalChineseCodesPage() {
  return <CodesPageTemplate content={zhTwCodesPage} locale="zh-tw" />;
}

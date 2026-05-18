// input: Thai codes route request
// output: Thai codes page rendered from typed i18n content
// pos: static th codes route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { CodesPageTemplate } from "@/components/templates/CodesPageTemplate";
import { thCodesPage } from "@/content/i18n/th/codes";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "th",
  slug: thCodesPage.slug,
  title: thCodesPage.meta.title,
  description: thCodesPage.meta.description
});

export default function ThaiCodesPage() {
  return <CodesPageTemplate content={thCodesPage} locale="th" />;
}

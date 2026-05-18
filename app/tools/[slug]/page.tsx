// input: `/tools/<slug>/` route request
// output: source-aware safe planning tool page
// pos: dynamic tools route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/GuidePage";
import { getPageByPath, siteData, type SitePage } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

type ToolPage = SitePage & {
  tool: {
    slug: string;
  };
};

type ToolRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

function isToolPage(page: SitePage): page is ToolPage {
  return "tool" in page && Boolean(page.tool);
}

export function generateStaticParams() {
  return siteData.pages
    .filter(isToolPage)
    .map((page) => ({
      slug: page.tool.slug
    }));
}

export async function generateMetadata({ params }: ToolRouteProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    return buildMetadata(getPageByPath(`/tools/${slug}/`));
  } catch {
    return {};
  }
}

export default async function ToolDetailPage({ params }: ToolRouteProps) {
  const { slug } = await params;

  try {
    return <GuidePage page={getPageByPath(`/tools/${slug}/`)} />;
  } catch {
    notFound();
  }
}

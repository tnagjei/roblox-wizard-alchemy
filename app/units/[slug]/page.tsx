// input: `/units/<slug>/` route request
// output: unit detail guide page generated from public data
// pos: dynamic unit route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/GuidePage";
import { getPageByPath, siteData } from "@/lib/site-data";
import type { SitePage } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

type StaticUnitPage = SitePage & {
  unit: {
    slug: string;
  };
};

type UnitRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

function isStaticUnitPage(page: SitePage): page is StaticUnitPage {
  return "unit" in page && Boolean(page.unit);
}

export function generateStaticParams() {
  return siteData.pages
    .filter(isStaticUnitPage)
    .map((page) => ({
      slug: page.unit.slug
    }));
}

export async function generateMetadata({ params }: UnitRouteProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    return buildMetadata(getPageByPath(`/units/${slug}/`));
  } catch {
    return {};
  }
}

export default async function UnitDetailPage({ params }: UnitRouteProps) {
  const { slug } = await params;

  try {
    return <GuidePage page={getPageByPath(`/units/${slug}/`)} />;
  } catch {
    notFound();
  }
}

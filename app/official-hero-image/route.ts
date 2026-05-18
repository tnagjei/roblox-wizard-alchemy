// input: request for Wizard Alchemy official Roblox thumbnail
// output: redirect to Roblox-hosted game thumbnail image
// pos: official visual asset bridge

import { NextResponse } from "next/server";

const ROBLOX_THUMBNAIL_API =
  "https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=10006104044&countPerUniverse=1&size=768x432&format=Png&isCircular=false";

export async function GET() {
  try {
    const response = await fetch(ROBLOX_THUMBNAIL_API, {
      next: { revalidate: 86400 }
    });

    if (!response.ok) {
      return NextResponse.redirect(new URL("/opengraph-image", "https://wizardalchemy.online"));
    }

    const payload = await response.json();
    const imageUrl = payload?.data?.[0]?.thumbnails?.[0]?.imageUrl;

    if (typeof imageUrl !== "string" || !imageUrl.startsWith("https://")) {
      return NextResponse.redirect(new URL("/opengraph-image", "https://wizardalchemy.online"));
    }

    return NextResponse.redirect(imageUrl);
  } catch {
    return NextResponse.redirect(new URL("/opengraph-image", "https://wizardalchemy.online"));
  }
}

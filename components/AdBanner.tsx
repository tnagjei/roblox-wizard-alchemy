// input: advertising code scripts and container IDs
// output: above-content and below-content ad sections with native banner placements and no visible label text
// pos: components/AdBanner.tsx (更新规则：广告供应商、ID或展示样式变更时修改此文件)

"use client";

import Script from "next/script";
import SmallBanner from "./SmallBanner";

type AdBannerProps = {
  placement?: "top" | "bottom";
};

export default function AdBanner({ placement = "bottom" }: AdBannerProps) {
  if (placement === "top") {
    return (
      <section className="ad-container my-4 flex flex-col items-center justify-center w-full min-h-[90px] gap-2" aria-label="Sponsored placement">
        <div
          id="container-70fc3293d724d70844e9131ab4e6ff26"
          className="w-full max-w-4xl mx-auto flex justify-center"
        />
        <Script
          src="https://pl29519330.effectivecpmnetwork.com/70fc3293d724d70844e9131ab4e6ff26/invoke.js"
          strategy="afterInteractive"
          data-cfasync="false"
        />
      </section>
    );
  }

  return (
    <section className="ad-container my-10 flex flex-col items-center justify-center w-full min-h-[100px] gap-4" aria-label="Sponsored placement">
      <SmallBanner placement="inline" />
      <div
        id="container-31e0ddb2852e4099df42447b213111ebee"
        className="w-full max-w-4xl mx-auto flex justify-center"
      />
      <Script
        src="https://pl29384218.profitablecpmratenetwork.com/31e0ddb2852e4099df42447b213111ebee/invoke.js"
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </section>
  );
}

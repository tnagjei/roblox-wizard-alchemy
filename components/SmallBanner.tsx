"use client";
// input: optional placement flag ("inline" or "top") for 468x60 banner
// output: 468x60 banner rendered dynamically inside the referencing component without visible ad label text
// pos: components/SmallBanner.tsx (更新规则：广告 ID、脚本 URL 或广告展示样式变更需同步更新此文件)

import { useEffect, useRef } from "react";

type SmallBannerProps = {
  placement?: "inline" | "top";
};

export default function SmallBanner({ placement = "inline" }: SmallBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !bannerRef.current) return;

    (window as any).atOptions = {
      key: "03b6674b965bacba74dd1da7fd8cf8c6",
      format: "iframe",
      height: 60,
      width: 468,
      params: {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/03b6674b965bacba74dd1da7fd8cf8c6/invoke.js";
    script.async = true;
    const randomId = Math.random().toString(36).substring(2, 11);
    script.id = `small-banner-script-${randomId}`;

    bannerRef.current.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [placement]);

  return (
    <div className="small-banner-wrapper flex flex-col items-center justify-center w-full py-3 bg-gray-50/40 border-y border-gray-100 min-h-[76px]" aria-label="Sponsored placement">
      <div ref={bannerRef} className="flex justify-center w-full overflow-hidden" style={{ minHeight: "60px" }} />
    </div>
  );
}

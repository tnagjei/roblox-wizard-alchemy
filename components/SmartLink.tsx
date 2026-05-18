"use client";

// input: SmartLink destination label and optional className
// output: reusable game-toned CTA button without emoji icons
// pos: components/SmartLink.tsx (更新规则：链接失效或变更时修改此文件)

export default function SmartLink({
  label = "Exclusive Rewards",
  className = ""
}: {
  label?: string,
  className?: string
}) {
  const smartLinkUrl = "https://www.profitablecpmratenetwork.com/gt0g5tk264?key=2b67b009623c38312e243ddbea938570";

  return (
    <a
      href={smartLinkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`smart-link-btn ${className}`}
      aria-label={label}
    >
      {label}
    </a>
  );
}

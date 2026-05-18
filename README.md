# Roblox Guide Site Template

- 用途：Next.js App Router 小游戏攻略站模板，适合快速生成 Roblox / 小游戏攻略站。
- 核心能力：SEO metadata、sitemap 白名单、robots 白名单、多语言内容结构、英文-only 高意图页面、footer 规则、hreflang 规则、模板验证脚本。
- 关键入口：`lib/game-config.ts`、`lib/page-registry.ts`、`public/data/game.example.json`、`content/i18n/*`。
- 边界原则：不编造 codes、奖励、单位数值、value list、官方身份、Discord 链接或脚本下载。

## Files

- `app/`：App Router 页面、SEO 路由和全局样式
- `components/`：站点 chrome、广告位、JSON-LD 和页面模板
- `content/`：多语言页面内容接线
- `lib/game-config.ts`：站点和游戏参数配置
- `lib/page-registry.ts`：完成页面、sitemap、robots、footer、英文-only 页面注册表
- `lib/content/template-pages.ts`：模板占位内容生成器
- `lib/i18n/`：语言、路由和 metadata helper
- `public/data/game.example.json`：模板示例数据
- `scripts/validate-template.mjs`：模板污染检查脚本
- `docs/`：模板审计、初始化和 SEO 工作流文档

## Run

```bash
npm install
npm run validate:template
npm test
npm run build
npm run dev
```

## New site workflow

1. Copy this template into a new repository.
2. Update `lib/game-config.ts`.
3. Replace `public/data/game.example.json` with verified game data or point `lib/site-data.ts` to `public/data/game.json`.
4. Generate English core pages first.
5. Generate only one target locale at the beginning.
6. Keep sitemap and robots limited to completed pages.
7. Keep English-only high-intent pages out of non-English footer and hreflang.
8. Run validation, tests, and build before deployment.

## Environment variables

Set these only when needed:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ADSENSE_CLIENT=
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_YANDEX_VERIFICATION=
```

# lib
- 用途：集中站点数据、路由和 SEO 结构化数据生成逻辑。
- 关键入口：`site-data.ts`、`seo.ts`、`game-config.ts`
- 边界/依赖：只读 `public/data/game.example.json`，不在组件里散落硬编码数据。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- site-data.ts：导出公开 JSON 数据和页面查询 helper
- seo.ts：生成 metadata、canonical、sitemap routes 和 JSON-LD
- game-config.ts：全局站点配置，包含名称、联络邮箱、版权以及第三方集成统计 ID
- page-registry.ts：管理多语言路由、页面注册映射以及路由辅助判断
- i18n/：多语言 metadata、locale 和路径 helper
- content/：页面内容类型和模板内容工厂

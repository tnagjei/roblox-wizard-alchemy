# tests
- 用途：用 Node 内置测试校验公开数据与 SEO 基础约束。
- 关键入口：`template-config.test.mjs`、`template-routes.test.mjs`
- 边界/依赖：不依赖浏览器，只读取项目文件。
> 一旦本目录内容变化，请更新本文件

## Files
- template-config.test.mjs：检查站点数据、语言目录和保守 codes 状态。
- template-routes.test.mjs：检查完成路由数量、路由文件和高风险页 noindex 边界。

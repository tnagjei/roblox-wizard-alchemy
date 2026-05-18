# app/value-list
- 用途：Noob Tower Defense 价值表页面，展示单位价值层级、社区交易信号和安全交易指南
- 关键入口：`/value-list/`
- 边界/依赖：依赖 `public/data/noob-tower-defense.json` 中 key 为 "value-list" 的页面配置
> 一旦本目录内容变化，请更新本文件

## Files
- page.tsx：使用 GuidePage 组件渲染的指南页面
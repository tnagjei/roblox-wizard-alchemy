# scripts
- 用途：保存可复用的内容维护脚本，降低大规模 JSON 编辑出错率。
- 关键入口：`enhance-guide-content.mjs`
- 边界/依赖：脚本只改公开数据文件，运行后必须执行 `npm test` 和 `npm run build`。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- enhance-guide-content.mjs：扩写内页内容并校验 TDH、字数、关键词密度
- apply-p0-competitor-gaps.mjs：落地竞品差异化 P0 页面和证据数据

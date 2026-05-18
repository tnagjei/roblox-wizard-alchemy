# 提升内页内容深度与完全符合 AGENTS 标准的实现计划

**目标**: 将首页“Pages built for search intent”文案修正为面向用户的专业表述；并对全站内页进行大规模重构与内容扩充，使其**严格符合** `AGENTS.md` 规定的所有 SEO 标准（字数、结构、密度、字符数限制等）。

## 现状与缺失标准分析

1. **首页文案不妥**：“Pages built for search intent” 是内部 SEO 术语，容易引起用户不适与信任危机，需要修改为“Complete Guide Directory”。
2. **内页内容过薄**：当前单页平均不足 200 词，远低于 `AGENTS.md` 要求的 **600-800 词**。
3. **结构单一**：当前 JSON 数据仅支持 `H2 + 单一段落`，无法实现 `AGENTS.md` 要求的 **1 个 H1 + 多个 H2 + 多个 H3** 的层级结构。
4. **TDH (Title, Description, H1) 规范缺失**：
   - 当前部分 Title 超过 60 字符（如 "Noob Tower Defense Best Loadouts & Team Builds 2026"）。
   - 没有严格执行“关键词尽量靠前”的规则。
   - 之前扩写时未强制校验 **Title 50-60 字符**，**Description 140-160 字符**的红线。
5. **关键词密度缺失**：当前没有在扩写中主动规划核心关键词保持 **3%–5%** 的密度。

> 注：关于 `Canonical URL 必须存在`，已在 `lib/seo.ts` 的 `buildMetadata` 函数中通过 `alternates.canonical` 动态注入，每页均独立拥有，符合标准。`keywords` 字段当前未设置，符合“空着不填写内容”的要求。

---

## 方案设计

由于涉及十几个页面的深层架构和海量文本扩充，我们将采用“**底层组件升级 -> 严格约束注入**”的模式。

### 阶段 1：Schema 扩展与组件重构 (Foundation)

1. **修改首页文案**：在 `app/page.tsx` 中把 "Pages built for search intent" 修改为 "Complete Guide Directory"。
2. **扩展 JSON Schema 设计**：
   使系统能支持 H3 标题、多段落和列表，以承载 800 词的长文。
   ```typescript
   type Section = {
     heading: string; // H2
     body?: string | string[]; // 多段落正文
     subsections?: Array<{
       heading: string; // H3
       body: string[]; // H3下的多段落正文
       list?: string[]; // H3下的列表
     }>;
   }
   ```
3. **升级 `GuidePage.tsx`**：支持解析并渲染多段落 (`<p>`)、二级子标题 (`<h3>`) 和无序列表 (`<ul>`)。

### 阶段 2：高质量内容扩充 (Content Expansion)

按照 `AGENTS.md` 的要求，我将分批次（Batches）改写 `noob-tower-defense.json`。
**每页扩充的强制约束条件：**
- **TDH 对齐**：提取该页面的唯一核心关键词（如 "Noob Tower Defense codes"），确保其出现在 Title、Description、H1 中，并且**尽量靠前**。
- **字数与密度**：每页文字扩充至 **600-800 词**，在此过程中自然植入关键词，密度控制在 **3%-5%**。
- **字符限制**：严格压缩或扩写 `title` 至 **50-60 字符**，`description` 保持在 **140-160 字符**。

由于数据庞大，将分为三个批次执行：
- **Batch 1 (核心攻略)**：`codes`, `tier-list`, `units`, `beginners-guide`, `upgrades`
- **Batch 2 (进阶玩法)**：`best-loadouts`, `maps`, `enemies`, `tower-mastery`
- **Batch 3 (生态长尾)**：`updates`, `scripts`, `discord`, `season-2`，并顺带填充 `about`, `help`, `privacy`, `terms` 的基础内容。

---

## 验证计划

1. **渲染检查**：访问重构后的页面，确认 H2/H3/列表的 DOM 结构渲染正确，没有破坏现有样式。
2. **字符长度自检**：在每个批次完成后，将使用脚本文本长度校验，确保所有页面的 Title 和 Description 长度完全合法。
3. **构建测试**：运行 `npm test` 和 `npm run build`，确保修改没有破坏任何底层路由映射或 JSON Schema 解析逻辑。

## ⚠️ User Review Required

除了上一个版本提到的首页改词和分批扩写，本次计划重点加入了对 **TDH 的字符数强制限制 (50-60 / 140-160)** 以及 **H3 结构支持**。

一旦您通过该计划，我们将正式进入阶段 1（Schema扩展与组件重构）。

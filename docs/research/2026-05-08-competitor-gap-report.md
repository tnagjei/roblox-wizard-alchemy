# Noob Tower Defense Competitor Gap Report

检查日期：2026-05-08  
对标站：
- https://noobtowerdefense.wiki/
- https://noobtowerdefense.com/

## 1. 结论先行

这两个对标站已经覆盖了 Noob Tower Defense 站点最核心的 SEO 入口：codes、tier list、units、beginner guide、best loadouts、maps、enemies、update log、discord、season 2、tower mastery。

但它们的缺口也很明显：

1. `noobtowerdefense.wiki` 的信息架构很全，尤其是多出 4 个战略工具页和 21 个单位详情页；但大部分页面正文偏薄，结构化数据弱，页面只看到 WebSite schema 为主，且首页有第三方广告脚本。
2. `noobtowerdefense.com` 的首页和主要攻略页内容很强，包含 Roblox 实时数据、视频、截图、源码式引用、FAQ/Breadcrumb/ItemList/Thing 等 schema；但它把 `UPD3`、`NTDSPRING` 标为 verified active codes，且验证依据主要来自第三方 code 聚合站或 Discord 说法。我们不能在没有官方或游戏内确认前照抄。
3. 两个站都没有明显的 `/scripts/` 安全页、`/upgrades/` 或 traits/rerolls 专页、`/privacy/`、`/terms/`、`/help/`、AI crawler 用的 `llms.txt` 公开策略页，也没有把“无假 codes / pending evidence / source confidence”做成我们的这种核心差异化。
4. 我们现在已经有 18 个页面、0 verified codes 策略、About/Help/Privacy/Terms、Scripts Safety、Upgrades 页面、TDH 长度自检、600-800 词内页和 JSON-LD。下一步最值得补的是：单位详情页、交互工具、素材来源/asset credits、更新事件时间线、Discord 验证页增强。

一句话策略：

> 人有我优：保留他们做得好的 wiki 信息架构、单位入口、视频/截图、schema、内链和工具化思路，但用更严格的 codes 验证、更好的政策页、更干净的站点体验和更完整的 SEO 质量控制超过他们。  
> 人无我有：做 scripts safety、upgrades/traits、pending code evidence、source confidence、llms.txt、政策页、工具页、单位详情页深度化和“官方/游戏内验证日志”。

---

## 2. 抓取方法

本次不是只看首页，而是按“浏览器点击 + sitemap 对账”的方式做完整盘点。

### 2.1 抓取路径

1. 访问两个站的 `robots.txt`，确认允许抓取，并读取它们声明的 sitemap index。
2. 访问：
   - https://noobtowerdefense.wiki/sitemap-index.xml
   - https://noobtowerdefense.wiki/sitemap-0.xml
   - https://noobtowerdefense.com/sitemap-index.xml
   - https://noobtowerdefense.com/sitemap-0.xml
3. 从首页开始抽取所有内部链接，模拟“从导航和卡片逐个点进去”的浏览路径。
4. 对 sitemap URL 和首页可点击链接做合并去重。
5. 对每个页面抓取：
   - HTTP 状态
   - Title 长度
   - Meta Description 长度
   - Canonical
   - H1/H2/H3
   - 正文字数
   - JSON-LD 类型
   - 是否出现 active codes / code claims
   - 外部脚本和广告/统计脚本
6. 再单独访问 `.com` 的素材来源文件，确认其 asset credits 实际可访问。

### 2.2 抓取覆盖

| 站点 | sitemap URL 数 | 首页可点击内部链接 | 合并后检查 URL 数 | 备注 |
|---|---:|---:|---:|---|
| noobtowerdefense.wiki | 39 | 17 | 39 | 有工具页和更多单位详情页 |
| noobtowerdefense.com | 31 | 27 | 34 | sitemap 31 个，首页另有素材文件链接 |

### 2.3 重要限制

- 本报告基于 2026-05-08 抓取结果，外部站可能随时改内容。
- “verified active codes” 是对方站内自己的标注，不代表我们已完成官方或游戏内验证。
- `.com` 首页链接到 Markdown/视频素材文件，这些文件不在 sitemap 页面列表里，但实际返回 200，可作为我们学习素材溯源的参考。

---

## 3. 站点一：noobtowerdefense.wiki

来源：
- 首页：https://noobtowerdefense.wiki/
- sitemap：https://noobtowerdefense.wiki/sitemap-0.xml
- codes：https://noobtowerdefense.wiki/codes/
- tools：https://noobtowerdefense.wiki/tools/

### 3.1 信息架构

`noobtowerdefense.wiki` sitemap 抓到 39 个 URL：

| 类型 | URL/页面 |
|---|---|
| 核心页 | `/`、`/codes/`、`/tier-list/`、`/units/`、`/beginner-guide/`、`/best-loadouts/` |
| 游戏资料 | `/maps/`、`/enemies/`、`/update-log/`、`/discord/`、`/season-2/`、`/tower-mastery/` |
| 工具页 | `/tools/`、`/tools/ese/`、`/tools/adca/`、`/tools/trf/`、`/tools/srm/` |
| 单位页 | `/units/1x1x1x1/`、`/units/agent/`、`/units/business-man/`、`/units/farm/`、`/units/hacker/`、`/units/hitman/`、`/units/inverse-moderator-tower/`、`/units/juggernaut/`、`/units/king/`、`/units/legionaire/`、`/units/marksmen/`、`/units/minigunner/`、`/units/mod/`、`/units/moderator/`、`/units/monkey-tower/`、`/units/mr-monkey/`、`/units/musician/`、`/units/nox/`、`/units/pyromancer/`、`/units/railgunner/`、`/units/slimegunner/`、`/units/veteran/` |

### 3.2 它做得好的地方

#### 3.2.1 信息架构完整

首页导航非常清楚，核心入口包括：

- Codes
- Tier List
- Units
- Guide
- Loadouts
- Maps
- Enemies
- Tools
- Updates
- Discord

这套结构对 SEO 很友好，因为它把玩家常搜的词拆成了可点击入口。我们已经有多数入口，但它多出的是 `Tools` 和大量单位详情页。

#### 3.2.2 首页有快速预览

首页直接放：

- Active Codes 预览
- S-tier Units 预览
- Featured Units 预览
- Latest Updates
- Strategic Tools

这个对用户很有效：用户不用点进页面，也能快速判断站点有没有料。

我们可以借鉴，但要注意：它首页直接展示 active codes。我们没有验证前不能这么做，可以改成：

- Verified codes: 0
- Pending code evidence
- Code verification policy
- Last checked

#### 3.2.3 有战略工具页

它有 4 个工具：

| 工具 | URL | 主题 |
|---|---|---|
| Economic Scaling Engine | `/tools/ese/` | ROI / break-even |
| DPS & Coverage Auditor | `/tools/adca/` | DPS / coverage / dead zone |
| Threat-Response Forecaster | `/tools/trf/` | enemy counter |
| Synergy & Resilience Matrix | `/tools/srm/` | support synergy / stun resilience |

这非常值得学习。工具页的优点是：

- 比普通文章更容易形成差异化。
- 用户停留时间会更长。
- 可以承接长尾词，比如 “best loadout calculator”、“farm ROI”、“DPS calculator”、“unit synergy”。

但这些工具目前正文并不算深，且更像静态计算器雏形。我们可以做到更可信：先做“source-aware planner”，不承诺精确数值，只做选择器和建议说明。

#### 3.2.4 单位页铺得多

它有 21 个单位详情页。即使每个页面只有 170-200 词左右，也能吃到很多长尾：

- noob tower defense juggernaut
- noob tower defense king
- noob tower defense hacker
- noob tower defense farm
- noob tower defense veteran
- noob tower defense railgunner

这是我们当前最大缺口之一。我们现在有 `/units/` 总页，但没有每个单位独立 URL。

### 3.3 它的明显短板

#### 3.3.1 多数页面内容偏薄

抓取字数示例：

| 页面 | 抓取正文字数 |
|---|---:|
| `/codes/` | 487 |
| `/best-loadouts/` | 361 |
| `/discord/` | 291 |
| `/enemies/` | 265 |
| `/maps/` | 315 |
| `/season-2/` | 294 |
| `/tower-mastery/` | 259 |
| 单位详情页 | 多数 171-198 |

这说明它页面多，但大部分还没做深。我们的内页已经按 600-800 词做了，这是一个优势。

#### 3.3.2 结构化数据弱

抓取到的 JSON-LD 基本都是 `WebSite`。没有明显的：

- FAQPage
- BreadcrumbList
- ItemList
- VideoGame
- Thing
- Article

这点我们可以优于它：我们的页面已经有 Article / FAQPage / BreadcrumbList，首页还有 WebSite / VideoGame。

#### 3.3.3 Title/Description 控制不稳定

例子：

- `/codes/` title 35 字符，description 88 字符，偏短。
- `/update-log/` description 68 字符，偏短。
- 大量单位页 title 29-49 字符，低于 AGENTS 要求的 50-60。

我们已经有测试强制 Title 50-60、Description 140-160，这是“人有我优”的点。

#### 3.3.4 首页有第三方广告脚本

抓取到它首页注入了 `sireimplement.com` 相关脚本，用于 social bar / native banner。

这对用户体验和信任感有风险：

- 页面更慢。
- 站点显得更像广告站。
- 对新站 SEO 初期的信任建设不利。

我们的机会：保持无广告、干净、可信、攻略站风格。

#### 3.3.5 Codes 验证口径风险

`.wiki` 把 `UPD3`、`NTDSPRING` 放在 active codes 预览里，也有 expired code 表。它的证据主要是第三方站交叉，不等于官方或游戏内验证。

我们的机会：不要比它“更敢写”，而是比它“更可信”。做：

- Pending Code Evidence
- Why we do not mark it active yet
- Official / in-game verification required
- Last checked

---

## 4. 站点二：noobtowerdefense.com

来源：
- 首页：https://noobtowerdefense.com/
- sitemap：https://noobtowerdefense.com/sitemap-0.xml
- codes：https://noobtowerdefense.com/codes/
- asset credits：https://noobtowerdefense.com/assets/discord/ASSET_CREDITS.md
- Roblox asset credits：https://noobtowerdefense.com/assets/roblox/ASSET_CREDITS.md

### 4.1 信息架构

`noobtowerdefense.com` sitemap 抓到 31 个页面：

| 类型 | 页面 |
|---|---|
| 核心页 | `/`、`/codes/`、`/tier-list/`、`/units/`、`/beginner-guide/`、`/best-loadouts/` |
| 游戏资料 | `/maps/`、`/enemies/`、`/update-log/`、`/discord/`、`/season-2/`、`/tower-mastery/` |
| 单位页 | `/units/1x1x1x1/`、`/units/farms/`、`/units/hacker/`、`/units/inverse-moderator-tower/`、`/units/juggernaut/`、`/units/king/`、`/units/legionaire/`、`/units/marksmen/`、`/units/minigunner/`、`/units/mod/`、`/units/moderator/`、`/units/monkey-tower/`、`/units/mr-monkey/`、`/units/musician/`、`/units/nox/`、`/units/pyromancer/`、`/units/railgunner/`、`/units/slimegunner/`、`/units/veteran/` |

注意：它没有 `/tools/`，而 `.wiki` 有工具页。

### 4.2 它做得好的地方

#### 4.2.1 首页内容非常强

首页正文字数约 2650，覆盖：

- Roblox 实时数据快照
- 游戏介绍
- Active codes
- Redeem steps
- S/A tier units
- Role-based unit cards
- Discord 官方视频
- YouTube 玩法视频
- Roblox screenshots
- Beginner tips
- Loadout cheat sheet
- Maps
- Enemies
- Latest update
- Discord/community
- FAQ

这套首页很像一个“超级聚合页”。它不仅做导航，还把核心内容摘要都放在首页。这对 SEO 有好处，因为首页能覆盖大量实体词和长尾词。

我们当前首页也有视频、数据、入口、source confidence，但相比它还缺：

- 单位角色卡片直接展示
- Roblox official thumbnails 图集
- 明确的 latest update timeline
- Discord official clip / asset credits
- Loadout cheat sheet
- Gameplay video provenance

#### 4.2.2 结构化数据较好

抓取到：

| 页面类型 | 结构化数据 |
|---|---|
| 首页 | WebSite、VideoGame、FAQPage |
| codes | FAQPage、BreadcrumbList |
| tier-list | ItemList、FAQPage、BreadcrumbList |
| units | ItemList、BreadcrumbList |
| unit detail | Thing、BreadcrumbList |
| discord | Organization、BreadcrumbList |
| update-log | ItemList、FAQPage、BreadcrumbList |

这个值得学习。我们已经有 Article / FAQPage / BreadcrumbList / WebSite / VideoGame，但还可以补：

- Unit detail 页用 Thing 或 GameGuide/Article
- Tier list 用 ItemList
- Units 总页用 ItemList
- Discord 页用 Organization
- Update log 用 ItemList

#### 4.2.3 内页内容深度更好

抓取字数：

| 页面 | 正文字数 |
|---|---:|
| `/codes/` | 922 |
| `/beginner-guide/` | 892 |
| `/best-loadouts/` | 776 |
| `/enemies/` | 1319 |
| `/maps/` | 1116 |
| `/season-2/` | 1388 |
| `/tower-mastery/` | 1372 |
| `/update-log/` | 1363 |
| `/units/` | 990 |

它的内容深度比 `.wiki` 强很多。我们刚完成的 600-800 词内页已经足够基础 SEO，但如果要争 SERP，后续可以针对高价值页面继续扩到 900-1300 词。

优先扩：

1. `/codes/`
2. `/tier-list/`
3. `/updates/`
4. `/season-2/`
5. `/tower-mastery/`
6. `/maps/`
7. `/enemies/`

#### 4.2.4 素材来源说明做得好

它提供：

- Discord asset credits
- Roblox asset credits
- 官方 Discord 视频来源说明
- Roblox thumbnails API 获取说明

这很值得学习。我们的站已经用了 Roblox CDN 图片和 YouTube 视频，但还没有公开的素材来源说明页面或文件。

我们可以做得更好：

- `/sources/` 或 `/about/sources/`
- `public/data/source-log.json`
- `docs/research/assets-provenance.md`
- 页面内显示“source verified / pending / research-only”
- 对每张 Roblox 图片记录 API endpoint、snapshot date、copyright note

#### 4.2.5 视频和截图强

它首页有：

- official Discord gameplay clip
- YouTube gameplay references
- Roblox official thumbnails

这对用户信任很强。我们现在首页已有 5 个 YouTube 视频，但还缺 Roblox screenshot gallery 和来源说明。

### 4.3 它的明显短板

#### 4.3.1 Codes 页面验证口径和我们不同

`.com` 在 codes 页直接标：

- `UPD3`
- `NTDSPRING`

为 active / verified，并给出 reward。它的说明提到多个第三方站交叉检查，也提到 Discord 相关说法。

但我们的原则是：没有官方或游戏内验证时不能发布 active codes。这里不能照抄。

我们的差异化机会：

- 做“可信 code tracker”，不做“最快 code list”。
- 把 `UPD3`、`NTDSPRING` 作为 pending candidates，不进入 active。
- 提供“为什么其他站说 active，但我们不标 active”的解释。
- 提供“玩家自己如何验证”的步骤。
- 如果之后你能进游戏实际兑换成功，再升级为 verified active，并记录截图/时间/账号环境。

#### 4.3.2 部分 TDH 超出规范

按 AGENTS 的要求：

- Title 50-60 字符
- Description 140-160 字符

`.com` 有些页面超出：

| 页面 | 问题 |
|---|---|
| `/best-loadouts/` | title 65，description 192 |
| `/enemies/` | title 64 |
| `/season-2/` | description 186 |
| `/tier-list/` | description 167 |
| `/tower-mastery/` | description 172 |
| `/update-log/` | title 65，description 169 |

我们现在已经用测试强制 TDH，这是优势。

#### 4.3.3 没有工具页

`.com` 没有 `.wiki` 那种 `/tools/`。这是我们可以做差异化的方向：

- Code verifier checklist
- Unit role picker
- Loadout planner
- Farm ROI calculator
- Map placement checklist
- Enemy counter selector

#### 4.3.4 缺政策和安全类页面

没有明显看到：

- Privacy
- Terms
- Help
- Scripts Safety
- Upgrades/Traits/Rerolls
- llms.txt

这些我们已经有，属于“人无我有”。

#### 4.3.5 单位详情页仍偏薄

`.com` 的单位详情页比 `.wiki` 好，但也多在 244-355 词区间：

| 单位页 | 字数 |
|---|---:|
| `/units/farms/` | 244 |
| `/units/hacker/` | 311 |
| `/units/juggernaut/` | 330 |
| `/units/king/` | 308 |
| `/units/veteran/` | 253 |

我们的机会不是只建单位页，而是每个单位页做到：

- 600-800 词
- Unit role
- Best maps
- Best support pair
- Upgrade priority
- Trait priority
- Common mistake
- Source confidence
- Related units
- FAQ
- Thing / Article / Breadcrumb JSON-LD

这样可以直接超过它。

---

## 5. 两个对标站共同覆盖的内容

这些是“人有我也必须有”的基础盘：

| 内容模块 | `.wiki` | `.com` | 我们当前状态 | 建议 |
|---|---|---|---|---|
| Home hub | 有 | 很强 | 有 | 首页继续补 Roblox 图集和 latest update timeline |
| Codes | 有 | 很强 | 有 | 保持 0 verified，不抄 active；加 pending evidence 更醒目 |
| Tier list | 有 | 强 | 有 | 后续补 ItemList schema 和 tier table |
| Units 总页 | 有 | 强 | 有 | 补单位卡片和独立单位页 |
| Unit detail | 21 个 | 19 个 | 无 | P0 补 10-20 个单位页 |
| Beginner guide | 有 | 强 | 有 | 可补视频/first 10 minutes flow |
| Best loadouts | 有 | 强 | 有 | 补 loadout cards 和 map-specific variants |
| Maps | 有 | 强 | 有 | 补 map verification / placement guide |
| Enemies | 有 | 强 | 有 | 补 enemy category + counter selector |
| Update log | 有 | 很强 | `/updates/` 有 | 做 timeline，改名或兼容 `/update-log/` |
| Discord links | 有 | 强 | 有 | 补 Organization schema 和 verified link table |
| Season 2 | 有 | 强 | 有 | 补 exact timeline 和 pending/verified labels |
| Tower mastery | 有 | 强 | 有 | 补 mastery planner |

---

## 6. 两个对标站缺失或弱的内容

这些是我们最适合下手的差异化内容。

### 6.1 Scripts Safety

两个站都没有明显 `/scripts/` 安全页。

为什么重要：

- “noob tower defense scripts” 是高风险但有搜索量的词。
- 大量 SERP 会被 exploit/script 页面占据。
- 我们可以不提供脚本，而是做安全解释、风险提示、合法替代路线。

建议页面强化：

- Script / executor 风险
- Cookie / token stealing 风险
- Fake auto farm 风险
- Safe grinding route
- What to do if you installed a suspicious executor
- Roblox account safety checklist
- FAQPage schema

### 6.2 Upgrades / Traits / Rerolls

两个站没有明显独立 upgrades/traits/rerolls 页面。

我们已有 `/upgrades/`，可以继续深化：

- traits priority
- reroll decision tree
- when to upgrade carry vs support
- mistake: rerolling too early
- no exact numbers until verified
- related pages：tower mastery、units、tier list

### 6.3 Verified vs Pending Evidence System

两个站都说自己会源头检查，但它们仍直接发布 active codes。

我们可以做更强的信任系统：

| 状态 | 说明 |
|---|---|
| verified official | 官方 Roblox / developer channel 直接确认 |
| verified in-game | 实际兑换或游戏内界面确认 |
| pending third-party | 多个第三方出现，但未官方/游戏内确认 |
| conflicting | 来源冲突 |
| expired | 明确失效 |
| rejected | 证据不足或错误 |

这套系统可以放在 codes、discord、updates、unit stats、maps 上。

### 6.4 Policy Pages

两个站没有明显 policy cluster：

- About
- Help
- Privacy
- Terms

我们已经补齐。这对小站信任、GSC、广告平台审核、用户反馈都更友好。

### 6.5 AI crawler / llms.txt

两个站没有明显 `llms.txt` 策略。

我们已有 `llms.txt` 和 `llms-full.txt`，这是“人无我有”。后续可把它作为 AI 搜索优化资产：

- llms.txt 汇总核心页面
- llms-full.txt 汇总完整内容
- robots.txt 里引导 AI crawler

### 6.6 Unit Detail Depth

两个站都有单位页，但普遍薄。我们可以做“单位页深度化”：

单个单位页模板：

1. Unit overview
2. Role and tier
3. Best use cases
4. Best maps
5. Best pairings
6. Upgrade priority
7. Trait/reroll priority
8. Common mistakes
9. Source confidence
10. FAQ

目标：每页 600-800 词，TDH 合规，Thing + Article + Breadcrumb + FAQ schema。

### 6.7 Tools / Calculators

`.wiki` 有工具页，`.com` 没有。我们当前没有。

工具是高价值差异化。建议不要一开始做复杂真实计算器，而是先做“planner / selector”：

1. `/tools/code-verifier/`
   - 玩家输入 code，页面不联网兑换，只给 verification checklist。
   - 适合承接 “code not working”。

2. `/tools/loadout-planner/`
   - 选择账号阶段、拥有单位、目标模式，输出推荐框架。
   - 不承诺绝对最优。

3. `/tools/unit-picker/`
   - 选择问题：boss damage / early leaks / economy / invisible enemies。
   - 输出适合查的单位。

4. `/tools/farm-roi/`
   - 如果没有准确数值，先做 explain mode：何时 Farm 值得放，何时不值得。

5. `/tools/enemy-counter/`
   - 选择 enemy type，输出 counter categories。

### 6.8 Source / Asset Provenance

`.com` 的 asset credits 很值得学。它说明了 Discord 素材和 Roblox 缩略图来源。

我们可以做：

- `/sources/`
- `/sources/assets/`
- public data 里记录 `sourceType`、`capturedAt`、`usedFor`
- 每张 Roblox 图有 API endpoint 和 capture date
- YouTube 视频有 query、capturedAt、channel、views

这会让我们比普通攻略站更可信。

---

## 7. SEO 对比

### 7.1 Title / Description

| 指标 | `.wiki` | `.com` | 我们 |
|---|---|---|---|
| Title 控制 | 很多偏短 | 部分过长 | 已测试 50-60 |
| Description 控制 | 很多偏短 | 部分过长 | 已测试 140-160 |
| keyword meta | `.wiki` 首页有 keywords | 未重点发现 | 我们不填，符合规范 |
| canonical | 有 | 有 | 有 |

结论：我们在 TDH 规范化上可以超过两者。

### 7.2 Schema

| Schema | `.wiki` | `.com` | 我们当前 |
|---|---|---|---|
| WebSite | 有 | 有 | 有 |
| VideoGame | 未明显广泛看到 | 首页有 | 首页有 |
| FAQPage | 弱 | 多页有 | 多页有 |
| BreadcrumbList | 弱 | 多页有 | 多页有 |
| Article | 弱 | 未重点看到 | 有 |
| ItemList | 弱 | tier/units/update 有 | 可补 |
| Thing | 弱 | unit detail 有 | 待单位页补 |
| Organization | 弱 | discord 有 | 可补 |

建议我们下一步补：

- `/tier-list/`：ItemList
- `/units/`：ItemList
- `/updates/`：ItemList
- `/discord/`：Organization
- 未来单位详情页：Thing + Article + FAQPage + BreadcrumbList

### 7.3 内链

两个对标站都做了不错的内链：

- footer 分组
- mobile bottom tabs
- related pages
- 首页聚合入口
- 页面底部继续阅读

我们已补 RelatedGrid 和 footer 分组，但还可以继续优化：

- 每篇内页底部加 “Use this page with ...”
- codes 页底部链接 tier list / loadouts / season 2 / updates
- units 页链接每个 unit detail
- updates 页链接 codes / season 2 / tower mastery

### 7.4 内容深度

| 页面类型 | `.wiki` | `.com` | 我们 |
|---|---:|---:|---:|
| 首页 | 377 | 2650 | 中等，可继续扩 |
| codes | 487 | 922 | 730 |
| beginner | 635 | 892 | 729 |
| best-loadouts | 361 | 776 | 728 |
| maps | 315 | 1116 | 720 |
| enemies | 265 | 1319 | 709 |
| season 2 | 294 | 1388 | 712 |
| tower mastery | 259 | 1372 | 708 |
| unit details | 170-200 | 244-355 | 无 |

结论：

- 我们已经超过 `.wiki` 多数页面。
- `.com` 在首页、maps、enemies、season 2、tower mastery、update log 上更深。
- 我们下一步要追的是：单位详情页 + update timeline + homepage hub depth。

---

## 8. 内容机会清单

### P0：马上做，最能拉开差异

#### 8.1 单位详情页集群

建议先做 12 个高价值单位：

1. `/units/juggernaut/`
2. `/units/king/`
3. `/units/hacker/`
4. `/units/railgunner/`
5. `/units/farm/`
6. `/units/veteran/`
7. `/units/musician/`
8. `/units/slimegunner/`
9. `/units/1x1x1x1/`
10. `/units/mod/`
11. `/units/nox/`
12. `/units/pyromancer/`

每页目标：

- 600-800 词
- Title 50-60
- Description 140-160
- H1/H2/H3
- FAQ
- Thing + Article + BreadcrumbList + FAQPage
- Source confidence
- Related unit links

为什么优先：

- 两个对标站都有单位页。
- 它们都偏薄。
- 单位名是最自然的长尾词。
- 单位页可以强力反哺 tier list、loadouts、upgrades、tower mastery。

#### 8.2 Code Evidence Hub

我们已有 codes 页面，但可以进一步做：

- Active: 0 verified
- Pending candidates: UPD3 / NTDSPRING / 500LIKES
- Conflict table: 哪些站说 active，哪些站说 expired
- Verification checklist
- In-game test log
- Screenshot placeholder
- “Why other sites show codes but we do not”

这样可以直接吃 “noob tower defense codes not working”、“UPD3 code not working”、“NTDSPRING not working”。

#### 8.3 Update Timeline

对标 `.com` 的 update-log 很强。我们当前 `/updates/` 可以强化为：

- timeline
- Update 3
- Season 1 ending
- Season 2 expected
- Endless mode date if verified
- Slimegunner issue if verified
- code recheck windows
- source labels

可以同时加 `/update-log/` redirect 或别名页，承接对方同类 URL 习惯。

#### 8.4 Asset / Source Page

新建：

- `/sources/`
- `/sources/assets/`

内容：

- Roblox API thumbnails source
- YouTube video capture query
- Roblox game API source
- Votes API source
- Discord status pending/verified
- Use policy

这能复制 `.com` 的优点，并做得更系统。

### P1：第二阶段做，形成强差异化

#### 8.5 Tools 集群

先做不需要精确游戏数值的工具：

| 工具 | 页面 | 说明 |
|---|---|---|
| Code Status Checker | `/tools/code-checker/` | 不联网兑换，只解释状态和下一步 |
| Loadout Planner | `/tools/loadout-planner/` | 按账号阶段推荐队伍框架 |
| Unit Role Picker | `/tools/unit-picker/` | 按问题找单位 |
| Farm ROI Guide | `/tools/farm-roi/` | 解释 Farm 何时值得 |
| Enemy Counter Planner | `/tools/enemy-counter/` | 按 enemy category 输出 counter |

注意：不要编造 DPS 或精确收益，除非以后有游戏内数据。

#### 8.6 Maps / Enemies 深度页

`.com` 在 maps/enemies 上 1000+ 词，我们现在 700 左右。可以扩：

- map verification status
- map type
- placement zones
- common leak points
- enemy category
- counters
- boss preparation
- invisible enemy handling

#### 8.7 Discord / Community 深度化

做一个比对标站更安全的 community page：

- Verified official links
- Pending links
- Fake Discord warning
- How to verify a Discord invite
- Do not enter passwords
- Organization JSON-LD

### P2：第三阶段做，锦上添花

#### 8.8 Glossary

两个站没有明显 glossary。可以做：

- `/glossary/`
- DPS
- AoE
- Farm
- Carry
- Support
- Invisible
- Boss wave
- Trait
- Mastery

#### 8.9 FAQ Hub

两个站各页面有 FAQ，但没有 FAQ 总入口。可以做：

- `/faq/`
- codes FAQ
- unit FAQ
- update FAQ
- safety FAQ

#### 8.10 Changelog for This Site

做 `/site-updates/` 或 `/changelog/`：

- 页面更新记录
- source checks
- code checks
- corrections

这对信任很有帮助。

---

## 9. 不建议照抄的内容

### 9.1 不要照抄 active codes

原因：

- 两个对标站都把 `UPD3` / `NTDSPRING` 当 active。
- 但我们当前没有官方或游戏内验证。
- 我们的定位是更可信，而不是更冒险。

执行原则：

> 没有官方或游戏内确认：保持 0 verified codes。

### 9.2 不要照搬 `.wiki` 的广告脚本

`.wiki` 首页有第三方广告脚本。新站早期不建议这样做。

原因：

- 影响体验。
- 影响加载。
- 降低信任。
- 游戏攻略站刚起步时，可信度比短期广告收益重要。

### 9.3 不要做假精确工具

`.wiki` 工具页很有启发，但我们不能没有数据就做“精确 DPS / ROI / heatmap”。

正确做法：

- 先做 planner。
- 标注 [Inference]。
- 等有游戏内数据后再升级为 calculator。

### 9.4 不要用过期或未核验 Discord 信息当 official

`.com` 对 Discord 写得很细，但我们需要自己验证：

- 官方 Roblox 页面是否放了 Discord
- Vitan Games group 是否放了 Discord
- Discord invite 是否仍有效
- guild ID 是否匹配

未验证前保持 pending。

---

## 10. 我们站点当前优势

我们当前已经有的优势：

1. `0 verified codes` 策略更保守，不编造 active code。
2. `/scripts/` 安全页是对标站缺口。
3. `/upgrades/` 独立页是对标站缺口。
4. `/about/`、`/help/`、`/privacy/`、`/terms/` 更完整。
5. `llms.txt` 和 `llms-full.txt` 是对标站未明显覆盖的 AI crawler 资产。
6. 所有内页已经自动校验 Title 50-60、Description 140-160。
7. 17 个内页已经控制在 600-800 词和 3%-5% 关键词密度。
8. 有 Article / FAQPage / BreadcrumbList，首页有 WebSite / VideoGame。
9. Footer 不展示 llms.txt，用户体验更干净。
10. 无广告脚本，站点信任感更好。

---

## 11. 我们站点当前短板

需要承认的短板：

1. 没有单位详情页集群，对方两个站都有。
2. 没有工具页，对 `.wiki` 处于劣势。
3. 首页内容深度不如 `.com`。
4. 缺 Roblox screenshots gallery。
5. 缺 asset credits / source provenance 公开页。
6. `/updates/` 还不如 `.com` 的 update-log 细。
7. `/maps/`、`/enemies/` 还没有 `.com` 那种 1000+ 词深度。
8. Tier list 还缺 ItemList schema 和清晰 tier table。
9. Units 总页还缺可点击 unit cards。
10. Discord 页还缺 Organization schema 和官方链接核验流程。

---

## 12. 推荐路线图

### Phase 1：单位页和数据结构

目标：补齐最大 SEO 缺口。

交付：

- 新增 12 个单位详情页。
- units 总页改成 unit cards。
- 增加 unit data JSON。
- 每个单位页 600-800 词。
- 每个单位页有 Thing / Article / FAQ / Breadcrumb。

优先单位：

- Juggernaut
- King
- Hacker
- Railgunner
- Farm
- Veteran
- Musician
- Slimegunner
- 1x1x1x1
- Mod
- Nox
- Pyromancer

### Phase 2：Code evidence 和 update timeline

目标：用“可信 codes”超过对方。

交付：

- codes 页加 conflict matrix。
- updates 页加 timeline。
- 增加 `/update-log/` 兼容入口。
- 增加 in-game verification checklist。
- 增加 “why other sites show active codes” section。

### Phase 3：素材和来源系统

目标：复制 `.com` 的 asset credits 优点，并做得更系统。

交付：

- `/sources/`
- `/sources/assets/`
- Roblox thumbnail source log
- YouTube video source log
- Discord source status log
- public data source table

### Phase 4：工具页

目标：追平 `.wiki` 的工具页，并降低造假风险。

交付：

- `/tools/`
- `/tools/code-checker/`
- `/tools/loadout-planner/`
- `/tools/unit-picker/`
- `/tools/farm-roi/`
- `/tools/enemy-counter/`

### Phase 5：深度页扩展

目标：追 `.com` 的深度页优势。

交付：

- `/maps/` 扩展到 1000+ 词。
- `/enemies/` 扩展到 1000+ 词。
- `/season-2/` 扩展到 1000+ 词。
- `/tower-mastery/` 扩展到 1000+ 词。
- 所有页面继续保持 TDH 合规。

---

## 13. 可直接加入我们网站的模块清单

下面这些可以直接进入下一份执行计划。

### 13.1 首页新增模块

1. Roblox screenshot gallery
2. Latest update timeline card
3. Unit role preview cards
4. Source provenance card
5. Pending code evidence summary
6. Continue reading / related guide strip

### 13.2 Codes 页新增模块

1. Other sites claim active, we mark pending
2. Conflict matrix
3. In-game verification checklist
4. Code not working troubleshooting
5. Season flip code risk
6. Source confidence table

### 13.3 Units 页新增模块

1. Unit search/filter
2. Role filters
3. Tier labels
4. Source confidence
5. Link to unit detail pages
6. Best pairing snippets

### 13.4 Unit detail 页模板

1. Overview
2. Role
3. Strengths
4. Weaknesses
5. Best loadouts
6. Best maps
7. Upgrade priority
8. Traits / rerolls
9. Source confidence
10. FAQ

### 13.5 Tools 页 MVP

1. Tool index
2. Code checker
3. Unit picker
4. Loadout planner
5. Farm ROI explainer
6. Enemy counter selector

---

## 14. 最终建议

短期不要和对方拼“谁敢写 active codes”。这条路风险很高，而且别人已经抢先。我们应该换打法：

1. 用“可信验证”打 codes。
2. 用“单位详情页深度”打长尾。
3. 用“scripts safety / upgrades / policy / llms”做人无我有。
4. 用“tools / planners”追平并超过 `.wiki`。
5. 用“source provenance / screenshots / update timeline”追平并超过 `.com`。

最优先执行：

1. 单位详情页集群。
2. Code evidence matrix。
3. Update timeline。
4. Sources / assets 页面。
5. Tools MVP。

---

## 15. Source Links

- noobtowerdefense.wiki homepage: https://noobtowerdefense.wiki/
- noobtowerdefense.wiki sitemap: https://noobtowerdefense.wiki/sitemap-0.xml
- noobtowerdefense.wiki codes: https://noobtowerdefense.wiki/codes/
- noobtowerdefense.wiki tools: https://noobtowerdefense.wiki/tools/
- noobtowerdefense.com homepage: https://noobtowerdefense.com/
- noobtowerdefense.com sitemap: https://noobtowerdefense.com/sitemap-0.xml
- noobtowerdefense.com codes: https://noobtowerdefense.com/codes/
- noobtowerdefense.com Discord asset credits: https://noobtowerdefense.com/assets/discord/ASSET_CREDITS.md
- noobtowerdefense.com Roblox asset credits: https://noobtowerdefense.com/assets/roblox/ASSET_CREDITS.md

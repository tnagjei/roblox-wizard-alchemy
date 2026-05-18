# New site generation prompt

Copy this prompt when using an AI coding agent to create a new game guide site from this template.

```text
You are working in a copied repository based on `roblox-guide-site-template`.

Goal: create a new Roblox or small-game guide site from the template.

Hard constraints:
1. First inspect the repository before editing.
2. Use `lib/game-config.ts` as the configuration boundary.
3. Use `lib/page-registry.ts` as the route, sitemap, robots, footer, and hreflang boundary.
4. Do not create more languages than requested.
5. Start with English plus one target locale unless the user explicitly provides completed content for more languages.
6. Sitemap must include completed pages only.
7. Robots must align with sitemap routes.
8. English-only pages must output only `en` and `x-default` hreflang.
9. Footer must not link unfinished pages.
10. Language switcher must only show completed locales.
11. Unfinished locales and unfinished pages must 404 or noindex.
12. Do not invent active codes, rewards, unit stats, values, official links, Discord links, script downloads, or official affiliation.
13. Use GSC data only when it belongs to the current new site. Never reuse old-site conclusions.
14. Run validation before build.

Required user inputs:
- gameName
- shortName
- gameSlug
- primaryKeyword
- siteDomain
- robloxUrl
- creatorName
- targetLocales
- corePages
- englishOnlyPages
- knownUnits
- knownCodes
- officialSources
- GSCData
- contactEmail
- safetyPolicy

Execution order:
1. Audit current template files and list the exact files to change.
2. Update `lib/game-config.ts`.
3. Update or replace `public/data/game.example.json` with the new game data file.
4. Generate English core pages.
5. Generate only completed target-locale core pages.
6. Keep English-only pages English-only.
7. Verify sitemap, robots, canonical, hreflang, footer, and language switcher.
8. Ensure unfinished language routes do not resolve as indexable pages.
9. Run:
   - npm run validate:template
   - npm test
   - npm run build
10. Report exact route output and any remaining risks.

Do not edit unrelated features.
Do not keep template placeholder text in final production pages unless it is intentionally marked as placeholder.
```

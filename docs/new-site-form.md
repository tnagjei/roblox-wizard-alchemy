# New site generation form

Use this form before creating a new Roblox or small-game guide site from the template.

## Required inputs

```yaml
gameName:
shortName:
gameSlug:
primaryKeyword:
siteDomain:
robloxUrl:
creatorName:
creatorGroupUrl:
contactEmail:
defaultLocale: en
completedLocales:
  - en
  - zh-tw
  - th
corePages:
  - home
  - codes
  - tier-list
  - updates
  - beginners-guide
  - units
englishOnlyPages:
  - scripts
  - value-list
  - macros
  - discord
knownUnits: []
knownCodes: []
officialSources:
  - label: Roblox game page
    url:
    status: pending
GSCData: []
safetyPolicy:
  noFakeCodes: true
  noInventedRewards: true
  noInventedUnitStats: true
  noOfficialClaimWithoutSource: true
  noScriptDownloads: true
  noCredentialCollection: true
doNotTouch:
  - Do not publish unverified active codes.
  - Do not generate unfinished locale URLs.
  - Do not add non-English hreflang for English-only pages.
notes:
```

## Field rules

- `gameName`: use the display name from the official game page.
- `gameSlug`: lowercase, hyphenated, domain-safe.
- `siteDomain`: production domain with protocol, no trailing slash.
- `robloxUrl`: official Roblox URL only.
- `completedLocales`: only list languages whose routes, content, sitemap, robots, hreflang, language switcher, and footer are complete.
- `englishOnlyPages`: pages that must not generate localized routes until translated and reviewed.
- `knownCodes`: leave empty unless each code has source, date, reward, and verification status.
- `GSCData`: use only after the site has data. Do not bake old site conclusions into a new project.

## Minimum launch scope

For a first production site, use:

```yaml
completedLocales:
  - en
  - one_target_locale
```

This template keeps `zh-tw` and `th` examples, but a new production site should only enable languages that are actually complete.

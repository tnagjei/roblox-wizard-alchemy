# Template cleanup checklist

## Goal

Turn the copied game guide site into a reusable Roblox guide site template without carrying game-specific data into future projects.

## Must be parameterized

- Site name
- Short site name
- Game name
- Game slug
- Primary keyword
- Domain
- Contact email
- Creator name
- Roblox game URL
- Roblox group URL
- Completed locales
- Core page slugs
- English-only page slugs
- Analytics and ad IDs
- Source confidence labels
- Code verification status

## Forbidden copied content in runtime files

- Old game names
- Old creator names
- Old Roblox place or universe IDs
- Old code strings
- Old unit names
- Old domain
- Old analytics IDs
- Old ad IDs
- Old GSC conclusions

## Validation commands

```bash
npm run validate:template
npm test
npm run build
```

## Sitemap rules

- Only completed core pages are listed for completed locales.
- English-only pages only appear in English.
- Unfinished locales are not listed.
- Robots allow list must come from the same route registry as sitemap.

## Hreflang rules

- Localized core pages use completed locales only.
- English-only pages use only `en` and `x-default`.
- Do not output unfinished locales.

## Footer rules

- Footer links only completed pages.
- English-only pages only show on English pages.
- Language switcher only shows completed locales.

## Content rules

- Do not invent active codes.
- Do not invent rewards.
- Do not invent unit stats.
- Do not invent value lists.
- Do not claim official affiliation without proof.
- Do not link script downloads by default.

# Noob Tower Defense Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a conservative, source-aware Noob Tower Defense Roblox guide site with zero unverified active codes.

**Architecture:** Use Next.js App Router with static content from one public JSON data file, shared SEO helpers, and reusable guide-page components. Keep codes as data-driven content so future verification can update one JSON/source module without rewriting pages.

**Tech Stack:** Next.js, React, TypeScript, Node built-in test runner.

---

### Task 1: Data Contract

**Files:**
- Create: `public/data/noob-tower-defense.json`
- Create: `lib/site-data.ts`
- Test: `tests/seo-data.test.mjs`

**Steps:**
1. Write failing tests that require official Roblox IDs, eight routes, and zero verified codes.
2. Add the public JSON with Roblox API snapshot, keyword candidates, SERP summaries, and page definitions.
3. Import JSON through `lib/site-data.ts`.
4. Run `npm test` and confirm the data assertions pass.

### Task 2: SEO Helpers

**Files:**
- Create: `lib/seo.ts`
- Create: `components/JsonLd.tsx`

**Steps:**
1. Add metadata builder with canonical URLs from `NEXT_PUBLIC_SITE_URL`.
2. Add Article, FAQPage, and BreadcrumbList builders.
3. Render JSON-LD safely through a small server component.
4. Run `npm test`.

### Task 3: Pages

**Files:**
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: route pages for `/codes/`, `/tier-list/`, `/units/`, `/upgrades/`, `/beginners-guide/`, `/updates/`, `/scripts/`
- Create: `components/GuidePage.tsx`
- Create: `components/SiteChrome.tsx`
- Create: `app/globals.css`

**Steps:**
1. Build the shared layout and navigation.
2. Build the homepage with Roblox stats, official link, and route cards.
3. Build guide pages from the data definitions.
4. Keep `/codes/` active code table empty until official/in-game verification exists.

### Task 4: Crawl Files

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `app/llms.txt/route.ts`
- Create: `app/llms-full.txt/route.ts`

**Steps:**
1. Generate sitemap entries from declared pages.
2. Generate robots rules allowing public pages and blocking private/admin paths.
3. Generate llms text endpoints for AI crawler summaries.
4. Run `npm run build`.

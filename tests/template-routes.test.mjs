import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), "utf8");
}

function extractArray(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "m"));
  assert.ok(match, `Missing array config: ${key}`);
  return Array.from(match[1].matchAll(/["']([^"']*)["']/g)).map((item) => item[1]);
}

function routePath(locale, slug) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  if (locale === "en") return cleanSlug ? `/${cleanSlug}/` : "/";
  return cleanSlug ? `/${locale}/${cleanSlug}/` : `/${locale}/`;
}

test("sitemap route count matches completed core pages plus English-only pages", () => {
  const config = read("lib/game-config.ts");
  const completedLocales = extractArray(config, "completedLocales");
  const coreSlugs = extractArray(config, "coreSlugs");
  const englishOnlySlugs = extractArray(config, "englishOnlySlugs");

  const expectedCount = completedLocales.length * coreSlugs.length + englishOnlySlugs.length;
  assert.equal(expectedCount, 22);
});

test("localized core routes exist for completed locales", () => {
  const config = read("lib/game-config.ts");
  const completedLocales = extractArray(config, "completedLocales");
  const coreSlugs = extractArray(config, "coreSlugs");

  for (const locale of completedLocales) {
    for (const slug of coreSlugs) {
      if (locale === "en") continue;
      const target = slug ? path.join(root, "app", locale, slug, "page.tsx") : path.join(root, "app", locale, "page.tsx");
      assert.ok(fs.existsSync(target), `Missing localized route file for ${routePath(locale, slug)}`);
    }
  }
});

test("English-only route files exist only at root English paths", () => {
  const config = read("lib/game-config.ts");
  const englishOnlySlugs = extractArray(config, "englishOnlySlugs");

  for (const slug of englishOnlySlugs) {
    assert.ok(fs.existsSync(path.join(root, "app", slug, "page.tsx")), `Missing app/${slug}/page.tsx`);
  }
});

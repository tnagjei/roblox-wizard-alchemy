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

test("completed locales have app and content directories", () => {
  const config = read("lib/game-config.ts");
  const completedLocales = extractArray(config, "completedLocales");

  assert.ok(completedLocales.includes("en"), "completedLocales must include en");

  for (const locale of completedLocales.filter((item) => item !== "en")) {
    assert.ok(fs.existsSync(path.join(root, "app", locale)), `Missing app/${locale}`);
    assert.ok(fs.existsSync(path.join(root, "content/i18n", locale)), `Missing content/i18n/${locale}`);
  }
});

test("English-only slugs do not have localized route directories", () => {
  const config = read("lib/game-config.ts");
  const completedLocales = extractArray(config, "completedLocales").filter((item) => item !== "en");
  const englishOnlySlugs = extractArray(config, "englishOnlySlugs");

  for (const locale of completedLocales) {
    for (const slug of englishOnlySlugs) {
      assert.equal(
        fs.existsSync(path.join(root, "app", locale, slug)),
        false,
        `English-only route should not exist: app/${locale}/${slug}`
      );
    }
  }
});

test("Wizard Alchemy data uses production domain and no copied old game data file", () => {
  const dataPath = path.join(root, "public/data/game.example.json");
  assert.ok(fs.existsSync(dataPath), "Missing public/data/game.example.json");
  assert.equal(fs.existsSync(path.join(root, "public/data/noob-tower-defense.json")), false);

  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  assert.equal(data.site.defaultBaseUrl, "https://wizardalchemy.online");
  assert.equal(data.game.name, "Wizard Alchemy");
  assert.equal(data.game.creator.name, "Muggle Academy");
  assert.equal(data.codes.verifiedActiveCodes.length, 0);
  assert.equal(data.codes.expiredCodes.length, 0);
});

test("source-backed codes remain pending until in-game tested", () => {
  const data = JSON.parse(fs.readFileSync(path.join(root, "public/data/game.example.json"), "utf8"));
  const pendingCodes = data.codes.pendingCodes.map((item) => item.code);

  assert.deepEqual(pendingCodes, ["RELEASE", "WIZARD"]);
  assert.equal(data.codes.verifiedActiveCodes.length, 0);
});

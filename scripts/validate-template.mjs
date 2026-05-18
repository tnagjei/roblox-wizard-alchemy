import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const forbidden = [
  "Noob Tower" + " Defense",
  "Vitan" + " Games",
  "noobtower" + "defense.org",
  "UP" + "D3",
  "NTD" + "SPRING",
  "500" + "LIKES",
  "Rail" + "gunner",
  "Jugger" + "naut",
  "G-YWY" + "F8E8WHJ",
  "wnoo" + "yeobp3",
  "a70cf" + "98722a7a089"
];

const ignoredDirs = new Set([".git", ".next", "node_modules"]);
const ignoredFiles = new Set([
  "package-lock.json",
  "scripts/validate-template.mjs",
  "docs/template-cleanup-checklist.md"
]);

const checkedRoots = ["app", "components", "content", "lib", "messages", "public", "scripts", "tests", "next.config.mjs", "README.md", "package.json"];
const checkedExtensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".md"]);
const knownLocaleDirs = ["zh-tw", "th", "id", "vi", "ko", "ru", "es", "pt-br"];

function shouldCheck(relativePath) {
  if (relativePath.endsWith("README.md") && relativePath !== "README.md") return false;
  if (relativePath.startsWith("docs/")) return false;
  return checkedRoots.some((item) => relativePath === item || relativePath.startsWith(`${item}/`));
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(root, fullPath);

    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) files.push(...walk(fullPath));
      continue;
    }

    if (!shouldCheck(relativePath)) continue;
    if (ignoredFiles.has(relativePath)) continue;
    if (!checkedExtensions.has(path.extname(entry.name))) continue;
    if (/\.(png|jpg|jpeg|gif|webp|ico|svg|woff|woff2)$/i.test(entry.name)) continue;
    files.push(fullPath);
  }

  return files;
}

function readConfig() {
  return fs.readFileSync(path.join(root, "lib/game-config.ts"), "utf8");
}

function extractArray(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "m"));

  if (!match) {
    throw new Error(`Could not find gameConfig.${key}`);
  }

  return Array.from(match[1].matchAll(/["']([^"']*)["']/g)).map((item) => item[1]);
}

function validateLocaleRoutes(config) {
  const completedLocales = extractArray(config, "completedLocales");
  const appDir = path.join(root, "app");
  const contentDir = path.join(root, "content/i18n");

  for (const locale of completedLocales.filter((locale) => locale !== "en")) {
    if (!fs.existsSync(path.join(appDir, locale))) {
      violations.push(`missing app route directory for completed locale: ${locale}`);
    }

    if (!fs.existsSync(path.join(contentDir, locale))) {
      violations.push(`missing content directory for completed locale: ${locale}`);
    }
  }

  for (const locale of knownLocaleDirs) {
    if (fs.existsSync(path.join(appDir, locale)) && !completedLocales.includes(locale)) {
      violations.push(`app route directory exists but locale is not completed: ${locale}`);
    }

    if (fs.existsSync(path.join(contentDir, locale)) && !completedLocales.includes(locale)) {
      violations.push(`content directory exists but locale is not completed: ${locale}`);
    }
  }
}

function validateRouteRegistry(config) {
  const completedLocales = extractArray(config, "completedLocales");
  const coreSlugs = extractArray(config, "coreSlugs");
  const completedCoreSlugs = extractArray(config, "completedCoreSlugs");
  const englishOnlySlugs = extractArray(config, "englishOnlySlugs");
  const completedEnglishOnlySlugs = extractArray(config, "completedEnglishOnlySlugs");
  const pageRegistry = fs.readFileSync(path.join(root, "lib/page-registry.ts"), "utf8");
  const sitemap = fs.readFileSync(path.join(root, "app/sitemap.ts"), "utf8");
  const robots = fs.readFileSync(path.join(root, "app/robots.ts"), "utf8");

  const expectedSitemapCount = completedLocales.length * completedCoreSlugs.length + completedEnglishOnlySlugs.length;

  if (!completedCoreSlugs.every((slug) => coreSlugs.includes(slug))) {
    violations.push("completedCoreSlugs must be a subset of coreSlugs");
  }

  if (!completedEnglishOnlySlugs.every((slug) => englishOnlySlugs.includes(slug))) {
    violations.push("completedEnglishOnlySlugs must be a subset of englishOnlySlugs");
  }

  if (!pageRegistry.includes("completedCoreRoutes") || !pageRegistry.includes("englishOnlyRoutes")) {
    violations.push("page-registry must expose completed core routes and English-only routes");
  }

  if (!pageRegistry.includes("completedCoreSlugs") || !pageRegistry.includes("completedEnglishOnlySlugs")) {
    violations.push("page-registry must expose completed slug lists");
  }

  if (!pageRegistry.includes("sitemapRoutes")) {
    violations.push("page-registry must expose sitemapRoutes");
  }

  if (!sitemap.includes("sitemapRoutes")) {
    violations.push("app/sitemap.ts must read from sitemapRoutes");
  }

  if (!robots.includes("robotsAllowedRoutes")) {
    violations.push("app/robots.ts must read from robotsAllowedRoutes");
  }

  if (expectedSitemapCount !== 12) {
    violations.push(`expected Wizard Alchemy first-version sitemap route count to be 12, got ${expectedSitemapCount}`);
  }
}

function validateEnglishOnlyRoutes(config) {
  const completedLocales = extractArray(config, "completedLocales").filter((locale) => locale !== "en");
  const englishOnlySlugs = extractArray(config, "englishOnlySlugs");

  for (const locale of completedLocales) {
    for (const slug of englishOnlySlugs) {
      if (fs.existsSync(path.join(root, "app", locale, slug))) {
        violations.push(`English-only route must not exist for ${locale}: ${slug}`);
      }
    }
  }
}

function validateProductionData() {
  const dataPath = path.join(root, "public/data/game.example.json");
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  if (data.site.defaultBaseUrl !== "https://wizardalchemy.online") {
    violations.push("site defaultBaseUrl must be https://wizardalchemy.online");
  }

  if (data.game.name !== "Wizard Alchemy") {
    violations.push("game data must be Wizard Alchemy");
  }

  if (data.game.creator.name !== "Muggle Academy") {
    violations.push("game creator must be Muggle Academy, not the site owner");
  }

  if (data.codes.verifiedActiveCodes.length !== 0) {
    violations.push("verifiedActiveCodes must stay empty until in-game testing is recorded");
  }

  if (data.codes.expiredCodes.length !== 0) {
    violations.push("expiredCodes must stay empty until source evidence exists");
  }
}

const violations = [];

for (const file of walk(root)) {
  const text = fs.readFileSync(file, "utf8");
  const relativePath = path.relative(root, file);

  for (const term of forbidden) {
    if (text.includes(term)) violations.push(`${relativePath}: ${term}`);
  }
}

const config = readConfig();
validateLocaleRoutes(config);
validateRouteRegistry(config);
validateEnglishOnlyRoutes(config);
validateProductionData();

if (violations.length > 0) {
  console.error("Template validation failed:");
  for (const violation of violations) console.error(`- ${violation}`);
  process.exit(1);
}

console.log("Template validation passed.");
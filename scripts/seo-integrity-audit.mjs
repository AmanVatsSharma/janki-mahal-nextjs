#!/usr/bin/env node
/**
 * @file seo-integrity-audit.mjs
 * @module nextjs-seo-audit
 * @description Post-build SEO integrity checks for Next.js static export.
 * @author BharatERP
 * @created 2026-02-27
 *
 * Usage: npm run build && npm run seo:audit
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve(process.cwd(), "out");
const SITE_ORIGIN = "https://www.srijanakimahaltrustofficial.com";

let failures = 0;
let warnings = 0;

function log(msg, type = "INFO") {
  console.log(`[seo-audit] ${type} ${msg}`);
}

function fail(msg) {
  failures++;
  log(msg, "ERROR");
}

function warn(msg) {
  warnings++;
  log(msg, "WARN");
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectHtmlFiles(dir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function checkHtmlFile(filePath) {
  const content = await fs.readFile(filePath, "utf-8").catch(() => "");
  const relPath = path.relative(OUT_DIR, filePath);

  if (!content.includes("<title>")) fail(`${relPath}: missing <title>`);
  if (!content.includes('name="description"') && !content.includes("name='description'"))
    warn(`${relPath}: missing meta description`);
  if (!content.includes('rel="canonical"') && !content.includes("rel='canonical'"))
    warn(`${relPath}: missing canonical`);
  if (!content.includes("og:title")) warn(`${relPath}: missing og:title`);
  if (!content.includes("application/ld+json")) warn(`${relPath}: missing JSON-LD`);
}

async function main() {
  log("Starting SEO integrity audit (Next.js static export)");

  if (!(await fileExists(OUT_DIR))) {
    fail(`Output directory not found: ${OUT_DIR}. Run 'npm run build' first.`);
    process.exit(1);
  }

  const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
  if (!(await fileExists(sitemapPath))) {
    fail("sitemap.xml not found in output");
  } else {
    const sitemap = await fs.readFile(sitemapPath, "utf-8");
    if (!sitemap.includes(SITE_ORIGIN)) warn("sitemap.xml may not reference canonical domain");
  }

  const robotsPath = path.join(OUT_DIR, "robots.txt");
  if (!(await fileExists(robotsPath))) {
    fail("robots.txt not found in output");
  } else {
    const robots = await fs.readFile(robotsPath, "utf-8");
    if (!robots.toLowerCase().includes("sitemap")) warn("robots.txt may not reference sitemap");
  }

  const htmlFiles = await collectHtmlFiles(OUT_DIR);
  log(`Checking ${htmlFiles.length} HTML files`);
  for (const f of htmlFiles) {
    await checkHtmlFile(f);
  }

  log(`Audit complete: ${failures} failures, ${warnings} warnings`);
  if (failures > 0) {
    process.exit(1);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error("[seo-audit] FATAL", err);
  process.exit(1);
});

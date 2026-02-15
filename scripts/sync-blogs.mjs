/**
 * @file sync-blogs.mjs
 * @module blog-sync
 * @description Copies Astro markdown blogs into Next.js content folders.
 * @author BharatERP
 * @created 2026-02-15
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const astroBlogDir = path.resolve(__dirname, "../../Astro/src/content/blog");
const astroHiBlogDir = path.join(astroBlogDir, "hi");
const nextBlogDir = path.resolve(__dirname, "../content/blog");
const nextHiBlogDir = path.join(nextBlogDir, "hi");

async function ensureDirectory(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function listMarkdownFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

async function clearMarkdownFiles(dirPath) {
  await ensureDirectory(dirPath);
  const files = await listMarkdownFiles(dirPath);
  await Promise.all(files.map((fileName) => fs.unlink(path.join(dirPath, fileName))));
}

async function copyMarkdownFiles(sourceDir, destinationDir) {
  await ensureDirectory(destinationDir);
  await clearMarkdownFiles(destinationDir);

  const sourceFiles = await listMarkdownFiles(sourceDir);
  await Promise.all(
    sourceFiles.map((fileName) =>
      fs.copyFile(path.join(sourceDir, fileName), path.join(destinationDir, fileName))
    )
  );

  return sourceFiles.length;
}

async function run() {
  const [enCopied, hiCopied] = await Promise.all([
    copyMarkdownFiles(astroBlogDir, nextBlogDir),
    copyMarkdownFiles(astroHiBlogDir, nextHiBlogDir),
  ]);

  process.stdout.write(`Copied ${enCopied} EN blog files to ${nextBlogDir}\n`);
  process.stdout.write(`Copied ${hiCopied} HI blog files to ${nextHiBlogDir}\n`);
}

run().catch((error) => {
  process.stderr.write(`Blog sync failed: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});

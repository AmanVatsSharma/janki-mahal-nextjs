/**
 * @file posts.tsx
 * @module blog
 * @description Loads markdown blog posts for EN and HI routes.
 * @author BharatERP
 * @created 2026-02-15
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogCategory = "Booking" | "AyodhyaGuide" | "Rooms" | "Safety";
export type BlogLanguage = "en" | "hi";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  published: string; // YYYY-MM-DD string for sorting + sitemap
  readTime: string;
  keywords: string[];
  content: string;
  lang: BlogLanguage;
};

type BlogFrontmatter = {
  title?: string;
  description?: string;
  date?: string | Date;
  keywords?: unknown;
  readTime?: string;
  category?: unknown;
};

const ENGLISH_CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const HINDI_CONTENT_DIR = path.join(ENGLISH_CONTENT_DIR, "hi");

function normalizeDate(date: string | Date | undefined): string {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }

  if (typeof date === "string") {
    const trimmed = date.trim();
    if (trimmed) {
      const parsed = new Date(trimmed);
      if (!Number.isNaN(parsed.getTime())) {
        return parsed.toISOString().slice(0, 10);
      }
    }
  }

  return "1970-01-01";
}

function normalizeKeywords(keywords: unknown): string[] {
  if (!Array.isArray(keywords)) return [];

  return keywords
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);
}

function calculateReadTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function inferCategory(
  explicitCategory: string | undefined,
  slug: string,
  title: string,
  keywords: string[]
): BlogCategory {
  const text = `${explicitCategory ?? ""} ${slug} ${title} ${keywords.join(" ")}`.toLowerCase();

  if (text.includes("book") || text.includes("booking") || text.includes("confirm")) {
    return "Booking";
  }

  if (text.includes("room") || text.includes("ac") || text.includes("non-ac")) {
    return "Rooms";
  }

  if (
    text.includes("safety") ||
    text.includes("security") ||
    text.includes("scam") ||
    text.includes("fraud") ||
    text.includes("verified")
  ) {
    return "Safety";
  }

  return "AyodhyaGuide";
}

function readMarkdownFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function parsePost(filePath: string, lang: BlogLanguage): BlogPost {
  const slug = path.basename(filePath, ".md");
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;

  const title = typeof frontmatter.title === "string" && frontmatter.title.trim() ? frontmatter.title : slug;
  const description =
    typeof frontmatter.description === "string" && frontmatter.description.trim()
      ? frontmatter.description
      : `Read ${title}.`;
  const published = normalizeDate(frontmatter.date);
  const keywords = normalizeKeywords(frontmatter.keywords);
  const readTime =
    typeof frontmatter.readTime === "string" && frontmatter.readTime.trim()
      ? frontmatter.readTime
      : calculateReadTime(content);
  const category = inferCategory(
    typeof frontmatter.category === "string" ? frontmatter.category : undefined,
    slug,
    title,
    keywords
  );

  return {
    slug,
    title,
    description,
    category,
    published,
    readTime,
    keywords,
    content,
    lang,
  };
}

function loadPostsByLanguage(lang: BlogLanguage): BlogPost[] {
  const dirPath = lang === "hi" ? HINDI_CONTENT_DIR : ENGLISH_CONTENT_DIR;
  const files = readMarkdownFiles(dirPath);
  const posts = files.map((fileName) => parsePost(path.join(dirPath, fileName), lang));

  posts.sort((a, b) => b.published.localeCompare(a.published));
  return posts;
}

export const BLOG_POSTS: BlogPost[] = loadPostsByLanguage("en");
export const HI_BLOG_POSTS: BlogPost[] = loadPostsByLanguage("hi");
export const ALL_BLOG_POSTS: BlogPost[] = [...BLOG_POSTS, ...HI_BLOG_POSTS];

export function getPostsByLang(lang: BlogLanguage): BlogPost[] {
  return lang === "hi" ? [...HI_BLOG_POSTS] : [...BLOG_POSTS];
}

export function getPostBySlug(slug: string, lang: BlogLanguage = "en"): BlogPost | undefined {
  const posts = lang === "hi" ? HI_BLOG_POSTS : BLOG_POSTS;
  return posts.find((post) => post.slug === slug);
}

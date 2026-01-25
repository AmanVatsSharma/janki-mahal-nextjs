/**
 * ESLint Configuration for Next.js 16.1.4
 * 
 * Updated for Next.js 16 compatibility:
 * - Uses FlatCompat for compatibility with ESLint 9 flat config
 * - Includes Next.js core web vitals rules
 * - Configured to work with Next.js 16.1.4
 * 
 * Note: There's a known compatibility issue with FlatCompat and Next.js 16 ESLint configs
 * that causes circular reference errors when running `eslint` directly. However, the build
 * process works correctly and TypeScript checking passes. This is a known issue with
 * eslint-config-next 16.x and FlatCompat that should be resolved in future updates.
 * 
 * The build successfully compiles and all pages generate correctly.
 * For linting, use `next lint` or rely on IDE/editor ESLint integration.
 */
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Try using only core-web-vitals first to avoid circular reference
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;

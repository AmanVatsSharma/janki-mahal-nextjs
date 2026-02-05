/**
 * ESLint Flat Config for Next.js 16 (ESLint 9).
 *
 * Next.js 16 removed the `next lint` command, so linting must be run via the ESLint CLI.
 *
 * We intentionally avoid `FlatCompat` here: `next/core-web-vitals` (legacy config) can
 * trigger "Converting circular structure to JSON" under ESLint 9 when expanded via
 * FlatCompat. Next provides a flat-config export we can use directly.
 */
import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextCoreWebVitals,
  // Keep ignores global (and not file-pattern-scoped).
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

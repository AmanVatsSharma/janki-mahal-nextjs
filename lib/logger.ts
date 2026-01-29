/**
 * Lightweight logger wrapper.
 *
 * Why:
 * - You asked for lots of console visibility for debugging.
 * - SEO/perf prefers not to ship noisy logs in production.
 *
 * Behavior:
 * - In development: logs to console.
 * - In production: only `warn` and `error` log (debug/info are no-ops).
 */

type LogLevel = "debug" | "info" | "warn" | "error";

function isProd(): boolean {
  return process.env.NODE_ENV === "production";
}

function safeSerialize(value: unknown): string {
  try {
    if (typeof value === "string") return value;
    return JSON.stringify(value);
  } catch {
    return "[unserializable]";
  }
}

function fmt(prefix: string, parts: unknown[]): unknown[] {
  // Keep the first arg a stable string prefix so logs are easy to grep later.
  const rendered = parts.map((p) => (typeof p === "string" ? p : safeSerialize(p)));
  return [prefix, ...rendered];
}

export const logger = {
  debug: (...args: unknown[]) => {
    if (isProd()) return;
    // eslint-disable-next-line no-console
    console.debug(...fmt("[DEBUG]", args));
  },
  info: (...args: unknown[]) => {
    if (isProd()) return;
    // eslint-disable-next-line no-console
    console.info(...fmt("[INFO]", args));
  },
  warn: (...args: unknown[]) => {
    // eslint-disable-next-line no-console
    console.warn(...fmt("[WARN]", args));
  },
  error: (...args: unknown[]) => {
    // eslint-disable-next-line no-console
    console.error(...fmt("[ERROR]", args));
  },
} as const;


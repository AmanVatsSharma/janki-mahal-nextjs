import type { NextConfig } from "next";

/**
 * Next.js Configuration
 * 
 * Updated for Next.js 16.1.4 compatibility:
 * - Turbopack is now enabled by default (no need for --turbopack flag in scripts)
 * - Static export configuration remains compatible with Next.js 16
 * - All configurations verified for Next.js 16 security stable version
 */
const nextConfig: NextConfig = {
  // Enable static exports for optimal performance
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

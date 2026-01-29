import { MetadataRoute } from 'next'
import { BUSINESS_INFO } from '../lib/constants'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // IMPORTANT (SEO): Robots must reference the canonical sitemap URL for the current domain.
    sitemap: `${BUSINESS_INFO.website}/sitemap.xml`,
  }
}

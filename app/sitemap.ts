import { MetadataRoute } from 'next'
import { BUSINESS_INFO } from '../lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT (SEO): Sitemap must always point at the canonical domain.
  const baseUrl = BUSINESS_INFO.website
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cancellation-refund`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // High-intent landing page to capture Sri/Shri + Janki/Janaki + Ayodhya queries.
    {
      url: `${baseUrl}/sri-janki-mahal-ayodhya`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}

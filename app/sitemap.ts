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
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cancellation-refund/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sri-janki-mahal-ayodhya/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/janaki-mahal-trust-ayodhya/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/dharmshala-near-ram-mandir-ayodhya/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ac-non-ac-rooms-ayodhya-ram-mandir/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meals-included-stay-ayodhya/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/verified-booking-sri-janki-mahal/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Blog posts (static export): list explicitly so crawlers discover them faster.
    {
      url: `${baseUrl}/blog/how-to-book-sri-janaki-mahal-trust-ayodhya/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/best-stay-near-ram-mandir-ayodhya-checklist/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/ac-vs-non-ac-rooms-ayodhya-season-guide/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/meals-included-stay-ayodhya-what-to-expect/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/avoid-fake-bookings-ayodhya-verified-contact-checklist/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ayodhya-trip-stay-tips-for-pilgrims/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}

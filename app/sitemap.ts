import { MetadataRoute } from 'next'
import { BUSINESS_INFO } from '../lib/constants'
import { getPostsByLang } from "../lib/blog/posts";

export const dynamic = 'force-static'

function normalizeLastModified(dateString: string): Date {
  const parsed = new Date(dateString);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT (SEO): Sitemap must always point at the canonical domain.
  const baseUrl = BUSINESS_INFO.website
  const englishBlogPosts = getPostsByLang("en");
  const hindiBlogPosts = getPostsByLang("hi");
  const englishBlogEntries: MetadataRoute.Sitemap = englishBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: normalizeLastModified(post.published),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  const hindiBlogEntries: MetadataRoute.Sitemap = hindiBlogPosts.map((post) => ({
    url: `${baseUrl}/hi/blog/${post.slug}/`,
    lastModified: normalizeLastModified(post.published),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  
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
      url: `${baseUrl}/official/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/official-booking/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-number/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/booking/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/room-prices/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/amenities/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/group-booking/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reviews/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hi/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...englishBlogEntries,
    ...hindiBlogEntries,
  ]
}

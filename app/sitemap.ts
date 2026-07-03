/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - XML Sitemap
 * Served at /sitemap.xml. Lists every indexable route; excludes the noindexed
 * ad landing page (/kitchen-renovations).
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/products`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/products/cabinets`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/products/accessories`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/products/countertops`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cabinetry`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/style-quiz`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.1 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - robots.txt
 * Served at /robots.txt. Allows all crawlers and points them at the sitemap.
 * (Per-page noindex, e.g. /kitchen-renovations, is handled via metadata.)
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

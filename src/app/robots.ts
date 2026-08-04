import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Unfinished routes — remove these once real content ships.
      disallow: ['/results', '/blog'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

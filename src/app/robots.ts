import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { locales } from '@/content/i18n';

export default function robots(): MetadataRoute.Robots {
  // Unfinished routes, in every language.
  const disallow = locales.flatMap((l) => [`/${l}/results`, `/${l}/blog`, `/${l}/login`]);

  return {
    rules: { userAgent: '*', allow: '/', disallow },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

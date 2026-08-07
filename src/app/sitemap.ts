import type { MetadataRoute } from 'next';
import { examOrder, routes, site } from '@/content/site';
import { locales } from '@/content/i18n';

/**
 * One entry per page per language, each carrying `alternates.languages` so
 * search engines pair the two trees rather than treating them as duplicates.
 *
 * `/results` and `/blog` are excluded — both are noindex until they carry
 * verified content. `/login` and the legal stubs are excluded for the same
 * reason.
 */
const paths = [routes.home, routes.exams, routes.method, routes.about, routes.contact];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...paths, ...examOrder.map((slug) => `${routes.exams}/${slug}`)];

  return locales.flatMap((locale) =>
    all.map((path) => {
      const suffix = path === '/' ? '' : path;
      return {
        url: `${site.url}/${locale}${suffix}`,
        changeFrequency: 'monthly' as const,
        priority: path === '/' ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${suffix}`])),
        },
      };
    }),
  );
}

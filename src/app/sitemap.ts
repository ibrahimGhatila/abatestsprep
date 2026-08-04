import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { exams } from '@/content/exams';

/**
 * `/results` and `/blog` are deliberately excluded — both are noindex until
 * they carry verified content. Re-add them here when they do.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/exams', '/method', '/about', '/contact'];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...exams.map((exam) => ({
      url: `${site.url}/exams/${exam.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}

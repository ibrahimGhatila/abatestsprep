import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { contact } from '@/content/site';
import { blogPage } from '@/content/pages';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on exam preparation, applications and studying abroad.',
  alternates: { canonical: '/blog' },
  robots: { index: false, follow: true },
};

/**
 * Blog index — scaffolded, not populated.
 *
 * The route, metadata and layout are ready; posts are not. When a source of
 * posts exists (MDX under /src/content/posts, or a CMS), map it over the list
 * markup below. Left `noindex` while empty so it doesn't get crawled as a
 * thin page.
 */
export default function BlogPage() {
  const posts: { slug: string; title: string; excerpt: string; date: string }[] = [];

  return (
    <>
      <PageHeader
        eyebrow={blogPage.eyebrow}
        title={blogPage.title}
        markWord={blogPage.markWord}
        lede={blogPage.lede}
      />

      <section className="bg-cream py-section">
        <div className="shell">
          {posts.length > 0 ? (
            <ul>
              {posts.map((post) => (
                <li key={post.slug} className="border-t border-ink/15 py-10 last:border-b">
                  <article className="grid-12 gap-y-3">
                    <time className="col-span-4 font-brand text-eyebrow font-semibold uppercase text-ink/45 md:col-span-2">
                      {post.date}
                    </time>
                    <h2 className="col-span-4 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-ink md:col-span-6 md:col-start-3">
                      {post.title}
                    </h2>
                    <p className="col-span-4 max-w-prose text-[0.975rem] leading-relaxed text-ink/65 md:col-span-4 md:col-start-9">
                      {post.excerpt}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid-12 gap-y-10">
              <Reveal className="col-span-4 md:col-span-6 md:col-start-3">
                <div className="border border-dashed border-ink/25 p-10 md:p-16">
                  <PetalMark className="h-9 w-9 text-orange/40" strokeWidth={2.2} />
                  <p className="mt-8 max-w-[26ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-ink/35">
                    The first posts are being written.
                  </p>
                </div>
              </Reveal>
              <Reveal className="col-span-4 md:col-span-6 md:col-start-3" delay={0.08}>
                <TodoNote>{blogPage.todo}</TodoNote>
              </Reveal>
              <Reveal className="col-span-4 md:col-span-6 md:col-start-3" delay={0.12}>
                <Button href={contact.instagramUrl} external variant="ghost">
                  Follow {contact.instagramHandle} in the meantime
                </Button>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

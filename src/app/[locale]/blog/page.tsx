import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { contact, routes } from '@/content/site';
import { getDictionary, href, type Locale } from '@/content/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const p = getDictionary(locale).pages.blog;
  return {
    title: p.eyebrow,
    description: p.lede,
    alternates: { canonical: href(locale, routes.blog) },
    robots: { index: false, follow: true },
  };
}

/**
 * Blog index — scaffolded, not populated. `noindex` while empty so it is not
 * crawled as a thin page.
 */
export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const page = getDictionary(locale).pages.blog;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-9">
            <Reveal className="col-span-4 md:col-span-6 md:col-start-3">
              <div className="border-2 border-dashed border-ink/25 p-10 md:p-14">
                <PetalMark className="h-9 w-9 text-orange/40" strokeWidth={2.2} />
                <p className="mt-7 max-w-[26ch] text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-tight tracking-[-0.02em] text-ink/35">
                  {page.empty}
                </p>
              </div>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-6 md:col-start-3" delay={0.06}>
              <TodoNote>{page.todo}</TodoNote>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-6 md:col-start-3" delay={0.1}>
              <Button href={contact.instagramUrl} external variant="ghost">
                {page.followCta}
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

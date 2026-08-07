import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal } from '@/components/ui/Reveal';
import { routes } from '@/content/site';
import { getDictionary, href, type Locale } from '@/content/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const p = getDictionary(locale).pages.results;
  return {
    title: p.eyebrow,
    description: p.lede,
    alternates: { canonical: href(locale, routes.results) },
    // Nothing verified is published here yet, so keep it out of the index.
    robots: { index: false, follow: true },
  };
}

export default async function ResultsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.pages.results;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-10">
            <Reveal className="col-span-4 md:col-span-7 md:col-start-3">
              <p className="text-[clamp(1.5rem,3vw,2.4rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink text-balance">
                {page.statement}
              </p>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-7 md:col-start-3" delay={0.06}>
              <TodoNote>{page.todo}</TodoNote>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-7 md:col-start-3" delay={0.1}>
              <Button href={href(locale, routes.contact)} size="lg">
                {page.cta}
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { examOrder, routes } from '@/content/site';
import { getDictionary, href, type Locale } from '@/content/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.pages.examsIndex.eyebrow,
    description: dict.meta.description,
    alternates: { canonical: href(locale, routes.exams) },
  };
}

/**
 * Exam index — a vertical list of large type, so it never reads as a duplicate
 * of the horizontal row on the home page.
 */
export default async function ExamsIndexPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.pages.examsIndex;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <section className="bg-cream py-[clamp(3.5rem,7vw,7rem)]">
        <div className="shell">
          <RevealList as="ul" stagger={0.06}>
            {examOrder.map((slug, i) => (
              <RevealItem as="li" key={slug} className="border-t-2 border-ink/15 last:border-b-2">
                <Link href={href(locale, `${routes.exams}/${slug}`)} data-cursor="link" className="group block py-8">
                  <div className="grid-12 items-baseline gap-y-3">
                    <span className="col-span-1 text-eyebrow font-semibold tracking-[0.12em] text-orange">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="col-span-3 text-[clamp(1.9rem,4.5vw,3.25rem)] font-black leading-none tracking-[-0.03em] text-ink transition-colors duration-200 group-hover:text-ember md:col-span-5">
                      {dict.exams[slug].name}
                    </h2>
                    <p className="col-span-4 max-w-prose text-[0.95rem] leading-snug text-ink/65 md:col-span-5 md:col-start-7">
                      {dict.exams[slug].hook}
                    </p>
                    <PetalMark
                      className="col-span-1 hidden h-5 w-5 text-ink/20 transition-all duration-300 ease-snap group-hover:rotate-45 group-hover:text-orange md:col-start-12 md:block"
                      strokeWidth={3}
                    />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealList>

          <Reveal className="mt-14" delay={0.08}>
            <div className="grid-12">
              <div className="col-span-4 md:col-span-6 md:col-start-6">
                <p className="text-[clamp(1.3rem,2.4vw,1.85rem)] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                  {page.ctaLine}
                </p>
                <Button href={href(locale, routes.contact)} className="mt-7" size="lg">
                  {page.cta}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

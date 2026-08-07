import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import PetalDivider from '@/components/ui/PetalDivider';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { examOrder, routes, type ExamSlug } from '@/content/site';
import { getDictionary, href, locales, type Locale } from '@/content/i18n';

/**
 * Sitting dates are deliberately empty: exam calendars change every year and
 * an out-of-date date on a prep site is worse than none. Fill this from the
 * official board, per exam.
 */
const keyDates: Partial<Record<ExamSlug, { label: string; window: string }[]>> = {};

export function generateStaticParams() {
  return locales.flatMap((locale) => examOrder.map((slug) => ({ locale, slug })));
}

const isExamSlug = (value: string): value is ExamSlug => (examOrder as readonly string[]).includes(value);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isExamSlug(slug)) return {};
  const exam = getDictionary(locale).exams[slug];
  return {
    title: `${exam.name} ${getDictionary(locale).common.prep}`,
    description: exam.hook,
    alternates: { canonical: href(locale, `${routes.exams}/${slug}`) },
  };
}

export default async function ExamPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isExamSlug(slug)) notFound();

  const dict = getDictionary(locale);
  const exam = dict.exams[slug];
  const t = dict.pages.examDetail;
  const index = String(examOrder.indexOf(slug) + 1).padStart(2, '0');
  const others = examOrder.filter((s) => s !== slug);
  const dates = keyDates[slug] ?? [];

  return (
    <>
      <PageHeader
        eyebrow={`${index} — ${t.eyebrowSuffix}`}
        title={exam.name}
        markWord={dict.common.prep}
        lede={exam.hook}
        meta={[
          { label: t.whatFor, value: exam.purpose },
          { label: t.whoFor, value: exam.audience },
        ]}
      />

      {/* What it is */}
      <section className="bg-cream py-[clamp(3.5rem,7vw,7rem)]">
        <div className="shell">
          <div className="grid-12 gap-y-10">
            <Reveal className="col-span-4 md:col-span-3">
              <Eyebrow tone="orange">{t.whatItIs}</Eyebrow>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-8 md:col-start-5" delay={0.06}>
              <p className="text-[clamp(1.3rem,2.6vw,2rem)] font-extrabold leading-[1.3] tracking-[-0.02em] text-ink">
                {exam.intro}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="bg-sand py-[clamp(3.5rem,7vw,7rem)]">
        <div className="shell">
          <div className="grid-12 gap-y-10">
            <div className="col-span-4 md:col-span-4">
              <Eyebrow tone="orange" className="mb-6">
                {t.format}
              </Eyebrow>
              <h2 className="text-display-sm font-black text-ink">{t.formatHeadline}</h2>
            </div>

            <RevealList as="dl" className="col-span-4 md:col-span-7 md:col-start-6" stagger={0.06}>
              {exam.format.map((row) => (
                <RevealItem key={row.section} className="border-t-2 border-ink/15 py-5 first:border-t-0 first:pt-0">
                  <div className="flex flex-col gap-1.5 md:flex-row md:items-baseline md:gap-8">
                    <dt className="text-eyebrow font-semibold uppercase tracking-[0.12em] text-ink md:w-52 md:shrink-0">
                      {row.section}
                    </dt>
                    <dd className="text-[0.95rem] leading-snug text-ink/70">{row.detail}</dd>
                  </div>
                </RevealItem>
              ))}
            </RevealList>
          </div>
        </div>
      </section>

      {/* How we prep it */}
      <section className="bg-cream py-[clamp(3.5rem,7vw,7rem)]">
        <div className="shell">
          <div className="grid-12 gap-y-12">
            <div className="col-span-4 md:col-span-5">
              <Eyebrow tone="orange" className="mb-6">
                {t.howWePrep}
              </Eyebrow>
              <h2 className="text-display-md font-black text-ink">{exam.name}</h2>
            </div>

            <RevealList as="ol" className="col-span-4 md:col-span-6 md:col-start-7" stagger={0.07}>
              {exam.prep.map((item, i) => (
                <RevealItem as="li" key={item.title} className="border-t-2 border-ink/15 py-7 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-5">
                    <span className="text-eyebrow font-semibold tracking-[0.12em] text-orange">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.02em] text-ink">{item.title}</h3>
                  </div>
                  <p className="mt-3 max-w-prose pl-10 text-[1.0625rem] leading-[1.6] text-ink/70">{item.body}</p>
                </RevealItem>
              ))}
            </RevealList>
          </div>
        </div>
      </section>

      {/* Key dates */}
      <section className="bg-cream pb-[clamp(3.5rem,7vw,7rem)]">
        <div className="shell">
          <PetalDivider className="mb-10" />
          <div className="grid-12 gap-y-8">
            <div className="col-span-4 md:col-span-4">
              <Eyebrow tone="orange" className="mb-5">
                {t.keyDates}
              </Eyebrow>
              <h2 className="text-display-sm font-black text-ink">{t.keyDatesHeadline}</h2>
            </div>
            <div className="col-span-4 md:col-span-7 md:col-start-6">
              {dates.length > 0 ? (
                <dl>
                  {dates.map((date) => (
                    <div key={date.label} className="border-t-2 border-ink/15 py-5 first:border-t-0 first:pt-0">
                      <dt className="text-xl font-extrabold text-ink">{date.label}</dt>
                      <dd className="mt-1.5 text-[0.95rem] text-ink/70">{date.window}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <TodoNote>{t.keyDatesTodo}</TodoNote>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + other exams */}
      <section className="on-dark bg-charcoal py-[clamp(3.5rem,7vw,6rem)] text-cream">
        <div className="shell">
          <div className="grid-12 gap-y-10">
            <div className="col-span-4 md:col-span-6">
              <h2 className="text-display-md font-black text-cream text-balance">{t.ctaHeadline}</h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href={href(locale, routes.contact)} size="lg">
                  {dict.cta.primary}
                </Button>
                <Button href={href(locale, '/#method')} variant="invert" size="lg">
                  {dict.cta.secondary}
                </Button>
              </div>
            </div>

            <nav aria-label={t.otherExams} className="col-span-4 md:col-span-4 md:col-start-9">
              <h2 className="text-eyebrow font-semibold uppercase text-cream/40">{t.otherExams}</h2>
              <ul className="mt-6">
                {others.map((other) => (
                  <li key={other} className="border-t-2 border-cream/15">
                    <Link
                      href={href(locale, `${routes.exams}/${other}`)}
                      data-cursor="link"
                      className="group flex items-center justify-between gap-6 py-4"
                    >
                      <span className="text-2xl font-extrabold tracking-[-0.02em] text-cream transition-colors duration-200 group-hover:text-amber">
                        {dict.exams[other].name}
                      </span>
                      <PetalMark
                        className="h-4 w-4 shrink-0 text-cream/30 transition-colors duration-200 group-hover:text-amber"
                        strokeWidth={3.2}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

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
import { contact } from '@/content/site';
import { examBySlug, exams } from '@/content/exams';

export function generateStaticParams() {
  return exams.map((exam) => ({ slug: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const exam = examBySlug(slug);
  if (!exam) return {};
  return {
    title: `${exam.name} preparation`,
    description: exam.hook,
    alternates: { canonical: `/exams/${exam.slug}` },
  };
}

/**
 * Exam page.
 *
 * Structure: header → what it is → format table → how we prep it → key dates
 * → CTA. Format is a definition list on hairlines rather than a bordered
 * table; the content is two columns of short text and a table's chrome adds
 * nothing but weight.
 *
 * Key dates render from config and show a TODO panel while that config is
 * empty. Exam calendars change annually and an out-of-date date on a prep
 * site is worse than no date at all.
 */
export default async function ExamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exam = examBySlug(slug);
  if (!exam) notFound();

  const others = exams.filter((e) => e.slug !== exam.slug);

  return (
    <>
      <PageHeader
        eyebrow={`${exam.index} — Exam`}
        title={exam.name}
        markWord="prep."
        lede={exam.hook}
        meta={[
          { label: 'What it’s for', value: exam.purpose },
          { label: 'Who it’s for', value: exam.audience },
        ]}
      />

      {/* What it is */}
      <section className="bg-cream py-[clamp(4rem,8vw,8rem)]">
        <div className="shell">
          <div className="grid-12 gap-y-12">
            <Reveal className="col-span-4 md:col-span-3">
              <Eyebrow tone="orange">What it is</Eyebrow>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-8 md:col-start-5" delay={0.06}>
              <p className="font-extrabold text-[clamp(1.4rem,2.8vw,2.25rem)] leading-[1.25] text-ink text-pretty">
                {exam.intro}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="bg-sand py-[clamp(4rem,8vw,8rem)]">
        <div className="shell">
          <div className="grid-12 gap-y-12">
            <div className="col-span-4 md:col-span-4">
              <Eyebrow tone="orange" className="mb-7">
                Format
              </Eyebrow>
              <h2 className="font-black text-display-sm text-ink">How the paper is built.</h2>
            </div>

            <RevealList as="dl" className="col-span-4 md:col-span-7 md:col-start-6" stagger={0.07}>
              {exam.format.map((row) => (
                <RevealItem key={row.section} className="border-t-2 border-ink/15 py-6 first:border-t-0 first:pt-0">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink md:w-52 md:shrink-0">
                      {row.section}
                    </dt>
                    <dd className="text-[0.975rem] leading-[1.6] text-ink/70">{row.detail}</dd>
                  </div>
                </RevealItem>
              ))}
            </RevealList>
          </div>
        </div>
      </section>

      {/* How we prep it */}
      <section className="bg-cream py-[clamp(4rem,8vw,8rem)]">
        <div className="shell">
          <div className="grid-12 gap-y-14">
            <div className="col-span-4 md:col-span-5">
              <Eyebrow tone="orange" className="mb-7">
                How we prep it
              </Eyebrow>
              <h2 className="font-black text-display-md text-ink">
                The parts of {exam.name} that actually move a score.
              </h2>
            </div>

            <RevealList as="ol" className="col-span-4 md:col-span-6 md:col-start-7" stagger={0.09}>
              {exam.prep.map((item, i) => (
                <RevealItem as="li" key={item.title} className="border-t-2 border-ink/15 py-9 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-5">
                    <span className="text-[0.7rem] font-semibold tracking-[0.12em] text-orange">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-extrabold text-2xl leading-tight text-ink">{item.title}</h3>
                  </div>
                  <p className="mt-4 max-w-prose text-[1.0625rem] leading-[1.7] text-ink/70 text-pretty">{item.body}</p>
                </RevealItem>
              ))}
            </RevealList>
          </div>
        </div>
      </section>

      {/* Key dates */}
      <section className="bg-cream pb-[clamp(4rem,8vw,8rem)]">
        <div className="shell">
          <PetalDivider className="mb-12" />
          <div className="grid-12 gap-y-8">
            <div className="col-span-4 md:col-span-4">
              <Eyebrow tone="orange" className="mb-6">
                Key dates
              </Eyebrow>
              <h2 className="font-black text-display-sm text-ink">When you can sit it.</h2>
            </div>
            <div className="col-span-4 md:col-span-7 md:col-start-6">
              {exam.keyDates.length > 0 ? (
                <dl>
                  {exam.keyDates.map((date) => (
                    <div key={date.label} className="border-t-2 border-ink/15 py-6 first:border-t-0 first:pt-0">
                      <dt className="font-extrabold text-xl text-ink">{date.label}</dt>
                      <dd className="mt-2 text-[0.95rem] text-ink/70">
                        {date.window}
                        {date.note && <span className="block text-ink/50">{date.note}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <TodoNote>
                  Sitting dates and registration deadlines for {exam.name} have not been added. Add verified entries to{' '}
                  <code className="font-mono text-[0.9em]">keyDates</code> in{' '}
                  <code className="font-mono text-[0.9em]">/src/content/exams.ts</code>, sourced from the official
                  board — they change every year and are not safe to infer.
                </TodoNote>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + other exams */}
      <section className="bg-charcoal py-[clamp(4rem,8vw,7rem)] text-cream">
        <div className="shell">
          <div className="grid-12 gap-y-12">
            <div className="col-span-4 md:col-span-6">
              <h2 className="font-black text-display-md text-cream text-balance">
                Find out where you stand on {exam.name}.
              </h2>
              <p className="mt-7 max-w-prose text-lg leading-relaxed text-cream/70">
                A free diagnostic, an honest read on your level, and a plan you can actually follow.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href={contact.bookingUrl} size="lg">
                  Book a free level analysis
                </Button>
                <Button href="/#method" variant="invert" size="lg">
                  See how it works
                </Button>
              </div>
            </div>

            <nav aria-label="Other exams" className="col-span-4 md:col-span-4 md:col-start-9">
              <h2 className="text-eyebrow font-semibold uppercase text-cream/40">Other exams</h2>
              <ul className="mt-7">
                {others.map((other) => (
                  <li key={other.slug} className="border-t-2 border-cream/15">
                    <Link
                      href={`/exams/${other.slug}`}
                      data-cursor="link"
                      className="group flex items-center justify-between gap-6 py-5"
                    >
                      <span className="font-extrabold text-2xl text-cream transition-colors duration-300 group-hover:text-amber">
                        {other.name}
                      </span>
                      <PetalMark
                        className="h-4 w-4 shrink-0 text-cream/30 transition-colors duration-300 group-hover:text-amber"
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

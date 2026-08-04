import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { contact } from '@/content/site';
import { exams } from '@/content/exams';

export const metadata: Metadata = {
  title: 'Exams we prepare',
  description: 'Digital SAT, IELTS, TOEFL, YDS and UDSP preparation.',
  alternates: { canonical: '/exams' },
};

/**
 * Exam index.
 *
 * An index page's job is to get you off it quickly, so this is a list of large
 * type on hairlines rather than a grid of cards — the same five exams the home
 * page shows horizontally, presented vertically so the two never feel like a
 * duplicated section.
 */
export default function ExamsIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Exams"
        title="Five exams, five different"
        markWord="problems."
        lede="Each has its own logic and its own shortest route to the score you need. Pick the one you are sitting."
      />

      <section className="bg-cream py-[clamp(4rem,8vw,8rem)]">
        <div className="shell">
          <RevealList as="ul" stagger={0.07}>
            {exams.map((exam) => (
              <RevealItem as="li" key={exam.slug} className="border-t border-ink/15 last:border-b">
                <Link href={`/exams/${exam.slug}`} data-cursor="link" className="group block py-10">
                  <div className="grid-12 items-baseline gap-y-4">
                    <span className="col-span-1 font-brand text-[0.7rem] font-semibold tracking-[0.16em] text-orange">
                      {exam.index}
                    </span>
                    <h2 className="col-span-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-none text-ink transition-colors duration-500 group-hover:text-ember md:col-span-5">
                      {exam.name}
                    </h2>
                    <p className="col-span-4 max-w-prose text-[0.975rem] leading-relaxed text-ink/65 md:col-span-5 md:col-start-7">
                      {exam.hook}
                    </p>
                    <PetalMark
                      className="col-span-1 hidden h-5 w-5 text-ink/20 transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:text-orange md:col-start-12 md:block"
                      strokeWidth={3}
                    />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealList>

          <Reveal className="mt-20" delay={0.1}>
            <div className="grid-12">
              <div className="col-span-4 md:col-span-6 md:col-start-6">
                <p className="font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight text-ink">
                  Not sure which one your university list actually requires?
                </p>
                <Button href={contact.bookingUrl} className="mt-8" size="lg">
                  Ask us — it takes five minutes
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

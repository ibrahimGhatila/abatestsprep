import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { resultsPage } from '@/content/pages';

export const metadata: Metadata = {
  title: 'Results',
  description: 'Verified score data, destinations and student outcomes.',
  alternates: { canonical: '/results' },
  // Nothing verified is published here yet, so keep it out of the index.
  robots: { index: false, follow: true },
};

/**
 * Results page.
 *
 * Intentionally near-empty. Every number on a results page is a claim, and the
 * verified figures were not available at build time. Rather than filling the
 * page with plausible-looking statistics, the route exists, states plainly that
 * the data is pending, and is `noindex` until it isn't.
 */
export default function ResultsPage() {
  return (
    <>
      <PageHeader
        eyebrow={resultsPage.eyebrow}
        title={resultsPage.title}
        markWord={resultsPage.markWord}
        lede={resultsPage.lede}
      />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-12">
            <Reveal className="col-span-4 md:col-span-7 md:col-start-3">
              <p className="font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.2] text-ink text-balance">
                We would rather show you nothing than show you a number we cannot stand behind.
              </p>
              <p className="mt-8 max-w-prose text-[1.0625rem] leading-[1.75] text-ink/70 text-pretty">
                Score improvements, target-band hit rates and university destinations will be published here once each
                figure has been verified against our own records. Until then, the most useful number we can give you is
                your own — which is what the free diagnostic is for.
              </p>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-7 md:col-start-3" delay={0.08}>
              <TodoNote>{resultsPage.todo}</TodoNote>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-7 md:col-start-3" delay={0.12}>
              <Button href={contact.bookingUrl} size="lg">
                Get your own numbers first
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

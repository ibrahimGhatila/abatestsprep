import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import StepPin from '@/components/StepPin';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { method } from '@/content/home';
import { methodPage } from '@/content/pages';

export const metadata: Metadata = {
  title: 'Our method',
  description: 'Diagnose, plan, train, perform — the four steps behind every ABA Tests Prep programme.',
  alternates: { canonical: '/method' },
};

/**
 * Method page.
 *
 * Reuses the pinned sequence from the home page — it is the brand's signature
 * interaction and repeating it here is a deliberate echo, not laziness. What
 * this page adds is the reasoning underneath: four principles that explain why
 * the steps are in that order.
 */
export default function MethodPage() {
  return (
    <>
      <PageHeader
        eyebrow={methodPage.eyebrow}
        title={methodPage.title}
        markWord={methodPage.markWord}
        lede={methodPage.lede}
      />

      <StepPin steps={method.steps} banner="upward" />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-14">
            <div className="col-span-4 md:col-span-4">
              <Eyebrow tone="orange" className="mb-7">
                Principles
              </Eyebrow>
              <h2 className="font-display text-display-sm text-ink">Why in that order.</h2>
            </div>

            <RevealList as="ol" className="col-span-4 md:col-span-7 md:col-start-6" stagger={0.09}>
              {methodPage.principles.map((principle, i) => (
                <RevealItem
                  as="li"
                  key={principle.title}
                  className="border-t border-ink/15 py-9 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-brand text-[0.7rem] font-semibold tracking-[0.16em] text-orange">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight text-ink">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-prose text-[1.0625rem] leading-[1.7] text-ink/70 text-pretty">
                    {principle.text}
                  </p>
                </RevealItem>
              ))}
            </RevealList>

            <Reveal className="col-span-4 md:col-span-7 md:col-start-6" delay={0.1}>
              <Button href={contact.bookingUrl} size="lg">
                Start with a free diagnostic
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import Button from '@/components/ui/Button';
import CountUp from '@/components/ui/CountUp';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { cta } from '@/content/site';
import { results } from '@/content/home';

/**
 * Results — on cream.
 *
 * Deliberately NOT pinned to a full viewport. The section is a heading and
 * four figures; stretching that across 100svh only produced a dead band in
 * the middle, and five consecutive full-height sections had started to read
 * as a slideshow. It sizes to its content instead, which also gives the page
 * a change of pace between Pricing and the FAQ.
 *
 * Now that real figures are in, the numbers are the section rather than a
 * caption to it — display scale, on rules, counting up on first view.
 *
 * The testimonial renders only when `results.testimonial.quote` is set — an
 * empty dashed placeholder was taking a third of the section and telling a
 * visitor nothing.
 */
export default function Results() {
  const { quote, name, detail } = results.testimonial;
  const hasTestimonial = Boolean(quote);

  return (
    <section
      id="results"
      className="bg-cream py-section"
    >
      <div className="shell w-full">
        <div className="grid-12 items-end gap-y-8">
          <div className="col-span-4 md:col-span-7">
            <Reveal>
              <Eyebrow tone="orange" className="mb-6">
                {results.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-[clamp(1.9rem,min(4vw,6vh),3.5rem)] font-black leading-[0.98] tracking-[-0.03em] text-ink">
                {results.headline}
              </h2>
            </Reveal>
          </div>

          <Reveal className="col-span-4 md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="max-w-measure text-[0.95rem] leading-[1.55] text-ink/65">
              Where you land depends on where you start.
            </p>
            <Button href={cta.primary.href} variant="ghost" className="mt-6">
              {cta.primary.label}
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Testimonial, only when there is a real one to show. */}
      {hasTestimonial && (
        <div className="shell mt-14 w-full">
          <Reveal>
            <figure className="grid-12">
              <blockquote className="col-span-4 md:col-span-9 md:col-start-3">
                <p className="text-[clamp(1.35rem,min(2.8vw,4vh),2.25rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink text-balance">
                  “{quote}”
                </p>
                <figcaption className="mt-5 text-eyebrow font-semibold uppercase text-ink/55">
                  {name}
                  {detail ? ` — ${detail}` : ''}
                </figcaption>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      )}

      {/* The figures, on the bottom edge at display scale. */}
      <div className="shell mt-14 w-full lg:mt-16">
        <RevealList as="dl" stagger={0.07} className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {results.stats.map((stat) => (
            <RevealItem key={stat.label} className="border-t-2 border-ink pt-5">
              <dd className="text-[clamp(2.5rem,min(6vw,9vh),5rem)] font-black leading-[0.85] tracking-[-0.04em] text-ink">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-4 max-w-[18ch] text-eyebrow font-semibold uppercase leading-relaxed text-ink/60">
                {stat.label}
              </dt>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  );
}

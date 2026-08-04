import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal } from '@/components/ui/Reveal';
import { cta } from '@/content/site';
import { gap } from '@/content/home';

/**
 * "The gap" — the manifesto block, on cream.
 *
 * Deliberately unbalanced: the headline runs across columns 1–8 at
 * `display-lg` in Poppins 900, the JOURNEY banner sits in 9–12 and is pushed
 * down out of alignment with it, and the body copy indents to column 2 and
 * stops at column 6 — leaving a wide, intentional void on the right that a
 * template would have filled.
 *
 * The pull quote then restarts at column 6, so the eye travels left → right →
 * left down the section instead of scanning a stack. It carries the section's
 * CTA, because a manifesto with no next step is just an opinion.
 */
export default function Gap() {
  return (
    <section id="gap" className="relative bg-cream py-section">
      <div className="shell">
        <div className="grid-12 gap-y-14">
          {/* Headline */}
          <div className="col-span-4 md:col-span-8">
            <Reveal>
              <Eyebrow tone="orange" className="mb-7">
                {gap.eyebrow}
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-display-lg font-black text-ink">
                Most students study hard.
                <br />
                Few study <Marker delay={0.3}>right.</Marker>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 max-w-[26ch] text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold leading-[1.2] text-ember">
                {gap.lede}
              </p>
            </Reveal>
          </div>

          {/* Banner, dropped below the headline baseline on purpose */}
          <Reveal className="col-span-4 md:col-span-4 md:col-start-9 lg:mt-20" delay={0.08}>
            <Banner
              name="journey"
              ratio="4/5"
              scrim="none"
              bg="bg-orange"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </Reveal>

          {/* Body copy: indented, narrow measure, wide void to its right */}
          <div className="col-span-4 md:col-span-5 md:col-start-2">
            <div className="space-y-6 border-t-2 border-ink pt-9">
              {gap.body.map((para, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <p className="text-[1.0625rem] leading-[1.6] text-ink/75">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Pull quote + the section's CTA */}
          <Reveal className="col-span-4 md:col-span-6 md:col-start-6 lg:col-span-5 lg:col-start-7" delay={0.06}>
            <blockquote className="border-l-4 border-orange pl-7 md:pl-9">
              <p className="text-[clamp(1.35rem,2.6vw,2.1rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                {gap.pullQuote}
              </p>
            </blockquote>
            <div className="mt-9 pl-7 md:pl-9">
              <Button href={cta.primary.href} size="lg">
                {gap.ctaLabel}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

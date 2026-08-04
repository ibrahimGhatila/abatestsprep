import Banner from '@/components/ui/Banner';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import PetalDivider from '@/components/ui/PetalDivider';
import { Reveal } from '@/components/ui/Reveal';
import { gap } from '@/content/home';

/**
 * "The gap" — the manifesto block.
 *
 * Layout decision: a deliberately unbalanced spread. The headline runs across
 * columns 1–8 at display-lg and is allowed to overshoot the left gutter
 * slightly (`-ml-[0.05em]`, optical alignment for a serif). The banner sits in
 * columns 8–12 and is pushed *down* out of alignment with the headline, so the
 * two never form a tidy two-up. Body copy then indents to column 2 and stops
 * at column 6, which puts a wide, intentional void on the right — the kind of
 * whitespace a template never has because a template fills its grid.
 *
 * The pull quote breaks that pattern again by starting at column 6, so the eye
 * travels left→right→left down the section rather than scanning a stack.
 */
export default function Gap() {
  return (
    <section id="gap" className="relative bg-cream py-section">
      <div className="shell">
        <div className="grid-12 gap-y-16">
          {/* Headline block */}
          <div className="col-span-4 md:col-span-8">
            <Reveal>
              <Eyebrow tone="orange" className="mb-8">
                {gap.eyebrow}
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-display-lg text-ink md:-ml-[0.05em]">
                Most students study hard.
                <br />
                Few study <Marker delay={0.5}>right.</Marker>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-10 max-w-[24ch] font-display text-[clamp(1.35rem,2.4vw,2rem)] leading-snug text-ember">
                {gap.lede}
              </p>
            </Reveal>
          </div>

          {/* Banner, dropped below the headline baseline on purpose */}
          <Reveal className="col-span-4 md:col-span-4 md:col-start-9 lg:mt-24" delay={0.1}>
            <figure className="relative">
              <Banner
                name="journey"
                ratio="4/5"
                scrim="warm"
                sizes="(max-width: 768px) 100vw, 30vw"
                className="rounded-sm"
              />
              <figcaption className="mt-4 max-w-[28ch] font-brand text-[0.7rem] uppercase leading-relaxed tracking-[0.1em] text-ink/45">
                The route matters more than the mileage
              </figcaption>
            </figure>
          </Reveal>

          {/* Body copy: indented, narrow measure, wide void to its right */}
          <div className="col-span-4 md:col-span-5 md:col-start-2">
            <PetalDivider className="mb-10" />
            <div className="space-y-6">
              {gap.body.map((para, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <p className="text-[1.0625rem] leading-[1.75] text-ink/75 text-pretty">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Pull quote — offset right, breaks the reading rhythm */}
          <Reveal className="col-span-4 md:col-span-6 md:col-start-6 lg:col-span-5 lg:col-start-7" delay={0.08}>
            <blockquote className="border-l-2 border-orange pl-8 md:pl-10">
              <p className="font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.15] text-ink text-balance">
                {gap.pullQuote}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import CountUp from '@/components/ui/CountUp';
import Eyebrow from '@/components/ui/Eyebrow';
import PetalDivider from '@/components/ui/PetalDivider';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { results } from '@/content/home';

/**
 * Results.
 *
 * Every figure here is a placeholder and is *shown* as one — a dashed rule and
 * a "figure to be confirmed" label under each stat. That is deliberate: a
 * results section with invented numbers is the one thing on a site like this
 * that can actually cost the client something. The count-up animation is wired
 * and will work the moment real numbers land in /src/content/home.ts.
 *
 * Layout runs the stats along a single hairline-separated row on desktop and a
 * 2×2 on mobile, with the testimonial slot offset beneath rather than centred —
 * again avoiding the equal-thirds card rhythm used elsewhere on the page.
 */
export default function Results() {
  return (
    <section id="results" className="bg-cream py-section">
      <div className="shell">
        <div className="grid-12 gap-y-16">
          <div className="col-span-4 md:col-span-6">
            <Reveal>
              <Eyebrow tone="orange" className="mb-8">
                {results.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-display-md text-ink">{results.headline}</h2>
            </Reveal>
          </div>

          <RevealList
            as="dl"
            stagger={0.09}
            className="col-span-4 grid grid-cols-2 gap-x-6 gap-y-12 md:col-span-12 lg:grid-cols-4"
          >
            {results.stats.map((stat) => (
              <RevealItem key={stat.label} className="border-t border-ink/15 pt-6">
                <dd className="font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-none text-ink">
                  {stat.todo ? (
                    <span className="text-ink/25" aria-label="Figure to be confirmed">
                      —
                    </span>
                  ) : (
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  )}
                </dd>
                <dt className="mt-5 max-w-[18ch] font-brand text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.14em] text-ink/60">
                  {stat.label}
                </dt>
                {stat.todo && (
                  <p className="mt-3 border-t border-dashed border-ember/40 pt-2 font-brand text-[0.6rem] uppercase tracking-[0.12em] text-ember/70">
                    TODO — figure to be confirmed
                  </p>
                )}
              </RevealItem>
            ))}
          </RevealList>

          {/* Testimonial slot */}
          <Reveal className="col-span-4 md:col-span-9 md:col-start-3" delay={0.08}>
            <PetalDivider className="mb-12" />
            {results.testimonial.quote ? (
              <figure>
                <blockquote className="font-display text-[clamp(1.6rem,3.4vw,2.75rem)] leading-[1.2] text-ink text-balance">
                  “{results.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 font-brand text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink/55">
                  {results.testimonial.name}
                  {results.testimonial.detail ? ` — ${results.testimonial.detail}` : ''}
                </figcaption>
              </figure>
            ) : (
              /* TODO(client): a real testimonial, with the student's consent,
                 name and exam. Fill in `results.testimonial` in the content
                 config and this placeholder disappears on its own. */
              <div className="border border-dashed border-ink/25 p-10 md:p-14">
                <p className="max-w-[34ch] font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight text-ink/30">
                  Student testimonial to be added here.
                </p>
                <p className="mt-6 font-brand text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ember/70">
                  TODO — awaiting an approved quote
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

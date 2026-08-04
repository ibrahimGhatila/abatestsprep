import CountUp from '@/components/ui/CountUp';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { results } from '@/content/home';

/**
 * Results, on cream.
 *
 * Every figure is a placeholder and is *shown* as one — an em-dash where the
 * number goes and a dashed TODO rule beneath it. That's deliberate: a results
 * section with invented numbers is the one thing on a site like this that can
 * actually cost the client something. The count-up is wired and fires the
 * moment real numbers land in /src/content/home.ts.
 */
export default function Results() {
  return (
    <section id="results" className="bg-cream py-section">
      <div className="shell">
        <div className="grid-12 gap-y-14">
          <div className="col-span-4 md:col-span-6">
            <Reveal>
              <Eyebrow tone="orange" className="mb-7">
                {results.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md font-black text-ink">{results.headline}</h2>
            </Reveal>
          </div>

          <RevealList
            as="dl"
            stagger={0.06}
            className="col-span-4 grid grid-cols-2 gap-x-6 gap-y-10 md:col-span-12 lg:grid-cols-4"
          >
            {results.stats.map((stat) => (
              <RevealItem key={stat.label} className="border-t-2 border-ink pt-6">
                <dd className="text-[clamp(2.75rem,6vw,4.5rem)] font-black leading-none tracking-[-0.04em] text-ink">
                  {stat.todo ? (
                    <span className="text-ink/20" aria-label="Figure to be confirmed">
                      —
                    </span>
                  ) : (
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  )}
                </dd>
                <dt className="mt-5 max-w-[18ch] text-eyebrow font-semibold uppercase leading-relaxed text-ink/60">
                  {stat.label}
                </dt>
                {stat.todo && (
                  <p className="mt-3 border-t-2 border-dashed border-ember/40 pt-2 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ember/80">
                    TODO — figure to be confirmed
                  </p>
                )}
              </RevealItem>
            ))}
          </RevealList>

          {/* Testimonial slot */}
          <Reveal className="col-span-4 md:col-span-9 md:col-start-3" delay={0.06}>
            {results.testimonial.quote ? (
              <figure>
                <blockquote className="text-[clamp(1.5rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                  “{results.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-7 text-eyebrow font-semibold uppercase text-ink/55">
                  {results.testimonial.name}
                  {results.testimonial.detail ? ` — ${results.testimonial.detail}` : ''}
                </figcaption>
              </figure>
            ) : (
              /* TODO(client): a real testimonial, with the student's consent,
                 name and exam. Fill in `results.testimonial` in the content
                 config and this placeholder disappears on its own. */
              <div className="border-2 border-dashed border-ink/25 p-10 md:p-14">
                <p className="max-w-[34ch] text-[clamp(1.35rem,2.6vw,2rem)] font-extrabold leading-tight tracking-[-0.02em] text-ink/25">
                  Student testimonial to be added here.
                </p>
                <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ember/80">
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

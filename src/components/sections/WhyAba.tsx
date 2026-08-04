import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { why } from '@/content/home';

/**
 * Why ABA, on cream.
 *
 * Explicitly not three matching cards. The pillars are a hairline-separated
 * list, each indented further than the last, so the block reads on a diagonal
 * and can't be confused with any other section on the page.
 *
 * The academic-authority block anchors the left column at a different scale
 * again. Nothing about this person is written here — the photograph, title and
 * biography all come from the client.
 */
export default function WhyAba() {
  return (
    <section id="why" className="bg-cream py-section">
      <div className="shell">
        <div className="grid-12 gap-y-16">
          {/* Heading */}
          <div className="col-span-4 md:col-span-5">
            <Reveal>
              <Eyebrow tone="orange" className="mb-7">
                {why.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md font-black text-ink">
                Evidence, not <Marker delay={0.3}>enthusiasm.</Marker>
              </h2>
            </Reveal>

            {/* Authority slot */}
            <Reveal delay={0.1} className="mt-14">
              <figure className="max-w-sm border-2 border-ink/12 bg-sand p-6">
                {why.authority.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={why.authority.photo} alt={why.authority.name} className="aspect-[4/5] w-full object-cover" />
                ) : (
                  /* TODO(client): approved photograph → /public/people/… then
                     set `why.authority.photo` in /src/content/home.ts */
                  <div className="grid aspect-[4/5] w-full place-items-center border-2 border-dashed border-ink/25">
                    <div className="px-6 text-center">
                      <PetalMark className="mx-auto h-8 w-8 text-orange/50" strokeWidth={2.4} />
                      <p className="mt-4 text-eyebrow font-semibold uppercase text-ink/45">Photograph to follow</p>
                    </div>
                  </div>
                )}
                <figcaption className="mt-6">
                  <p className="text-2xl font-extrabold tracking-[-0.02em] text-ink">{why.authority.name}</p>
                  <p className="mt-2 text-eyebrow font-semibold uppercase text-ember">{why.authority.role}</p>
                  <p className="mt-4 text-sm leading-[1.6] text-ink/60">
                    {/* Deliberately not written for her — see content config. */}
                    Academic oversight of how we diagnose, plan and measure.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Pillars — a stepped list, not a card row */}
          <RevealList as="ol" stagger={0.07} className="col-span-4 md:col-span-6 md:col-start-7">
            {why.pillars.map((pillar, i) => (
              <RevealItem as="li" key={pillar.title} className="border-t-2 border-ink/15 py-9 first:border-t-0 first:pt-0">
                {/* Each pillar steps further right — a diagonal edge down the block. */}
                <div style={{ paddingLeft: `${i * 2.25}rem` }}>
                  <div className="flex items-baseline gap-5">
                    <span className="text-eyebrow font-semibold tracking-[0.12em] text-orange">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[clamp(1.5rem,3vw,2.35rem)] font-extrabold leading-none tracking-[-0.03em] text-ink">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-prose text-[1.0625rem] leading-[1.6] text-ink/70">{pillar.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </div>
    </section>
  );
}

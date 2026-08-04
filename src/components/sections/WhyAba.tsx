import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { why } from '@/content/home';

/**
 * Why ABA.
 *
 * Explicitly *not* three identical cards in a row — the single most recognisable
 * template shape there is. The three pillars are a hairline-separated list
 * instead, each one indented a little further than the last, so the block has
 * a diagonal reading edge and the section is impossible to mistake for the
 * feature grid on the previous section.
 *
 * The academic-authority block anchors the left column at a different scale
 * again: portrait-format, sand card, quiet. Nothing about this person is
 * written here — the copy and the photograph come from the client.
 */
export default function WhyAba() {
  return (
    <section id="why" className="bg-sand py-section">
      <div className="shell">
        <div className="grid-12 gap-y-20">
          {/* Heading */}
          <div className="col-span-4 md:col-span-5">
            <Reveal>
              <Eyebrow tone="orange" className="mb-8">
                {why.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-display-md text-ink">
                Evidence, not <Marker delay={0.5}>enthusiasm.</Marker>
              </h2>
            </Reveal>

            {/* Authority slot */}
            <Reveal delay={0.14} className="mt-16">
              <figure className="max-w-sm border border-ink/12 bg-cream p-6">
                {why.authority.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={why.authority.photo}
                    alt={why.authority.name}
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  /* TODO(client): approved photograph → /public/people/… then
                     set `why.authority.photo` in /src/content/home.ts */
                  <div className="grid aspect-[4/5] w-full place-items-center border border-dashed border-ink/25 bg-sand/60">
                    <div className="px-6 text-center">
                      <PetalMark className="mx-auto h-8 w-8 text-orange/40" strokeWidth={2.4} />
                      <p className="mt-4 font-brand text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                        Photograph to follow
                      </p>
                    </div>
                  </div>
                )}
                <figcaption className="mt-6">
                  <p className="font-display text-2xl leading-tight text-ink">{why.authority.name}</p>
                  <p className="mt-2 font-brand text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ember">
                    {why.authority.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/60">
                    {/* Deliberately not written for her — see content config. */}
                    Academic oversight of how we diagnose, plan and measure.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Pillars — a stepped list, not a card row */}
          <RevealList
            as="ol"
            stagger={0.1}
            className="col-span-4 md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7"
          >
            {why.pillars.map((pillar, i) => (
              <RevealItem
                as="li"
                key={pillar.title}
                className="border-t border-ink/15 py-10 first:border-t-0 first:pt-0"
              >
                {/* Each pillar steps further right — a diagonal edge down the block. */}
                <div style={{ paddingLeft: `${i * 2.25}rem` }}>
                  <div className="flex items-baseline gap-5">
                    <span className="font-brand text-[0.7rem] font-semibold tracking-[0.16em] text-orange">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[clamp(1.6rem,3.2vw,2.5rem)] leading-none text-ink">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-prose text-[1.0625rem] leading-[1.75] text-ink/70 text-pretty">
                    {pillar.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </div>
    </section>
  );
}

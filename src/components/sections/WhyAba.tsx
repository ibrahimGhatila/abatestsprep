import Image from 'next/image';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { cta } from '@/content/site';
import { why } from '@/content/home';

/**
 * Why ABA — on sand, in one screen.
 *
 * Two things were wasting the height here. The pillars each stepped further
 * right, which looked deliberate in isolation but left a growing ragged void
 * down the left of the column; and the academic-authority slot was a
 * portrait-format card nearly 500px tall, most of it an empty placeholder.
 *
 * Now: heading and authority in columns 1–4, the three pillars in 6–12 as a
 * flush hairline-separated list. The authority card turned horizontal — a small
 * portrait beside the name — which is what it should have been while the
 * photograph is still a placeholder, and stays right when a real one lands.
 *
 * Still not three matching cards in a row: the pillars are a list on rules,
 * against a narrower heading column, so the section can't be confused with the
 * pricing panels or the exam rows.
 */
export default function WhyAba() {
  return (
    <section
      id="why"
      className="relative bg-sand py-section lg:h-[100svh] lg:min-h-[40rem] lg:pb-12 lg:pt-[calc(var(--nav-h)+2rem)]"
    >
      <div className="shell w-full lg:h-full">
        <div className="grid-12 gap-y-12 lg:h-full">
          {/* Heading + authority */}
          <div className="col-span-4 md:col-span-5 lg:col-span-4 lg:flex lg:h-full lg:flex-col lg:justify-between">
            <div>
            <Reveal>
              <Eyebrow tone="orange" className="mb-6">
                {why.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md font-black text-ink">
                Evidence, not <Marker delay={0.3}>enthusiasm.</Marker>
              </h2>
            </Reveal>
            </div>

            <div>

            {/* Horizontal authority card — a portrait-format placeholder was
                half the section's height for no information. */}
            <Reveal delay={0.1} className="mt-10 lg:mt-0">
              <figure className="flex max-w-md items-center gap-5 border-2 border-ink/12 bg-cream p-4">
                {why.authority.photo ? (
                  /* `object-top` because portraits crop from the bottom, not
                     through the face. Rendered at 2x for retina and
                     `unoptimized` so it is fetched straight from the source
                     rather than round-tripping through the optimizer. */
                  <Image
                    src={why.authority.photo}
                    alt={why.authority.name}
                    width={224}
                    height={280}
                    unoptimized
                    className="aspect-[4/5] w-28 shrink-0 object-cover object-top"
                  />
                ) : (
                  /* TODO(client): approved photograph → /public/people/… then
                     set `why.authority.photo` in /src/content/home.ts */
                  <div className="grid aspect-[4/5] w-28 shrink-0 place-items-center border-2 border-dashed border-ink/25">
                    <PetalMark className="h-7 w-7 text-orange/50" strokeWidth={2.4} />
                  </div>
                )}
                <figcaption>
                  <p className="text-lg font-extrabold leading-tight tracking-[-0.02em] text-ink">
                    {why.authority.name}
                  </p>
                  <p className="mt-1.5 text-eyebrow font-semibold uppercase text-ember">{why.authority.role}</p>
                  <p className="mt-2.5 text-[0.85rem] leading-[1.5] text-ink/60">
                    {/* Deliberately not written for her — see content config. */}
                    Academic oversight of how we diagnose, plan and measure.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.14}>
              <Button href={cta.primary.href} variant="ghost" className="mt-7">
                {cta.primary.label}
              </Button>
            </Reveal>
            </div>
          </div>

          {/* Pillars — flush list on rules, no stagger */}
          <RevealList as="ol" stagger={0.06} className="col-span-4 md:col-span-7 lg:col-span-7 lg:col-start-6 lg:flex lg:h-full lg:flex-col lg:justify-between">
            {why.pillars.map((pillar, i) => (
              <RevealItem as="li" key={pillar.title} className="border-t-2 border-ink/15 py-7 first:border-t-0 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-4">
                  <span className="text-eyebrow font-semibold tracking-[0.12em] text-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[clamp(1.4rem,2.6vw,2.35rem)] font-extrabold leading-none tracking-[-0.03em] text-ink">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-3.5 max-w-prose pl-9 text-[1.0625rem] leading-[1.6] text-ink/70">{pillar.body}</p>
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </div>
    </section>
  );
}

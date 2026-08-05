import Image from 'next/image';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { PetalMark } from '@/components/Logo';
import { cta } from '@/content/site';
import { why } from '@/content/home';

/**
 * Why ABA — on sand.
 *
 * Content-sized, not held at a full viewport. Once the pillars came down to a
 * line each there was not enough copy to fill a screen, and stretching them
 * across one only reopened the dead-space problem in the middle.
 *
 * Heading and the academic-authority card in columns 1–4, three pillars in
 * 6–12 as a flush hairline-separated list — not three matching cards in a row,
 * so it cannot be confused with the pricing panels or the exam rows.
 */
export default function WhyAba() {
  return (
    <section
      id="why"
      className="relative bg-sand py-section"
    >
      <div className="shell w-full">
        <div className="grid-12 gap-y-12">
          {/* Heading + authority */}
          <div className="col-span-4 md:col-span-5 lg:col-span-4">
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
            <Reveal delay={0.1} className="mt-10 lg:mt-12">
              <figure className="flex max-w-md items-stretch overflow-hidden border-2 border-ink/10 bg-cream">
                {why.authority.photo ? (
                  /* Flush to the card edge, not floating inside padding — that
                     gap was what made it read as pasted in. `object-top`
                     because portraits crop from the bottom, not through the
                     face. 2x for retina; `unoptimized` fetches from source. */
                  <Image
                    src={why.authority.photo}
                    alt={why.authority.name}
                    width={320}
                    height={400}
                    unoptimized
                    className="aspect-[4/5] w-36 shrink-0 object-cover object-top sm:w-40"
                  />
                ) : (
                  /* TODO(client): approved photograph → /public/people/… then
                     set `why.authority.photo` in /src/content/home.ts */
                  <div className="grid aspect-[4/5] w-36 shrink-0 place-items-center bg-sand sm:w-40">
                    <PetalMark className="h-8 w-8 text-orange/50" strokeWidth={2.4} />
                  </div>
                )}

                <figcaption className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  <p className="text-eyebrow font-semibold uppercase text-ember">{why.authority.role}</p>
                  <p className="mt-2.5 text-[1.35rem] font-black leading-[1.05] tracking-[-0.03em] text-ink">
                    {why.authority.name}
                  </p>
                  {/* One line, like every other supporting line on the page. */}
                  <p className="mt-3 border-t-2 border-ink/10 pt-3 text-[0.85rem] leading-snug text-ink/60">
                    Academic oversight of our method.
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
          <RevealList as="ol" stagger={0.06} className="col-span-4 md:col-span-7 lg:col-span-7 lg:col-start-6">
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
                <p className="mt-3 pl-9 text-[1.0625rem] leading-snug text-ink/70">{pillar.line}</p>
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </div>
    </section>
  );
}

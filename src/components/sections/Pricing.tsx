import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import PetalWatermark from '@/components/ui/PetalWatermark';
import { PetalMark } from '@/components/Logo';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { pricing } from '@/content/home';

/**
 * Pricing — on charcoal, in one screen.
 *
 * Two panels, deliberately unequal. The free analysis is a cream panel and the
 * premium programme is a wider orange block — but the primary button, here as
 * everywhere else on the page, is still the free one. That is the conversion
 * logic: the paid step is the destination, the free step is the door.
 *
 * Fitting one viewport meant three things:
 *  - Type is sized in `min(vw, vh)` so the headline and the price figures
 *    shrink on a short laptop instead of pushing the CTAs out of the section.
 *  - The panels flex to the section height and distribute internally, so the
 *    buttons sit on the bottom edge rather than leaving a dead band under them.
 *  - The restating summary line under each price came out. The inclusion list
 *    directly beneath it said the same thing with specifics.
 */
export default function Pricing() {
  return (
    <section
      id="pricing"
      className="on-dark relative overflow-hidden bg-charcoal py-section lg:h-[100svh] lg:min-h-[40rem] lg:pb-12 lg:pt-[calc(var(--nav-h)+1.5rem)]"
    >
      <PetalWatermark tone="orange" size="clamp(20rem,38vw,34rem)" className="-right-28 -top-20" />

      <div className="shell relative flex h-full flex-col">
        {/* Heading */}
        <div className="grid-12 shrink-0 items-end gap-y-5 pb-8 lg:pb-10">
          <div className="col-span-4 md:col-span-7">
            <Reveal>
              <Eyebrow tone="amber" className="mb-5">
                {pricing.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-[clamp(1.8rem,min(3.8vw,5.4vh),3.25rem)] font-black leading-[0.98] tracking-[-0.03em] text-cream">
                {pricing.headline}
              </h2>
            </Reveal>
          </div>
          <Reveal className="col-span-4 md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="max-w-prose text-[0.95rem] leading-[1.55] text-cream/65">{pricing.sub}</p>
          </Reveal>
        </div>

        {/* Panels fill whatever height is left. */}
        <div className="grid-12 min-h-0 flex-1 items-stretch gap-y-6">
          {/* ── Free ──────────────────────────────────────────────── */}
          <Reveal className="col-span-4 md:col-span-5 lg:h-full" delay={0.04}>
            <div className="flex h-full flex-col justify-between bg-cream p-6 xl:p-8">
              <div>
                <p className="text-eyebrow font-semibold uppercase text-ember">{pricing.free.kicker}</p>
                <h3 className="mt-3 text-[clamp(1.35rem,min(2.2vw,3.2vh),1.9rem)] font-black leading-tight tracking-[-0.03em] text-ink">
                  {pricing.free.name}
                </h3>

                <p className="mt-4 text-[clamp(2.25rem,min(4.6vw,7vh),3.75rem)] font-black leading-[0.85] tracking-[-0.04em] text-orange">
                  {pricing.free.price}
                </p>
                <p className="mt-2 text-eyebrow font-semibold uppercase text-ink/50">{pricing.free.priceNote}</p>

                <ul className="mt-5 space-y-2.5 border-t-2 border-ink/12 pt-5">
                  {pricing.free.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.9rem] leading-snug text-ink/80">
                      <PetalMark className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange" strokeWidth={3.4} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button href={pricing.free.cta.href} className="mt-6 w-full self-start sm:w-auto">
                {pricing.free.cta.label}
              </Button>
            </div>
          </Reveal>

          {/* ── Premium ───────────────────────────────────────────── */}
          <Reveal className="col-span-4 md:col-span-7 lg:col-span-7 lg:h-full" delay={0.08}>
            <div className="on-orange relative flex h-full flex-col justify-between overflow-hidden bg-orange p-6 xl:p-10">
              <PetalWatermark tone="cream" size="clamp(11rem,22vw,17rem)" className="-bottom-12 -right-12" />

              <div className="relative">
                <p className="text-eyebrow font-semibold uppercase text-white/80">{pricing.premium.kicker}</p>
                <h3 className="mt-3 text-[clamp(1.5rem,min(2.8vw,4vh),2.5rem)] font-black leading-tight tracking-[-0.03em] text-white">
                  {pricing.premium.name}
                </h3>

                <p className="mt-4 text-[clamp(2.75rem,min(6vw,9vh),5rem)] font-black leading-[0.85] tracking-[-0.045em] text-white">
                  {pricing.premium.price}
                </p>
                <p className="mt-2 text-eyebrow font-semibold uppercase text-white/75">{pricing.premium.priceNote}</p>

                <RevealList
                  as="ul"
                  stagger={0.04}
                  className="mt-5 grid gap-x-6 gap-y-2.5 border-t-2 border-white/25 pt-5 sm:grid-cols-2"
                >
                  {pricing.premium.includes.map((item) => (
                    <RevealItem as="li" key={item} className="flex gap-2.5 text-[0.9rem] leading-snug text-white">
                      <PetalMark className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white" strokeWidth={3.4} />
                      <span>{item}</span>
                    </RevealItem>
                  ))}
                </RevealList>
              </div>

              <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                {/* The free step stays the primary action even inside the
                    premium panel — nobody should buy before the diagnostic. */}
                <Button href={pricing.free.cta.href} variant="onOrange">
                  {pricing.free.cta.label}
                </Button>
                <Button href={pricing.premium.cta.href} variant="invert">
                  {pricing.premium.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

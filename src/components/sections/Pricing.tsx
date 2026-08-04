import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import PetalWatermark from '@/components/ui/PetalWatermark';
import TodoNote from '@/components/ui/TodoNote';
import { PetalMark } from '@/components/Logo';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { pricing } from '@/content/home';

/**
 * Pricing, on charcoal.
 *
 * Two panels, deliberately unequal. The free analysis is a cream panel and the
 * premium programme is a full orange block that is physically larger and sits
 * lower — but the primary button on the page, everywhere including here, is
 * still the free one. That's the conversion logic the client asked for: the
 * paid step is the destination, the free step is the door.
 *
 * The $5,000 figure is the only hard number the client supplied, so it is the
 * only number stated. Every inclusion under it carries a visible confirmation
 * TODO, because what a programme includes is a contractual claim.
 */
export default function Pricing() {
  return (
    <section id="pricing" className="on-dark relative overflow-hidden bg-charcoal py-section">
      <PetalWatermark tone="orange" size="clamp(24rem,46vw,44rem)" className="-right-32 -top-20" />

      <div className="shell relative">
        <div className="grid-12 items-end gap-y-7 pb-14">
          <div className="col-span-4 md:col-span-7">
            <Reveal>
              <Eyebrow tone="amber" className="mb-7">
                {pricing.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-lg font-black text-cream">{pricing.headline}</h2>
            </Reveal>
          </div>
          <Reveal className="col-span-4 md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="max-w-prose leading-[1.6] text-cream/65">{pricing.sub}</p>
          </Reveal>
        </div>

        <div className="grid-12 items-start gap-y-8">
          {/* ── Free ──────────────────────────────────────────────── */}
          <Reveal className="col-span-4 md:col-span-5" delay={0.04}>
            <div className="flex h-full flex-col bg-cream p-8 md:p-10">
              <p className="text-eyebrow font-semibold uppercase text-ember">{pricing.free.kicker}</p>
              <h3 className="mt-5 text-display-sm font-black text-ink">{pricing.free.name}</h3>

              <p className="mt-7 text-[clamp(3rem,7vw,4.5rem)] font-black leading-[0.85] tracking-[-0.04em] text-orange">
                {pricing.free.price}
              </p>
              <p className="mt-3 text-eyebrow font-semibold uppercase text-ink/50">{pricing.free.priceNote}</p>

              <p className="mt-7 text-[1.0625rem] leading-[1.6] text-ink/75">{pricing.free.summary}</p>

              <ul className="mt-8 space-y-3.5 border-t-2 border-ink/12 pt-7">
                {pricing.free.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-snug text-ink/80">
                    <PetalMark className="mt-0.5 h-4 w-4 shrink-0 text-orange" strokeWidth={3.2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 pt-1">
                <Button href={pricing.free.cta.href} size="lg" className="w-full sm:w-auto">
                  {pricing.free.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>

          {/* ── Premium ───────────────────────────────────────────── */}
          <Reveal className="col-span-4 md:col-span-7 lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="on-orange relative overflow-hidden bg-orange p-8 md:p-12">
              <PetalWatermark tone="cream" size="clamp(14rem,28vw,22rem)" className="-bottom-16 -right-16" />

              <div className="relative">
                <p className="text-eyebrow font-semibold uppercase text-white/80">{pricing.premium.kicker}</p>
                <h3 className="mt-5 text-display-md font-black text-white">{pricing.premium.name}</h3>

                <p className="mt-7 text-[clamp(3.5rem,9vw,6rem)] font-black leading-[0.85] tracking-[-0.045em] text-white">
                  {pricing.premium.price}
                </p>
                <p className="mt-3 text-eyebrow font-semibold uppercase text-white/75">{pricing.premium.priceNote}</p>

                <p className="mt-7 max-w-prose text-[1.0625rem] leading-[1.6] text-white/85">
                  {pricing.premium.summary}
                </p>

                <RevealList as="ul" stagger={0.05} className="mt-8 grid gap-3.5 border-t-2 border-white/25 pt-7 sm:grid-cols-2">
                  {pricing.premium.includes.map((item) => (
                    <RevealItem as="li" key={item} className="flex gap-3 text-[0.95rem] leading-snug text-white">
                      <PetalMark className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={3.2} />
                      <span>{item}</span>
                    </RevealItem>
                  ))}
                </RevealList>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  {/* The free step stays the primary action even inside the
                      premium panel — nobody should buy before the diagnostic. */}
                  <Button href={pricing.free.cta.href} variant="onOrange" size="lg">
                    {pricing.free.cta.label}
                  </Button>
                  <Button href={pricing.premium.cta.href} variant="invert" size="lg">
                    {pricing.premium.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-span-4 md:col-span-7 lg:col-span-6 lg:col-start-7" delay={0.06}>
            <TodoNote tone="dark">{pricing.premium.todo}</TodoNote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

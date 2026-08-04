import StepPin from '@/components/StepPin';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cta } from '@/content/site';
import { method } from '@/content/home';

/**
 * Method.
 *
 * The heading sits in a short cream block before the pinned sequence rather
 * than inside it — each pinned panel needs its full height for one step, and
 * the cream → orange cut at the top of the pin is what makes it land.
 *
 * The CTA comes immediately after the sequence, while "01 Diagnose — a free
 * level analysis" is still the last thing read.
 */
export default function Method() {
  return (
    <section id="method" aria-labelledby="method-heading" className="relative">
      <div className="bg-cream pb-[clamp(2.5rem,5vw,4.5rem)] pt-section">
        <div className="shell">
          <div className="grid-12 items-end gap-y-7">
            <div className="col-span-4 md:col-span-7">
              <Reveal>
                <Eyebrow tone="orange" className="mb-7">
                  {method.eyebrow}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="method-heading" className="text-display-lg font-black text-ink">
                  {method.headline}
                </h2>
              </Reveal>
            </div>
            <Reveal className="col-span-4 md:col-span-4 md:col-start-9" delay={0.1}>
              <p className="max-w-measure text-lg leading-[1.6] text-ink/65">{method.sub}</p>
            </Reveal>
          </div>
        </div>
      </div>

      <StepPin steps={method.steps} />

      <div className="bg-cream py-[clamp(3rem,6vw,5rem)]">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-measure text-lg font-semibold leading-[1.4] text-ink">
                Step 01 costs nothing. Start there.
              </p>
              <Button href={cta.primary.href} size="lg">
                {method.ctaLabel}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

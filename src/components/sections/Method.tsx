import StepPin from '@/components/StepPin';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { routes } from '@/content/site';
import { href, type Dictionary, type Locale } from '@/content/i18n';

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
export default function Method({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const method = dict.method;
  return (
    <section id="method" aria-labelledby="method-heading" className="relative">
      <div className="bg-cream pb-[clamp(2.5rem,5vw,4.5rem)] pt-section">
        <div className="shell">
          <div className="grid-12 items-end gap-y-7">
            <div className="col-span-4 md:col-span-9">
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
          </div>
        </div>
      </div>

      <StepPin steps={method.steps} />

      <div className="bg-cream py-[clamp(3rem,6vw,5rem)]">
        <div className="shell">
          <Reveal>
            <Button href={href(locale, routes.contact)} size="lg">
              {method.ctaLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import StepPin from '@/components/StepPin';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { method } from '@/content/home';

/**
 * Method.
 *
 * The heading sits in a short cream block *before* the pinned sequence rather
 * than inside it. Two reasons: the pinned panel needs its full height for one
 * step at a time, and the cream→charcoal cut gives the page a hard edge right
 * before its most involved moment, which is what makes the pin land.
 */
export default function Method() {
  return (
    <section id="method" aria-labelledby="method-heading" className="relative">
      <div className="bg-cream pb-[clamp(3rem,6vw,6rem)] pt-section">
        <div className="shell">
          <div className="grid-12 items-end gap-y-8">
            <div className="col-span-4 md:col-span-7">
              <Reveal>
                <Eyebrow tone="orange" className="mb-8">
                  {method.eyebrow}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 id="method-heading" className="font-display text-display-lg text-ink md:-ml-[0.05em]">
                  {method.headline}
                </h2>
              </Reveal>
            </div>
            <Reveal className="col-span-4 md:col-span-4 md:col-start-9" delay={0.12}>
              <p className="max-w-measure text-lg leading-relaxed text-ink/65 text-pretty">{method.sub}</p>
            </Reveal>
          </div>
        </div>
      </div>

      <StepPin steps={method.steps} banner="upward" />
    </section>
  );
}

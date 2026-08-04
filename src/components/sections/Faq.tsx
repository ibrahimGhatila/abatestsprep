import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cta } from '@/content/site';
import { faq } from '@/content/home';

/**
 * FAQ, on sand — a half-step off cream so it separates from the Results block
 * above it without introducing a fourth colour.
 *
 * Sticky heading in columns 1–4, questions in 6–12. The sticky column keeps
 * the section header (and its CTA) with you through six answers on desktop;
 * mobile just stacks.
 */
export default function Faq() {
  return (
    <section id="faq" className="bg-sand py-section">
      <div className="shell">
        <div className="grid-12 gap-y-12">
          <div className="col-span-4 md:col-span-4">
            <div className="md:sticky md:top-[calc(var(--nav-h)+3rem)]">
              <Reveal>
                <Eyebrow tone="orange" className="mb-7">
                  {faq.eyebrow}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-display-md font-black text-ink">{faq.headline}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-measure leading-[1.6] text-ink/65">
                  Anything still unclear is worth a five-minute conversation rather than a form.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <Button href={cta.primary.href} className="mt-8">
                  {cta.primary.label}
                </Button>
              </Reveal>
            </div>
          </div>

          <Reveal className="col-span-4 md:col-span-7 md:col-start-6" delay={0.05}>
            <Accordion items={[...faq.items]} defaultOpen={0} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

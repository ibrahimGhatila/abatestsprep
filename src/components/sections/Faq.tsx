import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { faq } from '@/content/home';

/**
 * FAQ.
 *
 * Sticky heading in columns 1–4, questions in 6–12. The sticky column means
 * the section header stays with you through six answers on desktop — a small
 * thing that makes a long accordion feel anchored — while mobile just stacks.
 */
export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-section">
      <div className="shell">
        <div className="grid-12 gap-y-14">
          <div className="col-span-4 md:col-span-4">
            <div className="md:sticky md:top-[calc(var(--nav-h)+3rem)]">
              <Reveal>
                <Eyebrow tone="orange" className="mb-8">
                  {faq.eyebrow}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display text-display-md text-ink">{faq.headline}</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-8 max-w-measure text-[0.975rem] leading-relaxed text-ink/65">
                  Anything still unclear is worth a five-minute conversation rather than a form.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <Button href={contact.bookingUrl} variant="ghost" className="mt-8">
                  Talk to us
                </Button>
              </Reveal>
            </div>
          </div>

          <Reveal className="col-span-4 md:col-span-7 md:col-start-6" delay={0.06}>
            <Accordion items={[...faq.items]} defaultOpen={0} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

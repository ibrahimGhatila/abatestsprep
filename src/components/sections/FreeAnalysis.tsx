import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { freeAnalysis } from '@/content/home';

/**
 * Free-analysis CTA.
 *
 * Full-bleed community banner with a charcoal scrim that runs left-to-right,
 * not top-to-bottom — the copy sits in the left third where the scrim is
 * densest, which keeps the photograph visible on the right instead of
 * flattening the whole frame to make white text work.
 *
 * The section is placed after Results and before FAQ on purpose: the ask lands
 * while the evidence is still in view, and any remaining hesitation gets
 * answered immediately below.
 */
export default function FreeAnalysis() {
  return (
    <section id="free-analysis" className="relative isolate">
      <Banner
        name="community"
        ratio="16/9"
        scrim="charcoal"
        sizes="100vw"
        className="min-h-[34rem] md:min-h-[38rem] lg:aspect-[21/9]"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="shell w-full">
            <div className="grid-12">
              <div className="col-span-4 md:col-span-7 lg:col-span-6">
                <Reveal>
                  <Eyebrow tone="cream" className="mb-8">
                    {freeAnalysis.eyebrow}
                  </Eyebrow>
                </Reveal>

                <Reveal delay={0.06}>
                  <h2 className="font-display text-display-md text-cream text-balance">
                    Not sure where you stand?
                    <br />
                    <span className="text-amber">Find out — free.</span>
                  </h2>
                </Reveal>

                <Reveal delay={0.12}>
                  <p className="mt-8 max-w-prose text-lg leading-relaxed text-cream/75 text-pretty">
                    {freeAnalysis.sub}
                  </p>
                </Reveal>

                <Reveal delay={0.18}>
                  <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <Button href={contact.bookingUrl} size="lg">
                      Book a free level analysis
                    </Button>
                    {/* TODO(client): confirm the WhatsApp number in /src/content/site.ts */}
                    <Button
                      href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      external
                      variant="invert"
                      size="lg"
                    >
                      Message us on WhatsApp
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </Banner>
    </section>
  );
}

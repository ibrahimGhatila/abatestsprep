import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal } from '@/components/ui/Reveal';
import { cta, whatsappUrl } from '@/content/site';
import { midCta } from '@/content/home';

/**
 * Mid-page CTA on the full-bleed COMMUNITY banner.
 *
 * Placed straight after the Method sequence, while the four steps are still
 * fresh — the ask lands at the moment the offer has just been explained.
 *
 * The scrim is a hard-edged left-to-right wash rather than a soft gradient:
 * copy sits in the dense left half, the photograph stays visible on the right.
 */
export default function MidCta() {
  return (
    <section id="free-analysis" className="on-dark relative isolate">
      <Banner
        name="community"
        ratio="16/9"
        scrim="edge-dark"
        sizes="100vw"
        className="min-h-[32rem] md:min-h-[36rem] lg:aspect-[21/9]"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="shell w-full">
            <div className="grid-12">
              <div className="col-span-4 md:col-span-7 lg:col-span-6">
                <Reveal>
                  <Eyebrow tone="amber" className="mb-7">
                    {midCta.eyebrow}
                  </Eyebrow>
                </Reveal>

                <Reveal delay={0.05}>
                  <h2 className="text-display-md font-black text-cream text-balance">
                    {midCta.headline}
                    <br />
                    <Marker delay={0.3} tone="amber">
                      <span className="text-ink">{midCta.headlineMark}</span>
                    </Marker>
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="mt-8 max-w-prose text-lg leading-[1.6] text-cream/80">{midCta.sub}</p>
                </Reveal>

                <Reveal delay={0.14}>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <Button href={cta.primary.href} size="lg">
                      {cta.primary.label}
                    </Button>
                    {/* TODO(client): confirm the WhatsApp number in /src/content/site.ts */}
                    <Button href={whatsappUrl} external variant="invert" size="lg">
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

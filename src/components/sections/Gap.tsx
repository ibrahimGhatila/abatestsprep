import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal } from '@/components/ui/Reveal';
import { cta } from '@/content/site';
import { gap } from '@/content/home';

/**
 * "The gap" — one statement and one button.
 *
 * Everything else went: two paragraphs of manifesto, a lede, and a pull quote
 * that argued the same point a third time. What is left is the claim itself,
 * set large, with the JOURNEY banner bleeding off the right edge.
 *
 * Height dropped with the copy. Holding this at a full viewport would have
 * left a headline floating in a screen of empty cream — it is a band now, and
 * the page moves through it in a couple of seconds.
 */
export default function Gap() {
  return (
    <section
      id="gap"
      className="relative overflow-hidden bg-cream py-section lg:flex lg:h-[62svh] lg:min-h-[24rem] lg:items-center lg:py-0"
    >
      {/* Banner: bleeds off the right edge, full section height, desktop only. */}
      <div className="absolute inset-y-0 right-0 hidden w-[31vw] max-w-[34rem] lg:block">
        <Banner name="journey" ratio="auto" scrim="none" bg="bg-orange" sizes="31vw" className="h-full" />
      </div>

      <div className="shell relative w-full">
        <div className="grid-12">
          <div className="col-span-4 md:col-span-9 lg:col-span-7">
            <Reveal>
              <Eyebrow tone="orange" className="mb-6">
                {gap.eyebrow}
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-display-md font-black text-ink">
                Most study hard.
                <br />
                We make sure they study <Marker delay={0.3}>right.</Marker>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <Button href={cta.primary.href} size="lg" className="mt-9">
                {gap.ctaLabel}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Mobile: the banner sits below the statement. */}
      <Reveal className="mt-12 lg:hidden">
        <Banner name="journey" ratio="2/1" scrim="none" bg="bg-orange" sizes="100vw" />
      </Reveal>
    </section>
  );
}

import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal } from '@/components/ui/Reveal';
import { cta } from '@/content/site';
import { gap } from '@/content/home';

/**
 * "The gap" — the manifesto block, on cream, in one screen.
 *
 * The previous version stacked headline → image → body → pull quote down the
 * page and ran to nearly two viewports of mostly empty cream. Everything now
 * sits on a single horizontal spread:
 *
 *   cols 1–7   headline across the top, then lede + CTA (1–3) beside the
 *              argument (4–7) — two short columns instead of one long one
 *   cols 8–12  the JOURNEY banner, bled to the right edge of the viewport and
 *              running the full height of the section, carrying the pull quote
 *
 * Putting the pull quote on the image is what bought the height back: it was
 * previously a whole row of its own, and it reads better as a caption over the
 * photograph than as another block of cream.
 *
 * Height is capped at `100svh` from `lg` up and the section is content-sized
 * below that — a fixed height on a phone would either clip the copy or force
 * it to a size nobody can read.
 */
export default function Gap() {
  return (
    <section
      id="gap"
      className="relative overflow-hidden bg-cream py-section lg:flex lg:h-[100svh] lg:min-h-[40rem] lg:items-center lg:pb-10 lg:pt-[var(--nav-h)]"
    >
      {/* Banner: bleeds off the right edge, full section height, desktop only. */}
      <div className="absolute inset-y-0 right-0 hidden w-[31vw] max-w-[34rem] lg:block">
        <Banner name="journey" ratio="auto" scrim="none" bg="bg-orange" sizes="31vw" className="h-full" />
        {/* Scrim only where the quote sits, so the image stays bright above it. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(26,20,16,0.92)_0%,rgba(26,20,16,0.7)_38%,transparent_100%)]"
        />
        <blockquote className="on-dark absolute inset-x-0 bottom-0 p-9 xl:p-11">
          <p className="text-[clamp(1.1rem,1.5vw,1.45rem)] font-extrabold leading-[1.25] tracking-[-0.02em] text-cream">
            {gap.pullQuote}
          </p>
        </blockquote>
      </div>

      <div className="shell relative w-full">
        <div className="grid-12 gap-y-10">
          <div className="col-span-4 md:col-span-12 lg:col-span-8">
            <Reveal>
              <Eyebrow tone="orange" className="mb-6">
                {gap.eyebrow}
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-display-md font-black text-ink">
                Most students study hard.
                <br />
                Few study <Marker delay={0.3}>right.</Marker>
              </h2>
            </Reveal>

            {/* Argument and action side by side — the row that used to be four
                stacked rows. */}
            <div className="mt-10 grid gap-x-8 gap-y-9 md:grid-cols-7 lg:mt-12">
              <div className="md:col-span-3">
                <Reveal delay={0.08}>
                  <p className="text-[clamp(1.2rem,1.9vw,1.6rem)] font-semibold leading-[1.2] text-ember">
                    {gap.lede}
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <Button href={cta.primary.href} size="lg" className="mt-8">
                    {gap.ctaLabel}
                  </Button>
                </Reveal>
              </div>

              <div className="space-y-4 border-t-2 border-ink pt-6 md:col-span-4 md:border-l-2 md:border-t-0 md:pl-8 md:pt-0">
                {gap.body.map((para, i) => (
                  <Reveal key={i} delay={0.06 + 0.04 * i}>
                    <p className="text-[1.0625rem] leading-[1.65] text-ink/75">{para}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / tablet: the banner drops below the copy with the quote
              underneath it rather than over it, where the frame is shorter. */}
          <Reveal className="col-span-4 md:col-span-12 lg:hidden" delay={0.06}>
            <Banner name="journey" ratio="2/1" scrim="none" bg="bg-orange" sizes="100vw" />
            <blockquote className="mt-6 border-l-4 border-orange pl-6">
              <p className="max-w-prose text-[clamp(1.15rem,3vw,1.5rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink">
                {gap.pullQuote}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import PetalWatermark from '@/components/ui/PetalWatermark';
import { Reveal } from '@/components/ui/Reveal';
import { routes } from '@/content/site';
import { href, type Dictionary, type Locale } from '@/content/i18n';

/**
 * The last thing before the footer: a full orange block, one headline, one
 * button. No competing links, no secondary copy — the only remaining decision
 * on the page is whether to book.
 */
export default function FinalCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const finalCta = dict.finalCta;
  return (
    <section className="on-orange relative overflow-hidden bg-orange py-[clamp(4rem,9vw,8rem)]">
      <PetalWatermark tone="cream" size="clamp(22rem,42vw,38rem)" className="-bottom-32 -left-24" />

      <div className="shell relative">
        <div className="grid-12 items-end gap-y-10">
          <div className="col-span-4 md:col-span-8">
            <Reveal>
              <Eyebrow tone="cream" className="mb-7">
                {finalCta.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-lg font-black text-white text-balance">{finalCta.headline}</h2>
            </Reveal>
          </div>

          <Reveal className="col-span-4 md:col-span-4 md:col-start-9 md:justify-self-end" delay={0.14}>
            <Button href={href(locale, routes.contact)} variant="onOrange" size="lg">
              {dict.cta.primary}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

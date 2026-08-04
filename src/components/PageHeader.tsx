import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Inner-page header.
 *
 * Deliberately lighter than the home hero — no banner, no full viewport, no
 * word-by-word reveal. Sub-pages should feel like chapters of the same book,
 * not five more homepages. The one carried-over device is the amber marker on
 * a single word, which keeps the brand present.
 */
export default function PageHeader({
  eyebrow,
  title,
  markWord,
  lede,
  meta,
}: {
  eyebrow: string;
  title: string;
  /** Optional trailing word rendered with the amber marker. */
  markWord?: string;
  lede?: string;
  /** Small label/value pairs shown on a hairline beneath the header. */
  meta?: { label: string; value: string }[];
}) {
  return (
    <header className="border-b border-ink/10 bg-cream pb-[clamp(3rem,6vw,5rem)] pt-[calc(var(--nav-h)+clamp(4rem,8vw,8rem))]">
      <div className="shell">
        <div className="grid-12 gap-y-10">
          <div className="col-span-4 md:col-span-8">
            <Reveal>
              <Eyebrow tone="orange" className="mb-8">
                {eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-black text-display-lg text-ink text-balance md:-ml-[0.05em]">
                {title}
                {markWord && (
                  <>
                    {' '}
                    <Marker delay={0.45}>{markWord}</Marker>
                  </>
                )}
              </h1>
            </Reveal>
          </div>

          {lede && (
            <Reveal className="col-span-4 md:col-span-5 md:col-start-8" delay={0.12}>
              <p className="text-lg leading-[1.6] text-ink/70 text-pretty">{lede}</p>
            </Reveal>
          )}

          {meta && meta.length > 0 && (
            <Reveal className="col-span-4 md:col-span-12" delay={0.16}>
              <dl className="flex flex-wrap gap-x-12 gap-y-6 border-t-2 border-ink/15 pt-7">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-eyebrow font-semibold uppercase text-ink/45">{item.label}</dt>
                    <dd className="mt-1.5 max-w-[34ch] text-sm leading-snug text-ink/75">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}

import ExamRow from '@/components/ExamRow';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import PetalWatermark from '@/components/ui/PetalWatermark';
import { Reveal } from '@/components/ui/Reveal';
import { examOrder, routes } from '@/content/site';
import { href, type Dictionary, type Locale } from '@/content/i18n';

/**
 * Exams — a full-width interactive list on charcoal.
 *
 * The previous build had five identical cream cards in a row, which is the
 * single most template-looking shape there is. This is the opposite move: six
 * rows the full width of the page, exam names set oversized in Poppins 900,
 * each row flipping to cream and opening its detail panel on hover or focus.
 *
 * It also scales honestly to six entries, where a card row would have wrapped
 * into a lopsided 3+3 grid.
 */
export default function Exams({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const examsSection = dict.examsSection;
  return (
    <section id="exams" className="on-dark relative overflow-hidden bg-charcoal py-section">
      <PetalWatermark tone="orange" size="clamp(24rem,44vw,40rem)" className="-left-40 -top-24" />

      <div className="shell relative">
        <div className="grid-12 items-end gap-y-6 pb-12 lg:pb-16">
          <div className="col-span-4 md:col-span-7">
            <Reveal>
              <Eyebrow tone="amber" className="mb-6">
                {examsSection.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-lg font-black text-cream">{examsSection.headline}</h2>
            </Reveal>
          </div>
          <Reveal className="col-span-4 md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="max-w-prose leading-[1.6] text-cream/65">{examsSection.sub}</p>
          </Reveal>
        </div>
      </div>

      {/* Rows run edge to edge; the shell padding lives inside each row so the
          hover colour flip covers the full viewport width. */}
      <Reveal>
        <ul>
          {examOrder.map((slug, i) => (
            <ExamRow
              key={slug}
              locale={locale}
              slug={slug}
              index={String(i + 1).padStart(2, '0')}
              name={dict.exams[slug].name}
              hook={dict.exams[slug].hook}
              prepLabel={dict.common.prep}
            />
          ))}
        </ul>
      </Reveal>

      <div className="shell relative pt-14">
        <Reveal>
          <Button href={href(locale, routes.contact)} size="lg">
            {dict.cta.primary}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

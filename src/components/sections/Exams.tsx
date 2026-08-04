import ExamRow from '@/components/ExamRow';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import PetalWatermark from '@/components/ui/PetalWatermark';
import { Reveal } from '@/components/ui/Reveal';
import { cta } from '@/content/site';
import { exams } from '@/content/exams';
import { examsSection } from '@/content/home';

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
export default function Exams() {
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
          {exams.map((exam) => (
            <ExamRow key={exam.slug} exam={exam} />
          ))}
        </ul>
      </Reveal>

      <div className="shell relative pt-14">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-measure text-cream/60">
              Not sure which one your university list actually requires? That is the first thing we work out.
            </p>
            <Button href={cta.primary.href} size="lg">
              {cta.primary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

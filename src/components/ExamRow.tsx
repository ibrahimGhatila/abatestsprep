import Link from 'next/link';
import { PetalMark } from '@/components/Logo';
import type { Exam } from '@/content/exams';

/**
 * One row of the exams list.
 *
 * Replaces the old card grid. The row is the full width of the page with the
 * exam name set oversized in Poppins 900; hovering (or keyboard-focusing) it
 * flips the whole row from charcoal to cream and reveals the detail panel
 * underneath.
 *
 * Two implementation notes:
 *  - The reveal is a `grid-template-rows: 0fr → 1fr` transition, which
 *    animates to intrinsic height in pure CSS. No JS, no measured heights, and
 *    it degrades to "always open" if the transition can't run.
 *  - The hover state is driven by `group-hover` AND `group-focus-within`, so
 *    tabbing through the list reveals the same content a mouse would. Below
 *    `lg` the detail panel is simply always open — hover doesn't exist on a
 *    phone, and hiding the "what it's for" copy behind a tap would bury the
 *    only information on the row that helps someone choose.
 */
export default function ExamRow({ exam }: { exam: Exam }) {
  return (
    <li className="group relative border-t border-cream/15 last:border-b">
      <Link
        href={`/exams/${exam.slug}`}
        data-cursor="link"
        className="relative block focus:outline-none focus-visible:outline-none"
      >
        {/* Colour flip. Charcoal → cream, wiping in from the left. */}
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 bg-cream transition-transform duration-300 ease-snap group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none"
        />

        <div className="relative shell py-8 lg:py-10">
          <div className="flex items-center gap-5 lg:gap-10">
            <span className="shrink-0 text-eyebrow font-semibold tracking-[0.12em] text-orange">{exam.index}</span>

            <h3 className="flex-1 text-[clamp(2rem,6.5vw,4.75rem)] font-black leading-[0.95] tracking-[-0.03em] text-cream transition-colors duration-300 group-hover:text-ink group-focus-within:text-ink">
              {exam.name}
            </h3>

            <span className="hidden shrink-0 items-center gap-4 lg:flex">
              <span className="text-eyebrow font-semibold uppercase text-cream/45 transition-colors duration-300 group-hover:text-ink/55 group-focus-within:text-ink/55">
                {exam.fullName}
              </span>
              <PetalMark
                className="h-6 w-6 text-cream/30 transition-all duration-300 ease-snap group-hover:rotate-45 group-hover:text-orange group-focus-within:rotate-45 group-focus-within:text-orange"
                strokeWidth={2.6}
              />
            </span>
          </div>

          {/* Detail panel: always open below lg, hover/focus-revealed above it. */}
          <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-snap lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-within:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="grid-12 gap-y-6 pt-6 lg:pt-8">
                <p className="col-span-4 text-[1.0625rem] leading-[1.55] text-cream/75 transition-colors duration-300 group-hover:text-ink/75 group-focus-within:text-ink/75 md:col-span-5 lg:col-start-2">
                  {exam.hook}
                </p>

                <dl className="col-span-4 md:col-span-3 lg:col-span-2">
                  <dt className="text-eyebrow font-semibold uppercase text-cream/45 transition-colors duration-300 group-hover:text-ink/50 group-focus-within:text-ink/50">
                    What it&rsquo;s for
                  </dt>
                  <dd className="mt-2 text-[0.9rem] leading-snug text-cream/70 transition-colors duration-300 group-hover:text-ink/70 group-focus-within:text-ink/70">
                    {exam.purpose}
                  </dd>
                </dl>

                <dl className="col-span-4 md:col-span-3 lg:col-span-2">
                  <dt className="text-eyebrow font-semibold uppercase text-cream/45 transition-colors duration-300 group-hover:text-ink/50 group-focus-within:text-ink/50">
                    Who it&rsquo;s for
                  </dt>
                  <dd className="mt-2 text-[0.9rem] leading-snug text-cream/70 transition-colors duration-300 group-hover:text-ink/70 group-focus-within:text-ink/70">
                    {exam.audience}
                  </dd>
                </dl>

                <span className="col-span-4 flex items-center gap-2 self-end text-eyebrow font-semibold uppercase text-orange md:col-span-3 lg:col-span-2">
                  {exam.name} prep
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                    <path
                      d="M2 8h11M9 3.5 13.5 8 9 12.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

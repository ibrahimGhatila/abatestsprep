import Link from 'next/link';
import { routes, type ExamSlug } from '@/content/site';
import { href, type Locale } from '@/content/i18n';

/**
 * One row of the exams list: number · name · one line · prep →.
 *
 * Takes plain strings rather than an exam object, so the caller resolves the
 * localised copy and this stays a pure presentational row.
 *
 * The hover state does one thing: flips the row from charcoal to cream, wiping
 * in from the left. Driven by `group-hover` AND `group-focus-within`, so
 * tabbing through the list gets the same feedback a mouse does.
 */
export default function ExamRow({
  locale,
  slug,
  index,
  name,
  hook,
  prepLabel,
}: {
  locale: Locale;
  slug: ExamSlug;
  index: string;
  name: string;
  hook: string;
  /** "prep" / "hazırlık" — the verb after the exam name in the row's CTA. */
  prepLabel: string;
}) {
  return (
    <li className="group relative border-t-2 border-cream/15 last:border-b-2">
      <Link
        href={href(locale, `${routes.exams}/${slug}`)}
        data-cursor="link"
        className="relative block focus:outline-none focus-visible:outline-none"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 bg-cream transition-transform duration-300 ease-snap group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none"
        />

        <div className="relative shell py-6 lg:py-7">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex items-center gap-4 lg:gap-6">
              <span className="shrink-0 text-eyebrow font-semibold tracking-[0.12em] text-orange">{index}</span>
              <h3 className="text-[clamp(1.75rem,4.4vw,3rem)] font-black leading-[0.95] tracking-[-0.03em] text-cream transition-colors duration-300 group-hover:text-ink group-focus-within:text-ink lg:w-[7.5em] lg:shrink-0">
                {name}
              </h3>
            </div>

            <p className="flex-1 pl-8 text-[0.95rem] leading-snug text-cream/70 transition-colors duration-300 group-hover:text-ink/75 group-focus-within:text-ink/75 lg:pl-0">
              {hook}
            </p>

            <span className="flex shrink-0 items-center gap-2 pl-8 text-eyebrow font-semibold uppercase text-orange lg:pl-0">
              {prepLabel}
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5 transition-transform duration-300 ease-snap group-hover:translate-x-1"
                fill="none"
                aria-hidden="true"
              >
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
      </Link>
    </li>
  );
}

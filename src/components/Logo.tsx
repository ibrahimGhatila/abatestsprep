import Link from 'next/link';

/**
 * ABA Tests Prep logo, rebuilt as inline SVG so it stays crisp, themeable
 * and animatable.
 *
 * The mark is five overlapping thin-stroke circles — four petals around a
 * centre — with a leaf/droplet sitting in the top petal, reversed out white
 * on the orange tile. The tile carries the site's one large radius (28px);
 * nothing else on the site is allowed to be that round.
 *
 * TODO(assets): when an official /public/logo.svg is supplied, swap the
 * `<PetalMark/>` body for it — the surrounding API here should not change.
 */

export function PetalMark({ className = '', strokeWidth = 2.1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
        {/* four petals, each passing through the centre point */}
        <circle cx="32" cy="20" r="12" />
        <circle cx="32" cy="44" r="12" />
        <circle cx="20" cy="32" r="12" />
        <circle cx="44" cy="32" r="12" />
        {/* the centre */}
        <circle cx="32" cy="32" r="12" />
      </g>
      {/* leaf / droplet nested in the top petal */}
      <path
        d="M32 11.4c2.9 2.2 4.3 4.6 4.3 7.1 0 2.6-1.9 4.6-4.3 4.6s-4.3-2-4.3-4.6c0-2.5 1.4-4.9 4.3-7.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

type LogoProps = {
  /** `full` = tile + wordmark, `mark` = tile only (used as a graphic motif). */
  variant?: 'full' | 'mark';
  /** `dark` inverts the wordmark for charcoal sections. */
  tone?: 'light' | 'dark';
  className?: string;
  /** Renders as a link to `/` unless false. */
  asLink?: boolean;
};

export default function Logo({ variant = 'full', tone = 'light', className = '', asLink = true }: LogoProps) {
  const wordTone = tone === 'dark' ? 'text-cream' : 'text-ink';
  const subTone = tone === 'dark' ? 'text-cream/60' : 'text-ink/55';

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-pill bg-orange text-white sm:h-12 sm:w-12">
        <PetalMark className="h-7 w-7 sm:h-[1.9rem] sm:w-[1.9rem]" />
      </span>
      {variant === 'full' && (
        <span className="flex flex-col leading-none">
          <span className={`font-brand text-[1.35rem] font-bold leading-[0.95] tracking-tight ${wordTone}`}>aba</span>
          <span className={`font-brand text-[0.6rem] font-medium uppercase leading-none tracking-[0.2em] ${subTone}`}>
            Tests Prep
          </span>
        </span>
      )}
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link href="/" aria-label="ABA Tests Prep — home" data-cursor="link" className="inline-flex">
      {inner}
    </Link>
  );
}

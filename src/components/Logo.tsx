import Link from 'next/link';

/**
 * ABA Tests Prep logo, drawn as inline SVG so it stays crisp, recolourable
 * and animatable.
 *
 * The mark is five overlapping thin-stroke circles — four petals arranged
 * around a centre, each passing through the centre point — with a small
 * leaf/droplet seated in the top petal. Reversed out in white on the orange
 * tile; the tile carries the site's one large radius, and nothing else on the
 * site is allowed to be that round.
 *
 * TODO(assets): when an official /public/logo.svg is supplied, replace the
 * body of `PetalMark` with it. Every consumer goes through this component and
 * its props (`variant`, `tone`, `asLink`), so nothing else needs to change.
 */

export function PetalMark({ className = '', strokeWidth = 2.2 }: { className?: string; strokeWidth?: number }) {
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
  /** `full` = tile + wordmark, `mark` = tile only. */
  variant?: 'full' | 'mark';
  /** `dark` reverses the wordmark for charcoal and orange blocks. */
  tone?: 'light' | 'dark';
  className?: string;
  asLink?: boolean;
};

export default function Logo({ variant = 'full', tone = 'light', className = '', asLink = true }: LogoProps) {
  const wordTone = tone === 'dark' ? 'text-cream' : 'text-ink';
  const subTone = tone === 'dark' ? 'text-cream/65' : 'text-ink/60';
  // On dark blocks the tile inverts: cream tile, orange mark reads better
  // against charcoal than orange-on-charcoal does.
  const tile = tone === 'dark' ? 'bg-cream text-orange' : 'bg-orange text-white';

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-pill sm:h-12 sm:w-12 ${tile}`}>
        <PetalMark className="h-7 w-7 sm:h-[1.9rem] sm:w-[1.9rem]" />
      </span>
      {variant === 'full' && (
        <span className="flex flex-col leading-none">
          <span className={`text-[1.4rem] font-extrabold leading-[0.9] tracking-[-0.04em] ${wordTone}`}>aba</span>
          <span className={`mt-1 text-[0.58rem] font-semibold uppercase leading-none tracking-[0.18em] ${subTone}`}>
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

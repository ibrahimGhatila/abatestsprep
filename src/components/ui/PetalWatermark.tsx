import { PetalMark } from '@/components/Logo';

const tones = {
  cream: 'text-cream/[0.09]',
  ink: 'text-ink/[0.06]',
  orange: 'text-orange/[0.14]',
  amber: 'text-amber/[0.16]',
} as const;

/**
 * The petal mark blown up as a section watermark.
 *
 * Sits behind content at low opacity and bleeds off the edge of its block —
 * cropping it is what stops it reading as "a big logo in the middle" and
 * starts it reading as a print motif. Purely decorative, so it is hidden from
 * assistive tech and never intercepts pointer events.
 */
export default function PetalWatermark({
  className = '',
  tone = 'cream',
  size = 'clamp(20rem, 46vw, 46rem)',
  strokeWidth = 0.55,
}: {
  className?: string;
  tone?: keyof typeof tones;
  /** Any CSS length. */
  size?: string;
  strokeWidth?: number;
}) {
  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={`pointer-events-none absolute select-none ${tones[tone]} ${className}`}
    >
      <PetalMark className="h-full w-full" strokeWidth={strokeWidth} />
    </div>
  );
}

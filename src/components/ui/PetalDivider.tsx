import { PetalMark } from '@/components/Logo';

/**
 * Section divider: a hairline broken by the petal mark.
 *
 * Reusing the logo's geometry as punctuation is how a mark becomes a brand
 * system rather than a sticker in the corner. It also shows up as list
 * bullets and inside the marquee.
 */
export default function PetalDivider({
  tone = 'ink',
  align = 'left',
  className = '',
}: {
  tone?: 'ink' | 'cream';
  align?: 'left' | 'center';
  className?: string;
}) {
  const rule = tone === 'cream' ? 'bg-cream/20' : 'bg-ink/15';
  const mark = tone === 'cream' ? 'text-amber' : 'text-orange';

  return (
    <div aria-hidden="true" className={`flex items-center gap-5 ${className}`}>
      {align === 'center' && <span className={`h-px flex-1 ${rule}`} />}
      <PetalMark className={`h-4 w-4 shrink-0 ${mark}`} strokeWidth={3.2} />
      <span className={`h-px flex-1 ${rule}`} />
    </div>
  );
}

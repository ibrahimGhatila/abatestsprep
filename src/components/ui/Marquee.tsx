import { PetalMark } from '@/components/Logo';

/**
 * Slow infinite marquee.
 *
 * Pure CSS (no JS ticker) so it costs nothing on the main thread and keeps
 * running while heavier scroll animations are working. The list is rendered
 * twice and translated -50%, which is what makes the loop seamless — the
 * duplicate is `aria-hidden` so screen readers hear the names once.
 */
export default function Marquee({
  items,
  duration = 40,
  tone = 'ink',
  className = '',
}: {
  items: readonly string[];
  /** Seconds for one full pass. */
  duration?: number;
  tone?: 'ink' | 'cream';
  className?: string;
}) {
  const textTone = tone === 'cream' ? 'text-cream' : 'text-ink';
  const markTone = tone === 'cream' ? 'text-cream/50' : 'text-orange';

  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
          <span
            className={`text-[clamp(1.5rem,3.4vw,2.75rem)] font-extrabold leading-none tracking-[-0.03em] ${textTone}`}
          >
            {item}
          </span>
          <PetalMark className={`mx-[clamp(1.25rem,3vw,3rem)] h-4 w-4 shrink-0 ${markTone}`} strokeWidth={3.2} />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      style={{ ['--marquee-duration' as string]: `${duration}s` }}
    >
      <div className="marquee-track flex w-max animate-marquee will-change-transform">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

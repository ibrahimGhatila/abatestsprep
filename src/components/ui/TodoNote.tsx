/**
 * A visible, unmissable placeholder marker.
 *
 * Anything on this site that would otherwise require inventing a fact — a
 * statistic, a date, a photograph, a testimonial, what a paid programme
 * includes — renders one of these instead. It is styled to be obviously
 * unfinished so it cannot survive to launch by accident.
 */
export default function TodoNote({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  const shell =
    tone === 'dark'
      ? 'border-amber/50 bg-amber/[0.07] text-amber'
      : 'border-ember/45 bg-ember/[0.05] text-ember';
  const body = tone === 'dark' ? 'text-cream/60' : 'text-ink/60';

  return (
    <p
      role="note"
      className={`flex max-w-prose gap-3 border-2 border-dashed p-5 text-[0.72rem] leading-relaxed ${shell}`}
    >
      <span className="font-semibold uppercase tracking-[0.12em]">TODO</span>
      <span className={body}>{children}</span>
    </p>
  );
}

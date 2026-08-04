/**
 * A visible, unmissable placeholder marker.
 *
 * Anything on this site that would otherwise require inventing a fact — a
 * statistic, a date, a photograph, a testimonial — renders one of these
 * instead. It is styled to be obviously unfinished so it cannot survive to
 * launch by accident.
 */
export default function TodoNote({ children }: { children: React.ReactNode }) {
  return (
    <p
      role="note"
      className="flex max-w-prose gap-3 border border-dashed border-ember/45 bg-ember/[0.04] p-5 font-brand text-[0.7rem] leading-relaxed tracking-[0.04em] text-ember"
    >
      <span className="font-semibold uppercase tracking-[0.16em]">TODO</span>
      <span className="text-ink/60">{children}</span>
    </p>
  );
}

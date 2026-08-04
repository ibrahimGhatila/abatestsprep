import { PetalMark } from '@/components/Logo';

type Props = {
  children: React.ReactNode;
  /** Prefix with the petal mark instead of a plain dot. */
  petal?: boolean;
  tone?: 'ink' | 'orange' | 'cream' | 'amber';
  className?: string;
  as?: 'p' | 'span' | 'div' | 'h2' | 'h3';
  id?: string;
};

const tones = {
  ink: 'text-ink/60',
  orange: 'text-ember',
  cream: 'text-cream/70',
  amber: 'text-amber',
} as const;

/**
 * Uppercase tracked label, Poppins 600 at +0.12em.
 *
 * The one element that repeats across every section — which is what lets the
 * layouts underneath vary as much as they do without the page falling apart.
 */
export default function Eyebrow({ children, petal = true, tone = 'ink', className = '', as: Tag = 'p', id }: Props) {
  return (
    <Tag
      id={id}
      className={`flex items-center gap-2.5 text-eyebrow font-semibold uppercase ${tones[tone]} ${className}`}
    >
      {petal ? (
        <PetalMark className="h-3.5 w-3.5 shrink-0" strokeWidth={3.4} />
      ) : (
        <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-current" />
      )}
      <span>{children}</span>
    </Tag>
  );
}

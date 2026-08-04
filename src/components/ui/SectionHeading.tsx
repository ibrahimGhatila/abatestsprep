import Eyebrow from './Eyebrow';
import { Reveal } from './Reveal';

type Props = {
  eyebrow?: string;
  children: React.ReactNode;
  lede?: React.ReactNode;
  tone?: 'ink' | 'cream';
  size?: 'md' | 'lg';
  className?: string;
  /** Heading level — the visual size is set by `size`, not by this. */
  as?: 'h2' | 'h3';
};

/**
 * Eyebrow + oversized Poppins-900 heading + optional lede.
 *
 * Deliberately left-aligned with no centred option. Centred headings over
 * full-width sections are the single most recognisable tell of a template,
 * and every section on this site is placed on the 12-col grid instead.
 */
export default function SectionHeading({
  eyebrow,
  children,
  lede,
  tone = 'ink',
  size = 'md',
  className = '',
  as: Tag = 'h2',
}: Props) {
  const headingSize = size === 'lg' ? 'text-display-lg' : 'text-display-md';
  const headingTone = tone === 'cream' ? 'text-cream' : 'text-ink';
  const ledeTone = tone === 'cream' ? 'text-cream/70' : 'text-ink/70';

  return (
    <div className={className}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone === 'cream' ? 'cream' : 'orange'} className="mb-6">
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <Tag className={`font-black ${headingSize} ${headingTone} text-balance`}>{children}</Tag>
      </Reveal>
      {lede && (
        <Reveal delay={0.14}>
          <p className={`mt-7 max-w-prose text-lg leading-relaxed ${ledeTone} text-pretty`}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}

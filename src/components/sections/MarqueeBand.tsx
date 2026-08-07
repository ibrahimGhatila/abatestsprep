import Marquee from '@/components/ui/Marquee';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { universities } from '@/content/site';
import type { Dictionary } from '@/content/i18n';

/**
 * Full-bleed orange band between the hero and the first content section.
 *
 * This is the first hard colour cut on the page and it does two jobs: it gives
 * the eye a break after a full-height hero, and it establishes the alternating
 * cream → orange → charcoal rhythm the rest of the page runs on.
 *
 * Copy is careful here. "Where our students are headed" is an aspiration, not
 * a placement claim, and it should stay worded that way.
 */
export default function MarqueeBand({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="marquee-label" className="on-orange relative overflow-hidden bg-orange py-12 md:py-16">
      <div className="shell">
        <Reveal>
          <Eyebrow as="h2" tone="cream" className="mb-8" id="marquee-label">
            {dict.marquee.label}
          </Eyebrow>
        </Reveal>
      </div>

      <Marquee items={universities} duration={40} tone="cream" />
    </section>
  );
}

import Marquee from '@/components/ui/Marquee';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { marquee } from '@/content/home';

/**
 * A thin sand band between the hero and the first content section.
 *
 * Its job is rhythm: after a full-height hero the page needs something short
 * and horizontal before it asks for reading again. The names scroll on a
 * 60-second loop — slow enough to be ambient rather than attention-seeking.
 *
 * Copy is careful here. "Where our students are headed" is an aspiration, not
 * a placement claim, and it should stay worded that way.
 */
export default function MarqueeBand() {
  return (
    <section aria-labelledby="marquee-label" className="relative border-y border-ink/10 bg-sand py-12 md:py-16">
      <div className="shell">
        <Reveal>
          <Eyebrow as="h2" tone="ink" className="mb-8" id="marquee-label">
            {marquee.label}
          </Eyebrow>
        </Reveal>
      </div>

      <Marquee items={marquee.universities} duration={60} />

      {/* Feathered edges so names enter and leave rather than getting chopped. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[12vw] bg-[linear-gradient(to_right,#F5E9DE,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[12vw] bg-[linear-gradient(to_left,#F5E9DE,transparent)]"
      />
    </section>
  );
}

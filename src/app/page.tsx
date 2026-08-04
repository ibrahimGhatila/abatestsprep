import Hero from '@/components/sections/Hero';
import MarqueeBand from '@/components/sections/MarqueeBand';
import Gap from '@/components/sections/Gap';
import Exams from '@/components/sections/Exams';
import Method from '@/components/sections/Method';
import MidCta from '@/components/sections/MidCta';
import WhyAba from '@/components/sections/WhyAba';
import Pricing from '@/components/sections/Pricing';
import Results from '@/components/sections/Results';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';

/**
 * Home.
 *
 * Colour is the structure. Reading down the page:
 *
 *   cream (hero) → ORANGE (marquee) → cream (the gap) → CHARCOAL (exams)
 *   → cream (method intro) → ORANGE/CHARCOAL alternating (pinned steps)
 *   → image block (mid CTA) → cream (why) → CHARCOAL (pricing)
 *   → cream (results) → sand (FAQ) → ORANGE (final CTA) → CHARCOAL (footer)
 *
 * Each block owns exactly one flat colour, and no two adjacent sections share
 * a layout pattern either: full-height split, marquee band, asymmetric spread,
 * full-width interactive list, pinned colour panels, image CTA, stepped list,
 * two-panel pricing, stat row, sticky-column accordion, single-action block.
 *
 * There is a booking CTA in nine of these — after the manifesto, on every exam
 * row, after the method, twice in pricing, mid-page, in the FAQ column, at the
 * end, and pinned to the bottom of the viewport on mobile.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Gap />
      <Exams />
      <Method />
      <MidCta />
      <WhyAba />
      <Pricing />
      <Results />
      <Faq />
      <FinalCta />
    </>
  );
}

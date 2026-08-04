import Hero from '@/components/sections/Hero';
import MarqueeBand from '@/components/sections/MarqueeBand';
import Gap from '@/components/sections/Gap';
import Exams from '@/components/sections/Exams';
import Method from '@/components/sections/Method';
import WhyAba from '@/components/sections/WhyAba';
import Results from '@/components/sections/Results';
import FreeAnalysis from '@/components/sections/FreeAnalysis';
import Faq from '@/components/sections/Faq';

/**
 * Home.
 *
 * Section rhythm is the point of this order. Backgrounds alternate
 * cream → sand → cream → charcoal → cream → sand → cream → image → cream, and
 * no two adjacent sections share a layout pattern: full-height split, thin
 * band, asymmetric spread, horizontal row, pinned sequence, stepped list,
 * stat row, full-bleed image, sticky-column accordion. That variation is what
 * stops a long page reading as a stack of components.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Gap />
      <Exams />
      <Method />
      <WhyAba />
      <Results />
      <FreeAnalysis />
      <Faq />
    </>
  );
}

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
import { getDictionary, type Locale } from '@/content/i18n';

/**
 * Home.
 *
 * Colour is the structure:
 *   cream (hero) → ORANGE (marquee) → cream (the gap) → CHARCOAL (exams)
 *   → cream (method intro) → ORANGE/CHARCOAL alternating (pinned steps)
 *   → image block (mid CTA) → sand (why) → CHARCOAL (pricing)
 *   → cream (results) → sand (FAQ) → ORANGE (final CTA) → CHARCOAL (footer)
 *
 * Every section takes the whole dictionary rather than its own slice — one
 * prop, and adding a string to a section never changes the call site here.
 */
export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <MarqueeBand dict={dict} />
      <Gap locale={locale} dict={dict} />
      <Exams locale={locale} dict={dict} />
      <Method locale={locale} dict={dict} />
      <MidCta locale={locale} dict={dict} />
      <WhyAba locale={locale} dict={dict} />
      <Pricing locale={locale} dict={dict} />
      <Results locale={locale} dict={dict} />
      <Faq locale={locale} dict={dict} />
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}

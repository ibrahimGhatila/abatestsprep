import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import StepPin from '@/components/StepPin';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { routes } from '@/content/site';
import { getDictionary, href, type Locale } from '@/content/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const p = getDictionary(locale).pages.method;
  return { title: p.eyebrow, description: p.lede, alternates: { canonical: href(locale, routes.method) } };
}

/**
 * Method page. Reuses the pinned sequence from the home page — the brand's
 * signature interaction, repeated here deliberately — and adds the reasoning
 * underneath it.
 */
export default async function MethodPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.pages.method;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <StepPin steps={dict.method.steps} />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-12">
            <div className="col-span-4 md:col-span-4">
              <Eyebrow tone="orange" className="mb-6">
                {page.principlesEyebrow}
              </Eyebrow>
              <h2 className="text-display-sm font-black text-ink">{page.principlesHeadline}</h2>
            </div>

            <RevealList as="ol" className="col-span-4 md:col-span-7 md:col-start-6" stagger={0.07}>
              {page.principles.map((principle, i) => (
                <RevealItem
                  as="li"
                  key={principle.title}
                  className="border-t-2 border-ink/15 py-7 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-eyebrow font-semibold tracking-[0.12em] text-orange">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-prose pl-10 text-[1.0625rem] leading-[1.6] text-ink/70">{principle.text}</p>
                </RevealItem>
              ))}
            </RevealList>

            <Reveal className="col-span-4 md:col-span-7 md:col-start-6" delay={0.08}>
              <Button href={href(locale, routes.contact)} size="lg">
                {page.cta}
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

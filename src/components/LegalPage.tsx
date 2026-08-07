import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { getDictionary, href, type Locale } from '@/content/i18n';

export type LegalKey = 'privacy' | 'terms' | 'cancellation';

/**
 * Shared shell for the three legal stubs.
 *
 * The routes exist so every footer link resolves, but no legal text is drafted
 * here. Privacy, terms and cancellation terms are binding commitments — and for
 * students in Türkiye and the EU they carry statutory requirements — so they
 * come from the client. Each page says so plainly and is `noindex` until it
 * carries real content.
 */
export async function legalMetadata(locale: Locale, which: LegalKey): Promise<Metadata> {
  const page = getDictionary(locale).pages.legal[which];
  return {
    title: `${page.title} ${page.markWord}`.trim(),
    description: page.lede,
    alternates: { canonical: href(locale, `/${which}`) },
    robots: { index: false, follow: true },
  };
}

export default function LegalPage({ locale, which }: { locale: Locale; which: LegalKey }) {
  const dict = getDictionary(locale);
  const shared = dict.pages.legal;
  const page = shared[which];

  return (
    <>
      <PageHeader eyebrow={shared.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-9">
            <Reveal className="col-span-4 md:col-span-7 md:col-start-2">
              <p className="text-[clamp(1.25rem,2.4vw,1.85rem)] font-extrabold leading-[1.25] tracking-[-0.02em] text-ink">
                {shared.statement}
              </p>
              <p className="mt-5 max-w-prose leading-[1.6] text-ink/70">{shared.body}</p>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-7 md:col-start-2" delay={0.06}>
              <TodoNote>{page.todo}</TodoNote>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-7 md:col-start-2" delay={0.1}>
              <Button href={`mailto:${contact.email}`} size="lg">
                {dict.cta.emailUs}
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

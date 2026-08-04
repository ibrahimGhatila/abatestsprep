import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { legalPages, type LegalKey } from '@/content/legal';

/**
 * Shared shell for the three legal stubs.
 *
 * The routes exist so every footer link resolves, but no legal text is drafted
 * here. Privacy, terms and cancellation terms are binding commitments — and
 * for students in Türkiye and the EU they carry statutory requirements — so
 * they come from the client, not from a website build. Each page says so
 * plainly and is `noindex` until it carries real content.
 */
export function legalMetadata(which: LegalKey): Metadata {
  const page = legalPages[which];
  return {
    title: `${page.title} ${page.markWord}`.trim(),
    description: page.lede,
    alternates: { canonical: `/${which}` },
    robots: { index: false, follow: true },
  };
}

export default function LegalPage({ which }: { which: LegalKey }) {
  const page = legalPages[which];

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-10">
            <Reveal className="col-span-4 md:col-span-7 md:col-start-2">
              <p className="text-[clamp(1.25rem,2.4vw,1.85rem)] font-extrabold leading-[1.25] tracking-[-0.02em] text-ink">
                This policy has not been published yet.
              </p>
              <p className="mt-6 max-w-prose leading-[1.6] text-ink/70">
                If you need this information before it is up, ask us directly and we will answer in writing.
              </p>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-7 md:col-start-2" delay={0.06}>
              <TodoNote>{page.todo}</TodoNote>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-7 md:col-start-2" delay={0.1}>
              <Button href={`mailto:${contact.email}`} size="lg">
                Email us
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

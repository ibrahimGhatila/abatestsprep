import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import PetalDivider from '@/components/ui/PetalDivider';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { authority, routes } from '@/content/site';
import { getDictionary, href, type Locale } from '@/content/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const p = getDictionary(locale).pages.about;
  return { title: p.eyebrow, description: p.lede, alternates: { canonical: href(locale, routes.about) } };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.pages.about;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <section className="bg-cream py-section">
        <div className="shell">
          <RevealList as="div" className="grid-12 gap-y-14" stagger={0.08}>
            {page.body.map((block) => (
              <RevealItem key={block.heading} className="col-span-4 md:col-span-10 md:col-start-2">
                <div className="grid-12 gap-y-4">
                  <h2 className="col-span-4 text-2xl font-extrabold leading-tight text-ink md:col-span-3">
                    {block.heading}
                  </h2>
                  <p className="col-span-4 max-w-prose text-[1.0625rem] leading-[1.65] text-ink/75 md:col-span-7 md:col-start-5">
                    {block.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealList>

          <PetalDivider className="my-16" />

          <div className="grid-12 gap-y-10">
            <Reveal className="col-span-4 md:col-span-5">
              <h2 className="text-display-sm font-black text-ink">{page.oversightHeadline}</h2>
              <p className="mt-5 max-w-prose text-[1.0625rem] leading-[1.6] text-ink/70">
                {authority.name} {page.oversightLine}
              </p>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-6 md:col-start-7" delay={0.08}>
              <TodoNote>{page.todoAuthority}</TodoNote>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <TodoNote>{page.todo}</TodoNote>
          </Reveal>

          <Reveal className="mt-12" delay={0.06}>
            <Button href={href(locale, routes.contact)} size="lg">
              {dict.cta.primary}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

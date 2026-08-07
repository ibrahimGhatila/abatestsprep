import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal } from '@/components/ui/Reveal';
import { routes } from '@/content/site';
import { getDictionary, href, type Locale } from '@/content/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const p = getDictionary(locale).pages.login;
  return {
    title: p.eyebrow,
    description: p.lede,
    alternates: { canonical: href(locale, routes.login) },
    robots: { index: false, follow: false },
  };
}

/**
 * Student portal — routing stub.
 *
 * Deliberately no form. A login form that posts nowhere invites students to
 * type a password into something that cannot authenticate them, which is a
 * real liability rather than a placeholder.
 */
export default async function LoginPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.pages.login;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-9">
            <Reveal className="col-span-4 md:col-span-6 md:col-start-2">
              <p className="text-[clamp(1.35rem,2.6vw,2rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink">
                {page.statement}
              </p>
              <p className="mt-5 max-w-prose leading-[1.6] text-ink/70">{page.body}</p>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-6 md:col-start-2" delay={0.06}>
              <TodoNote>{page.todo}</TodoNote>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-6 md:col-start-2" delay={0.1}>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href={href(locale, routes.contact)} size="lg">
                  {page.cta}
                </Button>
                <Button href={href(locale, routes.home)} variant="ghost" size="lg">
                  {dict.common.backHome}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

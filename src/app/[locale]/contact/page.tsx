import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { contact, routes, whatsappUrl } from '@/content/site';
import { getDictionary, href, type Locale } from '@/content/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.cta.primary,
    description: dict.pages.contact.lede,
    alternates: { canonical: href(locale, routes.contact) },
  };
}

/**
 * Contact. No form: until a real endpoint exists, one that silently discards
 * submissions is worse than none, so the page routes to channels that work.
 */
export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.pages.contact;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} markWord={page.markWord} lede={page.lede} />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-14">
            <div className="col-span-4 md:col-span-5">
              <Eyebrow tone="orange" className="mb-7">
                {page.getInTouch}
              </Eyebrow>

              <ul className="space-y-px">
                <li>
                  <ContactRow label="WhatsApp" value={page.whatsappNote} href={whatsappUrl} external />
                </li>
                <li>
                  <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                </li>
                <li>
                  <ContactRow
                    label="Instagram"
                    value={contact.instagramHandle}
                    href={contact.instagramUrl}
                    external
                  />
                </li>
              </ul>

              <div className="mt-9">
                <TodoNote>{page.todo}</TodoNote>
              </div>
              <div className="mt-6">
                <TodoNote>{page.todoContacts}</TodoNote>
              </div>
            </div>

            <div className="col-span-4 md:col-span-6 md:col-start-7">
              <Banner
                name="community"
                alt={dict.banners.community}
                ratio="4/3"
                scrim="none"
                bg="bg-orange"
                sizes="(max-width: 768px) 100vw, 45vw"
              />

              <h2 className="mt-10 text-display-sm font-black text-ink">{page.nextHeadline}</h2>
              <RevealList as="ol" className="mt-7" stagger={0.07}>
                {page.steps.map((step, i) => (
                  <RevealItem as="li" key={step.title} className="border-t-2 border-ink/15 py-5 first:border-t-0 first:pt-0">
                    <div className="flex items-baseline gap-5">
                      <span className="text-eyebrow font-semibold tracking-[0.12em] text-orange">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold leading-tight text-ink">{step.title}</h3>
                        <p className="mt-1.5 max-w-prose text-[0.95rem] leading-snug text-ink/70">{step.text}</p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealList>

              <Reveal className="mt-10" delay={0.06}>
                <Button href={whatsappUrl} external size="lg">
                  {dict.cta.whatsapp}
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href: url,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={url}
      data-cursor="link"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-baseline justify-between gap-6 border-t-2 border-ink/15 py-5 transition-colors duration-200 hover:border-ink/40"
    >
      <span className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-none tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-ember">
        {label}
      </span>
      <span className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/50">{value}</span>
    </a>
  );
}

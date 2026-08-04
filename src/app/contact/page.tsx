import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { contactPage } from '@/content/pages';

export const metadata: Metadata = {
  title: 'Book a free level analysis',
  description: 'Book a free diagnostic session and get an honest read on your current level.',
  alternates: { canonical: '/contact' },
};

/**
 * Contact.
 *
 * No form. Until a real endpoint exists, a form that silently discards
 * submissions is worse than no form — so the page routes to channels that
 * actually work (WhatsApp, email, Instagram) and marks the missing booking
 * system as an explicit TODO.
 */
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        markWord={contactPage.markWord}
        lede={contactPage.lede}
      />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-16">
            {/* Channels */}
            <div className="col-span-4 md:col-span-5">
              <Eyebrow tone="orange" className="mb-8">
                Get in touch
              </Eyebrow>

              <ul className="space-y-px">
                <li>
                  <ContactRow
                    label="WhatsApp"
                    value="Fastest reply"
                    href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    external
                  />
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

              <div className="mt-10">
                <TodoNote>{contactPage.todo}</TodoNote>
              </div>

              <div className="mt-10">
                <TodoNote>
                  Confirm the WhatsApp number and public email address in{' '}
                  <code className="font-mono text-[0.9em]">/src/content/site.ts</code> — both are currently
                  placeholders.
                </TodoNote>
              </div>
            </div>

            {/* What happens next */}
            <div className="col-span-4 md:col-span-6 md:col-start-7">
              <Banner
                name="community"
                ratio="4/3"
                scrim="none"
                bg="bg-orange"
                sizes="(max-width: 768px) 100vw, 45vw"
                
              />

              <h2 className="mt-12 font-black text-display-sm text-ink">What happens next.</h2>
              <RevealList as="ol" className="mt-9" stagger={0.08}>
                {contactPage.steps.map((step, i) => (
                  <RevealItem as="li" key={step.title} className="border-t-2 border-ink/15 py-6 first:border-t-0 first:pt-0">
                    <div className="flex items-baseline gap-5">
                      <span className="text-[0.7rem] font-semibold tracking-[0.12em] text-orange">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-extrabold text-xl leading-tight text-ink">{step.title}</h3>
                        <p className="mt-2 max-w-prose text-[0.95rem] leading-[1.6] text-ink/70">{step.text}</p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealList>

              <Reveal className="mt-12" delay={0.06}>
                <Button href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`} external size="lg">
                  Message us on WhatsApp
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
  href,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      data-cursor="link"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-baseline justify-between gap-6 border-t-2 border-ink/15 py-6 transition-colors duration-300 hover:border-ink/40"
    >
      <span className="font-extrabold text-[clamp(1.5rem,3vw,2.25rem)] leading-none text-ink transition-colors duration-300 group-hover:text-ember">
        {label}
      </span>
      <span className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/50">{value}</span>
    </a>
  );
}

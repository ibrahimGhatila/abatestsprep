import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { loginPage } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Student portal for ABA Tests Prep.',
  alternates: { canonical: '/login' },
  robots: { index: false, follow: false },
};

/**
 * Student portal — routing stub.
 *
 * Deliberately no form. A login form that posts nowhere is worse than no form:
 * it invites students to type a password into something that cannot
 * authenticate them, and a non-functional credential field is a real security
 * liability, not a placeholder. So this page states what it is and routes
 * people to a channel that works.
 */
export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow={loginPage.eyebrow}
        title={loginPage.title}
        markWord={loginPage.markWord}
        lede={loginPage.lede}
      />

      <section className="bg-cream py-section">
        <div className="shell">
          <div className="grid-12 gap-y-10">
            <Reveal className="col-span-4 md:col-span-6 md:col-start-2">
              <p className="text-[clamp(1.35rem,2.6vw,2rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink">
                The student portal is not live yet.
              </p>
              <p className="mt-6 max-w-prose leading-[1.6] text-ink/70">
                Until it is, your plan, your mock results and your session schedule come directly from your tutor.
                Message us and we will send them over.
              </p>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-6 md:col-start-2" delay={0.06}>
              <TodoNote>{loginPage.todo}</TodoNote>
            </Reveal>

            <Reveal className="col-span-4 md:col-span-6 md:col-start-2" delay={0.1}>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href={contact.bookingUrl} size="lg">
                  Contact your tutor
                </Button>
                <Button href="/" variant="ghost" size="lg">
                  Back to the homepage
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

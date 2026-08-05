import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import PetalDivider from '@/components/ui/PetalDivider';
import TodoNote from '@/components/ui/TodoNote';
import { Reveal, RevealItem, RevealList } from '@/components/ui/Reveal';
import { contact } from '@/content/site';
import { aboutPage } from '@/content/pages';
import { why } from '@/content/home';

export const metadata: Metadata = {
  title: 'About',
  description: 'Exam preparation built around diagnosis rather than a fixed syllabus.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        markWord={aboutPage.markWord}
        lede={aboutPage.lede}
      />

      <section className="bg-cream py-section">
        <div className="shell">
          <RevealList as="div" className="grid-12 gap-y-16" stagger={0.1}>
            {aboutPage.body.map((block) => (
              <RevealItem key={block.heading} className="col-span-4 md:col-span-10 md:col-start-2">
                <div className="grid-12 gap-y-4">
                  <h2 className="col-span-4 font-extrabold text-2xl leading-tight text-ink md:col-span-3">
                    {block.heading}
                  </h2>
                  <p className="col-span-4 max-w-prose text-[1.0625rem] leading-[1.75] text-ink/75 text-pretty md:col-span-7 md:col-start-5">
                    {block.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealList>

          <PetalDivider className="my-20" />

          <div className="grid-12 gap-y-10">
            <Reveal className="col-span-4 md:col-span-5">
              <h2 className="font-black text-display-sm text-ink">Academic oversight</h2>
              <p className="mt-6 max-w-prose text-[1.0625rem] leading-[1.7] text-ink/70">
                {why.authority.name} advises on how we diagnose, plan and measure progress.
              </p>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-6 md:col-start-7" delay={0.08}>
              {/* TODO(client): approved biography and photograph. */}
              <TodoNote>
                An approved biography and confirmed title for {why.authority.name} are still to be supplied. Nothing about this
                person should be written on her behalf — see{' '}
                <code className="font-mono text-[0.9em]">why.authority</code> in{' '}
                <code className="font-mono text-[0.9em]">/src/content/home.ts</code>.
              </TodoNote>
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <TodoNote>{aboutPage.todo}</TodoNote>
          </Reveal>

          <Reveal className="mt-16" delay={0.06}>
            <Button href={contact.bookingUrl} size="lg">
              Book a free level analysis
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

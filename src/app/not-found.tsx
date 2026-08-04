import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { PetalMark } from '@/components/Logo';

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center bg-cream pt-[var(--nav-h)]">
      <div className="shell">
        <div className="grid-12">
          <div className="col-span-4 md:col-span-7 md:col-start-3">
            <Eyebrow tone="orange" className="mb-8">
              404
            </Eyebrow>
            <h1 className="font-display text-display-lg text-ink">This page went off-syllabus.</h1>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink/70">
              The link is broken or the page has moved. The exams, the method and the booking page are all still where
              you left them.
            </p>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href="/" size="lg">
                Back to the homepage
              </Button>
              <Button href="/exams" variant="ghost" size="lg">
                See the exams
              </Button>
            </div>
            <PetalMark className="mt-16 h-10 w-10 text-orange/30" strokeWidth={2.2} />
          </div>
        </div>
      </div>
    </section>
  );
}

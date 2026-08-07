import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { PetalMark } from '@/components/Logo';
import { defaultLocale, getDictionary, href } from '@/content/i18n';
import { routes } from '@/content/site';

/**
 * `not-found` cannot read route params, so it renders in the default locale.
 * A Turkish visitor hitting a dead link sees an English 404 and two working
 * links — acceptable for a page whose job is to get them out of here.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);
  const page = dict.pages.notFound;

  return (
    <section className="grid min-h-[80svh] place-items-center bg-cream pt-[var(--nav-h)]">
      <div className="shell">
        <div className="grid-12">
          <div className="col-span-4 md:col-span-7 md:col-start-3">
            <Eyebrow tone="orange" className="mb-7">
              {page.eyebrow}
            </Eyebrow>
            <h1 className="text-display-lg font-black text-ink">{page.title}</h1>
            <p className="mt-7 max-w-prose text-lg leading-[1.6] text-ink/70">{page.lede}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href={href(defaultLocale, routes.home)} size="lg">
                {dict.common.backHome}
              </Button>
              <Button href={href(defaultLocale, routes.exams)} variant="ghost" size="lg">
                {page.cta}
              </Button>
            </div>
            <PetalMark className="mt-14 h-10 w-10 text-orange/30" strokeWidth={2.2} />
          </div>
        </div>
      </div>
    </section>
  );
}

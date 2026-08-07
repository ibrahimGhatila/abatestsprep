'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeMeta, locales, switchLocalePath, type Locale } from '@/content/i18n';

/**
 * EN / TR toggle.
 *
 * Swaps the locale segment on whatever path the visitor is currently on, so
 * switching language keeps them on the same page rather than dumping them back
 * at the homepage.
 *
 * Rendered as real links, not buttons: each language is a distinct URL, so it
 * should be openable in a new tab and crawlable. The current locale is marked
 * with `aria-current` and is not a link to itself.
 */
export default function LanguageSwitcher({
  locale,
  label,
  tone = 'light',
}: {
  locale: Locale;
  /** Accessible name for the group, from the dictionary. */
  label: string;
  tone?: 'light' | 'dark';
}) {
  const pathname = usePathname() || `/${locale}`;

  const active = tone === 'dark' ? 'text-cream' : 'text-ink';
  const idle =
    tone === 'dark' ? 'text-cream/45 hover:text-cream' : 'text-ink/45 hover:text-ink';
  const divider = tone === 'dark' ? 'bg-cream/25' : 'bg-ink/20';

  return (
    <nav aria-label={label} className="flex items-center gap-1.5">
      {locales.map((l, i) => {
        const isCurrent = l === locale;
        return (
          <span key={l} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className={`h-3 w-px ${divider}`} />}
            {isCurrent ? (
              <span
                aria-current="true"
                className={`text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${active}`}
              >
                {localeMeta[l].short}
              </span>
            ) : (
              <Link
                href={switchLocalePath(pathname, l)}
                hrefLang={localeMeta[l].htmlLang}
                data-cursor="link"
                className={`text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${idle}`}
              >
                <span className="sr-only">{localeMeta[l].name}</span>
                <span aria-hidden="true">{localeMeta[l].short}</span>
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

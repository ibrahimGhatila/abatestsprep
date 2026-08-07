import { en } from './locales/en';
import { tr } from './locales/tr';

/**
 * Locales.
 *
 * `en` is the default: it is the source of truth for the dictionary shape, and
 * `tr` is type-checked against it, so a missing Turkish key is a build error
 * rather than an English string leaking onto a Turkish page.
 */
export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Shown in the language switcher and used for the `lang` attribute. */
export const localeMeta: Record<Locale, { short: string; name: string; htmlLang: string }> = {
  en: { short: 'EN', name: 'English', htmlLang: 'en' },
  tr: { short: 'TR', name: 'Türkçe', htmlLang: 'tr' },
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

/**
 * Prefix an app-relative path with the current locale.
 *
 * Every internal link goes through this. Paths are stored unprefixed in
 * `site.ts` so there is one definition of each route, and the locale is
 * applied at render time.
 *
 *   href('tr', '/contact')  → '/tr/contact'
 *   href('tr', '/#pricing') → '/tr#pricing'
 *   href('en', '/')         → '/en'
 */
export function href(locale: Locale, path: string): string {
  if (path.startsWith('/#')) return `/${locale}${path.slice(1)}`;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

/** Swap the locale on the path the visitor is currently looking at. */
export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && isLocale(segments[0])) {
    segments[0] = next;
    return `/${segments.join('/')}`;
  }
  return `/${next}${pathname === '/' ? '' : pathname}`;
}

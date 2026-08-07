import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isLocale, locales } from '@/content/i18n';

/**
 * Locale routing.
 *
 * Every page lives under `/[locale]/…`, so a request without a locale prefix
 * gets redirected to one. The locale is picked from `Accept-Language` when the
 * browser asks for Turkish, otherwise it falls back to English — a Turkish
 * student landing on a bare link should not have to find the switcher first.
 *
 * Redirect rather than rewrite, deliberately: one canonical URL per language
 * keeps the `hreflang` pair honest and stops the same page being indexed twice.
 */
function detectLocale(request: NextRequest) {
  const header = request.headers.get('accept-language') ?? '';
  // "tr-TR,tr;q=0.9,en;q=0.8" → ['tr-tr', 'tr', 'en']
  const preferred = header
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase())
    .filter(Boolean);

  for (const tag of preferred) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${detectLocale(request)}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  /**
   * Skip Next internals, the metadata routes that must stay unprefixed, and
   * anything with a file extension.
   */
  matcher: ['/((?!_next|api|robots.txt|sitemap.xml|icon.svg|favicon.ico).*)'],
};

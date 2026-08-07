import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

import Grain from '@/components/Grain';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';
import PageReveal from '@/components/PageReveal';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import { site } from '@/content/site';
import { getDictionary, isLocale, localeMeta, locales, type Locale } from '@/content/i18n';

/**
 * Poppins, and only Poppins.
 *
 * The full weight range is loaded because the type system runs on weight
 * contrast: 900 for display numerals and headlines, 800 for headings, 600 for
 * subheads/labels/buttons, 400–500 for body.
 *
 * `latin-ext` is in the subset list for Turkish — ş, ğ, İ, ı and the dotted
 * capital live outside `latin`, and without it the browser would substitute a
 * fallback face mid-word.
 */
const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

/** One statically rendered tree per language. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${dict.meta.title}`,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      // Tells search engines the two trees are the same page in two languages
      // rather than duplicate content.
      languages: Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, `/${l}`])),
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: locale === 'tr' ? 'tr_TR' : 'en_GB',
      title: `${site.name} — ${dict.meta.title}`,
      description: dict.meta.description,
      url: `${site.url}/${locale}`,
    },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: '#FBF4EF',
  colorScheme: 'light',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <html lang={localeMeta[locale].htmlLang} className={poppins.variable}>
      <body>
        <Grain />
        <Cursor />
        <PageReveal />
        <SmoothScroll>
          <Nav locale={locale} dict={dict} />
          <main id="main">{children}</main>
          <Footer locale={locale} dict={dict} />
        </SmoothScroll>
        <StickyCta locale={locale} label={dict.cta.primary} />
      </body>
    </html>
  );
}

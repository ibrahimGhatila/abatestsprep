import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import Grain from '@/components/Grain';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';
import PageReveal from '@/components/PageReveal';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import { site } from '@/content/site';

/**
 * Poppins, and only Poppins.
 *
 * The full weight range is loaded because the type system runs on weight
 * contrast: 900 for display numerals and headlines, 800 for headings, 600 for
 * subheads/labels/buttons, 400–500 for body. Four static cuts are cheaper than
 * a second family and give the page far more range than mixing two would.
 */
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.positioning}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
    url: site.url,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FBF4EF',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Grain />
        <Cursor />
        <PageReveal />
        <SmoothScroll>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        <StickyCta />
      </body>
    </html>
  );
}

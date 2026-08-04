import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, Poppins } from 'next/font/google';
import './globals.css';

import Grain from '@/components/Grain';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';
import PageReveal from '@/components/PageReveal';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { site } from '@/content/site';

/**
 * Fraunces carries the whole editorial identity. `opsz` is loaded so large
 * headlines get the display cut of the typeface rather than a text cut scaled
 * up — that difference is most of what separates "editorial" from "big serif".
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  // Variable weight axis + the optical-size and shape axes. `weight` is
  // omitted deliberately: declaring it would pin the font to static cuts and
  // `axes` would no longer be allowed.
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Poppins is the brand font: nav, buttons, eyebrows, labels.
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${poppins.variable}`}>
      <body>
        <Grain />
        <Cursor />
        <PageReveal />
        <SmoothScroll>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

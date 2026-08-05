'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Logo from '@/components/Logo';
import Button from '@/components/ui/Button';
import { EASE_SNAP } from '@/lib/motion';
import { cta, nav } from '@/content/site';

/**
 * Floating nav.
 *
 * A detached pill rather than a full-width bar, inset from the top edge so the
 * hero photograph runs underneath it — which is the point of a full-bleed
 * banner. Two states:
 *
 *  - **Over the hero:** dark glass (blurred charcoal, cream hairline) with
 *    cream text and the reversed logo. It has to survive whatever is in the
 *    photograph behind it, so it carries its own tint rather than relying on
 *    the image being dark in that spot.
 *  - **Scrolled:** solid cream pill with ink text and a soft shadow that lifts
 *    it off the content passing beneath.
 *
 * "Log in" is a ghost button (returning students already know where it is) and
 * "Book a free level analysis" is solid orange — the one action the page is
 * built around.
 */
export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 80));

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // The sheet is always cream, so its trigger must read as ink while it's open.
  const onDark = !solid && !menuOpen;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-[80] pt-3 md:pt-5">
        <div className="shell">
          <div
            className={`flex h-16 items-center justify-between gap-6 rounded-pill pl-4 pr-3 transition-[background-color,border-color,box-shadow] duration-300 ease-snap md:pl-5 md:pr-4 ${
              onDark
                ? 'border border-cream/25 bg-charcoal/35 backdrop-blur-md'
                : 'border border-ink/10 bg-cream/95 shadow-[0_14px_40px_-24px_rgba(36,28,22,0.55)] backdrop-blur-md'
            }`}
          >
            <Logo tone={onDark ? 'dark' : 'light'} />

            <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor="link"
                  className={`group relative text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    onDark ? 'text-cream/80 hover:text-cream' : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-right scale-x-0 transition-transform duration-200 ease-snap group-hover:origin-left group-hover:scale-x-100 ${
                      onDark ? 'bg-amber' : 'bg-orange'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <Button
                href={cta.login.href}
                variant={onDark ? 'invert' : 'ghost'}
                size="sm"
                className="hidden md:inline-flex"
              >
                {cta.login.label}
              </Button>
              <Button href={cta.primary.href} size="sm" className="hidden sm:inline-flex">
                {cta.primary.label}
              </Button>

              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                data-cursor="button"
                className={`grid h-11 w-11 place-items-center rounded-pill border transition-colors duration-200 xl:hidden ${
                  onDark ? 'border-cream/30' : 'border-ink/20'
                }`}
              >
                <span className="relative block h-3 w-5">
                  <span
                    className={`absolute left-0 h-[2px] w-5 transition-all duration-200 ease-snap ${
                      onDark ? 'bg-cream' : 'bg-ink'
                    } ${menuOpen ? 'top-1.5 rotate-45' : 'top-0'}`}
                  />
                  <span
                    className={`absolute left-0 h-[2px] w-5 transition-all duration-200 ease-snap ${
                      onDark ? 'bg-cream' : 'bg-ink'
                    } ${menuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE_SNAP }}
            className="fixed inset-0 z-[79] overflow-y-auto bg-cream pt-[calc(var(--nav-h)+1.5rem)] xl:hidden"
          >
            <nav aria-label="Mobile" className="shell flex min-h-full flex-col justify-between gap-10 py-10">
              <ul>
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i + 0.05, duration: 0.3, ease: EASE_SNAP }}
                    className="border-b-2 border-ink/10"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-display-sm font-black text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pb-4">
                <Button href={cta.primary.href} size="lg" magnet={0} className="w-full">
                  {cta.primary.label}
                </Button>
                <Button href={cta.login.href} variant="ghost" size="lg" magnet={0} className="w-full">
                  {cta.login.label}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

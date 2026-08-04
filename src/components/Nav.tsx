'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Logo from '@/components/Logo';
import Button from '@/components/ui/Button';
import { EASE_SNAP } from '@/lib/motion';
import { cta, nav } from '@/content/site';

/**
 * Sticky nav: transparent over the hero, cream once anything scrolls under it.
 *
 * Two actions, deliberately weighted: "Log in" is a ghost button (returning
 * students already know where it is) and "Book a free level analysis" is solid
 * orange (the one action the page is built around). Below `lg` the links
 * collapse into a full-screen sheet and both buttons come with them.
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

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,border-color] duration-200 ease-snap ${
          solid ? 'border-b-2 border-ink/10 bg-cream/95 backdrop-blur-[2px]' : 'border-b-2 border-transparent bg-transparent'
        }`}
      >
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="link"
                className="group relative text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink/70 transition-colors duration-200 hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-right scale-x-0 bg-orange transition-transform duration-200 ease-snap group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button href={cta.login.href} variant="ghost" size="sm" className="hidden md:inline-flex">
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
              className="grid h-11 w-11 place-items-center border-2 border-ink/20 xl:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-[2px] w-5 bg-ink transition-all duration-200 ease-snap ${
                    menuOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-5 bg-ink transition-all duration-200 ease-snap ${
                    menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
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
            className="fixed inset-0 z-[79] overflow-y-auto bg-cream pt-[var(--nav-h)] xl:hidden"
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

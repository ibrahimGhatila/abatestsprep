'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Logo from '@/components/Logo';
import Button from '@/components/ui/Button';
import { EASE_EXPO } from '@/lib/motion';
import { cta, nav } from '@/content/site';

/**
 * Sticky nav: transparent over the hero, cream once you leave it.
 *
 * The switch is at 80px rather than at the hero's full height on purpose —
 * the bar needs a solid background the moment any content scrolls under it,
 * not at some later dramatic moment.
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:font-brand focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,box-shadow,border-color] duration-500 ease-expo ${
          solid ? 'border-b border-ink/10 bg-cream/95 backdrop-blur-[2px]' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-8">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="link"
                className="group relative font-brand text-[0.8rem] font-medium uppercase tracking-[0.12em] text-ink/70 transition-colors duration-300 hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-ember transition-transform duration-500 ease-expo group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href={cta.primary.href} size="md" className="hidden sm:inline-flex">
              {cta.primary.label}
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              data-cursor="button"
              className="grid h-11 w-11 place-items-center rounded-sm border border-ink/15 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-ink transition-all duration-500 ease-expo ${
                    menuOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-5 bg-ink transition-all duration-500 ease-expo ${
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: EASE_EXPO }}
            className="fixed inset-0 z-[79] bg-cream pt-[var(--nav-h)] lg:hidden"
          >
            <nav aria-label="Mobile" className="shell flex h-full flex-col justify-between py-12">
              <ul className="space-y-2">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.6, ease: EASE_EXPO }}
                    className="border-b border-ink/10"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-5 font-display text-display-sm text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Button href={cta.primary.href} size="lg" magnet={0} className="w-full">
                {cta.primary.label}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { EASE_SNAP } from '@/lib/motion';
import { cta } from '@/content/site';

/**
 * Sticky booking bar, mobile only.
 *
 * Appears once you've scrolled past the hero — showing it immediately would
 * cover the hero's own CTA with a duplicate of itself. Hidden from `lg` up,
 * where the nav button is always visible anyway, and it carries bottom safe-area
 * padding so it clears the iOS home indicator.
 */
export default function StickyCta() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 700));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '120%' }}
          animate={{ y: 0 }}
          exit={{ y: '120%' }}
          transition={{ duration: 0.3, ease: EASE_SNAP }}
          className="fixed inset-x-0 bottom-0 z-[85] border-t border-ink/10 bg-cream/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-[2px] lg:hidden"
        >
          <Link
            href={cta.primary.href}
            className="group relative flex h-13 w-full items-center justify-center overflow-hidden rounded-pill bg-orange px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.09em] text-white"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-bottom scale-y-0 bg-ember transition-transform duration-200 ease-snap group-active:scale-y-100"
            />
            <span className="relative z-10">{cta.primary.label}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

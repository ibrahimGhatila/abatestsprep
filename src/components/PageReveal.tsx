'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PetalMark } from '@/components/Logo';
import { EASE_IN_OUT } from '@/lib/motion';
import { useReducedMotionPref } from '@/lib/useMotionPreference';

/**
 * Page-load reveal: a cream curtain carrying the petal mark, which lifts away
 * upward once fonts have settled.
 *
 * Short on purpose — 900ms total. A loader long enough to be admired is a
 * loader that has started costing the visitor something. It also waits on
 * `document.fonts.ready` so the hero never flashes a fallback serif.
 */
export default function PageReveal() {
  const reduced = useReducedMotionPref();
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const finish = () => {
      timer = setTimeout(() => setDone(true), reduced ? 0 : 320);
    };

    if (typeof document !== 'undefined' && 'fonts' in document) {
      // Never block on a font that fails to load.
      Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1600))]).then(finish);
    } else {
      finish();
    }

    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="page-reveal"
          className="pointer-events-none fixed inset-0 z-[110] grid place-items-center bg-cream"
          initial={{ y: 0 }}
          exit={reduced ? { opacity: 0 } : { y: '-100%' }}
          transition={{ duration: reduced ? 0.2 : 0.9, ease: EASE_IN_OUT }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <PetalMark className="h-14 w-14 text-orange" strokeWidth={1.6} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

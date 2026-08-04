'use client';

import { motion } from 'framer-motion';
import { EASE_EXPO } from '@/lib/motion';
import { useReducedMotionPref } from '@/lib/useMotionPreference';

/**
 * The brand signature: an amber highlighter bar that wipes in behind two or
 * three key words. Restraint is the rule — at most one per section, or it
 * stops meaning anything.
 *
 * The bar is a pseudo-element behind the text (see `.marker` in globals.css);
 * here we only drive its horizontal scale so the wipe reads left-to-right
 * like a real marker stroke.
 */
export default function Marker({
  children,
  className = '',
  tone = 'amber',
  delay = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'amber' | 'orange';
  delay?: number;
}) {
  const reduced = useReducedMotionPref();

  return (
    <motion.span
      className={`marker ${tone === 'orange' ? 'marker--ink' : ''} ${className}`}
      initial={reduced ? { '--marker-scale': 1 } : ({ '--marker-scale': 0 } as never)}
      whileInView={{ '--marker-scale': 1 } as never}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.span>
  );
}

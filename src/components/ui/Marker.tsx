'use client';

import { motion } from 'framer-motion';
import { EASE_SNAP } from '@/lib/motion';
import { useReducedMotionPref } from '@/lib/useMotionPreference';

const tones = {
  amber: '',
  /** For orange blocks, where amber-on-orange has no contrast. */
  cream: 'marker--cream',
  ink: 'marker--ink',
} as const;

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
  delay = 0.2,
  block = false,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
  delay?: number;
  /** Fill the whole word instead of underlining it — required on dark backgrounds. */
  block?: boolean;
}) {
  const reduced = useReducedMotionPref();

  return (
    <motion.span
      className={`marker ${tones[tone]} ${block ? 'marker--block' : ''} ${className}`}
      initial={reduced ? { '--marker-scale': 1 } : ({ '--marker-scale': 0 } as never)}
      whileInView={{ '--marker-scale': 1 } as never}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reduced ? 0 : 0.42, delay: reduced ? 0 : delay, ease: EASE_SNAP }}
    >
      {children}
    </motion.span>
  );
}

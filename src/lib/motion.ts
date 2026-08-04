import type { Variants, Transition } from 'framer-motion';

/**
 * One easing curve for the whole site. Framer's house feel is an expo-out:
 * fast departure, long soft settle. Using it everywhere is what makes
 * unrelated animations feel like one system.
 */
export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.83, 0, 0.17, 1] as const;

export const transition = (delay = 0, duration = 0.9): Transition => ({
  duration,
  delay,
  ease: EASE_EXPO,
});

/** Parent that staggers its children in. Children use `revealChild`. */
export const revealGroup = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/**
 * The site-wide section reveal: fade + a short rise + a barely-there
 * scale-up. The scale is 0.98 → 1, small enough to read as "settling"
 * rather than "zooming".
 */
export const revealChild: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_EXPO },
  },
};

/** Opacity-only counterpart used when prefers-reduced-motion is set. */
export const revealChildReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'linear' } },
};

/** Word-by-word headline reveal: masked line box, word slides up from under it. */
export const wordMask: Variants = {
  hidden: { y: '110%' },
  show: (i: number = 0) => ({
    y: '0%',
    transition: { duration: 1.05, delay: 0.06 * i, ease: EASE_EXPO },
  }),
};

export const VIEWPORT = { once: true, amount: 0.25 } as const;
export const VIEWPORT_EARLY = { once: true, amount: 0.1 } as const;

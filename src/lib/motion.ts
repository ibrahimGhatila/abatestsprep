import type { Variants, Transition } from 'framer-motion';

/**
 * One easing curve for the whole site: a snappy easeOut.
 *
 * The brief called the previous expo curve too cinematic. This one departs
 * just as fast but settles in about half the time, which reads as energetic
 * rather than reverent — the same posture as the heavy Poppins headlines.
 */
export const EASE_SNAP = [0.22, 1, 0.36, 1] as const;
/** Kept under the old name so existing call sites stay valid. */
export const EASE_EXPO = EASE_SNAP;
export const EASE_IN_OUT = [0.83, 0, 0.17, 1] as const;

export const transition = (delay = 0, duration = 0.5): Transition => ({
  duration,
  delay,
  ease: EASE_SNAP,
});

export const revealGroup = (stagger = 0.05, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Site-wide section reveal: short rise, quick fade, no scale theatrics. */
export const revealChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_SNAP },
  },
};

/** Opacity-only counterpart used when prefers-reduced-motion is set. */
export const revealChildReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: 'linear' } },
};

/** Word-by-word headline reveal: masked line box, word snaps up from under it. */
export const wordMask: Variants = {
  hidden: { y: '108%' },
  show: (i: number = 0) => ({
    y: '0%',
    transition: { duration: 0.62, delay: 0.045 * i, ease: EASE_SNAP },
  }),
};

export const VIEWPORT = { once: true, amount: 0.2 } as const;
export const VIEWPORT_EARLY = { once: true, amount: 0.05 } as const;

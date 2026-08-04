'use client';

import { useEffect, useState } from 'react';
import { revealChild, revealChildReduced } from './motion';

/**
 * True when the user has asked for reduced motion.
 *
 * Starts `false` on the server and corrects on mount — animations are
 * declarative here, so the one-frame correction is invisible, and it keeps
 * markup identical between server and client.
 */
export function useReducedMotionPref(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/** The reveal variant appropriate to the current motion preference. */
export function useRevealVariant() {
  const reduced = useReducedMotionPref();
  return reduced ? revealChildReduced : revealChild;
}

/** True on devices with a real, hoverable pointer — gates the custom cursor. */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setFine(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setFine(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return fine;
}

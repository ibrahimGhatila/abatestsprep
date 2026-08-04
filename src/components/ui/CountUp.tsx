'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/useMotionPreference';

/**
 * Counts from 0 to `value` the first time it enters view.
 *
 * Uses an expo-out ramp rather than a linear one, so the number decelerates
 * into its final state instead of stopping dead. Under reduced motion it just
 * renders the value.
 */
export default function CountUp({
  value,
  suffix = '',
  prefix = '',
  duration = 1800,
  className = '',
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotionPref();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced || value === 0) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start: number | null = null;

    const step = (now: number) => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-GB')}
      {suffix}
    </span>
  );
}

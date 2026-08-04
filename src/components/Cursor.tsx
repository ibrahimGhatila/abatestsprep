'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '@/lib/useMotionPreference';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary, [data-cursor]';

/**
 * Two-part cursor: a small dot pinned to the pointer, and a ring that trails
 * it on a spring. The lag is the whole effect — a ring that tracks perfectly
 * reads as a rendering artefact; one that catches up reads as physics.
 *
 * Renders nothing on touch devices or under prefers-reduced-motion, where a
 * fake cursor is at best useless and at worst a liability.
 */
export default function Cursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Dot: nearly rigid. Ring: soft and slow, so it swings behind on fast moves.
  const dotX = useSpring(x, { stiffness: 1600, damping: 80, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1600, damping: 80, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-custom-cursor');

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(INTERACTIVE) as HTMLElement | null;
      setHovering(Boolean(el));
      setLabel(el?.dataset?.cursorLabel ?? null);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled, visible, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-ember"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible ? (hovering ? 0 : 1) : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute left-0 top-0 grid place-items-center rounded-full border border-ember/60"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? (label ? 88 : 46) : 28,
          height: hovering ? (label ? 88 : 46) : 28,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering ? 'rgba(198, 65, 15, 0.10)' : 'rgba(198, 65, 15, 0)',
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {label && (
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-ember">
            {label}
          </span>
        )}
      </motion.div>
    </div>
  );
}

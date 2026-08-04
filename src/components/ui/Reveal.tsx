'use client';

import { motion } from 'framer-motion';
import { revealGroup, VIEWPORT } from '@/lib/motion';
import { useRevealVariant } from '@/lib/useMotionPreference';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'figure';
};

/** Single element: fade-up + settle, once, when it enters the viewport. */
export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const variant = useRevealVariant();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

/**
 * Staggering parent. Children must be `<RevealItem>` (or anything using the
 * `hidden`/`show` variant names) — the parent only orchestrates timing.
 */
export function RevealList({
  children,
  className = '',
  stagger = 0.08,
  delayChildren = 0,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  as?: 'div' | 'ul' | 'ol' | 'dl' | 'section';
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={revealGroup(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({
  children,
  className = '',
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article' | 'dt' | 'dd';
}) {
  const variant = useRevealVariant();
  const Comp = motion[as];
  return (
    <Comp className={className} variants={variant}>
      {children}
    </Comp>
  );
}

'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '@/lib/useMotionPreference';

/**
 * `primary`  — solid orange, ember wipe on hover. The booking action.
 * `ghost`    — outlined, for secondary actions on cream.
 * `invert`   — outlined cream, for charcoal blocks.
 * `onOrange` — solid cream with ink text, for orange blocks where a solid
 *              orange button would be invisible.
 */
type Variant = 'primary' | 'ghost' | 'invert' | 'onOrange';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Magnetic pull strength, 0–1. Set 0 to opt out. */
  magnet?: number;
};

type ButtonProps = BaseProps &
  ({ href: string; external?: boolean } | { href?: undefined; onClick?: () => void; type?: 'button' | 'submit' });

/** Hoisted: creating this inside render would remount the link every frame. */
const MotionLink = motion.create(Link);

const base =
  'group relative inline-flex select-none items-center justify-center overflow-hidden rounded-pill font-semibold ' +
  'uppercase tracking-[0.09em] transition-colors duration-200 ease-snap focus-visible:outline-offset-4';

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-[0.68rem]',
  md: 'h-12 px-6 text-[0.72rem]',
  lg: 'h-14 px-8 text-[0.78rem]',
};

const variants: Record<Variant, string> = {
  primary: 'bg-orange text-white',
  ghost: 'border-2 border-ink/25 bg-transparent text-ink hover:border-ink',
  invert: 'border-2 border-cream/35 bg-transparent text-cream hover:border-cream',
  onOrange: 'bg-cream text-ink',
};

/** The colour that wipes up on hover, per variant. */
const wipes: Record<Variant, string> = {
  primary: 'bg-ember',
  ghost: 'bg-ink',
  invert: 'bg-cream',
  onOrange: 'bg-ink',
};

/** Label colour once the wipe has covered the button. */
const wipeText: Record<Variant, string> = {
  primary: 'group-hover:text-white',
  ghost: 'group-hover:text-cream',
  invert: 'group-hover:text-ink',
  onOrange: 'group-hover:text-cream',
};

/**
 * Magnetic button.
 *
 * Two things happen on hover: the button leans toward the cursor (capped at a
 * few pixels — enough to feel alive, not enough to feel broken), and an ember
 * fill wipes up from the bottom edge in 220ms. Both are disabled for coarse
 * pointers and reduced motion, where they'd be noise.
 */
export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '', magnet = 0.3 } = props;

  const ref = useRef<HTMLElement | null>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const magnetic = fine && !reduced && magnet > 0;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 420, damping: 20, mass: 0.3 });
  const y = useSpring(my, { stiffness: 420, damping: 20, mass: 0.3 });

  const onPointerMove = (e: React.PointerEvent) => {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    mx.set(Math.max(-14, Math.min(14, dx * magnet)));
    my.set(Math.max(-10, Math.min(10, dy * magnet)));
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-[220ms] ease-snap group-hover:scale-y-100 motion-reduce:transition-none ${wipes[variant]}`}
      />
      <span className={`relative z-10 flex items-center gap-2 transition-colors duration-[220ms] ${wipeText[variant]}`}>
        {children}
      </span>
    </>
  );

  const cn = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const style = magnetic ? { x, y } : undefined;

  if ('href' in props && props.href) {
    const external = 'external' in props && props.external;
    return (
      <MotionLink
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={props.href}
        className={cn}
        style={style}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        data-cursor="button"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={('type' in props && props.type) || 'button'}
      onClick={'onClick' in props ? props.onClick : undefined}
      className={cn}
      style={style}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      data-cursor="button"
    >
      {content}
    </motion.button>
  );
}

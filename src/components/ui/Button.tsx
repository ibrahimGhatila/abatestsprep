'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '@/lib/useMotionPreference';

type Variant = 'primary' | 'ghost' | 'invert';
type Size = 'md' | 'lg';

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
  'group relative inline-flex select-none items-center justify-center overflow-hidden rounded-pill font-brand font-semibold ' +
  'tracking-[0.01em] transition-colors duration-300 ease-expo focus-visible:outline-offset-4';

const sizes: Record<Size, string> = {
  md: 'h-11 px-6 text-[0.8rem]',
  lg: 'h-14 px-8 text-[0.875rem]',
};

const variants: Record<Variant, string> = {
  primary: 'bg-orange text-white',
  ghost: 'border border-ink/25 bg-transparent text-ink hover:border-ink/50',
  invert: 'border border-cream/30 bg-transparent text-cream hover:border-cream/70',
};

/**
 * Magnetic button.
 *
 * Two things happen on hover: the button leans toward the cursor (capped at a
 * few pixels — enough to feel alive, not enough to feel broken), and on the
 * primary variant an ember fill wipes up from the bottom edge. Both are
 * disabled for coarse pointers and reduced motion, where they'd be noise.
 */
export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '', magnet = 0.28 } = props;

  const ref = useRef<HTMLElement | null>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const magnetic = fine && !reduced && magnet > 0;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 320, damping: 22, mass: 0.4 });
  const y = useSpring(my, { stiffness: 320, damping: 22, mass: 0.4 });

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
      {/* ember wipe — sits under the label, scales up from the bottom edge */}
      {variant === 'primary' && (
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-bottom scale-y-0 bg-ember transition-transform duration-500 ease-expo group-hover:scale-y-100 motion-reduce:transition-none"
        />
      )}
      {variant !== 'primary' && (
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-bottom scale-y-0 bg-amber/20 transition-transform duration-500 ease-expo group-hover:scale-y-100 motion-reduce:transition-none"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
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

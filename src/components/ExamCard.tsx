'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PetalMark } from '@/components/Logo';
import type { Exam } from '@/content/exams';
import { useFinePointer, useReducedMotionPref } from '@/lib/useMotionPreference';

/** Each exam gets its own accent so the row reads as five things, not one thing ×5. */
const accents: Record<Exam['accent'], { bar: string; index: string; hover: string }> = {
  orange: { bar: 'bg-orange', index: 'text-orange/25', hover: 'group-hover:text-orange' },
  ember: { bar: 'bg-ember', index: 'text-ember/25', hover: 'group-hover:text-ember' },
  amber: { bar: 'bg-amber', index: 'text-amber/40', hover: 'group-hover:text-amber' },
  deep: { bar: 'bg-orange-deep', index: 'text-orange-deep/25', hover: 'group-hover:text-orange-deep' },
};

/**
 * Exam card with a pointer-tracked tilt.
 *
 * The rotation is capped at ~5° and springs back — enough to give the card
 * weight as the cursor crosses it, not enough to turn the row into a toy.
 * Coarse pointers and reduced-motion users get a static card.
 */
export default function ExamCard({ exam }: { exam: Exam }) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const tilt = fine && !reduced;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 220, damping: 24 });
  const sy = useSpring(py, { stiffness: 220, damping: 24 });
  const rotateY = useTransform(sx, [0, 1], [-5, 5]);
  const rotateX = useTransform(sy, [0, 1], [4.5, -4.5]);

  const onMove = (e: React.PointerEvent) => {
    if (!tilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  const accent = accents[exam.accent];

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.article
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-md border border-ink/10 bg-cream p-8 transition-[transform,box-shadow,border-color] duration-500 ease-expo hover:-translate-y-2 hover:border-ink/20 hover:shadow-[0_30px_60px_-30px_rgba(36,28,22,0.35)] motion-reduce:hover:translate-y-0 sm:p-9"
      >
        {/* accent bar — the only chrome the card gets */}
        <span aria-hidden="true" className={`absolute left-0 top-0 h-1 w-16 ${accent.bar}`} />

        <div>
          <div className="flex items-start justify-between gap-6">
            <span className={`font-display text-[3rem] leading-none ${accent.index}`}>{exam.index}</span>
            <PetalMark
              className="h-5 w-5 shrink-0 text-ink/20 transition-colors duration-500 group-hover:text-orange"
              strokeWidth={3}
            />
          </div>

          <h3 className={`mt-6 font-display text-[clamp(1.6rem,2.7vw,2.15rem)] leading-none text-ink transition-colors duration-500 ${accent.hover}`}>
            {exam.name}
          </h3>

          <p className="mt-4 max-w-[30ch] text-[0.95rem] leading-relaxed text-ink/70 text-pretty">{exam.hook}</p>
        </div>

        <dl className="mt-8 space-y-3.5 border-t border-ink/10 pt-6">
          <div>
            <dt className="font-brand text-eyebrow font-semibold uppercase text-ink/45">What it&rsquo;s for</dt>
            <dd className="mt-1.5 text-[0.85rem] leading-snug text-ink/75">{exam.purpose}</dd>
          </div>
          <div>
            <dt className="font-brand text-eyebrow font-semibold uppercase text-ink/45">Who it&rsquo;s for</dt>
            <dd className="mt-1.5 text-[0.85rem] leading-snug text-ink/75">{exam.audience}</dd>
          </div>
        </dl>

        <Link
          href={`/exams/${exam.slug}`}
          data-cursor="link"
          className="mt-7 inline-flex items-center gap-2 font-brand text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ember"
        >
          {/* The whole card is the hit area; the link text is the affordance. */}
          <span className="absolute inset-0 rounded-md" aria-hidden="true" />
          <span className="relative">
            {exam.name} prep
            <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-ember transition-transform duration-500 ease-expo group-hover:origin-left group-hover:scale-x-100" />
          </span>
          <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-500 ease-expo group-hover:translate-x-1" fill="none" aria-hidden="true">
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.article>
    </div>
  );
}

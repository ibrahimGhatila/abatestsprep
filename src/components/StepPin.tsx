'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Banner from '@/components/ui/Banner';
import { PetalMark } from '@/components/Logo';
import type { BannerKey } from '@/content/site';
import { useReducedMotionPref } from '@/lib/useMotionPreference';

export type Step = {
  index: string;
  title: string;
  lead: string;
  body: string;
};

/**
 * The site's signature interaction.
 *
 * The section pins for four viewport-heights of scroll and the steps advance
 * as you travel through it. Two things make it feel authored rather than
 * mechanical:
 *
 *  1. The scrub drives a *continuous* progress value, not just a step index.
 *     The rail, the backdrop scale and the numeral opacity all read from that
 *     continuous value, so movement never stops between steps — the copy
 *     switches discretely, everything else glides.
 *  2. The active numeral is enormous (a display-size figure in Fraunces) and
 *     sits behind the copy. Scale is the cheapest way to make a four-item list
 *     feel like an event.
 *
 * Fallback: under reduced motion, or on viewports too short for pinning to be
 * comfortable, the whole thing degrades to a plain numbered list. No pin, no
 * scrub, all four steps readable at once.
 */
export default function StepPin({ steps, banner }: { steps: readonly Step[]; banner: BannerKey }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const reduced = useReducedMotionPref();
  const [canPin, setCanPin] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // 720px tall is roughly where a pinned full-height section stops being
    // pleasant — below that the copy and the numeral start fighting.
    const mq = window.matchMedia('(min-width: 1024px) and (min-height: 720px)');
    const update = () => setCanPin(mq.matches && !reduced);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [reduced]);

  useEffect(() => {
    if (!canPin) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // `quickSetter` with a transform shorthand resolves to an attribute
      // setter on DOM nodes, so drive the individual transform properties.
      const rail = railRef.current;
      const backdrop = backdropRef.current;
      const setRail = rail ? (v: number) => gsap.set(rail, { scaleY: v }) : null;
      const setBackdrop = backdrop ? (v: number) => gsap.set(backdrop, { scale: v }) : null;

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        // One viewport-height of scroll per step, minus one so the last step
        // holds on screen instead of flicking past at the release point.
        end: () => `+=${window.innerHeight * (steps.length - 0.35)}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          setRail?.(Math.max(0.02, p));
          // A slow push-in over the whole sequence: 1.04 → 1.12.
          setBackdrop?.(1.04 + p * 0.08);
          const i = Math.min(steps.length - 1, Math.floor(p * steps.length));
          setActive((prev) => (prev === i ? prev : i));
        },
      });
    }, section);

    return () => ctx.revert();
  }, [canPin, steps.length]);

  /* ── Static fallback ─────────────────────────────────────────────── */
  if (!canPin) {
    return (
      <div className="relative">
        <Banner
          name={banner}
          ratio="16/9"
          scrim="charcoal"
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <ol className="relative space-y-px">
          {steps.map((step) => (
            <li key={step.index} className="bg-charcoal/85 px-[var(--shell-gutter)] py-12 backdrop-blur-[1px]">
              <div className="flex items-baseline gap-5">
                <span className="font-display text-4xl leading-none text-amber">{step.index}</span>
                <h3 className="font-display text-display-sm text-cream">{step.title}</h3>
              </div>
              <p className="mt-3 font-brand text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-amber/80">
                {step.lead}
              </p>
              <p className="mt-5 max-w-prose text-[0.975rem] leading-relaxed text-cream/75 text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  /* ── Pinned sequence ─────────────────────────────────────────────── */
  return (
    <div ref={sectionRef} className="relative h-[100svh] overflow-hidden bg-charcoal">
      {/* Backdrop */}
      <div ref={backdropRef} className="absolute inset-0 will-change-transform">
        <Banner name={banner} ratio="auto" scrim="none" sizes="100vw" className="h-full w-full" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(26,20,16,0.95)_0%,rgba(26,20,16,0.86)_42%,rgba(26,20,16,0.55)_100%)]"
      />

      <div className="shell relative flex h-full items-center">
        <div className="grid-12 w-full items-center gap-y-10">
          {/* Rail + step ticks */}
          <div className="col-span-1 hidden lg:col-span-1 lg:flex lg:h-[52vh] lg:items-stretch lg:gap-5">
            <span className="relative block w-px bg-cream/15">
              <span
                ref={railRef}
                className="absolute inset-x-0 top-0 block h-full origin-top scale-y-0 bg-amber"
              />
            </span>
            <ul className="flex flex-col justify-between py-1">
              {steps.map((step, i) => (
                <li
                  key={step.index}
                  className={`font-brand text-[0.7rem] font-semibold tracking-[0.14em] transition-colors duration-500 ${
                    i <= active ? 'text-amber' : 'text-cream/30'
                  }`}
                >
                  {step.index}
                </li>
              ))}
            </ul>
          </div>

          {/* Copy */}
          <div className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-3">
            {/* Oversized ghost numeral behind the copy */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 top-1/2 -z-0 hidden -translate-y-1/2 font-display text-[26rem] leading-none text-cream/[0.04] lg:block"
            >
              {steps[active]?.index}
            </span>

            <div className="relative">
              {steps.map((step, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={step.index}
                    aria-hidden={!isActive}
                    className={`transition-all duration-700 ease-expo ${
                      isActive
                        ? 'relative opacity-100 blur-0'
                        : 'pointer-events-none absolute inset-0 translate-y-4 opacity-0 blur-[2px]'
                    }`}
                  >
                    <p className="flex items-center gap-3 font-brand text-eyebrow font-semibold uppercase text-amber">
                      <PetalMark className="h-3.5 w-3.5" strokeWidth={3.4} />
                      {step.lead}
                    </p>
                    <h3 className="mt-7 font-display text-display-lg text-cream">{step.title}</h3>
                    <p className="mt-8 max-w-prose text-lg leading-relaxed text-cream/75 text-pretty">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step counter, bottom-right */}
          <div className="pointer-events-none absolute bottom-10 right-[var(--shell-gutter)] hidden items-baseline gap-2 lg:flex">
            <span className="font-display text-5xl leading-none text-amber">{steps[active]?.index}</span>
            <span className="font-brand text-[0.7rem] uppercase tracking-[0.16em] text-cream/40">
              / {String(steps.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

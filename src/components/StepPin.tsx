'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PetalWatermark from '@/components/ui/PetalWatermark';

export type Step = {
  index: string;
  title: string;
  lead: string;
  body: string;
};

/**
 * Each step owns one flat colour. Alternating orange and charcoal turns the
 * sequence into four confident panels instead of one moody gradient — the
 * whole point of the rebuild.
 */
const panels = [
  { bg: 'bg-orange', text: 'text-white', dim: 'text-white/75', numeral: 'text-white/20', mark: 'cream' },
  { bg: 'bg-charcoal', text: 'text-cream', dim: 'text-cream/70', numeral: 'text-orange/25', mark: 'orange' },
] as const;

const panelFor = (i: number) => panels[i % 2];

/**
 * The site's signature interaction.
 *
 * The section pins for four viewport-heights and the steps advance as you
 * scroll. Each step is a full-bleed colour block with a Poppins-900 numeral
 * set at `numeral` size, so the transition between steps is a hard colour cut
 * — orange, charcoal, orange, charcoal. That cut is what makes the pin land;
 * a cross-fade between two dark panels would read as nothing happening.
 *
 * The scrub drives a continuous progress value: the rail and the tick states
 * read from it directly, so movement is never frozen between steps even
 * though the copy switches discretely.
 *
 * Fallback: under reduced motion, or on viewports too short for pinning to be
 * comfortable, this degrades to four stacked colour panels — same design, no
 * scroll hijacking, all four readable at once.
 */
export default function StepPin({ steps }: { steps: readonly Step[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);

  const [canPin, setCanPin] = useState(false);
  const [active, setActive] = useState(0);

  /**
   * Both media queries are read in ONE effect, deliberately.
   *
   * Reading the motion preference from React state instead would leave a tick
   * where `reduced` is still its initial `false` — long enough for the pinned
   * tree to mount, for ScrollTrigger to wrap this element in a pin-spacer, and
   * then for React to try to unmount a node GSAP had already moved. That threw
   * "removeChild: the node to be removed is not a child of this node" and took
   * the whole page down for exactly the users who asked for less motion.
   *
   * 700px tall is roughly where a pinned full-height panel stops being
   * comfortable to read.
   */
  useEffect(() => {
    const layout = window.matchMedia('(min-width: 1024px) and (min-height: 700px)');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setCanPin(layout.matches && !motion.matches);
    update();
    layout.addEventListener('change', update);
    motion.addEventListener('change', update);
    return () => {
      layout.removeEventListener('change', update);
      motion.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!canPin) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rail = railRef.current;
      const setRail = rail ? (v: number) => gsap.set(rail, { scaleX: v }) : null;

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        // Slightly under one viewport per step, so the last panel holds on
        // screen instead of flicking past at the release point.
        end: () => `+=${window.innerHeight * (steps.length - 0.4)}`,
        pin: true,
        scrub: 0.4,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          setRail?.(Math.max(0.01, p));
          const i = Math.min(steps.length - 1, Math.floor(p * steps.length));
          setActive((prev) => (prev === i ? prev : i));
        },
      });
    }, section);

    return () => ctx.revert();
  }, [canPin, steps.length]);

  /* ── Static fallback: the same four panels, stacked ───────────────── */
  if (!canPin) {
    return (
      <ol>
        {steps.map((step, i) => {
          const p = panelFor(i);
          return (
            <li key={step.index} className={`relative overflow-hidden ${p.bg} ${i % 2 === 0 ? 'on-orange' : 'on-dark'}`}>
              <PetalWatermark
                tone={p.mark === 'cream' ? 'cream' : 'orange'}
                size="clamp(16rem,60vw,28rem)"
                className="-right-16 -top-16"
              />
              <div className="shell relative py-16">
                <span className={`block text-[5rem] font-black leading-[0.8] tracking-[-0.05em] ${p.numeral}`}>
                  {step.index}
                </span>
                <p className={`mt-6 text-eyebrow font-semibold uppercase ${p.dim}`}>{step.lead}</p>
                <h3 className={`mt-3 text-display-md font-extrabold ${p.text}`}>{step.title}</h3>
                <p className={`mt-5 max-w-prose text-[1.0625rem] leading-[1.6] ${p.dim}`}>{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  /* ── Pinned sequence ──────────────────────────────────────────────── */
  const p = panelFor(active);

  return (
    <div
      ref={sectionRef}
      className={`relative h-[100svh] overflow-hidden transition-colors duration-300 ease-snap ${p.bg} ${
        active % 2 === 0 ? 'on-orange' : 'on-dark'
      }`}
    >
      <PetalWatermark
        tone={p.mark === 'cream' ? 'cream' : 'orange'}
        size="clamp(30rem,52vw,54rem)"
        className="-right-40 top-1/2 -translate-y-1/2"
      />

      <div className="shell relative flex h-full items-center pt-[var(--nav-h)]">
        <div className="grid-12 w-full items-center gap-y-10">
          {/* Oversized numeral — its own column, not decoration behind the copy */}
          <div className="col-span-4 md:col-span-5 lg:col-span-4">
            <span className={`block text-numeral font-black transition-colors duration-300 ${p.numeral}`}>
              {steps[active]?.index}
            </span>
          </div>

          {/* Copy */}
          <div className="relative col-span-4 md:col-span-7 lg:col-span-7 lg:col-start-6">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <div
                  key={step.index}
                  aria-hidden={!isActive}
                  className={`transition-all duration-300 ease-snap ${
                    isActive ? 'relative opacity-100' : 'pointer-events-none absolute inset-0 translate-y-3 opacity-0'
                  }`}
                >
                  <p className={`text-eyebrow font-semibold uppercase ${p.dim}`}>{step.lead}</p>
                  <h3 className={`mt-5 text-display-lg font-black ${p.text}`}>{step.title}</h3>
                  <p className={`mt-7 max-w-prose text-lg leading-[1.6] ${p.dim}`}>{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress: a single hairline across the base, plus the step count. */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="shell flex items-center gap-6 pb-6">
          <span className={`text-eyebrow font-semibold uppercase ${p.dim}`}>
            {steps[active]?.index} / {String(steps.length).padStart(2, '0')}
          </span>
          <span className={`relative h-[3px] flex-1 ${active % 2 === 0 ? 'bg-white/25' : 'bg-cream/20'}`}>
            <span
              ref={railRef}
              className={`absolute inset-y-0 left-0 block w-full origin-left scale-x-0 ${
                active % 2 === 0 ? 'bg-white' : 'bg-orange'
              }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

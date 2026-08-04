'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExamCard from '@/components/ExamCard';
import Eyebrow from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { exams } from '@/content/exams';
import { examsSection } from '@/content/home';
import { useReducedMotionPref } from '@/lib/useMotionPreference';

/**
 * Horizontally scrolling exam row.
 *
 * Desktop: the section pins and vertical scroll is translated into horizontal
 * movement of the track (ScrollTrigger `scrub`). The pin distance is derived
 * from the track's real width, so adding a sixth exam needs no maths here.
 *
 * Touch / reduced motion: no pinning at all — the row becomes a native
 * overflow-scroll with snap points. Hijacking scroll on a phone is how these
 * sections earn their reputation; a thumb-swipe carousel is simply better
 * there, and it's also the accessible fallback.
 */
export default function Exams() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const reduced = useReducedMotionPref();
  const [canPin, setCanPin] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setCanPin(mq.matches && !reduced);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [reduced]);

  useEffect(() => {
    if (!canPin) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 120);

      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          // Widths change on resize and on font load; recompute rather than
          // caching the original distance.
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [canPin]);

  return (
    <section
      ref={sectionRef}
      id="exams"
      className={`relative bg-charcoal text-cream ${canPin ? 'h-[100svh] overflow-hidden' : 'py-section'}`}
    >
      <div className={canPin ? 'flex h-full flex-col justify-center pt-[var(--nav-h)]' : ''}>
        {/* Heading sits above the track and stays put while the row moves. */}
        <div className="shell">
          <div className="grid-12 items-end gap-y-6">
            <div className="col-span-4 md:col-span-7">
              <Reveal>
                <Eyebrow tone="cream" className="mb-7">
                  {examsSection.eyebrow}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display text-display-md text-cream">{examsSection.headline}</h2>
              </Reveal>
            </div>
            <Reveal className="col-span-4 md:col-span-4 md:col-start-9" delay={0.12}>
              <p className="max-w-prose text-[0.975rem] leading-relaxed text-cream/65 text-pretty">
                {examsSection.sub}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Track. `pl-[gutter]` keeps the first card aligned to the shell while
            the list itself runs edge to edge. */}
        <ul
          ref={trackRef}
          data-cursor
          data-cursor-label={canPin ? undefined : examsSection.dragHint}
          className={
            canPin
              ? 'mt-10 flex w-max gap-6 pl-[var(--shell-gutter)] pr-24 will-change-transform'
              : 'no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pl-[var(--shell-gutter)] pr-[var(--shell-gutter)]'
          }
        >
          {exams.map((exam) => (
            <li
              key={exam.slug}
              /* Pinned: the card height is pegged to the viewport so the
                 heading, the row and the progress rule all fit inside one
                 screen — a pinned section that scrolls internally is broken. */
              className={`shrink-0 ${
                canPin ? 'h-[min(30rem,54svh)] w-[25rem]' : 'w-[min(82vw,22rem)] snap-start'
              }`}
            >
              <ExamCard exam={exam} />
            </li>
          ))}
        </ul>

        {/* Progress hairline — the only affordance telling you the row is long. */}
        {canPin && (
          <div className="shell mt-12">
            <div className="flex items-center gap-4">
              <span className="font-brand text-eyebrow font-semibold uppercase text-cream/40">
                {examsSection.dragHint}
              </span>
              <span className="h-px flex-1 bg-cream/15" />
              <span className="font-brand text-eyebrow font-semibold uppercase text-cream/40">
                {String(exams.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

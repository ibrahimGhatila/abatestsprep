'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotionPref } from '@/lib/useMotionPreference';

/**
 * Lenis smooth scroll, wired to drive GSAP's ScrollTrigger.
 *
 * This wiring is the whole trick. Lenis takes over scroll position with its
 * own RAF loop; ScrollTrigger reads scroll position on native scroll events.
 * Left alone they disagree by a frame or two and every pinned section judders.
 * So: Lenis reports to ScrollTrigger on each tick, ScrollTrigger's own RAF is
 * switched off, and GSAP's ticker becomes the single clock for both.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotionPref();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Reduced motion: no inertia, no hijacking. Native scrolling only.
    if (reduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      // Expo-out, matching the site's easing token.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Touch devices already have native inertia; smoothing it again feels laggy.
      syncTouch: false,
      touchMultiplier: 1.6,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Anchor links have to go through Lenis or they jump.
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -24 });
      history.pushState(null, '', url.hash);
    };
    document.addEventListener('click', onAnchorClick);

    // Images and fonts settling change page height; pinned sections need to know.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      window.removeEventListener('load', onLoad);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}

'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { EASE_SNAP, wordMask } from '@/lib/motion';
import { useReducedMotionPref } from '@/lib/useMotionPreference';
import { banners, cta } from '@/content/site';
import { hero } from '@/content/home';

/**
 * Hero — full-bleed banner, one viewport, copy over a warm gradient.
 *
 * Three constraints drove this layout:
 *
 *  1. **One view.** The section is exactly `100svh` and nothing inside it can
 *     overflow, because the headline is sized in `min(vw, vh)` (see the `hero`
 *     token in the Tailwind config). On a short laptop the type shrinks rather
 *     than pushing the CTAs off-screen. `svh` rather than `vh` so mobile
 *     browser chrome doesn't crop the buttons.
 *
 *  2. **Full image.** The banner covers the whole section instead of sitting
 *     in a column, so the photograph is the hero rather than an illustration
 *     beside it.
 *
 *  3. **Gradient overlay.** The one deliberate exception to the site's
 *     flat-colour rule — text over a photograph needs a ramp, not a flat wash,
 *     or you either lose the copy or flatten the image. It runs left-to-right
 *     on desktop (dense under the copy, clear over the subject on the right)
 *     and bottom-to-top on mobile, where the copy sits at the base.
 *
 * `object-position` is biased right so the subject stays in frame as the
 * viewport narrows — a centred crop pushes them off the edge on a phone.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPref();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // The banner drifts slower than the page; the copy leaves slightly faster.
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.1]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // The reveal starts once the page curtain has lifted.
  const START = 0.45;

  return (
    <section
      ref={ref}
      className="on-dark relative h-[100svh] min-h-[34rem] w-full overflow-hidden bg-charcoal"
    >
      {/* ── Banner ─────────────────────────────────────────────────── */}
      <motion.div
        style={reduced ? undefined : { y: imageY, scale: imageScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={banners.hero.src}
          alt={banners.hero.alt}
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] lg:object-[75%_center]"
        />
      </motion.div>

      {/* ── Gradient overlay ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(26,20,16,0.94)_0%,rgba(26,20,16,0.82)_26%,rgba(166,67,26,0.45)_58%,rgba(240,109,46,0.10)_100%)] md:bg-[linear-gradient(100deg,rgba(26,20,16,0.94)_0%,rgba(26,20,16,0.80)_34%,rgba(166,67,26,0.42)_62%,rgba(240,109,46,0.06)_100%)]"
      />
      {/* A short second ramp at the base keeps the CTAs off the brightest
          part of the photograph on wide screens. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden h-40 bg-[linear-gradient(to_top,rgba(26,20,16,0.55),transparent)] md:block"
      />

      {/* ── Copy ───────────────────────────────────────────────────── */}
      <motion.div
        style={reduced ? undefined : { opacity: copyOpacity }}
        className="relative flex h-full items-end pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[var(--nav-h)] md:items-center md:pb-0"
      >
        <div className="shell w-full">
          <div className="grid-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: START, ease: EASE_SNAP }}
              >
                <Eyebrow tone="amber">{hero.eyebrow}</Eyebrow>
              </motion.div>

              {/* Each word sits in its own clipped line box and snaps up from
                  beneath it. Reading order is preserved — the words are real
                  inline elements, with an sr-only copy for assistive tech. */}
              <h1 className="mt-5 text-hero font-black text-white md:mt-7">
                <span className="sr-only">{hero.headline.map((w) => w.text).join(' ')}</span>
                <span aria-hidden="true" className="flex flex-wrap gap-x-[0.24em]">
                  {hero.headline.map((word, i) => (
                    <span key={`${word.text}-${i}`} className="clip-line">
                      <motion.span
                        className="inline-block"
                        custom={i}
                        variants={wordMask}
                        initial={reduced ? { y: '0%', opacity: 0 } : 'hidden'}
                        animate={reduced ? { opacity: 1 } : 'show'}
                        transition={reduced ? { duration: 0.3, delay: START } : { delay: START }}
                      >
                        {'mark' in word && word.mark ? (
                          /* `block` fills the whole word: over a photograph an
                             underline bar would leave the ink text stranded on
                             the image above it. */
                          <Marker delay={START + 0.42} block>
                            <span className="text-ink">{word.text}</span>
                          </Marker>
                        ) : (
                          word.text
                        )}
                      </motion.span>
                    </span>
                  ))}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: START + 0.3, ease: EASE_SNAP }}
                className="mt-6 max-w-[44ch] text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.55] text-cream/85"
              >
                {hero.sub}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: START + 0.38, ease: EASE_SNAP }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <Button href={cta.primary.href} size="lg">
                  {cta.primary.label}
                </Button>
                <Button href={cta.login.href} variant="invert" size="lg">
                  {cta.login.label}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue — a hairline that fills, not a bouncing chevron. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: START + 0.6 }}
        className="pointer-events-none absolute bottom-8 right-[var(--shell-gutter)] hidden items-center gap-4 lg:flex"
      >
        <span className="text-eyebrow font-semibold uppercase text-cream/50">{hero.scrollHint}</span>
        <span className="relative block h-12 w-px overflow-hidden bg-cream/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-amber"
            animate={reduced ? undefined : { y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}

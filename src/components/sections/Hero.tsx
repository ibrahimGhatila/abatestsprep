'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Marker from '@/components/ui/Marker';
import { EASE_EXPO, wordMask } from '@/lib/motion';
import { useReducedMotionPref } from '@/lib/useMotionPreference';
import { banners, cta } from '@/content/site';
import { hero } from '@/content/home';

/**
 * Hero layout decision.
 *
 * The default AI hero — centred headline, gradient blob, two buttons under it —
 * is explicitly out. Instead: a 12-column split. Type occupies columns 1–7 and
 * is left-aligned and bottom-weighted; the banner takes columns 8–12 and bleeds
 * off the right edge of the viewport and past the bottom of the section, so the
 * page reads as a spread rather than a slide.
 *
 * On mobile the image moves below the type and goes full-bleed — the type has
 * to own the first screen at small sizes, and a background image behind
 * headline text at 375px is a legibility problem, not a design.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPref();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // The banner travels at ~78% of scroll speed — enough separation to register
  // as depth, small enough that the frame never runs out of image.
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);
  const typeY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  // The reveal starts after the page curtain has lifted.
  const START = 0.75;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream pt-[calc(var(--nav-h)+2rem)] lg:min-h-[100svh] lg:pt-[var(--nav-h)]"
    >
      <div className="shell relative">
        <div className="grid-12 items-end gap-y-14 lg:min-h-[calc(100svh-var(--nav-h))]">
          {/* ── Type column ─────────────────────────────────────────── */}
          <motion.div
            style={reduced ? undefined : { y: typeY }}
            /* Padding is tuned so the eyebrow → headline → sub → CTA stack all
               resolves above the fold on a 900px-tall laptop. The headline is
               the tallest element on the site; everything else gives way. */
            className="col-span-4 pb-4 md:col-span-8 lg:col-span-7 lg:pb-[clamp(4.5rem,6.5vw,6.5rem)] lg:pt-[clamp(2rem,4vw,4rem)]"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: START, ease: EASE_EXPO }}
            >
              <Eyebrow tone="orange">{hero.eyebrow}</Eyebrow>
            </motion.div>

            {/* Headline: each word sits in its own clipped line box and slides
                up from beneath it. Reading order is preserved because the words
                are real inline elements, not decorative spans. */}
            <h1 className="mt-8 font-display text-display-xl text-ink lg:-ml-[0.06em]">
              <span className="sr-only">{hero.headline.map((w) => w.text).join(' ')}</span>
              <span aria-hidden="true" className="flex flex-wrap gap-x-[0.28em]">
                {hero.headline.map((word, i) => (
                  <span key={`${word.text}-${i}`} className="clip-line">
                    <motion.span
                      className="inline-block"
                      custom={i}
                      variants={wordMask}
                      initial={reduced ? { y: '0%', opacity: 0 } : 'hidden'}
                      animate={reduced ? { opacity: 1 } : 'show'}
                      transition={reduced ? { duration: 0.4, delay: START } : { delay: START }}
                    >
                      {'mark' in word && word.mark ? <Marker delay={START + 0.65}>{word.text}</Marker> : word.text}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: START + 0.5, ease: EASE_EXPO }}
              className="mt-7 max-w-[46ch] text-lg leading-relaxed text-ink/70 text-pretty md:text-xl"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: START + 0.62, ease: EASE_EXPO }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button href={cta.primary.href} size="lg">
                {cta.primary.label}
              </Button>
              <Button href={cta.secondary.href} variant="ghost" size="lg">
                {cta.secondary.label}
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Banner column ───────────────────────────────────────── */}
          <div className="relative col-span-4 md:col-span-12 lg:col-span-5 lg:self-stretch">
            {/*
              Bleeds to the right edge of the viewport on desktop by escaping
              the shell's gutter. `overflow-hidden` on the section keeps the
              horizontal scrollbar away.
            */}
            <div className="relative h-[62vw] max-h-[34rem] overflow-hidden bg-sand sm:h-[52vw] lg:absolute lg:inset-y-0 lg:-right-[var(--shell-gutter)] lg:left-0 lg:h-auto lg:max-h-none lg:w-[calc(100%+var(--shell-gutter))]">
              <motion.div style={reduced ? undefined : { y: imageY, scale: imageScale }} className="absolute inset-0">
                <Image
                  src={banners.hero.src}
                  alt={banners.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
              {/* Warm scrim, strongest at the base where the image meets cream. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(26,20,16,0.55)_0%,rgba(166,67,26,0.18)_45%,transparent_75%)]"
              />
            </div>
          </div>
        </div>

        {/* Scroll hint — a hairline that draws itself down, not a bouncing chevron. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: START + 0.9 }}
          className="pointer-events-none absolute bottom-8 left-[var(--shell-gutter)] hidden items-center gap-4 lg:flex"
        >
          <span className="font-brand text-eyebrow font-semibold uppercase text-ink/40">{hero.scrollHint}</span>
          <span className="relative block h-14 w-px overflow-hidden bg-ink/15">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-ember"
              animate={reduced ? undefined : { y: ['-100%', '200%'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

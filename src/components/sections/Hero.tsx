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
 * Hero.
 *
 * A 12-column split, not a centred stack: type in columns 1–7, banner in 8–12
 * bleeding off the right edge of the viewport. The headline is Poppins 900 at
 * `display-xl` — the weight is doing the work a serif used to.
 *
 * Dual CTA as specified: Book (solid orange) and Log in (ghost), because the
 * hero has to serve both a first-time visitor and a returning student.
 *
 * On mobile the image drops below the type. Headline text over a photograph at
 * 390px is a legibility problem, not a design.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPref();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  // The reveal starts once the page curtain has lifted.
  const START = 0.45;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream pt-[calc(var(--nav-h)+1.5rem)] lg:min-h-[100svh] lg:pt-[var(--nav-h)]"
    >
      <div className="shell relative">
        <div className="grid-12 items-end gap-y-12 lg:min-h-[calc(100svh-var(--nav-h))]">
          {/* ── Type column ─────────────────────────────────────────── */}
          <div className="col-span-4 pb-4 md:col-span-8 lg:col-span-7 lg:pb-[clamp(4rem,6vw,6rem)] lg:pt-[clamp(2rem,4vw,4rem)]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: START, ease: EASE_SNAP }}
            >
              <Eyebrow tone="orange">{hero.eyebrow}</Eyebrow>
            </motion.div>

            {/* Each word sits in its own clipped line box and snaps up from
                beneath it. Reading order is preserved — the words are real
                inline elements, with an sr-only copy for assistive tech. */}
            <h1 className="mt-7 text-display-xl font-black text-ink">
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
                      {'mark' in word && word.mark ? <Marker delay={START + 0.42}>{word.text}</Marker> : word.text}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: START + 0.3, ease: EASE_SNAP }}
              className="mt-7 max-w-[46ch] text-lg leading-[1.6] text-ink/70 md:text-xl"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: START + 0.38, ease: EASE_SNAP }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button href={cta.primary.href} size="lg">
                {cta.primary.label}
              </Button>
              <Button href={cta.login.href} variant="ghost" size="lg">
                {cta.login.label}
              </Button>
            </motion.div>
          </div>

          {/* ── Banner column ───────────────────────────────────────── */}
          <div className="relative col-span-4 md:col-span-12 lg:col-span-5 lg:self-stretch">
            <div className="relative h-[62vw] max-h-[32rem] overflow-hidden bg-orange sm:h-[50vw] lg:absolute lg:inset-y-0 lg:-right-[var(--shell-gutter)] lg:left-0 lg:h-auto lg:max-h-none lg:w-[calc(100%+var(--shell-gutter))]">
              <motion.div style={reduced ? undefined : { y: imageY, scale: imageScale }} className="absolute inset-0">
                <Image
                  src={banners.hero.src}
                  alt={banners.hero.alt}
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

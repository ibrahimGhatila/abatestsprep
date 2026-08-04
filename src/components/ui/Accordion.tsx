'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE_EXPO } from '@/lib/motion';
import { useReducedMotionPref } from '@/lib/useMotionPreference';

export type AccordionItem = { q: string; a: string };

/**
 * FAQ accordion.
 *
 * Real <button> per row with aria-expanded/aria-controls, and the panel is a
 * labelled region — so it works from the keyboard and reads correctly to a
 * screen reader. Height animates from 0 to `auto`; under reduced motion the
 * panel simply appears.
 *
 * Rows are hairline-separated rather than boxed. Stacking six bordered cards
 * is the template look this section is specifically avoiding.
 */
export default function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const reduced = useReducedMotionPref();

  return (
    <div className="border-t border-ink/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={item.q} className="border-b border-ink/15">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                data-cursor="button"
                className="group flex w-full items-start justify-between gap-8 py-7 text-left"
              >
                <span
                  className={`font-display text-[clamp(1.15rem,2.2vw,1.6rem)] leading-tight transition-colors duration-300 ${
                    isOpen ? 'text-ember' : 'text-ink group-hover:text-orange-deep'
                  }`}
                >
                  {item.q}
                </span>
                {/* Plus → minus. Only the vertical bar rotates, so the mark
                    stays optically centred through the transition. */}
                <span aria-hidden="true" className="relative mt-2 h-4 w-4 shrink-0">
                  <span
                    className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 transition-colors duration-300 ${
                      isOpen ? 'bg-ember' : 'bg-ink/60'
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 transition-all duration-500 ease-expo ${
                      isOpen ? 'rotate-90 bg-ember opacity-0' : 'bg-ink/60 opacity-100'
                    }`}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: reduced ? 0 : 0.5, ease: EASE_EXPO },
                    opacity: { duration: reduced ? 0 : 0.35, ease: 'linear' },
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-prose pb-8 pr-10 text-[0.975rem] leading-relaxed text-ink/70 text-pretty">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

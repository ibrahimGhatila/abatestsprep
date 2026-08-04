# ABA Tests Prep

Marketing and conversion site for ABA Tests Prep — exam preparation (DSAT, UDSP,
IELTS, TOEFL, PTE, YDS) for students applying to universities abroad.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS 3** — all brand tokens live in `tailwind.config.ts`
- **Framer Motion** — reveals, magnetic buttons, cursor, sticky CTA
- **Lenis** — smooth inertial scrolling, wired to drive **GSAP ScrollTrigger**
- **next/font** (Poppins) and **next/image** for all imagery

No UI kit, no template — every component is in `src/components`.

## Design system

**One typeface: Poppins.** There is no second family. The distinctiveness comes
from weight contrast and colour blocking:

| Role                       | Weight | Notes                                |
| -------------------------- | ------ | ------------------------------------ |
| Display headlines, numerals| 800/900| `-0.03em` tracking, 0.95 leading     |
| Subheads                   | 600    |                                      |
| Body                       | 400/500| 1.6 leading                          |
| Eyebrows, labels, buttons  | 600    | UPPERCASE, `+0.12em` tracking        |

**Colour is the structure.** Every section owns exactly one flat, saturated
colour — no gradients — and they alternate down the page:

| Token         | Value     | Use                                   |
| ------------- | --------- | ------------------------------------- |
| `orange`      | `#F06D2E` | primary, CTAs, full section blocks    |
| `ember`       | `#C6410F` | hover / pressed, button wipe          |
| `orange-deep` | `#A6431A` | deep accents                          |
| `amber`       | `#F4A03C` | marker highlight, eyebrows on dark    |
| `cream`       | `#FBF4EF` | default light background              |
| `sand`        | `#F5E9DE` | alternate light background (FAQ)      |
| `ink`         | `#241C16` | primary text (warm near-black)        |
| `charcoal`    | `#1A1410` | dark sections                         |

**No blue anywhere**, including the "black". Text pairing: cream/white on
orange and charcoal; ink with orange accents on cream.

Corners are mostly sharp (4–8px); the 28px `rounded-pill` radius is reserved
for buttons and the logo tile. A fixed SVG film-grain overlay sits over the
whole site at ~4.5% opacity. The five-petal mark recurs as eyebrow bullets,
list bullets, dividers and oversized section watermarks (`PetalWatermark`).

## Home-page structure

```
cream    Hero — dual CTA (Book + Log in), banner bleeding off the right edge
ORANGE   Marquee — target universities
cream    The gap — asymmetric manifesto + CTA
CHARCOAL Exams — full-width interactive list, six rows, hover/focus reveal
cream    Method intro
OR/CH    Method — pinned, scrubbed 4-step colour-block sequence
image    Mid CTA — full-bleed COMMUNITY banner
cream    Why ABA — stepped pillar list + academic authority slot
CHARCOAL Pricing — free analysis panel + $5,000 Premium block
cream    Results — count-up stats (placeholders) + testimonial slot
sand     FAQ — sticky-column accordion
ORANGE   Final CTA — one headline, one button
CHARCOAL Footer
```

There is a booking CTA in nine places, plus a sticky bottom bar on mobile.

## Motion

- Lenis reports scroll position to ScrollTrigger and GSAP's ticker clocks both,
  so pinned sections don't judder against smooth scroll (`SmoothScroll.tsx`).
- One easing curve site-wide: a snappy easeOut, `cubic-bezier(0.22, 1, 0.36, 1)`,
  at 200–500ms. Deliberately not cinematic.
- Signature interaction: the pinned, scrubbed four-step Method sequence
  (`StepPin.tsx`), reused on `/method`.
- `prefers-reduced-motion` disables smooth scroll, pinning, the custom cursor,
  parallax and all transforms; opacity fades remain. `StepPin` reads the motion
  and layout media queries in a single effect so the pinned tree never mounts
  transiently for reduced-motion users — see the comment there, it fixed a hard
  crash.

## Banners

Loaded from the weserv image CDN via `src/content/site.ts` → `banners`, rendered
by `src/components/ui/Banner.tsx` with `unoptimized` (the URLs already carry
`w=2048&q=95&output=jpg`, so Next's optimizer would just re-encode them). Every
banner sits on a flat brand-colour block, so a slow or failed load degrades to a
solid panel instead of a hole.

## Outstanding TODOs before launch

Everything unverifiable was left as a marked placeholder rather than invented.
`grep -rn "TODO(" src/` finds them all. The main ones:

1. **Premium Prep inclusions** — the $5,000 figure is stated as given, but what
   it covers (duration, session count, exam scope, refund terms) is unconfirmed
   and renders with a visible TODO panel. This is a contractual claim.
2. **Results figures** — `results.stats` are zeroed and render as em-dashes.
   `/results` is `noindex`.
3. **Testimonial** — empty, renders a marked slot.
4. **Prof. Dr. Gamze Sart** — photograph, exact title and biography are all
   client-supplied. Nothing was written on her behalf.
5. **Exam key dates** — empty for all six. Fill only from the official boards.
6. **UDSP** — the acronym expansion, official format and eligibility are all
   marked TODO rather than guessed.
7. **Contact details** — WhatsApp number, email and booking URL are
   placeholders. There is no contact form; the page routes to real channels.
8. **Social links** — only the Instagram handle was supplied. The TikTok,
   LinkedIn and Threads URLs are guesses at the URL shape and must be checked.
9. **Legal pages** — `/privacy`, `/terms`, `/cancellation` are routing stubs.
   Real text must come from the client (KVKK / GDPR obligations apply).
10. **Login** — `/login` is a routing stub with no authentication and
    deliberately no credential fields. Pick a provider and wire it.
11. **Banner alt text** — currently describes the intended subject, not the
    actual photographs.
12. **FAQ delivery answers** — two describe how the service runs and are
    prefixed `TODO(client)`.
13. **Blog** — route scaffolded, no posts, `noindex`.

## Replacing the logo

`src/components/Logo.tsx` draws the five-circle petal mark inline. If an
official `logo.svg` arrives, swap the body of `PetalMark` for it — the component
API (`variant`, `tone`, `asLink`) should not need to change. The footer uses the
`dark` tone: cream tile, orange mark.

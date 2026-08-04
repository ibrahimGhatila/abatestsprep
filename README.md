# ABA Tests Prep

Marketing site for ABA Tests Prep — exam preparation (Digital SAT, IELTS, TOEFL,
YDS, UDSP) for students applying to universities abroad.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS 3** — all brand tokens live in `tailwind.config.ts`
- **Framer Motion** — component and scroll reveals, magnetic buttons, cursor
- **Lenis** — smooth inertial scrolling, wired to drive **GSAP ScrollTrigger**
- **next/font** (Fraunces, Inter, Poppins) and **next/image** for all imagery

No UI kit, no template — every component is in `src/components`.

## Where things are

```
src/
  app/                 routes (App Router)
  components/
    ui/                Button, Eyebrow, SectionHeading, Marker, Marquee,
                       Accordion, Banner, CountUp, PetalDivider, Reveal, TodoNote
    sections/          the nine home-page sections, in page order
    Logo, Cursor, Grain, Nav, Footer, SmoothScroll, PageReveal,
    ExamCard, StepPin, PageHeader
  content/             ALL copy — site.ts, home.ts, exams.ts, pages.ts
  lib/                 motion tokens + preference hooks
public/banners/        banner artwork (currently placeholders — see its README)
```

**Copy lives in `src/content` and nowhere else.** Editing text should never
mean opening a component.

## Brand system

| Token         | Value     | Use                                   |
| ------------- | --------- | ------------------------------------- |
| `orange`      | `#F06D2E` | primary, CTAs                         |
| `ember`       | `#C6410F` | hover / pressed                       |
| `orange-deep` | `#A6431A` | deep accents                          |
| `amber`       | `#F4A03C` | highlights, marker underlines         |
| `cream`       | `#FBF4EF` | default light background              |
| `sand`        | `#F5E9DE` | alternate section background          |
| `ink`         | `#241C16` | primary text (warm near-black)        |
| `charcoal`    | `#1A1410` | dark sections                         |

**No blue anywhere.** The palette is entirely warm, including the "black".

Type: **Fraunces** (variable, optical size on) for display, **Inter** for body,
**Poppins** for brand labels, buttons and eyebrows. Corners are mostly sharp
(4–8px); the 28px `rounded-pill` radius is reserved for pills and the logo tile.

A fixed SVG film-grain overlay sits over the whole site at ~4.5% opacity.

## Motion

- Lenis reports scroll position to ScrollTrigger and GSAP's ticker drives both,
  so pinned sections don't judder against smooth scroll (`SmoothScroll.tsx`).
- One easing curve site-wide: expo-out, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Signature interaction: the pinned, scrubbed four-step **Method** sequence
  (`StepPin.tsx`), reused on `/method`.
- The exam row is scroll-scrubbed horizontally on desktop and a native
  snap-scroll carousel on touch.
- `prefers-reduced-motion` disables smooth scroll, pinning, the custom cursor,
  parallax and all transforms; opacity fades remain.

## Outstanding TODOs before launch

Everything unverifiable was left as a marked placeholder rather than invented.
Search the repo for `TODO(` to find them all. The main ones:

1. **Banner photography** — `public/banners/` holds four placeholder SVGs with
   the TODO burned into the artwork. See `public/banners/README.md`.
2. **Results figures** — `results.stats` in `src/content/home.ts` are all zeroed
   and render as em-dashes with a visible TODO. `/results` is `noindex`.
3. **Testimonial** — `results.testimonial` is empty and renders a marked slot.
4. **Prof. Dr. Gamze Sart** — photograph, exact title and biography are all
   client-supplied (`why.authority`). Nothing was written on her behalf.
5. **Exam key dates** — `keyDates` is empty for every exam. Fill only from the
   official boards; they change annually.
6. **UDSP format/eligibility** — marked TODO in `src/content/exams.ts`.
7. **Contact details** — WhatsApp number, email and booking URL in
   `src/content/site.ts` are placeholders. There is no contact form yet; the
   page routes to real channels instead of a form that discards submissions.
8. **FAQ delivery answers** — two answers describe how the service runs
   (online/in-person, application support) and are prefixed `TODO(client)`.
9. **Blog** — route scaffolded, no posts, `noindex`.

## Replacing the logo

`src/components/Logo.tsx` draws the five-circle petal mark inline. If an
official `logo.svg` arrives, swap the body of `PetalMark` for it — the
component API (`variant`, `tone`, `asLink`) should not need to change.

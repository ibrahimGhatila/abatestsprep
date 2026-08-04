# Banner assets — TODO

The four SVGs in this folder are **placeholders**. The real banner photography
was not available when the site was built, so each one is a warm abstract
stand-in with a visible `TODO — REPLACE WITH …` label burned into it.

## Replacing them

1. Drop the real files in here. Recommended: `.jpg` (or `.avif`), sRGB,
   quality ~80, long edge ≥ 2000px.
2. Update the `src` values in `src/content/site.ts` → `banners`.
3. Keep the stated `width`/`height` roughly in proportion with the ratio each
   banner is rendered at, listed below.

| Key         | Rendered ratio        | Used on                                    |
| ----------- | --------------------- | ------------------------------------------ |
| `hero`      | 4/5 → 3/4 on desktop  | Home hero, right column, full-bleed         |
| `journey`   | 4/5                   | "The gap" editorial block                   |
| `upward`    | full-viewport cover   | Pinned "How it works" backdrop              |
| `community` | 16/9 → 21/9 desktop   | Free-analysis CTA, full-bleed with scrim    |

Nothing else needs to change: every banner renders through
`src/components/ui/Banner.tsx`, which uses `next/image` with `fill` inside a
fixed-ratio frame, so swapping files cannot introduce layout shift.

Also update the `alt` text in `src/content/site.ts` to describe the real
images — the current alt text describes the intended subject, not the
placeholder.

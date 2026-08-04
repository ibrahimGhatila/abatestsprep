import type { Config } from 'tailwindcss';

/**
 * Brand tokens live here and ONLY here.
 * Hard rule for this brand: no blue. The whole palette is warm — orange-led,
 * with a warm near-black (`ink`) instead of a neutral/cool grey.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F06D2E',
          deep: '#A6431A',
        },
        ember: '#C6410F',
        amber: '#F4A03C',
        cream: '#FBF4EF',
        sand: '#F5E9DE',
        ink: '#241C16',
        charcoal: '#1A1410',
        white: '#FFFFFF',
      },
      fontFamily: {
        // Editorial serif — the main anti-slop lever. Used big.
        display: ['var(--font-fraunces)', 'Georgia', 'Times New Roman', 'serif'],
        // Body / UI.
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Brand voice: labels, eyebrows, buttons, nav.
        brand: ['var(--font-poppins)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid editorial scale. Display sizes intentionally overshoot the
        // container so headlines can break the grid.
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        'display-sm': ['clamp(2rem, 1.4rem + 3vw, 3.25rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.5rem, 1.4rem + 5.2vw, 5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(3rem, 1rem + 8.4vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        // Capped so the hero still resolves inside a 900px-tall laptop viewport
        // — the headline is meant to dominate the screen, not outgrow it.
        'display-xl': ['clamp(3rem, 0.9rem + 7.2vw, 7.5rem)', { lineHeight: '0.9', letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        // Mostly sharp. `pill` (28px) is the single signature radius —
        // reserved for pills and the logo tile.
        none: '0px',
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        pill: '28px',
        full: '9999px',
      },
      spacing: {
        section: 'clamp(5rem, 3rem + 9vw, 11rem)',
        gutter: 'clamp(1.25rem, 0.5rem + 3vw, 4.5rem)',
      },
      maxWidth: {
        shell: '90rem',
        measure: '34ch',
        prose: '58ch',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--accordion-height)' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 46s) linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

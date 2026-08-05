import type { Config } from 'tailwindcss';

/**
 * Brand tokens live here and ONLY here.
 *
 * Two hard rules for this brand:
 *  1. No blue anywhere. The palette is warm end to end, including the "black".
 *  2. One typeface — Poppins. Distinctiveness comes from weight contrast
 *     (900 display against 400 body) and from colour blocking, not from
 *     mixing families.
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
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        // Aliases kept so intent stays readable at call sites — all three
        // resolve to Poppins.
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        brand: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.12em' }],
        // Display sizes are all weight-900 territory: tight leading, negative
        // tracking, sized to dominate rather than to decorate.
        'display-sm': ['clamp(1.5rem, 1rem + 2.4vw, 2.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.9rem, 1rem + 3.8vw, 3.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 0.9rem + 5.2vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.75rem, 0.8rem + 6.6vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        /**
         * Hero headline. The `min(vw, vh)` term is the whole trick: the size
         * tracks whichever viewport dimension is scarcer, so the hero always
         * resolves inside one screen — on a short laptop the type shrinks
         * instead of pushing the CTAs below the fold.
         */
        hero: ['clamp(2.25rem, min(6.4vw, 8.4vh), 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        // The colour-block step numerals and pricing figure.
        numeral: ['clamp(4rem, 2rem + 12vw, 14rem)', { lineHeight: '0.8', letterSpacing: '-0.05em' }],
      },
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '14px',
        pill: '28px',
        full: '9999px',
      },
      spacing: {
        section: 'clamp(4.5rem, 3rem + 8vw, 10rem)',
        gutter: 'clamp(1.25rem, 0.5rem + 3vw, 4.5rem)',
      },
      maxWidth: {
        shell: '90rem',
        measure: '34ch',
        prose: '58ch',
      },
      transitionTimingFunction: {
        // Snappy easeOut — fast departure, short settle. Replaces the slower
        // cinematic expo curve the first build used.
        snap: 'cubic-bezier(0.22, 1, 0.36, 1)',
        expo: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

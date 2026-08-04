/**
 * Global site config: brand, nav, contact, banner art.
 * Everything a non-developer might want to change lives in /src/content.
 */

export const site = {
  name: 'ABA Tests Prep',
  domain: 'abatestsprep.com',
  url: 'https://abatestsprep.com',
  positioning: 'Smart prep for studying abroad.',
  description:
    'Digital SAT, IELTS, TOEFL, YDS and UDSP prep for students heading to global universities — decoded into a plan built around you.',
} as const;

export const nav = [
  { label: 'Exams', href: '/#exams' },
  { label: 'Method', href: '/#method' },
  { label: 'Results', href: '/#results' },
  { label: 'Blog', href: '/blog' },
] as const;

export const contact = {
  instagramHandle: '@abatestsprep',
  instagramUrl: 'https://instagram.com/abatestsprep',
  // TODO(client): confirm the public contact address before launch.
  email: 'hello@abatestsprep.com',
  // TODO(client): real WhatsApp business number in E.164, no spaces.
  whatsapp: '+900000000000',
  // TODO(client): swap for the real booking link (Calendly / form / WhatsApp).
  bookingUrl: '/contact',
} as const;

export const cta = {
  primary: { label: 'Book a free level analysis', href: contact.bookingUrl },
  secondary: { label: 'See how it works', href: '/#method' },
} as const;

/**
 * Art-directed banners.
 *
 * TODO(assets): the four banner photographs were not available when this was
 * built — each path below currently points at a warm placeholder. Drop the real
 * files into /public/banners with the same names (or edit `src` here) and
 * nothing else needs to change. Keep the stated aspect ratios so no layout
 * shifts: every banner is rendered with `fill` inside a fixed-ratio frame.
 */
export const banners = {
  hero: {
    src: '/banners/hero.svg',
    alt: 'A student working through practice papers at a sunlit desk.',
    width: 1600,
    height: 2000,
  },
  journey: {
    src: '/banners/journey.svg',
    alt: 'A path winding upward through open landscape.',
    width: 1600,
    height: 1200,
  },
  upward: {
    src: '/banners/upward.svg',
    alt: 'Steps rising toward a bright horizon.',
    width: 2000,
    height: 1400,
  },
  community: {
    src: '/banners/community.svg',
    alt: 'Students together on a university campus.',
    width: 2000,
    height: 1200,
  },
} as const;

export type BannerKey = keyof typeof banners;

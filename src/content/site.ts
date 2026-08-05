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
    'DSAT, UDSP, IELTS, TOEFL, PTE and YDS prep for students heading to global universities — decoded into a plan built around you.',
} as const;

export const nav = [
  { label: 'Exams', href: '/#exams' },
  { label: 'Method', href: '/#method' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Results', href: '/#results' },
  { label: 'Blog', href: '/blog' },
] as const;

export const contact = {
  // Handles supplied by the client. Note the Instagram and TikTok handles
  // differ ("tests" vs "test") — that is intentional, not a typo here.
  instagramHandle: '@aba.tests.prep',
  instagramUrl: 'https://www.instagram.com/aba.tests.prep',
  tiktokHandle: '@aba.test.prep',
  tiktokUrl: 'https://www.tiktok.com/@aba.test.prep',
  linkedinUrl: 'https://linkedin.com/company/97844527',
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
  login: { label: 'Log in', href: '/login' },
} as const;

export const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`;

/**
 * Art-directed banners, served from the weserv image CDN.
 *
 * These URLs already carry their own resize/encode parameters (`w=2048`,
 * `output=jpg`, `q=95`), so `Banner` renders them with `unoptimized` — running
 * them through Next's optimizer as well would re-encode an already-optimised
 * JPEG for no gain and add a server round trip.
 *
 * Every banner sits on a flat brand-colour block, so a slow or failed image
 * load degrades to a solid panel rather than to a hole in the page.
 */
const cdn = (id: string) =>
  `https://images.weserv.nl/?url=www.trybloom.ai/img/${id}&output=jpg&q=95&w=2048`;

export const banners = {
  hero: {
    src: cdn('3388952a-25b0-4734-a67a-010fafe249e6'),
    // TODO(client): replace with alt text describing what is actually in the
    // photograph — this describes the intended subject, not the shot.
    alt: 'An ABA Tests Prep student preparing for an international exam.',
  },
  journey: {
    src: cdn('e2ed1638-1dda-4851-9531-63526fdba54a'),
    alt: 'The route a student takes from first diagnostic to final score.',
  },
  upward: {
    src: cdn('354cf176-06a9-4606-ae5c-c2eac19cac14'),
    alt: 'Progress climbing toward a target score.',
  },
  community: {
    src: cdn('013c0200-d151-4bf6-9719-3282ffb7f216'),
    alt: 'ABA Tests Prep students together.',
  },
} as const;

export type BannerKey = keyof typeof banners;

/**
 * Threads was dropped: no URL was supplied for it, and a guessed link is worse
 * than one fewer icon. Add it back here with a real URL if the account exists.
 */
export const socials = [
  { label: 'Instagram', handle: contact.instagramHandle, href: contact.instagramUrl, icon: 'instagram' },
  { label: 'TikTok', handle: contact.tiktokHandle, href: contact.tiktokUrl, icon: 'tiktok' },
  { label: 'LinkedIn', handle: 'ABA Tests Prep', href: contact.linkedinUrl, icon: 'linkedin' },
] as const;

export const legalNav = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cancellation Policy', href: '/cancellation' },
] as const;

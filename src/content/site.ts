/**
 * Locale-independent site config: URLs, routes, contact channels, artwork.
 *
 * Nothing translatable lives here — all copy is in /src/content/locales. Keeping
 * routes and handles in one place means a link is defined once and only its
 * label changes per language.
 */

export const site = {
  name: 'ABA Tests Prep',
  domain: 'abatestsprep.com',
  url: 'https://abatestsprep.com',
} as const;

/** App-relative paths. The locale prefix is applied by `href()` at render time. */
export const routes = {
  home: '/',
  exams: '/exams',
  method: '/method',
  results: '/results',
  about: '/about',
  blog: '/blog',
  contact: '/contact',
  login: '/login',
  privacy: '/privacy',
  terms: '/terms',
  cancellation: '/cancellation',
} as const;

/** Primary nav. Labels come from `dict.nav[key]`. */
export const navItems = [
  { key: 'exams', href: '/#exams' },
  { key: 'method', href: '/#method' },
  { key: 'pricing', href: '/#pricing' },
  { key: 'results', href: '/#results' },
  { key: 'blog', href: routes.blog },
] as const;

export const legalItems = [
  { key: 'privacy', href: routes.privacy },
  { key: 'terms', href: routes.terms },
  { key: 'cancellation', href: routes.cancellation },
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
} as const;

export const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`;

/**
 * Threads was dropped: no URL was supplied for it, and a guessed link is worse
 * than one fewer icon. Add it back here with a real URL if the account exists.
 */
export const socials = [
  { label: 'Instagram', handle: contact.instagramHandle, href: contact.instagramUrl, icon: 'instagram' },
  { label: 'TikTok', handle: contact.tiktokHandle, href: contact.tiktokUrl, icon: 'tiktok' },
  { label: 'LinkedIn', handle: 'ABA Tests Prep', href: contact.linkedinUrl, icon: 'linkedin' },
] as const;

/**
 * Art-directed banners, served from the weserv image CDN.
 *
 * These URLs already carry their own resize/encode parameters, so `Banner`
 * renders them with `unoptimized`. Every banner sits on a flat brand-colour
 * block, so a slow or failed load degrades to a solid panel.
 *
 * `alt` is localised — see `dict.banners`.
 */
const cdn = (id: string) =>
  `https://images.weserv.nl/?url=www.trybloom.ai/img/${id}&output=jpg&q=95&w=2048`;

export const banners = {
  hero: { src: cdn('3388952a-25b0-4734-a67a-010fafe249e6') },
  journey: { src: cdn('e2ed1638-1dda-4851-9531-63526fdba54a') },
  upward: { src: cdn('354cf176-06a9-4606-ae5c-c2eac19cac14') },
  community: { src: cdn('013c0200-d151-4bf6-9719-3282ffb7f216') },
} as const;

export type BannerKey = keyof typeof banners;

/** Exam order and numbering. All exam copy is localised. */
export const examOrder = ['dsat', 'udsp', 'ielts', 'toefl', 'pte', 'yds'] as const;
export type ExamSlug = (typeof examOrder)[number];

/**
 * Figures supplied by the client and published as given. Numbers are
 * locale-independent; their labels are not.
 */
export const stats = [
  { key: 'students', value: 5000, suffix: '' },
  { key: 'improvement', value: 35, suffix: '%' },
  { key: 'target', value: 90, suffix: '%' },
  { key: 'offers', value: 500, suffix: '+' },
] as const;

/** Aspirational destinations, not placement claims. Not translated — proper nouns. */
export const universities = [
  'Oxford',
  'Cambridge',
  'LSE',
  'UCL',
  'Imperial College',
  'Stanford',
  'MIT',
  'Harvard',
  'Columbia',
  'NYU',
  'Toronto',
  'McGill',
  'ETH Zürich',
  'TU Delft',
  'Bocconi',
  'Sciences Po',
  'KU Leuven',
  'Melbourne',
] as const;

export const authority = {
  name: 'Prof. Dr. Gamze Sart',
  /**
   * Supplied by the client. Hotlinked from gamzesart.com — consider saving a
   * copy to /public/people/ and pointing this there, so the page does not
   * depend on another domain staying up.
   */
  photo: 'https://gamzesart.com/img/gamze-sart.webp' as string | null,
} as const;

export const pricingFigures = {
  premium: '$5,000',
} as const;

/**
 * The testimonial renders only when a quote exists. Fill all three fields,
 * with the student's consent, and the block appears. Localise by moving this
 * into the dictionaries if you collect quotes in both languages.
 */
export const testimonial = {
  quote: null as string | null,
  name: null as string | null,
  detail: null as string | null,
} as const;

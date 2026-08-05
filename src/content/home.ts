/** Home-page copy. Section order here matches the order on the page. */

export const hero = {
  eyebrow: 'Exam prep for the world’s best universities',
  /** Split into words for the masked word-by-word reveal. `mark: true` paints the amber bar. */
  headline: [
    { text: 'Prep' },
    { text: 'for' },
    { text: 'the' },
    { text: 'exams' },
    { text: 'that' },
    { text: 'get' },
    { text: 'you' },
    { text: 'into' },
    { text: 'top' },
    { text: 'universities.', mark: true },
  ],
  sub: 'DSAT · UDSP · IELTS · TOEFL · PTE · YDS',
  scrollHint: 'Scroll',
} as const;

export const marquee = {
  label: 'Where our students are headed',
  /**
   * Aspirational target list — these are destinations students prepare for,
   * not placement claims. Keep it framed that way in copy.
   */
  universities: [
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
  ],
} as const;

export const gap = {
  eyebrow: 'The gap',
  headline: 'Most study hard. We make sure they study right.',
  ctaLabel: 'Find your gaps — free',
} as const;

export const examsSection = {
  eyebrow: 'Exams we prepare',
  headline: 'Six exams. One method.',
  sub: 'Every exam has a shortest route. We know it.',
} as const;

export const method = {
  eyebrow: 'How it works',
  headline: 'Four steps, in this order.',
  ctaLabel: 'Start with step 01 — free',
  steps: [
    { index: '01', title: 'Diagnose', line: 'A free test that finds your real gaps.' },
    { index: '02', title: 'Plan', line: 'A roadmap to your target score.' },
    { index: '03', title: 'Train', line: 'Targeted practice on what’s costing you points.' },
    { index: '04', title: 'Perform', line: 'Walk in ready, come out placed.' },
  ],
} as const;

export const why = {
  eyebrow: 'Why ABA',
  pillars: [
    { title: 'Evidence-based', line: 'Every plan driven by diagnostic data.' },
    { title: 'Personalised', line: 'Your syllabus, not the shelf’s.' },
    { title: 'Expert mentorship', line: 'Tutors who know these exams cold.' },
  ],
  authority: {
    name: 'Prof. Dr. Gamze Sart',
    // TODO(client): confirm the exact role wording and any titles to display.
    role: 'Academic advisor',
    /**
     * Supplied by the client. Hotlinked from gamzesart.com — consider saving
     * a copy to /public/people/gamze-sart.webp and pointing this there, so the
     * footer of the site does not depend on another domain staying up.
     */
    photo: 'https://gamzesart.com/img/gamze-sart.webp',
    // TODO(client): a short approved biography is still outstanding. Nothing
    // here should be written on her behalf.
    bio: 'TODO(client): approved biography to be supplied.',
  },
} as const;

/**
 * Pricing.
 *
 * Two steps only, and the free one is the primary action everywhere on the
 * page. The premium figure is the one hard number the client gave us; every
 * inclusion under it is marked for confirmation.
 */
export const pricing = {
  eyebrow: 'Pricing',
  headline: 'Two steps. The first one is free.',
  sub: 'Find out where you stand for free. Pay only to close the gap.',
  free: {
    kicker: 'Step one',
    name: 'Free level analysis',
    price: 'Free',
    priceNote: 'No card, no obligation',
    includes: [
      'A full diagnostic in your exam, under real timing',
      'Your current level, and the specific gaps behind it',
      'An honest answer on what your target score would take',
      'A written summary you keep, whether or not you continue',
    ],
    cta: { label: 'Book your free analysis', href: '/contact' },
  },
  premium: {
    kicker: 'Step two',
    name: 'Premium Prep',
    price: '$5,000',
    priceNote: 'Full-service programme',
    // TODO(client): the on-page TODO badge was removed at the client's
    // request, but these inclusions are still unconfirmed and are a
    // contractual claim. Confirm every line below, plus what the $5,000
    // covers in terms of programme duration, session count, exam scope and
    // refund terms, before this goes live.
    includes: [
      'Full diagnostic plus an honest reachability read',
      'A personal plan built around your weak spots',
      '1-on-1 coaching with expert tutors',
      'Unlimited timed mocks, each returned with feedback',
      'Application and score-submission support',
      'Direct access to your tutor between sessions',
    ],
    cta: { label: 'Talk to us about Premium', href: '/contact' },
  },
} as const;

export const results = {
  eyebrow: 'Results',
  headline: 'The numbers we hold ourselves to.',
  /**
   * Figures supplied by the client and published as given. They are claims
   * the business is making in public, so they should be traceable to your own
   * records if anyone asks — update them here as they change.
   */
  stats: [
    { value: 5000, suffix: '', label: 'Students prepared' },
    { value: 35, suffix: '%', label: 'Average score improvement' },
    { value: 90, suffix: '%', label: 'Reached their target band' },
    { value: 500, suffix: '+', label: 'University offers received' },
  ],
  /**
   * The testimonial slot renders nothing until there is a real quote — no
   * empty placeholder box. Fill all three fields, with the student's consent,
   * and it appears.
   */
  testimonial: {
    quote: null as string | null,
    name: null as string | null,
    detail: null as string | null,
  },
} as const;

export const midCta = {
  eyebrow: 'Start here',
  headline: 'Not sure where you stand?',
  headlineMark: 'Find out — free.',
} as const;

export const finalCta = {
  eyebrow: 'Last thing',
  headline: 'Your target score has a deadline.',
} as const;

/**
 * FAQ. One or two short sentences per answer — anything longer belongs in the
 * conversation, not on the landing page.
 *
 * Two answers describe how the service is delivered and are still unconfirmed;
 * they are marked below. The visible "TODO(client)" prefixes were removed at
 * the client's request, so these now need a deliberate check before launch.
 */
export const faq = {
  eyebrow: 'Questions',
  headline: 'Before you book.',
  items: [
    {
      q: 'How long does preparation take?',
      a: 'Six to eight weeks for a small gap, three to six months for a large one. The diagnostic tells you which.',
    },
    {
      q: 'Which exam is right for me?',
      a: 'Your university list decides it. We check that in the free analysis.',
    },
    {
      q: 'What does Premium Prep cover?',
      // TODO(client): confirm duration, session count and exam scope.
      a: 'Diagnostic, personal plan, 1-on-1 coaching, unlimited marked mocks and application support. Duration is set at your diagnostic.',
    },
    {
      q: 'Online or in person?',
      // TODO(client): confirm delivery formats and locations.
      a: 'Both. Same materials, same tracking either way.',
    },
    {
      q: 'What happens in the free level analysis?',
      a: 'A real diagnostic under exam conditions, then an honest read on your level.',
    },
    {
      q: 'What if my target is not realistic?',
      a: 'We tell you at the diagnostic, before you have spent anything.',
    },
  ],
} as const;

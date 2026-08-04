/** Home-page copy. Section order here matches the order on the page. */

export const hero = {
  eyebrow: 'Smart prep for studying abroad',
  /** Split into words for the masked word-by-word reveal. `mark: true` paints the amber bar. */
  headline: [
    { text: 'Prep' },
    { text: 'for' },
    { text: 'the' },
    { text: 'exams' },
    { text: 'that' },
    { text: 'take' },
    { text: 'you' },
    { text: 'global.', mark: true },
  ],
  sub: 'DSAT, UDSP, IELTS, TOEFL, PTE and YDS — decoded into a plan built around you.',
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
  lede: 'Effort is rarely the missing piece. Direction is.',
  body: [
    'The default way to prepare for an exam is to start at the front of the book and work to the back. It feels productive. It is also how a student spends six weeks revising the things they could already do, and walks into the exam having never fixed the four things that were actually costing them points.',
    'We start the other way around. A diagnostic first, so we know precisely where the marks are leaking — a content gap, a pacing problem, a question type that never got taught properly. Then we build the plan around those, and only those.',
  ],
  pullQuote: 'You do not need to study everything. You need to study the right things, in the right order.',
  ctaLabel: 'Find your gaps — free',
} as const;

export const examsSection = {
  eyebrow: 'Exams we prepare',
  headline: 'Six exams. One method.',
  sub: 'Each has its own logic, its own traps and its own shortest route to the score you need.',
  hint: 'Tap an exam to open it',
} as const;

export const method = {
  eyebrow: 'How it works',
  headline: 'Four steps, in this order.',
  sub: 'Nothing here is a surprise. That is rather the point.',
  ctaLabel: 'Start with step 01 — free',
  steps: [
    {
      index: '01',
      title: 'Diagnose',
      lead: 'A free level analysis',
      body: 'You sit a real diagnostic under real conditions. We come back with your current level, the specific gaps behind it, and an honest read on the score that is reachable in the time you have.',
    },
    {
      index: '02',
      title: 'Plan',
      lead: 'A roadmap to your target',
      body: 'Your target score and your deadline, worked backwards into weeks. What gets studied, in what order, and what gets deliberately left out — because a plan that omits nothing is not a plan.',
    },
    {
      index: '03',
      title: 'Train',
      lead: 'Targeted, timed, real practice',
      body: 'Sessions built around your gaps, practice under exam timing from the beginning, and full mocks at set checkpoints. Every wrong answer gets classified so the fix matches the cause.',
    },
    {
      index: '04',
      title: 'Perform',
      lead: 'Score, then application support',
      body: 'Test-day strategy rehearsed until it is boring. Then the part most prep stops short of: turning the score into an application that the universities on your list take seriously.',
    },
  ],
} as const;

export const why = {
  eyebrow: 'Why ABA',
  pillars: [
    {
      title: 'Evidence-based',
      body: 'Every plan starts from a diagnostic and gets revised against mock data. If a number is not moving, the plan changes — not the student’s effort level.',
    },
    {
      title: 'Personalised',
      body: 'No two students get the same schedule, because no two students are losing marks in the same places. The syllabus is yours, not the shelf’s.',
    },
    {
      title: 'Expert mentorship',
      body: 'You work with people who know these exams at the level of the mark scheme, and who have taken students through them before.',
    },
  ],
  authority: {
    name: 'Prof. Dr. Gamze Sart',
    // TODO(client): confirm the exact role wording and any titles to display.
    role: 'Academic advisor',
    // TODO(client): supply an approved photograph — /public/people/gamze-sart.jpg
    // and a short approved biography. Nothing here should be written for her.
    photo: null as string | null,
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
  sub: 'You do not pay to find out where you stand. You pay for the programme that closes the gap — and only once you know what that gap actually is.',
  free: {
    kicker: 'Step one',
    name: 'Free level analysis',
    price: 'Free',
    priceNote: 'No card, no obligation',
    summary: 'A real diagnostic under exam conditions, then an honest read on your level and your reachable target.',
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
    summary: 'The complete programme: your plan, your tutor, your mocks, and support all the way through to submission.',
    // TODO(client): confirm every line below, plus what the $5,000 covers in
    // terms of duration, session count and exam scope. Nothing here should be
    // published until the client has signed it off.
    includes: [
      'Full diagnostic plus an honest reachability read',
      'A personal plan built around your weak spots',
      '1-on-1 coaching with expert tutors',
      'Unlimited timed mocks, each returned with feedback',
      'Application and score-submission support',
      'Direct access to your tutor between sessions',
    ],
    cta: { label: 'Talk to us about Premium', href: '/contact' },
    todo: 'Confirm programme duration, session count, exam scope and refund terms before publishing this panel.',
  },
} as const;

export const results = {
  eyebrow: 'Results',
  headline: 'The numbers we hold ourselves to.',
  /**
   * TODO(client): every figure below is a placeholder. Replace `value` with
   * verified numbers before launch, or delete the stat entirely — an empty
   * results section is better than an invented one.
   */
  stats: [
    { value: 0, suffix: '', label: 'Students prepared', todo: true },
    { value: 0, suffix: '', label: 'Average score improvement', todo: true },
    { value: 0, suffix: '%', label: 'Reached their target band', todo: true },
    { value: 0, suffix: '', label: 'University offers received', todo: true },
  ],
  // TODO(client): real testimonial with the student's consent, name and exam.
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
  sub: 'One diagnostic session. Your real level, your gaps, and a straight answer on what your target score would take. No obligation after it.',
} as const;

export const finalCta = {
  eyebrow: 'Last thing',
  headline: 'Your target score has a deadline.',
  sub: 'The sooner we know where you stand, the more of the plan is still available to you. Start with the free analysis.',
} as const;

/**
 * FAQ. Answers marked with a TODO comment describe how the service is
 * delivered — confirm them with the client before launch rather than
 * assuming the defaults below.
 */
export const faq = {
  eyebrow: 'Questions',
  headline: 'Before you book.',
  items: [
    {
      q: 'How long does preparation usually take?',
      a: 'It depends far more on the distance to your target than on the exam itself. A student closing a small gap might need six to eight weeks; a larger jump is usually a three-to-six-month piece of work. The diagnostic exists precisely so you get a real answer to this question instead of a marketing one.',
    },
    {
      q: 'Which exam is right for me?',
      a: 'Work backwards from your university list — it dictates what is accepted, and that decides the exam more often than preference does. Where several are accepted, the choice comes down to how you read, write and speak under time. The free level analysis covers this before you commit to anything.',
    },
    {
      q: 'What does Premium Prep include, and what does $5,000 cover?',
      // TODO(client): confirm duration, session count and exam scope.
      a: 'TODO(client): confirm. Draft answer — Premium Prep is the full-service programme: diagnostic, personal plan, 1-on-1 coaching, unlimited marked mocks, application support and direct access to your tutor between sessions. The exact duration and session count are set at the diagnostic, once we know the distance to your target.',
    },
    {
      q: 'Do you teach online or in person?',
      // TODO(client): confirm delivery formats and locations.
      a: 'TODO(client): confirm. Draft answer — both. Lessons run online for students outside the city and in person where that works better, with the same materials and the same tracking either way.',
    },
    {
      q: 'What happens in the free level analysis?',
      a: 'You sit a real diagnostic under exam conditions, then we go through it together: where the marks went, why, and what a realistic target looks like from here. You leave with the read on your level whether or not you study with us.',
    },
    {
      q: 'What if my target score is not realistic in the time I have?',
      a: 'We will tell you, at the diagnostic, before you have spent anything. Then we will show you what is reachable in that window, and what timeline the original target would actually need.',
    },
  ],
} as const;

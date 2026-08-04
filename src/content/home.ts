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
  sub: 'Digital SAT, IELTS, TOEFL, YDS and UDSP — decoded into a plan built around you.',
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
  headline: [
    { text: 'Most students study hard.' },
    { text: 'Few study', emphasis: false },
    { text: 'right.', mark: true },
  ],
  lede: 'Effort is rarely the missing piece. Direction is.',
  body: [
    'The default way to prepare for an exam is to start at the front of the book and work to the back. It feels productive. It is also how a student spends six weeks revising the things they could already do, and walks into the exam having never fixed the four things that were actually costing them points.',
    'We start the other way around. A diagnostic first, so we know precisely where the marks are leaking — a content gap, a pacing problem, a question type that never got taught properly. Then we build the plan around those, and only those.',
    'It is a smaller amount of studying. It is a much larger amount of progress.',
  ],
  pullQuote: 'You do not need to study everything. You need to study the right things, in the right order.',
} as const;

export const examsSection = {
  eyebrow: 'Exams we prepare',
  headline: 'Five exams. One method.',
  sub: 'Each has its own logic, its own traps and its own shortest route to the score you need.',
  dragHint: 'Drag or scroll',
} as const;

export const method = {
  eyebrow: 'How it works',
  headline: 'Four steps, in this order.',
  sub: 'Nothing here is a surprise. That is rather the point.',
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
  headline: 'Evidence, not enthusiasm.',
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
    quote: null as string | null,
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
    { value: 0, suffix: '', label: 'Universities offers received', todo: true },
  ],
  // TODO(client): real testimonial with the student's consent, name and exam.
  testimonial: {
    quote: null as string | null,
    name: null as string | null,
    detail: null as string | null,
  },
} as const;

export const freeAnalysis = {
  eyebrow: 'Start here',
  headline: 'Not sure where you stand? Find out — free.',
  sub: 'One diagnostic session. Your real level, your gaps, and a straight answer on what your target score would take. No obligation after it.',
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
      q: 'Do you teach online or in person?',
      // TODO(client): confirm delivery formats and locations.
      a: 'TODO(client): confirm. Draft answer — both. Lessons run online for students outside the city and in person where that works better, with the same materials and the same tracking either way.',
    },
    {
      q: 'What happens in the free level analysis?',
      a: 'You sit a real diagnostic under exam conditions, then we go through it together: where the marks went, why, and what a realistic target looks like from here. You leave with the read on your level whether or not you study with us.',
    },
    {
      q: 'Do you help with university applications too?',
      // TODO(client): confirm the scope of application support offered.
      a: 'TODO(client): confirm scope. Draft answer — yes. A score is a means to an offer, so the final stage of the method covers turning it into an application the universities on your list take seriously.',
    },
    {
      q: 'What if my target score is not realistic in the time I have?',
      a: 'We will tell you, at the diagnostic, before you have spent anything. Then we will show you what is reachable in that window, and what timeline the original target would actually need.',
    },
  ],
} as const;

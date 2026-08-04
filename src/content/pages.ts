/** Copy for the secondary routes. */

export const aboutPage = {
  eyebrow: 'About',
  title: 'A prep school built around',
  markWord: 'diagnosis.',
  lede: 'ABA Tests Prep exists because the standard model — a fixed syllabus, delivered at everyone, from page one — is a poor fit for exams that measure very specific things.',
  body: [
    {
      heading: 'What we do',
      text: 'We prepare students for the exams that open international university admission: the Digital SAT, IELTS, TOEFL, YDS and UDSP. Every student starts with a diagnostic and leaves with a plan that names what to study and, just as importantly, what to skip.',
    },
    {
      heading: 'How we work',
      text: 'Small enough to know every student’s weak spots by name. Structured enough that progress is measured against mock data rather than against how hard the week felt. If a number is not moving, the plan changes.',
    },
    {
      heading: 'Who we work with',
      text: 'Students applying abroad for a bachelor’s or a master’s, and professionals who need a certified English score. Some arrive two years out; some arrive with eight weeks. Both are workable — they simply need different plans.',
    },
  ],
  // TODO(client): founding story, dates, team names, locations and any
  // accreditations. Nothing on this page should state a fact about the
  // organisation that has not been confirmed.
  todo: 'Founding story, team, locations and accreditations to be supplied.',
} as const;

export const methodPage = {
  eyebrow: 'Method',
  title: 'Diagnose, plan, train,',
  markWord: 'perform.',
  lede: 'The same four steps for every student and every exam. What changes is everything inside them.',
  principles: [
    {
      title: 'Measure before you teach',
      text: 'No plan is written before a diagnostic has been sat under real conditions. A syllabus written from a guess is just a guess with a timetable.',
    },
    {
      title: 'Classify every error',
      text: 'A wrong answer is a content gap, a misreading, or a clock problem. They look identical on a score report and need completely different fixes.',
    },
    {
      title: 'Time from day one',
      text: 'Practice happens under exam timing from the first session. Untimed accuracy is a comforting number that predicts very little.',
    },
    {
      title: 'Decide what to skip',
      text: 'Every plan names the topics that will not be studied. A preparation plan that covers everything is a wish list.',
    },
  ],
} as const;

export const resultsPage = {
  eyebrow: 'Results',
  title: 'What we can',
  markWord: 'show you.',
  lede: 'Score data, student outcomes and university destinations — published only once verified.',
  // TODO(client): this page is intentionally near-empty. Populate it with
  // verified score improvements, destinations and consented testimonials.
  todo: 'Verified score data, destinations and testimonials to be supplied before this page is linked publicly.',
} as const;

export const blogPage = {
  eyebrow: 'Blog',
  title: 'Notes on exams, applications and',
  markWord: 'getting in.',
  lede: 'Practical writing on preparation strategy, exam changes and the application process.',
  // TODO(client): connect a CMS or add MDX posts under /src/content/posts.
  todo: 'No posts published yet. Wire this route to a CMS or MDX before launch.',
} as const;

export const contactPage = {
  eyebrow: 'Contact',
  title: 'Book a free level',
  markWord: 'analysis.',
  lede: 'One diagnostic session, one honest conversation about what your target score would take. Nothing after it is assumed.',
  steps: [
    { title: 'Get in touch', text: 'Message us with the exam you are preparing for and your rough timeline.' },
    { title: 'Sit the diagnostic', text: 'A real paper under real conditions — online or in person.' },
    { title: 'Get your read', text: 'Your level, your gaps and a realistic target, walked through with you.' },
  ],
  // TODO(client): replace this note once a real booking system or form
  // endpoint exists. The buttons currently point at Instagram, email and
  // WhatsApp from /src/content/site.ts.
  todo: 'Booking form / scheduling link not yet connected.',
} as const;

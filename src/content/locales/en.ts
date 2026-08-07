/**
 * English — the source of truth for the dictionary shape.
 *
 * Every translatable string on the site lives here. `tr.ts` is type-checked
 * against `typeof en`, so adding a key here and forgetting the Turkish is a
 * build error, not a half-translated page.
 *
 * Structure notes for translators:
 *  - `hero.headline` is an array of words because each one animates
 *    separately. Split the translated sentence the same way and put `mark: true`
 *    on the word that should carry the amber highlight.
 *  - Headlines shaped `{ before, mark, after }` render the `mark` part with the
 *    amber highlight behind it. The highlighted word does not have to sit in the
 *    same position as in English — put it where the translation wants it.
 */
export const en = {
  meta: {
    title: 'Exam prep for the world’s best universities',
    description:
      'DSAT, UDSP, IELTS, TOEFL, PTE and YDS preparation for students applying to top universities abroad.',
  },

  common: {
    prep: 'prep',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeAria: 'ABA Tests Prep — home',
    languageAria: 'Change language',
    primaryNav: 'Primary',
    backHome: 'Back to the homepage',
  },

  site: {
    positioning: 'Smart prep for studying abroad.',
    tagline: 'Exam preparation for students heading to global universities.',
    rights: 'All rights reserved.',
  },

  nav: {
    exams: 'Exams',
    method: 'Method',
    pricing: 'Pricing',
    results: 'Results',
    blog: 'Blog',
  },

  cta: {
    primary: 'Book a free level analysis',
    secondary: 'See how it works',
    login: 'Log in',
    whatsapp: 'Message us on WhatsApp',
    talkToUs: 'Talk to us',
    emailUs: 'Email us',
  },

  banners: {
    hero: 'An ABA Tests Prep student preparing for an international exam.',
    journey: 'The route a student takes from first diagnostic to final score.',
    upward: 'Progress climbing toward a target score.',
    community: 'ABA Tests Prep students together.',
  },

  hero: {
    eyebrow: 'Exam prep for the world’s best universities',
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
    ] as { text: string; mark?: boolean }[],
    sub: 'DSAT · UDSP · IELTS · TOEFL · PTE · YDS',
    scrollHint: 'Scroll',
  },

  marquee: {
    label: 'Where our students are headed',
  },

  gap: {
    eyebrow: 'The gap',
    lead: 'Most study hard.',
    before: 'We make sure they study ',
    mark: 'right.',
    after: '',
    ctaLabel: 'Find your gaps — free',
  },

  examsSection: {
    eyebrow: 'Exams we prepare',
    headline: 'Six exams. One method.',
    sub: 'Every exam has a shortest route. We know it.',
  },

  method: {
    eyebrow: 'How it works',
    headline: 'Four steps, in this order.',
    ctaLabel: 'Start with step 01 — free',
    steps: [
      { index: '01', title: 'Diagnose', line: 'A free test that finds your real gaps.' },
      { index: '02', title: 'Plan', line: 'A roadmap to your target score.' },
      { index: '03', title: 'Train', line: 'Targeted practice on what’s costing you points.' },
      { index: '04', title: 'Perform', line: 'Walk in ready, come out placed.' },
    ],
  },

  why: {
    eyebrow: 'Why ABA',
    before: 'Evidence, not ',
    mark: 'enthusiasm.',
    after: '',
    pillars: [
      { title: 'Evidence-based', line: 'Every plan driven by diagnostic data.' },
      { title: 'Personalised', line: 'Your syllabus, not the shelf’s.' },
      { title: 'Expert mentorship', line: 'Tutors who know these exams cold.' },
    ],
    authorityRole: 'Academic advisor',
    authorityNote: 'Academic oversight of our method.',
    photoPending: 'Photograph to follow',
  },

  pricing: {
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
      cta: 'Book your free analysis',
    },
    premium: {
      kicker: 'Step two',
      name: 'Premium Prep',
      priceNote: 'Full-service programme',
      // TODO(client): these inclusions are unconfirmed and are a contractual
      // claim. Confirm every line, plus what the fee covers in terms of
      // duration, session count, exam scope and refund terms, before launch.
      includes: [
        'Full diagnostic plus an honest reachability read',
        'A personal plan built around your weak spots',
        '1-on-1 coaching with expert tutors',
        'Unlimited timed mocks, each returned with feedback',
        'Application and score-submission support',
        'Direct access to your tutor between sessions',
      ],
      cta: 'Talk to us about Premium',
    },
  },

  results: {
    eyebrow: 'Results',
    headline: 'The numbers we hold ourselves to.',
    line: 'Where you land depends on where you start.',
    stats: {
      students: 'Students prepared',
      improvement: 'Average score improvement',
      target: 'Reached their target band',
      offers: 'University offers received',
    },
  },

  midCta: {
    eyebrow: 'Start here',
    headline: 'Not sure where you stand?',
    headlineMark: 'Find out — free.',
  },

  finalCta: {
    eyebrow: 'Last thing',
    headline: 'Your target score has a deadline.',
  },

  faq: {
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
  },

  footer: {
    explore: 'Explore',
    exams: 'Exams',
    legal: 'Legal',
    follow: 'Follow',
    contact: 'Contact',
    legalLabels: {
      privacy: 'Privacy Policy',
      terms: 'Terms',
      cancellation: 'Cancellation Policy',
    },
  },

  /** Exam copy, keyed by slug. Order and numbering live in site.ts. */
  exams: {
    dsat: {
      name: 'DSAT',
      fullName: 'Digital SAT',
      hook: 'For US and global universities. Adaptive, scored to 1600.',
      purpose: 'Undergraduate admission to US and global universities.',
      audience: 'High-school students applying abroad for a bachelor’s degree.',
      intro:
        'The SAT is digital and adaptive. The second module of each section adjusts to your first, so early accuracy compounds — and preparing for it like the old paper test is the most common way students lose points they already knew how to win.',
      format: [
        { section: 'Reading & Writing', detail: 'Two adaptive modules of short passages, one question each.' },
        { section: 'Math', detail: 'Two adaptive modules; a calculator is allowed throughout.' },
        { section: 'Scoring', detail: 'Out of 1600, combining the two section scores.' },
        { section: 'Delivery', detail: 'Taken on a laptop or tablet through the official testing app.' },
      ],
      prep: [
        { title: 'Adaptive-aware pacing', body: 'The first module sets the ceiling for the second, so timing comes before content.' },
        { title: 'Error typing', body: 'Every wrong answer is classified — content gap, misread, or clock. Different problems, different fixes.' },
        { title: 'Full digital mocks', body: 'Same interface, same conditions, so test day is the least surprising day of your prep.' },
      ],
    },
    udsp: {
      name: 'UDSP',
      // TODO(client): confirm what UDSP expands to and replace this label.
      fullName: 'Alternative admissions pathway',
      hook: 'An alternative admissions route, for the students it suits.',
      purpose: 'An alternative admissions pathway to placement abroad.',
      audience: 'Students whose strongest case is not made by a single test score.',
      intro:
        'UDSP suits students whose strongest case is not made by a single test score. We map the requirements against your profile before you commit time to it.',
      format: [
        // TODO(client): confirm the official structure and replace verbatim from source.
        { section: 'Structure', detail: 'TODO — confirm current official format before publishing.' },
        { section: 'Eligibility', detail: 'TODO — confirm current eligibility rules.' },
      ],
      prep: [
        { title: 'Fit check first', body: 'A free session establishing whether this route serves your target list at all.' },
        { title: 'Requirement mapping', body: 'Your profile against the requirements, gap by gap, with a realistic timeline.' },
        { title: 'Guided preparation', body: 'Structured work on whatever the route actually assesses, with checkpoints.' },
      ],
    },
    ielts: {
      name: 'IELTS',
      fullName: 'International English Language Testing System',
      hook: 'The most widely accepted English test worldwide.',
      purpose: 'English proficiency for universities, visas and immigration worldwide.',
      audience: 'Anyone who needs a band score on record.',
      intro:
        'IELTS is less an English test than an English performance. The band descriptors reward specific, teachable behaviours — most students lose half a band to habits, not to vocabulary.',
      format: [
        { section: 'Listening', detail: 'Four recordings, forty questions, one play only.' },
        { section: 'Reading', detail: 'Three long passages — Academic or General Training.' },
        { section: 'Writing', detail: 'Two tasks: a data or letter task, then an essay.' },
        { section: 'Speaking', detail: 'A face-to-face interview in three parts with an examiner.' },
      ],
      prep: [
        { title: 'Band descriptors, out loud', body: 'You are shown exactly what separates a 6.5 from a 7.5 in your own recorded answers.' },
        { title: 'Writing marked properly', body: 'Tasks come back annotated against the four criteria, not with a number at the top.' },
        { title: 'Speaking under pressure', body: 'Mock interviews with an examiner-style partner, recorded, reviewed, repeated.' },
      ],
    },
    toefl: {
      name: 'TOEFL iBT',
      fullName: 'Test of English as a Foreign Language',
      hook: 'Academic English, favoured by North American universities.',
      purpose: 'English proficiency, most commonly for North American universities.',
      audience: 'Students applying where TOEFL is preferred.',
      intro:
        'TOEFL asks you to read something, hear something, then say or write how the two relate. That is why strong English speakers still underperform: it tests note-taking and synthesis as much as language.',
      format: [
        { section: 'Reading', detail: 'Academic passages with question sets.' },
        { section: 'Listening', detail: 'Lectures and campus conversations.' },
        { section: 'Speaking', detail: 'Independent and integrated tasks, recorded.' },
        { section: 'Writing', detail: 'An integrated task plus an academic discussion response.' },
      ],
      prep: [
        { title: 'Note-taking as a skill', body: 'A repeatable shorthand for lectures — the highest-leverage TOEFL habit and the least practised.' },
        { title: 'Structures, not scripts', body: 'Frames for the speaking tasks that hold up under a 45-second clock without going robotic.' },
        { title: 'Scored mocks', body: 'Full attempts marked against the official rubric, with a rescoring plan.' },
      ],
    },
    pte: {
      name: 'PTE',
      fullName: 'Pearson Test of English',
      hook: 'Fast, computer-scored, growing UK and Australia acceptance.',
      purpose: 'English proficiency for UK and Australian universities and visas.',
      audience: 'Students who want a quick turnaround.',
      intro:
        'PTE is scored by algorithm, which changes the preparation entirely. There is no examiner to persuade — there is a scoring engine with known preferences, and students who learn what it rewards tend to move fast.',
      format: [
        { section: 'Speaking & Writing', detail: 'A combined section — read aloud, describe, summarise, essay.' },
        { section: 'Reading', detail: 'Multiple choice, re-ordering and fill-in-the-blanks.' },
        { section: 'Listening', detail: 'Summarise spoken text, dictation and comprehension items.' },
        { section: 'Scoring', detail: 'Computer-marked, with results typically returned quickly.' },
      ],
      prep: [
        { title: 'Train for the engine', body: 'Fluency and pronunciation carry disproportionate weight. We drill delivery, not just answers.' },
        { title: 'High-yield task types', body: 'A handful of item types feed several skill scores at once. Those get worked first.' },
        { title: 'Timed full mocks', body: 'Complete attempts under the real clock with per-item accuracy tracking.' },
      ],
    },
    yds: {
      name: 'YDS',
      fullName: 'Yabancı Dil Bilgisi Seviye Tespit Sınavı',
      hook: 'Turkey’s academic English exam. Grammar-dense, learnable.',
      purpose: 'Academic and professional English certification in Turkey.',
      audience: 'Students and professionals who need a Turkish-recognised English score.',
      intro:
        'The question types repeat year after year, the vocabulary set is finite and the grammar is testable. That makes YDS one of the most improvable exams we teach — if the study is systematic rather than enthusiastic.',
      format: [
        { section: 'Vocabulary & grammar', detail: 'Targeted single-question items.' },
        { section: 'Cloze & sentence completion', detail: 'Contextual gap-filling.' },
        { section: 'Translation', detail: 'Both directions, English and Turkish.' },
        { section: 'Reading & discourse', detail: 'Passages, dialogue completion, paragraph coherence.' },
      ],
      prep: [
        { title: 'A finite word list, spaced', body: 'The high-frequency lexicon on a spaced-repetition schedule, drilled to recall.' },
        { title: 'Question-type sweeps', body: 'One question type worked to mastery across many past papers before moving on.' },
        { title: 'Timed past papers', body: 'Full sittings under exam conditions with per-type accuracy tracking.' },
      ],
    },
  },

  /** Secondary routes. */
  pages: {
    examsIndex: {
      eyebrow: 'Exams',
      title: 'Six exams, six different',
      markWord: 'problems.',
      lede: 'Pick the one you are sitting.',
      ctaLine: 'Not sure which one your university list requires?',
      cta: 'Ask us — it takes five minutes',
    },
    examDetail: {
      eyebrowSuffix: 'Exam',
      whatItIs: 'What it is',
      format: 'Format',
      formatHeadline: 'How the paper is built.',
      howWePrep: 'How we prep it',
      keyDates: 'Key dates',
      keyDatesHeadline: 'When you can sit it.',
      keyDatesTodo: 'Sitting dates and registration deadlines have not been added. Add verified entries from the official board — they change every year and are not safe to infer.',
      otherExams: 'Other exams',
      whatFor: 'What it’s for',
      whoFor: 'Who it’s for',
      ctaHeadline: 'Find out where you stand.',
    },
    method: {
      eyebrow: 'Method',
      title: 'Diagnose, plan, train,',
      markWord: 'perform.',
      lede: 'The same four steps for every student.',
      principlesEyebrow: 'Principles',
      principlesHeadline: 'Why in that order.',
      principles: [
        { title: 'Measure before you teach', text: 'No plan is written before a diagnostic has been sat under real conditions.' },
        { title: 'Classify every error', text: 'A content gap, a misreading and a clock problem look identical on a score report.' },
        { title: 'Time from day one', text: 'Untimed accuracy is a comforting number that predicts very little.' },
        { title: 'Decide what to skip', text: 'Every plan names the topics that will not be studied.' },
      ],
      cta: 'Start with a free diagnostic',
    },
    about: {
      eyebrow: 'About',
      title: 'A prep school built around',
      markWord: 'diagnosis.',
      lede: 'A fixed syllabus delivered at everyone is a poor fit for exams that measure very specific things.',
      body: [
        { heading: 'What we do', text: 'We prepare students for the exams that open international university admission, and build every plan around the gaps a diagnostic finds.' },
        { heading: 'How we work', text: 'Progress is measured against mock data, not against how hard the week felt. If a number is not moving, the plan changes.' },
        { heading: 'Who we work with', text: 'Students applying abroad, and professionals who need a certified English score. Two years out or eight weeks out — different plans, both workable.' },
      ],
      oversightHeadline: 'Academic oversight',
      oversightLine: 'advises on how we diagnose, plan and measure progress.',
      todoAuthority: 'An approved biography and confirmed title are still to be supplied. Nothing should be written on her behalf.',
      todo: 'Founding story, team, locations and accreditations to be supplied.',
    },
    results: {
      eyebrow: 'Results',
      title: 'What we can',
      markWord: 'show you.',
      lede: 'Score data, destinations and outcomes — published once verified.',
      statement: 'We would rather show you nothing than a number we cannot stand behind.',
      todo: 'Verified score data, destinations and testimonials to be supplied before this page is linked publicly.',
      cta: 'Get your own numbers first',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Notes on exams and',
      markWord: 'getting in.',
      lede: 'Practical writing on preparation and the application process.',
      empty: 'The first posts are being written.',
      todo: 'No posts published yet. Wire this route to a CMS or MDX before launch.',
      followCta: 'Follow us in the meantime',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Book a free level',
      markWord: 'analysis.',
      lede: 'One diagnostic session, one honest conversation.',
      getInTouch: 'Get in touch',
      whatsappNote: 'Fastest reply',
      nextHeadline: 'What happens next.',
      steps: [
        { title: 'Get in touch', text: 'Tell us your exam and your rough timeline.' },
        { title: 'Sit the diagnostic', text: 'A real paper under real conditions.' },
        { title: 'Get your read', text: 'Your level, your gaps and a realistic target.' },
      ],
      todo: 'Booking form / scheduling link not yet connected.',
      todoContacts: 'Confirm the WhatsApp number and public email address in /src/content/site.ts — both are placeholders.',
    },
    login: {
      eyebrow: 'Student portal',
      title: 'Log in to your',
      markWord: 'portal.',
      lede: 'Your plan, your mock results and your next session.',
      statement: 'The student portal is not live yet.',
      body: 'Until it is, your plan and schedule come directly from your tutor.',
      todo: 'Authentication is not implemented. This page is a routing stub so the nav and footer links resolve — no credentials are collected, stored or transmitted.',
      cta: 'Contact your tutor',
    },
    legal: {
      eyebrow: 'Legal',
      statement: 'This policy has not been published yet.',
      body: 'If you need this information before it is up, ask us and we will answer in writing.',
      privacy: {
        title: 'Privacy',
        markWord: 'Policy.',
        lede: 'How ABA Tests Prep collects, uses and stores personal data.',
        todo: 'Privacy policy text to be supplied by the client. It must reflect what is actually collected and, for students in Türkiye and the EU, satisfy KVKK and GDPR. Do not publish boilerplate.',
      },
      terms: {
        title: 'Terms of',
        markWord: 'Service.',
        lede: 'The terms you agree to when you book a programme.',
        todo: 'Terms of service to be supplied by the client, covering what Premium Prep includes, payment, scheduling and the limits of any score expectation.',
      },
      cancellation: {
        title: 'Cancellation',
        markWord: 'Policy.',
        lede: 'Rescheduling, cancellations and refunds.',
        todo: 'Cancellation and refund policy to be supplied by the client — notice periods for rescheduling, and refund terms against the programme fee.',
      },
    },
    notFound: {
      eyebrow: '404',
      title: 'This page went off-syllabus.',
      lede: 'The link is broken or the page has moved.',
      cta: 'See the exams',
    },
  },
};

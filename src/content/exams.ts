/**
 * The six exams, in the order the client specified. Each entry drives both the
 * home-page list and the /exams/[slug] page, so copy stays in one place.
 *
 * `keyDates` is deliberately empty: exam calendars change every year and
 * nothing unverified should ship. Fill it in from the official board site.
 */

export type ExamKeyDate = {
  label: string;
  window: string;
  note?: string;
};

export type Exam = {
  slug: string;
  name: string;
  /** Expanded name shown under the big list entry. */
  fullName: string;
  index: string;
  /** One-line hook used on the expanding list row. */
  hook: string;
  purpose: string;
  audience: string;
  /** Short paragraph for the exam page intro. */
  intro: string;
  format: { section: string; detail: string }[];
  prep: { title: string; body: string }[];
  /** TODO(client): verified dates only. See note above. */
  keyDates: ExamKeyDate[];
};

export const exams: Exam[] = [
  {
    slug: 'dsat',
    name: 'DSAT',
    fullName: 'Digital SAT',
    index: '01',
    hook: 'Adaptive, scored to 1600. Section two changes based on how you handled section one.',
    purpose: 'Undergraduate admission to US and global universities.',
    audience: 'High-school students applying abroad for a bachelor’s degree.',
    intro:
      'The SAT went digital and adaptive, which changed what a good score actually requires. Pace matters more. The second module of each section adjusts to your first, so early accuracy compounds. Preparing for it like the old paper test is the most common way students lose points they already knew how to win.',
    format: [
      { section: 'Reading & Writing', detail: 'Two adaptive modules of short passages, one question each.' },
      { section: 'Math', detail: 'Two adaptive modules; a calculator is allowed throughout.' },
      { section: 'Scoring', detail: 'Out of 1600, combining the two section scores.' },
      { section: 'Delivery', detail: 'Taken on a laptop or tablet through the official testing app.' },
    ],
    prep: [
      {
        title: 'Adaptive-aware pacing',
        body: 'We train the first module hard, because it sets the ceiling for the second. Timing drills come before content drills.',
      },
      {
        title: 'Error typing, not error counting',
        body: 'Every wrong answer gets classified — content gap, misread, or clock. Three different problems, three different fixes.',
      },
      {
        title: 'Full digital mocks',
        body: 'Practice happens in the same interface and the same conditions, so test day is the least surprising day of your prep.',
      },
    ],
    keyDates: [],
  },
  {
    slug: 'udsp',
    name: 'UDSP',
    // TODO(client): confirm what UDSP expands to and replace this label. It is
    // deliberately generic rather than a guess at the acronym.
    fullName: 'Alternative admissions pathway',
    index: '02',
    hook: 'An alternative admissions route for students it fits better than a test-only application.',
    purpose: 'An alternative admissions pathway to placement abroad.',
    audience: 'Students whose strongest case is not made by a single test score.',
    intro:
      'UDSP suits students whose strongest case is not made by a single test score. We map the requirements against your profile before you commit time to it, because the right answer here is sometimes "prepare something else instead".',
    format: [
      // TODO(client): confirm the official structure and replace verbatim from source.
      { section: 'Structure', detail: 'TODO — confirm current official format before publishing.' },
      { section: 'Eligibility', detail: 'TODO — confirm current eligibility rules.' },
    ],
    prep: [
      {
        title: 'Fit check first',
        body: 'A free session establishing whether this route genuinely serves your target list before any prep begins.',
      },
      {
        title: 'Requirement mapping',
        body: 'Your profile against the requirements, gap by gap, with a realistic timeline.',
      },
      { title: 'Guided preparation', body: 'Structured work on whatever the route actually assesses, with checkpoints.' },
    ],
    keyDates: [],
  },
  {
    slug: 'ielts',
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    index: '03',
    hook: 'The most widely accepted English test — the UK, Europe and beyond.',
    purpose: 'English proficiency for universities, visas and immigration worldwide.',
    audience: 'Anyone who needs a band score on record — undergraduate, postgraduate or professional.',
    intro:
      'IELTS is not an English test so much as an English performance. The band descriptors reward specific, teachable behaviours, and most students lose half a band to habits nobody ever told them about — not to a vocabulary gap.',
    format: [
      { section: 'Listening', detail: 'Four recordings, forty questions, one play only.' },
      { section: 'Reading', detail: 'Three long passages — Academic or General Training.' },
      { section: 'Writing', detail: 'Two tasks: a data or letter task, then an essay.' },
      { section: 'Speaking', detail: 'A face-to-face interview in three parts with an examiner.' },
    ],
    prep: [
      {
        title: 'Band descriptors, out loud',
        body: 'You get shown exactly what separates a 6.5 from a 7.5 in your own recorded answers. Vague feedback moves nobody.',
      },
      {
        title: 'Writing that gets marked properly',
        body: 'Task responses come back annotated against the four criteria, not with a number at the top.',
      },
      {
        title: 'Speaking under real pressure',
        body: 'Mock interviews with an examiner-style partner, recorded, reviewed, repeated.',
      },
    ],
    keyDates: [],
  },
  {
    slug: 'toefl',
    name: 'TOEFL iBT',
    fullName: 'Test of English as a Foreign Language',
    index: '04',
    hook: 'Academic English, integrated tasks — most common for North American universities.',
    purpose: 'English proficiency, most commonly for North American universities.',
    audience: 'Students applying where TOEFL is preferred, or who read and write more comfortably than they speak.',
    intro:
      'TOEFL asks you to read something, hear something, then say or write how the two relate. That integrated format is why strong English speakers can still underperform: the exam is testing note-taking and synthesis as much as language.',
    format: [
      { section: 'Reading', detail: 'Academic passages with question sets.' },
      { section: 'Listening', detail: 'Lectures and campus conversations.' },
      { section: 'Speaking', detail: 'Independent and integrated tasks, recorded.' },
      { section: 'Writing', detail: 'An integrated task plus an academic discussion response.' },
    ],
    prep: [
      {
        title: 'Note-taking as a skill',
        body: 'A repeatable shorthand for lectures — the single highest-leverage TOEFL habit and the one nobody practises.',
      },
      {
        title: 'Templates that do not sound like templates',
        body: 'Structures for the speaking tasks that hold up under a 45-second clock without going robotic.',
      },
      { title: 'Scored mocks', body: 'Full-length attempts marked against the official rubric with a rescoring plan.' },
    ],
    keyDates: [],
  },
  {
    slug: 'pte',
    name: 'PTE',
    fullName: 'Pearson Test of English',
    index: '05',
    hook: 'Fast, computer-scored, and increasingly accepted across the UK and Australia.',
    purpose: 'English proficiency for UK and Australian universities and visas.',
    audience: 'Students who want a quick turnaround and are comfortable being marked by a machine.',
    intro:
      'PTE is scored by algorithm, which changes the preparation entirely. There is no examiner to persuade — there is a scoring engine with known preferences around fluency, pronunciation and content coverage. Students who learn what it rewards tend to move fast.',
    format: [
      { section: 'Speaking & Writing', detail: 'A combined section — read aloud, describe, summarise, essay.' },
      { section: 'Reading', detail: 'Multiple choice, re-ordering and fill-in-the-blanks.' },
      { section: 'Listening', detail: 'Summarise spoken text, dictation and comprehension items.' },
      { section: 'Scoring', detail: 'Computer-marked, with results typically returned quickly.' },
    ],
    prep: [
      {
        title: 'Train for the scoring engine',
        body: 'Fluency and pronunciation carry disproportionate weight. We drill delivery, not just answers.',
      },
      {
        title: 'The high-yield task types',
        body: 'A handful of item types feed multiple skill scores at once. Those get worked first.',
      },
      { title: 'Timed full mocks', body: 'Complete attempts under the real clock with per-item accuracy tracking.' },
    ],
    keyDates: [],
  },
  {
    slug: 'yds',
    name: 'YDS',
    fullName: 'Yabancı Dil Bilgisi Seviye Tespit Sınavı',
    index: '06',
    hook: 'Turkey’s academic English exam: grammar-dense, vocabulary-hungry, deeply learnable.',
    purpose: 'Academic and professional English certification in Turkey.',
    audience: 'Students and professionals who need a Turkish-recognised English score.',
    intro:
      'YDS rewards a very particular kind of preparation. The question types repeat year after year, the vocabulary set is finite, and the grammar is testable. That makes it one of the most improvable exams we teach — if the study is systematic rather than enthusiastic.',
    format: [
      { section: 'Vocabulary & grammar', detail: 'Targeted single-question items.' },
      { section: 'Cloze & sentence completion', detail: 'Contextual gap-filling.' },
      { section: 'Translation', detail: 'Both directions, English and Turkish.' },
      { section: 'Reading & discourse', detail: 'Passages, dialogue completion, paragraph coherence.' },
    ],
    prep: [
      {
        title: 'A finite word list, spaced',
        body: 'The high-frequency YDS lexicon on a spaced-repetition schedule, drilled to recall rather than recognition.',
      },
      {
        title: 'Question-type sweeps',
        body: 'We work one question type to mastery across many past papers before moving on.',
      },
      { title: 'Timed past papers', body: 'Full sittings under exam conditions with per-type accuracy tracking.' },
    ],
    keyDates: [],
  },
];

export const examBySlug = (slug: string) => exams.find((e) => e.slug === slug);

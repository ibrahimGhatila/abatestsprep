/**
 * Copy for the account and legal route stubs.
 *
 * These pages exist so that every link in the nav and footer resolves. The
 * legal text itself is not drafted here — privacy, terms and cancellation
 * terms are legal commitments and must come from the client (ideally reviewed),
 * not from a website build.
 */

export const loginPage = {
  eyebrow: 'Student portal',
  title: 'Log in to your',
  markWord: 'portal.',
  lede: 'Your plan, your mock results and your next session — all in one place.',
  // TODO(engineering): no authentication is wired up. Decide on a provider
  // (NextAuth / Clerk / Supabase / the client's existing LMS), then replace
  // this stub with a real form and protected routes.
  todo: 'Authentication is not implemented. This page is a routing stub so the nav and footer links resolve — no credentials are collected, stored or transmitted.',
} as const;

export const legalPages = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy',
    markWord: 'Policy.',
    lede: 'How ABA Tests Prep collects, uses and stores personal data.',
    todo: 'Privacy policy text to be supplied by the client. It must reflect what is actually collected (booking form fields, diagnostic results, any analytics) and, for students in Türkiye and the EU, satisfy KVKK and GDPR respectively. Do not publish boilerplate.',
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of',
    markWord: 'Service.',
    lede: 'The terms you agree to when you book a programme with ABA Tests Prep.',
    todo: 'Terms of service to be supplied by the client, covering what Premium Prep includes, payment terms, scheduling and rescheduling, and the limits of any score expectation.',
  },
  cancellation: {
    eyebrow: 'Legal',
    title: 'Cancellation',
    markWord: 'Policy.',
    lede: 'Rescheduling, cancellations and refunds.',
    todo: 'Cancellation and refund policy to be supplied by the client — notice periods for rescheduling a session, and refund terms against the $5,000 programme fee.',
  },
} as const;

export type LegalKey = keyof typeof legalPages;

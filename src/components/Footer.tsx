import Link from 'next/link';
import Logo from '@/components/Logo';
import PetalDivider from '@/components/ui/PetalDivider';
import { contact, nav, site } from '@/content/site';
import { exams } from '@/content/exams';

const secondary = [
  { label: 'About', href: '/about' },
  { label: 'Method', href: '/method' },
  { label: 'Results', href: '/results' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Charcoal footer, laid out on the same 12-col grid as the rest of the page:
 * brand takes 5 columns, the three link stacks share the remaining 7. The
 * oversized wordmark at the base is the last editorial beat before the page
 * ends — a footer of link columns alone would fade out rather than close.
 */
export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-cream">
      <div className="shell py-[clamp(4rem,7vw,7rem)]">
        <div className="grid-12 gap-y-14">
          <div className="col-span-4 md:col-span-5">
            <Logo tone="dark" />
            <p className="mt-7 max-w-[26ch] font-display text-2xl leading-snug text-cream/85">{site.positioning}</p>
            <p className="mt-5 max-w-measure text-sm leading-relaxed text-cream/55">
              Exam preparation for students heading to global universities.
            </p>
          </div>

          <nav aria-label="Footer" className="col-span-2 md:col-span-2 md:col-start-7">
            <h2 className="font-brand text-eyebrow font-semibold uppercase text-cream/40">Explore</h2>
            <ul className="mt-6 space-y-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
              {secondary.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-2">
            <h2 className="font-brand text-eyebrow font-semibold uppercase text-cream/40">Exams</h2>
            <ul className="mt-6 space-y-3.5">
              {exams.map((exam) => (
                <li key={exam.slug}>
                  <FooterLink href={`/exams/${exam.slug}`}>{exam.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-3">
            <h2 className="font-brand text-eyebrow font-semibold uppercase text-cream/40">Contact</h2>
            <ul className="mt-6 space-y-3.5">
              <li>
                <FooterLink href={contact.instagramUrl} external>
                  Instagram {contact.instagramHandle}
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`mailto:${contact.email}`}>{contact.email}</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Book a free level analysis</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <PetalDivider tone="cream" className="mt-20" />

        {/* Oversized wordmark: the closing gesture. Clipped by the shell on
            purpose so it reads as a printed edge rather than a centred logo. */}
        <div aria-hidden="true" className="mt-10 overflow-hidden">
          <span className="block font-display text-[clamp(4rem,17vw,14rem)] leading-[0.8] tracking-[-0.04em] text-cream/10">
            abatestsprep
          </span>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-brand uppercase tracking-[0.14em]">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    'group relative inline-block text-sm text-cream/70 transition-colors duration-300 hover:text-cream';
  const underline = (
    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-amber transition-transform duration-500 ease-expo group-hover:origin-left group-hover:scale-x-100" />
  );

  if (external || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        data-cursor="link"
        className={className}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link href={href} data-cursor="link" className={className}>
      {children}
      {underline}
    </Link>
  );
}

import Link from 'next/link';
import Logo from '@/components/Logo';
import SocialIcon, { type SocialIconName } from '@/components/ui/SocialIcon';
import { contact, cta, legalNav, nav, site, socials } from '@/content/site';
import { exams } from '@/content/exams';

/**
 * Charcoal footer, on the same 12-col grid as the rest of the page.
 *
 * Layout: brand in columns 1–4, then four two-column link stacks filling 5–12
 * exactly. Contact details live inside the brand column rather than in a row
 * of their own — as a separate row they sat marooned between the columns and
 * the wordmark with a band of empty charcoal on either side.
 *
 * "Log in" is the last item in Explore rather than its own headed column. As a
 * one-link column under a "Students" heading it read as an orphan and threw
 * the four stacks out of balance.
 *
 * The wordmark at the base is clipped by the shell on purpose — a printed
 * edge, not a centred logo. It is deliberately restrained: at display scale it
 * stopped reading as a watermark and started reading as a wall.
 */
export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-charcoal text-cream">
      <div className="shell relative pb-8 pt-[clamp(3rem,5vw,4.5rem)]">
        <div className="grid-12 gap-y-12">
          {/* Brand */}
          <div className="col-span-4 md:col-span-4">
            <Logo tone="dark" />
            <p className="mt-6 max-w-[20ch] text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-cream">
              {site.positioning}
            </p>
            <p className="mt-4 max-w-measure text-sm leading-[1.6] text-cream/55">
              Exam preparation for students heading to global universities.
            </p>

            <ul className="mt-7 space-y-2.5">
              <li>
                <FooterLink href={`mailto:${contact.email}`}>{contact.email}</FooterLink>
              </li>
              <li>
                <FooterLink href={contact.instagramUrl} external>
                  {contact.instagramHandle}
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Four two-column stacks fill 5–12 exactly. */}
          <nav aria-label="Explore" className="col-span-2 md:col-span-2 md:col-start-5">
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-5 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
              <li>
                <FooterLink href={cta.login.href}>{cta.login.label}</FooterLink>
              </li>
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-2">
            <FooterHeading>Exams</FooterHeading>
            <ul className="mt-5 space-y-2.5">
              {exams.map((exam) => (
                <li key={exam.slug}>
                  <FooterLink href={`/exams/${exam.slug}`}>{exam.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <FooterHeading>Legal</FooterHeading>
            <ul className="mt-5 space-y-2.5">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <FooterHeading>Follow</FooterHeading>
            <ul className="mt-5 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="group flex items-center gap-2.5 text-sm text-cream/70 transition-colors duration-200 hover:text-cream"
                  >
                    <SocialIcon name={social.icon as SocialIconName} className="h-4 w-4 shrink-0" />
                    <span className="relative">
                      {social.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-orange transition-transform duration-200 ease-snap group-hover:origin-left group-hover:scale-x-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing wordmark: sized to sit under the columns as a band, not to
            dominate them. `select-none` because it is decoration, not copy. */}
        <div aria-hidden="true" className="mt-14 select-none overflow-hidden">
          <span className="block whitespace-nowrap text-[clamp(2.6rem,15.2vw,13.5rem)] font-black leading-[0.78] tracking-[-0.055em] text-cream/[0.06]">
            abatestsprep
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t-2 border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-semibold uppercase tracking-[0.12em]">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-eyebrow font-semibold uppercase text-cream/40">{children}</h2>;
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
  const className = 'group relative inline-block text-sm text-cream/70 transition-colors duration-200 hover:text-cream';
  const underline = (
    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-orange transition-transform duration-200 ease-snap group-hover:origin-left group-hover:scale-x-100" />
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

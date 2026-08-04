import Link from 'next/link';
import Logo from '@/components/Logo';
import SocialIcon, { type SocialIconName } from '@/components/ui/SocialIcon';
import PetalWatermark from '@/components/ui/PetalWatermark';
import { contact, cta, legalNav, nav, site, socials } from '@/content/site';
import { exams } from '@/content/exams';

/**
 * Charcoal footer on the same 12-col grid as the rest of the page.
 *
 * The logo runs in its `dark` tone here — cream tile, orange mark — because an
 * orange tile on charcoal loses its edge. Log in appears in its own right-hand
 * column as well as in the nav, since a returning student arriving at the
 * bottom of the page shouldn't have to scroll back up.
 *
 * The oversized wordmark at the base is clipped by the shell on purpose: it
 * reads as a printed edge rather than a centred logo, and it's the last beat
 * before the page ends.
 */
export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-charcoal text-cream">
      <PetalWatermark tone="orange" size="clamp(20rem,36vw,32rem)" className="-right-24 top-10" />

      <div className="shell relative py-[clamp(3.5rem,6vw,6rem)]">
        <div className="grid-12 gap-y-12">
          <div className="col-span-4 md:col-span-4">
            <Logo tone="dark" />
            <p className="mt-7 max-w-[22ch] text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] text-cream">
              {site.positioning}
            </p>
            <p className="mt-5 max-w-measure text-sm leading-[1.6] text-cream/55">
              Exam preparation for students heading to global universities.
            </p>
          </div>

          {/* Brand takes 4, then four 2-col link stacks fill 5–12 exactly. */}
          <nav aria-label="Explore" className="col-span-2 md:col-span-2 md:col-start-5">
            <h2 className="text-eyebrow font-semibold uppercase text-cream/40">Explore</h2>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-2">
            <h2 className="text-eyebrow font-semibold uppercase text-cream/40">Exams</h2>
            <ul className="mt-6 space-y-3">
              {exams.map((exam) => (
                <li key={exam.slug}>
                  <FooterLink href={`/exams/${exam.slug}`}>{exam.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h2 className="text-eyebrow font-semibold uppercase text-cream/40">Legal</h2>
            <ul className="mt-6 space-y-3">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h2 className="text-eyebrow font-semibold uppercase text-cream/40">Follow</h2>
            <ul className="mt-6 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="group flex items-center gap-2.5 text-sm text-cream/70 transition-colors duration-200 hover:text-cream"
                  >
                    <SocialIcon name={social.icon as SocialIconName} className="h-[1.05rem] w-[1.05rem] shrink-0" />
                    <span className="relative">
                      {social.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-orange transition-transform duration-200 ease-snap group-hover:origin-left group-hover:scale-x-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-9 text-eyebrow font-semibold uppercase text-cream/40">Students</h2>
            <p className="mt-4">
              <FooterLink href={cta.login.href}>{cta.login.label}</FooterLink>
            </p>
          </div>
        </div>

        {/* Direct contact, kept out of the link columns so it isn't skimmed past. */}
        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t-2 border-cream/15 pt-8 text-sm">
          <FooterLink href={`mailto:${contact.email}`}>{contact.email}</FooterLink>
          <FooterLink href={contact.instagramUrl} external>
            {contact.instagramHandle}
          </FooterLink>
        </div>

        <div aria-hidden="true" className="mt-12 overflow-hidden">
          <span className="block text-[clamp(3.5rem,16vw,13rem)] font-black leading-[0.8] tracking-[-0.05em] text-cream/[0.07]">
            abatestsprep
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-semibold uppercase tracking-[0.12em]">{site.domain}</p>
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

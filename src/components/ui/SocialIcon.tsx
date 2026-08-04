/**
 * Brand glyphs for the footer, drawn inline.
 *
 * Simplified single-path marks rather than the official multi-colour logos —
 * they need to sit at 18px on charcoal and inherit `currentColor`. Each is
 * decorative; the accessible name comes from the surrounding link text.
 */
export type SocialIconName = 'instagram' | 'tiktok' | 'linkedin' | 'threads';

export default function SocialIcon({ name, className = '' }: { name: SocialIconName; className?: string }) {
  const common = {
    viewBox: '0 0 24 24',
    className,
    'aria-hidden': true as const,
    focusable: 'false' as const,
  };

  switch (name) {
    case 'instagram':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.5 2h-2.9v13.2a2.6 2.6 0 1 1-2.1-2.55V9.6a5.7 5.7 0 1 0 5 5.65V8.9a6.6 6.6 0 0 0 3.8 1.2V7.2a3.8 3.8 0 0 1-3.8-3.8V2Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} fill="currentColor">
          <path d="M4.5 3a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM3 8.4h3V21H3V8.4ZM9 8.4h2.9v1.7h.05c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.65 2 3.65 4.6V21h-3v-5.6c0-1.35-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3V21H9V8.4Z" />
        </svg>
      );
    case 'threads':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <path d="M12.2 21c-4.9 0-8-3.4-8-9s3.2-9 8-9c3.5 0 5.9 1.6 6.9 4.3" />
          <path d="M12.6 16.6c-1.9 0-3.2-.9-3.2-2.3 0-1.5 1.4-2.4 3.4-2.4 3 0 4.6 1.4 4.6 3.6 0 2.4-1.9 4-4.5 4" />
          <path d="M13 11.9c2.9 0 4.4 1.3 4.4 3.5" />
        </svg>
      );
  }
}

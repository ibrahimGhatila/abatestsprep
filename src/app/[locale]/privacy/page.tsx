import type { Metadata } from 'next';
import LegalPage, { legalMetadata } from '@/components/LegalPage';
import type { Locale } from '@/content/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return legalMetadata(locale, 'privacy');
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <LegalPage locale={locale} which="privacy" />;
}

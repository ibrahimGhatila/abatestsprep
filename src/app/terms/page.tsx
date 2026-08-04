import type { Metadata } from 'next';
import LegalPage, { legalMetadata } from '@/components/LegalPage';

export const metadata: Metadata = legalMetadata('terms');

export default function Page() {
  return <LegalPage which="terms" />;
}

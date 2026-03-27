import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ConvertMaster - Read our terms and conditions for using our free unit conversion tools.',
};

export default function TermsPage() {
  return <TermsClient />;
}

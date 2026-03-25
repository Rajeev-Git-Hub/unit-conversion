import { Metadata } from 'next';
import DevToolsPageClient from './DevToolsPageClient';

export const metadata: Metadata = {
  title: 'Developer Tools | ConvertMaster',
  description: 'Free online developer tools including JSON formatter, Base64 encoder, URL encoder, timestamp converter, and more.',
  keywords: ['developer tools', 'json formatter', 'base64 encoder', 'url encoder', 'timestamp converter', 'web development tools'],
  openGraph: {
    title: 'Developer Tools',
    description: 'Free online developer tools for web development',
    type: 'website',
  },
};

export default function DevToolsPage() {
  return <DevToolsPageClient />;
}

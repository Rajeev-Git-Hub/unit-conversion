import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Unit Converters – 50+ Free Conversion Tools | ConvertMaster',
  description: 'Browse all 50+ free unit converters. Convert length, weight, temperature, area, volume, speed, data storage, and more. Fast, accurate, and easy to use.',
  keywords: ['all converters', 'unit converter tools', 'conversion calculator', 'metric converter', 'imperial converter', 'online converter'],
};

export default function AllConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

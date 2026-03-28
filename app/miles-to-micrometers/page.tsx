import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to Micrometers Converter – mi to μm | Free Tool',
  description: 'Free miles to micrometers converter. Convert mi to μm instantly with accurate results.',
  keywords: 'miles to micrometers, mi to μm, convert miles to micrometers, length converter',
  openGraph: {
    title: 'Miles to Micrometers Converter – mi to μm',
    description: 'Convert miles to micrometers instantly with accurate results',
    type: 'website',
  },
};

export default function MilesToUmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Miles to Micrometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert miles to micrometers instantly. 1 mi = 1.6B μm.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="micrometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

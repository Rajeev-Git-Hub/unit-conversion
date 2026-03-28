import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to Feet Converter – mi to ft | Free Tool',
  description: 'Free miles to feet converter. Convert mi to ft instantly with accurate results.',
  keywords: 'miles to feet, mi to ft, convert miles to feet, length converter',
  openGraph: {
    title: 'Miles to Feet Converter – mi to ft',
    description: 'Convert miles to feet instantly with accurate results',
    type: 'website',
  },
};

export default function MilesToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Miles to Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert miles to feet instantly. 1 mi = 5,280 ft.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Decimeters to Kilometers Converter – dm to km | Free Tool',
  description: 'Free decimeters to kilometers converter. Convert dm to km instantly with accurate results.',
  keywords: 'decimeters to kilometers, dm to km, convert decimeters to kilometers, length converter',
  openGraph: {
    title: 'Decimeters to Kilometers Converter – dm to km',
    description: 'Convert decimeters to kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function DmToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Decimeters to Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert decimeters to kilometers instantly. 10,000 dm = 1 km.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="decimeter" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

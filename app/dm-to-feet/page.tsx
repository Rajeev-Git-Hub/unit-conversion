import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Decimeters to Feet Converter – dm to ft | Free Tool',
  description: 'Free decimeters to feet converter. Convert dm to ft instantly with accurate results.',
  keywords: 'decimeters to feet, dm to ft, convert decimeters to feet, length converter',
  openGraph: {
    title: 'Decimeters to Feet Converter – dm to ft',
    description: 'Convert decimeters to feet instantly with accurate results',
    type: 'website',
  },
};

export default function DmToFeetPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Decimeters to Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert decimeters to feet instantly. 1 dm = 0.328 ft.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="decimeter" defaultTo="foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

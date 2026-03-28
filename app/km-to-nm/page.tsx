import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilometers to Nanometers Converter – km to nm | Free Tool',
  description: 'Free kilometers to nanometers converter. Convert km to nm instantly with accurate results.',
  keywords: 'kilometers to nanometers, km to nm, convert kilometers to nanometers, length converter',
  openGraph: {
    title: 'Kilometers to Nanometers Converter – km to nm',
    description: 'Convert kilometers to nanometers instantly with accurate results',
    type: 'website',
  },
};

export default function KmToNmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Kilometers to Nanometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert kilometers to nanometers instantly. 1 km = 1,000,000,000,000 nm.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="kilometer" defaultTo="nanometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

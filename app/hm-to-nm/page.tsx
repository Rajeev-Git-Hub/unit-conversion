import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectometers to Nanometers Converter – hm to nm | Free Tool',
  description: 'Free hectometers to nanometers converter. Convert hm to nm instantly with accurate results.',
  keywords: 'hectometers to nanometers, hm to nm, convert hectometers to nanometers, length converter',
  openGraph: {
    title: 'Hectometers to Nanometers Converter – hm to nm',
    description: 'Convert hectometers to nanometers instantly with accurate results',
    type: 'website',
  },
};

export default function HmToNmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hectometers to Nanometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert hectometers to nanometers instantly. 1 hm = 100,000,000,000 nm.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="hectometer" defaultTo="nanometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hectometers to Dekameters Converter – hm to dam | Free Tool',
  description: 'Free hectometers to dekameters converter. Convert hm to dam instantly with accurate results.',
  keywords: 'hectometers to dekameters, hm to dam, convert hectometers to dekameters, length converter',
  openGraph: {
    title: 'Hectometers to Dekameters Converter – hm to dam',
    description: 'Convert hectometers to dekameters instantly with accurate results',
    type: 'website',
  },
};

export default function HmToDamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hectometers to Dekameters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert hectometers to dekameters instantly. 1 hm = 10 dam.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="hectometer" defaultTo="dekameter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

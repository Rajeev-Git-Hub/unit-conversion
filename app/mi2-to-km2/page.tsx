import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Miles to Square Kilometers Converter – mi² to km² | Free Tool',
  description: 'Free square miles to square kilometers converter. Convert mi² to km² instantly with accurate results.',
  keywords: 'square miles to square kilometers, mi² to km², convert square miles to square kilometers, area converter',
  openGraph: {
    title: 'Square Miles to Square Kilometers Converter – mi² to km²',
    description: 'Convert square miles to square kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function Mi2ToKm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Square Miles to Square Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert square miles to square kilometers instantly. 1 mi² = 2.59 km².
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-mile" defaultTo="square-kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

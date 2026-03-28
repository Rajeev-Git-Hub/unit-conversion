import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Meters to Acres Converter – m² to ac | Free Tool',
  description: 'Free square meters to acres converter. Convert m² to ac instantly with accurate results.',
  keywords: 'square meters to acres, m² to ac, convert square meters to acres, area converter',
  openGraph: {
    title: 'Square Meters to Acres Converter – m² to ac',
    description: 'Convert square meters to acres instantly with accurate results',
    type: 'website',
  },
};

export default function M2ToAcrePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Square Meters to Acres Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert square meters to acres instantly. 1 m² = 0.000247 ac.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-meter" defaultTo="acre" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

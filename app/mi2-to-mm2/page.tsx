import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Miles to Square Millimeters Converter – mi² to mm² | Free Tool',
  description: 'Free square miles to square millimeters converter. Convert mi² to mm² instantly with accurate results.',
  keywords: 'square miles to square millimeters, mi² to mm², convert square miles to square millimeters, area converter',
  openGraph: {
    title: 'Square Miles to Square Millimeters Converter – mi² to mm²',
    description: 'Convert square miles to square millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function Mi2ToMm2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Square Miles to Square Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert square miles to square millimeters instantly. 1 mi² = 2,590B mm².
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-mile" defaultTo="square-millimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

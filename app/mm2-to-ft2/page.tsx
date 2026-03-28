import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Millimeters to Square Feet Converter – mm² to ft² | Free Tool',
  description: 'Free square millimeters to square feet converter. Convert mm² to ft² instantly with accurate results.',
  keywords: 'square millimeters to square feet, mm² to ft², convert square millimeters to square feet, area converter',
  openGraph: {
    title: 'Square Millimeters to Square Feet Converter – mm² to ft²',
    description: 'Convert square millimeters to square feet instantly with accurate results',
    type: 'website',
  },
};

export default function Mm2ToFt2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Square Millimeters to Square Feet Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert square millimeters to square feet instantly. 1 mm² = 0.0000108 ft².
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-millimeter" defaultTo="square-foot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Square Kilometers to Square Yards Converter – km² to yd² | Free Tool',
  description: 'Free square kilometers to square yards converter. Convert km² to yd² instantly with accurate results.',
  keywords: 'square kilometers to square yards, km² to yd², convert square kilometers to square yards, area converter',
  openGraph: {
    title: 'Square Kilometers to Square Yards Converter – km² to yd²',
    description: 'Convert square kilometers to square yards instantly with accurate results',
    type: 'website',
  },
};

export default function Km2ToYd2Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Square Kilometers to Square Yards Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert square kilometers to square yards instantly. 1 km² = 1.196M yd².
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="area" defaultFrom="square-kilometer" defaultTo="square-yard" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

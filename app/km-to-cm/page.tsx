import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kilometers to Centimeters Converter – km to cm | Free Tool',
  description: 'Free kilometers to centimeters converter. Convert km to cm instantly with accurate results.',
  keywords: 'kilometers to centimeters, km to cm, convert kilometers to centimeters, length converter',
  openGraph: {
    title: 'Kilometers to Centimeters Converter – km to cm',
    description: 'Convert kilometers to centimeters instantly with accurate results',
    type: 'website',
  },
};

export default function KmToCmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Kilometers to Centimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert kilometers to centimeters instantly. 1 km = 100,000 cm.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="kilometer" defaultTo="centimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

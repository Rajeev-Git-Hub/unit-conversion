import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Inches to Kilometers Converter – in to km | Free Tool',
  description: 'Free inches to kilometers converter. Convert in to km instantly with accurate results.',
  keywords: 'inches to kilometers, in to km, convert inches to kilometers, length converter',
  openGraph: {
    title: 'Inches to Kilometers Converter – in to km',
    description: 'Convert inches to kilometers instantly with accurate results',
    type: 'website',
  },
};

export default function InchesToKmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Inches to Kilometers Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert inches to kilometers instantly. 1 in = 0.0000254 km.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="inch" defaultTo="kilometer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

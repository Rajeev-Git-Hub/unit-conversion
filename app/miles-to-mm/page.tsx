import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Miles to Millimeters Converter – mi to mm | Free Tool',
  description: 'Free miles to millimeters converter. Convert mi to mm instantly with accurate results.',
  keywords: 'miles to millimeters, mi to mm, convert miles to millimeters, length converter',
  openGraph: {
    title: 'Miles to Millimeters Converter – mi to mm',
    description: 'Convert miles to millimeters instantly with accurate results',
    type: 'website',
  },
};

export default function MilesToMmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Miles to Millimeters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert miles to millimeters instantly. 1 mi = 1,609,344 mm.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="mile" defaultTo="millimeter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

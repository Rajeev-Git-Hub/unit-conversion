import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Centimeters to Dekameters Converter – cm to dam | Free Tool',
  description: 'Free centimeters to dekameters converter. Convert cm to dam instantly with accurate results.',
  keywords: 'centimeters to dekameters, cm to dam, convert centimeters to dekameters, length converter',
  openGraph: {
    title: 'Centimeters to Dekameters Converter – cm to dam',
    description: 'Convert centimeters to dekameters instantly with accurate results',
    type: 'website',
  },
};

export default function CmToDamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Centimeters to Dekameters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert centimeters to dekameters instantly. 1,000 cm = 1 dam.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="centimeter" defaultTo="dekameter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

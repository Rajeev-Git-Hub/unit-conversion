import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Ounces to Milligrams Converter – oz to mg | Free Tool',
  description: 'Free ounces to milligrams converter. Convert oz to mg instantly with accurate results.',
  keywords: 'ounces to milligrams, oz to mg, convert ounces to milligrams, weight converter',
  openGraph: {
    title: 'Ounces to Milligrams Converter – oz to mg',
    description: 'Convert ounces to milligrams instantly with accurate results',
    type: 'website',
  },
};

export default function OunceToMgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ounces to Milligrams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert ounces to milligrams instantly. 1 oz = 28,350 mg.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="ounce" defaultTo="milligram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

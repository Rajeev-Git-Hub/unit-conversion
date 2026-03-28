import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Grams to Milligrams Converter – g to mg | Free Tool',
  description: 'Free grams to milligrams converter. Convert g to mg instantly with accurate results.',
  keywords: 'grams to milligrams, g to mg, convert grams to milligrams, weight converter',
  openGraph: {
    title: 'Grams to Milligrams Converter – g to mg',
    description: 'Convert grams to milligrams instantly with accurate results',
    type: 'website',
  },
};

export default function GToMgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Grams to Milligrams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert grams to milligrams instantly. 1 g = 1,000 mg.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="gram" defaultTo="milligram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

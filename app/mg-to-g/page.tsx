import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Milligrams to Grams Converter – mg to g | Free Tool',
  description: 'Free milligrams to grams converter. Convert mg to g instantly with accurate results.',
  keywords: 'milligrams to grams, mg to g, convert milligrams to grams, weight converter',
  openGraph: {
    title: 'Milligrams to Grams Converter – mg to g',
    description: 'Convert milligrams to grams instantly with accurate results',
    type: 'website',
  },
};

export default function MgToGPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Milligrams to Grams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert milligrams to grams instantly. 1,000 mg = 1 g.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="milligram" defaultTo="gram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

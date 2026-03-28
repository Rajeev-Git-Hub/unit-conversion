import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Pounds to US Tons Converter – lb to US ton | Free Tool',
  description: 'Free pounds to US tons converter. Convert lb to US ton instantly with accurate results.',
  keywords: 'pounds to us tons, lb to us ton, convert pounds to us tons, weight converter',
  openGraph: {
    title: 'Pounds to US Tons Converter – lb to US ton',
    description: 'Convert pounds to US tons instantly with accurate results',
    type: 'website',
  },
};

export default function PoundToUsTonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pounds to US Tons Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert pounds to US tons instantly. 1 lb = 0.0005 US ton.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="pound" defaultTo="us-ton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

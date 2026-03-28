import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Rankine to Kelvin Converter – °R to K | Free Tool',
  description: 'Free Rankine to Kelvin converter. Convert °R to K instantly with accurate temperature conversion results.',
  keywords: 'rankine to kelvin, °R to K, convert rankine to kelvin, temperature converter',
  openGraph: {
    title: 'Rankine to Kelvin Converter – °R to K',
    description: 'Convert rankine to kelvin instantly with accurate results',
    type: 'website',
  },
};

export default function RankineToKelvinPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Rankine to Kelvin Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert rankine to kelvin instantly. K = °R × 5/9.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="rankine" defaultTo="kelvin" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

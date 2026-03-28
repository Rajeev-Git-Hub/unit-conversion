import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Rankine to Celsius Converter – °R to °C | Free Tool',
  description: 'Free Rankine to Celsius converter. Convert °R to °C instantly with accurate temperature conversion results.',
  keywords: 'rankine to celsius, °R to °C, convert rankine to celsius, temperature converter',
  openGraph: {
    title: 'Rankine to Celsius Converter – °R to °C',
    description: 'Convert rankine to celsius instantly with accurate results',
    type: 'website',
  },
};

export default function RankineToCelsiusPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Rankine to Celsius Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert rankine to celsius instantly. °C = (°R − 491.67) × 5/9.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="rankine" defaultTo="celsius" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Réaumur to Celsius Converter – °Ré to °C | Free Tool',
  description: 'Free Réaumur to Celsius converter. Convert °Ré to °C instantly with accurate temperature conversion results.',
  keywords: 'réaumur to celsius, °Ré to °C, convert réaumur to celsius, temperature converter',
  openGraph: {
    title: 'Réaumur to Celsius Converter – °Ré to °C',
    description: 'Convert réaumur to celsius instantly with accurate results',
    type: 'website',
  },
};

export default function ReaumurToCelsiusPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Réaumur to Celsius Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert réaumur to celsius instantly. °C = °Ré × 5/4.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="reaumur" defaultTo="celsius" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

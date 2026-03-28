import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Celsius to Réaumur Converter – °C to °Ré | Free Tool',
  description: 'Free Celsius to Réaumur converter. Convert °C to °Ré instantly with accurate temperature conversion results.',
  keywords: 'celsius to réaumur, °C to °Ré, convert celsius to réaumur, temperature converter',
  openGraph: {
    title: 'Celsius to Réaumur Converter – °C to °Ré',
    description: 'Convert celsius to réaumur instantly with accurate results',
    type: 'website',
  },
};

export default function CelsiusToReaumurPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Celsius to Réaumur Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert celsius to réaumur instantly. °Ré = °C × 4/5.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="celsius" defaultTo="reaumur" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

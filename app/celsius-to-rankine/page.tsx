import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Celsius to Rankine Converter – °C to °R | Free Tool',
  description: 'Free Celsius to Rankine converter. Convert °C to °R instantly with accurate temperature conversion results.',
  keywords: 'celsius to rankine, °C to °R, convert celsius to rankine, temperature converter',
  openGraph: {
    title: 'Celsius to Rankine Converter – °C to °R',
    description: 'Convert celsius to rankine instantly with accurate results',
    type: 'website',
  },
};

export default function CelsiusToRankinePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Celsius to Rankine Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert celsius to rankine instantly. °R = (°C + 273.15) × 9/5.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="celsius" defaultTo="rankine" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Réaumur to Fahrenheit Converter – °Ré to °F | Free Tool',
  description: 'Free Réaumur to Fahrenheit converter. Convert °Ré to °F instantly with accurate temperature conversion results.',
  keywords: 'réaumur to fahrenheit, °Ré to °F, convert réaumur to fahrenheit, temperature converter',
  openGraph: {
    title: 'Réaumur to Fahrenheit Converter – °Ré to °F',
    description: 'Convert réaumur to fahrenheit instantly with accurate results',
    type: 'website',
  },
};

export default function ReaumurToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Réaumur to Fahrenheit Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert réaumur to fahrenheit instantly. °F = °Ré × 9/4 + 32.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="reaumur" defaultTo="fahrenheit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

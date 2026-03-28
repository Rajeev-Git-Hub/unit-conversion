import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Kelvin to Rankine Converter – K to °R | Free Tool',
  description: 'Free Kelvin to Rankine converter. Convert K to °R instantly with accurate temperature conversion results.',
  keywords: 'kelvin to rankine, K to °R, convert kelvin to rankine, temperature converter',
  openGraph: {
    title: 'Kelvin to Rankine Converter – K to °R',
    description: 'Convert kelvin to rankine instantly with accurate results',
    type: 'website',
  },
};

export default function KelvinToRankinePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Kelvin to Rankine Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert kelvin to rankine instantly. °R = K × 9/5.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="kelvin" defaultTo="rankine" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

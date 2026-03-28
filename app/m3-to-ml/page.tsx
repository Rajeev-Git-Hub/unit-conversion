import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Cubic Meters to Milliliters Converter – m³ to mL | Free Tool',
  description: 'Free cubic meters to milliliters converter. Convert m³ to mL instantly with accurate results.',
  keywords: 'cubic meters to milliliters, m³ to mL, convert cubic meters to milliliters, volume converter',
  openGraph: {
    title: 'Cubic Meters to Milliliters Converter – m³ to mL',
    description: 'Convert cubic meters to milliliters instantly with accurate results',
    type: 'website',
  },
};

export default function M3ToMlPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cubic Meters to Milliliters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert cubic meters to milliliters instantly. 1 m³ = 1M mL.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="cubic-meter" defaultTo="milliliter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Fluid Ounces to Liters Converter – fl oz to L | Free Tool',
  description: 'Free fluid ounces to liters converter. Convert fl oz to L instantly with accurate results.',
  keywords: 'fluid ounces to liters, fl oz to L, convert fluid ounces to liters, volume converter',
  openGraph: {
    title: 'Fluid Ounces to Liters Converter – fl oz to L',
    description: 'Convert fluid ounces to liters instantly with accurate results',
    type: 'website',
  },
};

export default function FlozToLiterPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Fluid Ounces to Liters Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert fluid ounces to liters instantly. 1 fl oz = 0.0296 L.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="fluid-ounce" defaultTo="liter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Cubic Inches to Fluid Ounces Converter – in³ to fl oz | Free Tool',
  description: 'Free cubic inches to fluid ounces converter. Convert in³ to fl oz instantly with accurate results.',
  keywords: 'cubic inches to fluid ounces, in³ to fl oz, convert cubic inches to fluid ounces, volume converter',
  openGraph: {
    title: 'Cubic Inches to Fluid Ounces Converter – in³ to fl oz',
    description: 'Convert cubic inches to fluid ounces instantly with accurate results',
    type: 'website',
  },
};

export default function In3ToFlozPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cubic Inches to Fluid Ounces Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert cubic inches to fluid ounces instantly. 1 in³ = 0.55 fl oz.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="cubic-inch" defaultTo="fluid-ounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

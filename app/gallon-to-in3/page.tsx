import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Gallons to Cubic Inches Converter – gal to in³ | Free Tool',
  description: 'Free gallons to cubic inches converter. Convert gal to in³ instantly with accurate results.',
  keywords: 'gallons to cubic inches, gal to in³, convert gallons to cubic inches, volume converter',
  openGraph: {
    title: 'Gallons to Cubic Inches Converter – gal to in³',
    description: 'Convert gallons to cubic inches instantly with accurate results',
    type: 'website',
  },
};

export default function GallonToIn3Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gallons to Cubic Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert gallons to cubic inches instantly. 1 gal = 231 in³.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="volume" defaultFrom="gallon" defaultTo="cubic-inch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

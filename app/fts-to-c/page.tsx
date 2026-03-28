import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Feet per Second to Speed of Light Converter – ft/s to c | Free Tool',
  description: 'Free feet per second to speed of light converter. Convert ft/s to c instantly with accurate results.',
  keywords: 'ft/s to speed of light, feet per second to c, convert ft/s to c, speed converter',
  openGraph: {
    title: 'Feet per Second to Speed of Light Converter – ft/s to c',
    description: 'Convert ft/s to speed of light instantly with accurate results',
    type: 'website',
  },
};

export default function FtsToCPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Feet per Second to Speed of Light Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert ft/s to speed of light instantly. 1 ft/s = 0.00000000102 c.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="fts" defaultTo="c" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

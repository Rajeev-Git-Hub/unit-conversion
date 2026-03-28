import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Inches to Yards Converter – in to yd | Free Tool',
  description: 'Free inches to yards converter. Convert in to yd instantly with accurate results.',
  keywords: 'inches to yards, in to yd, convert inches to yards, length converter',
  openGraph: {
    title: 'Inches to Yards Converter – in to yd',
    description: 'Convert inches to yards instantly with accurate results',
    type: 'website',
  },
};

export default function InchesToYardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Inches to Yards Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert inches to yards instantly. 36 in = 1 yd.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="inch" defaultTo="yard" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

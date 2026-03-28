import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Feet to Yards Converter – ft to yd | Free Tool',
  description: 'Free feet to yards converter. Convert ft to yd instantly with accurate results.',
  keywords: 'feet to yards, ft to yd, convert feet to yards, length converter',
  openGraph: {
    title: 'Feet to Yards Converter – ft to yd',
    description: 'Convert feet to yards instantly with accurate results',
    type: 'website',
  },
};

export default function FeetToYardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Feet to Yards Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert feet to yards instantly. 3 ft = 1 yd.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" defaultFrom="foot" defaultTo="yard" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

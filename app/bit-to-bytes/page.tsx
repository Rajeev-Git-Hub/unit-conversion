import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bits to Bytes Converter – bit to B | Free Tool',
  description: 'Free bits to bytes converter. Convert bit to B instantly with accurate results.',
  keywords: 'bits to bytes, bit to B, convert bits to bytes, data storage converter',
  openGraph: {
    title: 'Bits to Bytes Converter – bit to B',
    description: 'Convert bits to bytes instantly with accurate results',
    type: 'website',
  },
};

export default function BitToBytesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bits to Bytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert bits to bytes instantly. 1 byte = 8 bits.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bit" defaultTo="bytes" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

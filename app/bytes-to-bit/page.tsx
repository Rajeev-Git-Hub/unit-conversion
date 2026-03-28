import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Bytes to Bits Converter – B to bit | Free Tool',
  description: 'Free bytes to bits converter. Convert B to bit instantly with accurate results.',
  keywords: 'bytes to bits, B to bit, convert bytes to bits, data storage converter',
  openGraph: {
    title: 'Bytes to Bits Converter – B to bit',
    description: 'Convert bytes to bits instantly with accurate results',
    type: 'website',
  },
};

export default function BytesToBitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bytes to Bits Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert bytes to bits instantly. 1 byte = 8 bits.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="bytes" defaultTo="bit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

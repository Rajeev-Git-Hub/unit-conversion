import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Knots to MPH Converter - Convert Knots to Miles per Hour',
  description: 'Free knots to mph converter. Convert knots to miles per hour instantly. 1 knot = 1.15078 mph. Accurate results, conversion formula, and practical examples.',
  keywords: 'knots to mph, convert knots to mph, nautical miles per hour to mph, aviation speed converter, marine speed converter',
  openGraph: {
    title: 'Knots to MPH Converter',
    description: 'Convert knots to mph instantly',
    type: 'website',
  },
};

export default function KnotsToMphPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Knots to MPH Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert knots to miles per hour instantly. 1 knot = 1.15078 mph.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="speed" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">mph = knots × 1.15078</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply knots by 1.15078 to get mph</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { knots: '5 knots', mph: '5.8 mph' },
              { knots: '10 knots', mph: '11.5 mph' },
              { knots: '15 knots', mph: '17.3 mph' },
              { knots: '20 knots', mph: '23.0 mph' },
              { knots: '25 knots', mph: '28.8 mph' },
              { knots: '30 knots', mph: '34.5 mph' },
              { knots: '40 knots', mph: '46.0 mph' },
              { knots: '50 knots', mph: '57.5 mph' },
              { knots: '1 knot', mph: '1.15 mph' },
              { knots: '100 knots', mph: '115.1 mph' },
              { knots: '150 knots', mph: '172.6 mph' },
              { knots: '200 knots', mph: '230.2 mph' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-orange-600">{item.knots}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/mph-to-knots/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">MPH to Knots</Link>
            <Link href="/knots-to-kmh/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Knots to KMH</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

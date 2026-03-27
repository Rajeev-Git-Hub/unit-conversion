import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MPH to Knots Converter - Convert Miles per Hour to Knots',
  description: 'Free mph to knots converter. Convert miles per hour to knots instantly. 1 mph = 0.868976 knots. Accurate results, conversion formula, and practical examples.',
  keywords: 'mph to knots, convert mph to knots, miles per hour to nautical miles per hour, aviation speed converter, marine speed converter',
  openGraph: {
    title: 'MPH to Knots Converter',
    description: 'Convert mph to knots instantly',
    type: 'website',
  },
};

export default function MphToKnotsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MPH to Knots Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert miles per hour to knots instantly. 1 mph = 0.868976 knots.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="mph" defaultTo="knots" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">knots = mph × 0.868976</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply mph by 0.868976 to get knots</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mph: '10 mph', knots: '8.7 knots' },
              { mph: '20 mph', knots: '17.4 knots' },
              { mph: '30 mph', knots: '26.1 knots' },
              { mph: '40 mph', knots: '34.8 knots' },
              { mph: '50 mph', knots: '43.4 knots' },
              { mph: '60 mph', knots: '52.1 knots' },
              { mph: '70 mph', knots: '60.8 knots' },
              { mph: '80 mph', knots: '69.5 knots' },
              { mph: '5 mph', knots: '4.3 knots' },
              { mph: '25 mph', knots: '21.7 knots' },
              { mph: '55 mph', knots: '47.8 knots' },
              { mph: '100 mph', knots: '86.9 knots' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-orange-600">{item.mph}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.knots}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/knots-to-mph/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Knots to MPH</Link>
            <Link href="/mph-to-kmh/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">MPH to KMH</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

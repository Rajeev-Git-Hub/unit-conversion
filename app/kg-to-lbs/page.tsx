import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KG to LBS Converter - Convert Kilograms to Pounds',
  description: 'Free kg to lbs converter. Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs. Accurate results, conversion formula, and practical examples.',
  keywords: 'kg to lbs, kilograms to pounds, kg to pounds, convert kg to lbs, kg lbs converter',
  openGraph: {
    title: 'KG to LBS Converter',
    description: 'Convert kilograms to pounds instantly',
    type: 'website',
  },
};

export default function KgToLbsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KG to LBS Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="weight" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">pounds = kg × 2.20462</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply by approximately 2.2 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { kg: '1 kg', lbs: '2.20 lbs' },
              { kg: '5 kg', lbs: '11.02 lbs' },
              { kg: '10 kg', lbs: '22.05 lbs' },
              { kg: '25 kg', lbs: '55.12 lbs' },
              { kg: '50 kg', lbs: '110.23 lbs' },
              { kg: '70 kg', lbs: '154.32 lbs' },
              { kg: '100 kg', lbs: '220.46 lbs' },
              { kg: '0.5 kg', lbs: '1.10 lbs' },
              { kg: '2.5 kg', lbs: '5.51 lbs' },
              { kg: '75 kg', lbs: '165.35 lbs' },
              { kg: '80 kg', lbs: '176.37 lbs' },
              { kg: '90 kg', lbs: '198.42 lbs' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.kg}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.lbs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/lbs-to-kg/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">LBS to KG</Link>
            <Link href="/kg-to-grams/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">KG to Grams</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KG to Grams Converter - Convert Kilograms to Grams',
  description: 'Free kg to grams converter. Convert kilograms to grams instantly. 1 kg = 1000 grams. Accurate results, conversion formula, and practical examples.',
  keywords: 'kg to grams, kilograms to grams, kg to g, convert kg to grams, kg grams converter',
  openGraph: {
    title: 'KG to Grams Converter',
    description: 'Convert kilograms to grams instantly',
    type: 'website',
  },
};

export default function KgToGramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KG to Grams Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert kilograms to grams instantly. 1 kg = 1000 grams.
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
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">grams = kg × 1000</p>
              <p className="text-gray-600 dark:text-gray-300">Simply multiply kilograms by 1000 to get grams</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { kg: '0.1 kg', g: '100 g' },
              { kg: '0.5 kg', g: '500 g' },
              { kg: '1 kg', g: '1000 g' },
              { kg: '2 kg', g: '2000 g' },
              { kg: '5 kg', g: '5000 g' },
              { kg: '10 kg', g: '10000 g' },
              { kg: '0.25 kg', g: '250 g' },
              { kg: '0.75 kg', g: '750 g' },
              { kg: '1.5 kg', g: '1500 g' },
              { kg: '2.5 kg', g: '2500 g' },
              { kg: '3 kg', g: '3000 g' },
              { kg: '50 kg', g: '50000 g' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-green-600">{item.kg}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/grams-to-kg/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Grams to KG</Link>
            <Link href="/kg-to-lbs/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">KG to LBS</Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

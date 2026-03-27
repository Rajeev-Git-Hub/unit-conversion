import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'CM to Inches Converter - Convert Centimeters to Inches',
  description: 'Free CM to inches converter. Convert centimeters to inches instantly. 1 cm = 0.3937 inches. Accurate results, conversion formula, and practical examples.',
  keywords: 'cm to inches, centimeters to inches, cm to in, convert cm to inches, cm inches converter',
  openGraph: {
    title: 'CM to Inches Converter',
    description: 'Convert centimeters to inches instantly',
    type: 'website',
  },
};

export default function CmToInchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CM to Inches Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert centimeters to inches instantly. 1 cm = 0.3937 inches.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" />
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Formula */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            CM to Inches Conversion Formula
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                inches = centimeters × 0.3937
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Or divide by 2.54: inches = centimeters ÷ 2.54
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common CM to Inches Conversions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { cm: '1 cm', inch: '0.39 in' },
              { cm: '5 cm', inch: '1.97 in' },
              { cm: '10 cm', inch: '3.94 in' },
              { cm: '15 cm', inch: '5.91 in' },
              { cm: '20 cm', inch: '7.87 in' },
              { cm: '25 cm', inch: '9.84 in' },
              { cm: '30 cm', inch: '11.81 in' },
              { cm: '50 cm', inch: '19.69 in' },
              { cm: '100 cm', inch: '39.37 in' },
              { cm: '150 cm', inch: '59.06 in' },
              { cm: '200 cm', inch: '78.74 in' },
              { cm: '250 cm', inch: '98.43 in' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.cm}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.inch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Practical Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📏 Measuring Height</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A person who is 175 cm tall is approximately 5 feet 9 inches (68.9 inches).
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📐 Screen Size</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A 27 cm laptop screen is about 10.6 inches diagonally.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🖼️ Picture Frames</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A 30 × 40 cm photo frame equals approximately 11.8 × 15.7 inches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How many inches are in 1 cm?</h3>
              <p className="text-gray-600 dark:text-gray-300">1 centimeter equals approximately 0.3937 inches, or about 0.4 inches when rounded.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What is the formula to convert cm to inches?</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply centimeters by 0.3937, or divide by 2.54. Both give the same result.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How many cm are in an inch?</h3>
              <p className="text-gray-600 dark:text-gray-300">1 inch equals exactly 2.54 centimeters. This is the standard conversion factor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Need More Conversions?</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/inches-to-cm/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Inches to CM
            </Link>
            <Link href="/length-converter/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              All Length Converters
            </Link>
            <Link href="/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

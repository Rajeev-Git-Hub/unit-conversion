import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Celsius to Fahrenheit Converter - Convert C to F',
  description: 'Free Celsius to Fahrenheit converter. Convert C to F instantly. Formula: F = (C × 9/5) + 32. Accurate results and practical examples.',
  keywords: 'celsius to fahrenheit, c to f, convert celsius to fahrenheit, celsius fahrenheit converter, temperature converter',
  openGraph: {
    title: 'Celsius to Fahrenheit Converter',
    description: 'Convert Celsius to Fahrenheit instantly',
    type: 'website',
  },
};

export default function CelsiusToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Celsius to Fahrenheit Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert Celsius to Fahrenheit instantly. Formula: F = (C × 9/5) + 32
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">F = (C × 9/5) + 32</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply Celsius by 9/5, then add 32</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { c: '0°C', f: '32°F' },
              { c: '10°C', f: '50°F' },
              { c: '20°C', f: '68°F' },
              { c: '25°C', f: '77°F' },
              { c: '30°C', f: '86°F' },
              { c: '37°C', f: '98.6°F' },
              { c: '40°C', f: '104°F' },
              { c: '100°C', f: '212°F' },
              { c: '-10°C', f: '14°F' },
              { c: '-20°C', f: '-4°F' },
              { c: '-40°C', f: '-40°F' },
              { c: '15°C', f: '59°F' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-red-600">{item.c}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/fahrenheit-to-celsius/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Fahrenheit to Celsius</Link>
            <Link href="/celsius-to-kelvin/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Celsius to Kelvin</Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

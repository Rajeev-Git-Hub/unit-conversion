import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: '37 Celsius to Fahrenheit - Body Temperature Conversion',
  description: 'Convert 37°C to Fahrenheit. 37 degrees Celsius equals 98.6°F - normal human body temperature. Learn about body temperature scales.',
  keywords: '37 celsius to fahrenheit, 37 c to f, body temperature celsius to fahrenheit, 37 degrees celsius, normal body temperature',
  openGraph: {
    title: '37°C to Fahrenheit - Body Temperature',
    description: 'Convert 37°C to Fahrenheit - Normal body temperature',
    type: 'website',
  },
};

export default function Celsius37ToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">37°C to Fahrenheit</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              37 degrees Celsius equals 98.6°F - Normal human body temperature
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Body Temperature Guide</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🌡️ Normal Temperature</h3>
                <p className="text-gray-600 dark:text-gray-300">37°C (98.6°F) is considered normal body temperature. This can vary slightly from person to person.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🤒 Fever Range</h3>
                <p className="text-gray-600 dark:text-gray-300">38°C (100.4°F) and above indicates fever. Seek medical attention if temperature exceeds 39.4°C (103°F).</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🧊 Low Temperature</h3>
                <p className="text-gray-600 dark:text-gray-300">Below 36°C (96.8°F) may indicate hypothermia. Consult a doctor if body temperature drops significantly.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">⏰ Best Time to Check</h3>
                <p className="text-gray-600 dark:text-gray-300">Body temperature is lowest in the morning and highest in the late afternoon/evening.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Body Temperatures</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { c: '36°C', f: '96.8°F', note: 'Low normal' },
              { c: '36.5°C', f: '97.7°F', note: 'Normal' },
              { c: '37°C', f: '98.6°F', note: 'Normal' },
              { c: '37.5°C', f: '99.5°F', note: 'Elevated' },
              { c: '38°C', f: '100.4°F', note: 'Fever' },
              { c: '38.5°C', f: '101.3°F', note: 'Fever' },
              { c: '39°C', f: '102.2°F', note: 'High fever' },
              { c: '40°C', f: '104°F', note: 'Very high' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-red-600">{item.c}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.f}</p>
                <p className="text-sm text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/celsius-to-fahrenheit/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Celsius to Fahrenheit</Link>
            <Link href="/100-celsius-to-fahrenheit/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">100°C to Fahrenheit</Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

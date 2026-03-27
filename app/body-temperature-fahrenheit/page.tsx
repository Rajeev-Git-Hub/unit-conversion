import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Body Temperature in Fahrenheit - Normal & Fever Ranges',
  description: 'Body temperature guide in Fahrenheit. Normal body temperature is 98.6°F (37°C). Learn about fever ranges and temperature conversions.',
  keywords: 'body temperature fahrenheit, normal body temperature fahrenheit, fever temperature fahrenheit, 98.6 fahrenheit to celsius',
  openGraph: {
    title: 'Body Temperature Guide - Fahrenheit',
    description: 'Normal body temperature and fever ranges in Fahrenheit',
    type: 'website',
  },
};

export default function BodyTemperatureFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Body Temperature in Fahrenheit</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Normal body temperature: 98.6°F (37°C)
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
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">❄️ Low Temperature</h3>
                <p className="text-gray-600 dark:text-gray-300">Below 95°F (35°C) - Hypothermia. Seek immediate medical attention.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">✅ Normal Range</h3>
                <p className="text-gray-600 dark:text-gray-300">97-99°F (36.1-37.2°C) - Normal body temperature varies by person and time of day.</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">⚠️ Mild Fever</h3>
                <p className="text-gray-600 dark:text-gray-300">99-100.9°F (37.2-38.3°C) - Low-grade fever. Monitor and rest.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🤒 Fever</h3>
                <p className="text-gray-600 dark:text-gray-300">101-103°F (38.3-39.4°C) - Fever. Consider medical consultation.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🚨 High Fever</h3>
                <p className="text-gray-600 dark:text-gray-300">Above 103°F (39.4°C) - High fever. Seek medical attention immediately.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">⏰ Best Time</h3>
                <p className="text-gray-600 dark:text-gray-300">Temperature is lowest in morning (6-8 AM) and highest in evening (4-6 PM).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Body Temperature Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { f: '95°F', c: '35°C', note: 'Hypothermia' },
              { f: '97°F', c: '36.1°C', note: 'Low normal' },
              { f: '98.6°F', c: '37°C', note: 'Normal' },
              { f: '99.5°F', c: '37.5°C', note: 'Elevated' },
              { f: '100.4°F', c: '38°C', note: 'Fever' },
              { f: '101.3°F', c: '38.5°C', note: 'Fever' },
              { f: '102.2°F', c: '39°C', note: 'High fever' },
              { f: '104°F', c: '40°C', note: 'Very high' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-red-600">{item.f}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.c}</p>
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
            <Link href="/fahrenheit-to-celsius/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Fahrenheit to Celsius</Link>
            <Link href="/37-celsius-to-fahrenheit/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">37°C to Fahrenheit</Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

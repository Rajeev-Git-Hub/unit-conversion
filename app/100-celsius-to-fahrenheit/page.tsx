import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: '100 Celsius to Fahrenheit - Boiling Point Conversion',
  description: 'Convert 100°C to Fahrenheit. 100 degrees Celsius equals 212°F - the boiling point of water. Learn about water boiling temperature.',
  keywords: '100 celsius to fahrenheit, 100 c to f, boiling point celsius to fahrenheit, 100 degrees celsius, water boiling temperature',
  openGraph: {
    title: '100°C to Fahrenheit - Water Boiling Point',
    description: 'Convert 100°C to Fahrenheit - Water boiling point',
    type: 'website',
  },
};

export default function Celsius100ToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">100°C to Fahrenheit</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              100 degrees Celsius equals 212°F - The boiling point of water at sea level
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Water Temperature Guide</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">❄️ Freezing Point</h3>
                <p className="text-gray-600 dark:text-gray-300">0°C (32°F) - Water freezes at this temperature at standard atmospheric pressure.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🔥 Boiling Point</h3>
                <p className="text-gray-600 dark:text-gray-300">100°C (212°F) - Water boils at this temperature at sea level (1 atm pressure).</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🍵 Optimal Brewing</h3>
                <p className="text-gray-600 dark:text-gray-300">90-95°C (194-203°F) - Best temperature for brewing coffee and most teas.</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">⚠️ Altitude Effect</h3>
                <p className="text-gray-600 dark:text-gray-300">Water boils at lower temperatures at higher altitudes due to reduced air pressure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Water Temperatures at Different Altitudes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { altitude: 'Sea level', c: '100°C', f: '212°F' },
              { altitude: '1000m', c: '96°C', f: '205°F' },
              { altitude: '2000m', c: '93°C', f: '199°F' },
              { altitude: '3000m', c: '90°C', f: '194°F' },
              { altitude: '4000m', c: '87°C', f: '188°F' },
              { altitude: '5000m', c: '84°C', f: '183°F' },
              { altitude: '8848m', c: '71°C', f: '160°F' },
              { altitude: 'Pressure', c: '2× atm', f: '120°C' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.altitude}</p>
                <p className="text-gray-900 dark:text-white font-bold">{item.c}</p>
                <p className="text-gray-600 dark:text-gray-400">{item.f}</p>
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
            <Link href="/37-celsius-to-fahrenheit/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">37°C to Fahrenheit</Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

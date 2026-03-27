import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mach to km/h Converter - Convert Mach Speed to Kilometers per Hour',
  description: 'Free Mach to km/h converter. Convert Mach speed to kilometers per hour. Mach 1 = 1,225 km/h at sea level. Learn about Mach numbers and supersonic speeds.',
  keywords: 'mach to kmh, mach to kilometers per hour, convert mach to kmh, supersonic speed converter, mach number conversion',
  openGraph: {
    title: 'Mach to km/h Converter',
    description: 'Convert Mach to km/h instantly',
    type: 'website',
  },
};

export default function MachToKmhPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mach to km/h Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert Mach speed to kilometers per hour
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-2xl mb-4">Mach 1 (at sea level) = 1,225 km/h</p>
              <p className="text-lg">Mach 1 = 761 mph = 661 knots</p>
              <p className="text-sm mt-4 opacity-80">*Speed of sound varies with altitude and temperature</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Understanding Mach Numbers</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🔊 What is Mach?</h3>
                <p className="text-gray-600 dark:text-gray-300">Mach number is the ratio of an object's speed to the speed of sound in the surrounding medium. Mach 1 equals the speed of sound.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">✈️ Supersonic Flight</h3>
                <p className="text-gray-600 dark:text-gray-300">Supersonic speeds are above Mach 1. Commercial aircraft typically fly at Mach 0.8-0.9, while fighter jets can exceed Mach 2.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🚀 Hypersonic</h3>
                <p className="text-gray-600 dark:text-gray-300">Hypersonic speeds begin at Mach 5 (6,125 km/h). At these speeds, air compression creates extreme heat requiring special materials.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🌡️ Temperature Effect</h3>
                <p className="text-gray-600 dark:text-gray-300">The speed of sound varies with temperature: ~1,225 km/h at 20°C sea level, but slower at higher altitudes due to colder air.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Mach to km/h Conversions (at sea level)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mach: 'Mach 0.5', kmh: '613 km/h' },
              { mach: 'Mach 0.8', kmh: '980 km/h' },
              { mach: 'Mach 1.0', kmh: '1,225 km/h' },
              { mach: 'Mach 1.5', kmh: '1,838 km/h' },
              { mach: 'Mach 2.0', kmh: '2,450 km/h' },
              { mach: 'Mach 2.5', kmh: '3,063 km/h' },
              { mach: 'Mach 3.0', kmh: '3,675 km/h' },
              { mach: 'Mach 5.0', kmh: '6,125 km/h' },
              { mach: 'Mach 10', kmh: '12,250 km/h' },
              { mach: 'Mach 15', kmh: '18,375 km/h' },
              { mach: 'Mach 20', kmh: '24,500 km/h' },
              { mach: 'Mach 25', kmh: '30,625 km/h' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.mach}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.kmh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Aircraft by Mach Speed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { craft: 'Boeing 747', mach: 'Mach 0.855', kmh: '1,047 km/h', type: 'Commercial' },
              { craft: 'Concorde', mach: 'Mach 2.04', kmh: '2,500 km/h', type: 'Supersonic' },
              { craft: 'F-22 Raptor', mach: 'Mach 2.25', kmh: '2,756 km/h', type: 'Military' },
              { craft: 'SR-71 Blackbird', mach: 'Mach 3.3', kmh: '4,043 km/h', type: 'Reconnaissance' },
              { craft: 'Space Shuttle', mach: 'Mach 25', kmh: '30,625 km/h', type: 'Spacecraft' },
              { craft: 'X-15 Rocket', mach: 'Mach 6.7', kmh: '8,208 km/h', type: 'Experimental' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-lg text-gray-900 dark:text-white">{item.craft}</p>
                <p className="text-sm text-blue-600">{item.type}</p>
                <p className="font-bold text-xl text-purple-600">{item.mach}</p>
                <p className="text-gray-600 dark:text-gray-400">{item.kmh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/kmh-to-mph/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">KMH to MPH</Link>
            <Link href="/speed-of-light-in-kmh/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Speed of Light</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

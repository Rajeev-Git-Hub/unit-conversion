import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Speed Converter - Free Online Tool | Convert mph, km/h, m/s, knots',
  description: 'Free online speed converter. Convert between miles per hour, kilometers per hour, meters per second, knots. Accurate calculations, conversion tables, and transportation examples.',
  keywords: 'speed converter, mph to km/h, kilometers per hour to miles per hour, meters per second, knots conversion, wind speed, online tool',
  openGraph: {
    title: 'Speed Converter - Free Online Tool',
    description: 'Convert between different units of speed instantly',
    type: 'website',
  },
};

export default function SpeedConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Speed Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert between miles per hour, kilometers per hour, meters per second, and more
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="speed" defaultFrom="kmh" defaultTo="mph" />
            </div>
          </div>
        </div>
      </section>

      {/* Speed Unit Definitions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Speed Unit Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Meter Per Second (m/s)</h3>
              <p className="text-gray-600 dark:text-gray-300">The SI unit of speed. Defined as the distance traveled in meters divided by time in seconds. Used in physics, engineering, and scientific calculations worldwide.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Kilometer Per Hour (km/h)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 0.2778 meters per second. The standard unit for road speeds in most countries worldwide. Used on speedometers, road signs, and vehicle specifications.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Mile Per Hour (mph)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to approximately 1.609 kilometers per hour. Used primarily in the United States, UK, and a few other countries for road speeds and vehicle performance.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Foot Per Second (ft/s)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 0.3048 meters per second. Used in engineering applications, particularly in ballistics and fluid dynamics in countries using imperial units.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Knot (kn)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to one nautical mile per hour or approximately 0.514 meters per second. Used in maritime and aviation contexts for navigation and weather reporting.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Mach</h3>
              <p className="text-gray-600 dark:text-gray-300">The ratio of the speed of an object to the speed of sound. Mach 1 equals approximately 343 meters per second at sea level. Used in aviation and aerospace engineering.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Speed of Light (c)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 299,792,458 meters per second. The ultimate speed limit in the universe. Used in physics, astronomy, and theoretical calculations. Symbol: c.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Speed Conversion */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Speed Conversion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">mph</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Miles Per Hour</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">US customary unit</p>
                <p className="mb-2">Used for road speeds in US/UK</p>
                <p className="mb-2">Common in automotive context</p>
                <p>1 mph = 1.609 km/h</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">km/h</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Kilometers Per Hour</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Metric system standard</p>
                <p className="mb-2">Used worldwide for roads</p>
                <p className="mb-2">International speed standard</p>
                <p>1 km/h = 0.621 mph</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">m/s</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Meters Per Second</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">SI unit for speed</p>
                <p className="mb-2">Used in scientific contexts</p>
                <p className="mb-2">Physics and engineering</p>
                <p>1 m/s = 3.6 km/h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Speed Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Speed Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Driving Speeds</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>60 mph = 96.6 km/h</p>
                <p>70 mph = 112.7 km/h</p>
                <p>100 km/h = 62.1 mph</p>
                <p>50 km/h = 31.1 mph</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Running Speeds</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>10 km/h = 6.2 mph</p>
                <p>15 km/h = 9.3 mph</p>
                <p>8 mph = 12.9 km/h</p>
                <p>6 mph = 9.7 km/h</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Wind Speeds</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>10 knots = 11.5 mph</p>
                <p>20 knots = 23.0 mph</p>
                <p>50 km/h = 13.9 m/s</p>
                <p>100 km/h = 27.8 m/s</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Applications */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Practical Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🚗 Automotive & Transportation</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Speed Limits:</strong> Convert between mph and km/h when traveling internationally</p>
                <p><strong>Car Specifications:</strong> Compare acceleration times (0-60 mph vs 0-100 km/h)</p>
                <p><strong>Fuel Efficiency:</strong> Calculate mpg vs liters per 100km</p>
                <p><strong>Navigation:</strong> Understand speed limits in different countries</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🏃‍♂️ Sports & Fitness</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Running Pace:</strong> Convert min/km to min/mile for training</p>
                <p><strong>Cycling Speed:</strong> Track performance in different units</p>
                <p><strong>Race Analysis:</strong> Compare world records across measurement systems</p>
                <p><strong>Fitness Apps:</strong> Sync data from devices using different units</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">✈️ Aviation & Maritime</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Air Speed:</strong> Convert knots to mph/km/h for aviation</p>
                <p><strong>Wind Speed:</strong> Weather forecasts in different units</p>
                <p><strong>Marine Navigation:</strong> Ship speeds in knots vs mph</p>
                <p><strong>Flight Planning:</strong> Calculate travel times with different units</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🔬 Science & Engineering</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Physics Experiments:</strong> Convert between SI and imperial units</p>
                <p><strong>Engineering:</strong> Wind tunnel speeds in different units</p>
                <p><strong>Research:</strong> Standardize data across international studies</p>
                <p><strong>Manufacturing:</strong> Conveyor belt speeds and production rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I convert km/h to mph?</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply km/h by 0.621371. For quick approximation, divide by 1.6. Example: 100 km/h × 0.621 = 62.1 mph.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What is a knot in speed?</h3>
              <p className="text-gray-600 dark:text-gray-300">One knot equals one nautical mile per hour (1.852 km/h or 1.151 mph). Used primarily in aviation and maritime contexts.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How fast is 100 km/h in mph?</h3>
              <p className="text-gray-600 dark:text-gray-300">100 km/h equals 62.14 mph. This is approximately the speed limit on many highways in the United States.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I convert m/s to km/h?</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply meters per second by 3.6. Example: 10 m/s × 3.6 = 36 km/h. This is useful for scientific calculations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Convert More Units?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">Explore our other free conversion tools for all your measurement needs</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/length-converter/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Length Converter
            </Link>
            <Link href="/weight-converter/" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
              Weight Converter
            </Link>
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
              All Converters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Temperature Converter - Free Online Tool | Convert Celsius, Fahrenheit, Kelvin',
  description: 'Free online temperature converter. Convert between Celsius, Fahrenheit, Kelvin. Accurate calculations, conversion formulas, weather examples, and scientific applications.',
  keywords: 'temperature converter, Celsius to Fahrenheit, Fahrenheit to Celsius, Kelvin conversion, temperature scale, weather converter, online tool',
  openGraph: {
    title: 'Temperature Converter - Free Online Tool',
    description: 'Convert between different temperature scales instantly',
    type: 'website',
  },
};

export default function TemperatureConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Temperature Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert between Celsius, Fahrenheit, and Kelvin
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" defaultFrom="celsius" defaultTo="fahrenheit" />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Temperature Scales */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Temperature Scales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">°C</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Celsius</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Water freezes at 0°C, boils at 100°C</p>
                <p className="mb-2">Used worldwide except USA</p>
                <p className="mb-2">Scientific standard</p>
                <p>Named after Anders Celsius</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">°F</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Fahrenheit</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Water freezes at 32°F, boils at 212°F</p>
                <p className="mb-2">Used primarily in USA</p>
                <p className="mb-2">Common in weather reports</p>
                <p>Named after Daniel Fahrenheit</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">K</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Kelvin</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Absolute zero is 0K</p>
                <p className="mb-2">Used in scientific calculations</p>
                <p className="mb-2">No degree symbol</p>
                <p>Named after Lord Kelvin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Formulas */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Temperature Conversion Formulas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Celsius ↔ Fahrenheit</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                  <strong>°F to °C:</strong> (°F - 32) × 5/9
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                  <strong>°C to °F:</strong> (°C × 9/5) + 32
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-4">
                  <p><strong>Example:</strong> Convert 68°F to Celsius</p>
                  <p>(68 - 32) × 5/9 = 36 × 5/9 = 20°C</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Celsius ↔ Kelvin</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                  <strong>K to °C:</strong> K - 273.15
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                  <strong>°C to K:</strong> °C + 273.15
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-4">
                  <p><strong>Example:</strong> Convert 25°C to Kelvin</p>
                  <p>25 + 273.15 = 298.15K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Unit Definitions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Temperature Unit Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Celsius (°C)</h3>
              <p className="text-gray-600 dark:text-gray-300">The most widely used temperature scale worldwide. Based on 0°C for water freezing point and 100°C for boiling point at sea level. Used in science, weather forecasting, and everyday life in most countries.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Fahrenheit (°F)</h3>
              <p className="text-gray-600 dark:text-gray-300">Primarily used in the United States and a few other countries. Water freezes at 32°F and boils at 212°F. Commonly used for weather reports, cooking, and body temperature in the US.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Kelvin (K)</h3>
              <p className="text-gray-600 dark:text-gray-300">The SI base unit of temperature. An absolute scale where 0K is absolute zero (-273.15°C), the lowest possible temperature. Used in scientific calculations, physics, and chemistry.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Rankine (°R)</h3>
              <p className="text-gray-600 dark:text-gray-300">An absolute temperature scale used primarily in engineering thermodynamics in the United States. 0°R is absolute zero, and the scale uses Fahrenheit-sized degrees. 0°R = 0K = -459.67°F.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Réaumur (°Ré)</h3>
              <p className="text-gray-600 dark:text-gray-300">A historical temperature scale once used in Europe. Water freezes at 0°Ré and boils at 80°Ré. Now rarely used, but occasionally found in historical European scientific literature and some traditional cheese production contexts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Temperature References */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Temperature References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🌡️ Extreme Cold</h4>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p>Water freezes: 0°C / 32°F / 273K</p>
                <p>Very cold day: -18°C / 0°F / 255K</p>
                <p>Extreme cold: -40°C / -40°F / 233K</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🏠 Room Temperature</h4>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p>Cool room: 18°C / 64°F / 291K</p>
                <p>Comfortable: 21°C / 70°F / 294K</p>
                <p>Warm room: 24°C / 75°F / 297K</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔥 Extreme Heat</h4>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p>Hot day: 32°C / 90°F / 305K</p>
                <p>Very hot: 38°C / 100°F / 311K</p>
                <p>Extreme heat: 43°C / 110°F / 316K</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🍳 Cooking</h4>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p>Oven low: 150°C / 300°F / 423K</p>
                <p>Oven medium: 180°C / 350°F / 453K</p>
                <p>Oven high: 220°C / 425°F / 493K</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🧊 Freezing</h4>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p>Freezer: -18°C / 0°F / 255K</p>
                <p>Deep freeze: -30°C / -22°F / 243K</p>
                <p>Flash freeze: -40°C / -40°F / 233K</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔬 Scientific</h4>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p>Body temp: 37°C / 98.6°F / 310K</p>
                <p>Liquid nitrogen: -196°C / -321°F / 77K</p>
                <p>Absolute zero: -273°C / -459°F / 0K</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Applications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Practical Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🌤️ Weather & Climate</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Travel:</strong> Convert weather forecasts when traveling internationally</p>
                <p><strong>Climate studies:</strong> Scientists use Celsius and Kelvin for consistency</p>
                <p><strong>Agriculture:</strong> Farmers need accurate temperature conversions for crop planning</p>
                <p><strong>Aviation:</strong> Pilots convert between temperature scales for flight calculations</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🏥 Medical & Health</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Body temperature:</strong> Normal: 37°C / 98.6°F / 310K</p>
                <p><strong>Fever:</strong> 38°C / 100.4°F indicates fever</p>
                <p><strong>Hypothermia:</strong> Below 35°C / 95°F requires medical attention</p>
                <p><strong>Medical storage:</strong> Vaccines often require specific temperatures</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🍳 Cooking & Food</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Recipe conversion:</strong> Convert oven temperatures between Celsius and Fahrenheit</p>
                <p><strong>Food safety:</strong> Danger zone: 5°C to 60°C (41°F to 140°F)</p>
                <p><strong>Meat temperatures:</strong> Chicken: 74°C / 165°F (fully cooked)</p>
                <p><strong>Baking:</strong> Precision temperature control crucial for consistent results</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🔬 Science & Engineering</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Chemistry:</strong> Reaction rates depend on absolute temperature (Kelvin)</p>
                <p><strong>Physics:</strong> Thermodynamic calculations require Kelvin</p>
                <p><strong>Engineering:</strong> Material properties change with temperature</p>
                <p><strong>Space:</strong> Extreme temperature variations in space applications</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What is the easiest way to convert Celsius to Fahrenheit?</h3>
              <p className="text-gray-600 dark:text-gray-300">A quick approximation: double the Celsius temperature and add 30. For exact conversion, use (°C × 9/5) + 32.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Why is 0K called absolute zero?</h3>
              <p className="text-gray-600 dark:text-gray-300">At 0 Kelvin (-273.15°C or -459.67°F), all molecular motion stops. It's the lowest possible temperature in the universe.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">At what temperature do Celsius and Fahrenheit equal?</h3>
              <p className="text-gray-600 dark:text-gray-300">-40°: -40°C equals -40°F. This is the only temperature where both scales have the same numerical value.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Why doesn't Kelvin use degrees?</h3>
              <p className="text-gray-600 dark:text-gray-300">Kelvin is an absolute scale based on absolute zero, not relative to freezing/boiling points like Celsius and Fahrenheit.</p>
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

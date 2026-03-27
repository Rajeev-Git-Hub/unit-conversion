import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Weight Converter - Free Online Tool | Convert kg, lbs, ounces, grams',
  description: 'Free online weight converter. Convert between kilograms, pounds, ounces, grams, tons. Accurate calculations, conversion tables, and practical examples for everyday use.',
  keywords: 'weight converter, kg to lbs, pounds to ounces, grams to kg, ton to kg, weight conversion, mass converter, online tool',
  openGraph: {
    title: 'Weight Converter - Free Online Tool',
    description: 'Convert between different units of weight and mass instantly',
    type: 'website',
  },
};

export default function WeightConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Weight Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert between kilograms, pounds, ounces, grams, and tons
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="kg" defaultTo="lbs" />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Weight Conversion */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Weight Conversion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Metric vs Imperial Systems</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  <strong>Metric System (International):</strong> Based on the kilogram, used worldwide in science and most countries. 
                  Available units: Kilogram (kg), Gram (g), Milligram (mg), Microgram (μg), Nanogram (ng), Metric Ton.
                </p>
                <p>
                  <strong>Imperial System (US Customary):</strong> Used primarily in the United States. 
                  Available units: Pound (lbs), Ounce (oz), US Ton.
                </p>
                <p>
                  Understanding both systems is essential for international trade, cooking, fitness, and scientific applications.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Common Applications</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-start">
                  <span className="text-green-600 mr-3">🍳</span>
                  <div>
                    <strong>Cooking & Baking:</strong> Recipe conversions between metric and imperial measurements
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3">💪</span>
                  <div>
                    <strong>Fitness & Health:</strong> Tracking body weight, gym weights, and supplement measurements
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3">📦</span>
                  <div>
                    <strong>Shipping & Logistics:</strong> Calculating shipping costs and cargo weights
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3">🔬</span>
                  <div>
                    <strong>Science & Medicine:</strong> Laboratory measurements and medical dosages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Unit Definitions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Metric Weight Unit Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Kilogram (kg)</h3>
              <p className="text-gray-600 dark:text-gray-300">The base unit of mass in the International System of Units (SI). 1 kg = 1,000 grams. Commonly used for measuring body weight, food items, and commercial goods.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Gram (g)</h3>
              <p className="text-gray-600 dark:text-gray-300">One thousandth of a kilogram. Used for measuring small quantities of food, precious metals, and scientific samples. 1 g = 0.001 kg.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Milligram (mg)</h3>
              <p className="text-gray-600 dark:text-gray-300">One thousandth of a gram. Commonly used in medicine for measuring drug dosages and in nutrition for vitamin and mineral content. 1 mg = 0.001 g.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Microgram (μg)</h3>
              <p className="text-gray-600 dark:text-gray-300">One millionth of a gram. Used for extremely small measurements such as trace nutrients, pollutants, and pharmaceutical compounds. 1 μg = 0.000001 g.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nanogram (ng)</h3>
              <p className="text-gray-600 dark:text-gray-300">One billionth of a gram. Used in molecular biology, genetics (DNA/RNA measurements), and ultra-sensitive chemical analysis. 1 ng = 0.000000001 g.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Metric Ton</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,000 kilograms or 1 million grams. Used for measuring large quantities such as cargo, industrial materials, and vehicle weights. Also known as tonne.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Metric Ton</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,000 kilograms or 1 million grams. Used for measuring large quantities such as cargo, industrial materials, and vehicle weights. Also known as tonne.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">US Ton</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 2,000 pounds or approximately 907 kilograms. Used in the United States for measuring large quantities of materials and cargo.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Pound (lbs)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 453.592 grams. Used primarily in the United States and UK for measuring body weight, food products, and commercial goods.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Ounce (oz)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 28.3495 grams. Used for measuring smaller quantities of food, precious metals, and postal items in countries using imperial units.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">US Ton</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 2,000 pounds or approximately 907 kilograms. Used in the United States for measuring large quantities of materials and cargo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Tables */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Weight Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Kilograms to Pounds</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>1 kg = 2.20462 lbs</li>
                <li>5 kg = 11.0231 lbs</li>
                <li>10 kg = 22.0462 lbs</li>
                <li>50 kg = 110.231 lbs</li>
                <li>100 kg = 220.462 lbs</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Pounds to Kilograms</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>1 lb = 0.453592 kg</li>
                <li>5 lbs = 2.26796 kg</li>
                <li>10 lbs = 4.53592 kg</li>
                <li>50 lbs = 22.6796 kg</li>
                <li>100 lbs = 45.3592 kg</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Grams to Ounces</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>1 g = 0.035274 oz</li>
                <li>28.35 g = 1 oz</li>
                <li>100 g = 3.5274 oz</li>
                <li>250 g = 8.8185 oz</li>
                <li>500 g = 17.637 oz</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Real-World Conversion Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🍳 Kitchen Conversions</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Flour:</strong> 500g = 1.1 lbs = 17.6 oz</p>
                <p><strong>Sugar:</strong> 250g = 0.55 lbs = 8.8 oz</p>
                <p><strong>Butter:</strong> 225g = 0.5 lbs = 8 oz (1 stick)</p>
                <p><strong>Rice:</strong> 1kg = 2.2 lbs = 35.3 oz</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">💪 Fitness Conversions</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Dumbbells:</strong> 10 lbs = 4.5 kg</p>
                <p><strong>Plates:</strong> 45 lbs = 20.4 kg</p>
                <p><strong>Body weight:</strong> 150 lbs = 68 kg</p>
                <p><strong>Protein powder:</strong> 5 lbs = 2.27 kg</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📦 Shipping Examples</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Package:</strong> 2 lbs = 0.91 kg</p>
                <p><strong>Letter:</strong> 1 oz = 28.35 g</p>
                <p><strong>Box:</strong> 10 lbs = 4.54 kg</p>
                <p><strong>Pallet:</strong> 1 ton = 907.185 kg</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">👶 Baby Weight</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Birth weight:</strong> 7.5 lbs = 3.4 kg</p>
                <p><strong>6 months:</strong> 18 lbs = 8.2 kg</p>
                <p><strong>1 year:</strong> 22 lbs = 10 kg</p>
                <p><strong>Formula:</strong> 8 oz = 227 g per feeding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            How to Convert Weight Units: Step-by-Step Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-300">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Identify Units</h3>
              <p className="text-gray-600 dark:text-gray-300">Know your starting unit (kg, lbs, oz, g) and target unit</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-300">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Use Conversion Factor</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply by the correct conversion rate</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-300">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Calculate</h3>
              <p className="text-gray-600 dark:text-gray-300">Perform the multiplication or division</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-300">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Verify</h3>
              <p className="text-gray-600 dark:text-gray-300">Check your result makes sense</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How many pounds are in a kilogram?</h3>
              <p className="text-gray-600 dark:text-gray-300">There are 2.20462 pounds in one kilogram. This is the standard conversion used worldwide.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What's the difference between weight and mass?</h3>
              <p className="text-gray-600 dark:text-gray-300">Mass is the amount of matter in an object (measured in kg), while weight is the force of gravity on that mass (measured in newtons). In everyday use, we use weight units for both.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Why do different countries use different weight systems?</h3>
              <p className="text-gray-600 dark:text-gray-300">The metric system was developed in France during the French Revolution and adopted by most countries. The US retained the imperial system due to historical reasons and industrial inertia.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How accurate is this weight converter?</h3>
              <p className="text-gray-600 dark:text-gray-300">Our converter provides results with up to 10 decimal places, using standard international conversion factors for professional accuracy.</p>
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
            <Link href="/temperature-converter/" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
              Temperature Converter
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

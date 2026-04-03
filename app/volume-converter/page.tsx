import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Volume Converter - Free Online Tool | Convert Liters, Gallons, Cubic Meters',
  description: 'Free online volume converter. Convert between liters, gallons, cubic meters, milliliters, fluid ounces. Accurate calculations, conversion tables, and practical examples.',
  keywords: 'volume converter, liters to gallons, cubic meters to liters, milliliters to ounces, fluid volume converter, online tool',
  openGraph: {
    title: 'Volume Converter - Free Online Tool',
    description: 'Convert between different units of volume instantly',
    type: 'website',
  },
};

export default function VolumeConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Volume Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert between liters, gallons, cubic meters, milliliters, and more
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="volume" />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Volume Conversion */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Volume Conversion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">L</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Liters</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Metric system standard</p>
                <p className="mb-2">Used worldwide for liquids</p>
                <p className="mb-2">Common in bottles and containers</p>
                <p>1 L = 1,000 mL</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">gal</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Gallons</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">US customary unit</p>
                <p className="mb-2">Used for fuel and large containers</p>
                <p className="mb-2">Common in United States</p>
                <p>1 gal = 3.785 L</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">m³</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cubic Meters</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">SI unit for volume</p>
                <p className="mb-2">Used for large volumes</p>
                <p className="mb-2">Scientific and industrial use</p>
                <p>1 m³ = 1,000 L</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Volume Unit Definitions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Metric Volume Unit Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Liter (L)</h3>
              <p className="text-gray-600 dark:text-gray-300">The base unit of volume in the metric system. Defined as the volume of one cubic decimeter. Widely used worldwide for measuring liquids, beverages, and container capacities.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Milliliter (mL)</h3>
              <p className="text-gray-600 dark:text-gray-300">One thousandth of a liter. Commonly used for measuring small liquid quantities, medication dosages, and precise liquid measurements. 1 mL = 0.001 L.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cubic Meter (m³)</h3>
              <p className="text-gray-600 dark:text-gray-300">The SI unit of volume. Equal to 1,000 liters. Used for measuring large volumes such as water tanks, shipping containers, and construction materials.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cubic Centimeter (cm³)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to one milliliter. Used in scientific and engineering contexts, particularly for measuring small precise volumes and engine displacement.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cubic Foot (ft³)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to approximately 28.3 liters. Used in construction, shipping, and industrial applications in countries using the imperial system.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cubic Inch (in³)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to approximately 16.4 milliliters. Used in automotive engineering for engine displacement and small volume measurements in the US.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Gallon (gal)</h3>
              <p className="text-gray-600 dark:text-gray-300">US customary unit equal to 3.785 liters. Used for measuring fuel, large liquid containers, and beverage volumes in the United States.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Fluid Ounce (fl oz)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to approximately 29.6 milliliters. Used for measuring smaller liquid quantities and beverage servings in the US.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Volume Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Volume Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Household & Kitchen</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 cup = 237 mL</p>
                <p>1 tablespoon = 15 mL</p>
                <p>1 teaspoon = 5 mL</p>
                <p>1 fluid ounce = 29.6 mL</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Beverages</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 can = 355 mL</p>
                <p>1 bottle = 500 mL</p>
                <p>1 gallon = 3.785 L</p>
                <p>1 liter = 33.8 oz</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Industrial</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 barrel = 159 L</p>
                <p>1 cubic meter = 264 gal</p>
                <p>1 cubic foot = 28.3 L</p>
                <p>1 kiloliter = 1,000 L</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">� Household & DIY</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Recipe Conversion:</strong> Convert between metric and imperial measurements</p>
                <p><strong>Precision Work:</strong> Accurate volume measurements for DIY projects</p>
                <p><strong>International Recipes:</strong> Convert cups to milliliters for global dishes</p>
                <p><strong>Ingredient Scaling:</strong> Adjust recipe quantities for different serving sizes</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">⛽ Fuel & Automotive</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Fuel Efficiency:</strong> Calculate miles per gallon vs liters per 100km</p>
                <p><strong>Tank Capacity:</strong> Compare fuel tank sizes in different units</p>
                <p><strong>Gas Prices:</strong> Convert price per liter to price per gallon</p>
                <p><strong>Oil Changes:</strong> Measure engine oil capacity accurately</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🏗️ Construction</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Concrete Mixing:</strong> Calculate water and aggregate volumes</p>
                <p><strong>Paint Coverage:</strong> Determine paint needed for surface areas</p>
                <p><strong>Excavation:</strong> Measure soil removal in cubic meters</p>
                <p><strong>Tank Installation:</strong> Size water tanks and storage containers</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🧪 Science & Laboratory</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Chemical Solutions:</strong> Precise volume measurements for experiments</p>
                <p><strong>Medical Dosage:</strong> Convert liquid medication measurements</p>
                <p><strong>Research:</strong> Standardize volumes across international studies</p>
                <p><strong>Quality Control:</strong> Measure product volumes accurately</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How many milliliters are in a cup?</h3>
              <p className="text-gray-600 dark:text-gray-300">One US cup equals 236.588 milliliters. For practical purposes, it's often rounded to 237 mL. Note that UK cups are larger (284 mL).</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What's the difference between US and UK gallons?</h3>
              <p className="text-gray-600 dark:text-gray-300">US gallons are smaller: 1 US gallon = 3.785 liters. UK gallons are larger: 1 UK gallon = 4.546 liters. Always check which system is being used.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I convert cubic meters to liters?</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply cubic meters by 1,000. For example: 2 cubic meters × 1,000 = 2,000 liters. One cubic meter equals 1,000 liters exactly.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How many fluid ounces are in a liter?</h3>
              <p className="text-gray-600 dark:text-gray-300">One liter equals 33.814 US fluid ounces. For UK fluid ounces, 1 liter = 35.195 fl oz. The difference is due to different ounce definitions.</p>
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

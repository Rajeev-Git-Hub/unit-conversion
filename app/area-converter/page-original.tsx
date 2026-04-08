import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Area Converter - Free Online Tool | Convert Square Meters, Square Feet, Acres',
  description: 'Free online area converter. Convert between square meters, square feet, acres, hectares, square yards. Accurate calculations, conversion tables, and real estate examples.',
  keywords: 'area converter, square meters to square feet, acres to hectares, square yard to square meter, land area converter, real estate, online tool',
  openGraph: {
    title: 'Area Converter - Free Online Tool',
    description: 'Convert between different units of area instantly',
    type: 'website',
  },
};

export default function AreaConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Area Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert between square meters, square feet, acres, hectares, and more
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="area" />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Area Conversion */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Area Conversion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">m²</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Square Meters</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">International standard unit</p>
                <p className="mb-2">Used in most countries worldwide</p>
                <p className="mb-2">Common in construction and real estate</p>
                <p>1 m² = 10.76 ft²</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">ft²</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Square Feet</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Common in US and UK real estate</p>
                <p className="mb-2">Used for residential properties</p>
                <p className="mb-2">Standard for room measurements</p>
                <p>1 ft² = 0.093 m²</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">ac</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Acres</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Used for large land areas</p>
                <p className="mb-2">Common in agriculture and farming</p>
                <p className="mb-2">US customary unit for land</p>
                <p>1 acre = 43,560 ft²</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Area Unit Definitions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Area Unit Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Square Meter (m²)</h3>
              <p className="text-gray-600 dark:text-gray-300">The SI unit of area. Defined as the area of a square with sides of one meter. Widely used in construction, real estate, and land measurement worldwide.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Square Kilometer (km²)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,000,000 square meters or 100 hectares. Used for measuring large geographical areas, city sizes, and country territories.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Hectare (ha)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 10,000 square meters or 100 ares. Commonly used in agriculture, forestry, and land management for measuring plots of land.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Square Centimeter (cm²)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 0.0001 square meters. Used for small area measurements such as paper sizes, fabric samples, and precise engineering drawings.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Square Millimeter (mm²)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 0.000001 square meters or one millionth of a square meter. Used in precision engineering, electronics, and microfabrication.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Square Inch (in²)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 6.45 square centimeters. Commonly used in the United States for measuring small areas, screen sizes, and construction materials.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Square Foot (ft²)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 929 square centimeters or 144 square inches. Widely used in the US and UK for measuring room sizes, floor areas, and real estate.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Square Yard (yd²)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 9 square feet or approximately 0.836 square meters. Used for measuring larger areas such as carpets, land, and construction sites.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Square Mile (mi²)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 2.59 square kilometers or 640 acres. Used for measuring large land areas, cities, and geographical regions in the US and UK.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Acre</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 4,047 square meters or approximately 0.405 hectares. Commonly used in the United States and UK for measuring land, especially in agriculture and real estate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Area Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Area Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Real Estate</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1,000 ft² = 92.9 m²</p>
                <p>2,000 ft² = 185.8 m²</p>
                <p>0.25 acre = 10,890 ft²</p>
                <p>1 hectare = 2.47 acres</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Construction</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>100 m² = 1,076 ft²</p>
                <p>500 m² = 5,382 ft²</p>
                <p>1,000 m² = 0.247 acres</p>
                <p>5,000 m² = 1.24 acres</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Agriculture</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 acre = 4,047 m²</p>
                <p>10 acres = 4.047 hectares</p>
                <p>100 hectares = 247 acres</p>
                <p>1 km² = 247.1 acres</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🏠 Real Estate</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Property Listings:</strong> Convert between square feet and square meters for international buyers</p>
                <p><strong>Home Size:</strong> Understand room sizes in different measurement systems</p>
                <p><strong>Land Measurement:</strong> Compare lot sizes in acres vs hectares</p>
                <p><strong>Floor Plans:</strong> Convert architectural measurements for global clients</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🏗️ Construction</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Material Estimation:</strong> Calculate flooring, paint, and roofing materials</p>
                <p><strong>Building Codes:</strong> Comply with local area measurement requirements</p>
                <p><strong>Project Planning:</strong> Estimate construction costs by area</p>
                <p><strong>International Projects:</strong> Work with metric and imperial measurements</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🌾 Agriculture</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Farm Planning:</strong> Calculate field sizes for crop planning</p>
                <p><strong>Yield Calculation:</strong> Determine production per hectare or acre</p>
                <p><strong>Irrigation:</strong> Plan water distribution by area</p>
                <p><strong>Land Purchase:</strong> Compare agricultural land values</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📊 Business</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Rental Properties:</strong> Calculate commercial space per square foot/meter</p>
                <p><strong>Warehouse Planning:</strong> Optimize storage space utilization</p>
                <p><strong>Retail Layout:</strong> Plan store floor space efficiently</p>
                <p><strong>Office Space:</strong> Allocate workspace per employee</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I calculate square feet from room dimensions?</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply length by width. For a 12ft × 15ft room: 12 × 15 = 180 square feet. For irregular rooms, break them into rectangles and add the areas.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What's the difference between square meters and square feet?</h3>
              <p className="text-gray-600 dark:text-gray-300">Square meters (m²) are used in most countries and follow the metric system. Square feet (ft²) are used primarily in the US and UK. 1 square meter equals 10.764 square feet.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How big is an acre in football fields?</h3>
              <p className="text-gray-600 dark:text-gray-300">One acre is approximately 0.756 American football fields (including end zones). An acre is 43,560 square feet or about 90% of a football field.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I convert hectares to acres?</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply hectares by 2.471. For example: 10 hectares × 2.471 = 24.71 acres. One hectare equals 10,000 square meters.</p>
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

import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Length Converter - Free Online Tool | Convert Meters, Feet, Inches, km, miles',
  description: 'Free online length converter. Convert between meters, feet, inches, kilometers, miles, centimeters. Accurate calculations, conversion tables, and step-by-step examples.',
  keywords: 'length converter, meter to feet, feet to inches, km to miles, cm to inches, measurement converter, online tool, unit conversion',
  openGraph: {
    title: 'Length Converter - Free Online Tool',
    description: 'Convert between different units of length instantly with our free online tool',
    type: 'website',
  },
};

export default function LengthConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Length Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert between meters, feet, inches, kilometers, miles, and more
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="length" />
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Examples */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Length Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Meter to Feet</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>1 meter = 3.28084 feet</li>
                <li>2 meters = 6.56168 feet</li>
                <li>5 meters = 16.4042 feet</li>
                <li>10 meters = 32.8084 feet</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Feet to Meters</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>1 foot = 0.3048 meters</li>
                <li>5 feet = 1.524 meters</li>
                <li>10 feet = 3.048 meters</li>
                <li>100 feet = 30.48 meters</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Inches to Centimeters</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>1 inch = 2.54 centimeters</li>
                <li>5 inches = 12.7 centimeters</li>
                <li>10 inches = 25.4 centimeters</li>
                <li>12 inches = 30.48 centimeters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Guide */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            How to Use the Length Converter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Enter Value</h3>
              <p className="text-gray-600 dark:text-gray-300">Type the length value you want to convert in the input field</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Select Units</h3>
              <p className="text-gray-600 dark:text-gray-300">Choose the from and to units from the dropdown menus</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Get Result</h3>
              <p className="text-gray-600 dark:text-gray-300">View your converted result instantly with high precision</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How many feet are in a meter?</h3>
              <p className="text-gray-600 dark:text-gray-300">There are 3.28084 feet in one meter. This is based on the international foot definition.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What's the difference between meters and yards?</h3>
              <p className="text-gray-600 dark:text-gray-300">One meter equals 1.09361 yards. Meters are part of the metric system, while yards are part of the imperial system.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How accurate is this length converter?</h3>
              <p className="text-gray-600 dark:text-gray-300">Our converter provides results with up to 10 decimal places, ensuring high precision for professional and educational use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need to Convert Length Now?</h2>
          <p className="text-xl mb-8">Use our free online length converter for instant, accurate results</p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
            <ConverterCard category="length" />
          </div>
        </div>
      </section>
    </div>
  );
}

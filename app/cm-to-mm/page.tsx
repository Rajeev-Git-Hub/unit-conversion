import { Metadata } from 'next';
import UnitConverterClient from './UnitConverterClient';

export const metadata: Metadata = {
  title: 'Centimeter to Millimeter Converter (Free & Instant) | ConvertMaster',
  description: 'Convert centimeters to millimeters instantly. 1 cm = 10 mm. Free online converter with smart explanations and examples.',
  keywords: ['cm to mm', 'centimeter to millimeter', 'cm mm converter', 'length conversion'],
  openGraph: {
    title: 'Centimeter to Millimeter Converter',
    description: 'Convert centimeters to millimeters instantly with smart explanations',
    type: 'website',
  },
};

export default function CmToMmPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* SEO Content */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Centimeter to Millimeter Converter
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Convert centimeters to millimeters instantly. 1 cm equals 10 mm.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              💡 <strong>Smart Explanation:</strong> 1 centimeter equals 10 millimeters, so we multiply by 10 to convert.
            </p>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Common Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-medium">1 cm</span>
              <span className="text-blue-600 dark:text-blue-400">= 10 mm</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-medium">5 cm</span>
              <span className="text-blue-600 dark:text-blue-400">= 50 mm</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-medium">10 cm</span>
              <span className="text-blue-600 dark:text-blue-400">= 100 mm</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-medium">25 cm</span>
              <span className="text-blue-600 dark:text-blue-400">= 250 mm</span>
            </div>
          </div>
        </div>

        {/* Main Converter */}
        <UnitConverterClient />

        {/* Additional SEO Content */}
        <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            How to Convert Centimeters to Millimeters
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Converting centimeters to millimeters is simple. Since 1 centimeter equals 10 millimeters, 
              you just need to multiply the number of centimeters by 10.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-4 mb-4">
              <p className="font-mono text-center text-lg">
                mm = cm × 10
              </p>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Example:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              To convert 7 centimeters to millimeters:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-4 mb-4">
              <p className="font-mono">
                7 cm × 10 = 70 mm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

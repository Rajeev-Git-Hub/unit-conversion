import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Percentage Calculator - Free Online Tool | Calculate Percentages, Discounts, Tips',
  description: 'Free online percentage calculator. Calculate percentages, discounts, tips, tax, interest rates. Accurate calculations and financial applications.',
  keywords: 'percentage calculator, percent calculator, discount calculator, tip calculator, tax calculator, interest calculator, online tool',
  openGraph: {
    title: 'Percentage Calculator - Free Online Tool',
    description: 'Calculate percentages and percent changes instantly',
    type: 'website',
  },
};

export default function PercentageCalculatorLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Percentage Calculator - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Calculate percentages, discounts, tips, and financial calculations
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="percentage" />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Percentage Calculations */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Percentage Calculations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">%</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Basic Percent</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Part of a whole</p>
                <p className="mb-2">X% of Y = (X ÷ Y) × 100</p>
                <p className="mb-2">Common in statistics</p>
                <p>Used in everyday life</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏷️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Discounts</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Price reductions</p>
                <p className="mb-2">Sale calculations</p>
                <p className="mb-2">Savings amount</p>
                <p>Original × (1 - Discount%)</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Growth Rate</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Increase/decrease</p>
                <p className="mb-2">((New - Old) ÷ Old) × 100</p>
                <p className="mb-2">Business metrics</p>
                <p>Investment returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Percentage Calculations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Percentage Calculations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Shopping & Sales</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>20% off = 80% of price</p>
                <p>50% discount = half price</p>
                <p>10% tax = price × 1.10</p>
                <p>25% off = 75% of price</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tips & Service</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>15% tip = bill × 0.15</p>
                <p>20% tip = bill × 0.20</p>
                <p>18% service charge</p>
                <p>10% gratuity</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Finance & Business</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>5% interest rate</p>
                <p>8% inflation rate</p>
                <p>15% profit margin</p>
                <p>30% tax rate</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🛒 Shopping & Retail</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Discount Calculations:</strong> Calculate sale prices and savings</p>
                <p><strong>Coupon Values:</strong> Determine percentage off coupons</p>
                <p><strong>Tax Calculations:</strong> Add sales tax to purchases</p>
                <p><strong>Price Comparisons:</strong> Calculate percentage differences</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🍽 Restaurants & Tips</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Tip Calculations:</strong> Calculate 15%, 18%, 20% tips</p>
                <p><strong>Service Charges:</strong> Calculate gratuity and service fees</p>
                <p><strong>Split Bills:</strong> Calculate percentage shares</p>
                <p><strong>Tax Inclusive:</strong> Calculate pre-tax amounts</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">💼 Business & Finance</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Profit Margins:</strong> Calculate percentage profit on sales</p>
                <p><strong>Interest Rates:</strong> Calculate interest on loans and investments</p>
                <p><strong>Growth Rates:</strong> Calculate business growth percentages</p>
                <p><strong>Commission:</strong> Calculate percentage-based earnings</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📊 Education & Statistics</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Grade Calculations:</strong> Calculate percentage scores and grades</p>
                <p><strong>Test Scores:</strong> Determine percentage correct answers</p>
                <p><strong>Survey Results:</strong> Calculate response percentages</p>
                <p><strong>Statistical Analysis:</strong> Calculate distribution percentages</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I calculate percentage of a number?</h3>
              <p className="text-gray-600 dark:text-gray-300">Multiply the number by the percentage and divide by 100. For example: 25% of 200 = (25 × 200) ÷ 100 = 50. Or simply multiply by 0.25.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I calculate percentage increase?</h3>
              <p className="text-gray-600 dark:text-gray-300">Use formula: ((New Value - Old Value) ÷ Old Value) × 100. For example: Increase from 100 to 150 = ((150 - 100) ÷ 100) × 100 = 50% increase.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I calculate percentage decrease?</h3>
              <p className="text-gray-600 dark:text-gray-300">Use formula: ((Old Value - New Value) ÷ Old Value) × 100. For example: Decrease from 100 to 80 = ((100 - 80) ÷ 100) × 100 = 20% decrease.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I calculate what percentage one number is of another?</h3>
              <p className="text-gray-600 dark:text-gray-300">Divide the first number by the second number and multiply by 100. For example: 25 is what percent of 200 = (25 ÷ 200) × 100 = 12.5%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Calculate More?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">Explore our other free calculation tools for all your needs</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/time-duration-calculator/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Time Duration Calculator
            </Link>
            <Link href="/age-calculator/" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
              Age Calculator
            </Link>
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
              All Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

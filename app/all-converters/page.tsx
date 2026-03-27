import { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiMaximize, FiPackage, FiThermometer, FiDatabase, FiTrendingUp, FiPercent } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'All Unit Converters - Complete Directory of 50+ Tools',
  description: 'Browse our complete collection of 50+ unit converters. Length, weight, temperature, data storage, and more. Free online conversion tools.',
  keywords: 'unit converters, all converters, conversion tools, unit conversion directory',
};

const converterCategories = [
  {
    title: 'Length Converters',
    icon: FiMaximize,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    converters: [
      { name: 'CM to Inches', href: '/cm-to-inches' },
      { name: 'Inches to CM', href: '/inches-to-cm' },
      { name: 'Meters to Feet', href: '/meters-to-feet' },
      { name: 'Feet to Meters', href: '/feet-to-meters' },
      { name: 'KM to Miles', href: '/km-to-miles' },
      { name: 'Miles to KM', href: '/miles-to-km' },
      { name: 'MM to Inches', href: '/mm-to-inches' },
      { name: 'Inches to MM', href: '/inches-to-mm' },
      { name: 'Yards to Meters', href: '/yards-to-meters' },
      { name: 'Meters to Yards', href: '/meters-to-yards' },
      { name: 'Feet to Inches', href: '/feet-to-inches' },
      { name: 'Inches to Feet', href: '/inches-to-feet' },
      { name: 'CM to Feet', href: '/cm-to-feet' },
      { name: 'Feet to CM', href: '/feet-to-cm' },
      { name: 'KM to Meters', href: '/km-to-meters' },
    ]
  },
  {
    title: 'Weight Converters',
    icon: FiPackage,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    converters: [
      { name: 'KG to LBS', href: '/kg-to-lbs' },
      { name: 'LBS to KG', href: '/lbs-to-kg' },
      { name: 'Grams to Ounces', href: '/grams-to-ounces' },
      { name: 'Ounces to Grams', href: '/ounces-to-grams' },
      { name: 'KG to Grams', href: '/kg-to-grams' },
      { name: 'Grams to KG', href: '/grams-to-kg' },
      { name: 'Pounds to Ounces', href: '/pounds-to-ounces' },
      { name: 'Ounces to Pounds', href: '/ounces-to-pounds' },
      { name: 'KG to Stones', href: '/kg-to-stones' },
      { name: 'Stones to KG', href: '/stones-to-kg' },
      { name: 'LBS to Stones', href: '/lbs-to-stones' },
      { name: 'Stones to LBS', href: '/stones-to-lbs' },
      { name: 'MG to Grams', href: '/mg-to-grams' },
      { name: 'Grams to MG', href: '/grams-to-mg' },
      { name: 'Tons to KG', href: '/tons-to-kg' },
    ]
  },
  {
    title: 'Temperature Converters',
    icon: FiThermometer,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    converters: [
      { name: 'Celsius to Fahrenheit', href: '/celsius-to-fahrenheit' },
      { name: 'Fahrenheit to Celsius', href: '/fahrenheit-to-celsius' },
      { name: 'Celsius to Kelvin', href: '/celsius-to-kelvin' },
      { name: 'Kelvin to Celsius', href: '/kelvin-to-celsius' },
      { name: 'Fahrenheit to Kelvin', href: '/fahrenheit-to-kelvin' },
      { name: 'Kelvin to Fahrenheit', href: '/kelvin-to-fahrenheit' },
      { name: '37°C to Fahrenheit', href: '/37-celsius-to-fahrenheit' },
      { name: '100°C to Fahrenheit', href: '/100-celsius-to-fahrenheit' },
      { name: 'Room Temperature Guide', href: '/room-temperature' },
      { name: 'Body Temperature Guide', href: '/body-temperature-fahrenheit' },
    ]
  },
  {
    title: 'Speed Converters',
    icon: FiTrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    converters: [
      { name: 'KMH to MPH', href: '/kmh-to-mph' },
      { name: 'MPH to KMH', href: '/mph-to-kmh' },
      { name: 'Knots to MPH', href: '/knots-to-mph' },
      { name: 'MPH to Knots', href: '/mph-to-knots' },
      { name: 'KMH to MPS', href: '/kmh-to-mps' },
      { name: 'MPS to KMH', href: '/mps-to-kmh' },
      { name: 'MPH to MPS', href: '/mph-to-mps' },
      { name: 'MPS to MPH', href: '/mps-to-mph' },
      { name: 'Speed of Light', href: '/speed-of-light-in-kmh' },
      { name: 'Mach to KMH', href: '/mach-to-kmh' },
    ]
  },
  {
    title: 'Data Storage Converters',
    icon: FiDatabase,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    converters: [
      { name: 'MB to GB', href: '/mb-to-gb' },
      { name: 'GB to MB', href: '/gb-to-mb' },
      { name: 'GB to TB', href: '/gb-to-tb' },
      { name: 'TB to GB', href: '/tb-to-gb' },
      { name: 'KB to MB', href: '/kb-to-mb' },
      { name: 'MB to KB', href: '/mb-to-kb' },
      { name: 'Bytes to KB', href: '/bytes-to-kb' },
      { name: 'KB to Bytes', href: '/kb-to-bytes' },
      { name: 'MB to Bytes', href: '/mb-to-bytes' },
      { name: 'GB to Bytes', href: '/gb-to-bytes' },
    ]
  },
  {
    title: 'Finance & Percentage Calculators',
    icon: FiPercent,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    converters: [
      { name: '% Increase Calculator', href: '/percentage-increase-calculator' },
      { name: '% Decrease Calculator', href: '/percentage-decrease-calculator' },
      { name: 'Profit Margin Calc', href: '/profit-margin-calculator' },
      { name: 'Simple Interest Calc', href: '/simple-interest-calculator' },
      { name: 'Compound Interest', href: '/compound-interest-calculator' },
      { name: 'BPS to Percentage', href: '/basis-points-to-percentage' },
      { name: '% to Decimal', href: '/percentage-to-decimal' },
      { name: 'ROI Calculator', href: '/roi-calculator' },
      { name: 'Discount Calculator', href: '/discount-calculator' },
    ]
  },
];

export default function AllConvertersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All Unit Converters
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Browse our complete collection of 50+ specialized conversion tools. 
              Click any converter to get instant results.
            </p>
          </div>
        </div>
      </section>

      {/* Converter Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {converterCategories.map((category) => (
              <div key={category.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl ${category.bgColor} ${category.color}`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                  <span className="ml-4 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                    {category.converters.length} tools
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.converters.map((converter) => (
                    <Link
                      key={converter.href}
                      href={converter.href}
                      className="group flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                    >
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {converter.name}
                      </span>
                      <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Specialized Converters</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Free to Use</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">SEO</div>
              <div className="text-gray-600 dark:text-gray-400">Optimized Pages</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-colors"
          >
            Back to Home
            <FiArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

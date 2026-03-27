'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiMaximize, FiPackage, FiThermometer, FiDatabase, FiTrendingUp, FiPercent, FiSearch, FiStar } from 'react-icons/fi';

const converterCategories = [
  {
    title: 'Length Converters',
    description: 'Convert between meters, kilometers, feet, inches, yards, and more instantly.',
    icon: FiMaximize,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    internalLinks: [
      { from: 'cm', to: 'inches', label: 'cm → inches' },
      { from: 'meters', to: 'feet', label: 'meters → feet' },
      { from: 'km', to: 'miles', label: 'km → miles' },
    ],
    converters: [
      { name: 'CM to Inches', href: '/cm-to-inches', popular: true },
      { name: 'Inches to CM', href: '/inches-to-cm' },
      { name: 'Meters to Feet', href: '/meters-to-feet', popular: true },
      { name: 'Feet to Meters', href: '/feet-to-meters' },
      { name: 'KM to Miles', href: '/km-to-miles', popular: true },
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
    description: 'Convert kilograms, pounds, ounces, grams, stones, and tons easily.',
    icon: FiPackage,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    internalLinks: [
      { from: 'kg', to: 'lbs', label: 'kg → lbs' },
      { from: 'grams', to: 'ounces', label: 'grams → ounces' },
      { from: 'pounds', to: 'kg', label: 'pounds → kg' },
    ],
    converters: [
      { name: 'KG to Pound/LBS', href: '/kg-to-lbs', popular: true },
      { name: 'Pound/LBS to KG', href: '/lbs-to-kg', popular: true },
      { name: 'Grams to Ounces', href: '/grams-to-ounces' },
      { name: 'Ounces to Grams', href: '/ounces-to-grams' },
      { name: 'KG to Grams', href: '/kg-to-grams' },
      { name: 'Grams to KG', href: '/grams-to-kg' },
      { name: 'Pounds to Ounces', href: '/pounds-to-ounces' },
      { name: 'Ounces to Pounds', href: '/ounces-to-pounds' },
      { name: 'MG to Grams', href: '/mg-to-grams' },
      { name: 'Grams to MG', href: '/grams-to-mg' },
      { name: 'Tons to KG', href: '/tons-to-kg' },
    ]
  },
  {
    title: 'Temperature Converters',
    description: 'Switch between Celsius, Fahrenheit, and Kelvin for any temperature value.',
    icon: FiThermometer,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    internalLinks: [
      { from: 'celsius', to: 'fahrenheit', label: '°C → °F' },
      { from: 'fahrenheit', to: 'celsius', label: '°F → °C' },
      { from: 'celsius', to: 'kelvin', label: '°C → K' },
    ],
    converters: [
      { name: 'Celsius to Fahrenheit', href: '/celsius-to-fahrenheit', popular: true },
      { name: 'Fahrenheit to Celsius', href: '/fahrenheit-to-celsius', popular: true },
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
    description: 'Convert km/h, mph, knots, m/s, Mach, and speed of light measurements.',
    icon: FiTrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    internalLinks: [
      { from: 'kmh', to: 'mph', label: 'km/h → mph' },
      { from: 'mph', to: 'kmh', label: 'mph → km/h' },
      { from: 'knots', to: 'mph', label: 'knots → mph' },
    ],
    converters: [
      { name: 'KM/H to MPH', href: '/kmh-to-mph', popular: true },
      { name: 'MPH to KM/H', href: '/mph-to-kmh', popular: true },
      { name: 'Knots to MPH', href: '/knots-to-mph' },
      { name: 'MPH to Knots', href: '/mph-to-knots' },
      { name: 'KM/H to Meters/sec', href: '/kmh-to-mps' },
      { name: 'Meters/sec to KM/H', href: '/mps-to-kmh' },
      { name: 'MPH to Meters/sec', href: '/mph-to-mps' },
      { name: 'Meters/sec to MPH', href: '/mps-to-mph' },
      { name: 'Speed of Light', href: '/speed-of-light-in-kmh' },
      { name: 'Mach to KM/H', href: '/mach-to-kmh' },
    ]
  },
  {
    title: 'Data Storage Converters',
    description: 'Convert bytes, KB, MB, GB, TB for files, storage, and memory sizes.',
    icon: FiDatabase,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    internalLinks: [
      { from: 'mb', to: 'gb', label: 'MB → GB' },
      { from: 'gb', to: 'mb', label: 'GB → MB' },
      { from: 'gb', to: 'tb', label: 'GB → TB' },
    ],
    converters: [
      { name: 'MB to GB', href: '/mb-to-gb', popular: true },
      { name: 'GB to MB', href: '/gb-to-mb', popular: true },
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
    description: 'Calculate interest, ROI, profit margins, discounts, and percentage changes.',
    icon: FiPercent,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    internalLinks: [
      { from: 'percent', to: 'decimal', label: '% → decimal' },
      { from: 'bps', to: 'percent', label: 'bps → %' },
    ],
    converters: [
      { name: '% Increase Calculator', href: '/percentage-increase-calculator', popular: true },
      { name: '% Decrease Calculator', href: '/percentage-decrease-calculator' },
      { name: 'Profit Margin Calc', href: '/profit-margin-calculator' },
      { name: 'Simple Interest Calc', href: '/simple-interest-calculator' },
      { name: 'Compound Interest', href: '/compound-interest-calculator' },
      { name: 'BPS to Percentage', href: '/basis-points-to-percentage' },
      { name: '% to Decimal', href: '/percentage-to-decimal' },
      { name: 'ROI Calculator', href: '/roi-calculator', popular: true },
      { name: 'Discount Calculator', href: '/discount-calculator', popular: true },
    ]
  },
];

export default function AllConvertersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return converterCategories;
    
    const term = searchTerm.toLowerCase();
    return converterCategories.map(category => ({
      ...category,
      converters: category.converters.filter(conv => 
        conv.name.toLowerCase().includes(term) ||
        category.title.toLowerCase().includes(term)
      )
    })).filter(category => category.converters.length > 0);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All Unit Converters – Free Online Tools
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Access our complete directory of 70+ free unit converters. Instantly convert length, weight, 
              temperature, speed, data storage, and more. Fast, accurate, and SEO-optimized conversion tools 
              for everyday use.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search converters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Popular Converters */}
      {!searchTerm && (
        <section className="py-12 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              🔥 Popular Converters
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/kg-to-lbs" className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-orange-300">
                <div className="text-4xl mb-3">⚖️</div>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">KG to LBS</p>
                <p className="text-sm text-gray-500">Weight Conversion</p>
              </Link>
              <Link href="/cm-to-inches" className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-orange-300">
                <div className="text-4xl mb-3">📏</div>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">CM to Inches</p>
                <p className="text-sm text-gray-500">Length Conversion</p>
              </Link>
              <Link href="/celsius-to-fahrenheit" className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-orange-300">
                <div className="text-4xl mb-3">🌡️</div>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">°C to °F</p>
                <p className="text-sm text-gray-500">Temperature</p>
              </Link>
              <Link href="/mb-to-gb" className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-orange-300">
                <div className="text-4xl mb-3">💾</div>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">MB to GB</p>
                <p className="text-sm text-gray-500">Data Storage</p>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Converter Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-2">
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
                <p className="text-gray-600 dark:text-gray-400 mb-4 ml-16">{category.description}</p>
                
                {/* Internal Links */}
                {category.internalLinks && (
                  <div className="flex flex-wrap gap-2 mb-6 ml-16">
                    {category.internalLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={`/${link.from}-to-${link.to}`}
                        className="inline-flex items-center px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                      >
                        {link.label}
                        <FiArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    ))}
                  </div>
                )}
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.converters.map((converter) => (
                    <Link
                      key={converter.href}
                      href={converter.href}
                      className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                        converter.popular 
                          ? 'bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400' 
                          : 'bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                      }`}
                    >
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center gap-2">
                        {converter.popular && <FiStar className="w-4 h-4 text-orange-500" />}
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
              <div className="text-4xl font-bold text-blue-600 mb-2">70+</div>
              <div className="text-gray-600 dark:text-gray-400">Specialized Converters</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
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

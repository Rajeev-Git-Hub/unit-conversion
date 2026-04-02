'use client';

import Link from 'next/link';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import { useLocalization } from '../lib/LocalizationContext';
import { useState, useEffect, useRef, Suspense, lazy } from 'react';

// Lazy load heavy components
const SearchDropdown = lazy(() => import('../components/SearchDropdown'));

// Lightweight search function
const simpleSearch = (term: string) => {
  const converters = [
    { name: 'KG to LBS', category: 'weight' },
    { name: 'CM to Inches', category: 'length' },
    { name: 'Celsius to Fahrenheit', category: 'temperature' },
    { name: 'MB to GB', category: 'data' },
    { name: 'Meters to Feet', category: 'length' },
    { name: 'Miles to KM', category: 'length' },
  ];
  return converters.filter(c => 
    c.name.toLowerCase().includes(term.toLowerCase()) ||
    c.category.toLowerCase().includes(term.toLowerCase())
  );
};

function HomeContent() {
  const { t } = useLocalization();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConverters, setFilteredConverters] = useState<{ category: string; name: string }[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = simpleSearch(searchTerm);
      setFilteredConverters(results);
      setIsDropdownOpen(true);
    } else {
      setFilteredConverters([]);
      setIsDropdownOpen(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchContainerRef]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

      {/* Hero Section - Premium Design */}
      <section className="relative py-6 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge - High Contrast */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              100% Free — No Registration Required
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Convert Anything
              <span className="block text-3xl md:text-4xl font-light text-blue-700 dark:text-blue-400">
                Instantly & Accurately
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              The most powerful unit converter with real-time search and conversion history
            </p>
            
            {/* Search Box - Enhanced */}
            <div className="max-w-2xl mx-auto mb-12" ref={searchContainerRef}>
              <div className="relative group">
                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 z-10" />
                <input
                  type="text"
                  placeholder={t('home.search.placeholder')}
                  className="relative w-full pl-14 pr-6 py-5 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-lg transition-all z-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsDropdownOpen(searchTerm.length > 0)}
                />
                {isDropdownOpen && (
                  <Suspense fallback={<div className="p-4 text-center text-gray-500">Loading...</div>}>
                    <SearchDropdown results={filteredConverters} onClose={() => setIsDropdownOpen(false)} />
                  </Suspense>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"></div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Unit Converters</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Free Forever</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Registration Needed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">🔒</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Browser-Only Privacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase - Grid Layout */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-blue-700 dark:text-blue-400">Our Platform</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the difference with our premium features designed for professionals
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Universal Search Feature */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-bl-full opacity-10"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FiSearch className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Universal Search</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Search across all converters with intelligent auto-complete and real-time results
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Lightning Fast</span>
                  <FiArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Analytics Feature */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-bl-full opacity-10"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Conversion History</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  View your recent conversions stored locally in your browser
                </p>
                <div className="flex items-center text-purple-600 font-semibold">
                  <span>Privacy-First</span>
                  <FiArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Professional Tools Feature */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-bl-full opacity-10"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Professional Tools</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Industry-grade converters with precision accuracy and reliable results
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span>Always Free</span>
                  <FiArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="/all-converters"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              <span>Explore All Converters</span>
              <FiArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
              Discover our complete collection of professional conversion tools
            </p>
          </div>
        </div>
      </section>

      {/* Trending Converters Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              🔥 Trending Converters
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Most popular conversion tools this week
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/kg-to-lbs"
              className="group block p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">KG to LBS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Weight Conversion</p>
              <div className="mt-4 inline-flex items-center text-blue-500 font-semibold text-sm">
                Convert Now <FiArrowRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/cm-to-inches"
              className="group block p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-5xl mb-4">📏</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">CM to Inches</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Length Conversion</p>
              <div className="mt-4 inline-flex items-center text-blue-500 font-semibold text-sm">
                Convert Now <FiArrowRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/celsius-to-fahrenheit"
              className="group block p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">°C to °F</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Temperature</p>
              <div className="mt-4 inline-flex items-center text-blue-500 font-semibold text-sm">
                Convert Now <FiArrowRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/mb-to-gb"
              className="group block p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-5xl mb-4">💾</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">MB to GB</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Data Storage</p>
              <div className="mt-4 inline-flex items-center text-blue-500 font-semibold text-sm">
                Convert Now <FiArrowRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          {/* Removed duplicate CTA - single CTA in Features section is sufficient */}
        </div>
      </section>

      {/* Latest from Blog Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              📚 Latest from Blog
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Expert guides and conversion tips
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="group block p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center max-w-md"
            >
              <div className="text-5xl mb-4">📖</div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                Explore Our Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Browse our complete collection of conversion guides, tips, and educational content.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                View Articles <FiArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomeClient() {
  return <HomeContent />;
}
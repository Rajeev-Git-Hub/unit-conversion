'use client';

import Link from 'next/link';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import { categories } from '../lib/categories';
import { useLocalization } from '../lib/LocalizationContext';
import { useState, useEffect, useRef } from 'react';
import { getAllConverters } from '../lib/search';
import SearchDropdown from '../components/SearchDropdown';

const allConverters = getAllConverters();

function HomeContent() {
  const { t } = useLocalization();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConverters, setFilteredConverters] = useState<{ category: string; name: string }[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = allConverters.filter(converter =>
        converter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        converter.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
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
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Used by 50,000+ Engineers, Students & Developers
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Convert Anything
              <span className="block text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Instantly & Accurately
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              The most powerful unit converter with 50+ tools, real-time search, and advanced analytics
            </p>
            
            {/* Search Box - Enhanced */}
            <div className="max-w-2xl mx-auto mb-12" ref={searchContainerRef}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors z-10" />
                <input
                  type="text"
                  placeholder="Search for any converter..."
                  className="relative w-full pl-14 pr-6 py-5 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-600 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none shadow-lg transition-all z-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsDropdownOpen(searchTerm.length > 0)}
                />
                {isDropdownOpen && <SearchDropdown results={filteredConverters} onClose={() => setIsDropdownOpen(false)} />}
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-blue-600 mr-2">50+</span>
                <span className="text-gray-600 dark:text-gray-400">Converters</span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-green-600 mr-2">2.3s</span>
                <span className="text-gray-600 dark:text-gray-400">Avg Time</span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-purple-600 mr-2">98%</span>
                <span className="text-gray-600 dark:text-gray-400">Accuracy</span>
              </div>
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Our Platform</span>
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
                  Search across all 50+ converters with intelligent auto-complete and real-time results
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Advanced Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Track conversion patterns, analyze usage trends, and optimize your workflow
                </p>
                <div className="flex items-center text-purple-600 font-semibold">
                  <span>Data-Driven Insights</span>
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
                  <span>Enterprise Quality</span>
                  <FiArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="/categories"
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

      {/* Popular Tools Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Most Popular Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Start with our most-used converters
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <Link
                key={c.key}
                href={`/${c.key}-converter/`}
                className={`group block p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700
                         ${c.key === 'dev-tools' || c.key === 'utilities' ? 'ring-2 ring-blue-500' : ''}`}
              >
                <div className={`mb-4 ${c.color}`}>
                  <c.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 capitalize mb-2">
                  {t(`category.${c.key}`)}
                  {c.key === 'dev-tools' || c.key === 'utilities' && <span className="text-blue-500 ml-2">🆕</span>}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {t('home.convertOf')} {t(`category.${c.key}`).toLowerCase()}.
                </p>
                <div className="flex justify-end items-center text-blue-500 font-semibold">
                  <FiArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600 dark:text-gray-400">Conversions Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9★</div>
              <div className="text-gray-600 dark:text-gray-400">User Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomeClient() {
  return <HomeContent />;
}
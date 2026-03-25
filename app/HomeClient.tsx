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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {t('home.hero.subtitle')}
          </p>
          <div className="max-w-xl mx-auto" ref={searchContainerRef}>
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('home.search.placeholder')}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsDropdownOpen(searchTerm.length > 0)}
              />
              {isDropdownOpen && <SearchDropdown results={filteredConverters} onClose={() => setIsDropdownOpen(false)} />}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((c) => (
            <Link
              key={c.key}
              href={`/${c.key}`}
              className={`group block p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                         ${c.key === 'dev-tools' || c.key === 'utilities' ? 'ring-2 ring-red-500' : ''}`}
            >
              <div className={`mb-4 ${c.color}`}>
                <c.icon className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 dark:text-gray-100 capitalize mb-2">
                {t(`category.${c.key}`)}
                {c.key === 'dev-tools' || c.key === 'utilities' && <span className="text-red-500 ml-2">🆕</span>}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {t('home.convertOf')} {t(`category.${c.key}`).toLowerCase()}.
              </p>
              <div className="flex justify-end items-center text-blue-500 font-semibold">
                <FiArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Tools Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('home.popular.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link
              href="/cm-to-mm"
              className="block p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{t('home.cm_to_mm')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('home.cm_to_mm.desc')}</div>
            </Link>
            <Link
              href="/json-formatter"
              className="block p-4 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            >
              <div className="text-green-600 dark:text-green-400 font-semibold mb-1">{t('home.json_formatter')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('home.json_formatter.desc')}</div>
            </Link>
            <Link
              href="/base64-encoder"
              className="block p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">{t('home.base64_encoder')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('home.base64_encoder.desc')}</div>
            </Link>
            <Link
              href="/age-calculator"
              className="block p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
            >
              <div className="text-orange-600 dark:text-orange-400 font-semibold mb-1">{t('home.age_calculator')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('home.age_calculator.desc')}</div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function HomeClient() {
  return <HomeContent />;
}
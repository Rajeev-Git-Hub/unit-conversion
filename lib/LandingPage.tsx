'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiZap, FiGrid, FiSettings, FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { useLocalization } from './LocalizationContext';
import { categories } from './categories';
import { CATEGORY_GROUPS, GroupName } from './CategoryMenu';

export default function LandingPage() {
  const { t } = useLocalization();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": t('app.title'),
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": t('home.description'),
    "featureList": [
      t('features.instant.title'),
      t('features.comprehensive.title'),
      t('features.customizable.title')
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen dark:bg-blue-900/20" />
          <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-purple-400/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen dark:bg-purple-900/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{t('home.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {t('home.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('home.cta')} <FiArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              {t('nav.about')}
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid / Value Prop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="sr-only">{t('footer.features')}</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-6">
              <FiZap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('features.instant.title')}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t('features.instant.desc')}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
            <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl mb-6">
              <FiGrid className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('features.comprehensive.title')}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t('features.comprehensive.desc')}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
            <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl mb-6">
              <FiSettings className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('features.customizable.title')}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t('features.customizable.desc')}
            </p>
          </div>
        </div>

        {/* Advertisement Placeholder */}
        <div className="mb-16 mx-auto max-w-4xl">
           <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 p-px">
            <div className="relative h-32 bg-white dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center">
              <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded-md">Ad</span>
              <p className="text-gray-400 dark:text-gray-600 font-medium flex items-center gap-2">
                <FiZap className="w-4 h-4" /> {t('ad.space')}
              </p>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div id="categories" className="space-y-16">
          {(Object.keys(CATEGORY_GROUPS) as GroupName[]).map((group) => (
            <div key={group}>
              <div className="flex items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t(`nav.${group.toLowerCase()}`)}
                </h2>
                <div className="ml-4 flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {CATEGORY_GROUPS[group].map((catKey) => {
                  const category = categories.find((c) => c.key === catKey);
                  if (!category) return null;
                  const Icon = category.icon;

                  return (
                    <Link
                      key={catKey}
                      href={`/${catKey}`}
                      className="group flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-white dark:hover:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                    >
                      <div className={`p-3 rounded-xl mb-3 transition-colors duration-200 bg-gray-50 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20`}>
                        <Icon className={`h-8 w-8 ${category.color} transition-transform duration-200 group-hover:scale-110`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-center">
                        {t(`category.${category.key}`)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('home.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
                  {t('footer.description')}
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-white dark:bg-gray-800 rounded-full text-gray-400 hover:text-blue-500 shadow-sm hover:shadow-md transition-all"><FiTwitter className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-white dark:bg-gray-800 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white shadow-sm hover:shadow-md transition-all"><FiGithub className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-white dark:bg-gray-800 rounded-full text-gray-400 hover:text-blue-700 shadow-sm hover:shadow-md transition-all"><FiLinkedin className="w-5 h-5" /></a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6">{t('footer.product')}</h4>
                <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                  <li><a href="#categories" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('footer.converters')}</a></li>
                  <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('footer.features')}</a></li>
                  <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('footer.api')}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6">{t('footer.company')}</h4>
                <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                  <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.about')}</Link></li>
                  <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('footer.privacy')}</a></li>
                  <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('footer.terms')}</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} {t('home.title')}. {t('footer.rights')}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
                <FiMail className="w-4 h-4" />
                <span>contact@example.com</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
'use client';

import Link from 'next/link';
import { FiCode, FiChevronRight, FiFileText, FiLock, FiClock, FiLink } from 'react-icons/fi';
import { useLocalization } from '../../lib/LocalizationContext';

const developerTools = [
  {
    titleKey: 'devtools.json_formatter.title',
    descriptionKey: 'devtools.json_formatter.desc',
    icon: FiFileText,
    href: '/json-formatter',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
  {
    titleKey: 'devtools.base64_encoder.title',
    descriptionKey: 'devtools.base64_encoder.desc',
    icon: FiLock,
    href: '/base64-encoder',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
  {
    titleKey: 'devtools.url_encoder.title',
    descriptionKey: 'devtools.url_encoder.desc',
    icon: FiLink,
    href: '/url-encoder',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
  {
    titleKey: 'devtools.timestamp_converter.title',
    descriptionKey: 'devtools.timestamp_converter.desc',
    icon: FiClock,
    href: '/timestamp-converter',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
];

export default function DevToolsPageClient() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900/20 rounded-full">
              <FiCode className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('devtools.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('devtools.subtitle')}
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              {t('devtools.smart_features')}: {t('devtools.smart_desc')}
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {developerTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${tool.bgColor} dark:bg-opacity-20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${tool.color} dark:group-hover:scale-110 transition-all duration-300`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                      {t(tool.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {t(tool.descriptionKey)}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <span>{t('devtools.use_tool')}</span>
                      <FiChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            {t('devtools.why_choose')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gray-600 dark:text-gray-400 font-bold">?</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('devtools.fast_title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('devtools.fast_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gray-600 dark:text-gray-400 font-bold">?</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('devtools.secure_title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('devtools.secure_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gray-600 dark:text-gray-400 font-bold">?</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('devtools.professional_title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('devtools.professional_desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">{t('devtools.trusted_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-cyan-100">{t('devtools.daily_users')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">1M+</div>
              <div className="text-cyan-100">{t('devtools.conversions')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-cyan-100">{t('devtools.uptime')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

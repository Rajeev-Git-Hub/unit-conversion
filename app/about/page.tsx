'use client';

import { useLocalization } from '../../lib/LocalizationContext';

export default function AboutPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('about.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('about.intro')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('about.mission.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {t('about.mission')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('about.why.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('about.accuracy.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.accuracy.desc')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('about.speed.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.speed.desc')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('about.userfriendly.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.userfriendly.desc')}
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t('about.cta.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t('about.cta.desc')}
            </p>
            <a
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              {t('about.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

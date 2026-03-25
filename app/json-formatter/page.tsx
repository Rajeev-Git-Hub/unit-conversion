'use client';

import JSONFormatterClient from './JSONFormatterClient';
import { useLocalization } from '../../lib/LocalizationContext';

export default function JSONFormatterPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('json.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {t('json.subtitle')}
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              💡 <strong>{t('json.smart_features')}:</strong> {t('json.smart_desc')}
            </p>
          </div>
        </div>

        {/* Main Formatter */}
        <JSONFormatterClient />

        {/* Additional SEO Content */}
        <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t('json.subtitle')}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('json.auto_format')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {t('json.auto_format_desc')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('json.error_detection')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {t('json.error_detection_desc')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('json.syntax_highlighting')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {t('json.syntax_highlighting_desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

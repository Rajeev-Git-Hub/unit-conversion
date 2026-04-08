'use client';

import TimestampConverterClient from './TimestampConverterClient';
import { useLocalization } from '../../lib/LocalizationContext';

export default function TimestampConverterPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* SEO Content */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('timestamp.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {t('timestamp.subtitle')}
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              💡 <strong>{t('timestamp.smart_features')}:</strong> {t('timestamp.smart_desc')}
            </p>
          </div>
        </div>

        {/* Main Converter */}
        <TimestampConverterClient />

        {/* Additional SEO Content */}
        <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('timestamp.what_is')}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t('timestamp.what_is_desc')}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('timestamp.use_cases')}
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>{t('timestamp.use_case_1')}</li>
              <li>{t('timestamp.use_case_2')}</li>
              <li>{t('timestamp.use_case_3')}</li>
              <li>{t('timestamp.use_case_4')}</li>
              <li>{t('timestamp.use_case_5')}</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('timestamp.examples')}
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li><strong>{t('timestamp.example_1')}:</strong> 0</li>
              <li><strong>{t('timestamp.example_2')}:</strong> 946684800</li>
              <li><strong>{t('timestamp.example_3')}:</strong> 1577836800</li>
              <li><strong>{t('timestamp.example_current')}:</strong> {t('timestamp.example_current_desc')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

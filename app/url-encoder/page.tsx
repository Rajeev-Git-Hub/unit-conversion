'use client';

import URLEncoderClient from './URLEncoderClient';
import { useLocalization } from '../../lib/LocalizationContext';

export default function URLEncoderPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* SEO Content */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('url.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {t('url.subtitle')}
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              💡 <strong>{t('url.smart_features')}:</strong> {t('url.smart_desc')}
            </p>
          </div>
        </div>

        {/* Main Encoder */}
        <URLEncoderClient />

        {/* Additional SEO Content */}
        <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('url.what_is_encoding')}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t('url.what_is_encoding_desc')}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('url.use_cases')}
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>{t('url.use_case_1')}</li>
              <li>{t('url.use_case_2')}</li>
              <li>{t('url.use_case_3')}</li>
              <li>{t('url.use_case_4')}</li>
              <li>{t('url.use_case_5')}</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('url.characters_encoding')}
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li><strong>{t('url.space')}:</strong> %20</li>
              <li><strong>{t('url.question_mark')}:</strong> %3F</li>
              <li><strong>{t('url.ampersand')}:</strong> %26</li>
              <li><strong>{t('url.equals')}:</strong> %3D</li>
              <li><strong>{t('url.hash')}:</strong> %23</li>
              <li><strong>{t('url.plus')}:</strong> %2B</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

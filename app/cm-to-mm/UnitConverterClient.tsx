'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiShare2, FiRefreshCw } from 'react-icons/fi';
import { useLocalization } from '../../lib/LocalizationContext';

export default function UnitConverterClient() {
  const { t } = useLocalization();
  const [centimeters, setCentimeters] = useState<string>('');
  const [millimeters, setMillimeters] = useState<string>('');
  const [explanation, setExplanation] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Auto-convert when input changes
  useEffect(() => {
    if (centimeters && !isNaN(parseFloat(centimeters))) {
      const cm = parseFloat(centimeters);
      const mm = cm * 10;
      setMillimeters(mm.toString());
      
      // Generate smart explanation
      const explanationText = `${cm} cm = ${mm} mm. Since 1 centimeter = 10 millimeters, we multiply by 10.`;
      setExplanation(explanationText);
    } else {
      setMillimeters('');
      setExplanation('');
    }
  }, [centimeters]);

  const handleCopy = async () => {
    if (millimeters) {
      try {
        await navigator.clipboard.writeText(`${centimeters} cm = ${millimeters} mm`);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleShare = async () => {
    if (millimeters) {
      const shareText = `${centimeters} cm = ${millimeters} mm`;
      const shareUrl = `${window.location.origin}?cm=${centimeters}&mm=${millimeters}`;
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: 'Centimeter to Millimeter Conversion',
            text: shareText,
            url: shareUrl,
          });
        } else {
          await navigator.clipboard.writeText(shareUrl);
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
        }
      } catch (err) {
        console.error('Failed to share:', err);
      }
    }
  };

  const handleSwap = () => {
    setCentimeters(millimeters);
    setMillimeters(centimeters);
  };

  const handleClear = () => {
    setCentimeters('');
    setMillimeters('');
    setExplanation('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Centimeters Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Centimeters (cm)
          </label>
          <input
            type="number"
            value={centimeters}
            onChange={(e) => setCentimeters(e.target.value)}
            placeholder={t('converter.placeholder')}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-lg"
            autoFocus
          />
        </div>

        {/* Millimeters Output */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Millimeters (mm)
          </label>
          <div className="relative">
            <input
              type="number"
              value={millimeters}
              readOnly
              placeholder={t('converter.result_placeholder')}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100 text-lg"
            />
            {millimeters && (
              <button
                onClick={handleCopy}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                title={t('converter.copy')}
              >
                <FiCopy className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center my-4">
        <button
          onClick={handleSwap}
          className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
          title={t('converter.swap')}
        >
          <FiRefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <FiShare2 className="w-4 h-4" />
          <span>{shareSuccess ? t('base64.link_copied') : t('converter.share')}</span>
        </button>
        
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-900/20 hover:bg-gray-200 dark:hover:bg-gray-900/40 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
        >
          {t('converter.clear')}
        </button>
      </div>

      {/* Explanation */}
      {explanation && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            {explanation}
          </p>
        </div>
      )}

      {/* Quick Examples */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Quick Examples
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { cm: '1', mm: '10' },
            { cm: '5', mm: '50' },
            { cm: '10', mm: '100' },
            { cm: '25.4', mm: '254' }
          ].map((example) => (
            <button
              key={example.cm}
              onClick={() => setCentimeters(example.cm)}
              className="p-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
            >
              {example.cm} cm → {example.mm} mm
            </button>
          ))}
        </div>
      </div>

      {/* Success Messages */}
      {copySuccess && (
        <div className="p-3 bg-gray-100 dark:bg-gray-900/20 border border-gray-300 dark:border-gray-700 rounded-lg mt-6">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            {t('converter.copied')}
          </p>
        </div>
      )}

      {shareSuccess && (
        <div className="p-3 bg-gray-100 dark:bg-gray-900/20 border border-gray-300 dark:border-gray-700 rounded-lg mt-6">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            Share link copied to clipboard!
          </p>
        </div>
      )}
    </div>
  );
}

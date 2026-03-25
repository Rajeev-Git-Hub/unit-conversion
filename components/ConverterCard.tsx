'use client';

import { useState, useEffect } from 'react';
import {
  converters,
  CategoryKey,
  temperatureUnits,
  convert,
  conversionMeta // Import conversionMeta
} from '../lib';
import { categories } from '../lib/categories';
import { useConversionHistory } from '../lib/hooks/useConversionHistory';
import { FaCalculator, FaCaretDown, FaArrowRight, FaExchangeAlt, FaInfoCircle, FaCopy, FaShare } from 'react-icons/fa';
import { useLocalization } from '../lib/LocalizationContext';

type Props = {
  category: CategoryKey;
};

export default function ConverterCard({ category }: Props) {
  const { t } = useLocalization();
  const categoryInfo = categories.find((c) => c.key === category);
  const color = categoryInfo?.color.replace('text-', '') || 'gray-500';

  // Get conversion metadata
  const meta = conversionMeta[category];

  const units =
    category === 'temperature'
      ? temperatureUnits
      : category === 'analytics' || category === 'dev-tools' || category === 'utilities'
      ? []
      : Object.keys(converters[category]);

  const [value, setValue] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const { addConversion } = useConversionHistory();

  const handleCopy = async () => {
    if (result !== null && value && from && to) {
      const conversionText = `${value} ${from} = ${result} ${to}`;
      try {
        await navigator.clipboard.writeText(conversionText);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleShare = async () => {
    if (result !== null && value && from && to) {
      const shareText = `I converted ${value} ${from} to ${result} ${to}!`;
      const shareUrl = window.location.href;
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: 'Unit Conversion Result',
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

  // Auto-convert when input changes
  useEffect(() => {
    const val = parseFloat(value);
    if (!isNaN(val) && from && to) {
      try {
        const conversionResult = convert(category, val, from, to);
        setResult(conversionResult);
      } catch (error) {
        setResult(null);
      }
    } else {
      setResult(null);
    }
  }, [value, from, to, category]);

  const handleConvert = () => {
    const val = parseFloat(value);
    if (!isNaN(val) && from && to) {
      try {
        const conversionResult = convert(category, val, from, to);
        setResult(conversionResult);
        addConversion({
          category,
          value: val,
          from,
          to,
          result: conversionResult,
        });
      } catch (error) {
        setResult(null);
      }
    } else {
      setResult(null);
    }
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  useEffect(() => {
    // Set initial from/to values
    if (units.length > 0) {
      if (!from || !units.includes(from)) {
        setFrom(units[0]);
      }
      if (!to || !units.includes(to)) {
        setTo(units.length > 1 ? units[1] : units[0]);
      }
    }
  }, [units, from, to]);

  // For categories that don't have conversion units, show a message
  if (units.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full border border-gray-200 dark:border-gray-700 text-center">
        <div className="text-gray-600 dark:text-gray-400">
          <p className="text-lg font-medium mb-2">
            {category === 'analytics' && t('analytics.title')}
            {category === 'dev-tools' && t('devtools.title')}
            {category === 'utilities' && t('utilities.title')}
          </p>
          <p className="text-sm">
            {category === 'analytics' && 'View your conversion analytics and history'}
            {category === 'dev-tools' && 'Access developer tools and utilities'}
            {category === 'utilities' && 'Access utility tools and calculators'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full border border-gray-200 dark:border-gray-700">

      {/* --- Value Input --- */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('converter.value')}</label>
        <div className="relative">
          <FaCalculator className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <input
            type="number"
            className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-4 pl-12 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder={t('converter.placeholder')}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      {/* --- From/To Selectors --- */}
      <div className="flex items-center gap-2 md:gap-4 mb-6">
        {/* From */}
        <div className="relative flex-1">
          <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">{t('converter.from')}</label>
          <div className="relative">
            <select
              className="w-full appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 flex-1 rounded-lg capitalize text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
            >
              {units.map((u) => ( <option key={u} value={u}>{u}</option> ))}
            </select>
            <FaCaretDown className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Swap Button */}
        <div className="mt-5">
            <button
                onClick={handleSwap}
                className="p-4 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:rotate-180 transition-all duration-300"
                aria-label="Swap units"
            >
                <FaExchangeAlt />
            </button>
        </div>

        {/* To */}
        <div className="relative flex-1">
          <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">{t('converter.to')}</label>
          <div className="relative">
            <select
              className="w-full appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 flex-1 rounded-lg capitalize text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              onChange={(e) => setTo(e.target.value)}
              value={to}
            >
              {units.map((u) => ( <option key={u} value={u}>{u}</option>))}
            </select>
            <FaCaretDown className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* --- Convert Button --- */}
      <button
        onClick={handleConvert}
        className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-4 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500 transition-all duration-300 ease-in-out mb-6"
      >
        {t('converter.convert')}
        <FaArrowRight />
      </button>

      {/* --- Result Display --- */}
      <div className="p-6 rounded-lg text-center border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <span className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Result</span>
        <div className={`text-4xl font-extrabold text-blue-600 mt-2 wrap-break-word min-h-12.5`}>
          {result !== null ? result : '-'}
        </div>

        {/* Copy and Share Buttons */}
        {result !== null && (
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
            >
              <FaCopy className="w-4 h-4" />
              {copySuccess ? t('converter.copied') : t('converter.copy')}
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
            >
              <FaShare className="w-4 h-4" />
              {shareSuccess ? t('base64.link_copied') : t('converter.share')}
            </button>
          </div>
        )}

        {result !== null && meta && (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-left">
            <h3 className="flex items-center text-lg font-bold text-blue-800 dark:text-blue-300 mb-4">
              <FaInfoCircle className="mr-2 text-blue-600 dark:text-blue-400" />
              Conversion Information
            </h3>
            <dl className="space-y-3">
              {meta.formula && (
                <div>
                  <dt className="font-semibold text-gray-700 dark:text-gray-200 text-sm">Formula:</dt>
                  <dd className="mt-1 text-gray-800 dark:text-gray-100 bg-blue-100 dark:bg-gray-700 p-2 rounded-md font-mono text-xs">{meta.formula}</dd>
                </div>
              )}
              {meta.constants && (
                <div>
                  <dt className="font-semibold text-gray-700 dark:text-gray-200 text-sm">Constants:</dt>
                  <dd className="text-gray-600 dark:text-gray-400 text-sm">{meta.constants}</dd>
                </div>
              )}
              {meta.assumptions && (
                <div>
                  <dt className="font-semibold text-gray-700 dark:text-gray-200 text-sm">Assumptions:</dt>
                  <dd className="text-gray-600 dark:text-gray-400 text-sm">{meta.assumptions}</dd>
                </div>
              )}
              {meta.standard && (
                <div>
                  <dt className="font-semibold text-gray-700 dark:text-gray-200 text-sm">Standard:</dt>
                  <dd className="text-gray-600 dark:text-gray-400 text-sm">{meta.standard}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}

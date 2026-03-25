// SEO Page configurations for high-traffic conversions
export interface SEOPageConfig {
  url: string;
  title: string;
  description: string;
  fromUnit: string;
  toUnit: string;
  conversionFactor: number;
  examples: { from: string; to: string }[];
  explanation: string;
  category: string;
}

export const seoPages: SEOPageConfig[] = [
  // Length Conversions (High Traffic)
  {
    url: 'cm-to-mm',
    title: 'Centimeter to Millimeter Converter',
    description: 'Convert centimeters to millimeters instantly. 1 cm = 10 mm. Free online converter.',
    fromUnit: 'Centimeter',
    toUnit: 'Millimeter',
    conversionFactor: 10,
    examples: [
      { from: '1', to: '10' },
      { from: '5', to: '50' },
      { from: '10', to: '100' },
      { from: '25', to: '250' }
    ],
    explanation: '1 centimeter equals 10 millimeters, so we multiply by 10.',
    category: 'length'
  },
  {
    url: 'mm-to-cm',
    title: 'Millimeter to Centimeter Converter',
    description: 'Convert millimeters to centimeters instantly. 10 mm = 1 cm. Free online converter.',
    fromUnit: 'Millimeter',
    toUnit: 'Centimeter',
    conversionFactor: 0.1,
    examples: [
      { from: '10', to: '1' },
      { from: '50', to: '5' },
      { from: '100', to: '10' },
      { from: '250', to: '25' }
    ],
    explanation: '10 millimeters equal 1 centimeter, so we divide by 10.',
    category: 'length'
  },
  {
    url: 'm-to-cm',
    title: 'Meter to Centimeter Converter',
    description: 'Convert meters to centimeters instantly. 1 m = 100 cm. Free online converter.',
    fromUnit: 'Meter',
    toUnit: 'Centimeter',
    conversionFactor: 100,
    examples: [
      { from: '1', to: '100' },
      { from: '2.5', to: '250' },
      { from: '5', to: '500' },
      { from: '10', to: '1000' }
    ],
    explanation: '1 meter equals 100 centimeters, so we multiply by 100.',
    category: 'length'
  },
  {
    url: 'cm-to-m',
    title: 'Centimeter to Meter Converter',
    description: 'Convert centimeters to meters instantly. 100 cm = 1 m. Free online converter.',
    fromUnit: 'Centimeter',
    toUnit: 'Meter',
    conversionFactor: 0.01,
    examples: [
      { from: '100', to: '1' },
      { from: '250', to: '2.5' },
      { from: '500', to: '5' },
      { from: '1000', to: '10' }
    ],
    explanation: '100 centimeters equal 1 meter, so we divide by 100.',
    category: 'length'
  },
  {
    url: 'km-to-m',
    title: 'Kilometer to Meter Converter',
    description: 'Convert kilometers to meters instantly. 1 km = 1000 m. Free online converter.',
    fromUnit: 'Kilometer',
    toUnit: 'Meter',
    conversionFactor: 1000,
    examples: [
      { from: '1', to: '1000' },
      { from: '2.5', to: '2500' },
      { from: '5', to: '5000' },
      { from: '10', to: '10000' }
    ],
    explanation: '1 kilometer equals 1000 meters, so we multiply by 1000.',
    category: 'length'
  },
  {
    url: 'm-to-km',
    title: 'Meter to Kilometer Converter',
    description: 'Convert meters to kilometers instantly. 1000 m = 1 km. Free online converter.',
    fromUnit: 'Meter',
    toUnit: 'Kilometer',
    conversionFactor: 0.001,
    examples: [
      { from: '1000', to: '1' },
      { from: '2500', to: '2.5' },
      { from: '5000', to: '5' },
      { from: '10000', to: '10' }
    ],
    explanation: '1000 meters equal 1 kilometer, so we divide by 1000.',
    category: 'length'
  },

  // Weight Conversions (High Traffic)
  {
    url: 'kg-to-g',
    title: 'Kilogram to Gram Converter',
    description: 'Convert kilograms to grams instantly. 1 kg = 1000 g. Free online converter.',
    fromUnit: 'Kilogram',
    toUnit: 'Gram',
    conversionFactor: 1000,
    examples: [
      { from: '1', to: '1000' },
      { from: '2.5', to: '2500' },
      { from: '5', to: '5000' },
      { from: '10', to: '10000' }
    ],
    explanation: '1 kilogram equals 1000 grams, so we multiply by 1000.',
    category: 'weight'
  },
  {
    url: 'g-to-kg',
    title: 'Gram to Kilogram Converter',
    description: 'Convert grams to kilograms instantly. 1000 g = 1 kg. Free online converter.',
    fromUnit: 'Gram',
    toUnit: 'Kilogram',
    conversionFactor: 0.001,
    examples: [
      { from: '1000', to: '1' },
      { from: '2500', to: '2.5' },
      { from: '5000', to: '5' },
      { from: '10000', to: '10' }
    ],
    explanation: '1000 grams equal 1 kilogram, so we divide by 1000.',
    category: 'weight'
  },
  {
    url: 'kg-to-lb',
    title: 'Kilogram to Pound Converter',
    description: 'Convert kilograms to pounds instantly. 1 kg ≈ 2.205 lb. Free online converter.',
    fromUnit: 'Kilogram',
    toUnit: 'Pound',
    conversionFactor: 2.20462,
    examples: [
      { from: '1', to: '2.205' },
      { from: '5', to: '11.023' },
      { from: '10', to: '22.046' },
      { from: '50', to: '110.231' }
    ],
    explanation: '1 kilogram equals approximately 2.205 pounds, so we multiply by 2.205.',
    category: 'weight'
  },
  {
    url: 'lb-to-kg',
    title: 'Pound to Kilogram Converter',
    description: 'Convert pounds to kilograms instantly. 1 lb ≈ 0.454 kg. Free online converter.',
    fromUnit: 'Pound',
    toUnit: 'Kilogram',
    conversionFactor: 0.453592,
    examples: [
      { from: '1', to: '0.454' },
      { from: '5', to: '2.268' },
      { from: '10', to: '4.536' },
      { from: '50', to: '22.68' }
    ],
    explanation: '1 pound equals approximately 0.454 kilograms, so we multiply by 0.454.',
    category: 'weight'
  },

  // Temperature Conversions (High Traffic)
  {
    url: 'celsius-to-fahrenheit',
    title: 'Celsius to Fahrenheit Converter',
    description: 'Convert Celsius to Fahrenheit instantly. Formula: (°C × 9/5) + 32 = °F. Free online converter.',
    fromUnit: 'Celsius',
    toUnit: 'Fahrenheit',
    conversionFactor: 1, // Special case - needs custom formula
    examples: [
      { from: '0', to: '32' },
      { from: '20', to: '68' },
      { from: '37', to: '98.6' },
      { from: '100', to: '212' }
    ],
    explanation: 'Fahrenheit = (Celsius × 9/5) + 32',
    category: 'temperature'
  },
  {
    url: 'fahrenheit-to-celsius',
    title: 'Fahrenheit to Celsius Converter',
    description: 'Convert Fahrenheit to Celsius instantly. Formula: (°F - 32) × 5/9 = °C. Free online converter.',
    fromUnit: 'Fahrenheit',
    toUnit: 'Celsius',
    conversionFactor: 1, // Special case - needs custom formula
    examples: [
      { from: '32', to: '0' },
      { from: '68', to: '20' },
      { from: '98.6', to: '37' },
      { from: '212', to: '100' }
    ],
    explanation: 'Celsius = (Fahrenheit - 32) × 5/9',
    category: 'temperature'
  },

  // Data Storage Conversions (High Traffic)
  {
    url: 'mb-to-gb',
    title: 'MB to GB Converter',
    description: 'Convert megabytes to gigabytes instantly. 1024 MB = 1 GB. Free online converter.',
    fromUnit: 'Megabyte',
    toUnit: 'Gigabyte',
    conversionFactor: 1/1024,
    examples: [
      { from: '1024', to: '1' },
      { from: '2048', to: '2' },
      { from: '5120', to: '5' },
      { from: '10240', to: '10' }
    ],
    explanation: '1024 megabytes equal 1 gigabyte, so we divide by 1024.',
    category: 'data'
  },
  {
    url: 'gb-to-mb',
    title: 'GB to MB Converter',
    description: 'Convert gigabytes to megabytes instantly. 1 GB = 1024 MB. Free online converter.',
    fromUnit: 'Gigabyte',
    toUnit: 'Megabyte',
    conversionFactor: 1024,
    examples: [
      { from: '1', to: '1024' },
      { from: '2', to: '2048' },
      { from: '5', to: '5120' },
      { from: '10', to: '10240' }
    ],
    explanation: '1 gigabyte equals 1024 megabytes, so we multiply by 1024.',
    category: 'data'
  },
  {
    url: 'gb-to-tb',
    title: 'GB to TB Converter',
    description: 'Convert gigabytes to terabytes instantly. 1024 GB = 1 TB. Free online converter.',
    fromUnit: 'Gigabyte',
    toUnit: 'Terabyte',
    conversionFactor: 1/1024,
    examples: [
      { from: '1024', to: '1' },
      { from: '2048', to: '2' },
      { from: '5120', to: '5' },
      { from: '10240', to: '10' }
    ],
    explanation: '1024 gigabytes equal 1 terabyte, so we divide by 1024.',
    category: 'data'
  },
  {
    url: 'tb-to-gb',
    title: 'TB to GB Converter',
    description: 'Convert terabytes to gigabytes instantly. 1 TB = 1024 GB. Free online converter.',
    fromUnit: 'Terabyte',
    toUnit: 'Gigabyte',
    conversionFactor: 1024,
    examples: [
      { from: '1', to: '1024' },
      { from: '2', to: '2048' },
      { from: '5', to: '5120' },
      { from: '10', to: '10240' }
    ],
    explanation: '1 terabyte equals 1024 gigabytes, so we multiply by 1024.',
    category: 'data'
  }
];

// Function to generate SEO pages dynamically
export function generateSEOPage(config: SEOPageConfig) {
  return `
import { Metadata } from 'next';
import UnitConverterClient from './UnitConverterClient';

export const metadata: Metadata = {
  title: '${config.title} (Free & Instant) | ConvertMaster',
  description: '${config.description}',
  keywords: ['${config.url.replace('-', ' ')}', '${config.fromUnit.toLowerCase()} to ${config.toUnit.toLowerCase()}', 'converter', 'online tool'],
  openGraph: {
    title: '${config.title}',
    description: '${config.description}',
    type: 'website',
  },
};

export default function ${config.url.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* SEO Content */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            ${config.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            ${config.description}
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              💡 <strong>Smart Explanation:</strong> ${config.explanation}
            </p>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Common Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${config.examples.map(ex => `
            <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-medium">${ex.from} ${config.fromUnit.charAt(0).toLowerCase()}</span>
              <span className="text-blue-600 dark:text-blue-400">= ${ex.to} ${config.toUnit.charAt(0).toLowerCase()}</span>
            </div>`).join('')}
          </div>
        </div>

        {/* Main Converter */}
        <UnitConverterClient />

        {/* Additional SEO Content */}
        <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            How to Convert ${config.fromUnit}s to ${config.toUnit}s
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Converting ${config.fromUnit.toLowerCase()}s to ${config.toUnit.toLowerCase()}s is simple. ${config.explanation}
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-4 mb-4">
              <p className="font-mono text-center text-lg">
                ${config.toUnit.charAt(0).toLowerCase()} = ${config.fromUnit.charAt(0).toLowerCase()} × ${config.conversionFactor}
              </p>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Example:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              To convert ${config.examples[1].from} ${config.fromUnit.toLowerCase()}s to ${config.toUnit.toLowerCase()}s:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-4 mb-4">
              <p className="font-mono">
                ${config.examples[1].from} ${config.fromUnit.charAt(0).toLowerCase()} × ${config.conversionFactor} = ${config.examples[1].to} ${config.toUnit.charAt(0).toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  `;
}

// Function to generate UnitConverterClient for different conversions
export function generateUnitConverterClient(config: SEOPageConfig) {
  const isTemperature = config.category === 'temperature';
  
  return `
'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiShare2, FiRefreshCw } from 'react-icons/fi';

export default function UnitConverterClient() {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [explanation, setExplanation] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Auto-convert when input changes
  useEffect(() => {
    if (fromValue && !isNaN(parseFloat(fromValue))) {
      const value = parseFloat(fromValue);
      let result: number;
      let explanationText: string;

      ${isTemperature ? `
      // Special handling for temperature conversions
      if ('${config.url}' === 'celsius-to-fahrenheit') {
        result = (value * 9/5) + 32;
        explanationText = \`\${value}°C × 9/5 + 32 = \${result.toFixed(1)}°F. Apply the Fahrenheit formula.\`;
      } else if ('${config.url}' === 'fahrenheit-to-celsius') {
        result = (value - 32) * 5/9;
        explanationText = \`\${value}°F - 32 × 5/9 = \${result.toFixed(1)}°C. Apply the Celsius formula.\`;
      } else {
        result = value * ${config.conversionFactor};
        explanationText = \`\${value} ${config.fromUnit.charAt(0).toLowerCase()} × ${config.conversionFactor} = \${result} ${config.toUnit.charAt(0).toLowerCase()}. ${config.explanation}\`;
      }
      ` : `
      result = value * ${config.conversionFactor};
      explanationText = \`\${value} ${config.fromUnit.charAt(0).toLowerCase()} × ${config.conversionFactor} = \${result} ${config.toUnit.charAt(0).toLowerCase()}. ${config.explanation}\`;
      `}

      setToValue(${isTemperature ? 'result.toFixed(1)' : 'result.toString()'});
      setExplanation(explanationText);
    } else {
      setToValue('');
      setExplanation('');
    }
  }, [fromValue]);

  const handleCopy = async () => {
    if (toValue) {
      try {
        await navigator.clipboard.writeText(\`\${fromValue} ${config.fromUnit.charAt(0).toLowerCase()} = \${toValue} ${config.toUnit.charAt(0).toLowerCase()}\`);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleShare = async () => {
    if (toValue) {
      const shareText = \`\${fromValue} ${config.fromUnit.charAt(0).toLowerCase()} = \${toValue} ${config.toUnit.charAt(0).toLowerCase()}\`;
      const shareUrl = \`\${window.location.origin}?from=\${fromValue}&to=\${toValue}\`;
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: '${config.title}',
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
    setFromValue(toValue);
    setToValue(fromValue);
  };

  const handleClear = () => {
    setFromValue('');
    setToValue('');
    setExplanation('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* From Unit Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            ${config.fromUnit}s (${config.fromUnit.charAt(0).toLowerCase()})
          </label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            placeholder="Enter ${config.fromUnit.toLowerCase()}s"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-lg"
            autoFocus
          />
        </div>

        {/* To Unit Output */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            ${config.toUnit}s (${config.toUnit.charAt(0).toLowerCase()})
          </label>
          <div className="relative">
            <input
              type="text"
              value={toValue}
              readOnly
              placeholder="Result in ${config.toUnit.toLowerCase()}s"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100 text-lg font-medium"
            />
            {toValue && (
              <button
                onClick={handleCopy}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                title="Copy result"
              >
                <FiCopy className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Smart Explanation */}
      {explanation && (
        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-800 dark:text-green-200 text-sm">
            💡 <strong>Calculation:</strong> {explanation}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={handleSwap}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
        >
          <FiRefreshCw className="w-4 h-4" />
          <span>Swap</span>
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <FiShare2 className="w-4 h-4" />
          <span>{shareSuccess ? 'Link Copied!' : 'Share'}</span>
        </button>
        
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/40 text-red-700 dark:text-red-300 rounded-lg transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Copy Success Message */}
      {copySuccess && (
        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
          <p className="text-green-800 dark:text-green-200 text-sm">
            ✅ Result copied to clipboard!
          </p>
        </div>
      )}

      {/* Quick Examples */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Quick Examples
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          ${config.examples.map(ex => `
          <button
            onClick={() => setFromValue('${ex.from}')}
            className="p-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
          >
            ${ex.from} ${config.fromUnit.charAt(0).toLowerCase()} → ${ex.to} ${config.toUnit.charAt(0).toLowerCase()}
          </button>`).join('')}
        </div>
      </div>
    </div>
  );
}
  `;
}

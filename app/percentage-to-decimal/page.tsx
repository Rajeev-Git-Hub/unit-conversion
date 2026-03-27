'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PercentageToDecimalPage() {
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const convertToDecimal = () => {
    const percent = parseFloat(percentage);
    if (!isNaN(percent)) {
      const decimal = percent / 100;
      setResult(decimal);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Percentage to Decimal</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert percentage to decimal instantly. Just divide by 100.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🧮</div>
                <p className="text-gray-600 dark:text-gray-400">Enter percentage to convert to decimal</p>
                <div className="mt-6 space-y-4">
                  <input 
                    type="number" 
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    placeholder="Percentage (e.g., 75)..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <button 
                    onClick={convertToDecimal}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Convert to Decimal
                  </button>
                  {result !== null && (
                    <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <p className="text-lg text-gray-700 dark:text-gray-300">Decimal:</p>
                      <p className="text-3xl font-bold text-blue-600">{result.toFixed(4)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Decimal = Percentage ÷ 100</p>
              <p className="text-gray-600 dark:text-gray-300">Move the decimal point two places to the left</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { percent: '1%', decimal: '0.01' },
              { percent: '5%', decimal: '0.05' },
              { percent: '10%', decimal: '0.10' },
              { percent: '12.5%', decimal: '0.125' },
              { percent: '25%', decimal: '0.25' },
              { percent: '33.33%', decimal: '0.3333' },
              { percent: '50%', decimal: '0.50' },
              { percent: '75%', decimal: '0.75' },
              { percent: '90%', decimal: '0.90' },
              { percent: '100%', decimal: '1.00' },
              { percent: '150%', decimal: '1.50' },
              { percent: '200%', decimal: '2.00' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.percent}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-bold text-gray-900 dark:text-white">{item.decimal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Calculators</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/basis-points-to-percentage" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">BPS to %</Link>
            <Link href="/percentage-calculator" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">% Calculator</Link>
            <Link href="/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Tools</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

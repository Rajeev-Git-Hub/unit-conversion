'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BasisPointsToPercentagePage() {
  const [bps, setBps] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const convertToPercentage = () => {
    const basisPoints = parseFloat(bps);
    if (basisPoints >= 0) {
      const percentage = basisPoints / 100;
      setResult(percentage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Basis Points to Percentage</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert basis points (bps) to percentage. 100 bps = 1%
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600 dark:text-gray-400">Enter basis points to convert to percentage</p>
                <div className="mt-6 space-y-4">
                  <input 
                    type="number" 
                    value={bps}
                    onChange={(e) => setBps(e.target.value)}
                    placeholder="Basis points (e.g., 50)..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  />
                  <button 
                    onClick={convertToPercentage}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Convert to %
                  </button>
                  {result !== null && (
                    <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <p className="text-lg text-gray-700 dark:text-gray-300">Percentage:</p>
                      <p className="text-3xl font-bold text-blue-600">{result.toFixed(2)}%</p>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">What are Basis Points?</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                A basis point (bp or bps) is a unit of measure used in finance to describe the percentage change in the value or rate of a financial instrument.
              </p>
              <p className="text-xl font-bold text-center text-blue-600">1 basis point = 0.01% = 0.0001 in decimal</p>
              <p className="text-xl font-bold text-center text-blue-600 mt-2">100 basis points = 1%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { bps: '1 bp', percent: '0.01%' },
              { bps: '10 bps', percent: '0.10%' },
              { bps: '25 bps', percent: '0.25%' },
              { bps: '50 bps', percent: '0.50%' },
              { bps: '75 bps', percent: '0.75%' },
              { bps: '100 bps', percent: '1.00%' },
              { bps: '150 bps', percent: '1.50%' },
              { bps: '200 bps', percent: '2.00%' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-blue-600">{item.bps}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-bold text-gray-900 dark:text-white">{item.percent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Where Are Basis Points Used?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
              <p className="font-semibold text-lg text-gray-900 dark:text-white">🏦 Interest Rates</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Central banks change rates by 25 or 50 basis points</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
              <p className="font-semibold text-lg text-gray-900 dark:text-white">📈 Bond Yields</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Bond yield changes are measured in basis points</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
              <p className="font-semibold text-lg text-gray-900 dark:text-white">💳 Credit Cards</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">APR differences between cards in basis points</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Calculators</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/percentage-to-decimal" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">% to Decimal</Link>
            <Link href="/percentage-calculator" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">% Calculator</Link>
            <Link href="/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Tools</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

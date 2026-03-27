'use client';

import { useState } from 'react';
import Papa from 'papaparse';
import {
  convert,
  CategoryKey,
  conversionMeta
} from '../lib';
import { categories } from '../lib/categories';

type Props = {
  category: CategoryKey;
};

export default function BatchConverter({ category }: Props) {
  const [rows, setRows] = useState<any[]>([]);
  const [output, setOutput] = useState<any[]>([]);
  
  const categoryInfo = categories.find((c) => c.key === category);
  const color = categoryInfo?.color.replace('text-', '') || 'gray-500';

  const handleFile = (file: File) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => setRows(result.data)
    });
  };

  const runConversion = () => {
    const results = rows.map((r) => ({
      ...r,
      result: convert(
        category,
        Number(r.value),
        r.from,
        r.to
      )
    }));
    setOutput(results);
  };

  return (
    <div className="mt-10 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Batch / CSV Conversion</h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => e.target.files && handleFile(e.target.files[0])}
        className="mb-4 block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />

      <button
        onClick={runConversion}
        disabled={rows.length === 0}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-600"
      >
        Convert CSV
      </button>

      {output.length > 0 ? (
        <div className="mt-6">
          <pre className="text-sm p-4 rounded bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
            {JSON.stringify(output, null, 2)}
          </pre>

          <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p><strong>Formula:</strong> {conversionMeta[category].formula}</p>
            <p><strong>Constants:</strong> {conversionMeta[category].constants}</p>
            <p><strong>Assumptions:</strong> {conversionMeta[category].assumptions}</p>
            <p><strong>Standard:</strong> {conversionMeta[category].standard}</p>
          </div>
        </div>
      ) : (
        <div className="mt-6 p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg text-center">
          <p className="text-gray-400 italic">
            👉 Upload a CSV file and click Convert to see results here
          </p>
        </div>
      )}
    </div>
  );
}

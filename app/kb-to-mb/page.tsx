import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KB to MB Converter - Convert Kilobytes to Megabytes',
  description: 'Free KB to MB converter. Convert kilobytes to megabytes instantly. 1 MB = 1024 KB. Accurate results, conversion formula, and practical examples.',
  keywords: 'kb to mb, kilobytes to megabytes, convert kb to mb, kb mb converter, data storage converter',
  openGraph: {
    title: 'KB to MB Converter',
    description: 'Convert kilobytes to megabytes instantly',
    type: 'website',
  },
};

export default function KbToMbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KB to MB Converter</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert kilobytes to megabytes instantly. 1 MB = 1024 KB
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="kilobyte" defaultTo="megabyte" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">MB = KB ÷ 1024</p>
              <p className="text-gray-600 dark:text-gray-300">Divide kilobytes by 1024 to get megabytes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { kb: '512 KB', mb: '0.5 MB' },
              { kb: '1024 KB', mb: '1 MB' },
              { kb: '2048 KB', mb: '2 MB' },
              { kb: '5120 KB', mb: '5 MB' },
              { kb: '10240 KB', mb: '10 MB' },
              { kb: '51200 KB', mb: '50 MB' },
              { kb: '102400 KB', mb: '100 MB' },
              { kb: '256 KB', mb: '0.25 MB' },
              { kb: '128 KB', mb: '0.125 MB' },
              { kb: '100 KB', mb: '0.098 MB' },
              { kb: '1000 KB', mb: '0.977 MB' },
              { kb: '500 KB', mb: '0.488 MB' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-indigo-600">{item.kb}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.mb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/mb-to-kb/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">MB to KB</Link>
            <Link href="/kb-to-bytes/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">KB to Bytes</Link>
            <Link href="/data-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'MB to GB Converter – Convert Megabytes to Gigabytes | Free Tool',
  description: 'Free MB to GB converter. Convert megabytes to gigabytes instantly with accurate results. Learn the difference between MB and GB, understand file sizes, storage capacity, and data usage.',
  keywords: 'mb to gb, megabytes to gigabytes, convert mb to gb, data storage converter, file size converter, memory converter',
  openGraph: {
    title: 'MB to GB Converter – Convert Megabytes to Gigabytes',
    description: 'Convert megabytes to gigabytes instantly with accurate results and comprehensive guide',
    type: 'website',
  },
};

export default function MbToGbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              MB to GB Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Convert megabytes to gigabytes instantly. 1 GB = 1024 MB
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="megabyte" defaultTo="gigabyte" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding MB to GB Conversion
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting megabytes (MB) to gigabytes (GB) is essential in our digital world. Whether you are 
              checking your phone storage, downloading files, or managing cloud storage, understanding these 
              units helps you make informed decisions about your digital space.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              A megabyte is a unit of digital information equal to approximately one million bytes. 
              A gigabyte is larger, equal to approximately one billion bytes or 1024 megabytes. 
              These units measure everything from document sizes to video game installations.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our free MB to GB converter provides instant, accurate results. Simply enter your file size 
              in megabytes, and see the equivalent in gigabytes immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">GB = MB ÷ 1024</p>
              <p className="text-gray-600 dark:text-gray-300">Divide megabytes by 1024 to get gigabytes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { mb: '512 MB', gb: '0.5 GB' },
              { mb: '1024 MB', gb: '1 GB' },
              { mb: '2048 MB', gb: '2 GB' },
              { mb: '4096 MB', gb: '4 GB' },
              { mb: '5120 MB', gb: '5 GB' },
              { mb: '8192 MB', gb: '8 GB' },
              { mb: '10240 MB', gb: '10 GB' },
              { mb: '16384 MB', gb: '16 GB' },
              { mb: '256 MB', gb: '0.25 GB' },
              { mb: '128 MB', gb: '0.125 GB' },
              { mb: '100 MB', gb: '0.098 GB' },
              { mb: '500 MB', gb: '0.488 GB' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-indigo-600">{item.mb}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.gb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World File Sizes */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Real-World File Sizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Documents</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>Word document: 50-500 KB</li>
                <li>PDF file: 100 KB - 10 MB</li>
                <li>PowerPoint: 1-50 MB</li>
                <li>E-book: 2-10 MB</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Audio Files</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>MP3 song (3 min): 3-8 MB</li>
                <li>Album (10 songs): 50-120 MB</li>
                <li>Podcast (1 hour): 25-60 MB</li>
                <li>Audiobook: 50-300 MB</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Video Files</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>YouTube video (5 min): 50-200 MB</li>
                <li>Movie (1080p): 1.5-4 GB</li>
                <li>4K video: 4-20 GB</li>
                <li>TikTok video: 10-50 MB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Is 1 GB equal to 1000 MB or 1024 MB?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                In computing, 1 GB = 1024 MB (binary system). However, storage manufacturers often use 1 GB = 1000 MB (decimal). 
                Our converter uses the standard 1024 MB = 1 GB for accurate calculations.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                How many MB are in 1 GB?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                There are exactly 1024 megabytes (MB) in 1 gigabyte (GB) when using binary calculations.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                What is bigger: MB or GB?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                GB (gigabyte) is bigger than MB (megabyte). 1 GB = 1024 MB, so a gigabyte is approximately 1000 times larger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Converters */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Data Storage Converters</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Explore more storage conversion tools for all your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gb-to-mb/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md">
              GB to MB
            </Link>
            <Link href="/gb-to-tb/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              GB to TB
            </Link>
            <Link href="/mb-to-kb/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md">
              MB to KB
            </Link>
            <Link href="/kb-to-mb/" className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-md">
              KB to MB
            </Link>
            <Link href="/data-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md">
              All Data Converters
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About MB to GB Conversion
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Megabytes (MB) and gigabytes (GB) are units of digital information storage. A megabyte consists of 
            approximately one million bytes, while a gigabyte consists of approximately one billion bytes. These units 
            are used to measure file sizes, storage capacity, data transfer, and memory usage in computers and digital devices.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The conversion between MB and GB uses a base-2 (binary) system where 1 GB equals 1024 MB. This is because 
            computers operate using binary code. Understanding this conversion helps you manage storage space, estimate 
            download times, and compare storage capacities across different devices and services.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you are managing your phone storage, choosing a cloud storage plan, or estimating file sizes for 
            sharing, knowing how to convert between MB and GB is essential in our increasingly digital world. 
            Our converter provides accurate results instantly, helping you make informed decisions about your digital storage.
          </p>
        </div>
      </section>
    </div>
  );
}

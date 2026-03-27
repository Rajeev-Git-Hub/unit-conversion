import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Data Converter - Free Online Tool | Convert GB, MB, KB, Bytes, Bits',
  description: 'Free online data converter. Convert between gigabytes, megabytes, kilobytes, bytes, bits. Accurate calculations, conversion tables, and digital storage examples.',
  keywords: 'data converter, GB to MB, MB to KB, bytes to bits, data storage converter, file size converter, online tool',
  openGraph: {
    title: 'Data Converter - Free Online Tool',
    description: 'Convert between different units of data storage instantly',
    type: 'website',
  },
};

export default function DataConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert between gigabytes, megabytes, kilobytes, bytes, and bits
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="megabyte" defaultTo="gigabyte" />
            </div>
          </div>
        </div>
      </section>

      {/* Data Unit Definitions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Data Unit Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Byte (B)</h3>
              <p className="text-gray-600 dark:text-gray-300">The basic unit of digital information. Equal to 8 bits. Used for measuring file sizes, memory capacity, and data storage across all computing devices.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Kilobyte (KB)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 bytes. Used for measuring small text documents, configuration files, and email attachments in digital storage systems.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Megabyte (MB)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 kilobytes or approximately 1 million bytes. Used for measuring photos, documents, music files, and application sizes.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Gigabyte (GB)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 megabytes or approximately 1 billion bytes. Used for measuring video files, software installations, and device storage capacity.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Terabyte (TB)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 gigabytes or approximately 1 trillion bytes. Used for measuring hard drive capacity, server storage, and large database sizes.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Petabyte (PB)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 terabytes or approximately 1 quadrillion bytes. Used for measuring data center storage, cloud infrastructure, and big data analytics.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Exabyte (EB)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 petabytes or approximately 1 quintillion bytes. Used for measuring global internet traffic, massive data centers, and enterprise-level storage systems.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Bit (b)</h3>
              <p className="text-gray-600 dark:text-gray-300">The smallest unit of digital information, representing a binary value of 0 or 1. Used for measuring data transfer rates and network speeds.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Kilobit (Kb)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 bits or 128 bytes. Used for measuring internet connection speeds, data transfer rates, and network bandwidth in kilobits per second (Kbps).</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Megabit (Mb)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 kilobits or approximately 131,072 bytes. Commonly used for measuring broadband internet speeds in megabits per second (Mbps).</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Gigabit (Gb)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 1,024 megabits or approximately 134 million bytes. Used for measuring high-speed internet connections, fiber optic networks, and data center bandwidth in gigabits per second (Gbps).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Data Conversion */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Data Conversion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">GB</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Gigabytes</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Large file storage</p>
                <p className="mb-2">Used for videos, software</p>
                <p className="mb-2">Common data plan unit</p>
                <p>1 GB = 1,024 MB</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">MB</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Megabytes</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Medium file sizes</p>
                <p className="mb-2">Photos, documents</p>
                <p className="mb-2">Memory measurements</p>
                <p>1 MB = 1,024 KB</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">KB</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Kilobytes</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Small files</p>
                <p className="mb-2">Text documents</p>
                <p className="mb-2">Email attachments</p>
                <p>1 KB = 1,024 bytes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Data Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Data Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Storage Devices</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 GB = 1,024 MB</p>
                <p>1 TB = 1,024 GB</p>
                <p>500 GB = 512,000 MB</p>
                <p>1 TB = 1,048,576 MB</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">File Sizes</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 MB = 1,048,576 bytes</p>
                <p>1 GB = 1,073,741,824 bytes</p>
                <p>1 KB = 8,192 bits</p>
                <p>1 MB = 8,388,608 bits</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Internet Speed</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 Mbps = 125 KB/s</p>
                <p>100 Mbps = 12.5 MB/s</p>
                <p>1 Gbps = 125 MB/s</p>
                <p>10 Mbps = 1.25 MB/s</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Applications */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Practical Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">💾 Data Storage</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Hard Drive Space:</strong> Convert between GB and TB for storage planning</p>
                <p><strong>Cloud Storage:</strong> Calculate Dropbox/Google Drive usage</p>
                <p><strong>Backup Planning:</strong> Estimate backup size requirements</p>
                <p><strong>USB Drives:</strong> Compare storage capacities</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📱 Mobile Data</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Data Plans:</strong> Convert GB to MB for usage tracking</p>
                <p><strong>Streaming:</strong> Calculate video streaming data consumption</p>
                <p><strong>App Downloads:</strong> Estimate app sizes in different units</p>
                <p><strong>Roaming:</strong> International data usage calculations</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🌐 Internet Speed</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Broadband Plans:</strong> Convert Mbps to download speeds</p>
                <p><strong>File Transfers:</strong> Calculate upload/download times</p>
                <p><strong>Network Planning:</strong> Bandwidth requirements</p>
                <p><strong>Streaming Quality:</strong> Data rates for video quality</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📊 Business & IT</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Database Size:</strong> Convert database storage metrics</p>
                <p><strong>Email Storage:</strong> Calculate mailbox sizes</p>
                <p><strong>Virtual Memory:</strong> RAM and swap space calculations</p>
                <p><strong>Log Files:</strong> System log storage planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What's the difference between MB and MiB?</h3>
              <p className="text-gray-600 dark:text-gray-300">MB (megabyte) uses decimal (1,000,000 bytes) while MiB (mebibyte) uses binary (1,048,576 bytes). Most operating systems use MiB but display as MB.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How many MB in a GB?</h3>
              <p className="text-gray-600 dark:text-gray-300">Exactly 1,024 MB in 1 GB using binary conversion. Some manufacturers use decimal (1,000 MB) for marketing storage devices.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Why is my 1TB drive only 931GB?</h3>
              <p className="text-gray-600 dark:text-gray-300">Manufacturers use decimal (1 trillion bytes) while computers use binary. 1 TB (decimal) = 931 GB (binary). This is normal.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I convert Mbps to MB/s?</h3>
              <p className="text-gray-600 dark:text-gray-300">Divide Mbps by 8. For example: 100 Mbps ÷ 8 = 12.5 MB/s. This converts bits per second to bytes per second.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Convert More Units?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">Explore our other free conversion tools for all your measurement needs</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/length-converter/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Length Converter
            </Link>
            <Link href="/weight-converter/" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
              Weight Converter
            </Link>
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
              All Converters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

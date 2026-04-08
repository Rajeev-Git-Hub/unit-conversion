import { Metadata } from 'next';
import Link from 'next/link';
import ConversionAnalytics from '../../components/ConversionAnalytics';
import { FiTrendingUp, FiPieChart, FiClock, FiTarget, FiShield, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Conversion Analytics - Track Your Unit Conversions | Free Analytics Tool',
  description: 'Free conversion analytics tool. Track your unit conversion history, usage patterns, and statistics. Monitor conversion activity, popular categories, and usage trends.',
  keywords: 'conversion analytics, usage statistics, conversion history, track conversions, conversion data, analytics tool, online tool',
  openGraph: {
    title: 'Conversion Analytics - Track Your Usage',
    description: 'Monitor your conversion activity and statistics',
    type: 'website',
  },
};

export default function AnalyticsLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conversion Analytics Dashboard
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Track your conversion history, usage patterns, and statistics
            </p>
            <ConversionAnalytics />
          </div>
        </div>
      </section>

      {/* Understanding Analytics */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Your Conversion Analytics
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiTrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Activity History</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">View daily conversion counts</p>
                <p className="mb-2">Track usage patterns over time</p>
                <p className="mb-2">Monitor conversion trends</p>
                <p>Identify peak usage periods</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiPieChart className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Popular Categories</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Most-used converter categories</p>
                <p className="mb-2">Top conversion types</p>
                <p className="mb-2">Category usage statistics</p>
                <p>User preference insights</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiClock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Hourly Activity</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Peak usage hours</p>
                <p className="mb-2">Time-based patterns</p>
                <p className="mb-2">Busiest conversion times</p>
                <p>Activity distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Benefits of Conversion Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <FiTrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                Track Usage Patterns
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>Monitor how often you use each converter</p>
                <p>Identify your most-used conversion types</p>
                <p>Track daily, weekly, and monthly usage</p>
                <p>Discover conversion trends over time</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <FiTarget className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
                Optimize Workflow
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>Find your most efficient conversion tools</p>
                <p>Identify frequently used unit combinations</p>
                <p>Streamline your measurement workflow</p>
                <p>Improve productivity with data insights</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <FiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" />
                Personal Insights
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>Understand your conversion habits</p>
                <p>Discover which tools save you time</p>
                <p>Track your measurement needs evolution</p>
                <p>Get personalized usage statistics</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <FiShield className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-2" />
                Privacy First
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>All data stored locally in your browser</p>
                <p>No data sent to external servers</p>
                <p>Complete privacy and security</p>
                <p>Clear history anytime you want</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How is my conversion data stored?</h3>
              <p className="text-gray-600 dark:text-gray-300">All conversion history is stored locally in your browser using localStorage. No data is sent to any server, ensuring complete privacy and security of your usage information.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Can I clear my analytics history?</h3>
              <p className="text-gray-600 dark:text-gray-300">Yes! You can clear your conversion history anytime from the analytics dashboard. This will remove all stored data from your browser.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What statistics are tracked?</h3>
              <p className="text-gray-600 dark:text-gray-300">We track daily conversion counts, popular categories, most-used units, hourly activity patterns, and your favorite converters. This helps you understand your usage patterns.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Is my data shared with anyone?</h3>
              <p className="text-gray-600 dark:text-gray-300">No. Your analytics data never leaves your device. It is stored locally and is completely private. We do not collect, share, or sell any usage data.</p>
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

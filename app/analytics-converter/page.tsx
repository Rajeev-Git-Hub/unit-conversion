import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Analytics Converter - Free Online Tool | Convert Metrics, KPIs, Ratios',
  description: 'Free online analytics converter. Convert between metrics, KPIs, percentages, ratios, growth rates. Accurate calculations for business analytics and data analysis.',
  keywords: 'analytics converter, metrics converter, KPI calculator, percentage converter, growth rate calculator, business analytics, online tool',
  openGraph: {
    title: 'Analytics Converter - Free Online Tool',
    description: 'Convert between different analytics metrics and KPIs instantly',
    type: 'website',
  },
};

export default function AnalyticsConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Analytics Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert between metrics, KPIs, percentages, growth rates, and business analytics
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="analytics" />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Analytics Conversion */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Analytics Conversion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">%</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Percentages</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Relative measurements</p>
                <p className="mb-2">Growth and change rates</p>
                <p className="mb-2">Market share analysis</p>
                <p>1% = 0.01 decimal</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Growth Rates</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Year-over-year growth</p>
                <p className="mb-2">Compound growth rates</p>
                <p className="mb-2">Revenue projections</p>
                <p>CAGR = (End/Start)^(1/n) - 1</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ratios</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Financial ratios</p>
                <p className="mb-2">Performance metrics</p>
                <p className="mb-2">Efficiency measurements</p>
                <p>Ratio = A ÷ B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Analytics Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Analytics Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Business Metrics</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1% = 10 basis points</p>
                <p>100 basis points = 1%</p>
                <p>Growth Rate = (New-Old)/Old × 100</p>
                <p>ROI = (Gain-Cost)/Cost × 100</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Financial Ratios</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>P/E Ratio = Price/EPS</p>
                <p>Debt/Equity = Total Debt/Equity</p>
                <p>Current Ratio = Assets/Liabilities</p>
                <p>Profit Margin = Net Profit/Revenue</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Marketing Metrics</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>CTR = Clicks/Impressions × 100</p>
                <p>CVR = Conversions/Clicks × 100</p>
                <p>CAC = Total Sales & Marketing/Customers</p>
                <p>LTV = Average Revenue × Gross Margin</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">💼 Business Performance</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Revenue Analysis:</strong> Convert growth rates between periods</p>
                <p><strong>Market Share:</strong> Calculate percentage changes in market position</p>
                <p><strong>Sales Metrics:</strong> Convert between different performance indicators</p>
                <p><strong>KPI Tracking:</strong> Standardize metrics across departments</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📈 Financial Analysis</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Investment Returns:</strong> Calculate ROI and IRR</p>
                <p><strong>Risk Assessment:</strong> Convert volatility measures</p>
                <p><strong>Valuation Metrics:</strong> P/E, P/S, and other ratios</p>
                <p><strong>Portfolio Performance:</strong> Annualized returns calculation</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🎯 Marketing Analytics</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Campaign Performance:</strong> Convert CTR, CVR, and engagement metrics</p>
                <p><strong>Customer Metrics:</strong> Calculate LTV, churn rate, and retention</p>
                <p><strong>A/B Testing:</strong> Statistical significance and confidence intervals</p>
                <p><strong>Attribution:</strong> Multi-touch attribution models</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🔬 Data Science</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Statistical Analysis:</strong> Convert between different statistical measures</p>
                <p><strong>Machine Learning:</strong> Model performance metrics conversion</p>
                <p><strong>Data Quality:</strong> Missing data percentages and completeness</p>
                <p><strong>Experimentation:</strong> Effect size and power analysis</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I calculate percentage growth?</h3>
              <p className="text-gray-600 dark:text-gray-300">Use formula: ((New Value - Old Value) ÷ Old Value) × 100. For example: Growth from 100 to 150 = ((150-100) ÷ 100) × 100 = 50%.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What is CAGR and how to calculate it?</h3>
              <p className="text-gray-600 dark:text-gray-300">CAGR (Compound Annual Growth Rate) = ((End Value ÷ Start Value)^(1 ÷ Number of Years)) - 1. It shows the steady growth rate over time.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do basis points relate to percentages?</h3>
              <p className="text-gray-600 dark:text-gray-300">100 basis points = 1 percentage point. Basis points are used in finance to avoid confusion with small percentage changes. 25 bps = 0.25%.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What's the difference between ROI and ROE?</h3>
              <p className="text-gray-600 dark:text-gray-300">ROI (Return on Investment) measures return relative to investment cost. ROE (Return on Equity) measures return relative to shareholder equity. ROE is specific to equity financing.</p>
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

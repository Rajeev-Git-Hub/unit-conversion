import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'US Tons to Milligrams Converter – US ton to mg | Free Tool',
  description: 'Free US tons to milligrams converter. Convert US ton to mg instantly with accurate results.',
  keywords: 'us tons to milligrams, us ton to mg, convert us tons to milligrams, weight converter',
  openGraph: {
    title: 'US Tons to Milligrams Converter – US ton to mg',
    description: 'Convert US tons to milligrams instantly with accurate results',
    type: 'website',
  },
};

export default function UsTonToMgPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              US Tons to Milligrams Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert US tons to milligrams instantly. 1 US ton = 907M mg.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="us-ton" defaultTo="milligram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

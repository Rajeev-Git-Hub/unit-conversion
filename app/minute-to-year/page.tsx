import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Minutes to Years Converter | Free Time Tool',
  description: 'Convert minutes to years instantly. 1 year (Julian) = 525,960 minutes. Free online time converter with accurate results.',
  keywords: 'minutes to years, min to year, convert minutes to years, time converter',
  openGraph: {
    title: 'Minutes to Years Converter',
    description: 'Convert minutes to years instantly',
    type: 'website',
  },
};

export default function MinuteToYearPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Minutes to Years Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert minutes to years instantly. 1 year = 525,960 minutes.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="minute" defaultTo="year" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

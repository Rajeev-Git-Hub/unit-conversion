import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Hours to Years Converter | Free Time Tool',
  description: 'Convert hours to years instantly. 1 year (Julian) = 8,766 hours. Free online time converter with accurate results.',
  keywords: 'hours to years, hr to year, convert hours to years, time converter',
  openGraph: {
    title: 'Hours to Years Converter',
    description: 'Convert hours to years instantly',
    type: 'website',
  },
};

export default function HourToYearPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hours to Years Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert hours to years instantly. 1 year = 8,766 hours.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="hour" defaultTo="year" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

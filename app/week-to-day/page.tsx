import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Weeks to Days Converter | Free Time Tool',
  description: 'Convert weeks to days instantly. 1 week = 7 days. Free online time converter with accurate results.',
  keywords: 'weeks to days, week to day, convert weeks to days, time converter',
  openGraph: {
    title: 'Weeks to Days Converter',
    description: 'Convert weeks to days instantly',
    type: 'website',
  },
};

export default function WeekToDayPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Weeks to Days Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert weeks to days instantly. 1 week = 7 days.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="time" defaultFrom="week" defaultTo="day" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

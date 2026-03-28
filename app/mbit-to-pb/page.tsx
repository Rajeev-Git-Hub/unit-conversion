import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Megabits to PB Converter – Mb to PB | Free Tool',
  description: 'Free megabits to petabytes converter. Convert Mb to PB instantly with accurate results.',
  keywords: 'megabits to PB, Mb to petabytes, convert megabits to PB, data storage converter',
  openGraph: {
    title: 'Megabits to PB Converter – Mb to PB',
    description: 'Convert megabits to PB instantly with accurate results',
    type: 'website',
  },
};

export default function MbitToPbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Megabits to Petabytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert megabits to PB instantly. 1 PB = 8,589,934,592 megabits.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mbit" defaultTo="pb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

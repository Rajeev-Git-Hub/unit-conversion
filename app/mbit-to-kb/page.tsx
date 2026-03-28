import { Metadata } from 'next';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Megabits to KB Converter – Mb to KB | Free Tool',
  description: 'Free megabits to kilobytes converter. Convert Mb to KB instantly with accurate results.',
  keywords: 'megabits to KB, Mb to kilobytes, convert megabits to KB, data storage converter',
  openGraph: {
    title: 'Megabits to KB Converter – Mb to KB',
    description: 'Convert megabits to KB instantly with accurate results',
    type: 'website',
  },
};

export default function MbitToKbPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Megabits to Kilobytes Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Convert megabits to KB instantly. 1 KB = 64 megabits.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="data" defaultFrom="mbit" defaultTo="kb" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

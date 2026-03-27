import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'KG to LBS Converter – Convert Kilograms to Pounds | Free Tool',
  description: 'Free kg to lbs converter. Convert kilograms to pounds instantly with accurate results. Learn the conversion formula, see common conversions, and understand when to use each unit. Perfect for fitness, travel, and shipping.',
  keywords: 'kg to lbs, kilograms to pounds, kg to pounds converter, convert kg to lbs, weight conversion, 1 kg to lbs, how many pounds in a kilogram',
  openGraph: {
    title: 'KG to LBS Converter – Convert Kilograms to Pounds',
    description: 'Convert kilograms to pounds instantly with accurate results and comprehensive guide',
    type: 'website',
  },
};

export default function KgToLbsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              KG to LBS Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="weight" defaultFrom="kg" defaultTo="lbs" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding KG to LBS Conversion
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting kilograms (kg) to pounds (lbs) is one of the most common weight conversions needed today. 
              Whether you are tracking your fitness progress, shipping packages internationally, or following a recipe 
              from another country, knowing how to convert between these units is essential.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              The kilogram is the base unit of mass in the International System of Units (SI), used by most countries 
              worldwide. The pound is primarily used in the United States and a few other countries. Understanding the 
              relationship between these units helps you navigate between metric and imperial systems seamlessly.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our free kg to lbs converter provides instant, accurate results. Simply enter your weight in kilograms, 
              and see the equivalent in pounds immediately. No signup required, no ads, just fast and reliable conversions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">pounds = kg × 2.20462</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply by approximately 2.2 for quick estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common KG to LBS Conversions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { kg: '1 kg', lbs: '2.20 lbs', note: 'Small package' },
              { kg: '5 kg', lbs: '11.02 lbs', note: 'Medium bag' },
              { kg: '10 kg', lbs: '22.05 lbs', note: 'Large item' },
              { kg: '25 kg', lbs: '55.12 lbs', note: 'Luggage limit' },
              { kg: '50 kg', lbs: '110.23 lbs', note: 'Average person' },
              { kg: '60 kg', lbs: '132.28 lbs', note: 'Common weight' },
              { kg: '70 kg', lbs: '154.32 lbs', note: 'Adult male avg' },
              { kg: '0.5 kg', lbs: '1.10 lbs', note: 'Half kilo' },
              { kg: '2.5 kg', lbs: '5.51 lbs', note: 'Dumbbell' },
              { kg: '75 kg', lbs: '165.35 lbs', note: 'Fitness goal' },
              { kg: '80 kg', lbs: '176.37 lbs', note: 'Athletic build' },
              { kg: '100 kg', lbs: '220.46 lbs', note: 'Heavy weight' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <p className="font-bold text-green-600 text-lg">{item.kg}</p>
                <p className="text-gray-400 my-1">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.lbs}</p>
                <p className="text-xs text-gray-500 mt-2">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            When to Convert KG to LBS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fitness & Health</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track your weight loss or muscle gain progress. Many gym equipment and fitness apps use pounds, 
                while medical records often use kilograms.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Shipping & Logistics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Calculate shipping costs and ensure packages meet weight restrictions. International shipping 
                often requires converting between metric and imperial units.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Travel</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Check airline baggage allowances, which vary by country and carrier. Some use kg, others use lbs 
                for luggage weight limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                How many pounds are in 1 kilogram?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                1 kilogram equals exactly 2.20462 pounds. For quick estimates, you can multiply by 2.2.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                What is the easiest way to convert kg to lbs?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Use our free online converter above for instant accurate results, or multiply your kg value by 2.20462.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Which countries use kilograms vs pounds?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Most of the world uses kilograms (metric system). The United States, Liberia, and Myanmar primarily use pounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Converters */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Related Weight Converters
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Explore more weight conversion tools for all your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/lbs-to-kg/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              LBS to KG
            </Link>
            <Link href="/kg-to-grams/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md">
              KG to Grams
            </Link>
            <Link href="/kg-to-stones/" className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-md">
              KG to Stones
            </Link>
            <Link href="/grams-to-ounces/" className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors shadow-md">
              Grams to Ounces
            </Link>
            <Link href="/weight-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md">
              All Weight Converters
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About KG to LBS Conversion
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Kilograms and pounds are both units of mass/weight measurement, but they belong to different measurement systems. 
            The kilogram is part of the metric system (SI units) and is the standard unit of mass used by scientists and 
            most countries worldwide. The pound (specifically the international avoirdupois pound) is part of the imperial 
            system and is primarily used in the United States.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The conversion between these units is straightforward but important to get right, especially in contexts where 
            precision matters such as medicine, science, and international trade. Our converter uses the exact conversion 
            factor of 2.20462 pounds per kilogram, ensuring accuracy for all your conversion needs.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you are a student learning about measurement systems, a traveler checking luggage limits, or someone 
            tracking their fitness journey, understanding how to convert between kilograms and pounds is a valuable skill. 
            Bookmark this page for quick access whenever you need to make these conversions.
          </p>
        </div>
      </section>
    </div>
  );
}

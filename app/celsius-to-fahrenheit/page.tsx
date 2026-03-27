import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Celsius to Fahrenheit Converter – Convert °C to °F | Free Tool',
  description: 'Free Celsius to Fahrenheit converter. Convert °C to °F instantly with accurate results. Learn the conversion formula, see common temperature conversions, and understand weather forecasts, cooking temperatures, and body temperature.',
  keywords: 'celsius to fahrenheit, c to f, convert celsius to fahrenheit, temperature conversion, celsius fahrenheit converter, weather temperature converter, cooking temperature conversion',
  openGraph: {
    title: 'Celsius to Fahrenheit Converter – Convert °C to °F',
    description: 'Convert Celsius to Fahrenheit instantly with accurate results and comprehensive guide',
    type: 'website',
  },
};

export default function CelsiusToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Celsius to Fahrenheit Converter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Convert Celsius to Fahrenheit instantly. Formula: F = (C × 9/5) + 32
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="temperature" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Celsius to Fahrenheit Conversion
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Converting Celsius (°C) to Fahrenheit (°F) is essential for understanding weather forecasts, 
              cooking temperatures, and scientific measurements across different regions. Celsius is used by most countries 
              worldwide, while Fahrenheit is primarily used in the United States.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              The Celsius scale is based on the freezing point (0°C) and boiling point (100°C) of water at sea level. 
              The Fahrenheit scale uses different reference points: water freezes at 32°F and boils at 212°F. 
              Understanding both scales helps you navigate weather reports, recipes, and international travel with ease.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our free Celsius to Fahrenheit converter provides instant, accurate results. Whether you are checking 
              the weather, baking a cake, or monitoring your body temperature, our tool gives you the conversions you 
              need immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Conversion Formula</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">F = (C × 9/5) + 32</p>
              <p className="text-gray-600 dark:text-gray-300">Multiply Celsius by 9/5, then add 32</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Common Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { c: '0°C', f: '32°F' },
              { c: '10°C', f: '50°F' },
              { c: '20°C', f: '68°F' },
              { c: '25°C', f: '77°F' },
              { c: '30°C', f: '86°F' },
              { c: '37°C', f: '98.6°F' },
              { c: '40°C', f: '104°F' },
              { c: '100°C', f: '212°F' },
              { c: '-10°C', f: '14°F' },
              { c: '-20°C', f: '-4°F' },
              { c: '-40°C', f: '-40°F' },
              { c: '15°C', f: '59°F' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-red-600">{item.c}</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            When to Convert Celsius to Fahrenheit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌤️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Weather Forecasts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Understanding international weather reports and travel forecasts when visiting the US or other Fahrenheit-using regions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cooking & Baking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert oven temperatures and cooking instructions from international recipes to your preferred scale.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Health & Medicine</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor body temperature and understand medical readings regardless of which scale your thermometer uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                What is the easiest way to convert Celsius to Fahrenheit?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Use our free online converter for instant accurate results, or use the formula: multiply Celsius by 9/5 and add 32.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                What is body temperature in both scales?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Normal body temperature is 37°C (98.6°F). Fever is typically above 38°C (100.4°F).
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                At what temperature do both scales show the same value?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                -40°C equals -40°F. This is the only temperature where both scales show the same number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Converters */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Temperature Converters</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Explore more temperature conversion tools for all your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fahrenheit-to-celsius/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Fahrenheit to Celsius
            </Link>
            <Link href="/celsius-to-kelvin/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md">
              Celsius to Kelvin
            </Link>
            <Link href="/kelvin-to-celsius/" className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-md">
              Kelvin to Celsius
            </Link>
            <Link href="/temperature-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md">
              All Temperature Converters
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About Celsius to Fahrenheit Conversion
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The Celsius and Fahrenheit scales are two different systems for measuring temperature. Celsius, also known as centigrade, 
            is part of the metric system and is used by most countries worldwide. Fahrenheit is part of the imperial system and 
            is primarily used in the United States, Belize, and a few other regions.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The conversion formula F = (C × 9/5) + 32 may seem complex, but it accounts for both the different zero points 
            and the different interval sizes between the two scales. While Celsius has 100 degrees between water's freezing 
            and boiling points, Fahrenheit has 180 degrees between these same points.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Understanding temperature conversions is crucial for everyday activities like checking weather forecasts, cooking, 
            monitoring health, and scientific work. Our converter provides instant, accurate results using the exact formula, 
            ensuring you always have the precise temperature conversion you need.
          </p>
        </div>
      </section>
    </div>
  );
}

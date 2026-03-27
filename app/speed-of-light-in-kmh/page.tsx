import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Speed of Light in km/h - Light Speed Conversion',
  description: 'The speed of light is exactly 1,079,252,848 km/h (kilometers per hour). Learn about light speed, its significance in physics, and conversions to other units.',
  keywords: 'speed of light kmh, speed of light in kilometers per hour, light speed conversion, c in kmh, 299792458 m/s to kmh',
  openGraph: {
    title: 'Speed of Light in km/h',
    description: 'Light speed: 1,079,252,848 km/h',
    type: 'website',
  },
};

export default function SpeedOfLightInKmhPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Speed of Light in km/h</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              The speed of light: <span className="font-bold text-orange-600">1,079,252,848 km/h</span>
            </p>
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-3xl font-bold mb-2">299,792,458 m/s</p>
              <p className="text-lg">= 1,079,252,848 km/h</p>
              <p className="text-lg">= 670,616,629 mph</p>
              <p className="text-lg">= 582,749,918 knots</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Understanding Light Speed</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🔬 Physics Constant</h3>
                <p className="text-gray-600 dark:text-gray-300">The speed of light (c) is a fundamental constant of nature, approximately 299,792,458 meters per second in a vacuum.</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">⏱️ Time Dilation</h3>
                <p className="text-gray-600 dark:text-gray-300">According to Einstein's relativity, as objects approach light speed, time slows down relative to stationary observers.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🚀 Space Travel</h3>
                <p className="text-gray-600 dark:text-gray-300">At light speed, you could circle Earth 7.5 times in one second, or reach the Moon in 1.3 seconds.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">📡 Communication</h3>
                <p className="text-gray-600 dark:text-gray-300">Radio waves, light, and all electromagnetic radiation travel at this speed through a vacuum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Light Speed in Different Units</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { unit: 'm/s', value: '299,792,458' },
              { unit: 'km/h', value: '1,079,252,848' },
              { unit: 'mph', value: '670,616,629' },
              { unit: 'knots', value: '582,749,918' },
              { unit: 'km/s', value: '299,792' },
              { unit: 'mi/s', value: '186,282' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="text-sm text-gray-500">{item.unit}</p>
                <p className="font-bold text-xl text-orange-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Travel Times at Light Speed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { destination: 'Moon', distance: '384,400 km', time: '1.28 seconds' },
              { destination: 'Sun', distance: '149.6 million km', time: '8.3 minutes' },
              { destination: 'Mars (closest)', distance: '54.6 million km', time: '3 minutes' },
              { destination: 'Jupiter', distance: '365-601 million km', time: '32-53 minutes' },
              { destination: 'Nearest Star', distance: '4.24 light-years', time: '4.24 years' },
              { destination: 'Center of Milky Way', distance: '26,000 light-years', time: '26,000 years' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-lg text-gray-900 dark:text-white">{item.destination}</p>
                <p className="text-sm text-gray-500">{item.distance}</p>
                <p className="font-bold text-orange-600">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Related Converters</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/kmh-to-mph/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">KMH to MPH</Link>
            <Link href="/mach-to-kmh/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Mach to KMH</Link>
            <Link href="/speed-converter/" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">All Converters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Time Converter - Free Online Tool | Convert Seconds, Minutes, Hours, Days',
  description: 'Free online time converter. Convert between seconds, minutes, hours, days, weeks, months, years. Accurate calculations, conversion tables, and practical examples.',
  keywords: 'time converter, seconds to minutes, hours to days, weeks to months, time duration converter, time calculator, online tool',
  openGraph: {
    title: 'Time Converter - Free Online Tool',
    description: 'Convert between different units of time instantly',
    type: 'website',
  },
};

export default function TimeConverterLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Time Converter - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Convert between seconds, minutes, hours, days, weeks, months, and years
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="time" />
            </div>
          </div>
        </div>
      </section>

      {/* Time Unit Definitions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Time Unit Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Second (s)</h3>
              <p className="text-gray-600 dark:text-gray-300">The SI base unit of time. Defined as the duration of 9,192,631,770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium-133 atom.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Minute (min)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 60 seconds. A common unit for measuring durations such as meetings, exercise sessions, and short activities. 60 minutes = 1 hour.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Hour (hr)</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 60 minutes or 3,600 seconds. The standard unit for work shifts, travel times, and daily schedules. 24 hours = 1 day.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Day</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 24 hours or 86,400 seconds. Based on Earth's rotation period. Used for calendars, project planning, and billing cycles.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Week</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 7 days or 168 hours. A standard period for work schedules, project milestones, and recurring events. 52 weeks = 1 year (approximately).</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Year</h3>
              <p className="text-gray-600 dark:text-gray-300">Equal to 365.25 days (Julian year) or approximately 31,557,600 seconds. Used for age, anniversaries, financial planning, and long-term projects.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Millisecond (ms)</h3>
              <p className="text-gray-600 dark:text-gray-300">One thousandth of a second. Used in computing, physics experiments, and measuring very short time intervals in sports and technology.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Microsecond (μs)</h3>
              <p className="text-gray-600 dark:text-gray-300">One millionth of a second. Used in high-speed electronics, telecommunications, and scientific measurements requiring extreme precision.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nanosecond (ns)</h3>
              <p className="text-gray-600 dark:text-gray-300">One billionth of a second. Used in computer processors, fiber optic communications, and advanced scientific research for ultra-precise timing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Time Conversion */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Time Conversion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">sec</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Seconds</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">SI base unit for time</p>
                <p className="mb-2">Used for precise measurements</p>
                <p className="mb-2">Scientific and technical use</p>
                <p>60 seconds = 1 minute</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">min</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Minutes</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Common time unit</p>
                <p className="mb-2">Used in daily life</p>
                <p className="mb-2">Meetings and appointments</p>
                <p>60 minutes = 1 hour</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">hr</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Hours</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Work and daily schedules</p>
                <p className="mb-2">24 hours = 1 day</p>
                <p className="mb-2">Time tracking standard</p>
                <p>8 hours = standard workday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Time Conversions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Time Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Work & Business</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 work week = 40 hours</p>
                <p>1 work month ≈ 160 hours</p>
                <p>1 work year ≈ 2,080 hours</p>
                <p>1 hour = 3,600 seconds</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Daily Life</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 day = 24 hours</p>
                <p>1 week = 7 days</p>
                <p>1 month ≈ 30.44 days</p>
                <p>1 year = 365.25 days</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Digital & Computing</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1 millisecond = 0.001 sec</p>
                <p>1 microsecond = 0.000001 sec</p>
                <p>1 nanosecond = 0.000000001 sec</p>
                <p>1 minute = 60,000 ms</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">💼 Work & Productivity</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Time Tracking:</strong> Convert work hours to days for project planning</p>
                <p><strong>Billing:</strong> Calculate hours worked for client invoicing</p>
                <p><strong>Productivity:</strong> Measure task completion in different time units</p>
                <p><strong>Scheduling:</strong> Plan meetings across time zones</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🏃‍♂️ Sports & Fitness</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Running Pace:</strong> Convert minutes per kilometer to miles</p>
                <p><strong>Workout Timing:</strong> Convert exercise duration for training plans</p>
                <p><strong>Race Times:</strong> Compare performance across different events</p>
                <p><strong>Interval Training:</strong> Convert rest and work periods</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🎬 Media & Entertainment</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Video Duration:</strong> Convert video length for editing</p>
                <p><strong>Audio Files:</strong> Calculate podcast or music durations</p>
                <p><strong>Streaming:</strong> Convert watch time for analytics</p>
                <p><strong>Animation:</strong> Frame timing calculations</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🔬 Science & Research</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Experiments:</strong> Convert reaction times and durations</p>
                <p><strong>Astronomy:</strong> Calculate light years and space distances</p>
                <p><strong>Physics:</strong> Convert time units for motion calculations</p>
                <p><strong>Chemistry:</strong> Reaction rate measurements</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How many seconds are in a day?</h3>
              <p className="text-gray-600 dark:text-gray-300">There are 86,400 seconds in a day (24 hours × 60 minutes × 60 seconds). This is useful for precise time calculations.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How many weeks are in a year?</h3>
              <p className="text-gray-600 dark:text-gray-300">There are 52 weeks in a year plus 1 extra day (or 2 in leap years). More precisely, 1 year = 52.143 weeks.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I convert hours to days?</h3>
              <p className="text-gray-600 dark:text-gray-300">Divide hours by 24. For example: 48 hours ÷ 24 = 2 days. For partial days: 36 hours ÷ 24 = 1.5 days.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How many work hours in a month?</h3>
              <p className="text-gray-600 dark:text-gray-300">Approximately 160 work hours in a month (40 hours/week × 4 weeks). Actual varies: 160-184 hours depending on month length.</p>
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

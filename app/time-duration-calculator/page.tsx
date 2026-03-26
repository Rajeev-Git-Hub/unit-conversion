import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';

export const metadata: Metadata = {
  title: 'Time Duration Calculator - Free Online Tool | Calculate Time Differences, Duration',
  description: 'Free online time duration calculator. Calculate time differences, duration between dates, work hours, project timelines. Accurate calculations and business applications.',
  keywords: 'time duration calculator, time difference calculator, work hours calculator, project timeline, date calculator, time calculator, online tool',
  openGraph: {
    title: 'Time Duration Calculator - Free Online Tool',
    description: 'Calculate time differences and durations instantly',
    type: 'website',
  },
};

export default function TimeDurationCalculatorLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Time Duration Calculator - Free Online Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Calculate time differences, work hours, and project durations
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <ConverterCard category="time-duration" />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Time Duration */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Understanding Time Duration Calculation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Time Differences</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Calculate between two dates</p>
                <p className="mb-2">Years, months, days, hours</p>
                <p className="mb-2">Project planning</p>
                <p>Event scheduling</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Work Hours</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Calculate work shifts</p>
                <p className="mb-2">Overtime calculations</p>
                <p className="mb-2">Payroll processing</p>
                <p>Time tracking</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Project Timeline</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">Project duration</p>
                <p className="mb-2">Milestone tracking</p>
                <p className="mb-2">Deadline management</p>
                <p>Resource planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Time Calculations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Common Time Calculations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Work Week</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>40 hours standard</p>
                <p>8 hours × 5 days</p>
                <p>Excluding weekends</p>
                <p>Lunch breaks excluded</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Project Duration</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>Start to end date</p>
                <p>Working days only</p>
                <p>Holiday exclusions</p>
                <p>Milestone calculations</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Time Zones</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>UTC conversions</p>
                <p>Meeting scheduling</p>
                <p>International calls</p>
                <p>Travel planning</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">💼 Business & Work</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Payroll Processing:</strong> Calculate employee work hours and overtime</p>
                <p><strong>Project Management:</strong> Track project timelines and deadlines</p>
                <p><strong>Shift Scheduling:</strong> Plan work shifts and break times</p>
                <p><strong>Time Billing:</strong> Calculate billable hours for clients</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📅 Event Planning</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Event Duration:</strong> Calculate event length from start to end</p>
                <p><strong>Meeting Scheduling:</strong> Plan meeting times across time zones</p>
                <p><strong>Conference Planning:</strong> Track session times and breaks</p>
                <p><strong>Travel Itinerary:</strong> Calculate travel and activity durations</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🎓 Education & Learning</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Study Sessions:</strong> Track study time and break periods</p>
                <p><strong>Exam Timing:</strong> Calculate test durations and time limits</p>
                <p><strong>Semester Length:</strong> Calculate academic term durations</p>
                <p><strong>Course Planning:</strong> Schedule class times and durations</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🏃‍♂️ Personal & Fitness</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p><strong>Workout Duration:</strong> Track exercise session lengths</p>
                <p><strong>Training Plans:</strong> Calculate workout and rest periods</p>
                <p><strong>Sleep Tracking:</strong> Monitor sleep duration and patterns</p>
                <p><strong>Habit Building:</strong> Track daily activity durations</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I calculate work hours between two times?</h3>
              <p className="text-gray-600 dark:text-gray-300">Subtract start time from end time, accounting for breaks. For example: 5:00 PM - 9:00 AM = 8 hours minus 1 hour lunch = 7 work hours.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What's the difference between elapsed time and duration?</h3>
              <p className="text-gray-600 dark:text-gray-300">Elapsed time is the total time passed from a start point. Duration is the time between two specific points. They're often used interchangeably in time calculations.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do I calculate days between dates?</h3>
              <p className="text-gray-600 dark:text-gray-300">Count the total days, excluding weekends if needed. For business days: Count weekdays only, subtract holidays. Our calculator handles both scenarios automatically.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How do time zones affect duration calculations?</h3>
              <p className="text-gray-600 dark:text-gray-300">Time zones can make the same duration appear different times locally. Always convert to UTC first, then calculate duration to avoid timezone errors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Calculate More?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">Explore our other free calculation tools for all your needs</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/percentage-calculator/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Percentage Calculator
            </Link>
            <Link href="/age-calculator/" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
              Age Calculator
            </Link>
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
              All Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

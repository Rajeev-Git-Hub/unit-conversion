import { Metadata } from 'next';
import AgeCalculatorClient from './AgeCalculatorClient';

export const metadata: Metadata = {
  title: 'Age Calculator (Free & Instant) | ConvertMaster',
  description: 'Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with birthday countdown.',
  keywords: ['age calculator', 'birthday calculator', 'age in days', 'age calculator online', 'how old am i'],
  openGraph: {
    title: 'Age Calculator',
    description: 'Calculate your exact age with birthday countdown and detailed breakdown',
    type: 'website',
  },
};

export default function AgeCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* SEO Content */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Age Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with birthday countdown.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              💡 <strong>Smart Features:</strong> Exact age calculation, birthday countdown, next birthday details, and age milestones.
            </p>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Age Calculation Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="font-medium mb-2">Born Jan 1, 2000:</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Currently {new Date().getFullYear() - 2000} years old
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="font-medium mb-2">Born Dec 31, 1999:</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date().getFullYear() - 1999} years old (birthday soon!)
              </p>
            </div>
          </div>
        </div>

        {/* Main Calculator */}
        <AgeCalculatorClient />

        {/* Additional SEO Content */}
        <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            How Age Calculation Works
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our age calculator calculates your exact age by considering the current date and your birth date, 
              accounting for leap years and varying month lengths.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              What We Calculate:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Years:</strong> Complete years passed</li>
              <li><strong>Months:</strong> Additional months beyond complete years</li>
              <li><strong>Days:</strong> Additional days beyond complete months</li>
              <li><strong>Hours:</strong> Total hours since birth</li>
              <li><strong>Minutes:</strong> Total minutes since birth</li>
              <li><strong>Next Birthday:</strong> Days until your next birthday</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Common Use Cases:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Checking eligibility (age requirements)</li>
              <li>Planning birthday celebrations</li>
              <li>Calculating retirement age</li>
              <li>Age verification for services</li>
              <li>Personal milestone tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

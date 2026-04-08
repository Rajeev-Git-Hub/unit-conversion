import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversion Analytics - Track Your Unit Conversions | Free Analytics Tool',
  description: 'Free conversion analytics tool. Track your unit conversion history, usage patterns, and statistics.',
};

export default function MinimalAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Conversion Analytics Dashboard
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track your conversion history, usage patterns, and statistics
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-6">
          <div className="text-center py-8">
            <div className="text-gray-500">
              Analytics dashboard is loading...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import ConversionAnalytics from '../../components/ConversionAnalytics';

export const metadata: Metadata = {
  title: 'Conversion Analytics - Track Your Unit Conversions | Free Analytics Tool',
  description: 'Free conversion analytics tool. Track your unit conversion history, usage patterns, and statistics.',
};

export default function SimpleAnalyticsPage() {
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
        
        <div className="max-w-6xl mx-auto">
          <ConversionAnalytics />
        </div>
      </div>
    </div>
  );
}

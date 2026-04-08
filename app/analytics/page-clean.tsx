import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversion Analytics - Track Your Unit Conversions | Free Analytics Tool',
  description: 'Free conversion analytics tool. Track your unit conversion history, usage patterns, and statistics.',
};

export default function CleanAnalyticsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Conversion Analytics Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your conversion history, usage patterns, and statistics
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              Analytics dashboard loading...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

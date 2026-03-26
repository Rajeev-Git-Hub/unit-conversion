import ConverterCard from '../../components/ConverterCard';
import { categories } from '../../lib/categories';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Length Converter - Free Online Tool | Convert Meters, Feet, Inches',
  description: 'Free online length converter. Convert between meters, feet, inches, kilometers, miles, centimeters, and more. Accurate calculations with instant results.',
  keywords: 'length converter, meter to feet, feet to inches, km to miles, cm to inches, measurement converter, online tool',
  openGraph: {
    title: 'Length Converter - Free Online Tool',
    description: 'Convert between different units of length instantly',
    type: 'website',
  },
};

export default function LengthConverterPage() {
  const categoryInfo = categories.find((c) => c.key === 'length');
  const color = categoryInfo?.color || 'text-gray-500';

  return (
    <div>
      <h1 className={`text-4xl font-extrabold ${color} mb-8 capitalize text-center`}>
        Length Converter
      </h1>
      <div className="mx-auto max-w-md">
        <ConverterCard category="length" />
      </div>
    </div>
  );
}

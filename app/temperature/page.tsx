'use client';

import ConverterCard from '../../components/ConverterCard';
import { categories } from '../../lib/categories';
import { useLocalization } from '../../lib/LocalizationContext';

export default function TemperatureConverterPage() {
  const { t } = useLocalization();
  const categoryInfo = categories.find((c) => c.key === 'temperature');
  const color = categoryInfo?.color || 'text-gray-500';

  return (
    <div>
      <h1 className={`text-4xl font-extrabold ${color} mb-8 capitalize text-center`}>
        {t('categories.temperature')}
      </h1>
      <div className="mx-auto max-w-md">
        <ConverterCard category="temperature" />
      </div>
    </div>
  );
}

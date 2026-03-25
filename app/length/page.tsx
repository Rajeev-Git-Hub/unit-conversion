'use client';

import ConverterCard from '../../components/ConverterCard';
import { categories } from '../../lib/categories';
import { useLocalization } from '../../lib/LocalizationContext';

export default function LengthConverterPage() {
  const { t } = useLocalization();
  const categoryInfo = categories.find((c) => c.key === 'length');
  const color = categoryInfo?.color || 'text-gray-500';

  return (
    <div>
      <h1 className={`text-4xl font-extrabold ${color} mb-8 capitalize text-center`}>
        {t('categories.length')}
      </h1>
      <div className="mx-auto max-w-md">
        <ConverterCard category="length" />
      </div>
    </div>
  );
}

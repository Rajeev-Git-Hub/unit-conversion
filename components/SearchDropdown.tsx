import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { categories } from '../lib/categories';
import { useLocalization } from '../lib/LocalizationContext';

interface SearchDropdownProps {
  results: { category: string; name: string }[];
  onClose: () => void;
}

export default function SearchDropdown({ results, onClose }: SearchDropdownProps) {
  const { t } = useLocalization();

  return (
    <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-10">
      {results.length === 0 ? (
        <p className="p-4 text-gray-500 dark:text-gray-400">No converters found.</p>
      ) : (
        <ul>
          {results.map((c, index) => {
            const category = categories.find(cat => cat.key === c.category);
            if (!category) return null;
            return (
              <li key={`${c.category}-${c.name}-${index}`}>
                <Link
                  href={`/${c.category}`}
                  className="flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={onClose}
                >
                  <div className="flex items-center">
                    <div className={`mr-4 ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 capitalize">
                        {t(`category.${c.category}`)}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {c.name}
                      </p>
                    </div>
                  </div>
                  <FiArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

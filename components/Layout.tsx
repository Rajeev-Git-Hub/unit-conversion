'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiFileText, FiLock, FiLink, FiClock, FiUser, FiPercent } from 'react-icons/fi';
import { CategoryMenu } from '../lib/CategoryMenu';
import { LocalizationProvider, useLocalization } from '../lib/LocalizationContext';
import { CategoryKey } from '../lib';
import { categories } from '../lib/categories';

// Filter out dev-tools and utilities, and add individual tools
const sidebarCategories = categories.filter(c => c.key !== 'dev-tools' && c.key !== 'utilities');

// Individual developer tools for sidebar
const developerToolsSidebar = [
  { key: 'json-formatter', title: 'JSON Formatter', icon: FiFileText, color: 'text-blue-600' },
  { key: 'base64-encoder', title: 'Base64 Encoder', icon: FiLock, color: 'text-green-600' },
  { key: 'url-encoder', title: 'URL Encoder', icon: FiLink, color: 'text-purple-600' },
  { key: 'timestamp-converter', title: 'Timestamp Converter', icon: FiClock, color: 'text-orange-600' },
];

// Individual utility tools for sidebar
const utilityToolsSidebar = [
  { key: 'age-calculator', title: 'Age Calculator', icon: FiUser, color: 'text-violet-600' },
  { key: 'time-duration-calculator', title: 'Time Duration Calculator', icon: FiClock, color: 'text-blue-600' },
  { key: 'percentage-calculator', title: 'Percentage Calculator', icon: FiPercent, color: 'text-green-600' },
];

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const category = pathname?.split('/')[1] as CategoryKey | undefined;
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col">
      <CategoryMenu selectedCategory={category} />

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden lg:block w-64 bg-white dark:bg-gray-800 overflow-y-auto">
          <nav className="pt-2 px-4">
            <ul className="space-y-1">
              {/* Regular categories (excluding dev-tools and utilities) */}
              {sidebarCategories.map((c) => (
                <li key={c.key}>
                  <Link
                    href={`/${c.key}`}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
                      category === c.key
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <c.icon className={`w-5 h-5 mr-3 ${c.color}`} />
                    {t(`category.${c.key}`)}
                  </Link>
                </li>
              ))}
              
              {/* Individual Developer Tools */}
              {developerToolsSidebar.map((tool) => (
                <li key={tool.key}>
                  <Link
                    href={`/${tool.key}`}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
                      category === tool.key
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <tool.icon className={`w-5 h-5 mr-3 ${tool.color}`} />
                    {tool.title}
                  </Link>
                </li>
              ))}
              
              {/* Individual Utility Tools */}
              {utilityToolsSidebar.map((tool) => (
                <li key={tool.key}>
                  <Link
                    href={`/${tool.key}`}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
                      category === tool.key
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <tool.icon className={`w-5 h-5 mr-3 ${tool.color}`} />
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 w-full overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LocalizationProvider>
      <LayoutContent>{children}</LayoutContent>
    </LocalizationProvider>
  );
}
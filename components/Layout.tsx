'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiFileText, FiLock, FiLink, FiClock, FiUser, FiPercent, FiTrendingUp, FiZap, FiHome, FiActivity, FiSettings, FiBell, FiLogOut, FiLayers } from 'react-icons/fi';
import { CategoryMenu } from '../lib/CategoryMenu';
import { LocalizationProvider, useLocalization } from '../lib/LocalizationContext';
import { CategoryKey } from '../lib';
import { categories } from '../lib/categories';
import Footer from './Footer';

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
  { key: 'time-duration-calculator', title: 'Time Duration Calculator', icon: FiClock, color: 'text-violet-600' },
  { key: 'percentage-calculator', title: 'Percentage Calculator', icon: FiPercent, color: 'text-green-600' },
  { key: 'age-calculator', title: 'Age Calculator', icon: FiUser, color: 'text-violet-600' },
  { key: 'tip-calculator', title: 'Tip Calculator', icon: FiTrendingUp, color: 'text-orange-600' },
];

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const category = pathname?.split('/')[1] as CategoryKey | undefined;
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <CategoryMenu selectedCategory={category} />

      <div className="flex flex-1">
        <aside className="hidden lg:block w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto flex-shrink-0">
          <div className="p-6">
            {/* User Profile Section */}
            <div className="mb-8 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">John Doe</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-400">Premium Account</div>
                    <div className="premium-badge">
                      <FiZap className="w-3 h-3" />
                      <span>PRO</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="text-xs text-gray-400 mt-2">Usage tracking active</div>
            </div>

            {/* Main Navigation */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Main</h3>
              <nav className="space-y-1">
                <Link
                  href="/"
                  className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                    !category ? 'text-white bg-blue-600' : ''
                  }`}
                >
                  <FiHome className="w-4 text-blue-400" />
                  <span>Dashboard</span>
                  {!category && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                </Link>
                <Link
                  href="/all-converters"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiActivity className="w-4 text-green-400" />
                  <span>Converters</span>
                </Link>
                <Link
                  href="/analytics"
                  className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                    !category ? 'text-white bg-blue-600' : ''
                  }`}
                >
                  <FiTrendingUp className="w-4 text-purple-400" />
                  <span>Analytics</span>
                  {!category && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                </Link>
                <Link
                  href="/history"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiClock className="w-4 text-orange-400" />
                  <span>History</span>
                </Link>
              </nav>
            </div>

            {/* Categories Section */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Categories</h3>
              <nav className="space-y-1">
                {sidebarCategories.map((c) => (
                  <Link
                    key={c.key}
                    href={`/${c.key}-converter`}
                    className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                      category === c.key ? 'text-white bg-blue-600' : ''
                    }`}
                  >
                    <c.icon className={`w-4 ${c.color}`} />
                    <span>{t(`category.${c.key}`)}</span>
                    {category === c.key && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Developer Tools Section */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Developer Tools</h3>
              <nav className="space-y-1">
                {developerToolsSidebar.map((tool) => {
                  const isActive = pathname === `/${tool.key}`;
                  return (
                    <Link
                      key={tool.key}
                      href={`/${tool.key}`}
                      className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        isActive ? 'text-white bg-blue-600' : ''
                      }`}
                    >
                      <tool.icon className={`w-4 ${tool.color}`} />
                      <span>{tool.title}</span>
                      {isActive && <span className="ml-auto bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">Active</span>}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Tools Section */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Tools</h3>
              <nav className="space-y-1">
                <Link
                  href="/percentage-calculator"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiPercent className="w-4" />
                  <span>Percentage Calculator</span>
                </Link>
                <Link
                  href="/age-calculator"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiUser className="w-4" />
                  <span>Age Calculator</span>
                </Link>
                <Link
                  href="/tip-calculator"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiTrendingUp className="w-4" />
                  <span>Tip Calculator</span>
                </Link>
              </nav>
            </div>

            {/* Settings Section */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Settings</h3>
              <nav className="space-y-1">
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiSettings className="w-4" />
                  <span>Settings</span>
                </Link>
                <Link
                  href="/notifications"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiBell className="w-4" />
                  <span>Notifications</span>
                </Link>
                <Link
                  href="/logout"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiLogOut className="w-4" />
                  <span>Logout</span>
                </Link>
              </nav>
            </div>
          </div>
        </aside>

        <main className="flex-1 min-w-0 overflow-y-auto">
          {children}
          <Footer />
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
'use client';

import React from 'react';
import Link from 'next/link';
import { FiLayers, FiMail } from 'react-icons/fi';
import { useLocalization } from '../lib/LocalizationContext';

export default function Footer() {
  const { t } = useLocalization();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                <FiLayers className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl text-white">
                {t('app.title')}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The most powerful free unit converter with 650+ converters. Convert length, weight, temperature, and more — instantly and accurately.
            </p>
          </div>

          {/* Popular Converters */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Popular Converters
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/length-converter', label: 'Length Converter' },
                { href: '/weight-converter', label: 'Weight Converter' },
                { href: '/temperature-converter', label: 'Temperature Converter' },
                { href: '/area-converter', label: 'Area Converter' },
                { href: '/volume-converter', label: 'Volume Converter' },
                { href: '/speed-converter', label: 'Speed Converter' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Tools & Utilities
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/json-formatter', label: 'JSON Formatter' },
                { href: '/base64-encoder', label: 'Base64 Encoder' },
                { href: '/timestamp-converter', label: 'Timestamp Converter' },
                { href: '/percentage-calculator', label: 'Percentage Calculator' },
                { href: '/age-calculator', label: 'Age Calculator' },
                { href: '/analytics-converter', label: 'Analytics Dashboard' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Contact
              </h3>
              <a
                href="mailto:contact@convertmaster.com"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FiMail className="h-4 w-4" />
                contact@convertmaster.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} ConvertMaster. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

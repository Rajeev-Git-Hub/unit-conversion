'use client';

import React from 'react';
import Link from 'next/link';
import { FiLayers, FiMail } from 'react-icons/fi';
import { useLocalization } from '../lib/LocalizationContext';

export default function Footer() {
  const { t } = useLocalization();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <FiLayers className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">ConvertMaster</span>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6">
              The most powerful free unit converter. Convert anything, instantly and accurately.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <FiMail className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <FiMail className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <FiMail className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-3">
              {[
                { href: '/length-converter', label: 'Length Converter' },
                { href: '/weight-converter', label: 'Weight Converter' },
                { href: '/temperature-converter', label: 'Temperature Converter' },
                { href: '/area-converter', label: 'Area Converter' },
                { href: '/volume-converter', label: 'Volume Converter' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Blog' },
                { href: '/careers', label: 'Careers' },
                { href: '/contact', label: 'Contact' },
                { href: '/help', label: 'Help Center' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-3">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/cookies', label: 'Cookie Policy' },
                { href: '/licensing', label: 'Licensing' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} ConvertMaster. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

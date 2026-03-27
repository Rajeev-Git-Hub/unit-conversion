'use client';

import React from 'react';
import { FiShield } from 'react-icons/fi';

export default function PrivacyPolicyClient() {
  const lastUpdated = 'March 27, 2026';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <FiShield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Welcome to ConvertMaster (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">2.1 Information Automatically Collected</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4 mb-4">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website URLs</li>
                <li>Pages visited and time spent on each page</li>
                <li>IP address (anonymized where possible)</li>
                <li>Device type (desktop, mobile, tablet)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">2.2 Local Storage Data</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We use browser local storage to save your conversion history, preferences (such as language settings), and cookie consent choices. This data is stored locally on your device and is not transmitted to our servers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are small data files placed on your device.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Types of Cookies We Use:</h3>
              <ul className="space-y-3 ml-4">
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Essential Cookies:</span> Required for the basic functionality of our website, such as remembering your cookie consent preferences.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Analytics Cookies:</span> Help us understand how visitors interact with our website by collecting and reporting information anonymously (e.g., Google Analytics).
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Advertising Cookies:</span> Used to serve relevant advertisements to you. These cookies may be set by third-party advertising partners (e.g., Google AdSense).
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>To provide, operate, and maintain our website</li>
                <li>To improve and personalize your experience</li>
                <li>To understand and analyze how you use our website</li>
                <li>To develop new features and functionality</li>
                <li>To display relevant advertisements</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We may use third-party services that collect, monitor, and analyze information to improve our service. These third parties have their own privacy policies:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Google Analytics:</span> Web analytics service that tracks and reports website traffic. Learn more at{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Google&apos;s Privacy Policy
                  </a>.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Google AdSense:</span> Advertising service that displays relevant ads. Learn more at{' '}
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    How Google Uses Cookies in Advertising
                  </a>.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The security of your data is important to us. Most of your data (conversion history, preferences) is stored locally in your browser and never leaves your device. We implement appropriate security measures to protect any information we do collect, but please note that no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Your Rights (GDPR / CCPA)</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li><span className="font-medium">Right of Access:</span> Request copies of your personal data</li>
                <li><span className="font-medium">Right to Rectification:</span> Request correction of inaccurate data</li>
                <li><span className="font-medium">Right to Erasure:</span> Request deletion of your personal data</li>
                <li><span className="font-medium">Right to Restrict Processing:</span> Request restriction of processing</li>
                <li><span className="font-medium">Right to Data Portability:</span> Request transfer of your data</li>
                <li><span className="font-medium">Right to Object:</span> Object to our processing of your personal data</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:contact@convertmaster.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  contact@convertmaster.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our website is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 font-medium">ConvertMaster</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Email:{' '}
                  <a href="mailto:contact@convertmaster.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    contact@convertmaster.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

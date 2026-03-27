'use client';

import React from 'react';
import Link from 'next/link';
import { FiFileText } from 'react-icons/fi';

export default function TermsClient() {
  const lastUpdated = 'March 27, 2026';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <FiFileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Terms of Service
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using ConvertMaster (&quot;the Service&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service. We reserve the right to update or modify these terms at any time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                ConvertMaster is a free, web-based unit conversion platform that provides tools for converting units of measurement across various categories including length, weight, temperature, area, volume, speed, data, and more. The Service also includes developer tools, calculators, and analytics features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Use of the Service</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                You agree to use the Service only for lawful purposes. You are prohibited from:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Using the Service in any way that violates applicable laws or regulations</li>
                <li>Attempting to interfere with, compromise, or disrupt the Service</li>
                <li>Attempting to gain unauthorized access to any part of the Service</li>
                <li>Using automated systems (bots, scrapers) to access the Service without our express written permission</li>
                <li>Transmitting any malicious code, viruses, or harmful data through the Service</li>
                <li>Impersonating another person or entity while using the Service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Accuracy of Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                While we strive to provide accurate conversion results, ConvertMaster is provided &quot;as is&quot; and we make no warranties or guarantees regarding the accuracy, completeness, or reliability of any conversion results. The Service should not be used as the sole basis for critical decisions in engineering, medical, scientific, or financial contexts. Always verify important conversions with authoritative sources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Service and its original content, features, and functionality are owned by ConvertMaster and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, or publicly display any content from our Service without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Third-Party Content and Advertising</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Service may display third-party advertisements (including Google AdSense). We are not responsible for the content, accuracy, or opinions expressed in third-party advertisements. Your interactions with advertisers and any terms, conditions, warranties, or representations associated with such dealings are solely between you and the advertiser. Please refer to our{' '}
                <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Privacy Policy
                </Link>{' '}
                for information on how advertising cookies are used.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. User Data and Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your use of the Service is also governed by our{' '}
                <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference. By using the Service, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                IN NO EVENT SHALL CONVERTMASTER, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Indemnification</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You agree to defend, indemnify, and hold harmless ConvertMaster and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of and access to the Service, or your violation of any of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Modifications to the Service</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the Service (in whole or in part) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Severability</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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

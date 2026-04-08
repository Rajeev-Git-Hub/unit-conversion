'use client';

import Link from 'next/link';
import { useLocalization } from '../../lib/LocalizationContext';
import { FiTrendingUp, FiShield, FiCheckCircle, FiUsers, FiClock, FiArrowRight, FiActivity } from 'react-icons/fi';

export default function AboutPage() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="premium-badge">
                <FiTrendingUp className="w-3 h-3"></FiTrendingUp>
                <span>Industry Leading</span>
              </div>
              <div className="badge badge-success">
                <FiCheckCircle className="w-3 h-3"></FiCheckCircle>
                <span>99.9% Accurate</span>
              </div>
              <div className="badge badge-secondary">
                <FiActivity className="w-3 h-3"></FiActivity>
                <span>Instant</span>
              </div>
            </div>
            
            <h1 className="hero-gradient text-4xl font-bold mb-4">About ConvertMaster</h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">The most advanced unit conversion platform trusted by millions of professionals worldwide for precision, speed, and reliability.</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission Section */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="section-title">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To provide the world's most accurate, fastest, and user-friendly unit conversion platform that empowers professionals and individuals to make precise calculations instantly.
                </p>
                <div className="flex items-center gap-4">
                  <div className="metric-label">Accuracy</div>
                  <div className="metric-value">99.9%</div>
                  <div className="metric-change positive">
                    <FiArrowRight className="w-3 h-3"></FiArrowRight>
                    <span>Industry Leading</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="section-title">Why Choose ConvertMaster?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We combine cutting-edge technology with intuitive design to deliver conversion tools that professionals trust for critical calculations and data analysis.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="icon-box icon-box-primary mb-4">
                      <FiShield className="w-6 h-6"></FiShield>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                    <p className="text-sm text-gray-600">
                      Bank-level encryption with GDPR compliance
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="icon-box icon-box-primary mb-4" style={{ background: '#10b981' }}>
                      <FiUsers className="w-6 h-6"></FiUsers>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Trust</h3>
                    <p className="text-sm text-gray-600">
                      50M+ active users worldwide
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="icon-box icon-box-primary mb-4" style={{ background: '#8b5cf6' }}>
                      <FiClock className="w-6 h-6"></FiClock>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-sm text-gray-600">
                      Always online, always ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12">
          <div className="container">
            <div className="text-center mb-8">
              <h3 className="section-title">Platform Statistics</h3>
              <p className="section-subtitle">Trusted by professionals worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="metric-label">Conversions</div>
                <div className="metric-value">100M+</div>
                <div className="metric-change positive">
                  <FiArrowRight className="w-3 h-3"></FiArrowRight>
                  <span>Completed</span>
                </div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="metric-label">Users</div>
                <div className="metric-value">50M+</div>
                <div className="metric-change positive">
                  <FiArrowRight className="w-3 h-3"></FiArrowRight>
                  <span>Active</span>
                </div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="metric-label">Countries</div>
                <div className="metric-value">180+</div>
                <div className="metric-change positive">
                  <FiArrowRight className="w-3 h-3"></FiArrowRight>
                  <span>Global</span>
                </div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="metric-label">Uptime</div>
                <div className="metric-value">99.9%</div>
                <div className="metric-change positive">
                  <FiArrowRight className="w-3 h-3"></FiArrowRight>
                  <span>Reliable</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="container">
            <div className="text-center">
              <h3 className="section-title">Ready to Experience Precision?</h3>
              <p className="section-subtitle mb-8">Join millions of users who trust ConvertMaster for their critical calculations</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/all-converters"
                  className="btn btn-primary"
                >
                  <span>Explore All Converters</span>
                  <FiArrowRight className="w-4 h-4"></FiArrowRight>
                </Link>
                <Link
                  href="/"
                  className="btn btn-secondary"
                >
                  <span>Back to Home</span>
                  <FiArrowRight className="w-4 h-4"></FiArrowRight>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

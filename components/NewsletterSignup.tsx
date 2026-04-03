'use client';

import { useState } from 'react';
import { FaEnvelope, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Store email locally (in real app, this would go to a backend/ESP)
    const existingEmails = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    
    if (existingEmails.includes(email)) {
      setSubscribed(true);
      return;
    }

    existingEmails.push({
      email,
      subscribedAt: new Date().toISOString(),
      source: window.location.pathname
    });
    
    localStorage.setItem('newsletter_subscribers', JSON.stringify(existingEmails));
    setSubscribed(true);
    setEmail('');

    // Track subscription (can be sent to analytics)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'newsletter_signup', {
        event_category: 'engagement',
        event_label: window.location.pathname
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Conversion Tips & Updates
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our newsletter for expert conversion guides, new features, and helpful tips delivered to your inbox. No spam, unsubscribe anytime.
          </p>

          {subscribed ? (
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 bg-green-500/20 text-green-100 px-6 py-4 rounded-xl">
                <FaCheckCircle className="w-6 h-6" />
                <span className="font-semibold">Thanks for subscribing! Check your inbox soon.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                    aria-label="Email address"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Subscribe</span>
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
              {error && (
                <p className="text-red-200 text-sm mt-3" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="w-4 h-4" />
              Weekly tips
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="w-4 h-4" />
              New features
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="w-4 h-4" />
              No spam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

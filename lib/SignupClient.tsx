"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import { useLocalization } from './LocalizationContext';

export default function SignupClient() {
  const { t } = useLocalization();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [usernamePlaceholder, setUsernamePlaceholder] = useState(t('auth.username') || 'Username');
  const [emailPlaceholder, setEmailPlaceholder] = useState(t('auth.email') || 'Email Address');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(t('auth.password') || 'Password');
  const [confirmPlaceholder, setConfirmPlaceholder] = useState(t('auth.confirm_password') || 'Confirm Password');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!username || !email || !password) {
        setError(t('auth.signup.error_required') || 'Please fill required fields');
        setIsLoading(false);
        return;
      }

      if (password !== confirm) {
        setError(t('auth.signup.error_mismatch') || 'Passwords do not match');
        setIsLoading(false);
        return;
      }

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Signup failed');
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError(t('auth.signup.error_generic') || 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-md w-full mx-auto space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {t('auth.signup.title') || 'Sign Up'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {t('auth.signup.subtitle') || 'Join us to access all features'}
          </p>
        </div>
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm text-center">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('auth.username') || 'Username'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={usernamePlaceholder}
                  value={username}
                  onFocus={() => setUsernamePlaceholder('')}
                  onBlur={() => {
                    if (!username) setUsernamePlaceholder(t('auth.username') || 'Username');
                  }}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('auth.email') || 'Email'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={emailPlaceholder}
                  value={email}
                  onFocus={() => setEmailPlaceholder('')}
                  onBlur={() => {
                    if (!email) setEmailPlaceholder(t('auth.email') || 'Email Address');
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('auth.password') || 'Password'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={passwordPlaceholder}
                  value={password}
                  onFocus={() => setPasswordPlaceholder('')}
                  onBlur={() => {
                    if (!password) setPasswordPlaceholder(t('auth.password') || 'Password');
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('auth.confirm_password') || 'Confirm Password'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirm"
                  name="confirm"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={confirmPlaceholder}
                  value={confirm}
                  onFocus={() => setConfirmPlaceholder('')}
                  onBlur={() => {
                    if (!confirm) setConfirmPlaceholder(t('auth.confirm_password') || 'Confirm Password');
                  }}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (t('auth.signup.button_loading') || 'Creating...') : (t('auth.signup.button') || 'Create account')}
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">{t('auth.have_account') || 'Already have an account?'}{' '}</span>
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
            {t('nav.login') || 'Log In'}
          </Link>
        </div>
      </div>
    </div>
  );
}

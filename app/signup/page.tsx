export const metadata = {
  title: 'Sign Up (disabled)',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-center">Sign Up Disabled</h2>
        <p className="mt-4 text-center text-sm text-gray-600">Sign up is temporarily disabled. Please check back later.</p>
      </div>
    </div>
  );
}

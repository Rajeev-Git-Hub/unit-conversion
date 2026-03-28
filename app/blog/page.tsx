import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog – Unit Conversion Guides & Tips | ConvertMaster',
  description: 'Expert guides on unit conversions, measurement systems, and practical conversion tips. Learn how to convert between metric and imperial units easily.',
  keywords: 'conversion blog, unit conversion guides, metric to imperial, measurement tips',
};

const blogPosts = [
  {
    slug: 'how-to-convert-kg-to-lbs',
    title: 'How to Convert KG to LBS: The Simple Way',
    excerpt: 'I used to always get confused converting kilos to pounds. Here is the easy trick I learned that works every time.',
    category: 'Weight',
    readTime: '3 min read',
  },
  {
    slug: 'understanding-celsius-fahrenheit',
    title: 'Celsius vs Fahrenheit: What is the Difference?',
    excerpt: 'Ever wondered why some countries use Celsius and others use Fahrenheit? I break it down simply.',
    category: 'Temperature',
    readTime: '4 min read',
  },
  {
    slug: 'metric-vs-imperial-systems',
    title: 'Metric or Imperial: Which One is Better?',
    excerpt: 'I have lived in countries that use both systems. Here is my honest take on which one makes more sense.',
    category: 'Education',
    readTime: '6 min read',
  },
  {
    slug: 'common-cooking-conversions',
    title: 'Kitchen Conversions That Actually Help',
    excerpt: 'Tired of guessing how many tablespoons are in a cup? These are the cooking conversions I use daily.',
    category: 'Cooking',
    readTime: '4 min read',
  },
  {
    slug: 'body-temperature-guide',
    title: 'Normal Body Temperature: When to Worry',
    excerpt: 'I checked my temperature and panicked. Turns out normal body temp varies more than you think.',
    category: 'Health',
    readTime: '3 min read',
  },
  {
    slug: 'data-storage-explained',
    title: 'MB, GB, TB: What Do They Actually Mean?',
    excerpt: 'Buying a new phone or laptop? Here is what those storage numbers really mean in plain English.',
    category: 'Technology',
    readTime: '4 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ConvertMaster Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert guides, tips, and insights on unit conversions and measurement systems
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Need to Convert Something Now?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Try our free online converters for instant, accurate results
          </p>
          <Link
            href="/all-converters"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
          >
            Explore All Converters
          </Link>
        </div>
      </section>
    </div>
  );
}

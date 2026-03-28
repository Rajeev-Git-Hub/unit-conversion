import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kitchen Conversions That Actually Help | ConvertMaster',
  description: 'Tired of guessing how many tablespoons are in a cup? These are the cooking conversions I use daily.',
  keywords: 'cooking conversions, kitchen measurements, cups to tablespoons, recipe conversions',
};

export default function CookingConversionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Kitchen Conversions That Actually Help
          </h1>
          <p className="text-xl text-amber-100">
            The cooking math I finally memorized after ruining enough recipes
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I have ruined more recipes than I care to admit because I guessed on conversions. 
                "Eh, that looks like a cup" is not a valid measurement strategy, apparently.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                After years of baking fails and watery sauces, here are the conversions 
                I actually use and have (mostly) memorized.
              </p>
            </section>

            {/* The Big Ones */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Ones I Use Constantly
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
                  <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Cups to Tablespoons</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1 cup = 16 tbsp</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    So half a cup is 8 tbsp, quarter cup is 4 tbsp. 
                    This is the one I use most.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Tablespoons to Teaspoons</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1 tbsp = 3 tsp</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Easy to remember because they both start with T. 
                    Wait, no, that is confusing.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Cups to Fluid Ounces</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1 cup = 8 fl oz</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    So a pint (2 cups) is 16 oz. A quart (4 cups) is 32 oz. 
                    Gallon is 128 oz but honestly who measures in gallons?
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">Sticks of Butter</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1 stick = 1/2 cup</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Why do recipes say "1/2 cup butter" instead of "1 stick"? 
                    They come wrapped in sticks! Just say the sticks!
                  </p>
                </div>
              </div>
            </section>

            {/* The Weight Problem */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Problem with Cups (And Why Scales Are Better)
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Here is a secret: cups are not that accurate. 
                How you scoop flour can change the amount by 20% or more. 
                Packed vs sifted vs spooned. It is chaos.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Professional bakers use weight (grams or ounces) because it is consistent. 
                100 grams of flour is always 100 grams, no matter how you scoop it.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-4">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Common Conversions I Look Up</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 1 cup all-purpose flour = 120-125 grams (depends on the scoop)</li>
                  <li>• 1 cup granulated sugar = 200 grams</li>
                  <li>• 1 cup brown sugar (packed) = 220 grams</li>
                  <li>• 1 cup butter = 227 grams (2 sticks)</li>
                  <li>• 1 cup honey = 340 grams (dense!)</li>
                </ul>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                I finally bought a kitchen scale and my baking improved immediately. 
                Best $15 I spent.
              </p>
            </section>

            {/* Temperature */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Oven Temperatures I Memorized
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-4 font-semibold text-gray-900 dark:text-white rounded-tl-lg">Description</th>
                      <th className="p-4 font-semibold text-gray-900 dark:text-white">Fahrenheit</th>
                      <th className="p-4 font-semibold text-gray-900 dark:text-white rounded-tr-lg">Celsius</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Low/Slow Cooking</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">300°F</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">150°C</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Moderate</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">350°F</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">175°C</td>
                    </tr>
                    <tr className="bg-orange-50 dark:bg-orange-900/20">
                      <td className="p-4 text-orange-700 dark:text-orange-300 font-medium">Most Baking</td>
                      <td className="p-4 text-orange-700 dark:text-orange-300">375°F</td>
                      <td className="p-4 text-orange-700 dark:text-orange-300">190°C</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Hot/Roasting</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">400°F</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">200°C</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700 dark:text-gray-300">Very Hot</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">450°F</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">230°C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                The pattern is not super obvious, so I just remember the common ones: 
                350°F = 175°C (most cookies), 375°F = 190°C (most cakes).
              </p>
            </section>

            {/* Substitutions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Substitutions That Have Saved Me
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Out of baking powder?</strong> Use 1/4 tsp baking soda + 1/2 tsp cream of tartar for each tsp of baking powder needed.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Need buttermilk?</strong> Add 1 tbsp lemon juice or vinegar to 1 cup milk. Let sit 5 minutes.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>No eggs?</strong> For baking, 1 egg = 1/4 cup applesauce or 1 tbsp ground flaxseed + 3 tbsp water.
                  </p>
                </div>
              </div>
            </section>

            {/* Summary */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What I Actually Remember
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>1 cup = 16 tablespoons</li>
                <li>1 tablespoon = 3 teaspoons</li>
                <li>Buy a kitchen scale</li>
                <li>Everything else, I look up</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                That is it. Bookmark this page or use our <Link href="/all-converters" className="text-blue-600 hover:underline">converters</Link> when you need exact amounts.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need Exact Conversions?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our kitchen converters handle the math
              </p>
              <Link
                href="/all-converters"
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors shadow-lg"
              >
                Browse Kitchen Converters
              </Link>
            </section>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/metric-vs-imperial-systems" className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600">Metric vs Imperial</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Why cooking uses both systems</p>
            </Link>
            <Link href="/blog/how-to-convert-kg-to-lbs" className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600">KG to LBS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">For recipe scaling</p>
            </Link>
            <Link href="/blog" className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600">All Articles</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Browse everything</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

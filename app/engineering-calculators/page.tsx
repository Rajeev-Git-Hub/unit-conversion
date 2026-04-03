import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engineering Calculators – Free Tools for Engineers & Students',
  description: 'Free engineering calculators for civil, mechanical, electrical, and chemical engineers. Calculate beam stress, Ohm\'s law, fluid flow, and more.',
  keywords: 'engineering calculators, civil engineering tools, mechanical calculator, electrical engineering, Ohm\'s law calculator, beam stress calculator, fluid flow calculator',
};

export default function EngineeringCalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering Calculators
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Professional-grade calculation tools for engineers, students, and technical professionals. 
            Free, accurate, and always available.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Engineering Calculators Matter
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Engineering is built on precision. Whether you are designing a bridge, analyzing electrical circuits, 
            or calculating fluid dynamics, having the right calculation tools is essential. Our engineering 
            calculators are designed to help civil, mechanical, electrical, and chemical engineers solve complex 
            problems quickly and accurately.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            From Ohm's Law calculations for electrical engineers to beam stress analysis for structural engineers, 
            our growing collection of engineering tools covers the most common calculations you need in your daily work.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              ⚡ Instant Results
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              📐 Professional Grade
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              🎓 Student Friendly
            </span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Engineering Calculator Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Electrical Engineering */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Electrical Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Calculators for circuits, power systems, and electronics design.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li>• Ohm's Law Calculator</li>
                <li>• Power Calculator (Watts, Amps, Volts)</li>
                <li>• Resistor Color Code</li>
                <li>• Capacitor/Inductor Reactance</li>
              </ul>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>

            {/* Civil & Structural */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Civil & Structural
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tools for structural analysis, beam design, and material calculations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li>• Beam Stress Calculator</li>
                <li>• Concrete Volume Calculator</li>
                <li>• Steel Beam Sizing</li>
                <li>• Load Distribution Calculator</li>
              </ul>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>

            {/* Mechanical Engineering */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Mechanical Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Gear ratios, torque, horsepower, and mechanical design tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li>• Torque Calculator</li>
                <li>• Gear Ratio Calculator</li>
                <li>• Belt/Pulley Calculator</li>
                <li>• Spring Force Calculator</li>
              </ul>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>

            {/* Fluid Mechanics */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Fluid Mechanics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Flow rate, pressure drop, pipe sizing, and hydraulic calculations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li>• Flow Rate Calculator</li>
                <li>• Pipe Pressure Drop</li>
                <li>• Reynolds Number Calculator</li>
                <li>• Pump Power Calculator</li>
              </ul>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>

            {/* Thermodynamics */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Thermodynamics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Heat transfer, energy efficiency, and thermal system calculations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li>• Heat Transfer Calculator</li>
                <li>• Thermal Efficiency</li>
                <li>• HVAC Load Calculator</li>
                <li>• Heat Exchanger Sizing</li>
              </ul>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>

            {/* Materials Science */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Materials Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Material properties, stress-strain, and composition calculations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li>• Material Strength Calculator</li>
                <li>• Alloy Composition</li>
                <li>• Hardness Converter</li>
                <li>• Density Calculator</li>
              </ul>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Who Uses Our Engineering Calculators?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">👷</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Professional Engineers</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Quick calculations in the field, design verification, and project planning.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎓</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Engineering Students</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Homework help, exam preparation, and understanding engineering concepts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏭</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Industry Technicians</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Maintenance calculations, troubleshooting, and equipment sizing.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🔬</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Researchers</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Data analysis, experimental design, and validation calculations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore All Our Calculators
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            While we build our engineering calculator suite, check out our existing conversion tools 
            for units, finance, and more.
          </p>
          <Link
            href="/all-converters"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>View All Converters</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About Engineering Calculators
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Engineering calculators are specialized digital tools designed to perform complex mathematical 
            operations required in various engineering disciplines. Unlike general calculators, they come 
            with pre-programmed formulas and constants specific to engineering fields, ensuring accuracy and 
            saving valuable time for professionals and students alike.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Our engineering calculator collection will cover civil engineering tools for structural analysis, 
            mechanical engineering calculators for torque and gear ratios, electrical engineering tools for 
            circuit analysis, and chemical engineering calculators for process design. Each tool is built with 
            precision and follows industry standards.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you are calculating beam deflection for a construction project, determining resistor 
            values for an electronic circuit, or sizing pipes for fluid transport, our engineering calculators 
            will provide accurate results instantly. All tools are free to use, require no registration, 
            and work on any device.
          </p>
        </div>
      </section>
    </div>
  );
}

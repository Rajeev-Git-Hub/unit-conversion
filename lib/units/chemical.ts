export const chemicalUnits = {
  // Mass units - Base: gram (g) - NIST Standard
  gram: 1,
  kilogram: 1000,            // 1 kg = 1000 g (exact)
  milligram: 0.001,          // 1 mg = 0.001 g (exact)
  microgram: 0.000001,       // 1 μg = 1e-6 g (exact)
  nanogram: 0.000000001,     // 1 ng = 1e-9 g (exact)
  pound: 453.59237,          // 1 lb = 453.59237 g (exact - International Yard and Pound Agreement)
  ounce: 28.349523125,       // 1 oz = 28.349523125 g (exact - International Yard and Pound Agreement)
  Dalton: 1.66053906660e-24, // 1 Da = 1.66053906660e-24 g (exact - CODATA 2018)

  // Amount of substance - Base: mole (mol) - SI Standard
  mole: 1,
  kilomole: 1000,            // 1 kmol = 1000 mol (exact)
  millimole: 0.001,          // 1 mmol = 0.001 mol (exact)
  micromole: 0.000001,       // 1 μmol = 1e-6 mol (exact)
  nanomole: 0.000000001,     // 1 nmol = 1e-9 mol (exact)
  picomole: 0.000000000001,  // 1 pmol = 1e-12 mol (exact)

  // Volume units - Base: liter (L) - Metric Standard
  liter: 1,
  milliliter: 0.001,         // 1 mL = 0.001 L (exact)
  microliter: 0.000001,      // 1 μL = 1e-6 L (exact)
  nanoliter: 0.000000001,    // 1 nL = 1e-9 L (exact)
  'cubic meter': 1000,       // 1 m³ = 1000 L (exact)
  'cubic centimeter': 0.001, // 1 cm³ = 0.001 L (exact)
  'cubic millimeter': 0.000001, // 1 mm³ = 1e-6 L (exact)
  gallon: 3.785411784,       // 1 gal (US) = 3.785411784 L (exact)
  quart: 0.946352946,        // 1 qt (US) = 0.946352946 L (exact)
  pint: 0.473176473,         // 1 pt (US) = 0.473176473 L (exact)
  cup: 0.2365882365,         // 1 cup (US) = 0.2365882365 L (exact)
  'fluid ounce': 0.0295735295625, // 1 fl oz (US) = 0.0295735295625 L (exact)

  // Concentration units - Base: molar (mol/L) - SI Standard
  'molar (mol/L)': 1,
  'millimolar (mmol/L)': 0.001,     // 1 mmol/L = 0.001 mol/L (exact)
  'micromolar (μmol/L)': 0.000001,  // 1 μmol/L = 1e-6 mol/L (exact)
  'nanomolar (nmol/L)': 0.000000001, // 1 nmol/L = 1e-9 mol/L (exact)
  'picomolar (pmol/L)': 0.000000000001, // 1 pmol/L = 1e-12 mol/L (exact)
  'molar (M)': 1,                   // Alias for molar
  'millimolar (mM)': 0.001,          // Alias for millimolar
  'micromolar (μM)': 0.000001,       // Alias for micromolar

  // Mass concentration units - Base: gram per liter (g/L)
  'gram per liter': 1,
  'milligram per liter': 0.001,      // 1 mg/L = 0.001 g/L (exact)
  'microgram per liter': 0.000001,   // 1 μg/L = 1e-6 g/L (exact)
  'nanogram per liter': 0.000000001, // 1 ng/L = 1e-9 g/L (exact)
  'gram per milliliter': 1000,        // 1 g/mL = 1000 g/L (exact)
  'milligram per milliliter': 1,     // 1 mg/mL = 1 g/L (exact)
  'microgram per milliliter': 0.001,  // 1 μg/mL = 0.001 g/L (exact)

  // Density units - Base: gram per milliliter (g/mL)
  'g/mL': 1,
  'kg/L': 1,                        // 1 kg/L = 1 g/mL (exact)
  'g/cm³': 1,                       // 1 g/cm³ = 1 g/mL (exact)
  'kg/m³': 0.001,                   // 1 kg/m³ = 0.001 g/mL (exact)
  'mg/mL': 0.001,                   // 1 mg/mL = 0.001 g/mL (exact)
  'μg/mL': 0.000001,                 // 1 μg/mL = 1e-6 g/mL (exact)

  // Pressure units - Base: pascal (Pa) - SI Standard
  pascal: 1,
  kilopascal: 1000,                  // 1 kPa = 1000 Pa (exact)
  megapascal: 1000000,               // 1 MPa = 1,000,000 Pa (exact)
  bar: 100000,                       // 1 bar = 100,000 Pa (exact)
  'atmosphere': 101325,              // 1 atm = 101,325 Pa (exact)
  torr: 133.322,                    // 1 torr = 133.322 Pa (approximate)
  'millimeters of mercury': 133.322, // 1 mmHg = 133.322 Pa (approximate)
  psi: 6894.757293168361,           // 1 psi = 6894.757293168361 Pa (exact)

  // Temperature units - Special handling (not ratio-based)
  celsius: 'celsius',
  fahrenheit: 'fahrenheit',
  kelvin: 'kelvin',
  rankine: 'rankine',

  // Energy units - Base: joule (J) - SI Standard
  joule: 1,
  kilojoule: 1000,                   // 1 kJ = 1000 J (exact)
  megajoule: 1000000,                // 1 MJ = 1,000,000 J (exact)
  calorie: 4.184,                    // 1 cal (thermochemical) = 4.184 J (exact)
  kilocalorie: 4184,                 // 1 kcal = 4184 J (exact)
  'electron volt': 1.602176634e-19, // 1 eV = 1.602176634e-19 J (exact - SI definition)
  'kilocalorie per mole': 4184,      // 1 kcal/mol = 4184 J/mol (exact)

  // pH units (logarithmic scale)
  pH: 1,                            // pH scale - special handling required
};

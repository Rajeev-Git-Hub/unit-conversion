export const healthcareUnits = {
  // Mass - Base: gram (g) - NIST Standard
  gram: 1,
  kilogram: 1000,            // 1 kg = 1000 g (exact)
  milligram: 0.001,          // 1 mg = 0.001 g (exact)
  microgram: 0.000001,       // 1 μg = 1e-6 g (exact)
  nanogram: 0.000000001,     // 1 ng = 1e-9 g (exact)
  pound: 453.59237,          // 1 lb = 453.59237 g (exact - International Yard and Pound Agreement)
  ounce: 28.349523125,       // 1 oz = 28.349523125 g (exact - International Yard and Pound Agreement)
  grain: 0.06479891,         // 1 grain = 0.06479891 g (exact)

  // Volume - Base: milliliter (mL) - Medical Standard
  milliliter: 1,             // Base unit for medical volume
  liter: 1000,               // 1 L = 1000 mL (exact)
  'cubic centimeter': 1,     // 1 cm³ = 1 mL (exact)
  'fluid ounce': 29.5735295625, // 1 fl oz (US) = 29.5735295625 mL (exact)
  teaspoon: 4.92892159375,   // 1 tsp (US) = 4.92892159375 mL (exact)
  tablespoon: 14.7867647825, // 1 tbsp (US) = 14.7867647825 mL (exact)
  cup: 236.5882365,          // 1 cup (US) = 236.5882365 mL (exact)
  pint: 473.176473,          // 1 pt (US) = 473.176473 mL (exact)
  quart: 946.352946,         // 1 qt (US) = 946.352946 mL (exact)
  gallon: 3785.411784,       // 1 gal (US) = 3785.411784 mL (exact)
  drop: 0.05,                // 1 drop (medical) = 0.05 mL (standard approximation)
  'milliequivalent (mEq)': 1, // Placeholder - substance-dependent conversion
  'international unit (IU)': 1, // Placeholder - substance-dependent conversion
  'microgram per milliliter': 0.001, // Concentration unit: 1 μg/mL = 0.001 mg/mL
  'milligram per deciliter': 0.01, // Concentration unit: 1 mg/dL = 0.01 mg/mL
  'milligram per liter': 0.001, // Concentration unit: 1 mg/L = 0.001 mg/mL
  'microgram per liter': 0.000001, // Concentration unit: 1 μg/L = 0.000001 mg/mL
  'nanogram per milliliter': 0.000001, // Concentration unit: 1 ng/mL = 0.000001 mg/mL
  'picogram per milliliter': 0.000000001, // Concentration unit: 1 pg/mL = 1e-9 mg/mL
};

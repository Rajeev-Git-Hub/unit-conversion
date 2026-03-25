export const logisticsUnits = {
  // Volume units - Base: cubic meter (m³) - SI Standard
  'cubic meter': 1,
  'cubic foot': 0.028316846592,    // 1 ft³ = 0.028316846592 m³ (exact)
  'cubic inch': 0.000016387064,    // 1 in³ = 0.000016387064 m³ (exact)
  liter: 0.001,                    // 1 L = 0.001 m³ (exact)
  milliliter: 0.000001,            // 1 mL = 1e-6 m³ (exact)
  'cubic centimeter': 0.000001,    // 1 cm³ = 1e-6 m³ (exact)
  'cubic yard': 0.764554857984,    // 1 yd³ = 0.764554857984 m³ (exact)
  gallon: 0.003785411784,          // 1 gal (US) = 0.003785411784 m³ (exact)
  
  // Shipping Container Units - Standard Industry Measurements
  'CBM (cubic meter)': 1,          // Alias for cubic meter
  'TEU (Twenty-foot Equivalent Unit)': 33.1, // Standard TEU = 33.1 m³ (industry standard)
  'FEU (Forty-foot Equivalent Unit)': 67.5, // Standard FEU = 67.5 m³ (industry standard)
  'pallet (standard)': 1.5,        // Standard pallet volume ≈ 1.5 m³
  'pallet (Euro)': 1.2,            // Euro pallet volume ≈ 1.2 m³

  // Weight units - Base: kilogram (kg) - SI Standard
  kilogram: 1,
  gram: 0.001,                     // 1 g = 0.001 kg (exact)
  milligram: 0.000001,             // 1 mg = 1e-6 kg (exact)
  'metric ton': 1000,              // 1 metric ton = 1000 kg (exact)
  'US ton': 907.18474,             // 1 US ton = 907.18474 kg (exact)
  pound: 0.45359237,               // 1 lb = 0.45359237 kg (exact)
  ounce: 0.028349523125,           // 1 oz = 0.028349523125 kg (exact)

  // Length units - Base: meter (m) - NIST Standard
  meter: 1,
  kilometer: 1000,                 // 1 km = 1000 m (exact)
  centimeter: 0.01,                // 1 cm = 0.01 m (exact)
  millimeter: 0.001,               // 1 mm = 0.001 m (exact)
  inch: 0.0254,                    // 1 in = 0.0254 m (exact)
  foot: 0.3048,                    // 1 ft = 0.3048 m (exact)
  yard: 0.9144,                    // 1 yd = 0.9144 m (exact)
  mile: 1609.344,                  // 1 mi = 1609.344 m (exact)
  nautical_mile: 1852,             // 1 nmi = 1852 m (exact)

  // Area units - Base: square meter (m²) - SI Standard
  'square meter': 1,
  'square foot': 0.09290304,       // 1 ft² = 0.09290304 m² (exact)
  'square inch': 0.00064516,       // 1 in² = 0.00064516 m² (exact)
  'square yard': 0.83612736,       // 1 yd² = 0.83612736 m² (exact)
  acre: 4046.8564224,              // 1 acre = 4046.8564224 m² (exact)
  hectare: 10000,                  // 1 hectare = 10,000 m² (exact)

  // Density units - kg/m³ (for volumetric weight calculations)
  'water density': 1000,           // Water at 4°C
  'sea water density': 1025,       // Average sea water
  'air density': 1.225,            // Air at sea level, 15°C
  'fuel density': 850,             // Average aviation fuel
  'oil density': 900,              // Average crude oil

  // Pressure units - Pa (for cargo pressure calculations)
  pascal: 1,
  kilopascal: 1000,                // 1 kPa = 1000 Pa (exact)
  bar: 100000,                     // 1 bar = 100,000 Pa (exact)
  psi: 6894.757293168361,          // 1 psi = 6894.757293168361 Pa (exact)
  'atmosphere': 101325,            // 1 atm = 101,325 Pa (exact)
};

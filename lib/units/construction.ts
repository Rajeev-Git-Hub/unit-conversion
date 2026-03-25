export const constructionUnits = {
  // Mass - Base: kilogram (kg) - SI Standard
  kilogram: 1,
  gram: 0.001,               // 1 g = 0.001 kg (exact)
  'metric ton': 1000,        // 1 metric ton = 1000 kg (exact)
  'US ton': 907.18474,       // 1 US ton = 907.18474 kg (exact)
  pound: 0.45359237,         // 1 lb = 0.45359237 kg (exact)
  ounce: 0.028349523125,     // 1 oz = 0.028349523125 kg (exact)

  // Length - Base: meter (m) - NIST Standard
  meter: 1,
  kilometer: 1000,           // 1 km = 1000 m (exact)
  centimeter: 0.01,          // 1 cm = 0.01 m (exact)
  millimeter: 0.001,         // 1 mm = 0.001 m (exact)
  inch: 0.0254,              // 1 in = 0.0254 m (exact)
  foot: 0.3048,              // 1 ft = 0.3048 m (exact)
  yard: 0.9144,              // 1 yd = 0.9144 m (exact)
  mile: 1609.344,            // 1 mi = 1609.344 m (exact)

  // Area - Base: square meter (m²) - SI Standard
  'square meter': 1,
  'square kilometer': 1000000,    // 1 km² = 1,000,000 m² (exact)
  'square centimeter': 0.0001,     // 1 cm² = 0.0001 m² (exact)
  'square millimeter': 0.000001,   // 1 mm² = 1e-6 m² (exact)
  'square inch': 0.00064516,       // 1 in² = 0.00064516 m² (exact)
  'square foot': 0.09290304,       // 1 ft² = 0.09290304 m² (exact)
  'square yard': 0.83612736,       // 1 yd² = 0.83612736 m² (exact)
  acre: 4046.8564224,               // 1 acre = 4046.8564224 m² (exact)
  hectare: 10000,                  // 1 hectare = 10,000 m² (exact)

  // Volume - Base: cubic meter (m³) - SI Standard
  'cubic meter': 1,
  'cubic centimeter': 0.000001,   // 1 cm³ = 1e-6 m³ (exact)
  'cubic millimeter': 0.000000001, // 1 mm³ = 1e-9 m³ (exact)
  liter: 0.001,                    // 1 L = 0.001 m³ (exact)
  milliliter: 0.000001,            // 1 mL = 1e-6 m³ (exact)
  'cubic inch': 0.000016387064,    // 1 in³ = 0.000016387064 m³ (exact)
  'cubic foot': 0.028316846592,    // 1 ft³ = 0.028316846592 m³ (exact)
  'cubic yard': 0.764554857984,    // 1 yd³ = 0.764554857984 m³ (exact)
  gallon: 0.003785411784,          // 1 gal (US) = 0.003785411784 m³ (exact)

  // Density - Common Construction Materials (kg/m³)
  // These are standard average densities for construction calculations
  'concrete (normal)': 2400,       // Normal weight concrete
  'concrete (lightweight)': 1600,  // Lightweight concrete
  'cement': 1440,                  // Portland cement
  'sand (dry)': 1602,              // Dry sand
  'sand (wet)': 1922,              // Wet sand
  'gravel': 1680,                  // Gravel
  'water': 1000,                   // Water at 4°C
  'steel': 7850,                   // Structural steel
  'aluminum': 2700,                // Aluminum
  'wood (soft)': 500,              // Soft wood average
  'wood (hard)': 700,              // Hard wood average
  'brick': 1920,                   // Common brick
  'asphalt': 2300,                 // Asphalt concrete
  'glass': 2500,                   // Glass
  'plaster': 1200,                 // Plaster

  // Pressure/Strength - Base: pascal (Pa) - SI Standard
  pascal: 1,
  kilopascal: 1000,                // 1 kPa = 1000 Pa (exact)
  megapascal: 1000000,             // 1 MPa = 1,000,000 Pa (exact)
  psi: 6894.757293168361,          // 1 psi = 6894.757293168361 Pa (exact)
  'kilogram per square centimeter': 98066.5, // 1 kgf/cm² = 98066.5 Pa (exact)
  'ton per square foot': 95760.518, // 1 tonf/ft² = 95760.518 Pa (approximate)

  // Temperature - Base: celsius (°C) - SI Derived
  celsius: 'celsius',
  fahrenheit: 'fahrenheit',
  kelvin: 'kelvin',

  // Angle - Base: degree (°) - Common Construction Unit
  degree: 1,
  radian: 57.29577951308232,      // 1 rad = 57.29577951308232° (exact)
  'gradian': 0.9,                 // 1 grad = 0.9° (exact)
  
  // Force - Base: newton (N) - SI Standard
  newton: 1,
  kilonewton: 1000,                // 1 kN = 1000 N (exact)
  'pound-force': 4.4482216152605,  // 1 lbf = 4.4482216152605 N (exact)
  'kilogram-force': 9.80665,       // 1 kgf = 9.80665 N (exact - standard gravity)
};
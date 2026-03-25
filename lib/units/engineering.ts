export const engineeringUnits = {
  // Length - Base: meter (m) - NIST Standard
  meter: 1,
  kilometer: 1000,           // 1 km = 1000 m (exact)
  centimeter: 0.01,          // 1 cm = 0.01 m (exact)
  millimeter: 0.001,         // 1 mm = 0.001 m (exact)
  inch: 0.0254,              // 1 in = 0.0254 m (exact - International Yard and Pound Agreement)
  foot: 0.3048,              // 1 ft = 0.3048 m (exact - International Yard and Pound Agreement)
  yard: 0.9144,              // 1 yd = 0.9144 m (exact - International Yard and Pound Agreement)
  mile: 1609.344,            // 1 mi = 1609.344 m (exact - International Yard and Pound Agreement)

  // Mass - Base: kilogram (kg) - SI Standard
  kilogram: 1,
  gram: 0.001,               // 1 g = 0.001 kg (exact)
  milligram: 0.000001,       // 1 mg = 1e-6 kg (exact)
  pound: 0.45359237,         // 1 lb = 0.45359237 kg (exact - International Yard and Pound Agreement)
  ounce: 0.028349523125,     // 1 oz = 0.028349523125 kg (exact - International Yard and Pound Agreement)
  'metric ton': 1000,        // 1 metric ton = 1000 kg (exact)
  'US ton': 907.18474,       // 1 US ton = 907.18474 kg (exact)

  // Force - Base: newton (N) - SI Standard
  newton: 1,
  kilonewton: 1000,          // 1 kN = 1000 N (exact)
  'pound-force': 4.4482216152605, // 1 lbf = 4.4482216152605 N (exact)
  'kilogram-force': 9.80665, // 1 kgf = 9.80665 N (exact - standard gravity)
  dyne: 0.00001,             // 1 dyne = 1e-5 N (exact)

  // Pressure - Base: pascal (Pa) - SI Standard
  pascal: 1,
  kilopascal: 1000,          // 1 kPa = 1000 Pa (exact)
  megapascal: 1000000,       // 1 MPa = 1,000,000 Pa (exact)
  psi: 6894.757293168361,    // 1 psi = 6894.757293168361 Pa (exact)
  bar: 100000,               // 1 bar = 100,000 Pa (exact)
  'atmosphere': 101325,      // 1 atm = 101,325 Pa (exact - standard atmosphere)
  torr: 133.322,             // 1 torr = 133.322 Pa (approximate)
  'millimeters of mercury': 133.322, // 1 mmHg = 133.322 Pa (approximate)

  // Energy - Base: joule (J) - SI Standard
  joule: 1,
  kilojoule: 1000,           // 1 kJ = 1000 J (exact)
  megajoule: 1000000,        // 1 MJ = 1,000,000 J (exact)
  btu: 1055.05585262,        // 1 BTU (IT) = 1055.05585262 J (exact)
  calorie: 4.184,            // 1 cal (thermochemical) = 4.184 J (exact)
  kilocalorie: 4184,         // 1 kcal = 4184 J (exact)
  'electron volt': 1.602176634e-19, // 1 eV = 1.602176634e-19 J (exact - SI definition)
  'watt-hour': 3600,         // 1 Wh = 3600 J (exact)
  'kilowatt-hour': 3600000,  // 1 kWh = 3,600,000 J (exact)

  // Power - Base: watt (W) - SI Standard
  watt: 1,
  kilowatt: 1000,            // 1 kW = 1000 W (exact)
  megawatt: 1000000,         // 1 MW = 1,000,000 W (exact)
  horsepower: 745.699872,    // 1 hp (mechanical) = 745.699872 W (exact)
  'metric horsepower': 735.5, // 1 PS = 735.5 W (exact)
  'british thermal unit per hour': 0.29307107, // 1 BTU/h = 0.29307107 W (exact)

  // Frequency - Base: hertz (Hz) - SI Standard
  hertz: 1,
  kilohertz: 1000,           // 1 kHz = 1000 Hz (exact)
  megahertz: 1000000,        // 1 MHz = 1,000,000 Hz (exact)
  gigahertz: 1000000000,     // 1 GHz = 1,000,000,000 Hz (exact)

  // Electric Current - Base: ampere (A) - SI Standard
  ampere: 1,
  milliampere: 0.001,        // 1 mA = 0.001 A (exact)
  microampere: 0.000001,     // 1 μA = 1e-6 A (exact)

  // Voltage - Base: volt (V) - SI Standard
  volt: 1,
  kilovolt: 1000,            // 1 kV = 1000 V (exact)
  millivolt: 0.001,          // 1 mV = 0.001 V (exact)
  microvolt: 0.000001,       // 1 μV = 1e-6 V (exact)

  // Resistance - Base: ohm (Ω) - SI Standard
  ohm: 1,
  kilohm: 1000,              // 1 kΩ = 1000 Ω (exact)
  megohm: 1000000,           // 1 MΩ = 1,000,000 Ω (exact)
  milliohm: 0.001,           // 1 mΩ = 0.001 Ω (exact)
};
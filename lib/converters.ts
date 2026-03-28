import { CategoryKey } from './types';

// Lazy load complex unit definitions only when needed
let constructionUnits: any = null;
let healthcareUnits: any = null;
let cookingUnits: any = null;
let engineeringUnits: any = null;
let logisticsUnits: any = null;
let chemicalUnits: any = null;

const getConstructionUnits = () => {
  if (!constructionUnits) {
    constructionUnits = require('./units/construction').constructionUnits;
  }
  return constructionUnits;
};

const getHealthcareUnits = () => {
  if (!healthcareUnits) {
    healthcareUnits = require('./units/healthcare').healthcareUnits;
  }
  return healthcareUnits;
};

const getCookingUnits = () => {
  if (!cookingUnits) {
    cookingUnits = require('./units/cooking').cookingUnits;
  }
  return cookingUnits;
};

const getEngineeringUnits = () => {
  if (!engineeringUnits) {
    engineeringUnits = require('./units/engineering').engineeringUnits;
  }
  return engineeringUnits;
};

const getLogisticsUnits = () => {
  if (!logisticsUnits) {
    logisticsUnits = require('./units/logistics').logisticsUnits;
  }
  return logisticsUnits;
};

const getChemicalUnits = () => {
  if (!chemicalUnits) {
    chemicalUnits = require('./units/chemical').chemicalUnits;
  }
  return chemicalUnits;
};

// Unit aliases mapping - exported for use in components
export const unitAliases: Record<string, string> = {
  // Weight aliases
  'kg': 'kilogram',
  'g': 'gram',
  'mg': 'milligram',
  'lbs': 'pound',
  'lb': 'pound',
  'oz': 'ounce',
  'ton': 'metric ton',
  'tons': 'metric ton',
  'us ton': 'us ton',
  // Length aliases
  'm': 'meter',
  'km': 'kilometer',
  'cm': 'centimeter',
  'mm': 'millimeter',
  'ft': 'foot',
  'in': 'inch',
  'mi': 'mile',
  'yd': 'yard',
  // Time aliases
  's': 'second',
  'min': 'minute',
  'hr': 'hour',
  'd': 'day',
  'wk': 'week',
  'y': 'year',
  // Data aliases
  'b': 'byte',
  'kb': 'kilobyte',
  'mb': 'megabyte',
  'gb': 'gigabyte',
  'tb': 'terabyte',
  'pb': 'petabyte',
  // Speed aliases
  'm/s': 'meter per second',
  'mps': 'meter per second',
  'km/h': 'kilometer per hour',
  'kmh': 'kilometer per hour',
  'kmph': 'kilometer per hour',
  'kph': 'kilometer per hour',
  'mph': 'mile per hour',
  'mi/h': 'mile per hour',
  'ft/s': 'foot per second',
  'fts': 'foot per second',
  'fps': 'foot per second',
  'kn': 'knot',
  'kt': 'knot',
  'mach': 'mach',
  'c': 'speed of light',
};

export const converters = {
  length: {
    // Base Unit: meter (m) - NIST Standard
    meter: 1,
    kilometer: 1000,           // 1 km = 1000 m (exact)
    centimeter: 0.01,          // 1 cm = 0.01 m (exact)
    millimeter: 0.001,         // 1 mm = 0.001 m (exact)
    micrometer: 0.000001,      // 1 μm = 1e-6 m (exact)
    nanometer: 0.000000001,    // 1 nm = 1e-9 m (exact)
    inch: 0.0254,              // 1 in = 0.0254 m (exact - international yard and pound agreement)
    foot: 0.3048,              // 1 ft = 0.3048 m (exact - international yard and pound agreement)
    yard: 0.9144,              // 1 yd = 0.9144 m (exact - international yard and pound agreement)
    mile: 1609.344,            // 1 mi = 1609.344 m (exact - international yard and pound agreement)
    decimeter: 0.1,            // 1 dm = 0.1 m (exact)
    dekameter: 10,             // 1 dam = 10 m (exact)
    hectometer: 100,           // 1 hm = 100 m (exact)
  },
  weight: {
    // Base Unit: gram (g) - NIST Standard
    gram: 1,
    kilogram: 1000,            // 1 kg = 1000 g (exact)
    milligram: 0.001,          // 1 mg = 0.001 g (exact)
    microgram: 0.000001,       // 1 μg = 1e-6 g (exact)
    nanogram: 0.000000001,     // 1 ng = 1e-9 g (exact)
    pound: 453.59237,          // 1 lb = 453.59237 g (exact - international yard and pound agreement)
    ounce: 28.349523125,       // 1 oz = 28.349523125 g (exact - international yard and pound agreement)
    'metric ton': 1000000,     // 1 metric ton = 1,000,000 g (exact)
    'us ton': 907184.74        // 1 US ton = 2,000 lb = 907,184.74 g (exact)
  },
  time: {
    // Base Unit: second (s) - SI Standard
    second: 1,
    minute: 60,                // 1 min = 60 s (exact)
    hour: 3600,                // 1 hr = 3600 s (exact)
    day: 86400,                // 1 day = 86400 s (exact)
    week: 604800,              // 1 week = 7 days = 604800 s (exact)
    millisecond: 0.001,        // 1 ms = 0.001 s (exact)
    microsecond: 0.000001,     // 1 μs = 1e-6 s (exact)
    nanosecond: 0.000000001,   // 1 ns = 1e-9 s (exact)
    year: 31557600             // 1 year (Julian) = 365.25 days = 31557600 s (standard)
  },
  area: {
    // Base Unit: square meter (m²) - SI Standard
    'square meter': 1,
    'square kilometer': 1000000,    // 1 km² = 1,000,000 m² (exact)
    'square centimeter': 0.0001,     // 1 cm² = 0.0001 m² (exact)
    'square millimeter': 0.000001,   // 1 mm² = 1e-6 m² (exact)
    'square inch': 0.00064516,       // 1 in² = 0.00064516 m² (exact)
    'square foot': 0.09290304,       // 1 ft² = 0.09290304 m² (exact)
    'square yard': 0.83612736,       // 1 yd² = 0.83612736 m² (exact)
    'square mile': 2589988.110336,   // 1 mi² = 2,589,988.110336 m² (exact)
    hectare: 10000,                  // 1 hectare = 10,000 m² (exact)
    acre: 4046.8564224               // 1 acre = 4046.8564224 m² (exact)
  },
  volume: {
    // Base Unit: liter (L) - Metric Standard
    liter: 1,
    milliliter: 0.001,               // 1 mL = 0.001 L (exact)
    'cubic meter': 1000,             // 1 m³ = 1000 L (exact)
    'cubic centimeter': 0.001,       // 1 cm³ = 0.001 L (exact)
    'cubic inch': 0.016387064,       // 1 in³ = 0.016387064 L (exact)
    'cubic foot': 28.316846592,      // 1 ft³ = 28.316846592 L (exact)
    gallon: 3.785411784,             // 1 gal (US) = 3.785411784 L (exact)
    'fluid ounce': 0.0295735295625,   // 1 fl oz (US) = 0.0295735295625 L (exact)
  },
  speed: {
    // Base Unit: meter per second (m/s) - SI Standard
    'meter per second': 1,
    'kilometer per hour': 0.27777777777778,  // 1 km/h = 0.27777777777778 m/s (exact)
    'mile per hour': 0.44704,                // 1 mph = 0.44704 m/s (exact)
    'foot per second': 0.3048,               // 1 ft/s = 0.3048 m/s (exact)
    'knot': 0.51444444444444,               // 1 knot = 0.51444444444444 m/s (exact)
    'mach': 343,                            // 1 Mach (at sea level, 15°C) = 343 m/s (standard)
    'speed of light': 299792458             // c = 299,792,458 m/s (exact - SI definition)
  },
  data: {
    // Base Unit: byte (B) - Binary Standard
    byte: 1,
    kilobyte: 1024,                 // 1 KB = 1024 B (binary)
    megabyte: 1048576,              // 1 MB = 1024² B = 1,048,576 B (binary)
    gigabyte: 1073741824,           // 1 GB = 1024³ B = 1,073,741,824 B (binary)
    terabyte: 1099511627776,        // 1 TB = 1024⁴ B (binary)
    petabyte: 1125899906842624,     // 1 PB = 1024⁵ B (binary)
    exabyte: 1152921504606846976,   // 1 EB = 1024⁶ B (binary)
    bit: 0.125,                     // 1 bit = 0.125 B (exact)
    kilobit: 128,                   // 1 Kbit = 128 B (binary)
    megabit: 131072,                // 1 Mbit = 131,072 B (binary)
    gigabit: 134217728              // 1 Gbit = 134,217,728 B (binary)
  },
  temperature: {
    // Special handling - not ratio-based, handled in convert function
    celsius: 'celsius',
    fahrenheit: 'fahrenheit', 
    kelvin: 'kelvin',
    rankine: 'rankine',
    reaumur: 'reaumur'
  },
  construction: getConstructionUnits(),
  healthcare: getHealthcareUnits(),
  cooking: getCookingUnits(),
  engineering: getEngineeringUnits(),
  logistics: getLogisticsUnits(),
  chemical: getChemicalUnits()
};

export const temperatureUnits = [
  'celsius',
  'fahrenheit',
  'kelvin',
  'rankine',
  'reaumur'
];

export function convert(
  category: CategoryKey,
  value: number,
  from: string,
  to: string,
  concentration?: number, // Optional concentration for healthcare
  ingredientDensity?: number, // Optional ingredient density for cooking (e.g., grams per ml)
  tolerance?: number, // Optional tolerance for engineering conversions
  rounding?: number, // Optional rounding for engineering conversions
  volumetricWeightFactor?: number, // Optional volumetric weight factor for logistics conversions (e.g., kg/m^3)
  molarMass?: number, // Optional molar mass for chemical conversions (g/mol)
  solutionVolume?: number // Optional solution volume for chemical conversions (L)
): number {
  // Input validation
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('Invalid value: must be a valid number');
  }
  
  if (!from || !to) {
    throw new Error('Invalid units: from and to units must be specified');
  }

  // Normalize unit names
  const normalizedFrom = unitAliases[from.toLowerCase()] || from;
  const normalizedTo = unitAliases[to.toLowerCase()] || to;

  // Same unit conversion - return the same value
  if (normalizedFrom === normalizedTo) {
    return rounding !== undefined ? +value.toFixed(rounding) : value;
  }

  if (category === 'temperature') {
    // Temperature conversions have special logic (not ratio-based)
    // Convert everything to Celsius first, then to target
    let celsius: number;
    
    // Convert from source to Celsius
    switch (normalizedFrom) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) / 1.8;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      case 'rankine':
        celsius = (value - 491.67) * (5 / 9);
        break;
      case 'reaumur':
        celsius = value * 1.25;
        break;
      default:
        throw new Error(`Unsupported temperature unit: ${normalizedFrom}`);
    }
    
    // Convert from Celsius to target
    switch (normalizedTo) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return celsius * 1.8 + 32;
      case 'kelvin':
        return celsius + 273.15;
      case 'rankine':
        return (celsius + 273.15) * 1.8;
      case 'reaumur':
        return celsius * 0.8;
      default:
        throw new Error(`Unsupported temperature unit: ${normalizedTo}`);
    }
  }

  // For all other categories, use ratio-based conversion
  let map: any;
  
  // Handle special categories that don't have conversions
  if (category === 'analytics' || category === 'dev-tools' || category === 'utilities') {
    throw new Error(`Conversion not supported for ${category} category`);
  }

  // Standard ratio-based conversion for basic categories
  map = converters[category as keyof typeof converters];
  
  if (!map || typeof map !== 'object') {
    throw new Error(`Invalid category: ${category} not found`);
  }

  const fromFactor = map[normalizedFrom as keyof typeof map];
  const toFactor = map[normalizedTo as keyof typeof map];

  if (fromFactor === undefined || toFactor === undefined) {
    throw new Error(`Invalid unit: ${normalizedFrom} or ${normalizedTo} not found in ${category}`);
  }

  if (typeof fromFactor !== 'number' || typeof toFactor !== 'number') {
    throw new Error(`Invalid conversion factors for ${normalizedFrom} or ${normalizedTo}`);
  }

  // Convert: value * (fromFactor / toFactor)
  let result = value * (fromFactor / toFactor);

  // Apply rounding if specified
  if (rounding !== undefined && !isNaN(rounding) && rounding >= 0) {
    result = +result.toFixed(rounding);
  }

  return result;
}

// Helper functions for complex conversions
function convertHealthcareUnits(value: number, from: string, to: string, map: any, concentration?: number): number {
  const healthcareMassUnits = ['milligram', 'microgram', 'gram', 'kilogram', 'pound'];
  const healthcareVolumeUnits = ['liter', 'milliliter', 'cubic centimeter', 'fluid ounce'];

  const isMassToVolume = healthcareMassUnits.includes(from) && healthcareVolumeUnits.includes(to);
  const isVolumeToMass = healthcareVolumeUnits.includes(from) && healthcareMassUnits.includes(to);

  if (isMassToVolume || isVolumeToMass) {
    if (concentration === undefined || concentration <= 0) {
      throw new Error('Valid concentration is required for healthcare mass-volume conversions.');
    }
  }

  if (isMassToVolume) {
    if (concentration === undefined || concentration <= 0) {
      throw new Error('Valid concentration is required for healthcare mass-volume conversions.');
    }
    const valueInMilligrams = value * (map[from as keyof typeof map] as number);
    const volumeInMilliliters = valueInMilligrams / concentration!;
    return volumeInMilliliters / (map[to as keyof typeof map] as number);
  }

  if (isVolumeToMass) {
    if (concentration === undefined || concentration <= 0) {
      throw new Error('Valid concentration is required for healthcare mass-volume conversions.');
    }
    const valueInMilliliters = value * (map[from as keyof typeof map] as number);
    const massInMilligrams = valueInMilliliters * concentration!;
    return massInMilligrams / (map[to as keyof typeof map] as number);
  }
  
  // Standard conversion
  const fromFactor = map[from as keyof typeof map];
  const toFactor = map[to as keyof typeof map];
  return value * (fromFactor / toFactor);
}

function convertCookingUnits(value: number, from: string, to: string, map: any, ingredientDensity?: number): number {
  const cookingMassUnits = ['gram', 'kilogram', 'ounce', 'pound', 'stick of butter'];
  const cookingVolumeUnits = ['milliliter', 'liter', 'teaspoon', 'tablespoon', 'cup', 'pinch', 'dash', 'smidgen', 'drop'];

  const isMassToVolume = cookingMassUnits.includes(from) && cookingVolumeUnits.includes(to);
  const isVolumeToMass = cookingVolumeUnits.includes(from) && cookingMassUnits.includes(to);

  if (isMassToVolume || isVolumeToMass) {
    if (ingredientDensity === undefined || ingredientDensity <= 0) {
      throw new Error('Valid ingredient density is required for cooking mass-volume conversions.');
    }
  }

  // Handle cup <-> gram conversions using ingredient density
  if (from === 'cup' && to === 'gram') {
    return value * (map['cup' as keyof typeof map] as number) * ingredientDensity!;
  }
  if (from === 'gram' && to === 'cup') {
    return value / ingredientDensity! / (map['cup' as keyof typeof map] as number);
  }

  // Standard conversion
  const fromFactor = map[from as keyof typeof map];
  const toFactor = map[to as keyof typeof map];
  return value * (fromFactor / toFactor);
}

function convertLogisticsUnits(value: number, from: string, to: string, map: any, volumetricWeightFactor?: number): number {
  const logisticsVolumeUnits = ['cubic meter', 'cubic foot', 'cubic inch', 'liter', 'CBM (cubic meter)', 'TEU (Twenty-foot Equivalent Unit)', 'FEU (Forty-foot Equivalent Unit)'];
  const logisticsWeightUnits = ['kilogram', 'gram', 'pound', 'metric ton'];

  const isVolumeToWeight = logisticsVolumeUnits.includes(from) && logisticsWeightUnits.includes(to);

  if (isVolumeToWeight) {
    if (volumetricWeightFactor === undefined || volumetricWeightFactor <= 0) {
      throw new Error('Valid volumetric weight factor is required for logistics volume-weight conversions.');
    }
    let volumeInCubicMeters = value * (map[from as keyof typeof map] as number);
    let weightInKg = volumeInCubicMeters * volumetricWeightFactor;
    return weightInKg / (map[to as keyof typeof map] as number);
  }

  // Standard conversion
  const fromFactor = map[from as keyof typeof map];
  const toFactor = map[to as keyof typeof map];
  return value * (fromFactor / toFactor);
}

function convertChemicalUnits(value: number, from: string, to: string, map: any, molarMass?: number, solutionVolume?: number): number {
  // Mass (g) <-> Mole (mol) conversions
  if ((from === 'gram' || from === 'milligram' || from === 'kilogram') && (to === 'mole' || to === 'millimole')) {
    if (molarMass === undefined || molarMass <= 0) {
      throw new Error('Valid molar mass is required for mass to mole conversions.');
    }
    let valueInGrams = value * (map[from as keyof typeof map] as number);
    let moles = valueInGrams / molarMass;
    return moles / (map[to as keyof typeof map] as number);
  }
  
  if ((from === 'mole' || from === 'millimole') && (to === 'gram' || to === 'milligram' || to === 'kilogram')) {
    if (molarMass === undefined || molarMass <= 0) {
      throw new Error('Valid molar mass is required for mole to mass conversions.');
    }
    let valueInMoles = value * (map[from as keyof typeof map] as number);
    let grams = valueInMoles * molarMass;
    return grams / (map[to as keyof typeof map] as number);
  }

  // Molarity (mol/L) conversions
  if ((from === 'mole' || from === 'millimole') && (to === 'molar (mol/L)' || to === 'millimolar (mmol/L)')) {
    if (solutionVolume === undefined || solutionVolume <= 0) {
      throw new Error('Valid solution volume is required for mole to molarity conversions.');
    }
    let valueInMoles = value * (map[from as keyof typeof map] as number);
    let molarity = valueInMoles / solutionVolume;
    return molarity / (map[to as keyof typeof map] as number);
  }
  
  if ((from === 'molar (mol/L)' || from === 'millimolar (mmol/L)') && (to === 'mole' || to === 'millimole')) {
    if (solutionVolume === undefined || solutionVolume <= 0) {
      throw new Error('Valid solution volume is required for molarity to mole conversions.');
    }
    let valueInMolarity = value * (map[from as keyof typeof map] as number);
    let moles = valueInMolarity * solutionVolume;
    return moles / (map[to as keyof typeof map] as number);
  }

  // Standard conversion
  const fromFactor = map[from as keyof typeof map];
  const toFactor = map[to as keyof typeof map];
  return value * (fromFactor / toFactor);
}

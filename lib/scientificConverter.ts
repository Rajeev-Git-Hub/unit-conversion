// Scientific Unit Converter - Advanced conversion with scientific calculations
// Industry-standard scientific unit conversions with complex formula support

export interface ScientificConversion {
  fromValue: number;
  fromUnit: string;
  toUnit: string;
  result: number;
  formula?: string;
  category: string;
  timestamp: Date;
}

export interface ScientificUnit {
  symbol: string;
  name: string;
  dimension: string;
  siUnit: string;
  conversionFactor: number;
  category: 'physics' | 'chemistry' | 'engineering' | 'biology' | 'astronomy' | 'mathematics';
}

export interface ConversionFormula {
  name: string;
  formula: string;
  description: string;
  category: string;
  variables: { [key: string]: string };
  examples: string[];
}

// Scientific Units Database
export const SCIENTIFIC_UNITS: ScientificUnit[] = [
  // Physics Units
  { symbol: 'N', name: 'Newton', dimension: 'Force', siUnit: 'kg·m/s²', conversionFactor: 1, category: 'physics' },
  { symbol: 'J', name: 'Joule', dimension: 'Energy', siUnit: 'kg·m²/s²', conversionFactor: 1, category: 'physics' },
  { symbol: 'W', name: 'Watt', dimension: 'Power', siUnit: 'kg·m²/s³', conversionFactor: 1, category: 'physics' },
  { symbol: 'Pa', name: 'Pascal', dimension: 'Pressure', siUnit: 'kg/(m·s²)', conversionFactor: 1, category: 'physics' },
  { symbol: 'C', name: 'Coulomb', dimension: 'Electric Charge', siUnit: 'A·s', conversionFactor: 1, category: 'physics' },
  { symbol: 'V', name: 'Volt', dimension: 'Electric Potential', siUnit: 'kg·m²/(A·s³)', conversionFactor: 1, category: 'physics' },
  { symbol: 'Ω', name: 'Ohm', dimension: 'Resistance', siUnit: 'kg·m²/(A²·s³)', conversionFactor: 1, category: 'physics' },
  { symbol: 'F', name: 'Farad', dimension: 'Capacitance', siUnit: 'A²·s⁴/(kg·m²)', conversionFactor: 1, category: 'physics' },
  { symbol: 'H', name: 'Henry', dimension: 'Inductance', siUnit: 'kg·m²/(A²·s²)', conversionFactor: 1, category: 'physics' },
  { symbol: 'T', name: 'Tesla', dimension: 'Magnetic Field', siUnit: 'kg/(A·s²)', conversionFactor: 1, category: 'physics' },
  { symbol: 'Wb', name: 'Weber', dimension: 'Magnetic Flux', siUnit: 'kg·m²/(A·s²)', conversionFactor: 1, category: 'physics' },
  { symbol: 'lm', name: 'Lumen', dimension: 'Luminous Flux', siUnit: 'cd·sr', conversionFactor: 1, category: 'physics' },
  { symbol: 'lx', name: 'Lux', dimension: 'Illuminance', siUnit: 'cd·sr/m²', conversionFactor: 1, category: 'physics' },
  { symbol: 'Bq', name: 'Becquerel', dimension: 'Radioactivity', siUnit: '1/s', conversionFactor: 1, category: 'physics' },
  { symbol: 'Gy', name: 'Gray', dimension: 'Absorbed Dose', siUnit: 'm²/s²', conversionFactor: 1, category: 'physics' },
  { symbol: 'Sv', name: 'Sievert', dimension: 'Dose Equivalent', siUnit: 'm²/s²', conversionFactor: 1, category: 'physics' },
  { symbol: 'kat', name: 'Katal', dimension: 'Catalytic Activity', siUnit: 'mol/s', conversionFactor: 1, category: 'physics' },

  // Chemistry Units
  { symbol: 'mol', name: 'Mole', dimension: 'Amount of Substance', siUnit: 'mol', conversionFactor: 1, category: 'chemistry' },
  { symbol: 'M', name: 'Molar', dimension: 'Concentration', siUnit: 'mol/L', conversionFactor: 1, category: 'chemistry' },
  { symbol: 'eq', name: 'Equivalent', dimension: 'Chemical Equivalent', siUnit: 'mol', conversionFactor: 1, category: 'chemistry' },
  { symbol: 'N', name: 'Normality', dimension: 'Concentration', siUnit: 'eq/L', conversionFactor: 1, category: 'chemistry' },

  // Engineering Units
  { symbol: 'Pa', name: 'Pascal', dimension: 'Pressure', siUnit: 'N/m²', conversionFactor: 1, category: 'engineering' },
  { symbol: 'bar', name: 'Bar', dimension: 'Pressure', siUnit: '10⁵ Pa', conversionFactor: 100000, category: 'engineering' },
  { symbol: 'atm', name: 'Atmosphere', dimension: 'Pressure', siUnit: '101325 Pa', conversionFactor: 101325, category: 'engineering' },
  { symbol: 'psi', name: 'Pounds per Square Inch', dimension: 'Pressure', siUnit: '6894.76 Pa', conversionFactor: 6894.76, category: 'engineering' },
  { symbol: 'kW', name: 'Kilowatt', dimension: 'Power', siUnit: '1000 W', conversionFactor: 1000, category: 'engineering' },
  { symbol: 'hp', name: 'Horsepower', dimension: 'Power', siUnit: '745.7 W', conversionFactor: 745.7, category: 'engineering' },
  { symbol: 'kWh', name: 'Kilowatt-hour', dimension: 'Energy', siUnit: '3.6×10⁶ J', conversionFactor: 3600000, category: 'engineering' },

  // Biology Units
  { symbol: 'IU', name: 'International Unit', dimension: 'Biological Activity', siUnit: 'substance-dependent', conversionFactor: 1, category: 'biology' },
  { symbol: 'U', name: 'Enzyme Unit', dimension: 'Enzyme Activity', siUnit: 'μmol/min', conversionFactor: 1/60, category: 'biology' },
  { symbol: 'kDa', name: 'Kilodalton', dimension: 'Molecular Mass', siUnit: '1000 Da', conversionFactor: 1000 * 1.66053906660e-27, category: 'biology' },

  // Astronomy Units
  { symbol: 'AU', name: 'Astronomical Unit', dimension: 'Length', siUnit: '1.496×10¹¹ m', conversionFactor: 1.495978707e11, category: 'astronomy' },
  { symbol: 'ly', name: 'Light Year', dimension: 'Length', siUnit: '9.461×10¹⁵ m', conversionFactor: 9.4607304725808e15, category: 'astronomy' },
  { symbol: 'pc', name: 'Parsec', dimension: 'Length', siUnit: '3.086×10¹⁶ m', conversionFactor: 3.0856775814913673e16, category: 'astronomy' },
  { symbol: 'eV', name: 'Electron Volt', dimension: 'Energy', siUnit: '1.602×10⁻¹⁹ J', conversionFactor: 1.602176634e-19, category: 'astronomy' },
  { symbol: 'sr', name: 'Steradian', dimension: 'Solid Angle', siUnit: 'm²/m²', conversionFactor: 1, category: 'astronomy' },

  // Mathematics Units
  { symbol: 'rad', name: 'Radian', dimension: 'Angle', siUnit: 'm/m', conversionFactor: 1, category: 'mathematics' },
  { symbol: 'sr', name: 'Steradian', dimension: 'Solid Angle', siUnit: 'm²/m²', conversionFactor: 1, category: 'mathematics' },
  { symbol: 'nat', name: 'Nat', dimension: 'Information', siUnit: 'bit/ln(2)', conversionFactor: 1/Math.log(2), category: 'mathematics' },
  { symbol: 'hartley', name: 'Hartley', dimension: 'Information', siUnit: 'log₂(10) bits', conversionFactor: Math.log2(10), category: 'mathematics' },
];

// Conversion Formulas Database
export const CONVERSION_FORMULAS: ConversionFormula[] = [
  // Physics Formulas
  {
    name: 'Kinetic Energy',
    formula: 'KE = 0.5 × m × v²',
    description: 'Calculate kinetic energy from mass and velocity',
    category: 'physics',
    variables: {
      'KE': 'Kinetic Energy (Joules)',
      'm': 'Mass (kg)',
      'v': 'Velocity (m/s)'
    },
    examples: ['KE = 0.5 × 1000 × 20² = 200,000 J']
  },
  {
    name: 'Potential Energy',
    formula: 'PE = m × g × h',
    description: 'Calculate gravitational potential energy',
    category: 'physics',
    variables: {
      'PE': 'Potential Energy (Joules)',
      'm': 'Mass (kg)',
      'g': 'Gravitational acceleration (9.81 m/s²)',
      'h': 'Height (m)'
    },
    examples: ['PE = 100 × 9.81 × 10 = 9,810 J']
  },
  {
    name: 'Force',
    formula: 'F = m × a',
    description: 'Calculate force from mass and acceleration',
    category: 'physics',
    variables: {
      'F': 'Force (Newtons)',
      'm': 'Mass (kg)',
      'a': 'Acceleration (m/s²)'
    },
    examples: ['F = 1000 × 2 = 2,000 N']
  },
  {
    name: 'Power',
    formula: 'P = W / t = F × v',
    description: 'Calculate power from work/time or force/velocity',
    category: 'physics',
    variables: {
      'P': 'Power (Watts)',
      'W': 'Work (Joules)',
      't': 'Time (seconds)',
      'F': 'Force (Newtons)',
      'v': 'Velocity (m/s)'
    },
    examples: ['P = 2000 / 10 = 200 W']
  },
  {
    name: 'Ohm\'s Law',
    formula: 'V = I × R',
    description: 'Calculate voltage from current and resistance',
    category: 'physics',
    variables: {
      'V': 'Voltage (Volts)',
      'I': 'Current (Amperes)',
      'R': 'Resistance (Ohms)'
    },
    examples: ['V = 5 × 100 = 500 V']
  },
  {
    name: 'Electrical Power',
    formula: 'P = V × I = I² × R = V² / R',
    description: 'Calculate electrical power',
    category: 'physics',
    variables: {
      'P': 'Power (Watts)',
      'V': 'Voltage (Volts)',
      'I': 'Current (Amperes)',
      'R': 'Resistance (Ohms)'
    },
    examples: ['P = 120 × 2 = 240 W']
  },

  // Chemistry Formulas
  {
    name: 'Ideal Gas Law',
    formula: 'PV = nRT',
    description: 'Calculate pressure, volume, temperature, or amount of gas',
    category: 'chemistry',
    variables: {
      'P': 'Pressure (Pascals)',
      'V': 'Volume (m³)',
      'n': 'Amount of substance (moles)',
      'R': 'Gas constant (8.314 J/(mol·K))',
      'T': 'Temperature (Kelvin)'
    },
    examples: ['P = (1 × 8.314 × 273.15) / 0.0224 = 101,325 Pa']
  },
  {
    name: 'Concentration',
    formula: 'C = n / V',
    description: 'Calculate concentration from amount and volume',
    category: 'chemistry',
    variables: {
      'C': 'Concentration (mol/L)',
      'n': 'Amount of substance (moles)',
      'V': 'Volume (Liters)'
    },
    examples: ['C = 2 / 0.5 = 4 mol/L']
  },
  {
    name: 'pH Calculation',
    formula: 'pH = -log₁₀[H⁺]',
    description: 'Calculate pH from hydrogen ion concentration',
    category: 'chemistry',
    variables: {
      'pH': 'pH value',
      '[H⁺]': 'Hydrogen ion concentration (mol/L)'
    },
    examples: ['pH = -log₁₀(1×10⁻⁷) = 7']
  },

  // Engineering Formulas
  {
    name: 'Stress',
    formula: 'σ = F / A',
    description: 'Calculate stress from force and area',
    category: 'engineering',
    variables: {
      'σ': 'Stress (Pascals)',
      'F': 'Force (Newtons)',
      'A': 'Area (m²)'
    },
    examples: ['σ = 10000 / 0.01 = 1,000,000 Pa']
  },
  {
    name: 'Strain',
    formula: 'ε = ΔL / L₀',
    description: 'Calculate strain from change in length',
    category: 'engineering',
    variables: {
      'ε': 'Strain (dimensionless)',
      'ΔL': 'Change in length (m)',
      'L₀': 'Original length (m)'
    },
    examples: ['ε = 0.1 / 10 = 0.01']
  },
  {
    name: 'Young\'s Modulus',
    formula: 'E = σ / ε',
    description: 'Calculate Young\'s modulus from stress and strain',
    category: 'engineering',
    variables: {
      'E': 'Young\'s Modulus (Pascals)',
      'σ': 'Stress (Pascals)',
      'ε': 'Strain (dimensionless)'
    },
    examples: ['E = 200000000 / 0.001 = 200,000,000,000 Pa']
  },

  // Biology Formulas
  {
    name: 'Michaelis-Menten',
    formula: 'v = (Vmax × [S]) / (Km + [S])',
    description: 'Calculate enzyme reaction rate',
    category: 'biology',
    variables: {
      'v': 'Reaction rate',
      'Vmax': 'Maximum rate',
      '[S]': 'Substrate concentration',
      'Km': 'Michaelis constant'
    },
    examples: ['v = (100 × 5) / (2 + 5) = 71.4']
  },
  {
    name: 'Cell Concentration',
    formula: 'C = N / V',
    description: 'Calculate cell concentration',
    category: 'biology',
    variables: {
      'C': 'Cell concentration (cells/mL)',
      'N': 'Number of cells',
      'V': 'Volume (mL)'
    },
    examples: ['C = 1000000 / 10 = 100,000 cells/mL']
  },

  // Astronomy Formulas
  {
    name: 'Luminosity',
    formula: 'L = 4πR²σT⁴',
    description: 'Calculate stellar luminosity',
    category: 'astronomy',
    variables: {
      'L': 'Luminosity (Watts)',
      'R': 'Radius (meters)',
      'σ': 'Stefan-Boltzmann constant (5.67×10⁻⁸)',
      'T': 'Temperature (Kelvin)'
    },
    examples: ['L = 4π × (7×10⁸)² × 5.67×10⁻⁸ × 5778⁴']
  },
  {
    name: 'Redshift',
    formula: 'z = (λobserved - λrest) / λrest',
    description: 'Calculate cosmological redshift',
    category: 'astronomy',
    variables: {
      'z': 'Redshift',
      'λobserved': 'Observed wavelength',
      'λrest': 'Rest wavelength'
    },
    examples: ['z = (656.3 - 486.1) / 486.1 = 0.35']
  },
];

export class ScientificConverter {
  private conversionHistory: ScientificConversion[] = [];
  private customUnits: Map<string, ScientificUnit> = new Map();

  // Core conversion method
  convert(
    fromValue: number,
    fromUnit: string,
    toUnit: string,
    category: string,
    formula?: string
  ): ScientificConversion {
    try {
      // Find the units in our database
      const fromScientificUnit = SCIENTIFIC_UNITS.find(unit => unit.symbol === fromUnit);
      const toScientificUnit = SCIENTIFIC_UNITS.find(unit => unit.symbol === toUnit);

      let result: number;
      
      if (fromScientificUnit && toScientificUnit) {
        // Convert using SI units as intermediate
        const siValue = fromValue * fromScientificUnit.conversionFactor;
        result = siValue / toScientificUnit.conversionFactor;
      } else {
        // Fall back to regular converter for standard units
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { convert } = require('./converters');
        result = convert(category as string, fromValue, fromUnit, toUnit);
      }

      const conversion: ScientificConversion = {
        fromValue,
        fromUnit,
        toUnit,
        result,
        formula,
        category,
        timestamp: new Date()
      };

      this.conversionHistory.push(conversion);
      return conversion;

    } catch (error) {
      throw new Error(`Scientific conversion failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // Formula-based conversion
  convertFromFormula(
    formula: ConversionFormula,
    inputs: { [key: string]: number },
    targetUnit: string
  ): ScientificConversion {
    try {
      // Parse and evaluate the formula
      const result = this.evaluateFormula(formula.formula, inputs);
      
      return this.convert(result, 'J', targetUnit, formula.category, formula.formula);
    } catch (error) {
      throw new Error(`Formula conversion failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private evaluateFormula(formula: string, inputs: { [key: string]: number }): number {
    // Remove the assignment part (everything before =)
    let evaluatedFormula = formula.split('=')[1] || formula;
    
    // Handle special constants
    evaluatedFormula = evaluatedFormula.replace(/π/g, Math.PI.toString());
    evaluatedFormula = evaluatedFormula.replace(/e/g, Math.E.toString());
    
    // Add common scientific constants
    evaluatedFormula = evaluatedFormula.replace(/\bR\b/g, '8.314'); // Gas constant J/(mol·K)
    evaluatedFormula = evaluatedFormula.replace(/\bg\b/g, '9.81'); // Gravitational acceleration m/s²
    evaluatedFormula = evaluatedFormula.replace(/\bc\b/g, '299792458'); // Speed of light m/s
    evaluatedFormula = evaluatedFormula.replace(/\bG\b/g, '6.67430e-11'); // Gravitational constant
    
    // Replace variables
    Object.entries(inputs).forEach(([key, value]) => {
      const regex = new RegExp(`\\b${key}\\b`, 'g');
      evaluatedFormula = evaluatedFormula.replace(regex, value.toString());
    });

    // Replace mathematical symbols
    evaluatedFormula = evaluatedFormula.replace(/×/g, '*');
    evaluatedFormula = evaluatedFormula.replace(/÷/g, '/');
    evaluatedFormula = evaluatedFormula.replace(/²/g, '**2');
    evaluatedFormula = evaluatedFormula.replace(/³/g, '**3');

    // Handle implicit multiplication (e.g., "2a" -> "2*a", "ab" -> "a*b")
    evaluatedFormula = evaluatedFormula.replace(/(\d)([a-zA-Z])/g, '$1*$2');
    evaluatedFormula = evaluatedFormula.replace(/([a-zA-Z])(\d)/g, '$1*$2');
    evaluatedFormula = evaluatedFormula.replace(/([a-zA-Z])([a-zA-Z])/g, '$1*$2');

    // Evaluate the expression
    try {
      return Function(`"use strict"; return (${evaluatedFormula})`)();
    } catch (error) {
      throw new Error(`Invalid formula evaluation: ${evaluatedFormula}. Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // Batch scientific conversion
  batchConvert(
    conversions: Array<{
      fromValue: number;
      fromUnit: string;
      toUnit: string;
      category: string;
    }>
  ): ScientificConversion[] {
    return conversions.map(conv => 
      this.convert(conv.fromValue, conv.fromUnit, conv.toUnit, conv.category)
    );
  }

  // Unit analysis and suggestions
  analyzeUnits(expression: string): {
    validUnits: string[];
    suggestedConversions: Array<{ from: string; to: string; category: string }>;
    dimensions: string;
  } {
    const validUnits = SCIENTIFIC_UNITS.map(unit => unit.symbol);
    const expressionUnits = expression.match(/[A-Za-z][A-Za-z0-9]*/g) || [];
    
    const foundUnits = expressionUnits.filter(unit => validUnits.includes(unit));
    const suggestedConversions = foundUnits.flatMap(unit => {
      const scientificUnit = SCIENTIFIC_UNITS.find(u => u.symbol === unit);
      if (!scientificUnit) return [];
      
      return SCIENTIFIC_UNITS
        .filter(u => u.dimension === scientificUnit.dimension && u.symbol !== unit)
        .map(target => ({
          from: unit,
          to: target.symbol,
          category: target.category
        }));
    });

    const dimensions = foundUnits.map(unit => {
      const scientificUnit = SCIENTIFIC_UNITS.find(u => u.symbol === unit);
      return scientificUnit?.dimension || 'Unknown';
    }).join(', ');

    return {
      validUnits: foundUnits,
      suggestedConversions,
      dimensions
    };
  }

  // Custom unit management
  addCustomUnit(unit: ScientificUnit): void {
    this.customUnits.set(unit.symbol, unit);
  }

  getCustomUnits(): ScientificUnit[] {
    return Array.from(this.customUnits.values());
  }

  removeCustomUnit(symbol: string): void {
    this.customUnits.delete(symbol);
  }

  // History management
  getConversionHistory(): ScientificConversion[] {
    return [...this.conversionHistory];
  }

  clearConversionHistory(): void {
    this.conversionHistory = [];
  }

  // Search functionality
  searchUnits(query: string): ScientificUnit[] {
    const searchTerm = query.toLowerCase();
    return SCIENTIFIC_UNITS.filter(unit =>
      unit.name.toLowerCase().includes(searchTerm) ||
      unit.symbol.toLowerCase().includes(searchTerm) ||
      unit.dimension.toLowerCase().includes(searchTerm) ||
      unit.category.toLowerCase().includes(searchTerm)
    );
  }

  searchFormulas(query: string): ConversionFormula[] {
    const searchTerm = query.toLowerCase();
    return CONVERSION_FORMULAS.filter(formula =>
      formula.name.toLowerCase().includes(searchTerm) ||
      formula.description.toLowerCase().includes(searchTerm) ||
      formula.category.toLowerCase().includes(searchTerm)
    );
  }

  // Get units by category
  getUnitsByCategory(category: string): ScientificUnit[] {
    return SCIENTIFIC_UNITS.filter(unit => unit.category === category);
  }

  // Get formulas by category
  getFormulasByCategory(category: string): ConversionFormula[] {
    return CONVERSION_FORMULAS.filter(formula => formula.category === category);
  }

  // Dimension analysis
  checkDimensionalConsistency(units: string[]): {
    consistent: boolean;
    dimensions: string[];
    errors: string[];
  } {
    const dimensions = units.map(unit => {
      const scientificUnit = SCIENTIFIC_UNITS.find(u => u.symbol === unit);
      return scientificUnit?.dimension || 'Unknown';
    });

    const uniqueDimensions = [...new Set(dimensions)];
    const errors: string[] = [];

    units.forEach((unit, index) => {
      if (dimensions[index] === 'Unknown') {
        errors.push(`Unknown unit: ${unit}`);
      }
    });

    return {
      consistent: uniqueDimensions.length === 1 && errors.length === 0,
      dimensions: uniqueDimensions,
      errors
    };
  }

  // Export/Import functionality
  exportHistory(): string {
    return JSON.stringify(this.conversionHistory, null, 2);
  }

  importHistory(historyJson: string): void {
    try {
      const imported = JSON.parse(historyJson);
      this.conversionHistory = [...this.conversionHistory, ...imported];
    } catch (error) {
      throw new Error(`Failed to import history: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

// Export singleton instance
export const scientificConverter = new ScientificConverter();

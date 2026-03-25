// Scientific Calculator with Unit Conversion Integration
// Industry-standard mathematical functions and constants

export interface ScientificExpression {
  expression: string;
  result: number;
  unit?: string;
  timestamp: Date;
}

export interface ScientificConstant {
  name: string;
  symbol: string;
  value: number;
  unit: string;
  description: string;
}

export interface ScientificFunction {
  name: string;
  symbol: string;
  description: string;
  category: 'trigonometric' | 'logarithmic' | 'exponential' | 'statistical' | 'algebraic';
  parameters: number;
  examples: string[];
}

// Physical Constants (CODATA 2018)
export const SCIENTIFIC_CONSTANTS: ScientificConstant[] = [
  // Fundamental Constants
  { name: 'Speed of Light', symbol: 'c', value: 299792458, unit: 'm/s', description: 'Speed of light in vacuum' },
  { name: 'Planck Constant', symbol: 'h', value: 6.62607015e-34, unit: 'J·s', description: 'Planck constant' },
  { name: 'Reduced Planck Constant', symbol: 'ℏ', value: 1.054571817e-34, unit: 'J·s', description: 'Reduced Planck constant' },
  { name: 'Elementary Charge', symbol: 'e', value: 1.602176634e-19, unit: 'C', description: 'Elementary electric charge' },
  { name: 'Gravitational Constant', symbol: 'G', value: 6.67430e-11, unit: 'N·m²/kg²', description: 'Newtonian constant of gravitation' },
  
  // Physical Constants
  { name: 'Avogadro Constant', symbol: 'Nₐ', value: 6.02214076e23, unit: 'mol⁻¹', description: 'Avogadro constant' },
  { name: 'Boltzmann Constant', symbol: 'k', value: 1.380649e-23, unit: 'J/K', description: 'Boltzmann constant' },
  { name: 'Gas Constant', symbol: 'R', value: 8.314462618, unit: 'J/(mol·K)', description: 'Molar gas constant' },
  { name: 'Faraday Constant', symbol: 'F', value: 96485.33212, unit: 'C/mol', description: 'Faraday constant' },
  { name: 'Stefan-Boltzmann Constant', symbol: 'σ', value: 5.670374419e-8, unit: 'W/(m²·K⁴)', description: 'Stefan-Boltzmann constant' },
  
  // Electromagnetic Constants
  { name: 'Vacuum Permittivity', symbol: 'ε₀', value: 8.8541878128e-12, unit: 'F/m', description: 'Vacuum permittivity' },
  { name: 'Vacuum Permeability', symbol: 'μ₀', value: 1.25663706212e-6, unit: 'N/A²', description: 'Vacuum permeability' },
  { name: 'Fine-structure Constant', symbol: 'α', value: 7.2973525693e-3, unit: '', description: 'Fine-structure constant' },
  
  // Atomic Constants
  { name: 'Bohr Radius', symbol: 'a₀', value: 5.29177210903e-11, unit: 'm', description: 'Bohr radius' },
  { name: 'Rydberg Constant', symbol: 'R∞', value: 10973731.56816, unit: 'm⁻¹', description: 'Rydberg constant' },
  { name: 'Electron Mass', symbol: 'mₑ', value: 9.1093837015e-31, unit: 'kg', description: 'Electron rest mass' },
  { name: 'Proton Mass', symbol: 'mₚ', value: 1.67262192369e-27, unit: 'kg', description: 'Proton rest mass' },
  { name: 'Neutron Mass', symbol: 'mₙ', value: 1.67492749804e-27, unit: 'kg', description: 'Neutron rest mass' },
  
  // Chemical Constants
  { name: 'Atomic Mass Unit', symbol: 'u', value: 1.66053906660e-27, unit: 'kg', description: 'Atomic mass constant' },
  
  // Thermodynamic Constants
  { name: 'Triple Point of Water', symbol: 'Tₜ', value: 273.16, unit: 'K', description: 'Triple point of water' },
  { name: 'Standard Atmosphere', symbol: 'atm', value: 101325, unit: 'Pa', description: 'Standard atmosphere' },
  
  // Astronomical Constants
  { name: 'Astronomical Unit', symbol: 'AU', value: 1.495978707e11, unit: 'm', description: 'Astronomical unit' },
  { name: 'Light Year', symbol: 'ly', value: 9.4607304725808e15, unit: 'm', description: 'Light year' },
  { name: 'Parsec', symbol: 'pc', value: 3.0856775814913673e16, unit: 'm', description: 'Parsec' },
  
  // Mathematical Constants
  { name: 'Pi', symbol: 'π', value: Math.PI, unit: '', description: 'Ratio of circumference to diameter' },
  { name: 'Euler\'s Number', symbol: 'e', value: Math.E, unit: '', description: 'Base of natural logarithm' },
  { name: 'Golden Ratio', symbol: 'φ', value: 1.618033988749895, unit: '', description: 'Golden ratio' },
  { name: 'Euler-Mascheroni Constant', symbol: 'γ', value: 0.5772156649015329, unit: '', description: 'Euler-Mascheroni constant' },
];

// Scientific Functions
export const SCIENTIFIC_FUNCTIONS: ScientificFunction[] = [
  // Trigonometric Functions
  { name: 'Sine', symbol: 'sin', description: 'Sine function', category: 'trigonometric', parameters: 1, examples: ['sin(π/2)', 'sin(30°)'] },
  { name: 'Cosine', symbol: 'cos', description: 'Cosine function', category: 'trigonometric', parameters: 1, examples: ['cos(0)', 'cos(60°)'] },
  { name: 'Tangent', symbol: 'tan', description: 'Tangent function', category: 'trigonometric', parameters: 1, examples: ['tan(π/4)', 'tan(45°)'] },
  { name: 'Arcsine', symbol: 'asin', description: 'Inverse sine function', category: 'trigonometric', parameters: 1, examples: ['asin(0.5)', 'asin(1)'] },
  { name: 'Arccosine', symbol: 'acos', description: 'Inverse cosine function', category: 'trigonometric', parameters: 1, examples: ['acos(0.5)', 'acos(0)'] },
  { name: 'Arctangent', symbol: 'atan', description: 'Inverse tangent function', category: 'trigonometric', parameters: 1, examples: ['atan(1)', 'atan(0)'] },
  { name: 'Hyperbolic Sine', symbol: 'sinh', description: 'Hyperbolic sine function', category: 'trigonometric', parameters: 1, examples: ['sinh(1)', 'sinh(0)'] },
  { name: 'Hyperbolic Cosine', symbol: 'cosh', description: 'Hyperbolic cosine function', category: 'trigonometric', parameters: 1, examples: ['cosh(1)', 'cosh(0)'] },
  { name: 'Hyperbolic Tangent', symbol: 'tanh', description: 'Hyperbolic tangent function', category: 'trigonometric', parameters: 1, examples: ['tanh(1)', 'tanh(0)'] },
  
  // Logarithmic Functions
  { name: 'Natural Logarithm', symbol: 'ln', description: 'Natural logarithm', category: 'logarithmic', parameters: 1, examples: ['ln(e)', 'ln(10)'] },
  { name: 'Logarithm Base 10', symbol: 'log', description: 'Base-10 logarithm', category: 'logarithmic', parameters: 1, examples: ['log(10)', 'log(100)'] },
  { name: 'Logarithm Base 2', symbol: 'log2', description: 'Base-2 logarithm', category: 'logarithmic', parameters: 1, examples: ['log2(2)', 'log2(8)'] },
  { name: 'Exponential', symbol: 'exp', description: 'Exponential function', category: 'exponential', parameters: 1, examples: ['exp(1)', 'exp(0)'] },
  
  // Power Functions
  { name: 'Power', symbol: 'pow', description: 'Power function', category: 'algebraic', parameters: 2, examples: ['pow(2,3)', 'pow(10,2)'] },
  { name: 'Square Root', symbol: 'sqrt', description: 'Square root', category: 'algebraic', parameters: 1, examples: ['sqrt(4)', 'sqrt(9)'] },
  { name: 'Cube Root', symbol: 'cbrt', description: 'Cube root', category: 'algebraic', parameters: 1, examples: ['cbrt(8)', 'cbrt(27)'] },
  { name: 'Absolute Value', symbol: 'abs', description: 'Absolute value', category: 'algebraic', parameters: 1, examples: ['abs(-5)', 'abs(5)'] },
  
  // Statistical Functions
  { name: 'Factorial', symbol: 'fact', description: 'Factorial', category: 'statistical', parameters: 1, examples: ['fact(5)', 'fact(3)'] },
  { name: 'Permutation', symbol: 'nPr', description: 'Permutation', category: 'statistical', parameters: 2, examples: ['nPr(5,3)', 'nPr(10,2)'] },
  { name: 'Combination', symbol: 'nCr', description: 'Combination', category: 'statistical', parameters: 2, examples: ['nCr(5,3)', 'nCr(10,2)'] },
  { name: 'Gamma Function', symbol: 'gamma', description: 'Gamma function', category: 'statistical', parameters: 1, examples: ['gamma(5)', 'gamma(0.5)'] },
  
  // Advanced Functions
  { name: 'Error Function', symbol: 'erf', description: 'Error function', category: 'algebraic', parameters: 1, examples: ['erf(0)', 'erf(1)'] },
  { name: 'Floor', symbol: 'floor', description: 'Floor function', category: 'algebraic', parameters: 1, examples: ['floor(3.7)', 'floor(-2.3)'] },
  { name: 'Ceiling', symbol: 'ceil', description: 'Ceiling function', category: 'algebraic', parameters: 1, examples: ['ceil(3.2)', 'ceil(-2.7)'] },
  { name: 'Round', symbol: 'round', description: 'Round function', category: 'algebraic', parameters: 1, examples: ['round(3.7)', 'round(-2.3)'] },
];

export class ScientificCalculator {
  private expression: string = '';
  private history: ScientificExpression[] = [];
  private variables: Map<string, number> = new Map();
  
  constructor() {
    // Initialize with common constants
    SCIENTIFIC_CONSTANTS.forEach(constant => {
      this.variables.set(constant.symbol, constant.value);
    });
    
    // Initialize with mathematical constants
    this.variables.set('pi', Math.PI);
    this.variables.set('e', Math.E);
  }

  // Core calculation methods
  evaluate(expression: string, unit?: string): number {
    try {
      const validation = this.validateExpression(expression);
      expect(validation.valid).toBe(true);
      expect(validation.error).toBeUndefined();
      // Parse and evaluate the expression
      const result = this.parseExpression(expression);
      
      // Add to history
      this.history.push({
        expression,
        result,
        unit,
        timestamp: new Date()
      });
      
      return result;
    } catch (error) {
      throw new Error(`Invalid expression: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private parseExpression(expr: string): number {
    // Remove whitespace
    expr = expr.replace(/\s+/g, '');
    
    // Replace constants
    this.variables.forEach((value, key) => {
      const regex = new RegExp(`\\b${key}\\b`, 'g');
      expr = expr.replace(regex, value.toString());
    });
    
    // Handle degrees to radians conversion for trigonometric functions
    expr = expr.replace(/(\w+)\(([^)]+)°\)/g, (match, func, arg) => {
      return `${func}(${this.parseExpression(arg)} * ${Math.PI} / 180)`;
    });
    
    // Evaluate functions
    expr = this.evaluateFunctions(expr);
    
    // Handle basic arithmetic
    return this.evaluateArithmetic(expr);
  }

  private evaluateFunctions(expr: string): string {
    // Trigonometric functions
    expr = expr.replace(/sin\(([^)]+)\)/g, (match, arg) => Math.sin(this.parseExpression(arg)).toString());
    expr = expr.replace(/cos\(([^)]+)\)/g, (match, arg) => Math.cos(this.parseExpression(arg)).toString());
    expr = expr.replace(/tan\(([^)]+)\)/g, (match, arg) => Math.tan(this.parseExpression(arg)).toString());
    expr = expr.replace(/asin\(([^)]+)\)/g, (match, arg) => Math.asin(this.parseExpression(arg)).toString());
    expr = expr.replace(/acos\(([^)]+)\)/g, (match, arg) => Math.acos(this.parseExpression(arg)).toString());
    expr = expr.replace(/atan\(([^)]+)\)/g, (match, arg) => Math.atan(this.parseExpression(arg)).toString());
    
    // Hyperbolic functions
    expr = expr.replace(/sinh\(([^)]+)\)/g, (match, arg) => Math.sinh(this.parseExpression(arg)).toString());
    expr = expr.replace(/cosh\(([^)]+)\)/g, (match, arg) => Math.cosh(this.parseExpression(arg)).toString());
    expr = expr.replace(/tanh\(([^)]+)\)/g, (match, arg) => Math.tanh(this.parseExpression(arg)).toString());
    
    // Logarithmic functions
    expr = expr.replace(/ln\(([^)]+)\)/g, (match, arg) => Math.log(this.parseExpression(arg)).toString());
    expr = expr.replace(/log\(([^)]+)\)/g, (match, arg) => Math.log10(this.parseExpression(arg)).toString());
    expr = expr.replace(/log2\(([^)]+)\)/g, (match, arg) => Math.log2(this.parseExpression(arg)).toString());
    expr = expr.replace(/exp\(([^)]+)\)/g, (match, arg) => Math.exp(this.parseExpression(arg)).toString());
    
    // Power functions
    expr = expr.replace(/pow\(([^,]+),([^)]+)\)/g, (match, base, exp) => Math.pow(this.parseExpression(base), this.parseExpression(exp)).toString());
    expr = expr.replace(/sqrt\(([^)]+)\)/g, (match, arg) => Math.sqrt(this.parseExpression(arg)).toString());
    expr = expr.replace(/cbrt\(([^)]+)\)/g, (match, arg) => Math.cbrt(this.parseExpression(arg)).toString());
    expr = expr.replace(/abs\(([^)]+)\)/g, (match, arg) => Math.abs(this.parseExpression(arg)).toString());
    
    // Statistical functions
    expr = expr.replace(/fact\(([^)]+)\)/g, (match, arg) => this.factorial(Math.floor(this.parseExpression(arg))).toString());
    expr = expr.replace(/nPr\(([^,]+),([^)]+)\)/g, (match, n, r) => this.permutation(Math.floor(this.parseExpression(n)), Math.floor(this.parseExpression(r))).toString());
    expr = expr.replace(/nCr\(([^,]+),([^)]+)\)/g, (match, n, r) => this.combination(Math.floor(this.parseExpression(n)), Math.floor(this.parseExpression(r))).toString());
    
    // Other functions
    expr = expr.replace(/erf\(([^)]+)\)/g, (match, arg) => this.errorFunction(this.parseExpression(arg)).toString());
    expr = expr.replace(/floor\(([^)]+)\)/g, (match, arg) => Math.floor(this.parseExpression(arg)).toString());
    expr = expr.replace(/ceil\(([^)]+)\)/g, (match, arg) => Math.ceil(this.parseExpression(arg)).toString());
    expr = expr.replace(/round\(([^)]+)\)/g, (match, arg) => Math.round(this.parseExpression(arg)).toString());
    
    return expr;
  }

  private evaluateArithmetic(expr: string): number {
    // Handle parentheses
    while (expr.includes('(')) {
      expr = expr.replace(/\(([^()]+)\)/g, (match, subExpr) => this.evaluateArithmetic(subExpr).toString());
    }
    
    // Handle powers
    while (expr.includes('^')) {
      expr = expr.replace(/([^+\-*/^]+)\^([^+\-*/^]+)/g, (match, base, exp) => Math.pow(parseFloat(base), parseFloat(exp)).toString());
    }
    
    // Handle multiplication and division
    while (expr.includes('*') || expr.includes('/')) {
      expr = expr.replace(/([^+\-*/]+)\*([^+\-*/]+)/g, (match, a, b) => (parseFloat(a) * parseFloat(b)).toString());
      expr = expr.replace(/([^+\-*/]+)\/([^+\-*/]+)/g, (match, a, b) => (parseFloat(a) / parseFloat(b)).toString());
    }
    
    // Handle addition and subtraction
    while (expr.includes('+') || expr.includes('-')) {
      expr = expr.replace(/([^+\-]+)\+([^+\-]+)/g, (match, a, b) => (parseFloat(a) + parseFloat(b)).toString());
      expr = expr.replace(/([^+\-]+)-([^+\-]+)/g, (match, a, b) => (parseFloat(a) - parseFloat(b)).toString());
    }
    
    return parseFloat(expr);
  }

  // Mathematical helper functions
  private factorial(n: number): number {
    if (n < 0) throw new Error('Factorial is not defined for negative numbers');
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  private permutation(n: number, r: number): number {
    if (r > n) throw new Error('r cannot be greater than n in permutation');
    return this.factorial(n) / this.factorial(n - r);
  }

  private combination(n: number, r: number): number {
    if (r > n) throw new Error('r cannot be greater than n in combination');
    return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
  }

  private errorFunction(x: number): number {
    // Approximation of error function
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;
    
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
    return sign * y;
  }

  // Unit conversion integration
  convertWithUnits(value: number, fromUnit: string, toUnit: string, category: string): number {
    // Import the convert function from the main converter
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { convert } = require('./converters');
    return convert(category as string, value, fromUnit, toUnit);
  }

  // History management
  getHistory(): ScientificExpression[] {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }

  // Variable management
  setVariable(name: string, value: number): void {
    this.variables.set(name, value);
  }

  getVariable(name: string): number | undefined {
    return this.variables.get(name);
  }

  getVariables(): Map<string, number> {
    return new Map(this.variables);
  }

  clearVariables(): void {
    this.variables.clear();
    // Re-add constants
    SCIENTIFIC_CONSTANTS.forEach(constant => {
      this.variables.set(constant.symbol, constant.value);
    });
  }

  // Expression validation
  validateExpression(expression: string): { valid: boolean; error?: string } {
    try {
      this.parseExpression(expression);
      return { valid: true };
    } catch (error) {
      return { valid: false, error: error instanceof Error ? error.message : String(error) };
    }
  }

  // Get function suggestions
  getFunctionSuggestions(partial: string): ScientificFunction[] {
    return SCIENTIFIC_FUNCTIONS.filter(func => 
      func.name.toLowerCase().includes(partial.toLowerCase()) ||
      func.symbol.toLowerCase().includes(partial.toLowerCase())
    );
  }

  // Get constant suggestions
  getConstantSuggestions(partial: string): ScientificConstant[] {
    return SCIENTIFIC_CONSTANTS.filter(constant => 
      constant.name.toLowerCase().includes(partial.toLowerCase()) ||
      constant.symbol.toLowerCase().includes(partial.toLowerCase())
    );
  }
}

// Export singleton instance
export const scientificCalculator = new ScientificCalculator();

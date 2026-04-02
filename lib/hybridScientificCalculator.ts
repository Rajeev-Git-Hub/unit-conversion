// Hybrid Scientific Calculator + Unit Converter
// Combines traditional scientific calculator with unit conversion capabilities

import { scientificCalculator, SCIENTIFIC_CONSTANTS, SCIENTIFIC_FUNCTIONS } from './scientificCalculator';
import { convert, converters } from './converters';
import { CategoryKey } from './types';
import { SCIENTIFIC_UNITS } from './scientificConverter';

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: string | null;
  waitingForNewValue: boolean;
  memory: number;
  history: CalculatorHistory[];
  angleMode: 'degrees' | 'radians';
  precision: number;
}

export interface CalculatorHistory {
  expression: string;
  result: number;
  unit?: string;
  timestamp: Date;
  type: 'basic' | 'scientific' | 'unit-conversion';
}

export interface UnitAwareExpression {
  expression: string;
  units: Array<{ value: number; unit: string; position: number }>;
  resultUnit?: string;
}

export class HybridScientificCalculator {
  private state: CalculatorState;
  private variables: Map<string, number> = new Map();

  constructor() {
    this.state = {
      display: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      memory: 0,
      history: [],
      angleMode: 'degrees',
      precision: 6
    };

    // Initialize with scientific constants
    SCIENTIFIC_CONSTANTS.forEach(constant => {
      this.variables.set(constant.symbol, constant.value);
    });
  }

  // Basic Calculator Operations
  inputDigit(digit: string): void {
    const { display, waitingForNewValue } = this.state;
    
    if (waitingForNewValue) {
      this.state.display = digit;
      this.state.waitingForNewValue = false;
    } else {
      this.state.display = display === '0' ? digit : display + digit;
    }
  }

  inputDecimal(): void {
    const { display, waitingForNewValue } = this.state;
    
    if (waitingForNewValue) {
      this.state.display = '0.';
      this.state.waitingForNewValue = false;
    } else if (display.indexOf('.') === -1) {
      this.state.display = display + '.';
    }
  }

  clear(): void {
    this.state.display = '0';
    this.state.previousValue = null;
    this.state.operation = null;
    this.state.waitingForNewValue = false;
  }

  clearAll(): void {
    this.clear();
    this.state.memory = 0;
    this.state.history = [];
  }

  deleteLastDigit(): void {
    const { display } = this.state;
    this.state.display = display.length > 1 ? display.slice(0, -1) : '0';
  }

  // Basic Operations
  performOperation(nextOperation: string): void {
    const { display, previousValue, operation } = this.state;
    const inputValue = parseFloat(display);
    const floatValue = parseFloat(display);

    if (previousValue === null) {
      this.state.previousValue = floatValue;
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = this.calculate(currentValue, floatValue, operation);
      
      this.state.display = String(newValue);
      this.state.previousValue = newValue;
    }

    this.state.waitingForNewValue = true;
    this.state.operation = nextOperation;
  }

  private calculate(firstValue: number, secondValue: number, operation: string): number {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      default:
        return secondValue;
    }
  }

  // Scientific Functions
  performScientificFunction(functionName: string): void {
    const { display } = this.state;
    const value = parseFloat(display);
    let result: number;

    try {
      switch (functionName) {
        case 'sin':
          result = this.state.angleMode === 'degrees' 
            ? Math.sin(value * Math.PI / 180) 
            : Math.sin(value);
          break;
        case 'cos':
          result = this.state.angleMode === 'degrees' 
            ? Math.cos(value * Math.PI / 180) 
            : Math.cos(value);
          break;
        case 'tan':
          result = this.state.angleMode === 'degrees' 
            ? Math.tan(value * Math.PI / 180) 
            : Math.tan(value);
          break;
        case 'asin':
          result = this.state.angleMode === 'degrees' 
            ? Math.asin(value) * 180 / Math.PI 
            : Math.asin(value);
          break;
        case 'acos':
          result = this.state.angleMode === 'degrees' 
            ? Math.acos(value) * 180 / Math.PI 
            : Math.acos(value);
          break;
        case 'atan':
          result = this.state.angleMode === 'degrees' 
            ? Math.atan(value) * 180 / Math.PI 
            : Math.atan(value);
          break;
        case 'log':
          result = Math.log10(value);
          break;
        case 'ln':
          result = Math.log(value);
          break;
        case 'log2':
          result = Math.log2(value);
          break;
        case 'exp':
          result = Math.exp(value);
          break;
        case '√':
          result = Math.sqrt(value);
          break;
        case 'x²':
          result = value * value;
          break;
        case 'x³':
          result = value * value * value;
          break;
        case 'xʸ':
          // This will need a second input
          this.state.previousValue = value;
          this.state.operation = 'power';
          this.state.waitingForNewValue = true;
          return;
        case '1/x':
          result = value !== 0 ? 1 / value : 0;
          break;
        case '|x|':
          result = Math.abs(value);
          break;
        case 'n!':
          result = this.factorial(Math.floor(value));
          break;
        case '%':
          result = value / 100;
          break;
        default:
          result = value;
      }

      this.state.display = String(result);
      this.state.waitingForNewValue = true;
      
      // Add to history
      this.addToHistory(`${functionName}(${value})`, result, 'scientific');
    } catch (error) {
      this.state.display = 'Error';
      this.state.waitingForNewValue = true;
    }
  }

  private factorial(n: number): number {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // Memory Functions
  memoryClear(): void {
    this.state.memory = 0;
  }

  memoryRecall(): void {
    this.state.display = String(this.state.memory);
    this.state.waitingForNewValue = true;
  }

  memoryAdd(): void {
    this.state.memory += parseFloat(this.state.display);
  }

  memorySubtract(): void {
    this.state.memory -= parseFloat(this.state.display);
  }

  memoryStore(): void {
    this.state.memory = parseFloat(this.state.display);
  }

  // Unit-Aware Calculations
  parseUnitAwareExpression(expression: string): UnitAwareExpression {
    const units: Array<{ value: number; unit: string; position: number }> = [];
    let cleanedExpression = expression;

    // Find all unit patterns (number + unit)
    const unitPattern = /(\d+\.?\d*)\s*([a-zA-Z°%]+)/g;
    let match;
    
    while ((match = unitPattern.exec(expression)) !== null) {
      const value = parseFloat(match[1]);
      const unit = match[2];
      const position = match.index;
      
      units.push({ value, unit, position });
      // Replace with just the number for calculation
      cleanedExpression = cleanedExpression.replace(match[0], match[1]);
    }

    return {
      expression: cleanedExpression,
      units,
      resultUnit: this.determineResultUnit(units)
    };
  }

  private determineResultUnit(units: Array<{ value: number; unit: string; position: number }>): string | undefined {
    if (units.length === 0) return undefined;
    if (units.length === 1) return units[0].unit;

    // For mixed units, try to find a common base unit
    const categories = new Set<string>();
    units.forEach(({ unit }) => {
      const category = this.getUnitCategory(unit);
      if (category) categories.add(category);
    });

    // If all units are from the same category, convert to the first unit's category
    if (categories.size === 1) {
      return units[0].unit;
    }

    return undefined; // Cannot determine result unit for mixed categories
  }

  private getUnitCategory(unit: string): string | null {
    // Check regular converters
    const converterKeys = Object.keys(converters) as Array<keyof typeof converters>;
    for (const category of converterKeys) {
      const categoryData = converters[category];
      if (categoryData && typeof categoryData === 'object' && unit in categoryData) {
        return category as string;
      }
    }

    // Check scientific units
    if (SCIENTIFIC_UNITS.find(u => u.symbol === unit)) {
      return 'scientific';
    }

    return null;
  }

  evaluateUnitAwareExpression(expression: string): { result: number; unit?: string; convertedResult?: number } {
    try {
      const parsed = this.parseUnitAwareExpression(expression);
      
      // Convert all units to base values for calculation
      let calculationExpression = parsed.expression;
      const unitConversions: Array<{ originalUnit: string; baseValue: number; category: string }> = [];

      parsed.units.forEach(({ value, unit, position }) => {
        const category = this.getUnitCategory(unit);
        if (category) {
          let baseValue: number;
          
          // Try regular converters first
          try {
            baseValue = convert(category as CategoryKey, value, unit, this.getBaseUnit(category));
          } catch {
            // Try scientific units
            const scientificUnit = SCIENTIFIC_UNITS.find(u => u.symbol === unit);
            if (scientificUnit) {
              baseValue = value * scientificUnit.conversionFactor;
            } else {
              baseValue = value; // Fallback to original value
            }
          }
          
          unitConversions.push({ originalUnit: unit, baseValue, category });
        }
      });

      // Evaluate the expression
      const result = this.evaluateExpression(calculationExpression);

      // Convert result back to target unit if specified
      let convertedResult: number | undefined;
      if (parsed.resultUnit && unitConversions.length > 0) {
        const category = unitConversions[0].category;
        try {
          convertedResult = convert(category as CategoryKey, result, this.getBaseUnit(category), parsed.resultUnit);
        } catch {
          convertedResult = result;
        }
      }

      return {
        result,
        unit: parsed.resultUnit,
        convertedResult: convertedResult ?? result
      };
    } catch (error) {
      throw new Error(`Failed to evaluate expression: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private getBaseUnit(category: string): string {
    const baseUnits: { [key: string]: string } = {
      'length': 'meter',
      'weight': 'gram',
      'temperature': 'celsius',
      'area': 'square meter',
      'volume': 'liter',
      'speed': 'meter/second',
      'time': 'second',
      'data': 'byte',
      'pressure': 'pascal',
      'energy': 'joule',
      'power': 'watt',
      'scientific': 'J' // Default for scientific units
    };
    return baseUnits[category] || 'unit';
  }

  private evaluateExpression(expression: string): number {
    // Replace constants
    this.variables.forEach((value, key) => {
      const regex = new RegExp(`\\b${key}\\b`, 'g');
      expression = expression.replace(regex, value.toString());
    });

    // Replace mathematical functions
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');
    expression = expression.replace(/log\(/g, 'Math.log10(');
    expression = expression.replace(/ln\(/g, 'Math.log(');
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
    expression = expression.replace(/\^/g, '**');

    // Evaluate safely
    try {
      return Function(`"use strict"; return (${expression})`)();
    } catch (error) {
      throw new Error(`Invalid expression: ${expression}`);
    }
  }

  // Advanced Features
  calculateWithUnits(expression: string): void {
    try {
      const { result, unit, convertedResult } = this.evaluateUnitAwareExpression(expression);
      
      this.state.display = String(convertedResult);
      this.state.waitingForNewValue = true;
      
      // Add to history
      if (convertedResult !== undefined) {
        this.addToHistory(expression, convertedResult, 'unit-conversion', unit);
      }
    } catch (error) {
      this.state.display = 'Error';
      this.state.waitingForNewValue = true;
    }
  }

  // Formula Recognition
  recognizeAndCalculateFormula(input: string): boolean {
    const formulaPatterns = [
      { pattern: /KE\s*=\s*0\.5\s*\*\s*m\s*\*\s*v\^2/i, name: 'Kinetic Energy' },
      { pattern: /PE\s*=\s*m\s*\*\s*g\s*\*\s*h/i, name: 'Potential Energy' },
      { pattern: /F\s*=\s*m\s*\*\s*a/i, name: 'Force' },
      { pattern: /P\s*=\s*V\s*\*\s*I/i, name: 'Electrical Power' },
      { pattern: /V\s*=\s*I\s*\*\s*R/i, name: 'Ohm\'s Law' },
      { pattern: /E\s*=\s*m\s*\*\s*c\^2/i, name: 'Einstein\'s Equation' }
    ];

    for (const { pattern, name } of formulaPatterns) {
      if (pattern.test(input)) {
        // Extract variables and calculate
        this.calculateWithUnits(input);
        return true;
      }
    }

    return false;
  }

  // History Management
  private addToHistory(expression: string, result: number, type: 'basic' | 'scientific' | 'unit-conversion', unit?: string): void {
    this.state.history.unshift({
      expression,
      result,
      unit,
      timestamp: new Date(),
      type
    });

    // Keep only last 50 entries
    if (this.state.history.length > 50) {
      this.state.history = this.state.history.slice(0, 50);
    }
  }

  getHistory(): CalculatorHistory[] {
    return [...this.state.history];
  }

  clearHistory(): void {
    this.state.history = [];
  }

  // Settings
  setAngleMode(mode: 'degrees' | 'radians'): void {
    this.state.angleMode = mode;
  }

  setPrecision(precision: number): void {
    this.state.precision = Math.max(0, Math.min(15, precision));
  }

  // Getters
  getDisplay(): string {
    const display = parseFloat(this.state.display);
    if (isNaN(display)) return this.state.display;
    
    if (Math.abs(display) < 1e-10) return '0';
    if (Math.abs(display) > 1e10) return display.toExponential(this.state.precision);
    
    return display.toFixed(this.state.precision);
  }

  getState(): CalculatorState {
    return { ...this.state };
  }

  // Constants and Variables
  setVariable(name: string, value: number): void {
    this.variables.set(name, value);
  }

  getVariable(name: string): number | undefined {
    return this.variables.get(name);
  }

  getAvailableConstants(): Array<{ name: string; value: number; symbol: string; description: string }> {
    return SCIENTIFIC_CONSTANTS.map(constant => ({
      name: constant.name,
      value: constant.value,
      symbol: constant.symbol,
      description: constant.description
    }));
  }

  // Preset Calculations
  calculatePhysicsFormula(formula: string, variables: { [key: string]: number }): number {
    const formulaMap: { [key: string]: string } = {
      'kinetic-energy': '0.5 * m * v^2',
      'potential-energy': 'm * g * h',
      'force': 'm * a',
      'power': 'F * v',
      'ohms-law': 'V / I',
      'einstein': 'm * c^2'
    };

    const expression = formulaMap[formula] || formula;
    
    // Replace variables
    let evaluatedExpression = expression;
    Object.entries(variables).forEach(([key, value]) => {
      evaluatedExpression = evaluatedExpression.replace(new RegExp(`\\b${key}\\b`, 'g'), value.toString());
    });

    // Replace constants
    this.variables.forEach((value, key) => {
      evaluatedExpression = evaluatedExpression.replace(new RegExp(`\\b${key}\\b`, 'g'), value.toString());
    });

    return this.evaluateExpression(evaluatedExpression);
  }
}

// Export singleton instance
export const hybridScientificCalculator = new HybridScientificCalculator();

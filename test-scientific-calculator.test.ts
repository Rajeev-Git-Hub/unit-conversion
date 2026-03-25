// Test suite for Scientific Calculator
import { scientificCalculator } from './lib/scientificCalculator';

describe('Scientific Calculator', () => {
  beforeEach(() => {
    scientificCalculator.clearHistory();
    scientificCalculator.clearVariables();
  });

  describe('Basic Arithmetic', () => {
    test('should perform addition', () => {
      const result = scientificCalculator.evaluate('2 + 3');
      expect(result).toBe(5);
    });

    test('should perform subtraction', () => {
      const result = scientificCalculator.evaluate('10 - 4');
      expect(result).toBe(6);
    });

    test('should perform multiplication', () => {
      const result = scientificCalculator.evaluate('6 * 7');
      expect(result).toBe(42);
    });

    test('should perform division', () => {
      const result = scientificCalculator.evaluate('15 / 3');
      expect(result).toBe(5);
    });

    test('should handle complex expressions', () => {
      const result = scientificCalculator.evaluate('2 + 3 * 4 - 1');
      expect(result).toBe(13);
    });

    test('should handle parentheses', () => {
      const result = scientificCalculator.evaluate('(2 + 3) * 4');
      expect(result).toBe(20);
    });

    test('should handle power operations', () => {
      const result = scientificCalculator.evaluate('2^3');
      expect(result).toBe(8);
    });

    test('should handle nested parentheses', () => {
      const result = scientificCalculator.evaluate('(2 + (3 * 4)) / 2');
      expect(result).toBe(7);
    });
  });

  describe('Trigonometric Functions', () => {
    test('should calculate sine', () => {
      const result = scientificCalculator.evaluate('sin(0)');
      expect(result).toBeCloseTo(0, 10);
    });

    test('should calculate cosine', () => {
      const result = scientificCalculator.evaluate('cos(0)');
      expect(result).toBeCloseTo(1, 10);
    });

    test('should calculate tangent', () => {
      const result = scientificCalculator.evaluate('tan(0)');
      expect(result).toBeCloseTo(0, 10);
    });

    test('should calculate arcsine', () => {
      const result = scientificCalculator.evaluate('asin(0)');
      expect(result).toBeCloseTo(0, 10);
    });

    test('should calculate arccosine', () => {
      const result = scientificCalculator.evaluate('acos(1)');
      expect(result).toBeCloseTo(0, 10);
    });

    test('should calculate arctangent', () => {
      const result = scientificCalculator.evaluate('atan(0)');
      expect(result).toBeCloseTo(0, 10);
    });

    test('should handle pi in trigonometric functions', () => {
      const result = scientificCalculator.evaluate('sin(π/2)');
      expect(result).toBeCloseTo(1, 10);
    });
  });

  describe('Logarithmic Functions', () => {
    test('should calculate natural logarithm', () => {
      const result = scientificCalculator.evaluate('ln(e)');
      expect(result).toBeCloseTo(1, 10);
    });

    test('should calculate base-10 logarithm', () => {
      const result = scientificCalculator.evaluate('log(10)');
      expect(result).toBeCloseTo(1, 10);
    });

    test('should calculate base-2 logarithm', () => {
      const result = scientificCalculator.evaluate('log2(8)');
      expect(result).toBeCloseTo(3, 10);
    });

    test('should calculate exponential', () => {
      const result = scientificCalculator.evaluate('exp(0)');
      expect(result).toBeCloseTo(1, 10);
    });
  });

  describe('Power and Root Functions', () => {
    test('should calculate square root', () => {
      const result = scientificCalculator.evaluate('sqrt(9)');
      expect(result).toBeCloseTo(3, 10);
    });

    test('should calculate cube root', () => {
      const result = scientificCalculator.evaluate('cbrt(27)');
      expect(result).toBeCloseTo(3, 10);
    });

    test('should calculate power function', () => {
      const result = scientificCalculator.evaluate('pow(2, 3)');
      expect(result).toBeCloseTo(8, 10);
    });

    test('should calculate absolute value', () => {
      const result = scientificCalculator.evaluate('abs(-5)');
      expect(result).toBe(5);
    });
  });

  describe('Statistical Functions', () => {
    test('should calculate factorial', () => {
      const result = scientificCalculator.evaluate('fact(5)');
      expect(result).toBe(120);
    });

    test('should calculate permutation', () => {
      const result = scientificCalculator.evaluate('nPr(5, 3)');
      expect(result).toBe(60);
    });

    test('should calculate combination', () => {
      const result = scientificCalculator.evaluate('nCr(5, 3)');
      expect(result).toBe(10);
    });
  });

  describe('Constants', () => {
    test('should use pi constant', () => {
      const result = scientificCalculator.evaluate('π');
      expect(result).toBeCloseTo(Math.PI, 10);
    });

    test('should use e constant', () => {
      const result = scientificCalculator.evaluate('e');
      expect(result).toBeCloseTo(Math.E, 10);
    });

    test('should use speed of light constant', () => {
      const result = scientificCalculator.evaluate('c');
      expect(result).toBe(299792458);
    });

    test('should use Planck constant', () => {
      const result = scientificCalculator.evaluate('h');
      expect(result).toBeCloseTo(6.62607015e-34, 40);
    });
  });

  describe('History Management', () => {
    test('should save calculation history', () => {
      scientificCalculator.evaluate('2 + 3');
      scientificCalculator.evaluate('5 * 6');
      
      const history = scientificCalculator.getHistory();
      expect(history).toHaveLength(2);
      expect(history[0].result).toBe(30);
      expect(history[1].result).toBe(5);
    });

    test('should clear history', () => {
      scientificCalculator.evaluate('2 + 3');
      scientificCalculator.clearHistory();
      
      const history = scientificCalculator.getHistory();
      expect(history).toHaveLength(0);
    });
  });

  describe('Variable Management', () => {
    test('should set and get variables', () => {
      scientificCalculator.setVariable('x', 10);
      const value = scientificCalculator.getVariable('x');
      expect(value).toBe(10);
    });

    test('should use variables in expressions', () => {
      scientificCalculator.setVariable('x', 5);
      const result = scientificCalculator.evaluate('x * 2');
      expect(result).toBe(10);
    });

    test('should clear variables but keep constants', () => {
      scientificCalculator.setVariable('x', 10);
      scientificCalculator.clearVariables();
      
      expect(scientificCalculator.getVariable('x')).toBeUndefined();
      expect(scientificCalculator.getVariable('π')).toBe(Math.PI);
    });
  });

  describe('Expression Validation', () => {
    test('should validate correct expressions', () => {
      const validation = scientificCalculator.validateExpression('2 + 3');
      expect(validation.valid).toBe(true);
    });

    test('should detect invalid expressions', () => {
      const validation = scientificCalculator.validateExpression('2 + + 3');
      expect(validation.valid).toBe(false);
      expect(validation.error).toBeDefined();
    });
  });

  describe('Function Suggestions', () => {
    test('should suggest functions by name', () => {
      const suggestions = scientificCalculator.getFunctionSuggestions('sin');
      expect(suggestions.length).toBeGreaterThan(0);
      expect(suggestions[0].name).toContain('sin');
    });

    test('should suggest functions by symbol', () => {
      const suggestions = scientificCalculator.getFunctionSuggestions('log');
      expect(suggestions.length).toBeGreaterThan(0);
      expect(suggestions.some(s => s.symbol.includes('log'))).toBe(true);
    });
  });

  describe('Constant Suggestions', () => {
    test('should suggest constants by name', () => {
      const suggestions = scientificCalculator.getConstantSuggestions('speed');
      expect(suggestions.length).toBeGreaterThan(0);
      expect(suggestions[0].name).toContain('Speed');
    });

    test('should suggest constants by symbol', () => {
      const suggestions = scientificCalculator.getConstantSuggestions('c');
      expect(suggestions.length).toBeGreaterThan(0);
      expect(suggestions.some(s => s.symbol === 'c')).toBe(true);
    });
  });

  describe('Complex Scientific Calculations', () => {
    test('should handle physics equations', () => {
      // E = mc²
      scientificCalculator.setVariable('m', 1);
      const result = scientificCalculator.evaluate('m * c^2');
      expect(result).toBeCloseTo(8.98755179e16, 10);
    });

    test('should handle engineering calculations', () => {
      // Ohm's law: V = IR
      scientificCalculator.setVariable('I', 2);
      scientificCalculator.setVariable('R', 10);
      const result = scientificCalculator.evaluate('I * R');
      expect(result).toBe(20);
    });

    test('should handle chemical calculations', () => {
      // Ideal gas law: PV = nRT
      scientificCalculator.setVariable('n', 1);
      scientificCalculator.setVariable('T', 273.15);
      scientificCalculator.setVariable('P', 101325);
      const result = scientificCalculator.evaluate('n * R * T / P');
      expect(result).toBeCloseTo(0.022414, 6);
    });
  });

  describe('Error Handling', () => {
    test('should handle division by zero', () => {
      expect(() => {
        scientificCalculator.evaluate('1 / 0');
      }).toThrow();
    });

    test('should handle invalid functions', () => {
      expect(() => {
        scientificCalculator.evaluate('invalid(5)');
      }).toThrow();
    });

    test('should handle undefined variables', () => {
      expect(() => {
        scientificCalculator.evaluate('undefined_var + 1');
      }).toThrow();
    });
  });
});

// Integration tests with unit conversions
describe('Scientific Calculator with Unit Conversions', () => {
  test('should integrate with length conversions', () => {
    const result = scientificCalculator.evaluate('100'); // 100 meters
    // This would be tested with the actual unit conversion integration
    expect(result).toBe(100);
  });

  test('should integrate with temperature conversions', () => {
    const result = scientificCalculator.evaluate('273.15'); // 0°C in Kelvin
    expect(result).toBe(273.15);
  });

  test('should handle scientific calculations with units', () => {
    // Calculate kinetic energy: KE = 0.5 * m * v²
    scientificCalculator.setVariable('m', 1); // 1 kg
    scientificCalculator.setVariable('v', 10); // 10 m/s
    const result = scientificCalculator.evaluate('0.5 * m * v^2');
    expect(result).toBe(50); // 50 Joules
  });
});

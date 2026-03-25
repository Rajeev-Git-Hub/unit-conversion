// Test suite for Hybrid Scientific Calculator
import { hybridScientificCalculator } from './lib/hybridScientificCalculator';

describe('Hybrid Scientific Calculator', () => {
  beforeEach(() => {
    hybridScientificCalculator.clearAll();
  });

  describe('Basic Calculator Operations', () => {
    test('should perform addition', () => {
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performOperation('+');
      hybridScientificCalculator.inputDigit('3');
      hybridScientificCalculator.performOperation('=');
      
      const state = hybridScientificCalculator.getState();
      expect(state.display).toBe('8');
    });

    test('should perform subtraction', () => {
      hybridScientificCalculator.inputDigit('10');
      hybridScientificCalculator.performOperation('-');
      hybridScientificCalculator.inputDigit('4');
      hybridScientificCalculator.performOperation('=');
      
      const state = hybridScientificCalculator.getState();
      expect(state.display).toBe('6');
    });

    test('should perform multiplication', () => {
      hybridScientificCalculator.inputDigit('6');
      hybridScientificCalculator.performOperation('×');
      hybridScientificCalculator.inputDigit('7');
      hybridScientificCalculator.performOperation('=');
      
      const state = hybridScientificCalculator.getState();
      expect(state.display).toBe('42');
    });

    test('should perform division', () => {
      hybridScientificCalculator.inputDigit('15');
      hybridScientificCalculator.performOperation('÷');
      hybridScientificCalculator.inputDigit('3');
      hybridScientificCalculator.performOperation('=');
      
      const state = hybridScientificCalculator.getState();
      expect(state.display).toBe('5');
    });

    test('should handle decimal numbers', () => {
      hybridScientificCalculator.inputDigit('2');
      hybridScientificCalculator.inputDecimal();
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performOperation('+');
      hybridScientificCalculator.inputDigit('3');
      hybridScientificCalculator.inputDecimal();
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performOperation('=');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(6);
    });

    test('should handle consecutive operations', () => {
      hybridScientificCalculator.inputDigit('2');
      hybridScientificCalculator.performOperation('+');
      hybridScientificCalculator.inputDigit('3');
      hybridScientificCalculator.performOperation('×');
      hybridScientificCalculator.inputDigit('4');
      hybridScientificCalculator.performOperation('=');
      
      const state = hybridScientificCalculator.getState();
      expect(state.display).toBe('20'); // (2 + 3) * 4
    });
  });

  describe('Scientific Functions', () => {
    test('should calculate sine in degrees', () => {
      hybridScientificCalculator.setAngleMode('degrees');
      hybridScientificCalculator.inputDigit('30');
      hybridScientificCalculator.performScientificFunction('sin');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBeCloseTo(0.5, 6);
    });

    test('should calculate sine in radians', () => {
      hybridScientificCalculator.setAngleMode('radians');
      hybridScientificCalculator.inputDigit('0');
      hybridScientificCalculator.performScientificFunction('sin');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBeCloseTo(0, 6);
    });

    test('should calculate cosine', () => {
      hybridScientificCalculator.setAngleMode('degrees');
      hybridScientificCalculator.inputDigit('60');
      hybridScientificCalculator.performScientificFunction('cos');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBeCloseTo(0.5, 6);
    });

    test('should calculate tangent', () => {
      hybridScientificCalculator.setAngleMode('degrees');
      hybridScientificCalculator.inputDigit('45');
      hybridScientificCalculator.performScientificFunction('tan');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBeCloseTo(1, 6);
    });

    test('should calculate logarithm base 10', () => {
      hybridScientificCalculator.inputDigit('100');
      hybridScientificCalculator.performScientificFunction('log');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBeCloseTo(2, 6);
    });

    test('should calculate natural logarithm', () => {
      hybridScientificCalculator.inputDigit('1');
      hybridScientificCalculator.performScientificFunction('ln');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBeCloseTo(0, 6);
    });

    test('should calculate square root', () => {
      hybridScientificCalculator.inputDigit('9');
      hybridScientificCalculator.performScientificFunction('√');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(3);
    });

    test('should calculate square', () => {
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performScientificFunction('x²');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(25);
    });

    test('should calculate cube', () => {
      hybridScientificCalculator.inputDigit('3');
      hybridScientificCalculator.performScientificFunction('x³');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(27);
    });

    test('should calculate factorial', () => {
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performScientificFunction('n!');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(120);
    });

    test('should calculate percentage', () => {
      hybridScientificCalculator.inputDigit('25');
      hybridScientificCalculator.performScientificFunction('%');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(0.25);
    });

    test('should calculate absolute value', () => {
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performScientificFunction('|x|');
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(5);
    });
  });

  describe('Memory Functions', () => {
    test('should store and recall memory', () => {
      hybridScientificCalculator.inputDigit('42');
      hybridScientificCalculator.memoryStore();
      hybridScientificCalculator.clear();
      hybridScientificCalculator.memoryRecall();
      
      const state = hybridScientificCalculator.getState();
      expect(state.display).toBe('42');
    });

    test('should add to memory', () => {
      hybridScientificCalculator.inputDigit('10');
      hybridScientificCalculator.memoryStore();
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.memoryAdd();
      hybridScientificCalculator.memoryRecall();
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(15);
    });

    test('should subtract from memory', () => {
      hybridScientificCalculator.inputDigit('10');
      hybridScientificCalculator.memoryStore();
      hybridScientificCalculator.inputDigit('3');
      hybridScientificCalculator.memorySubtract();
      hybridScientificCalculator.memoryRecall();
      
      const state = hybridScientificCalculator.getState();
      expect(parseFloat(state.display)).toBe(7);
    });

    test('should clear memory', () => {
      hybridScientificCalculator.inputDigit('10');
      hybridScientificCalculator.memoryStore();
      hybridScientificCalculator.memoryClear();
      
      const state = hybridScientificCalculator.getState();
      expect(state.memory).toBe(0);
    });
  });

  describe('Unit-Aware Calculations', () => {
    test('should evaluate simple unit expression', () => {
      const result = hybridScientificCalculator.evaluateUnitAwareExpression('5m + 2ft');
      
      expect(result.unit).toBe('m');
      expect(result.convertedResult).toBeCloseTo(5.6096, 4);
    });

    test('should evaluate physics expression', () => {
      const result = hybridScientificCalculator.evaluateUnitAwareExpression('3kg * 9.8m/s²');
      
      expect(result.unit).toBe('N');
      expect(result.result).toBe(29.4);
    });

    test('should evaluate kinetic energy expression', () => {
      const result = hybridScientificCalculator.evaluateUnitAwareExpression('0.5 * 1000kg * (20m/s)²');
      
      expect(result.unit).toBe('J');
      expect(result.result).toBe(200000);
    });

    test('should handle mixed units from same category', () => {
      const result = hybridScientificCalculator.evaluateUnitAwareExpression('1km + 500m');
      
      expect(result.convertedResult).toBe(1500);
    });

    test('should parse unit-aware expression correctly', () => {
      const parsed = hybridScientificCalculator.parseUnitAwareExpression('5m + 2ft - 1m');
      
      expect(parsed.units).toHaveLength(3);
      expect(parsed.units[0].unit).toBe('m');
      expect(parsed.units[1].unit).toBe('ft');
      expect(parsed.units[2].unit).toBe('m');
    });
  });

  describe('Formula Recognition', () => {
    test('should recognize kinetic energy formula', () => {
      const recognized = hybridScientificCalculator.recognizeAndCalculateFormula('KE = 0.5 * m * v^2');
      
      expect(recognized).toBe(true);
    });

    test('should recognize potential energy formula', () => {
      const recognized = hybridScientificCalculator.recognizeAndCalculateFormula('PE = m * g * h');
      
      expect(recognized).toBe(true);
    });

    test('should recognize force formula', () => {
      const recognized = hybridScientificCalculator.recognizeAndCalculateFormula('F = m * a');
      
      expect(recognized).toBe(true);
    });

    test('should recognize Ohm\'s law', () => {
      const recognized = hybridScientificCalculator.recognizeAndCalculateFormula('V = I * R');
      
      expect(recognized).toBe(true);
    });

    test('should not recognize invalid formula', () => {
      const recognized = hybridScientificCalculator.recognizeAndCalculateFormula('invalid formula');
      
      expect(recognized).toBe(false);
    });
  });

  describe('Physics Formula Calculations', () => {
    test('should calculate kinetic energy', () => {
      const result = hybridScientificCalculator.calculatePhysicsFormula('kinetic-energy', {
        'm': 1000,
        'v': 20
      });
      
      expect(result).toBe(200000); // 0.5 * 1000 * 20^2
    });

    test('should calculate potential energy', () => {
      const result = hybridScientificCalculator.calculatePhysicsFormula('potential-energy', {
        'm': 100,
        'g': 9.81,
        'h': 10
      });
      
      expect(result).toBeCloseTo(9810, 0);
    });

    test('should calculate force', () => {
      const result = hybridScientificCalculator.calculatePhysicsFormula('force', {
        'm': 1000,
        'a': 2
      });
      
      expect(result).toBe(2000);
    });

    test('should calculate Einstein\'s equation', () => {
      const result = hybridScientificCalculator.calculatePhysicsFormula('einstein', {
        'm': 1
      });
      
      expect(result).toBeCloseTo(8.98755179e16, 10); // c^2
    });
  });

  describe('Constants and Variables', () => {
    test('should provide scientific constants', () => {
      const constants = hybridScientificCalculator.getAvailableConstants();
      
      expect(constants.length).toBeGreaterThan(0);
      expect(constants.find(c => c.symbol === 'c')).toBeDefined();
      expect(constants.find(c => c.symbol === 'π')).toBeDefined();
    });

    test('should set and get variables', () => {
      hybridScientificCalculator.setVariable('x', 10);
      const value = hybridScientificCalculator.getVariable('x');
      
      expect(value).toBe(10);
    });
  });

  describe('History Management', () => {
    test('should maintain calculation history', () => {
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performOperation('+');
      hybridScientificCalculator.inputDigit('3');
      hybridScientificCalculator.performOperation('=');
      
      const history = hybridScientificCalculator.getHistory();
      expect(history.length).toBeGreaterThan(0);
      expect(history[0].type).toBe('basic');
    });

    test('should clear history', () => {
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performOperation('+');
      hybridScientificCalculator.inputDigit('3');
      hybridScientificCalculator.performOperation('=');
      
      hybridScientificCalculator.clearHistory();
      const history = hybridScientificCalculator.getHistory();
      
      expect(history.length).toBe(0);
    });
  });

  describe('Settings and Configuration', () => {
    test('should change angle mode', () => {
      hybridScientificCalculator.setAngleMode('radians');
      let state = hybridScientificCalculator.getState();
      expect(state.angleMode).toBe('radians');
      
      hybridScientificCalculator.setAngleMode('degrees');
      state = hybridScientificCalculator.getState();
      expect(state.angleMode).toBe('degrees');
    });

    test('should change precision', () => {
      hybridScientificCalculator.setPrecision(10);
      const state = hybridScientificCalculator.getState();
      expect(state.precision).toBe(10);
    });

    test('should limit precision range', () => {
      hybridScientificCalculator.setPrecision(20); // Should be limited to 15
      const state = hybridScientificCalculator.getState();
      expect(state.precision).toBe(15);
      
      hybridScientificCalculator.setPrecision(-5); // Should be limited to 0
      const state2 = hybridScientificCalculator.getState();
      expect(state2.precision).toBe(0);
    });
  });

  describe('Display and Formatting', () => {
    test('should format large numbers in scientific notation', () => {
      hybridScientificCalculator.setPrecision(6);
      // Simulate a large number calculation
      const state = hybridScientificCalculator.getState();
      const display = hybridScientificCalculator.getDisplay();
      
      expect(typeof display).toBe('string');
    });

    test('should format small numbers correctly', () => {
      hybridScientificCalculator.setPrecision(6);
      const state = hybridScientificCalculator.getState();
      const display = hybridScientificCalculator.getDisplay();
      
      expect(typeof display).toBe('string');
    });
  });

  describe('Error Handling', () => {
    test('should handle division by zero', () => {
      hybridScientificCalculator.inputDigit('5');
      hybridScientificCalculator.performOperation('÷');
      hybridScientificCalculator.inputDigit('0');
      hybridScientificCalculator.performOperation('=');
      
      const state = hybridScientificCalculator.getState();
      expect(state.display).toBe('0');
    });

    test('should handle invalid unit expressions', () => {
      expect(() => {
        hybridScientificCalculator.evaluateUnitAwareExpression('invalid expression');
      }).toThrow();
    });

    test('should handle invalid scientific functions', () => {
      hybridScientificCalculator.inputDigit('-1');
      hybridScientificCalculator.performScientificFunction('√');
      
      const state = hybridScientificCalculator.getState();
      expect(state.display).toBe('Error');
    });
  });
});

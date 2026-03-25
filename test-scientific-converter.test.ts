// Test suite for Scientific Unit Converter
import { scientificConverter, CONVERSION_FORMULAS } from './lib/scientificConverter';

describe('Scientific Unit Converter', () => {
  beforeEach(() => {
    scientificConverter.clearConversionHistory();
  });

  describe('Basic Unit Conversions', () => {
    test('should convert between physics units', () => {
      const result = scientificConverter.convert(1000, 'W', 'kW', 'physics');
      expect(result.result).toBe(1);
      expect(result.fromUnit).toBe('W');
      expect(result.toUnit).toBe('kW');
    });

    test('should convert between pressure units', () => {
      const result = scientificConverter.convert(1, 'atm', 'Pa', 'engineering');
      expect(result.result).toBe(101325);
    });

    test('should convert between energy units', () => {
      const result = scientificConverter.convert(1, 'kWh', 'J', 'engineering');
      expect(result.result).toBe(3600000);
    });

    test('should convert astronomical units', () => {
      const result = scientificConverter.convert(1, 'ly', 'm', 'astronomy');
      expect(result.result).toBeCloseTo(9.4607304725808e15, 10);
    });
  });

  describe('Formula-Based Conversions', () => {
    test('should calculate kinetic energy', () => {
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Kinetic Energy')!;
      const inputs: { [key: string]: number } = { 'm': 1000, 'v': 20 };
      const result = scientificConverter.convertFromFormula(formula, inputs, 'J');
      
      expect(result.result).toBe(200000); // 0.5 * 1000 * 20^2
      expect(result.formula).toBe('KE = 0.5 × m × v²');
    });

    test('should calculate potential energy', () => {
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Potential Energy')!;
      const inputs: { [key: string]: number } = { 'm': 100, 'g': 9.81, 'h': 10 };
      const result = scientificConverter.convertFromFormula(formula, inputs, 'J');
      
      expect(result.result).toBeCloseTo(9810, 0);
    });

    test('should calculate force', () => {
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Force')!;
      const inputs: { [key: string]: number } = { 'm': 1000, 'a': 2 };
      const result = scientificConverter.convertFromFormula(formula, inputs, 'N');
      
      expect(result.result).toBe(2000);
    });

    test('should calculate using Ohm\'s law', () => {
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Ohm\'s Law')!;
      const inputs: { [key: string]: number } = { 'I': 5, 'R': 100 };
      const result = scientificConverter.convertFromFormula(formula, inputs, 'V');
      
      expect(result.result).toBe(500);
    });

    test('should calculate ideal gas law', () => {
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Ideal Gas Law')!;
      const inputs: { [key: string]: number } = { 'n': 1, 'R': 8.314, 'T': 273.15, 'V': 0.0224 };
      const result = scientificConverter.convertFromFormula(formula, inputs, 'Pa');
      
      expect(result.result).toBeCloseTo(101325, 0);
    });
  });

  describe('Batch Conversions', () => {
    test('should handle multiple conversions', () => {
      const conversions = [
        { fromValue: 1000, fromUnit: 'W', toUnit: 'kW', category: 'physics' },
        { fromValue: 2, fromUnit: 'kW', toUnit: 'W', category: 'physics' },
        { fromValue: 1, fromUnit: 'atm', toUnit: 'Pa', category: 'engineering' }
      ];
      
      const results = scientificConverter.batchConvert(conversions);
      
      expect(results).toHaveLength(3);
      expect(results[0].result).toBe(1);
      expect(results[1].result).toBe(2000);
      expect(results[2].result).toBe(101325);
    });
  });

  describe('Unit Analysis', () => {
    test('should analyze units in expression', () => {
      const analysis = scientificConverter.analyzeUnits('F = m × a where F is in N and m is in kg');
      
      expect(analysis.validUnits).toContain('N');
      expect(analysis.validUnits).toContain('kg');
      expect(analysis.dimensions).toContain('Force');
      expect(analysis.dimensions).toContain('Mass');
    });

    test('should suggest conversions', () => {
      const analysis = scientificConverter.analyzeUnits('Convert 100 N to other force units');
      
      expect(analysis.suggestedConversions.length).toBeGreaterThan(0);
      expect(analysis.suggestedConversions[0].from).toBe('N');
    });
  });

  describe('Custom Unit Management', () => {
    test('should add custom units', () => {
      const customUnit = {
        symbol: 'customN',
        name: 'Custom Newton',
        dimension: 'Force',
        siUnit: 'kg·m/s²',
        conversionFactor: 1.1,
        category: 'physics' as const
      };
      
      scientificConverter.addCustomUnit(customUnit);
      const customUnits = scientificConverter.getCustomUnits();
      
      expect(customUnits).toHaveLength(1);
      expect(customUnits[0].symbol).toBe('customN');
    });

    test('should remove custom units', () => {
      const customUnit = {
        symbol: 'customN',
        name: 'Custom Newton',
        dimension: 'Force',
        siUnit: 'kg·m/s²',
        conversionFactor: 1.1,
        category: 'physics' as const
      };
      
      scientificConverter.addCustomUnit(customUnit);
      scientificConverter.removeCustomUnit('customN');
      const customUnits = scientificConverter.getCustomUnits();
      
      expect(customUnits).toHaveLength(0);
    });
  });

  describe('Search Functionality', () => {
    test('should search units by name', () => {
      const results = scientificConverter.searchUnits('Newton');
      
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].name).toContain('Newton');
    });

    test('should search units by symbol', () => {
      const results = scientificConverter.searchUnits('N');
      
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].symbol).toBe('N');
    });

    test('should search units by category', () => {
      const results = scientificConverter.searchUnits('physics');
      
      expect(results.length).toBeGreaterThan(0);
      expect(results.every(unit => unit.category === 'physics')).toBe(true);
    });

    test('should search formulas by name', () => {
      const results = scientificConverter.searchFormulas('Kinetic');
      
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].name).toContain('Kinetic');
    });

    test('should search formulas by category', () => {
      const results = scientificConverter.searchFormulas('physics');
      
      expect(results.length).toBeGreaterThan(0);
      expect(results.every(formula => formula.category === 'physics')).toBe(true);
    });
  });

  describe('Category Management', () => {
    test('should get units by category', () => {
      const physicsUnits = scientificConverter.getUnitsByCategory('physics');
      
      expect(physicsUnits.length).toBeGreaterThan(0);
      expect(physicsUnits.every(unit => unit.category === 'physics')).toBe(true);
    });

    test('should get formulas by category', () => {
      const physicsFormulas = scientificConverter.getFormulasByCategory('physics');
      
      expect(physicsFormulas.length).toBeGreaterThan(0);
      expect(physicsFormulas.every(formula => formula.category === 'physics')).toBe(true);
    });
  });

  describe('Dimensional Analysis', () => {
    test('should check dimensional consistency', () => {
      const analysis = scientificConverter.checkDimensionalConsistency(['N', 'kg', 'm/s²']);
      
      expect(analysis.consistent).toBe(true);
      expect(analysis.errors).toHaveLength(0);
    });

    test('should detect dimensional inconsistency', () => {
      const analysis = scientificConverter.checkDimensionalConsistency(['N', 'J', 'm']);
      
      expect(analysis.consistent).toBe(false);
      expect(analysis.dimensions.length).toBeGreaterThan(1);
    });

    test('should detect unknown units', () => {
      const analysis = scientificConverter.checkDimensionalConsistency(['N', 'unknown', 'kg']);
      
      expect(analysis.consistent).toBe(false);
      expect(analysis.errors).toContain('Unknown unit: unknown');
    });
  });

  describe('History Management', () => {
    test('should save conversion history', () => {
      scientificConverter.convert(1000, 'W', 'kW', 'physics');
      scientificConverter.convert(1, 'atm', 'Pa', 'engineering');
      
      const history = scientificConverter.getConversionHistory();
      expect(history).toHaveLength(2);
      expect(history[0].fromUnit).toBe('atm');
      expect(history[1].fromUnit).toBe('W');
    });

    test('should clear history', () => {
      scientificConverter.convert(1000, 'W', 'kW', 'physics');
      scientificConverter.clearConversionHistory();
      
      const history = scientificConverter.getConversionHistory();
      expect(history).toHaveLength(0);
    });
  });

  describe('Export/Import Functionality', () => {
    test('should export history', () => {
      scientificConverter.convert(1000, 'W', 'kW', 'physics');
      
      const exported = scientificConverter.exportHistory();
      const parsed = JSON.parse(exported);
      
      expect(parsed).toHaveLength(1);
      expect(parsed[0].fromUnit).toBe('W');
    });

    test('should import history', () => {
      const testHistory = [{
        fromValue: 100,
        fromUnit: 'N',
        toUnit: 'kN',
        result: 0.1,
        category: 'physics',
        timestamp: new Date().toISOString()
      }];
      
      scientificConverter.importHistory(JSON.stringify(testHistory));
      const history = scientificConverter.getConversionHistory();
      
      expect(history).toHaveLength(1);
      expect(history[0].fromUnit).toBe('N');
    });

    test('should handle invalid import', () => {
      expect(() => {
        scientificConverter.importHistory('invalid json');
      }).toThrow();
    });
  });

  describe('Error Handling', () => {
    test('should handle invalid units', () => {
      expect(() => {
        scientificConverter.convert(100, 'invalid', 'W', 'physics');
      }).toThrow();
    });

    test('should handle invalid formula inputs', () => {
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Kinetic Energy')!;
      const inputs: { [key: string]: number } = { 'm': 1000, 'v': 20 };
      
      expect(() => {
        scientificConverter.convertFromFormula(formula, inputs, 'J');
      }).toThrow();
    });

    test('should handle missing formula inputs', () => {
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Kinetic Energy')!;
      const inputs: { [key: string]: number } = { 'm': 1000 }; // missing 'v'
      
      expect(() => {
        scientificConverter.convertFromFormula(formula, inputs, 'J');
      }).not.toThrow(); // Should handle missing inputs gracefully
    });
  });

  describe('Integration with Regular Converter', () => {
    test('should fall back to regular converter for standard units', () => {
      const result = scientificConverter.convert(100, 'm', 'cm', 'length');
      
      expect(result.result).toBe(10000); // 100m = 10000cm
    });

    test('should handle mixed unit types', () => {
      const result = scientificConverter.convert(1, 'kg', 'g', 'weight');
      
      expect(result.result).toBe(1000); // 1kg = 1000g
    });
  });

  describe('Complex Scientific Scenarios', () => {
    test('should handle physics calculations', () => {
      // Calculate power from force and velocity
      const force = scientificConverter.convert(1000, 'N', 'N', 'physics');
      const velocity = scientificConverter.convert(20, 'm/s', 'm/s', 'physics');
      
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Power')!;
      const inputs: { [key: string]: number } = { 'F': force.result, 'v': velocity.result };
      const result = scientificConverter.convertFromFormula(formula, inputs, 'W');
      
      expect(result.result).toBe(20000); // 1000N * 20m/s = 20000W
    });

    test('should handle engineering calculations', () => {
      // Calculate stress from force and area
      const force = scientificConverter.convert(10000, 'N', 'N', 'engineering');
      const area = scientificConverter.convert(0.01, 'm²', 'm²', 'engineering');
      
      const formula = CONVERSION_FORMULAS.find(f => f.name === 'Stress')!;
      const inputs: { [key: string]: number } = { 'F': force.result, 'A': area.result };
      const result = scientificConverter.convertFromFormula(formula, inputs, 'Pa');
      
      expect(result.result).toBe(1000000); // 10000N / 0.01m² = 1,000,000 Pa
    });

    test('should handle astronomy calculations', () => {
      // Convert light years to parsecs
      const lightYears = scientificConverter.convert(1, 'ly', 'm', 'astronomy');
      const parsecs = scientificConverter.convert(1, 'pc', 'm', 'astronomy');
      
      const ratio = lightYears.result / parsecs.result;
      expect(ratio).toBeCloseTo(0.3066, 4); // 1 ly ≈ 0.3066 pc
    });
  });
});

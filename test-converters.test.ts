import { convert } from './lib/converters';

describe('Unit Conversion', () => {
  describe('Construction Conversions', () => {
    test('should convert cubic yard (cement) to metric ton (steel) (approximate)', () => {
      // 1 cubic yard (cement) is approximately 1134 kg.
      // 1 metric ton (steel) is 1000 kg.
      // So, 1 cubic yard (cement) should be approximately 1.134 metric tons (steel)
      expect(convert('construction', 1, 'cubic yard (cement)', 'metric ton (steel)')).toBeCloseTo(1.134);
    });

    test('should convert ton (sand) to kilogram (aggregate)', () => {
      // 1 US ton of sand is about 907.185 kg
      expect(convert('construction', 1, 'ton (sand)', 'kilogram (aggregate)')).toBeCloseTo(907.185);
    });

    test('should convert metric ton (steel) to kilogram (aggregate)', () => {
      // 1 metric ton of steel is 1000 kg
      expect(convert('construction', 1, 'metric ton (steel)', 'kilogram (aggregate)')).toBeCloseTo(1000);
    });

    test('should convert cubic meter (concrete) to kilogram (aggregate)', () => {
      expect(convert('construction', 1, 'cubic meter (concrete)', 'kilogram (aggregate)')).toBeCloseTo(2400);
    });

    test('should convert cubic foot (concrete) to kilogram (aggregate)', () => {
      expect(convert('construction', 1, 'cubic foot (concrete)', 'kilogram (aggregate)')).toBeCloseTo(68);
    });

    test('should convert ton (US) to kilogram (aggregate)', () => {
      expect(convert('construction', 1, 'ton (US)', 'kilogram (aggregate)')).toBeCloseTo(907.185);
    });
  });

  describe('Length Conversions', () => {
    test('should convert meters to kilometers', () => {
      expect(convert('length', 1000, 'meter', 'kilometer')).toBe(1);
    });

    test('should convert kilometers to meters', () => {
      expect(convert('length', 1, 'kilometer', 'meter')).toBe(1000);
    });
  });

  describe('Weight Conversions', () => {
    test('should convert kilograms to grams', () => {
      expect(convert('weight', 1, 'kilogram', 'gram')).toBe(1000);
    });
  });

  describe('Temperature Conversions', () => {
    test('should convert Celsius to Fahrenheit', () => {
      expect(convert('temperature', 0, 'celsius', 'fahrenheit')).toBe(32);
    });

    test('should convert Fahrenheit to Celsius', () => {
      expect(convert('temperature', 32, 'fahrenheit', 'celsius')).toBe(0);
    });
  });

  describe('Healthcare Conversions', () => {
    test('should convert milligram to milliliter with concentration', () => {
      // 100 mg with a concentration of 50 mg/ml should be 2 ml
      expect(convert('healthcare', 100, 'milligram', 'milliliter', 50)).toBeCloseTo(2);
    });

    test('should convert milliliter to milligram with concentration', () => {
      // 2 ml with a concentration of 50 mg/ml should be 100 mg
      expect(convert('healthcare', 2, 'milliliter', 'milligram', 50)).toBeCloseTo(100);
    });

    test('should convert milligram to microgram', () => {
      expect(convert('healthcare', 1, 'milligram', 'microgram')).toBeCloseTo(1000);
    });

    test('should throw error if concentration is missing for healthcare conversion', () => {
      expect(() => convert('healthcare', 10, 'milligram', 'milliliter')).toThrow('Concentration is required for healthcare conversions.');
    });

    test('should convert kilogram to gram', () => {
      expect(convert('healthcare', 1, 'kilogram', 'gram')).toBeCloseTo(1000);
    });

    test('should convert pound to gram', () => {
      expect(convert('healthcare', 1, 'pound', 'gram')).toBeCloseTo(453.592);
    });

    test('should convert cubic centimeter to milliliter', () => {
      expect(convert('healthcare', 1, 'cubic centimeter', 'milliliter')).toBe(1);
    });

    test('should handle international unit (IU)', () => {
      expect(convert('healthcare', 1, 'international unit (IU)', 'international unit (IU)')).toBe(1);
    });

    test('should handle milliequivalent (mEq)', () => {
      expect(convert('healthcare', 1, 'milliequivalent (mEq)', 'milliequivalent (mEq)')).toBe(1);
    });
  });

  
  describe('Engineering Conversions', () => {
    test('should convert meters to feet with rounding', () => {
      expect(convert('engineering', 1, 'meter', 'foot', undefined, undefined, undefined, 2)).toBe(3.28);
    });

    test('should convert kilograms to pounds with rounding', () => {
      expect(convert('engineering', 1, 'kilogram', 'pound', undefined, undefined, undefined, 1)).toBe(2.2);
    });

    test('should convert newtons to pound-force with rounding', () => {
      expect(convert('engineering', 10, 'newton', 'pound-force', undefined, undefined, undefined, 3)).toBe(2.248);
    });

    test('should perform engineering conversion without rounding if parameter is omitted', () => {
      expect(convert('engineering', 1, 'meter', 'foot')).toBeCloseTo(3.28084);
    });

    test('should convert psi to pascal', () => {
      expect(convert('engineering', 1, 'psi', 'pascal')).toBeCloseTo(6894.76);
    });

    test('should convert bar to pascal', () => {
      expect(convert('engineering', 1, 'bar', 'pascal')).toBe(100000);
    });

    test('should convert btu to joule', () => {
      expect(convert('engineering', 1, 'btu', 'joule')).toBeCloseTo(1055.06);
    });

    test('should convert horsepower to watt', () => {
      expect(convert('engineering', 1, 'horsepower', 'watt')).toBeCloseTo(745.7);
    });
  });

  describe('Logistics Conversions', () => {
    test('should convert cubic meters to kilograms (chargeable weight) with a factor of 167 kg/m^3', () => {
      // 1 cubic meter * 167 kg/m^3 = 167 kg
      expect(convert('logistics', 1, 'cubic meter', 'kilogram', undefined, undefined, undefined, undefined, 167)).toBeCloseTo(167);
    });

    test('should convert cubic feet to pounds (chargeable weight) with a factor of 10 lbs/ft^3', () => {
      // The factor needs to be in kg/cubic meter.
      const volumetricFactor_lbs_per_ft3 = (10 * 0.453592) / 0.0283168; // approx 160.18
      expect(convert('logistics', 1, 'cubic foot', 'pound', undefined, undefined, undefined, undefined, volumetricFactor_lbs_per_ft3)).toBeCloseTo(10);
    });

    test('should throw error if volumetricWeightFactor is missing for logistics conversion', () => {
      expect(() => convert('logistics', 1, 'cubic meter', 'kilogram')).toThrow('Volumetric weight factor is required for logistics conversions.');
    });

    test('should convert CBM to cubic meter', () => {
      expect(convert('logistics', 1, 'CBM (cubic meter)', 'cubic meter')).toBe(1);
    });

    test('should convert TEU to cubic meter', () => {
      expect(convert('logistics', 1, 'TEU (Twenty-foot Equivalent Unit)', 'cubic meter')).toBeCloseTo(32.85);
    });

    test('should convert FEU to cubic meter', () => {
      expect(convert('logistics', 1, 'FEU (Forty-foot Equivalent Unit)', 'cubic meter')).toBeCloseTo(66.83);
    });
  });

  describe('Chemical Conversions', () => {
    test('should convert grams to moles with molar mass', () => {
      // 18.015 grams of water (molar mass) should be 1 mole
      expect(convert('chemical', 18.015, 'gram', 'mole', undefined, undefined, undefined, undefined, undefined, 18.015)).toBeCloseTo(1);
    });

    test('should convert moles to grams with molar mass', () => {
      // 1 mole of water with molar mass 18.015 g/mol should be 18.015 grams
      expect(convert('chemical', 1, 'mole', 'gram', undefined, undefined, undefined, undefined, undefined, 18.015)).toBeCloseTo(18.015);
    });

    test('should convert moles to molar with solution volume', () => {
      // 0.5 moles in 0.5 liters should be 1 molar
      expect(convert('chemical', 0.5, 'mole', 'molar (mol/L)', undefined, undefined, undefined, undefined, undefined, undefined, 0.5)).toBeCloseTo(1);
    });

    test('should convert molar to moles with solution volume', () => {
      // 1 molar in 0.5 liters should be 0.5 moles
      expect(convert('chemical', 1, 'molar (mol/L)', 'mole', undefined, undefined, undefined, undefined, undefined, undefined, 0.5)).toBeCloseTo(0.5);
    });

    test('should convert liter to milliliter in chemical category', () => {
      expect(convert('chemical', 1, 'liter', 'milliliter')).toBeCloseTo(1000);
    });

    test('should throw error if molar mass is missing for mass to mole conversion', () => {
      expect(() => convert('chemical', 10, 'gram', 'mole')).toThrow('Molar mass is required for mass to mole conversions.');
    });

    test('should throw error if solution volume is missing for mole to molar conversion', () => {
      expect(() => convert('chemical', 0.5, 'mole', 'molar (mol/L)')).toThrow('Solution volume is required for mole to molarity conversions.');
    });

    test('should convert kg/m³ to g/mL', () => {
      expect(convert('chemical', 1, 'kg/m³', 'g/mL')).toBe(1);
    });

    test('should convert g/cm³ to g/mL', () => {
      expect(convert('chemical', 1, 'g/cm³', 'g/mL')).toBe(1);
    });

    test('should convert g/L to g/mL', () => {
      expect(convert('chemical', 1, 'g/L', 'g/mL')).toBe(0.001);
    });
  });
});
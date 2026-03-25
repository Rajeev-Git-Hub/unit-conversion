import { CategoryKey } from './types';

export const conversionMeta: Record<
  CategoryKey,
  {
    formula: string;
    constants: string;
    assumptions: string;
    standard: string;
  }
> = {
  length: {
    formula: 'value × (fromUnit / toUnit)',
    constants: '1 meter = base unit',
    assumptions: 'Straight-line distance',
    standard: 'ISO 80000-1'
  },
  weight: {
    formula: 'value × (fromUnit / toUnit)',
    constants: '1 kilogram = base unit',
    assumptions: 'Standard gravity',
    standard: 'ISO 80000-4'
  },
  time: {
    formula: 'value × (fromUnit / toUnit)',
    constants: '1 minute = 60 seconds',
    assumptions: 'Linear time conversion',
    standard: 'ISO 80000-3'
  },
  temperature: {
    formula: 'Affine transformation',
    constants: '32°F offset, 273.15 K',
    assumptions: 'Standard atmosphere',
    standard: 'ITS-90'
  },
  area: {
    formula: 'value × (fromUnit / toUnit)',
    constants: 'Square meter base',
    assumptions: 'Flat surface',
    standard: 'ISO 80000-2'
  },
  volume: {
    formula: 'value × (fromUnit / toUnit)',
    constants: '1 liter = 1 dm³',
    assumptions: 'Incompressible fluid',
    standard: 'ISO 80000-2'
  },
  speed: {
    formula: 'value × (fromUnit / toUnit)',
    constants: 'm/s base',
    assumptions: 'Constant velocity',
    standard: 'ISO 80000-3'
  },
  data: {
    formula: 'value × (fromUnit / toUnit)',
    constants: '1 KB = 1024 bytes',
    assumptions: 'Binary units',
    standard: 'IEC 80000-13'
  },
  analytics: {
    formula: 'N/A - Analytics dashboard',
    constants: 'User conversion data',
    assumptions: 'Accurate tracking',
    standard: 'Web analytics standards'
  },
  'dev-tools': {
    formula: 'N/A - Developer utilities',
    constants: 'Various tool constants',
    assumptions: 'Standard web APIs',
    standard: 'Web standards'
  },
  utilities: {
    formula: 'N/A - Utility tools',
    constants: 'Various utility constants',
    assumptions: 'Standard calculations',
    standard: 'Utility standards'
  }
};

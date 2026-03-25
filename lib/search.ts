import { converters, temperatureUnits } from './converters';
// Temporarily disabled scientific calculator imports
// import { SCIENTIFIC_CONSTANTS, SCIENTIFIC_FUNCTIONS } from './scientificCalculator';

export const getAllConverters = () => {
  const allConverters: { category: string; name: string; type?: 'unit' | 'function' | 'constant' }[] = [];
  
  // Add regular unit converters
  for (const category in converters) {
    const units = converters[category as keyof typeof converters];
    if (typeof units === 'object' && units !== null) {
        for (const unit in units) {
          allConverters.push({
            category: category,
            name: unit,
            type: 'unit'
          });
        }
    }
  }
  
  // Add temperature units separately
  temperatureUnits.forEach(unit => {
    allConverters.push({
      category: 'temperature',
      name: unit,
      type: 'unit'
    });
  });

  // Temporarily disabled scientific calculator functions
  /*
  // Add scientific calculator functions to scientific category
  SCIENTIFIC_FUNCTIONS.forEach(func => {
    allConverters.push({
      category: 'scientific',
      name: func.name,
      type: 'function'
    });
    allConverters.push({
      category: 'scientific',
      name: func.symbol,
      type: 'function'
    });
  });

  // Add scientific calculator constants to scientific category
  SCIENTIFIC_CONSTANTS.forEach(constant => {
    allConverters.push({
      category: 'scientific',
      name: constant.name,
      type: 'constant'
    });
    allConverters.push({
      category: 'scientific',
      name: constant.symbol,
      type: 'constant'
    });
  });

  // Add the scientific converter
  allConverters.push({
    category: 'scientific',
    name: 'Scientific Calculator',
    type: 'unit'
  });
  */

  return allConverters;
};

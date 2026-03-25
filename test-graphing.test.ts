// Test suite for Conversion Graphing and Analytics
import { conversionGrapher } from './lib/graphing';

describe('Conversion Graphing', () => {
  beforeEach(() => {
    conversionGrapher.clearHistory();
  });

  describe('Data Management', () => {
    test('should add conversions to history', () => {
      const conversion = {
        id: '1',
        fromValue: 100,
        fromUnit: 'm',
        toValue: 328.084,
        toUnit: 'ft',
        category: 'length',
        timestamp: new Date()
      };

      conversionGrapher.addConversion(conversion);
      
      const analytics = conversionGrapher.getAnalyticsSummary();
      expect(analytics.totalConversions).toBe(1);
    });

    test('should clear history', () => {
      const conversion = {
        id: '1',
        fromValue: 100,
        fromUnit: 'm',
        toValue: 328.084,
        toUnit: 'ft',
        category: 'length',
        timestamp: new Date()
      };

      conversionGrapher.addConversion(conversion);
      conversionGrapher.clearHistory();
      
      const analytics = conversionGrapher.getAnalyticsSummary();
      expect(analytics.totalConversions).toBe(0);
    });

    test('should export and import data', () => {
      const conversion = {
        id: '1',
        fromValue: 100,
        fromUnit: 'm',
        toValue: 328.084,
        toUnit: 'ft',
        category: 'length',
        timestamp: new Date()
      };

      conversionGrapher.addConversion(conversion);
      
      const exportedData = conversionGrapher.exportData();
      conversionGrapher.clearHistory();
      conversionGrapher.importData(exportedData);
      
      const analytics = conversionGrapher.getAnalyticsSummary();
      expect(analytics.totalConversions).toBe(1);
    });
  });

  describe('Chart Generation', () => {
    beforeEach(() => {
      // Add sample data for testing
      const sampleConversions = [
        { id: '1', fromValue: 100, fromUnit: 'm', toValue: 328.084, toUnit: 'ft', category: 'length', timestamp: new Date() },
        { id: '2', fromValue: 50, fromUnit: 'kg', toValue: 110.231, toUnit: 'lbs', category: 'weight', timestamp: new Date() },
        { id: '3', fromValue: 25, fromUnit: 'm', toValue: 82.021, toUnit: 'ft', category: 'length', timestamp: new Date() },
        { id: '4', fromValue: 1000, fromUnit: 'ml', toValue: 1, toUnit: 'l', category: 'volume', timestamp: new Date() },
        { id: '5', fromValue: 75, fromUnit: 'kg', toValue: 165.347, toUnit: 'lbs', category: 'weight', timestamp: new Date() }
      ];

      sampleConversions.forEach(conversion => {
        conversionGrapher.addConversion(conversion);
      });
    });

    test('should generate conversion history graph', () => {
      const graph = conversionGrapher.getConversionHistoryGraph(7);
      
      expect(graph.type).toBe('line');
      expect(graph.title).toBe('Conversion Activity (Last 7 Days)');
      expect(graph.data.labels).toBeDefined();
      expect(graph.data.datasets).toHaveLength(1);
      expect(graph.data.datasets[0].label).toBe('Conversions');
    });

    test('should generate most used categories graph', () => {
      const graph = conversionGrapher.getMostUsedCategoriesGraph();
      
      expect(graph.type).toBe('bar');
      expect(graph.title).toBe('Most Used Categories');
      expect(graph.data.labels).toContain('length');
      expect(graph.data.labels).toContain('weight');
      expect(graph.data.labels).toContain('volume');
    });

    test('should generate most used units graph', () => {
      const graph = conversionGrapher.getMostUsedUnitsGraph();
      
      expect(graph.type).toBe('doughnut');
      expect(graph.title).toBe('Most Used Units');
      expect(graph.data.labels.length).toBeGreaterThan(0);
    });

    test('should generate hourly activity graph', () => {
      const graph = conversionGrapher.getHourlyActivityGraph();
      
      expect(graph.type).toBe('bar');
      expect(graph.title).toBe('Conversion Activity by Hour');
      expect(graph.data.labels).toHaveLength(24);
      expect(graph.data.labels[0]).toBe('0:00');
      expect(graph.data.labels[23]).toBe('23:00');
    });

    test('should generate conversion size distribution', () => {
      const graph = conversionGrapher.getConversionSizeDistribution();
      
      expect(graph.type).toBe('pie');
      expect(graph.title).toBe('Conversion Size Distribution');
      expect(graph.data.labels).toContain('Small (< 10)');
      expect(graph.data.labels).toContain('Medium (10-100)');
      expect(graph.data.labels).toContain('Large (100-1000)');
      expect(graph.data.labels).toContain('Very Large (> 1000)');
    });

    test('should generate unit relationship graph', () => {
      const graph = conversionGrapher.getUnitRelationshipGraph('m', 'ft');
      
      expect(graph.type).toBe('line');
      expect(graph.title).toBe('m to ft Conversions');
      expect(graph.data.datasets).toHaveLength(2);
      expect(graph.data.datasets[0].label).toBe('m');
      expect(graph.data.datasets[1].label).toBe('ft');
    });
  });

  describe('Analytics Summary', () => {
    beforeEach(() => {
      // Add sample data with specific timestamps for testing
      const now = new Date();
      const sampleConversions = [
        { id: '1', fromValue: 100, fromUnit: 'm', toValue: 328.084, toUnit: 'ft', category: 'length', timestamp: now },
        { id: '2', fromValue: 50, fromUnit: 'kg', toValue: 110.231, toUnit: 'lbs', category: 'weight', timestamp: new Date(now.getTime() - 3600000) },
        { id: '3', fromValue: 25, fromUnit: 'm', toValue: 82.021, toUnit: 'ft', category: 'length', timestamp: new Date(now.getTime() - 7200000) }
      ];

      sampleConversions.forEach(conversion => {
        conversionGrapher.addConversion(conversion);
      });
    });

    test('should calculate analytics summary correctly', () => {
      const analytics = conversionGrapher.getAnalyticsSummary();
      
      expect(analytics.totalConversions).toBe(3);
      expect(analytics.mostUsedCategory).toBe('length');
      expect(analytics.mostUsedUnit).toBe('m');
      expect(analytics.averageConversionsPerDay).toBeGreaterThan(0);
      expect(analytics.peakHour).toMatch(/^\d{2}:00$/);
      expect(analytics.favoriteConversion).toBe('m → ft');
    });

    test('should handle empty history gracefully', () => {
      conversionGrapher.clearHistory();
      const analytics = conversionGrapher.getAnalyticsSummary();
      
      expect(analytics.totalConversions).toBe(0);
      expect(analytics.mostUsedCategory).toBe('N/A');
      expect(analytics.mostUsedUnit).toBe('N/A');
      expect(analytics.averageConversionsPerDay).toBe(0);
      expect(analytics.peakHour).toBe('N/A');
      expect(analytics.favoriteConversion).toBe('N/A');
    });
  });

  describe('Data Persistence', () => {
    test('should handle localStorage errors gracefully', () => {
      // Mock localStorage to throw an error
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = jest.fn(() => {
        throw new Error('Storage quota exceeded');
      });

      const conversion = {
        id: '1',
        fromValue: 100,
        fromUnit: 'm',
        toValue: 328.084,
        toUnit: 'ft',
        category: 'length',
        timestamp: new Date()
      };

      // Should not throw an error
      expect(() => {
        conversionGrapher.addConversion(conversion);
      }).not.toThrow();

      // Restore original localStorage
      localStorage.setItem = originalSetItem;
    });

    test('should handle corrupted import data', () => {
      expect(() => {
        conversionGrapher.importData('invalid json');
      }).toThrow('Invalid data format');
    });
  });

  describe('Chart Data Validation', () => {
    test('should generate valid chart structures', () => {
      const conversion = {
        id: '1',
        fromValue: 100,
        fromUnit: 'm',
        toValue: 328.084,
        toUnit: 'ft',
        category: 'length',
        timestamp: new Date()
      };

      conversionGrapher.addConversion(conversion);

      const historyGraph = conversionGrapher.getConversionHistoryGraph(7);
      expect(historyGraph.data.labels).toBeDefined();
      expect(historyGraph.data.datasets).toBeDefined();
      expect(historyGraph.data.datasets[0].data).toBeDefined();
      expect(Array.isArray(historyGraph.data.datasets[0].data)).toBe(true);

      const categoriesGraph = conversionGrapher.getMostUsedCategoriesGraph();
      expect(categoriesGraph.data.labels.length).toBeGreaterThan(0);
      expect(categoriesGraph.data.datasets[0].data.length).toBe(categoriesGraph.data.labels.length);
    });
  });
});

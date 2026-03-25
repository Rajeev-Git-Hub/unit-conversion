// Graphing and Data Visualization for ConvertMaster
// Provides unique competitive advantage with conversion analytics

export interface ConversionDataPoint {
  id: string;
  fromValue: number;
  fromUnit: string;
  toValue: number;
  toUnit: string;
  category: string;
  timestamp: Date;
}

export interface DayDetail {
  date: string;
  conversions: ConversionDataPoint[];
  totalConversions: number;
  categoriesUsed: string[];
  unitsUsed: string[];
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

export interface GraphConfig {
  type: 'line' | 'bar' | 'pie' | 'doughnut';
  title: string;
  description?: string;
  data: ChartData;
  options?: any;
}

export class ConversionGrapher {
  private conversionHistory: ConversionDataPoint[] = [];

  constructor() {
    this.loadHistory();
  }

  // Load conversion history from localStorage
  private loadHistory(): void {
    try {
      // Check if we're in a browser environment
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('conversionHistory');
        if (stored) {
          const history = JSON.parse(stored);
          this.conversionHistory = history.map((item: any) => ({
            id: item.id || Math.random().toString(36).substr(2, 9),
            fromValue: item.value,
            fromUnit: item.from,
            toValue: item.result,
            toUnit: item.to,
            category: item.category,
            timestamp: new Date(item.date)
          }));
        }
      }
    } catch (error) {
      console.error('Error loading conversion history for graphing:', error);
      this.conversionHistory = [];
    }
  }

  // Add new conversion to history (for manual additions)
  addConversion(conversion: ConversionDataPoint): void {
    this.conversionHistory.unshift(conversion);
    // Don't save here - let the main history system handle saving
  }

  // Refresh data from localStorage
  refreshData(): void {
    this.loadHistory();
  }

  // Get conversion history graph data
  getConversionHistoryGraph(days: number = 7): GraphConfig {
    const now = new Date();
    const cutoffDate = new Date(now.getTime() - (days * 24 * 60 * 60 * 1000));
    
    // Always create the last 7 days labels, even if no conversions
    const dailyData: { [key: string]: number } = {};
    
    // Create labels for the last 7 days including today
    // Start from 6 days ago and go up to today
    for (let i = days - 1; i >= 0; i--) {
      // Create date for i days ago from the start of today
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (days - 1 - i));
      const dateKey = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      dailyData[dateKey] = 0;
      console.log(`Day ${i}: ${dateKey} (calc: ${now.getDate()} - (${days} - 1 - ${i}) = ${now.getDate() - (days - 1 - i)})`);
    }

    // Count conversions for each day
    this.conversionHistory.forEach(conversion => {
      const conversionDate = new Date(conversion.timestamp);
      const dateKey = conversionDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      if (dailyData[dateKey] !== undefined) {
        dailyData[dateKey]++;
      }
    });

    return {
      type: 'bar',
      title: `Conversion Activity (Last ${days} Days)`,
      description: 'Number of conversions performed per day',
      data: {
        labels: Object.keys(dailyData),
        datasets: [{
          label: 'Conversions',
          data: Object.values(dailyData),
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(251, 146, 60, 0.8)',
            'rgba(244, 63, 94, 0.8)',
            'rgba(147, 51, 234, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(34, 197, 94, 0.8)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    };
  }

  // Get most used categories graph
  getMostUsedCategoriesGraph(): GraphConfig {
    const categoryCount: { [key: string]: number } = {};
    
    this.conversionHistory.forEach(conversion => {
      categoryCount[conversion.category] = (categoryCount[conversion.category] || 0) + 1;
    });

    const sortedCategories = Object.entries(categoryCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);

    return {
      type: 'bar',
      title: 'Most Used Categories',
      description: 'Top conversion categories by usage frequency',
      data: {
        labels: sortedCategories.map(([category]) => category),
        datasets: [{
          label: 'Usage Count',
          data: sortedCategories.map(([, count]) => count),
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(251, 146, 60, 0.8)',
            'rgba(244, 63, 94, 0.8)',
            'rgba(147, 51, 234, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(251, 191, 36, 0.8)',
            'rgba(107, 114, 128, 0.8)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    };
  }

  // Get most used units graph
  getMostUsedUnitsGraph(): GraphConfig {
    const unitCount: { [key: string]: number } = {};
    
    this.conversionHistory.forEach(conversion => {
      unitCount[conversion.fromUnit] = (unitCount[conversion.fromUnit] || 0) + 1;
      unitCount[conversion.toUnit] = (unitCount[conversion.toUnit] || 0) + 1;
    });

    const sortedUnits = Object.entries(unitCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);

    return {
      type: 'doughnut',
      title: 'Most Used Units',
      description: 'Top units by usage frequency',
      data: {
        labels: sortedUnits.map(([unit]) => unit),
        datasets: [{
          label: 'Usage Count',
          data: sortedUnits.map(([, count]) => count),
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(251, 146, 60, 0.8)',
            'rgba(244, 63, 94, 0.8)',
            'rgba(147, 51, 234, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(251, 191, 36, 0.8)',
            'rgba(107, 114, 128, 0.8)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    };
  }

  // Get conversion volume by hour graph
  getHourlyActivityGraph(): GraphConfig {
    const hourlyData: { [key: string]: number } = {};
    
    // Initialize all hours with 0
    for (let i = 0; i < 24; i++) {
      hourlyData[`${i}:00`] = 0;
    }

    this.conversionHistory.forEach(conversion => {
      const hour = conversion.timestamp.getHours();
      hourlyData[`${hour}:00`]++;
    });

    return {
      type: 'bar',
      title: 'Conversion Activity by Hour',
      description: 'When do you convert most? Hourly breakdown',
      data: {
        labels: Object.keys(hourlyData),
        datasets: [{
          label: 'Conversions',
          data: Object.values(hourlyData),
          backgroundColor: 'rgba(251, 146, 60, 0.8)',
          borderColor: 'rgba(251, 146, 60, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    };
  }

  // Get detailed information for a specific day
  getDayDetail(dateString: string): DayDetail {
    console.log(`getDayDetail called with: "${dateString}"`);
    
    // Parse the date string (format: "Mar 8")
    const currentYear = new Date().getFullYear();
    console.log(`Current year: ${currentYear}`);
    
    // Parse month and day from the string
    const parts = dateString.split(' ');
    if (parts.length !== 2) {
      throw new Error(`Invalid date format: ${dateString}`);
    }
    
    const monthStr = parts[0];
    const dayStr = parts[1];
    console.log(`Parsed month: "${monthStr}", day: "${dayStr}"`);
    
    // Set month
    const monthMap: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    if (monthMap[monthStr] === undefined) {
      throw new Error(`Invalid month: ${monthStr}`);
    }
    
    // Create the target date
    const targetDate = new Date(currentYear, monthMap[monthStr], parseInt(dayStr));
    console.log(`Created target date: ${targetDate.toDateString()}`);
    console.log(`Target date details: ${targetDate.getFullYear()}-${targetDate.getMonth()}-${targetDate.getDate()}`);
    
    // Set time to start of day
    const startOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
    const endOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate() + 1);
    
    console.log(`Looking for conversions between ${startOfDay.toDateString()} and ${endOfDay.toDateString()}`);
    
    const dayConversions = this.conversionHistory.filter(conversion => 
      conversion.timestamp >= startOfDay && conversion.timestamp < endOfDay
    );
    
    console.log(`Found ${dayConversions.length} conversions`);
    if (dayConversions.length > 0) {
      console.log(`First conversion date: ${dayConversions[0].timestamp.toDateString()}`);
    }
    
    const categoriesUsed = [...new Set(dayConversions.map(c => c.category))];
    const unitsUsed = [...new Set(dayConversions.flatMap(c => [c.fromUnit, c.toUnit]))];
    
    const result = {
      date: startOfDay.toISOString().split('T')[0], // Store as YYYY-MM-DD for consistency
      conversions: dayConversions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()),
      totalConversions: dayConversions.length,
      categoriesUsed,
      unitsUsed
    };
    
    console.log(`Returning result for date: ${result.date} (formatted: ${new Date(result.date).toDateString()})`);
    return result;
  }

  // Get conversion size distribution graph
  getConversionSizeDistribution(): GraphConfig {
    const sizeRanges = [
      { label: 'Small (< 10)', min: 0, max: 10, count: 0 },
      { label: 'Medium (10-100)', min: 10, max: 100, count: 0 },
      { label: 'Large (100-1000)', min: 100, max: 1000, count: 0 },
      { label: 'Very Large (> 1000)', min: 1000, max: Infinity, count: 0 }
    ];

    this.conversionHistory.forEach(conversion => {
      const value = Math.max(conversion.fromValue, conversion.toValue);
      const range = sizeRanges.find(r => value >= r.min && value < r.max);
      if (range) range.count++;
    });

    return {
      type: 'pie',
      title: 'Conversion Size Distribution',
      description: 'Distribution of conversion values by size',
      data: {
        labels: sizeRanges.map(range => range.label),
        datasets: [{
          label: 'Conversions',
          data: sizeRanges.map(range => range.count),
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(251, 146, 60, 0.8)',
            'rgba(244, 63, 94, 0.8)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    };
  }

  // Get unit conversion relationship graph
  getUnitRelationshipGraph(fromUnit: string, toUnit: string, dataPoints: number = 10): GraphConfig {
    const conversions = this.conversionHistory.filter(
      conversion => conversion.fromUnit === fromUnit && conversion.toUnit === toUnit
    ).slice(0, dataPoints);

    return {
      type: 'line',
      title: `${fromUnit} to ${toUnit} Conversions`,
      description: `Historical conversion data for ${fromUnit} → ${toUnit}`,
      data: {
        labels: conversions.map((_, index) => `Conversion ${index + 1}`),
        datasets: [{
          label: fromUnit,
          data: conversions.map(c => c.fromValue),
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 2
        }, {
          label: toUnit,
          data: conversions.map(c => c.toValue),
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  }

  // Get comprehensive analytics summary
  getAnalyticsSummary(): {
    totalConversions: number;
    mostUsedCategory: string;
    mostUsedUnit: string;
    averageConversionsPerDay: number;
    peakHour: string;
    favoriteConversion: string;
  } {
    const totalConversions = this.conversionHistory.length;
    
    // Most used category
    const categoryCount: { [key: string]: number } = {};
    this.conversionHistory.forEach(conversion => {
      categoryCount[conversion.category] = (categoryCount[conversion.category] || 0) + 1;
    });
    const mostUsedCategory = Object.entries(categoryCount)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || 'N/A';

    // Most used unit
    const unitCount: { [key: string]: number } = {};
    this.conversionHistory.forEach(conversion => {
      unitCount[conversion.fromUnit] = (unitCount[conversion.fromUnit] || 0) + 1;
      unitCount[conversion.toUnit] = (unitCount[conversion.toUnit] || 0) + 1;
    });
    const mostUsedUnit = Object.entries(unitCount)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || 'N/A';

    // Average conversions per day
    const daysSinceFirst = this.conversionHistory.length > 0 
      ? Math.max(1, Math.ceil((Date.now() - this.conversionHistory[this.conversionHistory.length - 1].timestamp.getTime()) / (1000 * 60 * 60 * 24)))
      : 1;
    const averageConversionsPerDay = Math.round(totalConversions / daysSinceFirst);

    // Peak hour
    const hourlyCount: { [key: number]: number } = {};
    this.conversionHistory.forEach(conversion => {
      const hour = conversion.timestamp.getHours();
      hourlyCount[hour] = (hourlyCount[hour] || 0) + 1;
    });
    const peakHour = Object.entries(hourlyCount)
      .sort(([, a], [, b]) => b - a)[0]?.[0] !== undefined 
        ? `${Object.entries(hourlyCount).sort(([, a], [, b]) => b - a)[0][0]}:00`
        : 'N/A';

    // Favorite conversion (most common pair)
    const conversionPairs: { [key: string]: number } = {};
    this.conversionHistory.forEach(conversion => {
      const pair = `${conversion.fromUnit} → ${conversion.toUnit}`;
      conversionPairs[pair] = (conversionPairs[pair] || 0) + 1;
    });
    const favoriteConversion = Object.entries(conversionPairs)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || 'N/A';

    return {
      totalConversions,
      mostUsedCategory,
      mostUsedUnit,
      averageConversionsPerDay,
      peakHour,
      favoriteConversion
    };
  }

  // Clear all history
  clearHistory(): void {
    this.conversionHistory = [];
    // Clear the main history storage
    localStorage.removeItem('conversionHistory');
  }

  // Export data as JSON
  exportData(): string {
    return JSON.stringify(this.conversionHistory, null, 2);
  }

  // Import data from JSON
  importData(jsonData: string): void {
    try {
      const imported = JSON.parse(jsonData);
      this.conversionHistory = imported.map((item: any) => ({
        ...item,
        timestamp: new Date(item.timestamp)
      }));
      
      // Save to main history format
      const mainHistoryFormat = this.conversionHistory.map(item => ({
        id: item.id,
        category: item.category,
        value: item.fromValue,
        from: item.fromUnit,
        result: item.toValue,
        to: item.toUnit,
        date: item.timestamp.toISOString()
      }));
      
      // Check if we're in a browser environment
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('conversionHistory', JSON.stringify(mainHistoryFormat));
      }
    } catch (error) {
      throw new Error('Invalid data format');
    }
  }
}

// Export singleton instance
export const conversionGrapher = new ConversionGrapher();

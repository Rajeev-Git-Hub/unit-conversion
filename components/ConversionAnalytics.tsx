'use client';

import { useState, useEffect } from 'react';
import { conversionGrapher, GraphConfig, DayDetail } from '../lib/graphing';
import { FiBarChart2, FiTrendingUp, FiPieChart, FiClock, FiDownload, FiUpload, FiRefreshCw, FiActivity } from 'react-icons/fi';
import { useLocalization } from '../lib/LocalizationContext';

// Simple chart component (we'll implement a basic version without external dependencies)
const SimpleChart: React.FC<{ 
  config: GraphConfig; 
  onDayClick?: (date: string) => void;
  clickable?: boolean;
}> = ({ config, onDayClick, clickable = false }) => {
  const maxValue = Math.max(...config.data.datasets.flatMap(d => d.data));
  const totalValue = config.data.datasets[0].data.reduce((a, b) => a + b, 0);

  const renderBarChart = () => (
    <div className="space-y-2">
      {config.data.labels.map((label, index) => {
        const value = config.data.datasets[0].data[index];
        const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
        const backgroundColor = config.data.datasets[0].backgroundColor || 'rgba(59, 130, 246, 0.8)';
        
        return (
          <div 
            key={index} 
            className={`flex items-center space-x-2 ${clickable ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-1 rounded' : ''}`}
            onClick={() => {
              console.log(`Bar clicked: "${label}" (index: ${index})`);
              if (clickable) {
                onDayClick?.(label);
              } else {
                console.log('Bar not clickable');
              }
            }}
            title={clickable ? `Click to see details for ${label}` : ''}
          >
            <div className="w-20 text-xs text-gray-600 dark:text-gray-400 truncate">{label}</div>
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-6 relative">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: typeof backgroundColor === 'string' ? backgroundColor : backgroundColor[index] || 'rgba(59, 130, 246, 0.8)'
                }}
              >
                {percentage > 10 && (
                  <span className="text-xs text-white font-semibold">{value}</span>
                )}
              </div>
            </div>
            {percentage <= 10 && (
              <span className="text-xs text-gray-600 dark:text-gray-400 w-8 text-right">{value}</span>
            )}
            {clickable && (
              <div className="w-2 h-2 bg-blue-400 rounded-full" title="Click to see details" />
            )}
          </div>
        );
      })}
    </div>
  );

  const renderLineChart = () => {
    const points = config.data.datasets[0].data.map((value, index) => {
      const x = (index / (config.data.labels.length - 1)) * 100;
      const y = maxValue > 0 ? 100 - (value / maxValue) * 100 : 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative h-40 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
          ))}
          {[0, 25, 50, 75, 100].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#e5e7eb" strokeWidth="0.5" />
          ))}
          
          {/* Data line */}
          <polyline
            points={points}
            fill="none"
            stroke={typeof config.data.datasets[0].borderColor === 'string' ? config.data.datasets[0].borderColor : config.data.datasets[0].borderColor?.[0] || '#3b82f6'}
            strokeWidth="2"
          />
          
          {/* Data points */}
          {config.data.datasets[0].data.map((value, index) => {
            const x = (index / (config.data.labels.length - 1)) * 100;
            const y = maxValue > 0 ? 100 - (value / maxValue) * 100 : 100;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="2"
                fill={typeof config.data.datasets[0].borderColor === 'string' ? config.data.datasets[0].borderColor : config.data.datasets[0].borderColor?.[0] || '#3b82f6'}
              />
            );
          })}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          {config.data.labels.map((label, index) => (
            <span key={index} className="truncate max-w-5">{label}</span>
          ))}
        </div>
      </div>
    );
  };

  const renderPieChart = () => {
    let currentAngle = 0;
    
    return (
      <div className="flex items-center space-x-4">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {config.data.datasets[0].data.map((value, index) => {
              const percentage = totalValue > 0 ? (value / totalValue) * 100 : 0;
              const angle = (percentage / 100) * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + angle;
              
              const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
              const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
              const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
              const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
              
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              const pathData = [
                `M 50 50`,
                `L ${x1} ${y1}`,
                `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
              ].join(' ');
              
              currentAngle = endAngle;
              
              const backgroundColor = config.data.datasets[0].backgroundColor;
              const color = typeof backgroundColor === 'string' ? backgroundColor : (backgroundColor && backgroundColor[index]) || 'rgba(59, 130, 246, 0.8)';
              
              return (
                <path
                  key={index}
                  d={pathData}
                  fill={color}
                  stroke="white"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        </div>
        
        <div className="flex-1 space-y-1">
          {config.data.labels.map((label, index) => {
            const value = config.data.datasets[0].data[index];
            const percentage = totalValue > 0 ? ((value / totalValue) * 100).toFixed(1) : '0';
            const backgroundColor = config.data.datasets[0].backgroundColor;
            const color = typeof backgroundColor === 'string' ? backgroundColor : (backgroundColor && backgroundColor[index]) || 'rgba(59, 130, 246, 0.8)';
            
            return (
              <div key={index} className="flex items-center space-x-2 text-xs">
                <div 
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: color }}
                />
                <span className="truncate">{label}</span>
                <span className="text-gray-500">({percentage}%)</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{config.title}</h3>
      {config.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{config.description}</p>
      )}
      
      {config.type === 'bar' && renderBarChart()}
      {config.type === 'line' && renderLineChart()}
      {config.type === 'pie' && renderPieChart()}
      {config.type === 'doughnut' && renderPieChart()}
    </div>
  );
};

export default function ConversionAnalytics() {
  const { t } = useLocalization();
  const [selectedChart, setSelectedChart] = useState<string>('history');
  const [chartData, setChartData] = useState<GraphConfig | null>(null);
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<DayDetail | null>(null);
  const [showDayDetail, setShowDayDetail] = useState(false);

  useEffect(() => {
    loadAnalytics();
  }, [selectedChart]); // Only re-run when chart changes, not when showDayDetail changes

  useEffect(() => {
    console.log('State changed:', {
      selectedChart,
      showDayDetail,
      selectedDay: selectedDay ? selectedDay.date : 'none',
      loading
    });
  }, [selectedChart, showDayDetail, selectedDay, loading]);

  const loadAnalytics = (resetView = true) => {
    setLoading(true);
    
    // Only reset view state if explicitly requested
    if (resetView) {
      setShowDayDetail(false);
      setSelectedDay(null);
    }
    
    try {
      // Refresh data from localStorage
      conversionGrapher.refreshData();
      
      // Load chart data based on selection
      let data: GraphConfig | null = null;
      
      switch (selectedChart) {
        case 'history':
          data = conversionGrapher.getConversionHistoryGraph(7);
          break;
        case 'categories':
          data = conversionGrapher.getMostUsedCategoriesGraph();
          break;
        case 'units':
          data = conversionGrapher.getMostUsedUnitsGraph();
          break;
        case 'hourly':
          data = conversionGrapher.getHourlyActivityGraph();
          break;
        case 'sizes':
          data = conversionGrapher.getConversionSizeDistribution();
          break;
        default:
          data = conversionGrapher.getConversionHistoryGraph(7);
      }
      
      setChartData(data);
      setAnalytics(conversionGrapher.getAnalyticsSummary());
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDayClick = (dateString: string) => {
    console.log(`handleDayClick called with: "${dateString}"`);
    try {
      const dayDetail = conversionGrapher.getDayDetail(dateString);
      console.log(`Got day detail:`, dayDetail);
      setSelectedDay(dayDetail);
      setShowDayDetail(true);
      console.log(`Set showDayDetail to true`);
    } catch (error) {
      console.error('Error loading day detail:', error);
    }
  };

  const handleBackToAnalytics = () => {
    console.log('handleBackToAnalytics called');
    setShowDayDetail(false);
    setSelectedDay(null);
    setSelectedChart('history'); // Reset to history chart
    console.log('Set selectedChart to history');
  };

  const exportData = () => {
    try {
      const data = conversionGrapher.exportData();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = t('analytics.download_file');
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result as string;
        conversionGrapher.importData(data);
        loadAnalytics();
      } catch (error) {
        console.error('Error importing data:', error);
      }
    };
    reader.readAsText(file);
  };

  const clearData = () => {
    if (confirm(t('analytics.clear_confirm'))) {
      conversionGrapher.clearHistory();
      loadAnalytics(true); // Reset view after clearing
    }
  };

  // Day Detail View Component
  const DayDetailView: React.FC<{ dayDetail: DayDetail }> = ({ dayDetail }) => {
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      // Use the same format as the chart labels
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {formatDate(dayDetail.date)}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {dayDetail.totalConversions} conversions
              </p>
            </div>
          </div>
        </div>

        {/* Simple Test Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Day Details</h3>
          <div className="space-y-2">
            <p><strong>Date:</strong> {dayDetail.date}</p>
            <p><strong>Total Conversions:</strong> {dayDetail.totalConversions}</p>
            <p><strong>Categories Used:</strong> {dayDetail.categoriesUsed.join(', ')}</p>
            <p><strong>Units Used:</strong> {dayDetail.unitsUsed.join(', ')}</p>
          </div>
          
          {dayDetail.conversions.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Conversions:</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {dayDetail.conversions.map((conversion, index) => (
                  <div key={conversion.id} className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <div className="text-sm">
                      {conversion.fromValue} {conversion.fromUnit} → {conversion.toValue} {conversion.toUnit}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {conversion.category} • {conversion.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const chartOptions = [
    { id: 'history', label: 'Activity History', icon: FiTrendingUp },
    { id: 'categories', label: 'Categories', icon: FiBarChart2 },
    { id: 'units', label: 'Units', icon: FiPieChart },
    { id: 'hourly', label: 'Hourly Activity', icon: FiClock },
    { id: 'sizes', label: 'Size Distribution', icon: FiActivity }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <FiBarChart2 className="text-3xl text-green-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('analytics.title')}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('analytics.subtitle')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => loadAnalytics(true)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                title="Refresh"
              >
                <FiRefreshCw className="text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={exportData}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                title="Export"
              >
                <FiDownload className="text-gray-700 dark:text-gray-300" />
              </button>
              <label className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer" title="Import">
                <FiUpload className="text-gray-700 dark:text-gray-300" />
                <input type="file" accept=".json" onChange={importData} className="hidden" />
              </label>
              <button
                onClick={clearData}
                className="p-2 rounded-lg bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800"
                title="Clear Data"
              >
                <FiActivity className="text-red-700 dark:text-red-300" />
              </button>
            </div>
          </div>

          {/* Analytics Summary */}
          {analytics && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{analytics.totalConversions}</div>
                <div className="text-xs text-blue-600 dark:text-blue-400">{t('analytics.total_conversions')}</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{analytics.mostUsedCategory}</div>
                <div className="text-xs text-green-600 dark:text-green-400">{t('analytics.top_category')}</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{analytics.mostUsedUnit}</div>
                <div className="text-xs text-purple-600 dark:text-purple-400">{t('analytics.top_unit')}</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{analytics.averageConversionsPerDay}</div>
                <div className="text-xs text-orange-600 dark:text-orange-400">{t('analytics.per_day')}</div>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{analytics.peakHour}</div>
                <div className="text-xs text-pink-600 dark:text-pink-400">{t('analytics.peak_hour')}</div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3">
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400 truncate">{analytics.favoriteConversion}</div>
                <div className="text-xs text-indigo-600 dark:text-indigo-400">{t('analytics.favorite')}</div>
              </div>
            </div>
          )}

          {/* Chart Selection */}
          <div className="flex flex-wrap gap-2 mb-6">
            {chartOptions.map(option => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => {
                    console.log(`Chart button clicked: ${option.id}`);
                    setSelectedChart(option.id);
                    console.log(`Set selectedChart to: ${option.id}`);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedChart === option.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Icon className="text-sm" />
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              );
            })}
          </div>

          {/* Chart Display */}
          <div className="min-h-100">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-gray-500 dark:text-gray-400">{t('analytics.loading')}</div>
              </div>
            ) : showDayDetail && selectedDay ? (
              <DayDetailView dayDetail={selectedDay} />
            ) : chartData ? (
              <SimpleChart 
                config={chartData} 
                onDayClick={handleDayClick}
                clickable={selectedChart === 'history'}
              />
            ) : (
              <div className="flex items-center justify-center h-96">
                <div className="text-gray-500 dark:text-gray-400">No data available</div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">{t('analytics.about_title')}</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
              {t('analytics.about_desc')}
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              💡 <strong>Tip:</strong> Click on any day in the history chart to see detailed conversion data for that day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

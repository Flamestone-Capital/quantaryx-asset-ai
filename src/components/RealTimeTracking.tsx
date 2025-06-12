import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, Brain, Activity, DollarSign, BarChart3 } from 'lucide-react';

// 实时投资组合数据
const portfolioPerformance = [
  { time: '09:00', value: 5430000, change: 0 },
  { time: '09:15', value: 5485000, change: 55000 },
  { time: '09:30', value: 5580000, change: 95000 },
  { time: '09:45', value: 5525000, change: -55000 },
  { time: '10:00', value: 5450000, change: -75000 },
  { time: '10:15', value: 5320000, change: -130000 },
  { time: '10:30', value: 5420000, change: 100000 },
  { time: '10:45', value: 5550000, change: 130000 },
  { time: '11:00', value: 5680000, change: 130000 },
  { time: '11:15', value: 5780000, change: 100000 },
  { time: '11:30', value: 5720000, change: -60000 },
  { time: '11:45', value: 5650000, change: -70000 },
  { time: '12:00', value: 5590000, change: -60000 },
  { time: '12:15', value: 5510000, change: -80000 },
  { time: '12:30', value: 5620000, change: 110000 },
  { time: '12:45', value: 5740000, change: 120000 },
  { time: '13:00', value: 5850000, change: 110000 },
  { time: '13:15', value: 5920000, change: 70000 },
  { time: '13:30', value: 6020000, change: 100000 },
  { time: '13:45', value: 5960000, change: -60000 },
  { time: '14:00', value: 5890000, change: -70000 },
  { time: '14:15', value: 5810000, change: -80000 },
  { time: '14:30', value: 5720000, change: -90000 },
  { time: '14:45', value: 5650000, change: -70000 },
  { time: '15:00', value: 5580000, change: -70000 },
  { time: '15:15', value: 5680000, change: 100000 },
  { time: '15:30', value: 5790000, change: 110000 },
  { time: '15:45', value: 5890000, change: 100000 },
  { time: '16:00', value: 5950000, change: 60000 },
];

// AI智能洞察
const aiInsights = [
  {
    id: 1,
    type: 'opportunity',
    title: '強勁上升趨勢',
    message: 'AI檢測到科技板塊和能源股強勁反彈，您的投資組合表現優異，建議持續關注',
    time: '15:45',
    impact: '+$520,000'
  },
  {
    id: 2,
    type: 'warning',
    title: '獲利回吐風險',
    message: '投資組合漲幅已達9.6%，建議考慮部分獲利了結以鎖定收益',
    time: '13:30',
    impact: '風險管理'
  },
  {
    id: 3,
    type: 'info',
    title: '動能持續強勁',
    message: '市場買盤湧入，技術指標顯示上升動能仍在延續',
    time: '15:30',
    impact: '趨勢確認'
  }
];

// 資產影響分析
const assetImpacts = [
  { asset: 'NVDA', impact: +8.5, value: 290000, change: +24650 },
  { asset: 'TSLA', impact: +12.3, value: 180000, change: +22140 },
  { asset: 'AAPL', impact: +6.8, value: 245000, change: +16660 },
  { asset: 'MSFT', impact: +7.2, value: 320000, change: +23040 },
  { asset: 'GOOGL', impact: +9.1, value: 275000, change: +25025 },
];

const RealTimeTracking = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMetric, setActiveMetric] = useState('portfolio');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 设置CSS变量
    const root = document.documentElement;
    root.style.setProperty('--tooltip-bg', 'white');
    root.style.setProperty('--tooltip-text', '#374151');
    root.style.setProperty('--tooltip-border', '#d1d5db');
    
    // 监听主题变化
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      root.style.setProperty('--tooltip-bg', '#1f2937');
      root.style.setProperty('--tooltip-text', 'white');
      root.style.setProperty('--tooltip-border', '#374151');
    }
  }, []);

  const currentValue = portfolioPerformance[portfolioPerformance.length - 1];
  const dayChange = currentValue.value - portfolioPerformance[0].value;
  const dayChangePercent = ((dayChange / portfolioPerformance[0].value) * 100).toFixed(2);

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* 顶部实时状态 - 更紧凑 */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium">實時監控</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{currentTime.toLocaleTimeString('zh-TW', { hour12: false })}</span>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">${currentValue.value.toLocaleString()}</div>
          <div className={`text-xs flex items-center ${dayChange >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {dayChange >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
            {dayChange >= 0 ? '+' : ''}${dayChange.toLocaleString()} ({dayChangePercent}%)
          </div>
        </div>
      </div>

      {/* 主图表区域 - 减小高度 */}
      <div className="h-32 mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={portfolioPerformance}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} stroke="currentColor" />
            <XAxis 
              dataKey="time" 
              fontSize={8} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: 'currentColor', opacity: 0.6 }}
              interval={4}
            />
            <YAxis hide />
            <Tooltip 
              formatter={(value, name) => [`$${Number(value).toLocaleString()}`, '投資組合價值']}
              labelStyle={{ color: 'var(--tooltip-text)', fontWeight: 'bold', fontSize: '12px' }}
              itemStyle={{ color: 'var(--tooltip-text)', fontWeight: 'bold', fontSize: '12px' }}
              contentStyle={{ 
                backgroundColor: 'var(--tooltip-bg)', 
                borderColor: 'var(--tooltip-border)', 
                borderRadius: '6px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#9b87f5" 
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <style>{`
        :root {
          --tooltip-bg: white;
          --tooltip-text: #374151;
          --tooltip-border: #d1d5db;
        }
        .dark {
          --tooltip-bg: #1f2937;
          --tooltip-text: white;
          --tooltip-border: #374151;
        }
      `}</style>
    </div>
  );
};

export default RealTimeTracking; 
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, ArrowRightLeft, Shield, Target, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

// 交易执行数据
const tradingExecutions = [
  { time: '09:30', action: '買入', asset: 'AAPL', quantity: 100, price: 175.50, status: 'completed' },
  { time: '10:15', action: '賣出', asset: 'TSLA', quantity: 50, price: 242.80, status: 'completed' },
  { time: '11:20', action: '再平衡', asset: 'MSFT', quantity: 75, price: 285.20, status: 'completed' },
  { time: '13:45', action: '止損', asset: 'NVDA', quantity: 30, price: 420.15, status: 'completed' },
  { time: '14:30', action: '買入', asset: 'GOOGL', quantity: 25, price: 138.90, status: 'pending' },
];

// 策略性能数据
const strategyPerformance = [
  { period: '1周', manual: 2.3, automated: 3.1, difference: 0.8 },
  { period: '1月', manual: 5.2, automated: 7.8, difference: 2.6 },
  { period: '3月', manual: 12.1, automated: 16.5, difference: 4.4 },
  { period: '6月', manual: 18.7, automated: 25.2, difference: 6.5 },
  { period: '1年', manual: 24.3, automated: 32.8, difference: 8.5 },
];

// 风险控制指标
const riskMetrics = [
  { metric: '波動率降低', value: '15%', trend: 'down', color: 'green' },
  { metric: '最大回撤', value: '3.2%', trend: 'down', color: 'green' },
  { metric: '夏普比率', value: '1.85', trend: 'up', color: 'blue' },
  { metric: '勝率提升', value: '68%', trend: 'up', color: 'purple' },
];

const AutomatedTrading = () => {
  const [activeStrategy, setActiveStrategy] = useState('rebalancing');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* 顶部状态栏 */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium">AI交易系統</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">運行中</span>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-blue-600 dark:text-blue-400">自動執行</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">今日 5 筆交易</div>
        </div>
      </div>

      {/* 策略性能对比图表 */}
      <div className="h-32 mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={strategyPerformance} barSize={15}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis 
              dataKey="period" 
              fontSize={8} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: 'currentColor', opacity: 0.6 }}
            />
            <YAxis hide />
            <Tooltip 
              formatter={(value, name) => [
                `${value}%`, 
                name === 'manual' ? '手動交易' : name === 'automated' ? 'AI自動交易' : '收益差距'
              ]}
              labelStyle={{ color: 'var(--tooltip-text)', fontWeight: 'bold', fontSize: '10px' }}
              itemStyle={{ color: 'var(--tooltip-text)', fontWeight: 'bold', fontSize: '10px' }}
              contentStyle={{ 
                backgroundColor: 'var(--tooltip-bg)', 
                borderColor: 'var(--tooltip-border)', 
                borderRadius: '6px'
              }}
            />
            <Bar 
              dataKey="manual" 
              fill="#9ca3af" 
              radius={[2, 2, 0, 0]}
              name="manual"
            />
            <Bar 
              dataKey="automated" 
              fill="#3b82f6" 
              radius={[2, 2, 0, 0]}
              name="automated"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 实时交易执行 */}
      <div className="mb-3">
        <h4 className="text-xs font-medium mb-2 flex items-center">
          <Zap className="w-3 h-3 mr-1 text-yellow-600 dark:text-yellow-400" />
          即時交易執行
        </h4>
        <div className="space-y-1">
          {tradingExecutions.slice(0, 2).map((trade, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded text-xs">
              <div className="flex items-center space-x-2">
                {trade.status === 'completed' ? (
                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
                )}
                <span className="font-mono font-bold">{trade.time}</span>
                <span className={`px-1 rounded text-xs ${
                  trade.action === '買入' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  trade.action === '賣出' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {trade.action}
                </span>
                <span className="font-mono">{trade.asset}</span>
              </div>
              <div className="text-right">
                <div className="font-mono">${trade.price}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{trade.quantity}股</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 风险控制指标 */}
      <div className="grid grid-cols-2 gap-1">
        {riskMetrics.slice(0, 4).map((metric, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-1 rounded text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">{metric.metric}</div>
            <div className={`text-xs font-bold flex items-center justify-center ${
              metric.color === 'green' ? 'text-green-600 dark:text-green-400' :
              metric.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
              'text-purple-600 dark:text-purple-400'
            }`}>
              {metric.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
              {metric.value}
            </div>
          </div>
        ))}
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

export default AutomatedTrading; 
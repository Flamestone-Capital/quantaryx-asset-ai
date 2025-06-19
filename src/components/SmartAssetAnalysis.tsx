import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, ReferenceLine } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, Brain, Activity, Target, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SmartAssetAnalysis = () => {
  const { t, i18n } = useTranslation();
  const [currentAnalysis, setCurrentAnalysis] = useState(0);
  const [showPrediction, setShowPrediction] = useState(false);

  // 资产净值趋势预测数据 - 支持国际化
  const getAssetTrendData = () => {
    const months = i18n.language === 'zh' 
      ? ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    
    return [
      { month: months[0], actual: 100, predicted: null, lowerBound: null, upperBound: null },
      { month: months[1], actual: 105, predicted: null, lowerBound: null, upperBound: null },
      { month: months[2], actual: 110, predicted: null, lowerBound: null, upperBound: null },
      { month: months[3], actual: 108, predicted: null, lowerBound: null, upperBound: null },
      { month: months[4], actual: 115, predicted: null, lowerBound: null, upperBound: null },
      { month: months[5], actual: 125, predicted: null, lowerBound: null, upperBound: null },
      { month: months[6], actual: 135, predicted: null, lowerBound: null, upperBound: null },
      { month: months[7], actual: 145, predicted: null, lowerBound: null, upperBound: null },
      { month: months[8], actual: 155, predicted: null, lowerBound: null, upperBound: null },
      { month: months[9], actual: 170, predicted: null, lowerBound: null, upperBound: null },
      { month: months[10], actual: 165, predicted: null, lowerBound: null, upperBound: null },
      { month: months[11], actual: 180, predicted: null, lowerBound: null, upperBound: null },
      // AI预测未来6个月
      { month: months[12], actual: null, predicted: 185, lowerBound: 175, upperBound: 195 },
      { month: months[13], actual: null, predicted: 192, lowerBound: 180, upperBound: 204 },
      { month: months[14], actual: null, predicted: 198, lowerBound: 184, upperBound: 212 },
      { month: months[15], actual: null, predicted: 205, lowerBound: 189, upperBound: 221 },
      { month: months[16], actual: null, predicted: 210, lowerBound: 192, upperBound: 228 },
      { month: months[17], actual: null, predicted: 218, lowerBound: 196, upperBound: 240 },
    ];
  };

  // 风险识别数据 - 支持国际化
  const getRiskAnalysis = () => {
    if (i18n.language === 'zh') {
      return [
        { 
          id: 1, 
          level: 'high', 
          title: '市場波動風險',
          description: 'AI檢測到您的投資組合對市場波動敏感度較高',
          impact: '8.5%',
          recommendation: '建議增加防禦性資產配置'
        },
        { 
          id: 2, 
          level: 'medium', 
          title: '流動性風險',
          description: '部分資產流動性不足，可能影響快速變現',
          impact: '3.2%',
          recommendation: '保持20%現金或短期工具'
        },
        { 
          id: 3, 
          level: 'low', 
          title: '信用風險',
          description: '整體信用風險處於可控範圍內',
          impact: '1.8%',
          recommendation: '維持當前信用評級分散策略'
        }
      ];
    } else {
      return [
        { 
          id: 1, 
          level: 'high', 
          title: 'Market Volatility Risk',
          description: 'AI detected high sensitivity to market volatility in your portfolio',
          impact: '8.5%',
          recommendation: 'Consider increasing defensive asset allocation'
        },
        { 
          id: 2, 
          level: 'medium', 
          title: 'Liquidity Risk',
          description: 'Some assets have insufficient liquidity, may affect quick liquidation',
          impact: '3.2%',
          recommendation: 'Maintain 20% cash or short-term instruments'
        },
        { 
          id: 3, 
          level: 'low', 
          title: 'Credit Risk',
          description: 'Overall credit risk is within controllable range',
          impact: '1.8%',
          recommendation: 'Maintain current credit rating diversification strategy'
        }
      ];
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrediction(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 循环显示风险分析
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnalysis((prev) => (prev + 1) % getRiskAnalysis().length);
    }, 4000);
    return () => clearInterval(interval);
  }, [i18n.language]);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-green-600 dark:text-green-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'high': return <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />;
      case 'medium': return <Target className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />;
      case 'low': return <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const assetTrendData = getAssetTrendData();
  const riskAnalysis = getRiskAnalysis();

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
      {/* 顶部标题 */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium">
            {i18n.language === 'zh' ? '智慧資產分析' : 'Smart Asset Analysis'}
          </span>
          <div className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
            {i18n.language === 'zh' ? 'AI 預測準確率' : 'AI Prediction Accuracy'}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">94.5%</div>
        </div>
      </div>

      {/* 趋势预测图表 - 增加高度并填充剩余空间 */}
      <div className="flex-1 mb-2 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={assetTrendData}>
            <defs>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} stroke="currentColor" />
            <XAxis 
              dataKey="month" 
              fontSize={8} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: 'currentColor', opacity: 0.6 }}
              interval={2}
            />
            <YAxis hide />
            <Tooltip 
              formatter={(value, name) => {
                if (i18n.language === 'zh') {
                  if (name === 'actual') return [`${value}`, '實際淨值'];
                  if (name === 'predicted') return [`${value}`, 'AI預測'];
                  if (name === 'upperBound') return [`${value}`, '預測上限'];
                  if (name === 'lowerBound') return [`${value}`, '預測下限'];
                } else {
                  if (name === 'actual') return [`${value}`, 'Actual Net Value'];
                  if (name === 'predicted') return [`${value}`, 'AI Prediction'];
                  if (name === 'upperBound') return [`${value}`, 'Upper Bound'];
                  if (name === 'lowerBound') return [`${value}`, 'Lower Bound'];
                }
                return [value, name];
              }}
              labelStyle={{ color: 'var(--tooltip-text)', fontWeight: 'bold', fontSize: '12px' }}
              itemStyle={{ color: 'var(--tooltip-text)', fontWeight: 'bold', fontSize: '12px' }}
              contentStyle={{ 
                backgroundColor: 'var(--tooltip-bg)', 
                borderColor: 'var(--tooltip-border)', 
                borderRadius: '6px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            
            {/* 实际数据区域 */}
            <Area 
              type="monotone" 
              dataKey="actual" 
              stroke="#6366f1" 
              fillOpacity={1}
              fill="url(#actualGradient)"
              strokeWidth={2}
              name="actual"
            />
            
            {/* 预测区间 - 增强颜色 */}
            {showPrediction && (
              <>
                <Area 
                  type="monotone" 
                  dataKey="upperBound" 
                  stroke="none"
                  fill="url(#predictedGradient)"
                  fillOpacity={0.6}
                  name="upperBound"
                />
                <Area 
                  type="monotone" 
                  dataKey="lowerBound" 
                  stroke="none"
                  fill="url(#predictedGradient)"
                  fillOpacity={0.6}
                  name="lowerBound"
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#f59e0b"
                  strokeWidth={3}
                  strokeDasharray="8 4"
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#f59e0b', strokeWidth: 2, fill: '#fbbf24' }}
                  name="predicted"
                />
              </>
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 风险识别面板 - 减少内边距 */}
      <motion.div 
        key={currentAnalysis}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 border border-gray-200 dark:border-gray-700 flex-shrink-0"
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2">
            {getRiskIcon(riskAnalysis[currentAnalysis].level)}
            <span className="text-sm font-medium">
              {i18n.language === 'zh' ? '風險識別' : 'Risk Identification'}
            </span>
          </div>
          <div className={`text-xs px-2 py-1 rounded-full ${
            riskAnalysis[currentAnalysis].level === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
            riskAnalysis[currentAnalysis].level === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          }`}>
            {i18n.language === 'zh' ? '影響: ' : 'Impact: '}{riskAnalysis[currentAnalysis].impact}
          </div>
        </div>
        
        <h4 className={`text-sm font-medium mb-1 ${getRiskColor(riskAnalysis[currentAnalysis].level)}`}>
          {riskAnalysis[currentAnalysis].title}
        </h4>
        
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
          {riskAnalysis[currentAnalysis].description}
        </p>
        
        <div className="flex items-center">
          <Zap className="w-3 h-3 text-blue-600 dark:text-blue-400 mr-1" />
          <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
            {i18n.language === 'zh' ? 'AI建議: ' : 'AI Recommendation: '}{riskAnalysis[currentAnalysis].recommendation}
          </span>
        </div>
      </motion.div>

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

export default SmartAssetAnalysis; 
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, ArrowDown, Check, TrendingUp, AlertCircle, Clock, DollarSign, BarChart3, Tag } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// 生成模拟K线数据
const generateCandlestickData = (count: number) => {
  const data = [];
  let lastClose = 150 + Math.random() * 30;
  
  for (let i = 0; i < count; i++) {
    const volatility = (Math.random() * 5) + 1;
    const open = lastClose;
    const close = open + (Math.random() - 0.5) * volatility;
    const high = Math.max(open, close) + Math.random() * volatility;
    const low = Math.min(open, close) - Math.random() * volatility;
    
    data.push({
      time: i,
      open,
      high,
      low,
      close,
      volume: Math.floor(Math.random() * 1000) + 500
    });
    
    lastClose = close;
  }
  
  return data;
};

// 添加交易信号
const addTradingSignals = (data: any[]) => {
  const dataLength = data.length;
  
  // 确保我们有买入和卖出信号各一个
  const buyIndex = Math.floor(dataLength * 0.3) + Math.floor(Math.random() * 5); // 在30%左右位置
  const sellIndex = Math.floor(dataLength * 0.7) + Math.floor(Math.random() * 5); // 在70%左右位置
  
  // 策略列表
  const strategies = [
    'MovingAverage',
    'RSI Oversold',
    'MACD Signal',
    'Bollinger Bands',
    'Support Level',
    'Volume Spike',
    'Trend Breakout'
  ];
  
  const exitStrategies = [
    'TakeProfit',
    'StopLoss',
    'ExitInDays',
    'RSI Overbought',
    'Resistance Level',
    'Volume Drop'
  ];
  
  // 添加买入信号
  data[buyIndex].signal = {
    type: 'buy',
    price: data[buyIndex].close.toFixed(2),
    strength: (Math.random() * 2 + 8).toFixed(1), // 8-10分
    strategy: strategies[Math.floor(Math.random() * strategies.length)],
    days: Math.floor(Math.random() * 5) + 1 // 1-5天
  };
  
  // 添加卖出信号
  data[sellIndex].signal = {
    type: 'sell',
    price: data[sellIndex].close.toFixed(2),
    strength: (Math.random() * 2 + 7).toFixed(1), // 7-9分
    strategy: exitStrategies[Math.floor(Math.random() * exitStrategies.length)],
    days: Math.floor(Math.random() * 3) + 1 // 1-3天
  };
  
  return data;
};

// 数字计数器动画组件
const CountUp = ({ from, to, duration = 1.2, decimals = 2, delay = 0 }: { from: number, to: number, duration?: number, decimals?: number, delay?: number }) => {
  const [count, setCount] = useState(from);
  const countRef = useRef(from);
  
  useEffect(() => {
    countRef.current = from;
    // 添加延迟开始计数
    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (countRef.current < to) {
          const increment = (to - from) / (duration * 33.3);
          const newValue = Math.min(countRef.current + increment, to);
          countRef.current = newValue;
          setCount(newValue);
        } else {
          clearInterval(interval);
        }
      }, 30); // 更高的刷新率使动画更平滑
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(delayTimer);
  }, [from, to, duration, delay]);
  
  return <>{count.toFixed(decimals)}</>;
};

const EnhancedTradingSignalBoard = () => {
  const { t } = useTranslation();
  const [candlestickData, setCandlestickData] = useState<any[]>([]);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [activeSignalIndex, setActiveSignalIndex] = useState<number | null>(null);
  const [orderDetails, setOrderDetails] = useState({
    type: 'buy',
    price: '170.25',
    quantity: '58.58',
    total: '10000.0'
  });
  const [aiScore] = useState(8.9);
  const [showAiScore, setShowAiScore] = useState(false);
  const [chartReady, setChartReady] = useState(false);
  const [currentSignalStep, setCurrentSignalStep] = useState(0); // 0: 买入, 1: 卖出
  
  // 图表尺寸和样式
  const chartWidth = 500;
  const chartHeight = 300;
  const candleWidth = 8; // 缩小蜡烛宽度
  const spacing = 6; // 增加间距
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  
  // 蜡烛颜色和效果
  const upColor = '#22c55e';
  const downColor = '#ef4444';
  const upGlow = '0 0 8px rgba(34, 197, 94, 0.6)';
  const downGlow = '0 0 8px rgba(239, 68, 68, 0.6)';
  
  // 价格范围
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  
  // 将价格转换为Y坐标
  const priceToY = (price: number) => {
    const { min, max } = priceRange;
    return margin.top + ((max - price) / (max - min)) * (chartHeight - margin.top - margin.bottom);
  };

  // 启动信号序列
  const startSignalSequence = (dataWithSignals: any[]) => {
    // 找到买入和卖出信号
    const buySignalIndex = dataWithSignals.findIndex(
      (candle) => candle.signal && candle.signal.type === 'buy'
    );
    const sellSignalIndex = dataWithSignals.findIndex(
      (candle) => candle.signal && candle.signal.type === 'sell'
    );

    const executeStep = (step: number) => {
      if (step === 0 && buySignalIndex !== -1) {
        // 执行买入
        setCurrentSignalStep(0);
        setActiveSignalIndex(buySignalIndex);
        setOrderDetails({
          type: 'buy',
          price: dataWithSignals[buySignalIndex].close.toFixed(2),
          quantity: '58.58',
          total: '10000.0'
        });
        
        setTimeout(() => {
          setShowOrderConfirmation(true);
          
          // 3秒后隐藏确认框并移到卖出
          setTimeout(() => {
            setShowOrderConfirmation(false);
            setActiveSignalIndex(null);
            
            // 1秒后执行卖出
            setTimeout(() => {
              executeStep(1);
            }, 1000);
          }, 3000);
        }, 1000);
      } else if (step === 1 && sellSignalIndex !== -1) {
        // 执行卖出
        setCurrentSignalStep(1);
        setActiveSignalIndex(sellSignalIndex);
        setOrderDetails({
          type: 'sell',
          price: dataWithSignals[sellSignalIndex].close.toFixed(2),
          quantity: '58.58',
          total: '298.5'
        });
        
        setTimeout(() => {
          setShowOrderConfirmation(true);
          
          // 3秒后隐藏确认框，然后重新开始循环
          setTimeout(() => {
            setShowOrderConfirmation(false);
            setActiveSignalIndex(null);
            
            // 2秒后重新开始整个序列
            setTimeout(() => {
              executeStep(0);
            }, 2000);
          }, 3000);
        }, 1000);
      }
    };

    // 开始执行序列
    executeStep(0);
  };
  
  useEffect(() => {
    // 生成初始数据
    const initialData = generateCandlestickData(30);
    const dataWithSignals = addTradingSignals(initialData);
    
    // 计算价格范围
    const prices = dataWithSignals.flatMap(d => [d.high, d.low]);
    const min = Math.min(...prices) * 0.995;
    const max = Math.max(...prices) * 1.005;
    setPriceRange({ min, max });
    
    // 设置数据
    setCandlestickData(dataWithSignals);
    
    // 启动动画序列
    const startAnimations = () => {
      // 首先显示图表
      setChartReady(true);
      
      // 然后显示AI评分
      setTimeout(() => {
        setShowAiScore(true);
        
        // 然后开始信号序列
        setTimeout(() => {
          startSignalSequence(dataWithSignals);
        }, 1000);
      }, 500);
    };
    
    // 使用setTimeout代替requestAnimationFrame，更可靠
    setTimeout(startAnimations, 100);
    
    // 清理函数
    return () => {
      setChartReady(false);
      setShowAiScore(false);
      setActiveSignalIndex(null);
      setShowOrderConfirmation(false);
      setCurrentSignalStep(0);
    };
  }, []);
  
  return (
    <div className="relative w-full h-full flex flex-col bg-white dark:bg-gray-900 rounded-lg p-4">
      {/* AI评分 */}
      <div className="flex justify-center mb-6">
        <motion.div 
          className="bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl px-6 py-2.5 flex items-center space-x-3 border border-gray-300/70 dark:border-gray-700/70 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: showAiScore ? 1 : 0, y: showAiScore ? 0 : -20, scale: showAiScore ? 1 : 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <BarChart3 size={18} className="text-blue-600 dark:text-blue-400 mr-1" />
          <span className="text-gray-800 dark:text-white text-sm font-medium">{t('automatedTrading.aiScore')}: </span>
          <motion.span 
            className="text-gray-800 dark:text-white text-lg font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <CountUp from={0} to={aiScore} duration={1.5} decimals={1} delay={0.5} />
          </motion.span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">/10</span>
          <div className="w-28 h-3 bg-gray-300/70 dark:bg-gray-700/70 rounded-full overflow-hidden ml-2 shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: showAiScore ? `${(aiScore / 10) * 100}%` : 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              style={{ boxShadow: "0 0 10px rgba(147, 51, 234, 0.5)" }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* 图表区域 */}
      <motion.div 
        className="relative flex-1 bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
          {/* 信号价格参考线 */}
          {activeSignalIndex !== null && (
            <motion.line 
              x1={margin.left} 
              y1={priceToY(candlestickData[activeSignalIndex].close)} 
              x2={chartWidth - margin.right} 
              y2={priceToY(candlestickData[activeSignalIndex].close)} 
              stroke={candlestickData[activeSignalIndex].signal.type === 'buy' ? upColor : downColor} 
              strokeWidth="1" 
              strokeDasharray="2,2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                filter: candlestickData[activeSignalIndex].signal.type === 'buy' ? upGlow : downGlow
              }}
            />
          )}
          
          {/* 背景网格线 */}
          {Array.from({ length: 5 }).map((_, i) => {
            const y = margin.top + (i * (chartHeight - margin.top - margin.bottom) / 4);
            return (
              <line 
                key={`grid-${i}`}
                x1={margin.left} 
                y1={y} 
                x2={chartWidth - margin.right} 
                y2={y} 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeDasharray="3,3"
                className="text-gray-300 dark:text-gray-600"
              />
            );
          })}
          
          {/* 绘制K线图 */}
          {candlestickData.map((candle, index) => {
            const x = index * (candleWidth + spacing);
            const openY = priceToY(candle.open);
            const closeY = priceToY(candle.close);
            const highY = priceToY(candle.high);
            const lowY = priceToY(candle.low);
            const isUp = candle.close >= candle.open;
            const color = isUp ? upColor : downColor;
            
            return (
              <g key={index}>
                {/* 影线 */}
                <line 
                  x1={x + candleWidth / 2} 
                  y1={highY} 
                  x2={x + candleWidth / 2} 
                  y2={lowY} 
                  stroke={color} 
                  strokeWidth="1.2" 
                  style={{ filter: isUp ? upGlow : downGlow }}
                />
                
                {/* 实体 */}
                <motion.rect 
                  x={x} 
                  y={isUp ? closeY : openY} 
                  width={candleWidth} 
                  height={Math.abs(closeY - openY) || 1} 
                  fill={color} 
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    filter: isUp ? upGlow : downGlow
                  }}
                  rx={1}
                  whileHover={{ scale: 1.05, opacity: 0.9 }}
                />
                
                {/* 交易信号 */}
                {candle.signal && (
                  <g>
                    {candle.signal.type === 'buy' ? (
                      // 买入信号
                      <g>
                        {/* 基本信号图标 */}
                        <circle 
                          cx={x + candleWidth / 2} 
                          cy={priceToY(candle.low) + 15} 
                          r="10"
                          fill="#22c55e"
                        />
                        <path 
                          d="M-4,0 L0,-4 L4,0 L0,4 Z" 
                          transform={`translate(${x + candleWidth / 2}, ${priceToY(candle.low) + 15})`}
                          fill="white"
                        />
                        
                        {/* 激活状态的额外效果 */}
                        {index === activeSignalIndex && (
                          <>
                            {/* 主脉冲圈 */}
                            <motion.circle 
                              cx={x + candleWidth / 2} 
                              cy={priceToY(candle.low) + 15} 
                              r="15" 
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="1"
                              initial={{ scale: 0.8, opacity: 0.8 }}
                              animate={{ 
                                scale: [0.8, 2, 0.8],
                                opacity: [0.8, 0, 0.8]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                              }}
                            />
                            
                            {/* 第二个脉冲圈 */}
                            <motion.circle 
                              cx={x + candleWidth / 2} 
                              cy={priceToY(candle.low) + 15} 
                              r="12" 
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="1"
                              initial={{ scale: 0.6, opacity: 0.6 }}
                              animate={{ 
                                scale: [0.6, 1.5, 0.6],
                                opacity: [0.6, 0, 0.6]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 2,
                                delay: 0.5,
                                ease: "easeInOut"
                              }}
                            />
                            
                            {/* 信号图标的脉冲效果 */}
                            <motion.circle 
                              cx={x + candleWidth / 2} 
                              cy={priceToY(candle.low) + 15} 
                              r="10"
                              fill="#22c55e"
                              animate={{ 
                                scale: [1, 1.1, 1],
                                filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                              }}
                              style={{
                                filter: "drop-shadow(0 0 5px #22c55e)"
                              }}
                            />
                          </>
                        )}
                      </g>
                    ) : (
                      // 卖出信号
                      <g>
                        <circle 
                          cx={x + candleWidth / 2} 
                          cy={priceToY(candle.high) - 15} 
                          r="10"
                          fill="#ef4444"
                        />
                        <path 
                          d="M-4,0 L0,4 L4,0 L0,-4 Z" 
                          transform={`translate(${x + candleWidth / 2}, ${priceToY(candle.high) - 15})`}
                          fill="white"
                        />
                        
                        {/* 激活状态的额外效果 */}
                        {index === activeSignalIndex && (
                          <>
                            {/* 主脉冲圈 */}
                            <motion.circle 
                              cx={x + candleWidth / 2} 
                              cy={priceToY(candle.high) - 15} 
                              r="15" 
                              fill="none"
                              stroke="#ef4444"
                              strokeWidth="1"
                              initial={{ scale: 0.8, opacity: 0.8 }}
                              animate={{ 
                                scale: [0.8, 2, 0.8],
                                opacity: [0.8, 0, 0.8]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                              }}
                            />
                            
                            {/* 信号图标的脉冲效果 */}
                            <motion.circle 
                              cx={x + candleWidth / 2} 
                              cy={priceToY(candle.high) - 15} 
                              r="10"
                              fill="#ef4444"
                              animate={{ 
                                scale: [1, 1.1, 1],
                                filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                              }}
                              style={{
                                filter: "drop-shadow(0 0 5px #ef4444)"
                              }}
                            />
                          </>
                        )}
                      </g>
                    )}
                  </g>
                )}
                
                {/* 信号标签 - 买入/卖出标签 */}
                {candle.signal && index === activeSignalIndex && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 25,
                      delay: 0.3
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* 标签背景 */}
                    <motion.rect 
                      x={x + candleWidth / 2 + 10} 
                      y={candle.signal.type === 'buy' ? priceToY(candle.low) + 5 : priceToY(candle.high) - 25} 
                      width="45" 
                      height="22" 
                      rx="6" 
                      fill={candle.signal.type === 'buy' ? '#22c55e' : '#ef4444'} 
                      animate={{
                        boxShadow: [
                          `0 0 0px ${candle.signal.type === 'buy' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                          `0 0 10px ${candle.signal.type === 'buy' ? 'rgba(34, 197, 94, 0.7)' : 'rgba(239, 68, 68, 0.7)'}`,
                          `0 0 0px ${candle.signal.type === 'buy' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut"
                        }
                      }}
                      style={{
                        filter: candle.signal.type === 'buy' ? upGlow : downGlow
                      }}
                    />
                    
                    {/* 标签图标 */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Tag 
                        size={10} 
                        x={x + candleWidth / 2 + 17} 
                        y={candle.signal.type === 'buy' ? priceToY(candle.low) + 11 : priceToY(candle.high) - 19} 
                        color="white" 
                        strokeWidth={2}
                      />
                    </motion.g>
                    
                    {/* 标签文字 */}
                    <motion.text 
                      x={x + candleWidth / 2 + 32} 
                      y={candle.signal.type === 'buy' ? priceToY(candle.low) + 18 : priceToY(candle.high) - 12} 
                      textAnchor="middle" 
                      fill="white" 
                      fontSize="11" 
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {candle.signal.type === 'buy' ? t('automatedTrading.actions.buy') : t('automatedTrading.actions.sell')}
                    </motion.text>
                    
                    {/* 策略线和标签 */}
                    <motion.g
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      {/* 策略连接线 */}
                      <motion.line
                        x1={x + candleWidth / 2}
                        y1={candle.signal.type === 'buy' ? priceToY(candle.low) + 15 : priceToY(candle.high) - 15}
                        x2={candle.signal.type === 'buy' ? x + candleWidth / 2 - 60 : x + candleWidth / 2}
                        y2={candle.signal.type === 'buy' ? priceToY(candle.low) - 20 : priceToY(candle.high) - 50}
                        stroke={candle.signal.type === 'buy' ? '#22c55e' : '#ef4444'}
                        strokeWidth="1"
                        strokeDasharray="3,3"
                        animate={{
                          strokeDashoffset: [0, -6]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear"
                        }}
                      />
                      
                      {/* 策略标签背景 */}
                      <motion.rect
                        x={candle.signal.type === 'buy' ? 
                          x + candleWidth / 2 - 120 : 
                          x + candleWidth / 2 - (candle.signal.strategy.length * 6 + 10) / 2}
                        y={candle.signal.type === 'buy' ? priceToY(candle.low) - 45 : priceToY(candle.high) - 75}
                        width={candle.signal.strategy.length * 6 + 10}
                        height="32"
                        rx="4"
                        className="fill-gray-800/90 dark:fill-gray-900/85"
                        stroke={candle.signal.type === 'buy' ? '#22c55e' : '#ef4444'}
                        strokeWidth="1"
                        animate={{
                          boxShadow: [
                            `0 0 5px ${candle.signal.type === 'buy' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                            `0 0 15px ${candle.signal.type === 'buy' ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'}`,
                            `0 0 5px ${candle.signal.type === 'buy' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                          ]
                        }}
                        transition={{
                          boxShadow: {
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                          }
                        }}
                      />
                      
                      {/* 策略名称 */}
                      <motion.text
                        x={candle.signal.type === 'buy' ? 
                          x + candleWidth / 2 - 120 + (candle.signal.strategy.length * 6 + 10) / 2 :
                          x + candleWidth / 2}
                        y={candle.signal.type === 'buy' ? priceToY(candle.low) - 32 : priceToY(candle.high) - 62}
                        textAnchor="middle"
                        fill={candle.signal.type === 'buy' ? '#22c55e' : '#ef4444'}
                        fontSize="9"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        {candle.signal.strategy}
                      </motion.text>
                      
                      {/* 天数标签 */}
                      <motion.text
                        x={candle.signal.type === 'buy' ? 
                          x + candleWidth / 2 - 120 + (candle.signal.strategy.length * 6 + 10) / 2 :
                          x + candleWidth / 2}
                        y={candle.signal.type === 'buy' ? priceToY(candle.low) - 23 : priceToY(candle.high) - 53}
                        textAnchor="middle"
                        className="fill-gray-500 dark:fill-gray-400"
                        fontSize="7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        {candle.signal.days}
                      </motion.text>
                    </motion.g>
                  </motion.g>
                )}
              </g>
            );
          })}
        </svg>
        
        {/* 交易确认框 */}
        <AnimatePresence>
          {showOrderConfirmation && activeSignalIndex !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25,
                delay: 0.3
              }}
              className={`fixed z-50 bg-white/98 dark:bg-gray-900/98 backdrop-blur-md p-2 rounded-md shadow-lg border ${
                orderDetails.type === 'buy' ? 'border-green-500/30' : 'border-red-500/30'
              }`}
              style={{ 
                bottom: '15px',
                right: '15px',
                width: 'auto',
                maxWidth: '220px',
                fontSize: '70%'
              }}
            >
              <div>
                {/* 标题和状态行 */}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center">
                    <Check size={10} className={`mr-1 ${orderDetails.type === 'buy' ? 'text-green-500' : 'text-red-500'}`} />
                    <span className="font-bold text-gray-800 dark:text-white text-[10px]">{t('automatedTrading.executionCount')}</span>
                  </div>
                  <div className={`px-1 py-0.5 rounded-full text-[8px] font-medium ${
                    orderDetails.type === 'buy' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {orderDetails.type === 'buy' ? t('automatedTrading.actions.buy') : t('automatedTrading.actions.sell')}
                  </div>
                </div>
                
                {/* 交易信息行 */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-1.5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <DollarSign size={8} className="mr-0.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-600 dark:text-gray-300 text-[9px]">{t('common.price')}:</span>
                    </div>
                    <span className="text-gray-800 dark:text-white font-bold text-[9px]">
                      $<CountUp from={0} to={parseFloat(orderDetails.price)} delay={0.7} />
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <BarChart3 size={8} className="mr-0.5 text-purple-600 dark:text-purple-400" />
                      <span className="text-gray-600 dark:text-gray-300 text-[9px]">{t('common.quantity')}:</span>
                    </div>
                    <span className="text-gray-800 dark:text-white font-bold text-[9px]">
                      <CountUp from={0} to={parseFloat(orderDetails.quantity)} delay={0.8} /> {t('common.shares')}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <DollarSign size={8} className={`mr-0.5 ${orderDetails.type === 'buy' ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`} />
                      <span className="text-gray-600 dark:text-gray-300 text-[9px]">{orderDetails.type === 'buy' ? t('common.totalAmount') : t('common.profit')}:</span>
                    </div>
                    <span className={`font-bold text-[9px] ${orderDetails.type === 'buy' ? 'text-gray-800 dark:text-white' : 'text-green-600 dark:text-green-400'}`}>
                      {orderDetails.type === 'buy' ? '$' : '+$'}<CountUp from={0} to={parseFloat(orderDetails.total)} decimals={1} delay={0.9} />
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock size={8} className="mr-0.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-600 dark:text-gray-300 text-[9px]">{t('common.time')}:</span>
                    </div>
                    <span className="text-gray-800 dark:text-white text-[9px]">
                      {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
                    </span>
                  </div>
                </div>
                
                {/* 策略信息 */}
                <div className="flex items-center justify-between mt-1 mb-1">
                  <div className="flex items-center">
                    <TrendingUp size={8} className="mr-0.5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-600 dark:text-gray-300 text-[9px]">{t('automatedTrading.strategyPerformance')}:</span>
                  </div>
                  <span className="text-gray-800 dark:text-white font-bold text-[9px]">
                    {candlestickData[activeSignalIndex]?.signal?.strategy || 'AI Strategy'}
                  </span>
                </div>
                
                {/* 底部提示 */}
                <div className="flex items-center mt-1 text-[8px] text-gray-500 dark:text-gray-400">
                  <AlertCircle size={7} className="mr-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>{t('automatedTrading.systemStatus')}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default EnhancedTradingSignalBoard;

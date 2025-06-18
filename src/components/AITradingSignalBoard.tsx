import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, Check, TrendingUp, AlertCircle } from 'lucide-react';
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
  // 在数据中随机选择2-3个点添加交易信号
  const signalCount = Math.floor(Math.random() * 2) + 2; // 2-3个信号
  const dataLength = data.length;
  const signalIndices = [];
  
  // 确保信号不会太靠近
  while (signalIndices.length < signalCount) {
    const index = Math.floor(Math.random() * (dataLength - 10)) + 5; // 避免最开始和最后的几个点
    if (!signalIndices.includes(index) && 
        !signalIndices.some(i => Math.abs(i - index) < 5)) { // 确保信号之间至少间隔5个点
      signalIndices.push(index);
    }
  }
  
  // 排序索引
  signalIndices.sort((a, b) => a - b);
  
  // 添加信号
  signalIndices.forEach((index, i) => {
    // 交替添加买入和卖出信号，但确保最后一个是买入信号
    const isBuy = i === signalIndices.length - 1 ? true : i % 2 === 0;
    data[index].signal = {
      type: isBuy ? 'buy' : 'sell',
      price: data[index].close.toFixed(2),
      strength: isBuy ? (Math.random() * 2 + 8).toFixed(1) : (Math.random() * 2 + 7).toFixed(1) // 8-10分或7-9分
    };
  });
  
  return data;
};

const AITradingSignalBoard = () => {
  const { t } = useTranslation();
  const [candlestickData, setCandlestickData] = useState<any[]>([]);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [activeSignalIndex, setActiveSignalIndex] = useState<number | null>(null);
  const [orderDetails, setOrderDetails] = useState({
    type: 'buy',
    price: '0',
    quantity: '0',
    total: '0'
  });
  const [aiScore] = useState((Math.random() * 1 + 8.5).toFixed(1)); // 8.5-9.5分
  
  useEffect(() => {
    // 生成初始数据
    const initialData = generateCandlestickData(30);
    const dataWithSignals = addTradingSignals(initialData);
    setCandlestickData(dataWithSignals);
    
    // 找到最后一个买入信号
    const lastBuySignalIndex = dataWithSignals.findIndex(d => d.signal && d.signal.type === 'buy');
    if (lastBuySignalIndex !== -1) {
      // 设置延迟，模拟实时数据更新后发现信号
      setTimeout(() => {
        setActiveSignalIndex(lastBuySignalIndex);
        
        // 显示下单确认
        setTimeout(() => {
          const signal = dataWithSignals[lastBuySignalIndex].signal;
          setOrderDetails({
            type: 'buy',
            price: signal.price,
            quantity: (10000 / parseFloat(signal.price)).toFixed(2),
            total: (10000).toFixed(2)
          });
          setShowOrderConfirmation(true);
        }, 1500);
      }, 2000);
    }
    
    // 模拟实时数据更新
    const interval = setInterval(() => {
      setCandlestickData(prev => {
        // 移除第一个数据点，添加一个新的数据点
        const newData = [...prev.slice(1)];
        const lastItem = newData[newData.length - 1];
        
        const volatility = (Math.random() * 3) + 0.5;
        const open = lastItem.close;
        const close = open + (Math.random() - 0.5) * volatility;
        const high = Math.max(open, close) + Math.random() * volatility;
        const low = Math.min(open, close) - Math.random() * volatility;
        
        newData.push({
          time: lastItem.time + 1,
          open,
          high,
          low,
          close,
          volume: Math.floor(Math.random() * 1000) + 500
        });
        
        return newData;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // 计算图表的最高和最低价格，用于缩放
  const minPrice = Math.min(...candlestickData.map(d => d.low)) - 5;
  const maxPrice = Math.max(...candlestickData.map(d => d.high)) + 5;
  const priceRange = maxPrice - minPrice;
  
  // 将价格转换为Y坐标
  const priceToY = (price: number) => {
    const height = 200; // 图表高度
    return height - ((price - minPrice) / priceRange) * height;
  };
  
  // 计算蜡烛宽度
  const candleWidth = 10;
  const spacing = 5;
  const totalWidth = candlestickData.length * (candleWidth + spacing);
  
  return (
    <div className="w-full h-full flex flex-col p-4 bg-gray-900 text-white relative overflow-hidden">
      {/* AI评分 */}
      <div className="absolute top-4 right-4 bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-500/30 shadow-lg z-10">
        <div className="flex items-center">
          <span className="text-gray-400 text-sm mr-2">{t('common.aiScore')}:</span>
          <span className="text-white font-bold">{aiScore}/10</span>
          <div className="ml-2 w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: `${(parseFloat(aiScore) / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* 主图表区域 */}
      <div className="flex-1 relative border border-gray-800 rounded-lg bg-gray-900 overflow-hidden">
        {/* 网格背景 */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        {/* 价格标签 */}
        <div className="absolute right-2 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-gray-500 py-2">
          <div>{maxPrice.toFixed(2)}</div>
          <div>{((maxPrice + minPrice) / 2).toFixed(2)}</div>
          <div>{minPrice.toFixed(2)}</div>
        </div>
        
        {/* K线图 */}
        <svg 
          className="w-full h-full" 
          viewBox={`0 0 ${totalWidth} 200`}
          preserveAspectRatio="none"
        >
          {/* 绘制K线 */}
          {candlestickData.map((candle, index) => {
            const x = index * (candleWidth + spacing);
            const openY = priceToY(candle.open);
            const closeY = priceToY(candle.close);
            const highY = priceToY(candle.high);
            const lowY = priceToY(candle.low);
            const isUp = candle.close >= candle.open;
            const color = isUp ? '#22c55e' : '#ef4444';
            
            return (
              <g key={index}>
                {/* 影线 */}
                <line 
                  x1={x + candleWidth / 2} 
                  y1={highY} 
                  x2={x + candleWidth / 2} 
                  y2={lowY} 
                  stroke={color} 
                  strokeWidth="1" 
                />
                
                {/* 实体 */}
                <rect 
                  x={x} 
                  y={isUp ? closeY : openY} 
                  width={candleWidth} 
                  height={Math.abs(closeY - openY) || 1} 
                  fill={color} 
                />
                
                {/* 交易信号 */}
                {candle.signal && (
                  <g>
                    {/* 信号箭头 */}
                    {candle.signal.type === 'buy' ? (
                      <g>
                        <circle 
                          cx={x + candleWidth / 2} 
                          cy={priceToY(candle.low) + 15} 
                          r="8" 
                          fill="#22c55e" 
                          opacity="0.3" 
                          className={`${index === activeSignalIndex ? 'animate-ping' : ''}`}
                        />
                        <circle 
                          cx={x + candleWidth / 2} 
                          cy={priceToY(candle.low) + 15} 
                          r="5" 
                          fill="#22c55e" 
                        />
                        <ArrowUp 
                          x={x + candleWidth / 2 - 3} 
                          y={priceToY(candle.low) + 12} 
                          size={6} 
                          color="white" 
                        />
                      </g>
                    ) : (
                      <g>
                        <circle 
                          cx={x + candleWidth / 2} 
                          cy={priceToY(candle.high) - 15} 
                          r="8" 
                          fill="#ef4444" 
                          opacity="0.3" 
                          className={`${index === activeSignalIndex ? 'animate-ping' : ''}`}
                        />
                        <circle 
                          cx={x + candleWidth / 2} 
                          cy={priceToY(candle.high) - 15} 
                          r="5" 
                          fill="#ef4444" 
                        />
                        <ArrowDown 
                          x={x + candleWidth / 2 - 3} 
                          y={priceToY(candle.high) - 18} 
                          size={6} 
                          color="white" 
                        />
                      </g>
                    )}
                    
                    {/* 信号标签 */}
                    {index === activeSignalIndex && (
                      <g>
                        <rect 
                          x={x + candleWidth / 2 + 10} 
                          y={candle.signal.type === 'buy' ? priceToY(candle.low) + 5 : priceToY(candle.high) - 25} 
                          width="40" 
                          height="20" 
                          rx="4" 
                          fill={candle.signal.type === 'buy' ? '#22c55e' : '#ef4444'} 
                          className="animate-pulse"
                        />
                        <text 
                          x={x + candleWidth / 2 + 30} 
                          y={candle.signal.type === 'buy' ? priceToY(candle.low) + 18 : priceToY(candle.high) - 12} 
                          textAnchor="middle" 
                          fill="white" 
                          fontSize="10" 
                          fontWeight="bold"
                        >
                          {candle.signal.type.toUpperCase()}
                        </text>
                      </g>
                    )}
                  </g>
                )}
              </g>
            );
          })}
        </svg>
        
        {/* 下单确认弹窗 */}
        {showOrderConfirmation && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800/95 backdrop-blur-md p-4 rounded-lg border border-green-500/30 shadow-lg z-20 w-64 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white flex items-center">
                <Check size={16} className="mr-1 text-green-500" />
                {t('automatedTrading.executionCount')}
              </h3>
              <div className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                {t('automatedTrading.actions.buy')}
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{t('common.price')}:</span>
                <span className="text-white">${orderDetails.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{t('common.quantity')}:</span>
                <span className="text-white">{orderDetails.quantity} {t('common.shares')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{t('common.totalAmount')}:</span>
                <span className="text-white">${orderDetails.total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{t('common.time')}:</span>
                <span className="text-white">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-400 flex items-start">
              <AlertCircle size={12} className="mr-1 mt-0.5 text-blue-400" />
              {t('automatedTrading.subtitle')}
            </div>
          </div>
        )}
      </div>
      
      {/* 底部注解 */}
      <div className="mt-4 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-blue-500/30 shadow-lg">
        <p className="text-gray-300 text-sm flex items-center">
          <TrendingUp size={14} className="mr-2 text-blue-400" />
          {t('automatedTrading.systemStatus')}
        </p>
      </div>
    </div>
  );
};

export default AITradingSignalBoard;

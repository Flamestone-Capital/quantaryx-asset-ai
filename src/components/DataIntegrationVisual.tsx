import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Brain, FileText, FileImage, FileSpreadsheet, FileBarChart, Database, ChartPie, BarChart3, ArrowRight, Receipt, FileType, MoveRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DataIntegrationVisual = () => {
  // Animation state
  const [currentStep, setCurrentStep] = useState(1); // 1: Unstructured, 2: Processing, 3: Structured
  const timersRef = useRef([]);

  // 清理定时器的函数
  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
  }, []);

  useEffect(() => {
    // Function to run the complete animation cycle
    const runAnimationCycle = () => {
      // 清理之前的定时器
      clearAllTimers();
      
      // Step 1 is already set initially
      
      // Move to step 2 (processing) after 2 seconds (减少等待时间)
      const step2Timer = setTimeout(() => {
        setCurrentStep(2);
        
        // Move to step 3 (results) after 2.5 more seconds
        const step3Timer = setTimeout(() => {
          setCurrentStep(3);
          
          // Reset back to step 1 after 3 more seconds to complete the cycle
          const resetTimer = setTimeout(() => {
            setCurrentStep(1);
            
            // Run the cycle again
            runAnimationCycle();
          }, 3000);
          
          timersRef.current.push(resetTimer);
        }, 2500);
        
        timersRef.current.push(step3Timer);
      }, 2000);
      
      timersRef.current.push(step2Timer);
    };
    
    // Start the animation cycle
    runAnimationCycle();
    
    // Cleanup function
    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

  // Source documents with random slight rotations
  const sourceDocuments = [
    { icon: <FileText className="text-blue-500 dark:text-blue-400" />, name: "財務報表.pdf", rotation: -5 },
    { icon: <FileImage className="text-yellow-500 dark:text-yellow-400" />, name: "發票掃描.jpg", rotation: 3 },
    { icon: <FileSpreadsheet className="text-green-500 dark:text-green-400" />, name: "數據表格.xlsx", rotation: -2 },
    { icon: <FileBarChart className="text-purple-500 dark:text-purple-400" />, name: "分析圖表.csv", rotation: 4 },
    { icon: <Receipt className="text-orange-500 dark:text-orange-400" />, name: "收據影像.png", rotation: -3 },
    { icon: <FileType className="text-red-500 dark:text-red-400" />, name: "手寫筆記.jpg", rotation: 6 }
  ];

  // Table data for the structured result
  const tableData = [
    { account: "投資帳戶 A", value: "$1,245,000", change: "+2.3%" },
    { account: "退休金計劃", value: "$845,600", change: "+1.7%" },
    { account: "房地產投資", value: "$1,650,000", change: "+0.5%" },
    { account: "現金儲備", value: "$320,000", change: "-0.2%" },
    { account: "股票投資", value: "$780,500", change: "+3.1%" },
    { account: "債券組合", value: "$560,200", change: "+0.8%" },
    { account: "外幣帳戶", value: "$215,300", change: "-1.2%" },
    { account: "私動基金", value: "$450,000", change: "+4.5%" }
  ];

  // Chart data for the pie chart
  const pieChartSegments = [
    { color: "#9b87f5", percent: 35, label: "股票" },
    { color: "#33C3F0", percent: 25, label: "債券" },
    { color: "#FF8042", percent: 20, label: "不動產" },
    { color: "#7E69AB", percent: 15, label: "另類投資" },
    { color: "#1EAEDB", percent: 5, label: "現金" }
  ];

  // Render the unstructured data section
  const renderUnstructuredData = () => (
    <motion.div
      key="unstructured"
      className="w-full max-w-lg flex flex-col items-center justify-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h3 className="text-slate-800 dark:text-white text-lg font-semibold mb-2">未結構化資料</h3>
      <p className="text-slate-600 dark:text-gray-300 text-xs mb-3 text-center max-w-md">
        各種不同格式的原始資料需要整合處理，包括文檔、圖像、表格等非結構化數據
      </p>
      
      <div className="grid grid-cols-3 gap-3 px-2">
        {sourceDocuments.map((doc, index) => (
          <motion.div 
            key={index}
            className="relative bg-white dark:bg-gray-800/80 rounded-lg border border-slate-200 dark:border-gray-700 p-2 flex flex-col items-center justify-center shadow-lg"
            style={{ height: '90px', width: '90px', rotate: `${doc.rotation}deg` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: index % 2 === 0 ? [0, -2, 0, 2, 0] : [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 0.3, 
              delay: 0.05 * index,
              x: { repeat: Infinity, duration: 4 + index * 0.3, ease: "easeInOut" }
            }}
          >
            <div className="text-2xl mb-1">{doc.icon}</div>
            <span className="text-xs text-slate-600 dark:text-gray-300 truncate w-full text-center">{doc.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Render the AI processing section
  const renderAIProcessing = () => (
    <motion.div
      key="processing"
      className="w-full max-w-lg flex flex-col items-center justify-center relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h3 className="text-slate-800 dark:text-white text-xl font-semibold mb-4">智能分析引擎</h3>
      <p className="text-slate-600 dark:text-gray-300 text-sm mb-6 text-center max-w-md">
        AI 引擎正在處理和分析未結構化數據，提取關鍵信息並轉換為結構化格式
      </p>
      
      <motion.div 
        className="relative w-64 h-64 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.02, 1],
          rotate: [0, 1, 0, -1, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        {/* Scanning circle */}
        <motion.div 
          className="absolute w-full h-full rounded-full border-2 border-indigo-300 dark:border-quantaryx-purple/30"
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Pulsing glow effect */}
        <motion.div 
          className="absolute w-40 h-40 rounded-full bg-indigo-100 dark:bg-quantaryx-purple/10"
          style={{ 
            filter: 'blur(20px)'
          }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* Scanning line */}
        <motion.div 
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 dark:via-quantaryx-purple/70 to-transparent"
          animate={{ 
            top: ['10%', '90%'],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Simplified Neural network connections - 减少数量 */}
        {Array.from({ length: 6 }).map((_, index) => {
          const angle = (index / 6) * Math.PI * 2;
          const x = Math.cos(angle) * 50;
          const y = Math.sin(angle) * 50;
          
          return (
            <motion.div 
              key={index}
              className="absolute w-1 h-1 bg-indigo-500 dark:bg-quantaryx-purple rounded-full"
              style={{ 
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`
              }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2
              }}
            />
          );
        })}
        
        {/* Brain icon in the center */}
        <motion.div
          className="relative z-10 bg-white dark:bg-gray-800 rounded-full p-4 border border-indigo-200 dark:border-quantaryx-purple/30"
          animate={{
            boxShadow: ['0 0 8px rgba(99,102,241,0.3)', '0 0 16px rgba(99,102,241,0.4)', '0 0 8px rgba(99,102,241,0.3)']
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 3, 0, -3, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Brain className="h-8 w-8 text-indigo-600 dark:text-quantaryx-purple" />
          </motion.div>
        </motion.div>
        
        {/* Simplified Particle effects - 减少数量和复杂度 */}
        {Array.from({ length: 6 }).map((_, index) => {
          const angle = (index / 6) * Math.PI * 2;
          const distance = 70;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          
          return (
            <motion.div 
              key={`particle-${index}`}
              className="absolute bg-indigo-400 dark:bg-quantaryx-purple/70 rounded-full w-1 h-1"
              style={{ 
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`
              }}
              animate={{ 
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.3
              }}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );

  // Render the structured data section
  const renderStructuredData = () => (
    <motion.div
      key="structured"
      className="w-full max-w-lg flex flex-col items-center justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h3 className="text-slate-800 dark:text-white text-xl font-semibold mb-4">結構化資料</h3>
      <p className="text-slate-600 dark:text-gray-300 text-sm mb-6 text-center max-w-md">
        經過AI處理後的數據已被轉換為結構化格式，可用於分析和決策
      </p>
      
      <div className="space-y-6 w-full max-w-md">
        {/* Financial report card */}
        <motion.div 
          className="bg-white dark:bg-gray-800/80 rounded-lg border border-slate-200 dark:border-gray-700 overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {/* Card header */}
          <div className="bg-slate-100 dark:bg-gray-700/60 px-4 py-3 flex justify-between items-center border-b border-slate-200 dark:border-gray-600">
            <div className="flex items-center">
              <BarChart3 className="h-5 w-5 text-indigo-600 dark:text-quantaryx-purple mr-2" />
              <span className="text-slate-800 dark:text-white font-medium">財務報表</span>
            </div>
            <span className="text-xs text-slate-600 dark:text-gray-300">自動生成</span>
          </div>
          
          {/* Table with scrolling */}
          <div className="overflow-y-auto max-h-[200px] custom-scrollbar">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 dark:bg-gray-700/50 sticky top-0 z-10">
                <tr>
                  <th className="py-2 px-4 text-left text-slate-700 dark:text-gray-300 font-medium">帳戶</th>
                  <th className="py-2 px-4 text-right text-slate-700 dark:text-gray-300 font-medium">價值</th>
                  <th className="py-2 px-4 text-right text-slate-700 dark:text-gray-300 font-medium">變化</th>
                </tr>
              </thead>
              <tbody>
                {tableData.slice(0, 4).map((row, index) => (
                  <motion.tr 
                    key={index}
                    className="border-t border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700/30 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 + (index * 0.05) }}
                  >
                    <td className="py-2 px-4 text-slate-800 dark:text-white">{row.account}</td>
                    <td className="py-2 px-4 text-right font-medium text-slate-800 dark:text-white" style={{ color: row.account === "房地產投資" ? "#33C3F0" : undefined }}>{row.value}</td>
                    <td className={`py-2 px-4 text-right font-medium ${row.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {row.change}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Asset distribution chart */}
        <motion.div 
          className="bg-white dark:bg-gray-800/80 rounded-lg border border-slate-200 dark:border-gray-700 p-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex items-center mb-3">
            <ChartPie className="h-5 w-5 text-indigo-600 dark:text-quantaryx-purple mr-2" />
            <span className="text-slate-800 dark:text-white font-medium">資產分布</span>
          </div>
          
          <div className="flex items-center justify-between">
            {/* Pie chart */}
            <motion.div 
              className="relative h-24 w-24"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="relative w-full h-full">
                {pieChartSegments.map((segment, index) => {
                  // Calculate the segment position in the circle
                  const startAngle = pieChartSegments
                    .slice(0, index)
                    .reduce((sum, s) => sum + s.percent, 0) * 3.6; // 3.6 = 360/100
                  const endAngle = startAngle + segment.percent * 3.6;
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5 + (index * 0.05) }}
                      style={{
                        background: `conic-gradient(${segment.color} ${startAngle}deg ${endAngle}deg, transparent ${endAngle}deg 360deg)`,
                        borderRadius: '50%'
                      }}
                    />
                  );
                })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Legend */}
            <div className="flex-1 pl-4">
              <ul className="text-xs space-y-1">
                {pieChartSegments.slice(0, 3).map((segment, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 + (index * 0.05) }}
                  >
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: segment.color }}></span>
                      <span className="text-slate-600 dark:text-gray-300">{segment.label}</span>
                    </div>
                    <span className="font-medium text-xs" style={{ color: segment.color }}>{segment.percent}%</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full h-full bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-lg overflow-hidden relative border border-slate-200 dark:border-0">
      {/* Grid background for tech feel - only in dark mode */}
      <div className="absolute inset-0 bg-grid opacity-0 dark:opacity-5"></div>
      
      <div className="relative w-full h-full p-3 flex flex-col">
        <h2 className="text-slate-800 dark:text-white text-center mb-2 font-semibold text-xl">智能資料整合流程</h2>
        
        {/* Flow process indicators */}
        <div className="flex justify-center mb-3 text-xs text-slate-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className={`px-2 py-1 rounded-md transition-all duration-200 ${currentStep === 1 ? 'bg-indigo-100 dark:bg-quantaryx-purple/20 text-slate-800 dark:text-white font-medium' : 'bg-slate-100 dark:bg-gray-800/60'}`}>未結構化資料</span>
            <motion.div 
              animate={{ x: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="mx-1"
            >
              <MoveRight className={`h-4 w-4 ${currentStep === 1 ? 'text-indigo-600 dark:text-quantaryx-purple' : 'text-indigo-400 dark:text-quantaryx-purple/50'}`} />
            </motion.div>
            <span className={`px-2 py-1 rounded-md transition-all duration-200 ${currentStep === 2 ? 'bg-indigo-100 dark:bg-quantaryx-purple/20 text-slate-800 dark:text-white font-medium' : 'bg-slate-100 dark:bg-gray-800/60'}`}>智能處理</span>
            <motion.div 
              animate={{ x: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="mx-1"
            >
              <MoveRight className={`h-4 w-4 ${currentStep === 2 ? 'text-indigo-600 dark:text-quantaryx-purple' : 'text-indigo-400 dark:text-quantaryx-purple/50'}`} />
            </motion.div>
            <span className={`px-2 py-1 rounded-md transition-all duration-200 ${currentStep === 3 ? 'bg-indigo-100 dark:bg-quantaryx-purple/20 text-slate-800 dark:text-white font-medium' : 'bg-slate-100 dark:bg-gray-800/60'}`}>結構化資料</span>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentStep === 1 && renderUnstructuredData()}
            {currentStep === 2 && renderAIProcessing()}
            {currentStep === 3 && renderStructuredData()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DataIntegrationVisual;

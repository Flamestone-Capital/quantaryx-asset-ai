import React, { useEffect, useState } from 'react';
import { Brain, FileText, FileImage, FileSpreadsheet, FileBarChart, Database, ChartPie, BarChart3, ArrowRight, Receipt, FileType, MoveRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DataIntegrationVisual = () => {
  // Animation state
  const [currentStep, setCurrentStep] = useState(1); // 1: Unstructured, 2: Processing, 3: Structured

  useEffect(() => {
    // Function to run the complete animation cycle
    const runAnimationCycle = () => {
      // Step 1 is already set initially
      
      // Move to step 2 (processing) after 3 seconds
      const step2Timer = setTimeout(() => {
        setCurrentStep(2);
        
        // Move to step 3 (results) after 4 more seconds
        const step3Timer = setTimeout(() => {
          setCurrentStep(3);
          
          // Reset back to step 1 after 4 more seconds to complete the cycle
          const resetTimer = setTimeout(() => {
            setCurrentStep(1);
            
            // Run the cycle again
            runAnimationCycle();
          }, 4000);
          
          return () => clearTimeout(resetTimer);
        }, 4000);
        
        return () => clearTimeout(step3Timer);
      }, 3000);
      
      return () => clearTimeout(step2Timer);
    };
    
    // Start the animation cycle
    runAnimationCycle();
    
    // Cleanup function
    return () => {
      // Cleanup is handled by the nested returns in runAnimationCycle
    };
  }, []);

  // Source documents with random slight rotations
  const sourceDocuments = [
    { icon: <FileText className="text-blue-400" />, name: "財務報表.pdf", rotation: -5 },
    { icon: <FileImage className="text-yellow-400" />, name: "發票掃描.jpg", rotation: 3 },
    { icon: <FileSpreadsheet className="text-green-400" />, name: "數據表格.xlsx", rotation: -2 },
    { icon: <FileBarChart className="text-purple-400" />, name: "分析圖表.csv", rotation: 4 },
    { icon: <Receipt className="text-orange-400" />, name: "收據影像.png", rotation: -3 },
    { icon: <FileType className="text-red-400" />, name: "手寫筆記.jpg", rotation: 6 }
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
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-white text-lg font-semibold mb-2">未結構化資料</h3>
      <p className="text-gray-300 text-xs mb-3 text-center max-w-md">
        各種不同格式的原始資料需要整合處理，包括文檔、圖像、表格等非結構化數據
      </p>
      
      <div className="grid grid-cols-3 gap-3 px-2">
        {sourceDocuments.map((doc, index) => (
          <motion.div 
            key={index}
            className="relative bg-gray-800/80 rounded-lg border border-gray-700 p-2 flex flex-col items-center justify-center shadow-lg"
            style={{ height: '90px', width: '90px', rotate: `${doc.rotation}deg` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: index % 2 === 0 ? [0, -3, 0, 3, 0] : [0, 3, 0, -3, 0],
              y: index % 3 === 0 ? [0, 3, 0, -3, 0] : [0, -3, 0, 3, 0]
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.1 * index,
              x: { repeat: Infinity, duration: 3 + index * 0.5, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 4 + index * 0.5, ease: "easeInOut" }
            }}
          >
            <div className="text-2xl mb-1">{doc.icon}</div>
            <span className="text-xs text-gray-300 truncate w-full text-center">{doc.name}</span>
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
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-white text-xl font-semibold mb-4">智能分析引擎</h3>
      <p className="text-gray-300 text-sm mb-6 text-center max-w-md">
        AI 引擎正在處理和分析未結構化數據，提取關鍵信息並轉換為結構化格式
      </p>
      
      <motion.div 
        className="relative w-64 h-64 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0, -2, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* Scanning circle */}
        <motion.div 
          className="absolute w-full h-full rounded-full border-2 border-quantaryx-purple/30"
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Pulsing glow effect */}
        <motion.div 
          className="absolute w-40 h-40 rounded-full bg-quantaryx-purple/10"
          style={{ 
            filter: 'blur(20px)'
          }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Scanning line */}
        <motion.div 
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-quantaryx-purple/70 to-transparent"
          animate={{ 
            top: [0, '100%'],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{ 
            top: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />
        
        {/* Neural network connections */}
        {Array.from({ length: 8 }).map((_, index) => {
          const angle = (index / 8) * Math.PI * 2;
          const x = Math.cos(angle) * 60;
          const y = Math.sin(angle) * 60;
          
          return (
            <motion.div 
              key={index}
              className="absolute w-1 h-1 bg-quantaryx-purple rounded-full"
              style={{ 
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1 + (index * 0.2), 
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.1
              }}
            >
              <motion.div 
                className="absolute h-px"
                style={{ 
                  width: '60px',
                  background: 'linear-gradient(90deg, rgba(155,135,245,0.7) 0%, rgba(155,135,245,0) 100%)',
                  transformOrigin: '0 0',
                  transform: `rotate(${angle + Math.PI}rad)`
                }}
                animate={{ 
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.1
                }}
              />
            </motion.div>
          );
        })}
        
        {/* Brain icon in the center */}
        <motion.div
          className="relative z-10 bg-gray-800 rounded-full p-4 border border-quantaryx-purple/30"
          animate={{
            boxShadow: ['0 0 10px rgba(155,135,245,0.3)', '0 0 20px rgba(155,135,245,0.5)', '0 0 10px rgba(155,135,245,0.3)']
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            <Brain className="h-12 w-12 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Particle effects */}
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index / 12) * Math.PI * 2;
          const distance = 80 + Math.random() * 40;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const size = 1 + Math.random() * 2;
          
          return (
            <motion.div 
              key={`particle-${index}`}
              className="absolute bg-quantaryx-purple/70 rounded-full"
              style={{ 
                width: `${size}px`,
                height: `${size}px`,
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`
              }}
              animate={{ 
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 2 + Math.random() * 2, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2
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
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-white text-xl font-semibold mb-4">結構化資料</h3>
      <p className="text-gray-300 text-sm mb-6 text-center max-w-md">
        經過AI處理後的數據已被轉換為結構化格式，可用於分析和決策
      </p>
      
      <div className="space-y-6 w-full max-w-md">
        {/* Financial report card */}
        <motion.div 
          className="bg-gray-800/80 rounded-lg border border-gray-700 overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Card header */}
          <div className="bg-gray-700/60 px-4 py-3 flex justify-between items-center border-b border-gray-600">
            <div className="flex items-center">
              <BarChart3 className="h-5 w-5 text-quantaryx-purple mr-2" />
              <span className="text-white font-medium">財務報表</span>
            </div>
            <span className="text-xs text-gray-300">自動生成</span>
          </div>
          
          {/* Table with scrolling */}
          <div className="overflow-y-auto max-h-[200px] custom-scrollbar">
            <table className="w-full text-sm">
              <thead className="bg-gray-700/50 sticky top-0 z-10">
                <tr>
                  <th className="py-2 px-4 text-left text-gray-300 font-medium">帳戶</th>
                  <th className="py-2 px-4 text-right text-gray-300 font-medium">價值</th>
                  <th className="py-2 px-4 text-right text-gray-300 font-medium">變化</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <motion.tr 
                    key={index}
                    className="border-t border-gray-700 hover:bg-gray-700/30 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  >
                    <td className="py-2 px-4 text-white">{row.account}</td>
                    <td className="py-2 px-4 text-right font-medium" style={{ color: row.account === "房地產投資" ? "#33C3F0" : "white" }}>{row.value}</td>
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
          className="bg-gray-800/80 rounded-lg border border-gray-700 p-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center mb-3">
            <ChartPie className="h-5 w-5 text-quantaryx-purple mr-2" />
            <span className="text-white font-medium">資產分布</span>
          </div>
          
          <div className="flex items-center justify-between">
            {/* Pie chart */}
            <motion.div 
              className="relative h-32 w-32"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
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
                      transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      style={{
                        background: `conic-gradient(${segment.color} ${startAngle}deg ${endAngle}deg, transparent ${endAngle}deg 360deg)`,
                        borderRadius: '50%'
                      }}
                    />
                  );
                })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Legend */}
            <div className="flex-1 pl-6">
              <ul className="text-sm space-y-2">
                {pieChartSegments.map((segment, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                  >
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: segment.color }}></span>
                      <span className="text-gray-300">{segment.label}</span>
                    </div>
                    <span className="font-medium" style={{ color: segment.color }}>{segment.percent}%</span>
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
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden relative">
      {/* Grid background for tech feel */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="relative w-full h-full p-3 flex flex-col">
        <h2 className="text-white text-center mb-2 font-semibold text-xl">智能資料整合流程</h2>
        
        {/* Flow process indicators */}
        <div className="flex justify-center mb-3 text-xs text-gray-400">
          <div className="flex items-center">
            <span className={`px-2 py-1 rounded-md transition-all duration-300 ${currentStep === 1 ? 'bg-quantaryx-purple/20 text-white font-medium' : 'bg-gray-800/60'}`}>未結構化資料</span>
            <motion.div 
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-1"
            >
              <MoveRight className={`h-4 w-4 ${currentStep === 1 ? 'text-quantaryx-purple' : 'text-quantaryx-purple/50'}`} />
            </motion.div>
            <span className={`px-2 py-1 rounded-md transition-all duration-300 ${currentStep === 2 ? 'bg-quantaryx-purple/20 text-white font-medium' : 'bg-gray-800/60'}`}>智能處理</span>
            <motion.div 
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-1"
            >
              <MoveRight className={`h-4 w-4 ${currentStep === 2 ? 'text-quantaryx-purple' : 'text-quantaryx-purple/50'}`} />
            </motion.div>
            <span className={`px-2 py-1 rounded-md transition-all duration-300 ${currentStep === 3 ? 'bg-quantaryx-purple/20 text-white font-medium' : 'bg-gray-800/60'}`}>結構化資料</span>
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

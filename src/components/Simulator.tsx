import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AssetCard from "./AssetCard";

// 市场情境选项
const marketScenarios = [
  { value: "bull", label: "牛市" },
  { value: "bear", label: "熊市" },
  { value: "volatile", label: "高波動" },
];

// 各种市场情境下的投资建议
const investmentRecommendations = {
  bull: [
    { assetName: "股票ETF", percentage: 70, icon: "📈" },
    { assetName: "債券", percentage: 20, icon: "📊" },
    { assetName: "現金", percentage: 10, icon: "💰" },
  ],
  bear: [
    { assetName: "股票ETF", percentage: 30, icon: "📉" },
    { assetName: "債券", percentage: 50, icon: "🛡️" },
    { assetName: "現金", percentage: 20, icon: "💰" },
  ],
  volatile: [
    { assetName: "股票ETF", percentage: 40, icon: "📊" },
    { assetName: "債券", percentage: 40, icon: "🛡️" },
    { assetName: "黃金/大宗商品", percentage: 20, icon: "⚖️" },
  ],
};

// 老虎机滚动时显示的资产选项
const slotOptions = [
  { icon: "📈", color: "from-green-500 to-green-600" },
  { icon: "📉", color: "from-red-500 to-red-600" },
  { icon: "📊", color: "from-blue-500 to-blue-600" },
  { icon: "🛡️", color: "from-indigo-500 to-indigo-600" },
  { icon: "💰", color: "from-yellow-500 to-yellow-600" },
  { icon: "⚖️", color: "from-purple-500 to-purple-600" },
];

const Simulator = () => {
  const [selectedScenario, setSelectedScenario] = useState("bull");
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [insertedCoin, setInsertedCoin] = useState(false);
  const [spinResults, setSpinResults] = useState<Array<number>>([0, 0, 0]);
  
  // 处理投币
  const handleInsertCoin = () => {
    if (isSpinning) return;
    setInsertedCoin(true);
    
    // 播放投币声音效果
    const coinSound = new Audio("/sounds/coin.mp3");
    coinSound.volume = 0.5;
    coinSound.play().catch(e => console.log("自动播放被阻止", e));
  };
  
  // 处理拉杆/开始旋转
  const handlePullLever = () => {
    if (!insertedCoin || isSpinning) return;
    
    setIsSpinning(true);
    setShowResults(false);
    setInsertedCoin(false);
    
    // 播放老虎机旋转声音
    const spinSound = new Audio("/sounds/slot-machine.mp3");
    spinSound.volume = 0.3;
    spinSound.play().catch(e => console.log("自动播放被阻止", e));
    
    // 模拟老虎机停止的时间点 (每个滚轮停止的时间不同)
    const recommendations = investmentRecommendations[selectedScenario as keyof typeof investmentRecommendations];
    
    // 为每个滚轮设置停止时间和最终结果
    setTimeout(() => {
      // 第一个滚轮停止
      setSpinResults(prev => [
        getIconIndexForAsset(recommendations[0].icon),
        prev[1],
        prev[2]
      ]);
      
      setTimeout(() => {
        // 第二个滚轮停止
        setSpinResults(prev => [
          prev[0],
          getIconIndexForAsset(recommendations[1].icon),
          prev[2]
        ]);
        
        setTimeout(() => {
          // 第三个滚轮停止
          setSpinResults(prev => [
            prev[0],
            prev[1],
            getIconIndexForAsset(recommendations[2].icon)
          ]);
          
          // 全部停止后显示结果并播放胜利声音
          setTimeout(() => {
            setIsSpinning(false);
            setShowResults(true);
            const winSound = new Audio("/sounds/win.mp3");
            winSound.volume = 0.5;
            winSound.play().catch(e => console.log("自动播放被阻止", e));
          }, 500);
        }, 600);
      }, 600);
    }, 1000);
  };

  // 处理情境选择变化
  const handleScenarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (isSpinning) return;
    setSelectedScenario(e.target.value);
    setShowResults(false);
  };
  
  // 获取资产对应的图标索引
  const getIconIndexForAsset = (assetIcon: string) => {
    return slotOptions.findIndex(option => option.icon === assetIcon) || 0;
  };
  
  // 生成随机滚动项目
  const getRandomItems = (currentIndex: number, count: number) => {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push(Math.floor(Math.random() * slotOptions.length));
    }
    items.push(currentIndex); // 确保最后一个是目标结果
    return items;
  };

  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900 relative">
      {/* 背景图层 */}
      <div className="absolute inset-0 bg-[url('/images/investment-bg.svg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 p-4 md:p-6">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-white mb-1">AI自動投資優化模擬器</h2>
          <p className="text-slate-400 text-xs">選擇市場情境，拉動老虎機獲取投資建議</p>
        </div>
        
        <div className="mx-auto max-w-md">
          {/* 情境选择 */}
          <div className="mb-3">
            <label className="block text-slate-300 text-xs font-medium mb-1">選擇市場情境</label>
            <select
              value={selectedScenario}
              onChange={handleScenarioChange}
              disabled={isSpinning}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {marketScenarios.map((scenario) => (
                <option key={scenario.value} value={scenario.value}>
                  {scenario.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* 老虎机 */}
          <div className="mt-4 bg-slate-800 rounded-xl border-4 border-indigo-900/80 shadow-lg p-4 overflow-hidden">
            {/* 老虎机显示窗口 */}
            <div className="bg-slate-900 p-3 rounded-lg mb-4 flex justify-between items-center">
              <div className="flex space-x-2 mx-auto">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <AnimatePresence>
                      {isSpinning ? (
                        <motion.div
                          key={`spinning-${index}`}
                          className="absolute h-full w-full"
                          initial={{ y: 0 }}
                          animate={{ 
                            y: [0, -500, 0], 
                            transition: { 
                              repeat: index === 0 ? 2 : index === 1 ? 3 : 4, 
                              duration: 0.6,
                              ease: "linear",
                            } 
                          }}
                        >
                          {getRandomItems(spinResults[index], 5).map((item, idx) => (
                            <div 
                              key={`slot-${index}-${idx}`} 
                              className={`h-16 w-16 flex items-center justify-center bg-gradient-to-b ${slotOptions[item].color}`}
                            >
                              <span className="text-3xl">{slotOptions[item].icon}</span>
                            </div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div 
                          key={`result-${index}`}
                          initial={{ scale: showResults ? 0.8 : 1 }}
                          animate={{ scale: showResults ? [0.8, 1.2, 1] : 1 }}
                          transition={{ duration: 0.5 }}
                          className={`h-16 w-16 flex items-center justify-center bg-gradient-to-b ${
                            spinResults[index] !== undefined ? 
                            slotOptions[spinResults[index]].color : 
                            "from-gray-500 to-gray-600"
                          }`}
                        >
                          <span className="text-3xl">
                            {spinResults[index] !== undefined ? 
                             slotOptions[spinResults[index]].icon : "❓"}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 投币区域 */}
            <div className="flex justify-between items-center">
              <motion.button 
                whileTap={!isSpinning ? { scale: 0.9 } : {}}
                onClick={handleInsertCoin}
                disabled={insertedCoin || isSpinning}
                className={`relative w-12 h-12 rounded-full ${
                  insertedCoin ? "bg-yellow-600" : "bg-yellow-500 hover:bg-yellow-400"
                } shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200`}
              >
                <span className="absolute inset-0 flex items-center justify-center text-xl">🪙</span>
              </motion.button>
              
              {/* 拉杆区域 */}
              <div className="relative">
                <motion.button
                  whileTap={insertedCoin && !isSpinning ? { y: 30 } : {}}
                  onClick={handlePullLever}
                  disabled={!insertedCoin || isSpinning}
                  className="relative z-10 w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <span className="text-2xl">🎮</span>
                </motion.button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-16 bg-gradient-to-b from-red-700 to-red-900 rounded-b-lg"></div>
              </div>
              
              {/* 状态指示灯 */}
              <div className={`w-12 h-12 rounded-full border-4 ${
                isSpinning ? "border-yellow-500 animate-pulse" : 
                insertedCoin ? "border-green-500" : "border-red-500"
              } flex items-center justify-center`}>
                <div className={`w-8 h-8 rounded-full ${
                  isSpinning ? "bg-yellow-500 animate-pulse" : 
                  insertedCoin ? "bg-green-500" : "bg-red-500"
                }`}></div>
              </div>
            </div>
          </div>
          
          {/* 结果展示 */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 overflow-hidden"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg font-medium text-white mb-3"
                >
                  AI推薦投資組合:
                </motion.h3>
                <div className="space-y-3">
                  {investmentRecommendations[selectedScenario as keyof typeof investmentRecommendations].map((asset, index) => (
                    <AssetCard
                      key={asset.assetName}
                      assetName={asset.assetName}
                      percentage={asset.percentage}
                      icon={asset.icon}
                      delay={index * 0.2}
                    />
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-4 p-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg"
                >
                  <div className="flex items-start">
                    <div className="text-cyan-400 mr-2">💡</div>
                    <p className="text-xs text-slate-300">
                      <span className="font-medium text-cyan-400">AI智能洞察：</span> 根據您選擇的{marketScenarios.find(s => s.value === selectedScenario)?.label}情境，AI老虎機計算出此配置能夠平衡收益與風險。
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Simulator; 
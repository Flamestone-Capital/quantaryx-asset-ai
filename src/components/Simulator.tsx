import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AssetCard from "./AssetCard";
import { useTranslation } from 'react-i18next';

// 市场情境选项
const marketScenarios = [
  { value: "bull", label: "simulator.marketScenarios.bull" },
  { value: "bear", label: "simulator.marketScenarios.bear" },
  { value: "volatile", label: "simulator.marketScenarios.volatile" },
];

// 各种市场情境下的投资建议
const investmentRecommendations = {
  bull: [
    { assetName: "simulator.assets.aiTech", percentage: 60, icon: "💻" },
    { assetName: "simulator.assets.bonds", percentage: 30, icon: "📜" },
    { assetName: "simulator.assets.gold", percentage: 10, icon: "🔶" },
  ],
  bear: [
    { assetName: "simulator.assets.aiTech", percentage: 20, icon: "💻" },
    { assetName: "simulator.assets.bonds", percentage: 60, icon: "📜" },
    { assetName: "simulator.assets.gold", percentage: 20, icon: "🔶" },
  ],
  volatile: [
    { assetName: "simulator.assets.aiTech", percentage: 40, icon: "💻" },
    { assetName: "simulator.assets.bonds", percentage: 30, icon: "📜" },
    { assetName: "simulator.assets.gold", percentage: 30, icon: "🔶" },
  ],
};

// 老虎机卷轴元素 - 简化版
const slotItems = [
  { 
    name: "simulator.assets.gold", 
    icon: <div className="bg-yellow-100 dark:bg-indigo-900/60 rounded-md w-8 h-8 flex items-center justify-center border border-yellow-300 dark:border-indigo-400/30">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,4 16,12 12,20 8,12" fill="none" stroke="#EAB308" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="#EAB308" />
      </svg>
    </div>,
    label: "simulator.assets.gold"
  },
  { 
    name: "simulator.assets.aiStocks", 
    icon: <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center">
      <span className="text-xs text-white font-bold">AI</span>
    </div>,
    label: "simulator.assets.aiStocks"
  },
  { 
    name: "simulator.assets.bonds", 
    icon: <div className="bg-purple-100 dark:bg-indigo-900/60 rounded-md w-8 h-8 flex items-center justify-center border border-purple-300 dark:border-indigo-400/30">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M5 9h14" stroke="#8b5cf6" strokeWidth="2" />
      </svg>
    </div>,
    label: "simulator.assets.bonds"
  },
];

// 根据市场情境预设结果
const marketResults = {
  bull: [1, 1, 2], // 两个AI股和一个债券（索引1, 1, 2）
  bear: [2, 2, 0], // 两个债券和一个黄金（索引2, 2, 0）
  volatile: [1, 0, 2] // 一个AI股，一个黄金和一个债券（索引1, 0, 2）
};

const Simulator = () => {
  const { t, i18n } = useTranslation();
  const [selectedScenario, setSelectedScenario] = useState("bull");
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [hasInsertedCoin, setHasInsertedCoin] = useState(false);
  const [leverPulled, setLeverPulled] = useState(false);
  
  // 老虎机卷轴状态
  const [reels, setReels] = useState([
    { items: [...slotItems], currentIndex: 1, spinning: false },
    { items: [...slotItems], currentIndex: 1, spinning: false },
    { items: [...slotItems], currentIndex: 2, spinning: false },
  ]);

  // 获取分析完成的本地化文本
  const getAnalysisCompleteText = () => {
    const scenarioTranslation = t(`simulator.marketScenarios.${selectedScenario}`);
    if (i18n.language === 'zh') {
      return `AI已為${scenarioTranslation}條件生成最佳投資配置`;
    } else {
      return `AI has generated optimal investment allocation for ${scenarioTranslation} market conditions`;
    }
  };

  // 获取AI洞察的本地化文本  
  const getInsightText = () => {
    const scenarioTranslation = t(`simulator.marketScenarios.${selectedScenario}`);
    if (i18n.language === 'zh') {
      return `根據您選擇的${scenarioTranslation}市場情境，AI推薦上述資產配置以平衡收益和風險。此策略考慮了當前市場波動性和長期增長潛力。`;
    } else {
      return `Based on your selected ${scenarioTranslation} market scenario, AI recommends the above asset allocation to balance returns and risks. This strategy considers current market volatility and long-term growth potential.`;
    }
  };

  // 处理投币事件
  const handleInsertCoin = () => {
    if (isSpinning) return;
    
    // 播放投币音效（可选）
    const coinSound = new Audio("/sounds/coin.mp3");
    try {
      coinSound.play();
    } catch (e) {
      console.log("Browser blocked auto-play audio");
    }
    
    setHasInsertedCoin(true);
  };

  // 处理拉杆事件
  const handlePullLever = () => {
    if (isSpinning || !hasInsertedCoin) return;
    
    setIsSpinning(true);
    setShowResults(false);
    setHasInsertedCoin(false);
    setLeverPulled(true);
    
    // 播放老虎机旋转音效（可选）
    const spinSound = new Audio("/sounds/spin.mp3");
    try {
      spinSound.play();
    } catch (e) {
      console.log("Browser blocked auto-play audio");
    }
    
    // 设置每个卷轴旋转 
    const newReels = reels.map((reel, index) => ({
      ...reel,
      spinning: true,
    }));
    setReels(newReels);
    
    // 根据选择的市场情境预设结果
    const results = marketResults[selectedScenario];
    
    // 依次停止卷轴旋转，并显示预设结果
    setTimeout(() => {
      setReels(prev => {
        const newReels = [...prev];
        newReels[0].spinning = false;
        newReels[0].currentIndex = results[0]; // 使用预设结果
        return newReels;
      });
    }, 1500);
    
    setTimeout(() => {
      setReels(prev => {
        const newReels = [...prev];
        newReels[1].spinning = false;
        newReels[1].currentIndex = results[1]; // 使用预设结果
        return newReels;
      });
    }, 2000);
    
    setTimeout(() => {
      setReels(prev => {
        const newReels = [...prev];
        newReels[2].spinning = false;
        newReels[2].currentIndex = results[2]; // 使用预设结果
        return newReels;
      });
      
      // 完成旋转后显示结果
      setTimeout(() => {
        setIsSpinning(false);
        setShowResults(true);
        setLeverPulled(false);
        
        // 播放中奖音效（可选）
        const winSound = new Audio("/sounds/win.mp3");
        try {
          winSound.play();
        } catch (e) {
          console.log("Browser blocked auto-play audio");
        }
      }, 500);
    }, 2500);
  };

  // 处理情境选择变化
  const handleScenarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (isSpinning) return;
    setSelectedScenario(e.target.value);
    setShowResults(false);
    
    // 根据选择的市场情境预设初始图标
    const initialResults = marketResults[e.target.value];
    setReels(prev => prev.map((reel, index) => ({
      ...reel,
      currentIndex: initialResults[index]
    })));
  };

  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-slate-900 relative">
      {/* 背景图层 */}
      <div className="absolute inset-0 bg-[url('/images/investment-bg.svg')] bg-cover bg-center opacity-5 dark:opacity-20"></div>
      
      <div className="relative z-10 p-4 md:p-6 h-[450px] overflow-auto scrollbar-thin scrollbar-thumb-indigo-500/30 scrollbar-track-transparent">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-indigo-400 mb-2">
            {t('simulator.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">{t('simulator.subtitle')}</p>
        </div>
        
        <div className="max-w-md mx-auto">
          {/* 情境选择 */}
          <div className="mb-4">
            <label className="block text-slate-600 dark:text-slate-300 text-sm font-medium mb-2">{t('simulator.selectMarket')}</label>
            <div className="relative">
              <select
                value={selectedScenario}
                onChange={handleScenarioChange}
                disabled={isSpinning}
                className="w-full bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-300 dark:border-indigo-500/30 rounded-lg p-3 text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 shadow-sm dark:shadow-[0_0_15px_rgba(79,70,229,0.15)] appearance-none"
              >
                {marketScenarios.map((scenario) => (
                  <option key={scenario.value} value={scenario.value}>
                    {t(scenario.label)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-slate-400 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* 老虎机 - 更具未来感的设计 */}
          <div className="mt-5 mb-5">
            <motion.div 
              className="bg-white dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 shadow-lg dark:shadow-[0_0_30px_rgba(79,70,229,0.3)] relative overflow-hidden border border-slate-200 dark:border-indigo-500/30"
              initial={{ boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              animate={{ 
                boxShadow: isSpinning 
                  ? "0 10px 15px -3px rgb(0 0 0 / 0.1)" 
                  : "0 4px 6px -1px rgb(0 0 0 / 0.1)" 
              }}
              transition={{ duration: 0.5, repeat: isSpinning ? Infinity : 0, repeatType: "reverse" }}
            >
              {/* 霓虹边缘装饰 - 只在暗色模式显示 */}
              <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 dark:opacity-50" 
                style={{
                  background: "linear-gradient(90deg, #4f46e5 0%, #06b6d4 25%, transparent 50%, #06b6d4 75%, #4f46e5 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shineEffect 5s linear infinite"
                }}
              ></div>
              
              <div className="relative">
                {/* 老虎机顶部 - 更加金属质感 */}
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-200 dark:border-indigo-500/30">
                  <div className="text-slate-800 dark:text-white font-bold text-lg flex items-center">
                    <motion.div
                      animate={{ rotate: isSpinning ? 360 : 0 }}
                      transition={{ duration: 3, repeat: isSpinning ? Infinity : 0, ease: "linear" }}
                      className="mr-2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-xs">AI</span>
                    </motion.div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400">{t('simulator.aiMachine')}</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: "1s" }}></div>
                  </div>
                </div>
                
                {/* 老虎机卷轴区域 - 3D效果增强 */}
                <div className="relative rounded-lg overflow-hidden mb-6">
                  {/* 光晕效果 - 只在暗色模式显示 */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-indigo-500/20 opacity-0 dark:opacity-${isSpinning ? '70' : '30'} transition-opacity duration-300 pointer-events-none z-10`}></div>
                  
                  {/* 3D边框效果 - 只在暗色模式显示 */}
                  <div className="absolute inset-0 border-t-2 border-l-2 border-r-2 border-b-4 border-transparent dark:border-cyan-500/20 rounded-lg pointer-events-none"></div>
                  
                  <div className="flex justify-around gap-3 bg-slate-50 dark:bg-slate-900 p-5 rounded-lg shadow-inner border border-slate-200 dark:border-slate-700 relative">
                    {/* 光线照射效果 - 只在暗色模式显示 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent dark:from-cyan-500/5 dark:via-transparent dark:to-indigo-500/5 pointer-events-none"></div>
                    
                    {reels.map((reel, reelIndex) => (
                      <div 
                        key={reelIndex} 
                        className="w-24 h-28 bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-indigo-500/30 relative shadow-sm dark:shadow-[inset_0_0_15px_rgba(79,70,229,0.2)]"
                      >
                        {/* 渐变叠加层 - 只在暗色模式显示 */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent dark:from-cyan-500/10 dark:to-indigo-500/10 mix-blend-overlay pointer-events-none"></div>
                        
                        {/* 光晕反射 - 只在暗色模式显示 */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-transparent to-transparent dark:via-cyan-500/10 opacity-0 dark:opacity-50 blur-xl pointer-events-none"></div>
                        
                        {/* 卷轴遮罩 */}
                        <div className="absolute left-0 right-0 top-0 h-10 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                        <div className="absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                        
                        {/* 卷轴中心点 */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-transparent z-0"></div>
                        
                        {/* 固定位置的当前图标（非旋转时显示） */}
                        {!reel.spinning && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div className="mb-1">
                              {slotItems[reel.currentIndex].icon}
                            </div>
                            <span className="text-[8px] text-slate-800 dark:text-white font-bold">{t(slotItems[reel.currentIndex].label)}</span>
                          </div>
                        )}
                        
                        {/* 旋转卷轴（仅在旋转时显示） */}
                        {reel.spinning && (
                          <motion.div 
                            className="absolute inset-0 flex flex-col items-center"
                            animate={{ y: [-500, 500] }}
                            transition={{ 
                              duration: 0.5,
                              ease: "linear",
                              repeat: Infinity
                            }}
                          >
                            {[...slotItems, ...slotItems, ...slotItems].map((item, index) => (
                              <div 
                                key={index} 
                                className="h-28 flex flex-col items-center justify-center"
                              >
                                <div className="mb-1">
                                  {item.icon}
                                </div>
                                <span className="text-[8px] text-slate-800 dark:text-white font-bold">{t(item.label)}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 投币和拉杆区域 - 增强视觉效果 */}
                <div className="flex justify-between items-center relative">
                  {/* 投币按钮 - 更具未来感 */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleInsertCoin}
                    disabled={isSpinning || hasInsertedCoin}
                    className={`relative group ${isSpinning || hasInsertedCoin ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
                    <div className="relative flex flex-col items-center">
                      {/* 投币按钮 */}
                      <div className="h-16 w-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border border-yellow-700 relative group-hover:shadow-yellow-500/50 transition-all duration-300">
                        <div className="absolute inset-2 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 opacity-80"></div>
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]"></div>
                        
                        <div className="relative z-10 font-bold text-yellow-900 text-sm flex flex-col items-center justify-center leading-tight">
                          {hasInsertedCoin ? (
                            "✓"
                          ) : i18n.language === 'zh' ? (
                            <>
                              <div>投入</div>
                              <div>代币</div>
                            </>
                          ) : (
                            <div className="text-xs">{t('simulator.insertCoin')}</div>
                          )}
                        </div>
                        
                        {hasInsertedCoin && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 rounded-full border-4 border-yellow-300 border-opacity-50"
                          ></motion.div>
                        )}
                      </div>
                      <span className="mt-2 text-yellow-600 dark:text-yellow-500 font-medium text-xs bg-white/80 dark:bg-slate-900/80 px-2 py-1 rounded-full backdrop-blur-sm border border-slate-200 dark:border-0">{t('simulator.insertCoinLabel')}</span>
                    </div>
                  </motion.button>
                  
                  {/* 中间装饰线 */}
                  <div className="h-1 flex-grow mx-2 bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0 rounded"></div>
                  
                  {/* 拉杆 - 更具赛博朋克风格 */}
                  <motion.button
                    whileHover={hasInsertedCoin && !isSpinning ? { scale: 1.05 } : {}}
                    whileTap={hasInsertedCoin && !isSpinning ? { y: 20 } : {}}
                    onClick={handlePullLever}
                    disabled={isSpinning || !hasInsertedCoin}
                    className={`relative flex flex-col items-center ${isSpinning || !hasInsertedCoin ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex flex-col items-center relative">
                      {/* 拉杆基座 */}
                      <div className="w-12 h-4 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full relative">
                        <div className="absolute inset-x-3 inset-y-0 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full"></div>
                      </div>
                      
                      {/* 拉杆杆身 */}
                      <motion.div 
                        className="w-4 h-16 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full relative"
                        animate={{ y: leverPulled ? 15 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* 发光效果 */}
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_5px_rgba(255,255,255,0.5)]"></div>
                        
                        {/* 杆柄 */}
                        <motion.div 
                          className="absolute -top-1 inset-x-0 w-10 h-10 -mx-3 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg border border-red-800"
                          initial={{ boxShadow: "0 0 5px rgba(239,68,68,0.5)" }}
                          animate={{ 
                            boxShadow: hasInsertedCoin && !isSpinning 
                              ? ["0 0 10px rgba(239,68,68,0.7)", "0 0 20px rgba(239,68,68,0.5)", "0 0 10px rgba(239,68,68,0.7)"] 
                              : "0 0 5px rgba(239,68,68,0.3)" 
                          }}
                          transition={{ duration: 1.5, repeat: hasInsertedCoin && !isSpinning ? Infinity : 0, repeatType: "reverse" }}
                        >
                          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-70"></div>
                        </motion.div>
                      </motion.div>
                      
                      <span className="mt-2 text-red-500 dark:text-red-400 font-medium text-xs bg-white/80 dark:bg-slate-900/80 px-2 py-1 rounded-full backdrop-blur-sm border border-slate-200 dark:border-0">{t('simulator.pullLever')}</span>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* 结果展示区域 - 使用相对定位而非绝对定位 */}
          <div className="relative">
            <AnimatePresence>
              {showResults && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6"
                >
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 p-4 bg-gradient-to-r from-slate-100/80 via-indigo-50/80 to-cyan-50/80 dark:from-indigo-600/30 dark:to-cyan-500/30 rounded-lg border border-slate-200/50 dark:border-indigo-500/30 shadow-sm dark:shadow-[0_0_15px_rgba(79,70,229,0.2)]"
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="text-2xl mr-3"
                        animate={{ rotate: [0, 10, -10, 10, 0] }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        🎰
                      </motion.div>
                      <div>
                        <h3 className="text-slate-800 dark:text-white font-bold">{t('simulator.analysisComplete')}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          {getAnalysisCompleteText()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-cyan-400 dark:to-indigo-400 mb-4"
                  >
                    {t('simulator.aiRecommendation')}
                  </motion.h3>
                  <div className="space-y-4">
                    {investmentRecommendations[selectedScenario as keyof typeof investmentRecommendations].map((asset, index) => (
                      <AssetCard
                        key={asset.assetName}
                        assetName={asset.assetName}
                        percentage={asset.percentage}
                        icon={asset.icon}
                        delay={index * 0.3}
                      />
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-6 p-4 bg-gradient-to-r from-slate-50/90 via-indigo-50/70 to-cyan-50/70 dark:from-indigo-900/30 dark:to-cyan-900/30 rounded-lg border border-slate-200/50 dark:border-indigo-500/30 shadow-sm dark:shadow-lg"
                  >
                    <div className="flex items-start">
                      <motion.div 
                        className="text-indigo-500 dark:text-cyan-400 mr-3 mt-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💡
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-indigo-600 dark:text-cyan-400 mb-1">{t('simulator.aiInsightTitle')}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {getInsightText()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* 赛博朋克风格的全局动画效果 */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shineEffect {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        /* 自定义滚动条样式 */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(79, 70, 229, 0.3);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(79, 70, 229, 0.5);
        }
      `}} />
    </div>
  );
};

export default Simulator; 
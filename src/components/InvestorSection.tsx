import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const InvestorPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center dark:text-white">投資者資料</h3>
            <p className="text-xl mb-6 text-center text-gray-600 dark:text-gray-300">
              即將上線，敬請期待
            </p>
            
            <Button 
              onClick={onClose}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full py-6 hover:from-blue-600 hover:to-purple-700"
            >
              我知道了
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const InvestorSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const investorBenefits = [
    "革命性 AI 資產管理技術，重新定義財富管理市場",
    "龐大高凈值個人與機構投資者客戶群體",
    "全面產品矩陣，完整覆蓋資產管理全流程",
    "高度可擴展的 SaaS 商業模式",
    "專業團隊融合 AI、金融與產品開發經驗"
  ];

  return (
    <div id="investors" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-left opacity-0 animate-fade-in">
              投資機會
            </h2>
            <p className="text-xl mb-8 text-white/80 text-left opacity-0 animate-fade-in animate-delay-100">
              QuantaryX 正在尋求下一輪融資以加速產品開發與市場擴張。我們邀請有遠見的投資者成為重新定義資產管理未來的一部分。
            </p>
            
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <ul className="space-y-4 text-left mb-8">
                {investorBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <Button 
                onClick={() => setShowPopup(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
              >
                投資者資料包
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-10 opacity-0 animate-fade-in animate-delay-400">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-left">市場機會</h3>
              
              <div className="space-y-6 text-left">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">全球高凈值個人市場</span>
                    <span className="font-bold">$80+ 兆美元</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">家族辦公室管理資產</span>
                    <span className="font-bold">$5.9+ 兆美元</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">金融科技年增長率</span>
                    <span className="font-bold">23.4%</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: "40%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">AI 財富管理市場潛力</span>
                    <span className="font-bold">$4.2+ 兆美元</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <InvestorPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
}

export default InvestorSection;

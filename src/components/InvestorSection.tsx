import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

const InvestorPopup = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  
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
            
            <h3 className="text-2xl font-bold mb-4 text-center dark:text-white">{t('investors.popup.title')}</h3>
            <p className="text-xl mb-6 text-center text-gray-600 dark:text-gray-300">
              {t('investors.popup.comingSoon')}
            </p>
            
            <Button 
              onClick={onClose}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full py-6 hover:from-blue-600 hover:to-purple-700"
            >
              {t('investors.popup.understood')}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const InvestorSection = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  
  const investorBenefits = t('investors.opportunity.benefits', { returnObjects: true }) as string[];

  return (
    <div id="investors" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-slate-800 dark:text-white relative overflow-hidden">
      {/* 背景纹理 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(79,70,229,0.05)_1px,transparent_0)] [background-size:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-left opacity-0 animate-fade-in">
              {t('investors.opportunity.title')}
            </h2>
            <p className="text-xl mb-8 text-slate-600 dark:text-white/80 text-left opacity-0 animate-fade-in animate-delay-100">
              {t('investors.opportunity.description')}
            </p>
            
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <ul className="space-y-4 text-left mb-8">
                {investorBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-slate-700 dark:text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <Button 
                onClick={() => setShowPopup(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg"
              >
                {t('investors.opportunity.investorPackage')}
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-10 opacity-0 animate-fade-in animate-delay-400">
            <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-indigo-200 dark:border-gray-700 shadow-xl shadow-indigo-900/5 dark:shadow-none">
              <h3 className="text-2xl font-bold mb-6 text-left text-slate-800 dark:text-white">{t('investors.marketOpportunity.title')}</h3>
              
              <div className="space-y-6 text-left">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-700 dark:text-white">{t('investors.marketOpportunity.globalHNWI')}</span>
                    <span className="font-bold text-slate-800 dark:text-white">{t('investors.marketOpportunity.globalHNWIValue')}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-full">
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-700 dark:text-white">{t('investors.marketOpportunity.familyOffice')}</span>
                    <span className="font-bold text-slate-800 dark:text-white">{t('investors.marketOpportunity.familyOfficeValue')}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-full">
                    <div className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-700 dark:text-white">{t('investors.marketOpportunity.fintechGrowth')}</span>
                    <span className="font-bold text-slate-800 dark:text-white">{t('investors.marketOpportunity.fintechGrowthValue')}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-full">
                    <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: "40%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-700 dark:text-white">{t('investors.marketOpportunity.aiWealthManagement')}</span>
                    <span className="font-bold text-slate-800 dark:text-white">{t('investors.marketOpportunity.aiWealthManagementValue')}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-full">
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

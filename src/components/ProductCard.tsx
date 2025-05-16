import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  index: number;
  linkUrl?: string; // 可选的链接URL属性
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ReactNode;
  color: string;
  isFinora: boolean;
  onContactClick: () => void;
  onDemoClick: () => void;
}

const Popup: React.FC<PopupProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  icon, 
  color, 
  isFinora, 
  onContactClick, 
  onDemoClick 
}) => {
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
            
            <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
              {icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center dark:text-white">{title}</h3>
            
            {isFinora ? (
              <>
                <p className="text-xl mb-6 text-center text-gray-600 dark:text-gray-300">
                  全方位的個人財務管理與資產分析平台
                </p>
                <Button 
                  onClick={onDemoClick}
                  className={`${color} hover:brightness-110 text-white w-full py-6`}
                >
                  查看演示
                </Button>
              </>
            ) : (
              <>
                <p className="text-xl mb-6 text-center text-gray-600 dark:text-gray-300">
                  即將上線，敬請期待
                </p>
                <Button 
                  onClick={onContactClick}
                  className={`${color} hover:brightness-110 text-white w-full py-6`}
                >
                  加入等候名單
                </Button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, icon, features, color, index, linkUrl }) => {
  const delay = 100 * (index + 1);
  const [showPopup, setShowPopup] = useState(false);
  
  const handleClick = () => {
    setShowPopup(true);
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setShowPopup(false);
  };

  const openWebsite = () => {
    if (linkUrl) {
      window.open(linkUrl, '_blank');
    }
    setShowPopup(false);
  };
  
  return (
    <>
      <div 
        className={`opacity-0 animate-fade-in`} 
        style={{ animationDelay: `${delay}ms` }}
      >
        <div 
          className="h-full gradient-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-700 bg-gray-800/90 hover:bg-gray-800 cursor-pointer"
          onClick={handleClick}
        >
          <div className="p-6">
            <div className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${color}`}>
              {icon}
            </div>
            
            <h3 className="text-xl font-bold mb-1 flex items-center">
              <span className="text-white font-medium">
                {title}
              </span>
            </h3>
            
            <p className="text-gray-300 italic mb-4 text-sm">{subtitle}</p>
            
            <ul className="space-y-2 text-left">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className={`h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-2 ${color} text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-sm text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title={title}
        icon={icon}
        color={color}
        isFinora={title === "Finora"}
        onContactClick={scrollToContact}
        onDemoClick={openWebsite}
      />
    </>
  );
};

export default ProductCard;

import React from 'react';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();
  
  // 合作伙伴数据 - 支持多种图片格式
  const partners = [
    {
      name: "Flamestone Capital",
      logo: "/partners/flamestone.png", // 支持PNG格式
      alt: "Flamestone Capital Logo"
    },
    {
      name: "LEO Asset Management",
      logo: "/partners/leo.png", // 支持PNG格式
      alt: "LEO Asset Management Logo"
    },
    {
      name: "CITIC Securities CLSA",
      logo: "/partners/citic-clsa.png", // 支持PNG格式
      alt: "CITIC Securities CLSA Logo"
    },
    {
      name: "Oriental Patron",
      logo: "/partners/oriental-patron.png", // 支持PNG格式
      alt: "Oriental Patron Logo"
    },
    {
      name: "丰鑫投资",
      logo: "/partners/fengxin.png", // 支持PNG格式
      alt: "丰鑫投资 Logo"
    }
  ];

  return (
    <div className="bg-white dark:bg-black py-16 overflow-hidden relative">
      {/* 背景纹理 - 只在明亮模式显示 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(79,70,229,0.03)_1px,transparent_0)] [background-size:20px_20px] dark:hidden"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
          {t('partners.title')}
        </h2>
        
        <div className="relative">
          {/* 走马灯容器 */}
          <div className="overflow-hidden w-full">
            {/* 连续滚动的容器 */}
            <div className="flex animate-infinite-scroll">
              {/* 第一组 */}
              {partners.map((partner, index) => (
                <div 
                  key={`set1-${index}`} 
                  className="w-48 h-32 bg-white dark:bg-gray-800 flex items-center justify-center p-6 rounded-lg shadow-lg border border-slate-200 dark:border-gray-600 flex-shrink-0 mx-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="max-w-full max-h-full object-contain filter dark:brightness-90"
                  />
                </div>
              ))}
              
              {/* 第二组 - 确保无缝循环 */}
              {partners.map((partner, index) => (
                <div 
                  key={`set2-${index}`} 
                  className="w-48 h-32 bg-white dark:bg-gray-800 flex items-center justify-center p-6 rounded-lg shadow-lg border border-slate-200 dark:border-gray-600 flex-shrink-0 mx-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="max-w-full max-h-full object-contain filter dark:brightness-90"
                  />
                </div>
              ))}

              {/* 第三组 - 额外确保平滑 */}
              {partners.map((partner, index) => (
                <div 
                  key={`set3-${index}`} 
                  className="w-48 h-32 bg-white dark:bg-gray-800 flex items-center justify-center p-6 rounded-lg shadow-lg border border-slate-200 dark:border-gray-600 flex-shrink-0 mx-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="max-w-full max-h-full object-contain filter dark:brightness-90"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* 渐变遮罩效果 */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Partners; 
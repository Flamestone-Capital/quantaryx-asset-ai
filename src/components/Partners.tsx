import React from 'react';

const Partners = () => {
  // 合作伙伴图标数组，可以根据需要添加更多
  const partners = [
    {
      name: "Oriental Patron",
      logo: "/partners/oriental-patron.svg",
      alt: "Oriental Patron Logo"
    },
    {
      name: "Flamestone",
      logo: "/partners/flamestone.svg",
      alt: "Flamestone Logo"
    },
    {
      name: "丰鑫投资",
      logo: "/partners/fengxin.svg",
      alt: "丰鑫投资 Logo"
    },
    {
      name: "LEO Asset Management",
      logo: "/partners/leo.svg",
      alt: "LEO Asset Management Logo"
    },
    // 重复伙伴以实现无缝滚动效果
    {
      name: "Oriental Patron",
      logo: "/partners/oriental-patron.svg",
      alt: "Oriental Patron Logo"
    },
    {
      name: "Flamestone",
      logo: "/partners/flamestone.svg",
      alt: "Flamestone Logo"
    },
    {
      name: "丰鑫投资",
      logo: "/partners/fengxin.svg",
      alt: "丰鑫投资 Logo"
    },
    {
      name: "LEO Asset Management",
      logo: "/partners/leo.svg",
      alt: "LEO Asset Management Logo"
    },
  ];

  return (
    <div className="bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          合作夥伴
        </h2>
        
        <div className="relative">
          {/* 跑马灯容器 */}
          <div className="relative overflow-hidden w-full">
            {/* 第一个滚动行 */}
            <div className="flex space-x-12 animate-marquee">
              {partners.slice(0, 4).map((partner, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="w-36 h-36 bg-white flex items-center justify-center p-4 rounded-md shadow-lg flex-shrink-0"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* 复制一份以实现无缝循环 */}
            <div className="flex space-x-12 animate-marquee-reverse absolute top-0 left-0">
              {partners.slice(4, 8).map((partner, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="w-36 h-36 bg-white flex items-center justify-center p-4 rounded-md shadow-lg flex-shrink-0"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners; 
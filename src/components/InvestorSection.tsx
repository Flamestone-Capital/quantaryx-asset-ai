
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const InvestorSection = () => {
  const investorBenefits = [
    "革命性 AI 資產管理技術，重新定義財富管理市場",
    "龐大高凈值個人與機構投資者客戶群體",
    "全面產品矩陣，完整覆蓋資產管理全流程",
    "高度可擴展的 SaaS 商業模式",
    "專業團隊融合 AI、金融與產品開發經驗"
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-quantaryx-darkblue to-quantaryx-purple/90 text-white">
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
                    <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-3 bg-white text-quantaryx-purple">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <Button className="bg-white text-quantaryx-purple hover:bg-white/90">
                投資者資料包
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-10 opacity-0 animate-fade-in animate-delay-400">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-left">市場機會</h3>
              
              <div className="space-y-6 text-left">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">全球高凈值個人市場</span>
                    <span className="font-bold">$80+ 兆美元</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">家族辦公室管理資產</span>
                    <span className="font-bold">$5.9+ 兆美元</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">金融科技年增長率</span>
                    <span className="font-bold">23.4%</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">AI 財富管理市場潛力</span>
                    <span className="font-bold">$4.2+ 兆美元</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorSection;


import React from 'react';
import { Brain, Shield, ArrowRight } from 'lucide-react';

const Vision = () => {
  return (
    <div id="vision" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl opacity-0 animate-fade-in">
            我們的<span className="text-gradient">願景</span>
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4 opacity-0 animate-fade-in animate-delay-100">
            QuantaryX 要做的，不是做一個好用的財務工具。我們要做的是一個讓未來的個人與機構能夠用 AI 認知資產、掌控財富、並擴張價值的操作平台。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="opacity-0 animate-fade-in animate-delay-200 bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left">認知資產</h3>
            <p className="text-gray-500 text-left">
              運用 AI 深度學習技術，將分散的財務數據整合為完整的資產全景，讓您真正理解資金流向與投資狀況。
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-300 bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left">掌控財富</h3>
            <p className="text-gray-500 text-left">
              透過自動化策略執行與智能風險監控，讓您在複雜多變的市場中始終保持主動掌控，而非被動應對。
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-400 bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <ArrowRight className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left">擴張價值</h3>
            <p className="text-gray-500 text-left">
              藉由 AI 驅動的投資決策支持與市場機會識別，協助您在適當時機擴展投資組合，實現長期價值增長。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;


import React from 'react';
import ProductCard from './ProductCard';
import { Brain, BarChart, Users, Search } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "Finora",
      subtitle: "讓你第一次完整掌握自己的財務人生。",
      icon: <Brain className="h-6 w-6 text-white" />,
      features: [
        "AI 財務大腦：為每筆交易、每個資產建立關聯圖譜",
        "自動解析財務文件：報表、轉帳紀錄自動整合",
        "財務狀況即時可視化：多維度淨值走勢與分析",
        "資產變動 AI 預警系統：主動告知風險或錯誤配置"
      ],
      color: "bg-blue-500",
    },
    {
      title: "Wiselens",
      subtitle: "讓 AI 幫你組投資組合、幫你下單、還幫你換倉。",
      icon: <BarChart className="h-6 w-6 text-white" />,
      features: [
        "即時投資儀表板：基金表現、NAV 一眼看清",
        "AI ETF 組合推薦系統：根據畫像設計組合",
        "策略型自動交易引擎：支援訂投、止損、止盈",
        "一鍵下單 + API 串接券商/銀行：直接執行"
      ],
      color: "bg-purple-500",
    },
    {
      title: "NuroCRM",
      subtitle: "幫你記得每一個對話背後的意圖，預測下一步該說什麼。",
      icon: <Users className="h-6 w-6 text-white" />,
      features: [
        "語音/對話內容語意分析：識別情緒波動、偏好",
        "智能行動建議與產品配對：生成潛在推薦",
        "關係深度提醒系統：主動提醒適當跟進時機",
        "會前摘要 & 客戶個性報告自動生成"
      ],
      color: "bg-green-500",
    },
    {
      title: "DealLens",
      subtitle: "你不需要再 manually 看 50 份 pitch deck，AI 幫你挑出值得關注的。",
      icon: <Search className="h-6 w-6 text-white" />,
      features: [
        "自動抓取投資案源：從多渠道同步 PDF、Deck",
        "AI 摘要提煉與評級建議：提取關鍵資訊",
        "自動比對歷史案例：找出相似投資案例",
        "可操作的投資紀錄系統：完整節點管理"
      ],
      color: "bg-orange-500",
    }
  ];

  return (
    <div id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl opacity-0 animate-fade-in">
            <span className="text-gradient">四大產品矩陣</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 opacity-0 animate-fade-in animate-delay-100">
            QuantaryX 為高資產個人與專業投資者打造的完整解決方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              subtitle={product.subtitle}
              icon={product.icon}
              features={product.features}
              color={product.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

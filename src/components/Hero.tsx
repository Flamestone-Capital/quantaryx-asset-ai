import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Activity, ChartBar, Database, Search, Briefcase, TrendingUp, BarChart3, ChartPie, Repeat } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { advancedFeatures } from './hero/constants';
import Simulator from './Simulator';
import DataIntegrationVisual from './DataIntegrationVisual';

const mockData = [
  { month: '1月', value: 40 },
  { month: '2月', value: 60 },
  { month: '3月', value: 30 },
  { month: '4月', value: 70 },
  { month: '5月', value: 50 },
  { month: '6月', value: 80 },
  { month: '7月', value: 40 },
  { month: '8月', value: 90 },
  { month: '9月', value: 60 },
  { month: '10月', value: 70 },
  { month: '11月', value: 50 },
  { month: '12月', value: 60 },
];

const pieData = [
  { name: '股票', value: 35 },
  { name: '債券', value: 20 },
  { name: '不動產', value: 25 },
  { name: '另類投資', value: 15 },
  { name: '現金', value: 5 },
];

const portfolioData = [
  { date: '1/1', value: 100 },
  { date: '2/1', value: 105 },
  { date: '3/1', value: 110 },
  { date: '4/1', value: 108 },
  { date: '5/1', value: 115 },
  { date: '6/1', value: 125 },
  { date: '7/1', value: 135 },
  { date: '8/1', value: 145 },
  { date: '9/1', value: 155 },
  { date: '10/1', value: 170 },
  { date: '11/1', value: 165 },
  { date: '12/1', value: 180 },
];

const COLORS = ['#9b87f5', '#33C3F0', '#FF8042', '#7E69AB', '#1EAEDB'];

const AIFeatures = [
  {
    icon: <Brain className="h-5 w-5" />,
    title: "智慧資產分析",
    description: "AI強化的資產淨值趨勢預測與風險識別"
  },
  {
    icon: <ChartBar className="h-5 w-5" />,
    title: "自動投資優化",
    description: "基於市場行為的AI驅動投資策略調整"
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "智能資料整合",
    description: "多源財務數據自動解析與關聯構建"
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "投資機會識別",
    description: "AI篩選高價值投資標的與市場時機"
  }
];

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showSimulator, setShowSimulator] = useState(false);
  const [chartType, setChartType] = useState('bar'); // 'bar', 'line', 'pie', 'advanced'
  const [showDataIntegration, setShowDataIntegration] = useState(false);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setShowAIInsight(true);
    
    // Reset all special views first
    setShowSimulator(false);
    setShowDataIntegration(false);
    
    // Change chart type based on the selected feature
    switch(index) {
      case 0: // 智慧資產分析
        setChartType('bar');
        break;
      case 1: // 自動投資優化
        setShowSimulator(true);
        break;
      case 2: // 智能資料整合
        setShowDataIntegration(true);
        break;
      case 3: // 投資機會識別
        setChartType('advanced');
        break;
      default:
        setChartType('bar');
    }
  };

  const handleAdvancedFeatureClick = (feature: any) => {
    setSelectedFeature(feature);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const renderChart = (chartType: string) => {
    if (chartType === 'pie') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, '占比']}
              labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              itemStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              contentStyle={{ backgroundColor: 'rgba(42, 47, 65, 0.95)', borderColor: '#4a5568', color: '#ffffff' }}
            />
          </PieChart>
        </ResponsiveContainer>
      );
    } else if (chartType === 'line') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} stroke="var(--border)" />
            <XAxis dataKey="date" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: '#ffffff' }} />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, '表現']}
              labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              itemStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              cursor={{fill: 'rgba(155, 135, 245, 0.3)'}}
              contentStyle={{ backgroundColor: 'rgba(42, 47, 65, 0.95)', borderColor: '#4a5568', color: '#ffffff' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#9b87f5" 
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    } else if (chartType === 'advanced') {
      return (
        <div className="p-2 bg-quantaryx-softblue/20 dark:bg-quantaryx-dark-purple/10 rounded-lg h-full flex flex-col justify-center items-center">
          <Brain className="h-12 w-12 text-quantaryx-purple dark:text-quantaryx-dark-purple mb-2 animate-pulse" />
          <div className="text-center">
            <p className="font-medium text-quantaryx-darkblue dark:text-white">AI 正在分析您的投資組合</p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">發現潛在機會與風險...</p>
          </div>
        </div>
      );
    } else {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockData} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} stroke="var(--border)" />
            <XAxis dataKey="month" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: '#ffffff' }} />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, '淨值']}
              labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              itemStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              cursor={{fill: 'rgba(155, 135, 245, 0.3)'}}
              contentStyle={{ backgroundColor: 'rgba(42, 47, 65, 0.95)', borderColor: '#4a5568', color: '#ffffff' }}
            />
            <Bar 
              dataKey="value" 
              fill="#9b87f5"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="bg-grid absolute inset-0 opacity-20 dark:opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
            <div className="opacity-0 animate-fade-in">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-quantaryx-softblue dark:bg-quantaryx-dark-purple/30 text-quantaryx-darkblue dark:text-white mb-6">
                <Brain className="h-4 w-4 mr-1.5" />
                <span>新一代AI財富管理系統</span>
              </div>
            </div>
            
            <h1 className="opacity-0 animate-fade-in animate-delay-200 text-4xl tracking-tight font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">用人工智能</span>
              <span className="block text-gradient">重新定義資產掌控</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in animate-delay-300 mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              QuantaryX 整合AI深度學習、知識圖譜與自然語言處理技術，為高資產個人與專業投資者提供全方位的資產可視化、智能決策與自動化執行平台。
            </p>
            
            <div className="opacity-0 animate-fade-in animate-delay-400 mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-quantaryx-purple hover:bg-quantaryx-purple/90 dark:bg-quantaryx-dark-purple dark:hover:bg-quantaryx-dark-purple/90 text-white px-8 py-6 text-lg">
                  開始使用
                </Button>
                <Button 
                  onClick={() => scrollToSection('products')}
                  variant="outline" 
                  className="border-quantaryx-purple text-quantaryx-purple dark:border-quantaryx-dark-purple dark:text-quantaryx-dark-purple hover:bg-quantaryx-purple/10 dark:hover:bg-quantaryx-dark-purple/10 px-8 py-6 text-lg">
                  了解更多
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                專為高資產個人與專業投資者設計
              </p>
            </div>

            <div className="opacity-0 animate-fade-in animate-delay-500 mt-6 grid grid-cols-2 gap-4">
              {AIFeatures.map((feature, index) => (
                <button 
                  key={index}
                  className={`p-3 rounded-lg text-left transition-all ${
                    activeFeature === index 
                      ? "bg-quantaryx-purple/10 dark:bg-quantaryx-dark-purple/20 border border-quantaryx-purple/30 dark:border-quantaryx-dark-purple/40" 
                      : "hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent"
                  }`}
                  onClick={() => handleFeatureClick(index)}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-md ${
                      activeFeature === index 
                        ? "bg-quantaryx-purple dark:bg-quantaryx-dark-purple text-white" 
                        : "bg-gray-100 dark:bg-gray-800 dark:text-white"
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium dark:text-white">{feature.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-700 mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                {showSimulator ? (
                  <div className="w-full h-[450px]">
                    <Simulator />
                  </div>
                ) : showDataIntegration ? (
                  <div className="w-full h-[450px]">
                    <DataIntegrationVisual />
                  </div>
                ) : (
                  <div className="w-full h-[450px] bg-gradient-to-br from-quantaryx-purple/50 to-quantaryx-brightblue/30 dark:from-quantaryx-dark-purple/40 dark:to-quantaryx-dark-blue/30 rounded-lg p-6">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl animate-float p-6 h-full">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-quantaryx-green dark:bg-quantaryx-dark-green rounded-full"></div>
                          <span className="text-sm font-medium dark:text-white">資產總覽</span>
                        </div>
                        <span className="text-2xl font-bold dark:text-white">$5.43M</span>
                      </div>

                      <div className="h-60 w-full">
                        {renderChart(chartType)}
                      </div>
                      
                      {showAIInsight && (
                        <div className="mt-3 p-3 bg-quantaryx-softblue/20 dark:bg-quantaryx-dark-purple/20 rounded-lg border border-quantaryx-softblue/30 dark:border-quantaryx-dark-purple/50 animate-fade-in text-left">
                          <div className="flex items-center mb-1">
                            <Brain className="h-4 w-4 text-quantaryx-purple dark:text-quantaryx-dark-purple mr-2" />
                            <span className="text-sm font-medium text-quantaryx-darkblue dark:text-white">AI 智能洞察</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            {AIFeatures[activeFeature].title === "智慧資產分析" && "分析顯示您的資產在8月達到高峰，建議關注流動性分配以優化年底稅務籌劃。"}
                            {AIFeatures[activeFeature].title === "自動投資優化" && "根據您的風險偏好與市場波動，AI推薦增加10%的防禦性資產以平衡投資組合。"}
                            {AIFeatures[activeFeature].title === "智能資料整合" && "系統已自動整合12個金融機構的資料，並識別出3個重複計算的資產項目。"}
                            {AIFeatures[activeFeature].title === "投資機會識別" && "AI檢測到5檔符合您投資風格的高潛力標的，點擊查看詳細分析報告。"}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced AI Features Section - Updated with Carousel */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
              QuantaryX 核心 AI 功能
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              滑動卡片探索我們如何運用人工智能重新定義財富管理體驗
            </p>
          </div>
          
          {/* Feature Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {advancedFeatures.map((feature) => (
                <CarouselItem key={feature.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card 
                      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border h-full ${
                        selectedFeature?.id === feature.id 
                          ? 'border-quantaryx-purple dark:border-quantaryx-dark-purple scale-[1.02]' 
                          : 'border-gray-100 dark:border-gray-700'
                      }`}
                      onClick={() => setSelectedFeature(feature)}
                    >
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          {feature.icon}
                          <CardTitle className="ml-3 text-lg dark:text-white">{feature.title}</CardTitle>
                        </div>
                        <CardDescription className="dark:text-gray-300">{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{feature.details}</p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-quantaryx-purple dark:text-quantaryx-dark-purple mt-2 px-0"
                          onClick={() => setSelectedFeature(feature)}
                        >
                          了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700" />
              <CarouselNext className="relative static right-0 translate-y-0 ml-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700" />
            </div>
          </Carousel>
          
          {/* Selected Feature Detail */}
          {selectedFeature && (
            <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {selectedFeature.icon}
                  <h3 className="ml-3 font-bold text-xl dark:text-white">{selectedFeature.title}</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  關閉
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 dark:text-white">功能詳情</h4>
                    <p className="text-gray-700 dark:text-gray-300">{selectedFeature.details}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 flex items-center dark:text-white">
                      <span className="inline-block w-2 h-2 bg-quantaryx-purple dark:bg-quantaryx-dark-purple rounded-full mr-2"></span>
                      獲取優勢
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm border-l-2 border-quantaryx-purple/30 dark:border-quantaryx-dark-purple/50 pl-3 py-1">
                      {selectedFeature.uniqueFeature}
                    </p>
                  </div>
                  
                  <h4 className="font-medium mb-3 flex items-center dark:text-white">
                    <Brain className="h-4 w-4 mr-2 text-quantaryx-purple dark:text-quantaryx-dark-purple" />
                    AI 驅動能力
                  </h4>
                  
                  <ScrollArea className="h-[180px] border dark:border-gray-700 rounded p-2 dark:bg-gray-900">
                    <ul className="space-y-2">
                      {selectedFeature.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-2 bg-quantaryx-purple/10 dark:bg-quantaryx-dark-purple/30 text-quantaryx-purple dark:text-quantaryx-dark-purple">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span className="text-sm dark:text-gray-300">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
                
                <div>
                  <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                    {renderChart(selectedFeature.chartType)}
                  </div>
                  
                  <div className="mt-3 p-4 bg-quantaryx-softblue/20 dark:bg-quantaryx-dark-purple/20 rounded-lg border border-quantaryx-softblue/30 dark:border-quantaryx-dark-purple/50 animate-fade-in">
                    <div className="flex items-center mb-2">
                      <Brain className="h-4 w-4 text-quantaryx-purple dark:text-quantaryx-dark-purple mr-2" />
                      <span className="text-sm font-medium text-quantaryx-darkblue dark:text-white">AI 智能洞察</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {selectedFeature.aiInsight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;

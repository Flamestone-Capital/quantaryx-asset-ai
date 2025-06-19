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
import EnhancedTradingSignalBoard from './EnhancedTradingSignalBoard';
import RealTimeTracking from './RealTimeTracking';
import AutomatedTrading from './AutomatedTrading';
import SmartAssetAnalysis from './SmartAssetAnalysis';
import { useTranslation } from 'react-i18next';

// 实时跟踪专用数据 - 显示日内价格波动
const realTimeTrackingData = [
  { date: '09:00', value: 5430000 },
  { date: '09:15', value: 5448000 },
  { date: '09:30', value: 5465000 },
  { date: '09:45', value: 5452000 },
  { date: '10:00', value: 5438000 },
  { date: '10:15', value: 5421000 },
  { date: '10:30', value: 5455000 },
  { date: '10:45', value: 5472000 },
  { date: '11:00', value: 5489000 },
  { date: '11:15', value: 5507000 },
  { date: '11:30', value: 5495000 },
  { date: '11:45', value: 5478000 },
  { date: '12:00', value: 5463000 },
  { date: '12:15', value: 5445000 },
  { date: '12:30', value: 5471000 },
  { date: '12:45', value: 5488000 },
  { date: '13:00', value: 5502000 },
  { date: '13:15', value: 5519000 },
  { date: '13:30', value: 5535000 },
  { date: '13:45', value: 5521000 },
  { date: '14:00', value: 5508000 },
  { date: '14:15', value: 5492000 },
  { date: '14:30', value: 5475000 },
  { date: '14:45', value: 5458000 },
  { date: '15:00', value: 5442000 },
  { date: '15:15', value: 5467000 },
  { date: '15:30', value: 5485000 },
  { date: '15:45', value: 5501000 },
  { date: '16:00', value: 5486000 },
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

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showSimulator, setShowSimulator] = useState(false);
  const [chartType, setChartType] = useState('bar'); // 'bar', 'line', 'pie', 'advanced'
  const [showDataIntegration, setShowDataIntegration] = useState(false);
  const [showRealTimeTracking, setShowRealTimeTracking] = useState(false);
  const [showAutomatedTrading, setShowAutomatedTrading] = useState(false);
  const [showSmartAssetAnalysis, setShowSmartAssetAnalysis] = useState(true);
  const { t } = useTranslation();

  // 生成翻译后的图表数据
  const getMockData = () => {
    const months = t('hero.charts.months', { returnObjects: true }) as string[];
    return [
      { month: months[0], value: 40 },
      { month: months[1], value: 60 },
      { month: months[2], value: 30 },
      { month: months[3], value: 70 },
      { month: months[4], value: 50 },
      { month: months[5], value: 80 },
      { month: months[6], value: 40 },
      { month: months[7], value: 90 },
      { month: months[8], value: 60 },
      { month: months[9], value: 70 },
      { month: months[10], value: 50 },
      { month: months[11], value: 60 },
    ];
  };

  const getPieData = () => {
    return [
      { name: t('hero.charts.assetTypes.stocks'), value: 35 },
      { name: t('hero.charts.assetTypes.bonds'), value: 20 },
      { name: t('hero.charts.assetTypes.realEstate'), value: 25 },
      { name: t('hero.charts.assetTypes.alternative'), value: 15 },
      { name: t('hero.charts.assetTypes.cash'), value: 5 },
    ];
  };

  const getAlternativeInvestmentData = () => {
    return [
      { name: t('hero.charts.alternativeInvestments.privateEquity'), value: 40 },
      { name: t('hero.charts.alternativeInvestments.realEstateFunds'), value: 25 },
      { name: t('hero.charts.alternativeInvestments.hedgeFunds'), value: 15 },
      { name: t('hero.charts.alternativeInvestments.artCollections'), value: 12 },
      { name: t('hero.charts.alternativeInvestments.commodityFutures'), value: 8 },
    ];
  };

  const AIFeatures = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: t('hero.features.smartAnalysis.title'),
      description: t('hero.features.smartAnalysis.description')
    },
    {
      icon: <ChartBar className="h-5 w-5" />,
      title: t('hero.features.autoOptimization.title'),
      description: t('hero.features.autoOptimization.description')
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: t('hero.features.dataIntegration.title'),
      description: t('hero.features.dataIntegration.description')
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: t('hero.features.opportunityIdentification.title'),
      description: t('hero.features.opportunityIdentification.description')
    }
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setShowAIInsight(true);
    
    // Reset all special views first
    setShowSimulator(false);
    setShowDataIntegration(false);
    setShowRealTimeTracking(false);
    setShowAutomatedTrading(false);
    setShowSmartAssetAnalysis(false);
    
    // Change chart type based on the selected feature
    switch(index) {
      case 0: // 智慧資產分析
        setShowSmartAssetAnalysis(true);
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
    
    // 重置所有特殊视图
    setShowRealTimeTracking(false);
    setShowAutomatedTrading(false);
    
    // 如果选择的是实时跟踪功能，显示专门的实时跟踪界面
    if (feature.id === 'real-time-tracking') {
      setShowRealTimeTracking(true);
    }
    // 如果选择的是自动化交易功能，显示专门的自动化交易界面  
    else if (feature.id === 'automated-trading') {
      setShowAutomatedTrading(true);
    }
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
    // 根据选中的功能决定使用哪个数据集
    const chartData = selectedFeature?.id === 'alternative-investments' ? getAlternativeInvestmentData() : getPieData();
    const lineData = selectedFeature?.id === 'real-time-tracking' ? realTimeTrackingData : portfolioData;
    
    if (chartType === 'pie') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, t('hero.charts.tooltips.percentage')]}
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
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} stroke="var(--border)" />
            <XAxis dataKey="date" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: '#ffffff' }} />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [
                selectedFeature?.id === 'real-time-tracking' 
                  ? `$${Number(value).toLocaleString()}` 
                  : `$${Number(value).toLocaleString()}`,
                selectedFeature?.id === 'real-time-tracking' ? t('hero.charts.tooltips.realTimeValue') : t('hero.charts.tooltips.performance')
              ]}
              labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              itemStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              cursor={{fill: 'rgba(155, 135, 245, 0.3)'}}
              contentStyle={{ backgroundColor: 'rgba(42, 47, 65, 0.95)', borderColor: '#4a5568', color: '#ffffff' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#9b87f5" 
              dot={selectedFeature?.id === 'real-time-tracking' ? { fill: '#9b87f5', strokeWidth: 2, r: 3 } : false}
              strokeWidth={selectedFeature?.id === 'real-time-tracking' ? 3 : 2}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    } else if (chartType === 'advanced') {
      // 直接返回EnhancedTradingSignalBoard组件，不添加任何额外的文本或标签
      return <EnhancedTradingSignalBoard />;
    
    } else {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getMockData()} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} stroke="var(--border)" />
            <XAxis dataKey="month" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: '#ffffff' }} />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, t('hero.charts.tooltips.netValue')]}
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
                <span>{t('hero.title')}</span>
              </div>
            </div>
            
            <h1 className="opacity-0 animate-fade-in animate-delay-200 text-4xl tracking-tight font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">{t('hero.mainTitle.line1')}</span>
              <span className="block text-gradient">{t('hero.mainTitle.line2')}</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in animate-delay-300 mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              {t('hero.description')}
            </p>
            
            <div className="opacity-0 animate-fade-in animate-delay-400 mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-quantaryx-purple hover:bg-quantaryx-purple/90 dark:bg-quantaryx-dark-purple dark:hover:bg-quantaryx-dark-purple/90 text-white px-8 py-6 text-lg">
                  {t('hero.ctaButton')}
                </Button>
                <Button 
                  onClick={() => scrollToSection('products')}
                  variant="outline" 
                  className="border-quantaryx-purple text-quantaryx-purple dark:border-quantaryx-dark-purple dark:text-quantaryx-dark-purple hover:bg-quantaryx-purple/10 dark:hover:bg-quantaryx-dark-purple/10 px-8 py-6 text-lg">
                  {t('hero.learnMore')}
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                {t('hero.subtitle')}
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
                ) : showRealTimeTracking ? (
                  <div className="w-full h-[450px]">
                    <RealTimeTracking />
                  </div>
                ) : showAutomatedTrading ? (
                  <div className="w-full h-[450px]">
                    <AutomatedTrading />
                  </div>
                ) : showSmartAssetAnalysis ? (
                  <div className="w-full h-[450px]">
                    <SmartAssetAnalysis />
                  </div>
                ) : (
                  <div className="w-full h-[450px] bg-gradient-to-br from-quantaryx-purple/50 to-quantaryx-brightblue/30 dark:from-quantaryx-dark-purple/40 dark:to-quantaryx-dark-blue/30 rounded-lg p-6">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl animate-float p-6 h-full">
                      {/* 如果是投資機會識別功能，则只显示图表，不显示额外的文本 */}
                      {AIFeatures[activeFeature].title === t('hero.features.opportunityIdentification.title') ? (
                        <div className="h-full w-full">
                          {renderChart(chartType)}
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium dark:text-white">{t('hero.assetOverview')}</span>
                            </div>
                            <span className="text-2xl font-bold dark:text-white">{t('hero.portfolioValue')}</span>
                          </div>

                          <div className="h-60 w-full">
                            {renderChart(chartType)}
                          </div>
                          
                          {showAIInsight && (
                            <div className="mt-3 p-3 bg-quantaryx-softblue/20 dark:bg-quantaryx-dark-purple/20 rounded-lg border border-quantaryx-softblue/30 dark:border-quantaryx-dark-purple/50 animate-fade-in text-left">
                              <div className="flex items-center mb-1">
                                <Brain className="h-4 w-4 text-quantaryx-purple dark:text-quantaryx-dark-purple mr-2" />
                                <span className="text-sm font-medium text-quantaryx-darkblue dark:text-white">{t('hero.aiInsight.title')}</span>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-300">
                                {AIFeatures[activeFeature].title === t('hero.features.smartAnalysis.title') && t('hero.insights.smartAnalysis')}
                                {AIFeatures[activeFeature].title === t('hero.features.autoOptimization.title') && t('hero.insights.autoOptimization')}
                                {AIFeatures[activeFeature].title === t('hero.features.dataIntegration.title') && t('hero.insights.dataIntegration')}
                              </p>
                            </div>
                          )}
                        </>
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
              {t('hero.advancedFeatures.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('hero.advancedFeatures.subtitle')}
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
                  <div className="p-1 h-full">
                    <Card 
                      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border h-[320px] flex flex-col ${
                        selectedFeature?.id === feature.id 
                          ? 'border-quantaryx-purple dark:border-quantaryx-dark-purple scale-[1.02]' 
                          : 'border-gray-100 dark:border-gray-700'
                      }`}
                      onClick={() => setSelectedFeature(feature)}
                    >
                      <CardHeader className="flex-shrink-0">
                        <div className="flex items-center mb-2">
                          {feature.icon}
                          <CardTitle className="ml-3 text-lg dark:text-white">{t(feature.title)}</CardTitle>
                        </div>
                        <CardDescription className="dark:text-gray-300">{t(feature.description)}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{t(feature.details)}</p>
                      </CardContent>
                      <CardFooter className="flex-shrink-0">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-quantaryx-purple dark:text-quantaryx-dark-purple mt-2 px-0"
                          onClick={() => setSelectedFeature(feature)}
                        >
                          {t('hero.learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
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
                  <h3 className="ml-3 font-bold text-xl dark:text-white">{t(selectedFeature.title)}</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {t('common.close')}
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 dark:text-white">{t('hero.featureDetails')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{t(selectedFeature.details)}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 flex items-center dark:text-white">
                      <span className="inline-block w-2 h-2 bg-quantaryx-purple dark:bg-quantaryx-dark-purple rounded-full mr-2"></span>
                      {t('hero.getAdvantage')}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm border-l-2 border-quantaryx-purple/30 dark:border-quantaryx-dark-purple/50 pl-3 py-1">
                      {t(selectedFeature.uniqueFeature)}
                    </p>
                  </div>
                  
                  <h4 className="font-medium mb-3 flex items-center dark:text-white">
                    <Brain className="h-4 w-4 mr-2 text-quantaryx-purple dark:text-quantaryx-dark-purple" />
                    {t('hero.aiCapabilities')}
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
                          <span className="text-sm dark:text-gray-300">{t(capability)}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
                
                <div>
                  <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                    {selectedFeature.id === 'real-time-tracking' ? (
                      <RealTimeTracking />
                    ) : selectedFeature.id === 'automated-trading' ? (
                      <AutomatedTrading />
                    ) : (
                      renderChart(selectedFeature.chartType)
                    )}
                  </div>
                  
                  <div className="mt-3 p-4 bg-quantaryx-softblue/20 dark:bg-quantaryx-dark-purple/20 rounded-lg border border-quantaryx-softblue/30 dark:border-quantaryx-dark-purple/50 animate-fade-in">
                    <div className="flex items-center mb-2">
                      <Brain className="h-4 w-4 text-quantaryx-purple dark:text-quantaryx-dark-purple mr-2" />
                      <span className="text-sm font-medium text-quantaryx-darkblue dark:text-white">{t('hero.aiInsight.title')}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t(selectedFeature.aiInsight)}
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

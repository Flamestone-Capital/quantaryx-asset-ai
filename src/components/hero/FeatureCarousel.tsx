import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { advancedFeatures } from './constants';
import { FeatureItem } from './types';

interface FeatureCarouselProps {
  selectedFeature: FeatureItem | null;
  setSelectedFeature: (feature: FeatureItem | null) => void;
  renderChart: (chartType: string) => React.ReactNode;
}

const FeatureCarousel = ({
  selectedFeature,
  setSelectedFeature,
  renderChart
}: FeatureCarouselProps) => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
          QuantaryX 核心 AI 功能
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
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
                  className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border h-full ${
                    selectedFeature?.id === feature.id 
                      ? 'border-quantaryx-purple scale-[1.02]' 
                      : 'border-gray-100'
                  }`}
                  onClick={() => setSelectedFeature(feature)}
                >
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      {feature.icon}
                      <CardTitle className="ml-3 text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-2">{feature.details}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-quantaryx-purple mt-2 px-0"
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
          <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
          <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
        </div>
      </Carousel>
      
      {/* Selected Feature Detail */}
      {selectedFeature && (
        <div className="mt-10 bg-white rounded-xl shadow-md p-6 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              {selectedFeature.icon}
              <h3 className="ml-3 font-bold text-xl">{selectedFeature.title}</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedFeature(null)}
              className="text-gray-500"
            >
              關閉
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">功能詳情</h4>
                <p className="text-gray-700">{selectedFeature.details}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-quantaryx-purple rounded-full mr-2"></span>
                  獲取優勢
                </h4>
                <p className="text-gray-700 text-sm border-l-2 border-quantaryx-purple/30 pl-3 py-1">
                  {selectedFeature.uniqueFeature}
                </p>
              </div>
              
              <h4 className="font-medium mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 text-quantaryx-purple"><path d="M21 8v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path><path d="M13 16L9.14 11.14a2 2 0 0 1 0-2.83L13 5"></path></svg>
                AI 驅動能力
              </h4>
              
              {/* <ScrollArea className="h-[180px] border rounded p-2">
                <ul className="space-y-2">
                  {selectedFeature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-2 bg-quantaryx-purple/10 text-quantaryx-purple">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="text-sm">{capability}</span>
                    </li>
                  ))}
                </ul>
              </ScrollArea> */}
            </div>
            
            <div>
              {/* <div className="h-64 bg-gray-50 rounded-lg p-4 mb-4">
                {renderChart(selectedFeature.chartType)}
              </div> */}
              
              <div className="mt-3 p-4 bg-quantaryx-softblue/20 rounded-lg border border-quantaryx-softblue/30 animate-fade-in">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-quantaryx-purple mr-2"><path d="M21 8v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path><path d="M13 16L9.14 11.14a2 2 0 0 1 0-2.83L13 5"></path></svg>
                  <span className="text-sm font-medium text-quantaryx-darkblue">AI 智能洞察</span>
                </div>
                <p className="text-sm text-gray-600">
                  {selectedFeature.aiInsight}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureCarousel;

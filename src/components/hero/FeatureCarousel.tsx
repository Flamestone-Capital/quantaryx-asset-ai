import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { advancedFeatures } from './constants';
import { FeatureItem } from './types';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
          {t('hero.advancedFeatures.title')}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
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
                      <CardTitle className="ml-3 text-lg">{t(feature.title)}</CardTitle>
                    </div>
                    <CardDescription>{t(feature.description)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-2">{t(feature.details)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-quantaryx-purple mt-2 px-0"
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
              <h3 className="ml-3 font-bold text-xl">{t(selectedFeature.title)}</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedFeature(null)}
              className="text-gray-500"
            >
              {t('common.close')}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">{t('hero.featureDetails')}</h4>
                <p className="text-gray-700">{t(selectedFeature.details)}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-quantaryx-purple rounded-full mr-2"></span>
                  {t('hero.getAdvantage')}
                </h4>
                <p className="text-gray-700 text-sm border-l-2 border-quantaryx-purple/30 pl-3 py-1">
                  {t(selectedFeature.uniqueFeature)}
                </p>
              </div>
              
              <h4 className="font-medium mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 text-quantaryx-purple"><path d="M21 8v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2 2Z"></path><path d="M13 16L9.14 11.14a2 2 0 0 1 0-2.83L13 5"></path></svg>
                {t('hero.aiCapabilities')}
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {selectedFeature.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-quantaryx-purple rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    {t(capability)}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="h-64 bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                {renderChart(selectedFeature.chartType)}
              </div>
              <div className="mt-3 p-4 bg-quantaryx-softblue/20 rounded-lg border border-quantaryx-softblue/30 animate-fade-in">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-quantaryx-purple mr-2"><path d="M21 8v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path><path d="M13 16L9.14 11.14a2 2 0 0 1 0-2.83L13 5"></path></svg>
                  <span className="text-sm font-medium text-quantaryx-darkblue">{t('hero.aiInsight.title')}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {t(selectedFeature.aiInsight)}
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

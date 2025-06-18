import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Shield, ArrowRight } from 'lucide-react';

const Vision = () => {
  const { t } = useTranslation();

  return (
    <div id="vision" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl opacity-0 animate-fade-in">
            {t('vision.title')}
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4 opacity-0 animate-fade-in animate-delay-100">
            {t('vision.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="opacity-0 animate-fade-in animate-delay-200 bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left">{t('vision.values.innovation.title')}</h3>
            <p className="text-gray-500 text-left">
              {t('vision.values.innovation.description')}
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-300 bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left">{t('vision.values.security.title')}</h3>
            <p className="text-gray-500 text-left">
              {t('vision.values.security.description')}
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-400 bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <ArrowRight className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left">{t('vision.values.transparency.title')}</h3>
            <p className="text-gray-500 text-left">
              {t('vision.values.transparency.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Tag } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const PricingPopup = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  
  if (!isOpen) return null;
  
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="bg-quantaryx-purple w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
              <Tag className="h-8 w-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center dark:text-white">{t('cta.pricing.title')}</h3>
            <p className="text-xl mb-6 text-center text-gray-600 dark:text-gray-300">
              {t('cta.pricing.comingSoon')}
            </p>
            
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                {t('cta.pricing.description')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const CTA = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [showPricingPopup, setShowPricingPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: t('cta.form.options.individual'),
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('cta.toast.formSuccess.title'),
        description: t('cta.toast.formSuccess.description'),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        type: t('cta.form.options.individual'),
        message: ''
      });
    }, 1000);
  };

  const handleDemoRequest = () => {
    // 显示提示信息，引导用户填写表格
    toast({
      title: t('cta.toast.demoRequest.title'),
      description: t('cta.toast.demoRequest.description'),
      duration: 4000,
    });
    
    // 高亮显示表格（不滚动）
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      // 添加高亮效果
      const formContainer = contactForm.parentElement;
      if (formContainer) {
        formContainer.classList.add('ring-2', 'ring-quantaryx-purple', 'ring-opacity-50');
        setTimeout(() => {
          formContainer.classList.remove('ring-2', 'ring-quantaryx-purple', 'ring-opacity-50');
        }, 3000);
      }
    }
  };

  return (
    <div id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-left">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 text-gray-500 text-left">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDemoRequest}
                className="bg-quantaryx-purple hover:bg-quantaryx-purple/90 text-white flex items-center gap-2"
              >
                {t('cta.requestDemo')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                onClick={() => setShowPricingPopup(true)}
                variant="outline" 
                className="border-quantaryx-darkblue text-quantaryx-darkblue hover:bg-quantaryx-darkblue/10"
              >
                {t('cta.learnPricing')}
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-left">{t('cta.contactUs')}</h3>
              
              <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left mb-1">{t('cta.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border"
                    placeholder={t('cta.form.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left mb-1">{t('cta.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border"
                    placeholder={t('cta.form.emailPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 text-left mb-1">{t('cta.form.type')}</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border"
                  >
                    <option>{t('cta.form.options.individual')}</option>
                    <option>{t('cta.form.options.family')}</option>
                    <option>{t('cta.form.options.professional')}</option>
                    <option>{t('cta.form.options.investor')}</option>
                    <option>{t('cta.form.options.other')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left mb-1">{t('cta.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border"
                    placeholder={t('cta.form.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-quantaryx-darkblue hover:bg-quantaryx-darkblue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('cta.form.submitting') : t('cta.form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <PricingPopup 
        isOpen={showPricingPopup} 
        onClose={() => setShowPricingPopup(false)}
      />
    </div>
  );
}

export default CTA;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const CTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '高淨值個人',
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
        title: "表單提交成功",
        description: "我們已收到您的信息，將盡快與您聯系",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        type: '高淨值個人',
        message: ''
      });
    }, 1000);
  };

  return (
    <div id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-left">
              準備好 <span className="text-gradient">重新定義</span> 你的資產管理方式了嗎？
            </h2>
            <p className="text-xl mb-8 text-gray-500 text-left">
              無論您是高資產個人、家族辦公室、還是專業投資機構，QuantaryX 都能為您提供前所未有的資產掌控體驗。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  contactForm?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-quantaryx-purple hover:bg-quantaryx-purple/90 text-white flex items-center gap-2"
              >
                請求產品演示
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                onClick={() => {
                  window.open('/pricing', '_blank');
                  toast({
                    title: "定價資訊",
                    description: "正在為您準備最新的定價方案",
                  });
                }}
                variant="outline" 
                className="border-quantaryx-darkblue text-quantaryx-darkblue hover:bg-quantaryx-darkblue/10"
              >
                了解定價
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-left">聯繫我們</h3>
              
              <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left mb-1">姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border"
                    placeholder="您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left mb-1">電子郵件</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border"
                    placeholder="您的電子郵件"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 text-left mb-1">您是</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border"
                  >
                    <option>高淨值個人</option>
                    <option>家族辦公室</option>
                    <option>資產管理專業人士</option>
                    <option>投資者</option>
                    <option>其他</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left mb-1">訊息</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border"
                    placeholder="請告訴我們您的需求"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-quantaryx-darkblue hover:bg-quantaryx-darkblue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '提交中...' : '提交'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;

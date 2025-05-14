
import React from 'react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  index: number;
  linkUrl?: string; // 可选的链接URL属性
}

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, icon, features, color, index, linkUrl }) => {
  const delay = 100 * (index + 1);
  
  return (
    <div 
      className={`opacity-0 animate-fade-in`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-full gradient-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-700 bg-gray-800/90 hover:bg-gray-800">
        <div className="p-6">
          <div className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${color}`}>
            {icon}
          </div>
          
          <h3 className="text-xl font-bold mb-1 flex items-center">
            <span 
              className={`text-white font-medium ${linkUrl ? 'cursor-pointer hover:text-gray-200' : ''}`}
              onClick={linkUrl ? () => window.open(linkUrl, '_blank') : undefined}
            >
              {title}
            </span>
          </h3>
          
          <p className="text-gray-300 italic mb-4 text-sm">{subtitle}</p>
          
          <ul className="space-y-2 text-left">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className={`h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-2 ${color} text-white`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-sm text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="bg-quantaryx-darkblue text-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('navbar.brand')}</h3>
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.sections.products')}</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-white transition-colors">{t('products.finora.title')}</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-white transition-colors">{t('products.wiselens.title')}</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-white transition-colors">{t('products.nurocrm.title')}</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-white transition-colors">{t('products.deallens.title')}</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.sections.company')}</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('vision')} className="text-gray-300 hover:text-white transition-colors">{t('footer.company.aboutUs')}</button></li>
              <li><button onClick={() => scrollToSection('vision')} className="text-gray-300 hover:text-white transition-colors">{t('footer.company.team')}</button></li>
              <li><button onClick={() => scrollToSection('investors')} className="text-gray-300 hover:text-white transition-colors">{t('footer.company.investorRelations')}</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.sections.contact')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">{t('footer.contact.email')}</li>
              <li className="text-gray-300">{t('footer.contact.phone')}</li>
              <li className="flex space-x-4 mt-4">
                <button className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </button>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </button>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300">© {currentYear} {t('navbar.brand')}. {t('footer.legal.copyright')}</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => navigate('/privacy')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {t('footer.legal.privacy')}
            </button>
            <button 
              onClick={() => navigate('/terms')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {t('footer.legal.terms')}
            </button>
            <button 
              onClick={() => navigate('/security')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {t('footer.legal.security')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

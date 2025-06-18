import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-quantaryx-darkblue/90 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="font-display font-bold text-2xl text-gradient">{t('navbar.brand')}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('products')} className="font-medium text-gray-700 hover:text-quantaryx-purple dark:text-gray-300 dark:hover:text-quantaryx-purple transition-colors">{t('navbar.products')}</button>
            <button onClick={() => scrollToSection('vision')} className="font-medium text-gray-700 hover:text-quantaryx-purple dark:text-gray-300 dark:hover:text-quantaryx-purple transition-colors">{t('navbar.vision')}</button>
            <button onClick={() => scrollToSection('investors')} className="font-medium text-gray-700 hover:text-quantaryx-purple dark:text-gray-300 dark:hover:text-quantaryx-purple transition-colors">{t('navbar.investors')}</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium text-gray-700 hover:text-quantaryx-purple dark:text-gray-300 dark:hover:text-quantaryx-purple transition-colors">{t('navbar.contact')}</button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-quantaryx-darkblue hover:bg-quantaryx-darkblue/90 dark:bg-quantaryx-purple dark:hover:bg-quantaryx-purple/90"
            >
              {t('navbar.requestDemo')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-quantaryx-darkblue shadow-lg animate-fade-in transition-colors duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">{t('navbar.products')}</button>
            <button onClick={() => scrollToSection('vision')} className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">{t('navbar.vision')}</button>
            <button onClick={() => scrollToSection('investors')} className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">{t('navbar.investors')}</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">{t('navbar.contact')}</button>
            <div className="pt-2">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-quantaryx-darkblue hover:bg-quantaryx-darkblue/90 dark:bg-quantaryx-purple dark:hover:bg-quantaryx-purple/90 w-full"
              >
                {t('navbar.requestDemo')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                <span className="font-bold">Cognitix</span>
              </div>
            </Link>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              onClick={toggleMobileMenu} 
              className="text-dark focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.1 }}
          >
            <button onClick={() => scrollToSection('home')} className="font-medium hover:text-primary transition-colors">{t('navigation.home')}</button>
            <button onClick={() => scrollToSection('services')} className="font-medium hover:text-primary transition-colors">{t('navigation.services')}</button>
            <button onClick={() => scrollToSection('projects')} className="font-medium hover:text-primary transition-colors">{t('navigation.projects')}</button>
            <button onClick={() => scrollToSection('about')} className="font-medium hover:text-primary transition-colors">{t('navigation.about')}</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-primary transition-colors">{t('navigation.contact')}</button>
            <button onClick={() => scrollToSection('blog')} className="font-medium hover:text-primary transition-colors">{t('navigation.blog')}</button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">{t('navigation.getStarted')}</button>
            <LanguageSwitcher />
          </motion.nav>
        </div>
        
        {/* Mobile Navigation */}
        <motion.div 
          className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pb-4`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">{t('navigation.home')}</button>
            <button onClick={() => scrollToSection('services')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">{t('navigation.services')}</button>
            <button onClick={() => scrollToSection('projects')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">{t('navigation.projects')}</button>
            <button onClick={() => scrollToSection('about')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">{t('navigation.about')}</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">{t('navigation.contact')}</button>
            <button onClick={() => scrollToSection('blog')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">{t('navigation.blog')}</button>
            <button onClick={() => scrollToSection('contact')} className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-center">{t('navigation.getStarted')}</button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}

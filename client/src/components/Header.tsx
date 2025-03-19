import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                <span className="font-bold">Cognitix</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-dark focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="font-medium hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="font-medium hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('projects')} className="font-medium hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('about')} className="font-medium hover:text-primary transition-colors">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-primary transition-colors">Contact</button>
            <button onClick={() => scrollToSection('blog')} className="font-medium hover:text-primary transition-colors">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">Get Started</button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">Home</button>
            <button onClick={() => scrollToSection('services')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">Services</button>
            <button onClick={() => scrollToSection('projects')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">Projects</button>
            <button onClick={() => scrollToSection('about')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">Contact</button>
            <button onClick={() => scrollToSection('blog')} className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-center">Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

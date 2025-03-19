import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('POST', '/api/newsletter', { email });
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-6">
              Cognitix
            </div>
            <p className="text-gray-400 mb-6">
              Innovative web solutions for businesses of all sizes. We transform ideas into exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition-colors">Projects</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              <li><button onClick={() => scrollToSection('blog')} className="text-gray-400 hover:text-white transition-colors">Blog</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Web Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Mobile App Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Custom Software Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Database Solutions</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">DevOps Services</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Digital Marketing</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and valuable tech insights.
            </p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Cognitix. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

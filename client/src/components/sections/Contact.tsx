import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    privacy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Error",
        description: "Please agree to the Privacy Policy",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('POST', '/api/contact', {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message
      });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a question or ready to start your project? Reach out to us using the form below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Your name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="your.email@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="Your company" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                <select 
                  id="service" 
                  name="service" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" 
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="database">Database Solutions</option>
                  <option value="devops">DevOps Services</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="Tell us about your project" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy" 
                  className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded" 
                  required 
                  checked={formData.privacy}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="privacy" className="ml-2 block text-gray-700">
                  I agree to the <a href="/Privacy" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Our Office</h4>
                    <p className="text-gray-600">rue 13 Aout chotrana 2 <br />Tunisia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-gray-600">cognitix_web_dev@proton.me</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-gray-600">+216 22 898 775<br /> whatsapp <br/>
                    +216 29 237 096</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/people/Cognitix/61574079523985/" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/CognitixS" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/cognitix-solutions-6255a6357/" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/cognitix_web?igsh=MTljdDRsb2VoNW91Zg== " className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href= "https://github.com/Mohamed-Ali-Hammami"
                 className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

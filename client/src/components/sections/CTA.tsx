export default function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
          Let's transform your ideas into reality. Contact us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white text-primary rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-transparent border-2 border-white rounded-md font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}

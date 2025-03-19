export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "laptop-code",
      description: "Custom-built websites and web applications designed to meet your specific business requirements.",
      features: ["Responsive Design", "User-Friendly Interface", "SEO Optimization"]
    },
    {
      title: "Mobile App Development",
      icon: "mobile-alt",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Native iOS & Android", "Cross-Platform Solutions", "App Store Optimization"]
    },
    {
      title: "Custom Software Development",
      icon: "code",
      description: "Tailor-made software solutions to automate and streamline your business processes.",
      features: ["Scalable Architecture", "Cloud Integration", "API Development"]
    },
    {
      title: "Database Solutions",
      icon: "database",
      description: "Efficient database design, migration, and management services for your applications.",
      features: ["SQL & NoSQL Databases", "Data Migration", "Performance Optimization"]
    },
    {
      title: "DevOps Services",
      icon: "cogs",
      description: "Streamline your development and operations with our comprehensive DevOps solutions.",
      features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Monitoring & Logging"]
    },
    {
      title: "Digital Marketing",
      icon: "search",
      description: "Comprehensive digital marketing strategies to boost your online presence and reach.",
      features: ["SEO & Content Marketing", "Social Media Management", "Pay-Per-Click Campaigns"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of web development and digital solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <i className={`fas fa-${service.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <i className="fas fa-check text-secondary"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  Learn more <i className="fas fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

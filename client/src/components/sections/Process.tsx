export default function Process() {
  const processSteps = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business requirements, target audience, and project goals to create a detailed project plan."
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and interactive prototypes that visualize the user interface and experience."
    },
    {
      number: 3,
      title: "Development",
      description: "Our skilled developers build your solution using the most appropriate technologies, following best practices and coding standards."
    },
    {
      number: 4,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your application is bug-free, secure, and performs optimally across all platforms."
    },
    {
      number: 5,
      title: "Deployment",
      description: "We handle the deployment process to ensure a smooth transition to production, with minimal downtime."
    },
    {
      number: 6,
      title: "Maintenance & Support",
      description: "We provide ongoing support and maintenance to ensure your application remains up-to-date and performs optimally."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure successful project delivery and client satisfaction.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block absolute w-1 bg-gray-200 h-full left-1/2 transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="md:flex items-center relative">
                {/* Left side (odd steps) */}
                {index % 2 === 0 ? (
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg md:ml-auto" style={{ maxWidth: '90%' }}>
                      <div className="mb-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary mx-auto md:ml-auto md:mr-0">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:pr-12"></div>
                )}
                
                {/* Circle in middle for desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white"></div>
                
                {/* Right side (even steps) */}
                {index % 2 === 1 ? (
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg" style={{ maxWidth: '90%' }}>
                      <div className="mb-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary mx-auto md:mx-0">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:pl-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

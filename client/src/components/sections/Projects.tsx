export default function Projects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      category: "E-commerce",
      categoryColor: "bg-primary",
      description: "A comprehensive dashboard for a major retail company with advanced analytics and reporting features.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Healthcare Mobile App",
      category: "Healthcare",
      categoryColor: "bg-secondary",
      description: "A patient management mobile application for a healthcare provider with appointment scheduling and telemedicine features.",
      technologies: ["React Native", "Express", "PostgreSQL"],
    },
    {
      title: "Financial Analytics Platform",
      category: "Finance",
      categoryColor: "bg-accent",
      description: "An enterprise-level financial analytics platform with real-time data processing and visualization tools.",
      technologies: ["Angular", "Python", "AWS"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden h-60">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <i className="fas fa-laptop-code text-4xl text-gray-400"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className={`px-3 py-1 ${project.categoryColor} text-white text-xs rounded-full uppercase font-semibold tracking-wider`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{tech}</span>
                  ))}
                </div>
                <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-1">
                  View Project <i className="fas fa-arrow-right text-sm"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="px-6 py-3 bg-white border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2">
            View All Projects <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();
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
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">{t('projects.subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
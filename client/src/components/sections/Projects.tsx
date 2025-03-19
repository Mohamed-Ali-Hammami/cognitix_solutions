import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t('projects.items.ecommerce.title'),
      category: t('projects.categories.ecommerce'),
      categoryColor: "bg-primary",
      description: t('projects.items.ecommerce.description'),
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: t('projects.items.healthcare.title'),
      category: t('projects.items.healthcare.category'),
      categoryColor: "bg-secondary",
      description: t('projects.items.healthcare.description'),
      technologies: ["React Native", "Express", "PostgreSQL"],
    },
    {
      title: t('projects.items.finance.title'),
      category: t('projects.items.finance.category'),
      categoryColor: "bg-accent",
      description: t('projects.items.finance.description'),
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
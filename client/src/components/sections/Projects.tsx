import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

const Projects = () => {
  const { t } = useTranslation();

  const websiteCreation = t('projects.websiteCreation', { returnObjects: true }) as ServiceItem;
  const digitalMarketing = t('projects.digitalMarketing', { returnObjects: true }) as ServiceItem;
  const advertising = t('projects.advertising', { returnObjects: true }) as ServiceItem;
  const trafficManagement = t('projects.trafficManagement', { returnObjects: true }) as ServiceItem;
  const whyChooseUs = t('projects.whyChooseUs.items', { returnObjects: true }) as string[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('projects.subtitle')}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">{websiteCreation.title}</h3>
            <p className="text-gray-600 mb-4">{websiteCreation.description}</p>
            <ul className="list-disc list-inside">
              {websiteCreation.items.map((item, index) => (
                <li key={index} className="text-gray-600 mb-2">{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">{digitalMarketing.title}</h3>
            <p className="text-gray-600 mb-4">{digitalMarketing.description}</p>
            <ul className="list-disc list-inside">
              {digitalMarketing.items.map((item, index) => (
                <li key={index} className="text-gray-600 mb-2">{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">{advertising.title}</h3>
            <p className="text-gray-600 mb-4">{advertising.description}</p>
            <ul className="list-disc list-inside">
              {advertising.items.map((item, index) => (
                <li key={index} className="text-gray-600 mb-2">{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">{trafficManagement.title}</h3>
            <p className="text-gray-600 mb-4">{trafficManagement.description}</p>
            <ul className="list-disc list-inside">
              {trafficManagement.items.map((item, index) => (
                <li key={index} className="text-gray-600 mb-2">{item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
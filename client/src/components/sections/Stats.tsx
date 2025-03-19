import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Stats() {
  const { t } = useTranslation();
  
  const stats = [
    { value: "10+", label: t('stats.years') },
    { value: "500+", label: t('stats.projects') },
    { value: "100+", label: t('stats.clients') },
    { value: "25+", label: t('stats.awards') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="p-6" variants={itemVariants}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

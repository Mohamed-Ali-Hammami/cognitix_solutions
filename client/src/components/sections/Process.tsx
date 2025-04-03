import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Discovery from "../../public/images/Gifbusi.gif";
import Planing from "../../public/images/planing.gif";
import Design from "../../public/images/design1.gif";
import Developpement from "../../public/images/Business_Development.gif";
import Testing from "../../public/images/tseting.gif";
import Launch from "../../public/images/deploy.gif";
import Support from "../../public/images/support.gif";

export default function Process() {
  const { t } = useTranslation();

  const processSteps = [
    {
      title: t('process.discovery.title'),
      description: t('process.discovery.description'),
      image: Discovery,
    },
    {
      title: t('process.planning.title'),
      description: t('process.planning.description'),
      image: Planing,
    },
    {
      title: t('process.design.title'),
      description: t('process.design.description'),
      image: Design,
    },
    {
      title: t('process.development.title'),
      description: t('process.development.description'),
      image: Developpement,
    },
    {
      title: t('process.testing.title'),
      description: t('process.testing.description'),
      image: Testing,
    },
    {
      title: t('process.launch.title'),
      description: t('process.launch.description'),
      image: Launch,
    },
    {
      title: t('process.support.title'),
      description: t('process.support.description'),
      image: Support,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">{t('process.title')}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">{t('process.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 p-8 rounded-lg shadow-lg"
            >
              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              {/* Title and Description */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Technologies() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">{t('technologies.title')}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">{t('technologies.subtitle')}</p>
        </motion.div>
      </div>
    </section>
  );
}

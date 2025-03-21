import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function CTA() {
  const { t } = useTranslation();
  
  const scrollToSection = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-center mb-8">{t('cta.subtitle')}</p>
          <div className="text-center">
            <button 
              onClick={scrollToSection}
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
            >
              {t('cta.button')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

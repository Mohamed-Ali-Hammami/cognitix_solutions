import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white pb-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerAnimation}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Copyright */}
        <motion.div 
          className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-500"
          variants={itemAnimation}
        >
          <p>{t('footer.copyright')}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
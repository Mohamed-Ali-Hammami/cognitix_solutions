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
      className="bg-gray-900 text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerAnimation}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-bold mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-primary transition-colors">
                  {t('footer.team')}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  {t('footer.careers')}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-bold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#web-development" className="hover:text-primary transition-colors">
                  {t('services.webDevelopment.title')}
                </Link>
              </li>
              <li>
                <Link href="/#mobile-development" className="hover:text-primary transition-colors">
                  {t('services.mobileDevelopment.title')}
                </Link>
              </li>
              <li>
                <Link href="/#ui-ux-design" className="hover:text-primary transition-colors">
                  {t('services.uiUxDesign.title')}
                </Link>
              </li>
              <li>
                <Link href="/#digital-marketing" className="hover:text-primary transition-colors">
                  {t('services.digitalMarketing.title')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-bold mb-6">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary transition-colors">
                  {t('footer.support')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-bold mb-6">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary transition-colors">
                  {t('footer.cookies')}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800"
          variants={itemAnimation}
        >
          <div className="max-w-md mx-auto lg:mx-0">
            <h3 className="text-xl font-bold mb-4">{t('newsletter.title')}</h3>
            <p className="mb-6 text-gray-400">{t('newsletter.subtitle')}</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="bg-gray-800 px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                {t('newsletter.button')}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500"
          variants={itemAnimation}
        >
          <p>{t('footer.copyright')}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
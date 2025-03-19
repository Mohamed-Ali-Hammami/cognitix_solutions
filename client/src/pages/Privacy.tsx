import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Privacy() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={childVariants} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <motion.h1 variants={childVariants} className="text-3xl md:text-4xl font-bold mb-2 text-center">
          {t('privacy.title')}
        </motion.h1>
        <motion.p variants={childVariants} className="text-gray-500 mb-8 text-center">
          {t('privacy.lastUpdated')}
        </motion.p>

        {/* Introduction */}
        <motion.section variants={childVariants} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.introduction.title')}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t('privacy.introduction.content')}
          </p>
        </motion.section>

        {/* Data We Collect */}
        <motion.section variants={childVariants} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataWeCollect.title')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacy.dataWeCollect.content')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>{t('privacy.dataWeCollect.personalData')}</li>
            <li>{t('privacy.dataWeCollect.technicalData')}</li>
            <li>{t('privacy.dataWeCollect.usageData')}</li>
          </ul>
        </motion.section>

        {/* How We Use Your Data */}
        <motion.section variants={childVariants} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.howWeUseData.title')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacy.howWeUseData.content')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>{t('privacy.howWeUseData.providingServices')}</li>
            <li>{t('privacy.howWeUseData.improvingWebsite')}</li>
            <li>{t('privacy.howWeUseData.marketing')}</li>
          </ul>
        </motion.section>

        {/* Data Security */}
        <motion.section variants={childVariants} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataSecurity.title')}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t('privacy.dataSecurity.content')}
          </p>
        </motion.section>

        {/* Your Rights */}
        <motion.section variants={childVariants} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.yourRights.title')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacy.yourRights.content')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>{t('privacy.yourRights.access')}</li>
            <li>{t('privacy.yourRights.correction')}</li>
            <li>{t('privacy.yourRights.erasure')}</li>
            <li>{t('privacy.yourRights.restriction')}</li>
            <li>{t('privacy.yourRights.transfer')}</li>
            <li>{t('privacy.yourRights.objection')}</li>
          </ul>
        </motion.section>

        {/* Contact Us */}
        <motion.section variants={childVariants} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.contactUs.title')}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t('privacy.contactUs.content')}
          </p>
        </motion.section>

        <motion.div variants={childVariants} className="text-center">
          <Link href="/" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('privacy.backToHome')}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
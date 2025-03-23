import { useTranslation } from "react-i18next";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import Discovery from "../../src/public/images/Discovery.png";
import Planing from "../../src/public/images/planing1.png";
import Design from "../../src/public/images/design_ex.avif";
import Developpement from "../../src/public/images/developement.png";
import ecommerce from "../../src/public/images/ecommerce.png";
import finance from "../../src/public/images/finance.png";
export default function ServiceDetail() {
  const { t } = useTranslation();
  const [, params] = useRoute("/services/:id");
  const serviceId = params?.id || "";

  // Get the service key based on the route parameter
  const getServiceKey = (): string => {
    switch (serviceId) {
      case "web-development":
        return "webDevelopment";
      case "mobile-development":
        return "mobileDevelopment";
      case "ui-ux-design":
        return "uiUxDesign";
      case "digital-marketing":
        return "digitalMarketing";
      case "content-strategy":
        return "contentStrategy";
      case "ecommerce-solutions":
        return "ecommerceSolutions";
      default:
        return "";
    }
  };

  // Get the image path for the current service
  const getServiceImage = (): string => {
    switch (serviceId) {
      case "web-development":
        return Developpement;
      case "mobile-development":
        return Discovery;
      case "ui-ux-design":
        return Design;
      case "digital-marketing":
        return ecommerce;
      case "content-strategy":
        return Planing;
      case "ecommerce-solutions":
        return finance;
      default:
        return "/src/public/images/logo.png";
    }
  };

  const serviceKey = getServiceKey();

  // Check if the service exists
  const serviceExists = !!serviceKey;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  if (!serviceExists) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The requested service information is not available.
          </p>
          <a
            href="/"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t(`services.${serviceKey}.title`)}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t(`services.${serviceKey}.description`)}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        {/* Service Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">{t('serviceDetail.overview')}</h2>
            <p className="text-gray-700 mb-6">{t(`serviceDetail.${serviceKey}.longDescription`)}</p>
            <ul className="space-y-3">
              {(t(`serviceDetail.${serviceKey}.features`, { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-primary mt-1"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={getServiceImage()}
              alt={t(`services.${serviceKey}.title`)}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('serviceDetail.process')}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('serviceDetail.processSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t(`serviceDetail.${serviceKey}.process`, { returnObjects: true }) as { title: string, description: string }[]).map((step: { title: string, description: string }, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="bg-white p-10 rounded-xl shadow-md"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{t('serviceDetail.benefits')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t(`serviceDetail.${serviceKey}.benefits`, { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-start gap-3"
              >
                <div className="text-primary mt-1">
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-6">{t('serviceDetail.readyToStart')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('serviceDetail.contactCTA')}
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t('serviceDetail.contactButton')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}

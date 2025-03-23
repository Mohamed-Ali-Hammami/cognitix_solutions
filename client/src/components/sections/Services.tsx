import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      icon: "laptop-code",
      features: ["Responsive Design", "User-Friendly Interface", "SEO Optimization"],
      slug: "web-development"
    },
    {
      title: t('services.mobileDevelopment.title'),
      description: t('services.mobileDevelopment.description'),
      icon: "mobile-alt",
      features: ["Native iOS & Android", "Cross-Platform Solutions", "App Store Optimization"],
      slug: "mobile-development"
    },
    {
      title: t('services.uiUxDesign.title'),
      description: t('services.uiUxDesign.description'),
      icon: "palette",
      features: ["User Experience Research", "Interface Design", "Prototyping"],
      slug: "ui-ux-design"
    },
    {
      title: t('services.digitalMarketing.title'),
      description: t('services.digitalMarketing.description'),
      icon: "search",
      features: ["SEO & Content Marketing", "Social Media Management", "Pay-Per-Click Campaigns"],
      slug: "digital-marketing"
    },
    {
      title: t('services.contentStrategy.title'),
      description: t('services.contentStrategy.description'),
      icon: "pencil-alt",
      features: ["Content Planning", "Copywriting", "Content Optimization"],
      slug: "content-strategy"
    },
    {
      title: t('services.ecommerceSolutions.title'),
      description: t('services.ecommerceSolutions.description'),
      icon: "shopping-cart",
      features: ["Online Store Setup", "Payment Processing", "Inventory Management"],
      slug: "ecommerce-solutions"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="p-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <i className={`fas fa-${service.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <i className="fas fa-check text-secondary"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  {t('services.learnMore')} <i className="fas fa-arrow-right text-sm"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

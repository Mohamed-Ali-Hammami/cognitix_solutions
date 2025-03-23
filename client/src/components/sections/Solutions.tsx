import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Solutions() {
  const { t } = useTranslation();

  // Solution types with their metadata
  const solutions = [
    {
      icon: "fas fa-globe",
      key: "businessWebsites",
      linkUrl: "/services/web-development",
      color: "bg-blue-500",
      image: "/src/public/images/developement.png"
    },
    {
      icon: "fas fa-shopping-cart",
      key: "ecommerce",
      linkUrl: "/services/ecommerce-solutions",
      color: "bg-emerald-500",
      image: "/src/public/images/ecommerce.png"
    },
    {
      icon: "fas fa-mobile-alt",
      key: "mobileApps",
      linkUrl: "/services/mobile-development",
      color: "bg-purple-500",
      image: "/src/public/images/Discovery.png"
    },
    {
      icon: "fas fa-tachometer-alt",
      key: "webApps",
      linkUrl: "/services/web-development",
      color: "bg-orange-500",
      image: "/src/public/images/finance.png"
    },
    {
      icon: "fas fa-palette",
      key: "uiUxDesign",
      linkUrl: "/services/ui-ux-design",
      color: "bg-pink-500",
      image: "/src/public/images/design_ex.avif"
    },
    {
      icon: "fas fa-chart-line",
      key: "digitalMarketing",
      linkUrl: "/services/digital-marketing",
      color: "bg-yellow-500",
      image: "/src/public/images/ecommerce.png"
    }
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solutions.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
            >
              {/* Color bar at top */}
              <div className={`h-2 ${solution.color}`}></div>

              {/* Solution content */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg ${solution.color} text-white flex items-center justify-center`}>
                    <i className={`${solution.icon} text-xl`}></i>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-semibold">{t(`solutions.${solution.key}.title`)}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {t(`solutions.${solution.key}.description`)}
                </p>

                {/* Image */}
                <div className="mb-4 overflow-hidden rounded-lg h-40">
                  <img
                    src={solution.image}
                    alt={t(`solutions.${solution.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">{t('solutions.keyBenefits')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {(t(`solutions.${solution.key}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <Link
                  to={solution.linkUrl}
                  className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  {t(`solutions.${solution.key}.linkText`)} <i className="fas fa-arrow-right text-sm"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

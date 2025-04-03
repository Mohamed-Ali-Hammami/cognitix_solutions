import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";
import backgroundVideo from '../../public/images/cognitix2.mp4';

export default function CTA() {
  const { t } = useTranslation();
  
  const scrollToSection = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{
            filter: 'brightness(0.7) contrast(1.2)',
            transform: 'scale(1.1)'
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg text-white">
            {t('cta.title')}
          </h2>
          <p className="text-xl sm:text-2xl mb-8 drop-shadow-md text-white">
            {t('cta.subtitle')}
          </p>
          <div>
            <Link 
              href="/agents"
              className="bg-white text-primary px-8 py-3 sm:px-12 sm:py-4 
              rounded-lg font-bold hover:bg-opacity-90 transition-all 
              shadow-lg hover:shadow-xl"
              style={{ fontSize: '1.125rem' }}
            >
              {t('cta.button')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
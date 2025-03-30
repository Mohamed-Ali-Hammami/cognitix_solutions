import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from '../../styles/Hero.module.css';
import logo from '../../public/images/logo.png';
import backgroundVideo from '../../public/images/cognitix_home.mp4';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const codeVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const backgroundSymbols = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: { staggerChildren: 0.2, delayChildren: 1 }
    }
  };

  const symbolVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Video Background */}
      <div className={styles.videoContainer}>
      <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.backgroundVideo}
            
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
      </div>

      <motion.div 
        className={styles.backgroundSymbols}
        initial="hidden"
        animate="visible"
        variants={backgroundSymbols}
      >
        <motion.div variants={symbolVariants} className={`${styles.symbol} ${styles.symbolTopLeft}`}>
          &lt;div&gt;
        </motion.div>
        <motion.div variants={symbolVariants} className={`${styles.symbol} ${styles.symbolBottomRight}`}>
          &lt;/div&gt;
        </motion.div>
        <motion.div variants={symbolVariants} className={`${styles.symbol} ${styles.symbolTopRight}`}>
          {'{ }'}
        </motion.div>
        <motion.div variants={symbolVariants} className={`${styles.symbol} ${styles.symbolBottomLeft}`}>
          {'( )'}
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={styles.contentContainer}>
          <motion.div 
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 className={styles.title} variants={itemVariants}>
            <img 
                src={logo} 
                alt="Cognitix Logo" 
                className={styles.logo}
              />
              {t('hero.title')}{' '}
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                Cognitix
              </span>

            </motion.h1>

            <motion.p className="text-lg md:text-xl text-gray-700" variants={itemVariants}>
              {t('hero.subtitle')}
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-secondary rounded-md font-medium hover:bg-primary/20 transition duration-300"
              >
                {t('hero.ctaButton')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-6 py-3 bg-black/10 rounded-md font-medium hover:bg-white/20 transition duration-300"
              >
                {t('hero.secondaryButton')}
              </button>
            </motion.div>

          </motion.div>

          {/* Code Display Section */}
          <motion.div 
            className={styles.codeContainer}
            initial="hidden"
            animate="visible"
            variants={codeVariants}
          >
            <div className={styles.codeHeader}>
              <div className={`${styles.codeDot} bg-red-500`} />
              <div className={`${styles.codeDot} bg-yellow-500`} />
              <div className={`${styles.codeDot} bg-green-500`} />
              <span className="ml-2 text-gray-700 text-sm">index.js</span>
            </div>
            <pre className="bg-gray-100 p-4 rounded-md font-mono text-xs sm:text-sm md:text-base text-gray-700 overflow-x-auto">
              <code className="language-javascript">
{`import React from 'react';
import { CognitixAI } from 'cognitix';

const App = () => {
  return (
    <CognitixAI 
      config={{
        model: 'advanced',
        language: 'en'
      }}
    />
  );
};

export default App;`}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

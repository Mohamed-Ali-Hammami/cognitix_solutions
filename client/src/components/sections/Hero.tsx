import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
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
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      } 
    }
  };

  const backgroundSymbols = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1
      }
    }
  };

  const symbolVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.5,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-dark to-dark/90 text-white py-20">
      <motion.div 
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={backgroundSymbols}
      >
        <motion.div 
          variants={symbolVariants}
          className="absolute top-10 left-10 text-6xl text-white/20"
        >
          &lt;div&gt;
        </motion.div>
        <motion.div 
          variants={symbolVariants}
          className="absolute bottom-10 right-10 text-6xl text-white/20"
        >
          &lt;/div&gt;
        </motion.div>
        <motion.div 
          variants={symbolVariants}
          className="absolute top-1/3 right-1/4 text-4xl text-white/20"
        >
          {'{ }'}
        </motion.div>
        <motion.div 
          variants={symbolVariants}
          className="absolute bottom-1/3 left-1/4 text-4xl text-white/20"
        >
          {'( )'}
        </motion.div>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              {t('hero.title')} <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Cognitix</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-300"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-primary rounded-md font-medium hover:bg-primary/90 transition duration-300 text-center"
              >
                {t('hero.ctaButton')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-6 py-3 bg-white/10 rounded-md font-medium hover:bg-white/20 transition duration-300 text-center"
              >
                {t('hero.secondaryButton')}
              </button>
            </motion.div>
            <motion.div 
              className="flex items-center gap-6 pt-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
              </div>
              <p className="text-sm text-gray-300">Trusted by <span className="font-semibold">100+</span> companies worldwide</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-dark/40 rounded-lg p-6 backdrop-blur-sm border border-white/10 shadow-xl"
            initial="hidden"
            animate="visible"
            variants={codeVariants}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-gray-400 text-sm">index.js</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm md:text-base text-gray-300 overflow-x-auto"><code className="language-javascript">
<span className="text-yellow-400">const</span> <span className="text-green-400">app</span> <span className="text-white">=</span> <span className="text-blue-400">express</span><span className="text-white">();</span>

<span className="text-purple-400">// Cognitix Web Solutions</span>
<span className="text-yellow-400">function</span> <span className="text-blue-400">createAwesomeWebsite</span><span className="text-white">() {'{'}</span>
  <span className="text-yellow-400">return</span> <span className="text-white">{'{'}</span>
    <span className="text-green-400">innovation</span><span className="text-white">:</span> <span className="text-blue-400">true</span><span className="text-white">,</span>
    <span className="text-green-400">performance</span><span className="text-white">:</span> <span className="text-blue-400">100</span><span className="text-white">,</span>
    <span className="text-green-400">design</span><span className="text-white">:</span> <span className="text-orange-400">'beautiful'</span>
  <span className="text-white">{'}'}</span>
<span className="text-white">{'}'}</span>

<span className="text-yellow-400">const</span> <span className="text-green-400">result</span> <span className="text-white">=</span> <span className="text-blue-400">createAwesomeWebsite</span><span className="text-white">();</span>
<span className="text-blue-400">launchWebsite</span><span className="text-white">(result);</span>
              </code></pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
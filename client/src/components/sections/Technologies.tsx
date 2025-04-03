import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaDatabase } from "react-icons/fa"; // Importing some icons
import { DiMongodb, DiGit, DiPostgresql } from "react-icons/di"; // MongoDB and Git icons
import { SiGraphql, SiNextdotjs, SiFirebase, SiKubernetes, SiGooglecloud } from "react-icons/si"; // GraphQL, Next.js, Firebase, Kubernetes, and Google Cloud
import {  FaGoogle, FaFacebook } from "react-icons/fa"; // Adobe (for content creation) and Google & Facebook (for Ads)
import { SiAdobe } from "react-icons/si";

export default function Technologies() {
  const { t } = useTranslation();

  // List of technologies with their respective icons
  const techList = [
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "AWS", icon: <FaAws size={40} /> },
    { name: "Database", icon: <FaDatabase size={40} /> },
    { name: "MongoDB", icon: <DiMongodb size={40} /> },
    { name: "Git", icon: <DiGit size={40} /> },
    { name: "PostgreSQL", icon: <DiPostgresql size={40} /> },
    { name: "GraphQL", icon: <SiGraphql size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} /> },
    { name: "Firebase", icon: <SiFirebase size={40} /> },
    { name: "Kubernetes", icon: <SiKubernetes size={40} /> },
    { name: "Google Cloud", icon: <SiGooglecloud size={40} /> },

    // Digital Marketing & Content Creation
    { name: "Adobe Suite", icon: <SiAdobe size={40} /> }, // Adobe Suite for content creation
    { name: "Google Ads", icon: <FaGoogle size={40} /> }, // Google Ads for paid search
    { name: "Facebook Ads", icon: <FaFacebook size={40} /> }, // Facebook Ads for social media marketing
    { name: "SEO Tools", icon: <FaGoogle size={40} /> }, // SEO tools (icon can be customized)
    { name: "Content Creation", icon: <SiAdobe size={40} /> }, // Content creation related to digital marketing
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">{t('technologies.title')}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">{t('technologies.subtitle')}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
            {techList.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="mb-4">{tech.icon}</div>
                <p className="text-lg font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

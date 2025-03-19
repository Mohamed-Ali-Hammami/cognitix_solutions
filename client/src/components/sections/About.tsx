import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();
  const values = [
    {
      icon: "medal",
      title: "Excellence",
      description: "We strive for excellence in everything we do."
    },
    {
      icon: "lightbulb",
      title: "Innovation",
      description: "We embrace innovation and creative problem-solving."
    },
    {
      icon: "handshake",
      title: "Partnership",
      description: "We build strong, lasting partnerships with our clients."
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-gray-300 mb-6 text-lg">{t('about.story')}</p>
            <p className="text-gray-300 mb-6 text-lg">{t('about.mission')}</p>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <i className={`fas fa-${value.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">{value.title}</h4>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl bg-gray-700 h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <i className="fas fa-users text-6xl mb-4"></i>
                <p className="text-xl">Our Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
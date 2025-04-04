import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import AgentContactForm from "../components/AgentContactForm.tsx";
import Agent1 from "../../src/public/images/agents/zinedine.jpg";
import Agent2 from "../../src/public/images/agents/yosser.jpg";
import Agent3 from "../../src/public/images/agents/housnou.jpg";
import Agent4 from "../../src/public/images/agents/Achref.jpg";
import Agent5 from "../../src/public/images/agents/hamza.jpg";
import Agent6 from "../../src/public/images/agents/Achraf.jpg";

interface Agent {
  id: number;
  name: string;
  lastName: string;
  position: string;
  country: string;
  phoneNumber: string;
  email: string;
  image: string;
}

export default function Agents() {
  const { t } = useTranslation();
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Open contact form
  const handleContactClick = (agent: Agent) => {
    setSelectedAgent(agent);
    setIsContactFormOpen(true);
  };

  // Close contact form
  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  // Agent data
  const agents: Agent[] = [

    {
      id: 2,
      name: "Yosser",
      lastName: "Haddaoui",
      position: t("agents.positions.regionalManager"),
      country: t("agents.countries.Canada"),
      phoneNumber: "email only",
      email: "yousr@hotmail.ca",
      image: Agent2
    },
    {
      id: 3,
      name: "Marietta Armandine",
      lastName: "hounsou",
      position: t("agents.positions.salesManager"),
      country: t("agents.countries.Benin"),
      phoneNumber: "+971 50 123 4567",
      email: "marietta.a.m.hounsou@gmail.com",
      image: Agent3
    },
    {
        id: 1,
        name: "Zinedine",
        lastName: "Bourfaa",
        position: t("agents.positions.salesManager"),
        country: t("agents.countries.france"),
        phoneNumber: "+33 6 27 20 47 47",
        email: "zinedine.bourfaa@outlook.fr",
        image: Agent1
      },
    {
      id: 4,
      name: "Achref",
      lastName: "Mlayah",
      position: t("agents.positions.salesManager"),
      country: t("agents.countries.Germany"),
      phoneNumber: "+49 17 66 33 04 10",
      email: "achref.mlayah1@gmail.com",
      image: Agent4
    },
    {
      id: 5,
      name: "Hamza",
      lastName: "Bouhjar",
      position: t("agents.positions.salesManager"),
      country: t("agents.countries.Sweden"),
      phoneNumber: "+46 70 43 96 817",
      email: "Bouhjar3328@gmail.com",
      image: Agent5
    },
    {
      id: 6,
      name: "Achref",
      lastName: "Bourfaa",
      position: t("agents.positions.salesManager"),
      country: t("agents.countries.Algeria"),
      phoneNumber: "email only",
      email: "Achrafbourfaa1@gmail.com",
      image: Agent6
    }
  ];

  // Animation variants for the page and cards
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { opacity: 0 }
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("agents.pageTitle")} | Cognitix Solutions</title>
        <meta name="description" content={t("agents.metaDescription")} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="space-y-12"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t("agents.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("agents.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                variants={cardVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex justify-center items-center bg-gray-200 p-4">
                <img
                    src={agent.image}
                    alt={`${agent.name} ${agent.lastName}`}
                    className="w-24 h-24 object-cover rounded-full"
                    onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/avatar-placeholder.jpg";
                    }}
                />
                </div>


                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {agent.name} 
                  </h3>
                  <p className="text-primary font-medium mb-4">{agent.position}</p>
                  <div className="space-y-3 text-gray-700">
                    <p><span className="font-medium">{t("agents.country")}: </span>{agent.country}</p>
                    <p>
                      <span className="font-medium">{t("agents.email")}: </span>
                      <a href={`mailto:${agent.email}`} className="text-primary hover:underline">
                        {agent.email}
                      </a>
                    </p>
                  </div>
                  <button 
                    className="mt-6 w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => handleContactClick(agent)}
                  >
                    {t("agents.contactButton")}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      {selectedAgent && (
        <AgentContactForm
          isOpen={isContactFormOpen}
          onClose={handleCloseContactForm}
          agentName={`${selectedAgent.name} ${selectedAgent.lastName}`}
          agentEmail={selectedAgent.email}
        />
      )}
    </>
  );
} 
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import AgentContactForm from "../components/AgentContactForm.tsx";
import Agent1 from "../../src/public/images/agents/zinedine.jpg";
import Agent2 from "../../src/public/images/agents/yosser.jpg";
import Agent3 from "../../src/public/images/agents/housnou.jpg";
import Agent4 from "../../src/public/images/agents/Achref.jpg";
import Agent5 from "../../src/public/images/agents/agent5.png";

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
      name: "Haddaoui",
      lastName: "Yosser",
      position: t("agents.positions.regionalManager"),
      country: t("agents.countries.Canada"),
      phoneNumber: "email only",
      email: "yousr@hotmail.ca",
      image: Agent2
    },
    {
      id: 3,
      name: "Marietta Armandine M.",
      lastName: "HOUNSOU",
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
      name: "Carlos",
      lastName: "Mendoza",
      position: t("agents.positions.salesManager"),
      country: t("agents.countries.usa"),
      phoneNumber: "+52 55 1234 5678",
      email: "carlos.mendoza@cognitix.com",
      image: Agent5
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
                <div className="relative h-80 bg-gray-200">
                  <img
                    src={agent.image}
                    alt={`${agent.name} ${agent.lastName}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      (e.target as HTMLImageElement).src = "/images/avatar-placeholder.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {agent.name} {agent.lastName}
                  </h3>
                  <p className="text-primary font-medium mb-4">{agent.position}</p>
                  <div className="space-y-3 text-gray-700">
                    <p><span className="font-medium">{t("agents.country")}: </span>{agent.country}</p>
                    <p><span className="font-medium">{t("agents.phone")}: </span>{agent.phoneNumber}</p>
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
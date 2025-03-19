import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="font-sans bg-light text-dark">
      {/* Main content sections */}
      <div id="home">
        <Hero />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export default function Home() {
  return (
    <div className="font-sans bg-light text-dark">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Technologies />
        <Projects />
        <Process />
        <Testimonials />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

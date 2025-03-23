import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Solutions from "@/components/sections/Solutions";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Home() {
  const { t } = useTranslation();

  // Handle scrolling to section based on URL hash
  useEffect(() => {
    // Function to smooth scroll to element
    const scrollToElement = (element: HTMLElement) => {
      const headerOffset = 80; // Adjust based on your fixed header height
      const targetPosition = element.offsetTop - headerOffset;
      const duration = 500; // Duration of the scroll animation in milliseconds
      const startTime = performance.now();
      const startPosition = window.pageYOffset;

      const scrollStep = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Normalize progress to [0, 1]
        const ease = easeInOutCubic(progress); // Apply easing function
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      };

      requestAnimationFrame(scrollStep);
    };

    // Easing function for smoother animation
    function easeInOutCubic(t: number): number {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // Check for hash in URL and scroll to that section after a short delay
    const handleHashScroll = () => {
      if (window.location.hash) {
        // Remove the '#' character
        const sectionId = window.location.hash.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          // Delay scrolling slightly to ensure page is fully loaded
          setTimeout(() => {
            scrollToElement(section);
          }, 300);
        }
      }
    };

    // Run once when component mounts
    handleHashScroll();

    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

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
      <div id="solutions">
        <Solutions />
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

import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Technologies from './components/sections/Technologies';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Footer from './components/Footer';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

export default function App() {
  const { i18n } = useTranslation();

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div dir={i18n.dir()} className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <Services />
            <Technologies />
            <Projects />
            <Process />
            <Testimonials />
            <CTA />
          </main>
          <Footer />
          <Toaster/>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
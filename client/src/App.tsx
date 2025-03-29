import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster.tsx";
import NotFound from "../src/pages/not-found.tsx";
import Home from "../src/pages/Home.tsx";
import Privacy from "../src/pages//Privacy.tsx";
import ServiceDetail from "../src/pages/ServiceDetail.tsx";
import Agents from "../src/pages/Agents.tsx";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { useEffect } from "react";

function Router() {
  const { i18n } = useTranslation();

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/services/:id" component={ServiceDetail} />
        <Route path="/agents" component={Agents} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <motion.main
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Router />
        </motion.main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

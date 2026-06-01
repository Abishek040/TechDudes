import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import AnoAI from "@/components/ui/animated-shader-background";
import TeamPage from "./pages/TeamPage";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />

      {/* GLOBAL BACKGROUND */}
      <div className="relative">
        <AnoAI />

        {/* MAIN CONTENT */}
        <div className="relative z-10">
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </div>
      </div>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

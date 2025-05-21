
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import HelpSupport from "./pages/HelpSupport";
import DoctorView from "./pages/VideoConsultation/DoctorView";
import PatientView from "./pages/VideoConsultation/PatientView";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { ConsultationProvider } from "./context/ConsultationContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ConsultationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/doctordashboard" element={<DoctorDashboard />} />
            <Route path="/patientdashboard" element={<PatientDashboard />} />
            <Route path="/help-support" element={<HelpSupport />} />
            <Route path="video-consultation/doctor" element={<DoctorView />} />
            <Route path="video-consultation/patient" element={<PatientView />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ConsultationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

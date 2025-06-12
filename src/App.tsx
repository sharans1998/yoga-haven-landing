import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TeachersTraining from "./pages/TeachersTraining";
import PostpartumFitness from "./pages/PostpartumFitness";
import NotFound from "./pages/NotFound";
import PostpartumFitnessAd from "./pages/PostpartumFitnessAd";
import TrainingAd from "./pages/TrainingAd";
import TrainingCallback from "./pages/TrainingCallbackAd";
import TrainingCallbackConfirm from "./pages/TrainingCallbackConfirmAd";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { Analytics } from "@vercel/analytics/next";

const queryClient = new QueryClient();

const App = () => {
  injectSpeedInsights();
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teachers-training" element={<TeachersTraining />} />
            <Route
              path="/postpartum-fitness"
              element={<PostpartumFitnessAd />}
            />
            <Route path="/postpartum" element={<PostpartumFitness />} />
            <Route path="/training" element={<TrainingAd />} />
            <Route path="/training/call-back" element={<TrainingCallback />} />
            <Route
              path="/training/call-back/confirm"
              element={<TrainingCallbackConfirm />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

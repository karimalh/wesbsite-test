import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import Project7 from "./pages/Project7";
import Project8 from "./pages/Project8";
import CADProject1 from "./pages/CADProject1";
import CADProject2 from "./pages/CADProject2";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project-1" element={<Project1 />} />
            <Route path="/project-2" element={<Project2 />} />
            <Route path="/project-3" element={<Project3 />} />
            <Route path="/project-4" element={<Project4 />} />
            <Route path="/project-5" element={<Project5 />} />
            <Route path="/project-6" element={<Project6 />} />
            <Route path="/project-7" element={<Project7 />} />
            <Route path="/project-8" element={<Project8 />} />
            <Route path="/cad-project-1" element={<CADProject1 />} />
            <Route path="/cad-project-2" element={<CADProject2 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

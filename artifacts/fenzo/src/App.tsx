import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, Suspense, lazy } from "react";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/not-found";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";

const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const WorkPage = lazy(() => import("@/pages/WorkPage"));
const ProcessPage = lazy(() => import("@/pages/ProcessPage"));
const TechnologiesPage = lazy(() => import("@/pages/TechnologiesPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const WebsitesPage = lazy(() => import("@/pages/work/WebsitesPage"));
const MobileAppsPage = lazy(() => import("@/pages/work/MobileAppsPage"));
const EcommercePage = lazy(() => import("@/pages/work/EcommercePage"));
const AISolutionsPage = lazy(() => import("@/pages/work/AISolutionsPage"));
const DashboardsPage = lazy(() => import("@/pages/work/DashboardsPage"));

const queryClient = new QueryClient();

function FallbackLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <h1 className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
        FENZO
      </h1>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/process" component={ProcessPage} />
        <Route path="/technologies" component={TechnologiesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/work/websites" component={WebsitesPage} />
        <Route path="/work/mobile" component={MobileAppsPage} />
        <Route path="/work/ecommerce" component={EcommercePage} />
        <Route path="/work/ai" component={AISolutionsPage} />
        <Route path="/work/dashboards" component={DashboardsPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <FloatingWhatsApp />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
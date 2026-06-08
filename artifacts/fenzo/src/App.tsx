import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, Suspense, lazy } from "react";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/not-found";

const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const WorkPage = lazy(() => import("@/pages/WorkPage"));
const ProcessPage = lazy(() => import("@/pages/ProcessPage"));
const TechnologiesPage = lazy(() => import("@/pages/TechnologiesPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const TeamPage = lazy(() => import("@/pages/TeamPage"));
const TestimonialsPage = lazy(() => import("@/pages/TestimonialsPage"));
const ClientsPage = lazy(() => import("@/pages/ClientsPage"));
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
        <Route path="/team" component={TeamPage} />
        <Route path="/testimonials" component={TestimonialsPage} />
        <Route path="/clients" component={ClientsPage} />
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

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Carpets from "./pages/Carpets";
import Laminate from "./pages/Laminate";
import LVT from "./pages/LVT";
import Vinyl from "./pages/Vinyl";
import Showroom from "./pages/Showroom";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* 301-style redirects for old website URLs (Romford era) */}
      <Route path="/services">{() => <Redirect to="/carpets" />}</Route>
      <Route path="/gallery">{() => <Redirect to="/showroom" />}</Route>
      <Route path="/about-us">{() => <Redirect to="/about" />}</Route>
      <Route path="/home">{() => <Redirect to="/" />}</Route>
      <Route path="/flooring">{() => <Redirect to="/" />}</Route>
      <Route path="/carpets" component={Carpets} />
      <Route path="/laminate" component={Laminate} />
      <Route path="/lvt" component={LVT} />
      <Route path="/vinyl" component={Vinyl} />
      <Route path="/showroom" component={Showroom} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

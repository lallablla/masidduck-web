import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import BrandStory from "@/pages/BrandStory";
import BrandIdentity from "@/pages/BrandIdentity";
import Contact from "@/pages/Contact";
import Haccp from "@/pages/Haccp";
import Terms from "@/pages/Terms";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Admin from "@/pages/Admin";
import Today from "@/pages/Today";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/brand-story" component={BrandStory} />
      <Route path="/brand-identity" component={BrandIdentity} />
      <Route path="/contact" component={Contact} />
      <Route path="/haccp" component={Haccp} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/admin" component={Admin} />
      <Route path="/today" component={Today} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;

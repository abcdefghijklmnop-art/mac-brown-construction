import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";

import Home from "@/pages/home";
// Add additional page imports here as you build them out:
// import GuideSchool from "@/pages/guide-school";
// import Instructors from "@/pages/instructors";
// import Testimonials from "@/pages/testimonials";
// import Articles from "@/pages/articles";
// import Contact from "@/pages/contact";
// import ReservationForm from "@/pages/reservation-form";
// import AtlantaPage from "@/pages/atlanta";
// import NCClasses from "@/pages/nc-classes";
// import CastingInstruction from "@/pages/casting-instruction";
// import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (!location.includes("#")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);
  return null;
}

function Redirect({ to }: { to: string }) {
  const [, navigate] = useLocation();
  useEffect(() => {
    if (to.includes("#")) {
      window.location.replace(to);
    } else {
      navigate(to, { replace: true });
    }
  }, []);
  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>

        {/* ── Canonical routes ─────────────────────────────────────────── */}
        <Route path="/" component={Home} />

        {/* Guide School pages — keeping existing WordPress URL slugs */}
        {/* <Route path="/fly-fishing-guide-school/" component={GuideSchool} /> */}
        {/* <Route path="/fly-fishing-guide-school/fly-fishing-classes-north-carolina-smoky-mountains/" component={NCClasses} /> */}
        {/* <Route path="/fly-fishing-instruction/" component={CastingInstruction} /> */}
        {/* <Route path="/fly-fishing-instruction/fly-casting-style-substance-intent/" component={CastingStyle} /> */}
        {/* <Route path="/meet-rowing-fly-casting-fly-fishing-instructors/" component={Instructors} /> */}
        {/* <Route path="/testimonials-kudos/" component={Testimonials} /> */}
        {/* <Route path="/blog-post/" component={Articles} /> */}
        {/* <Route path="/contact-information-best-fly-fishing-guide-school/" component={Contact} /> */}
        {/* <Route path="/reservation-form/" component={ReservationForm} /> */}
        {/* <Route path="/top-fly-fishing-guide-school-atlanta-ga/" component={AtlantaPage} /> */}

        {/* ── Legacy WordPress redirects — preserving SEO equity ───────── */}
        <Route path="/fly-fishing-guide-school">{() => <Redirect to="/fly-fishing-guide-school/" />}</Route>
        <Route path="/fly-fishing-instruction">{() => <Redirect to="/fly-fishing-instruction/" />}</Route>
        <Route path="/testimonials-kudos">{() => <Redirect to="/testimonials-kudos/" />}</Route>
        <Route path="/blog-post">{() => <Redirect to="/blog-post/" />}</Route>
        <Route path="/reservation-form">{() => <Redirect to="/reservation-form/" />}</Route>
        <Route path="/contact-information-best-fly-fishing-guide-school">{() => <Redirect to="/contact-information-best-fly-fishing-guide-school/" />}</Route>
        <Route path="/meet-rowing-fly-casting-fly-fishing-instructors">{() => <Redirect to="/meet-rowing-fly-casting-fly-fishing-instructors/" />}</Route>
        <Route path="/top-fly-fishing-guide-school-atlanta-ga">{() => <Redirect to="/top-fly-fishing-guide-school-atlanta-ga/" />}</Route>

        {/* Common alias redirects */}
        <Route path="/guide-school">{() => <Redirect to="/fly-fishing-guide-school/" />}</Route>
        <Route path="/school">{() => <Redirect to="/fly-fishing-guide-school/" />}</Route>
        <Route path="/instruction">{() => <Redirect to="/fly-fishing-instruction/" />}</Route>
        <Route path="/casting">{() => <Redirect to="/fly-fishing-instruction/" />}</Route>
        <Route path="/instructors">{() => <Redirect to="/meet-rowing-fly-casting-fly-fishing-instructors/" />}</Route>
        <Route path="/meet-our-instructors">{() => <Redirect to="/meet-rowing-fly-casting-fly-fishing-instructors/" />}</Route>
        <Route path="/testimonials">{() => <Redirect to="/testimonials-kudos/" />}</Route>
        <Route path="/kudos">{() => <Redirect to="/testimonials-kudos/" />}</Route>
        <Route path="/reviews">{() => <Redirect to="/testimonials-kudos/" />}</Route>
        <Route path="/blog">{() => <Redirect to="/blog-post/" />}</Route>
        <Route path="/articles">{() => <Redirect to="/blog-post/" />}</Route>
        <Route path="/contact">{() => <Redirect to="/contact-information-best-fly-fishing-guide-school/" />}</Route>
        <Route path="/reserve">{() => <Redirect to="/reservation-form/" />}</Route>
        <Route path="/enroll">{() => <Redirect to="/reservation-form/" />}</Route>
        <Route path="/atlanta">{() => <Redirect to="/top-fly-fishing-guide-school-atlanta-ga/" />}</Route>

        {/* WordPress system cleanup */}
        <Route path="/wp-content/:anything">{() => <Redirect to="/" />}</Route>
        <Route path="/wp-admin/:anything">{() => <Redirect to="/" />}</Route>

        {/* Catch-all — swap for a proper NotFound page when ready */}
        <Route>{() => <Redirect to="/" />}</Route>

      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

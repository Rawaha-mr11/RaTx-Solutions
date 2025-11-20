import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceWebDev from "./pages/ServiceWebDev";
import ServiceDataEntry from "./pages/ServiceDataEntry";
import ServiceCreativeWriting from "./pages/ServiceCreativeWriting";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const location = useLocation();

  // Disable browser scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  // Scroll top on hard reload after full page load
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <HelmetProvider>
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/services/web-development" element={<PageWrapper><ServiceWebDev /></PageWrapper>} />
          <Route path="/services/data-entry" element={<PageWrapper><ServiceDataEntry /></PageWrapper>} />
          <Route path="/services/creative-writing" element={<PageWrapper><ServiceCreativeWriting /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </HelmetProvider>
  );
}

export default App;

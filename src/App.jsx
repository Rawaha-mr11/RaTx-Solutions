import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
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

gsap.registerPlugin(ScrollSmoother);

function App() {
  const location = useLocation();
  const smootherRef = useRef(null);

  // Keep browser from restoring scroll on navigation/reload
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch (e) {
        // ignore
      }
    }
  }, []);

  // Ensure ScrollSmoother is created and force it (and native scroll) to top.
  useEffect(() => {
    if (!smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      const forceTop = () => {
        try {
          // virtual scroller
          smootherRef.current && smootherRef.current.scrollTop(0);
        } catch (e) {
          // ignore
        }
        // native fallback
        try {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        } catch (e) {
          // ignore
        }
      };

      // Run immediately and retry shortly after to handle timing edge-cases
      forceTop();
      setTimeout(forceTop, 50);
      setTimeout(forceTop, 200);
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  // On route change, prefer ScrollSmoother to reset scroll, otherwise fallback to native
  useEffect(() => {
    if (smootherRef.current) {
      try {
        smootherRef.current.scrollTop(0, true);
        return;
      } catch (e) {
        // fallthrough
      }
    }

    try {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch (e) {
      // ignore
    }
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <div id="wrapper">
        <Header />
        <div id="content">
          <main>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/services"
                element={
                  <PageWrapper>
                    <Services />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/web-development"
                element={
                  <PageWrapper>
                    <ServiceWebDev />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/data-entry"
                element={
                  <PageWrapper>
                    <ServiceDataEntry />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/creative-writing"
                element={
                  <PageWrapper>
                    <ServiceCreativeWriting />
                  </PageWrapper>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <PageWrapper>
                    <Portfolio />
                  </PageWrapper>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageWrapper>
                    <Blog />
                  </PageWrapper>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <PageWrapper>
                    <BlogPost />
                  </PageWrapper>
                }
              />
              <Route
                path="/careers"
                element={
                  <PageWrapper>
                    <Careers />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <NotFound />
                  </PageWrapper>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;

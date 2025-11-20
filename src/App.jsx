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

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (smootherRef.current) {
      smootherRef.current.scrollTo(0, true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 1.2,
        effects: true,
      });
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

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

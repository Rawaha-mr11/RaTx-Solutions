import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import Testimonial from "../components/Testimonial";
import CTAButton from "../components/CTAButton";
import { services, projects, testimonials } from "../data/sample-data";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const servicesRef = useRef();
  const projectsRef = useRef();
  const testimonialsRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Services animation
      gsap.fromTo(
        ".service-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,          
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Projects animation
      gsap.fromTo(
        ".project-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Testimonials animation
      gsap.fromTo(
        ".testimonial",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
          duration: 0.8,          
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="RATX SOLUTIONS - Premium Web Development & Digital Services"
        description="Web Development, Data Entry, and Creative Writing services tailored to help your business grow. Fast, reliable, and professional solutions."
      />

      <Hero
        title="We build fast & reliable web solutions."
        subtitle="Web Development • Data Entry • Creative Writing — tailored to help your business grow."
        primaryCTA={{
          text: "Get a Quote",
          to: "/contact",
        }}
        secondaryCTA={{
          text: "See Services",
          to: "/services",
        }}
      />

      {/* Services Section */}
      <section ref={servicesRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Our Services</h2>
            <p className="section__subtitle">
              Comprehensive digital solutions to elevate your business
            </p>
          </div>
          <div className="services-grid">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div
            className="text-center"
            style={{ marginTop: "var(--spacing-xl)" }}
          >
            <CTAButton to="/services" variant="secondary">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="section section--alt">
        <div className="container">
          <div className="section__header text-center">
            <h2>Featured Projects</h2>
            <p className="section__subtitle">
              See how we've helped businesses achieve their goals
            </p>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div
            className="text-center"
            style={{ marginTop: "var(--spacing-xl)" }}
          >
            <CTAButton to="/portfolio" variant="primary">
              View Full Portfolio
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Client Testimonials</h2>
            <p className="section__subtitle">
              What our clients say about working with us
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Testimonial
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Start Your Project?</h2>
            <p style={{ marginBottom: "var(--spacing-xl)" }}>
              Let's discuss how we can help bring your vision to life
            </p>
            <CTAButton to="/contact" variant="accent" size="large" style={{color:"var(--bg-earth-grey-green)"}}>
              Start Your Project
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

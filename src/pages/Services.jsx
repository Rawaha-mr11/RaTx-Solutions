import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import CTAButton from "../components/CTAButton";
import { services } from "../data/sample-data";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef();
  const processRef = useRef();
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
          },
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
          },
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
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description:
        "We start by understanding your goals, requirements, and vision for the project.",
    },
    {
      number: "02",
      title: "Planning & Strategy",
      description:
        "We create a detailed project plan with timelines, milestones, and deliverables.",
    },
    {
      number: "03",
      title: "Execution & Development",
      description:
        "Our team brings your project to life with regular updates and collaboration.",
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing ensures everything works perfectly before delivery.",
    },
    {
      number: "05",
      title: "Launch & Deployment",
      description:
        "We handle the launch process and ensure a smooth transition to live environment.",
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description:
        "Ongoing support to keep your project running smoothly and efficiently.",
    },
  ];

  return (
    <>
      <SEO
        title="Our Services - Web Development, Data Entry & Creative Writing"
        description="Comprehensive digital services including custom web development, professional data entry, and creative content writing. Tailored solutions for your business growth."
      />

      <Hero
        title="Premium Digital Services"
        subtitle="Comprehensive solutions to elevate your digital presence and streamline your operations"
        primaryCTA={{
          text: "Get Started",
          to: "/contact",
        }}
        variant="services"
      />

      {/* Services Grid */}
      <section ref={servicesRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Our Services</h2>
            <p className="section__subtitle">
              End-to-end digital solutions for modern businesses
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section section--alt">
        <div className="container">
          <div className="section__header text-center">
            <h2>Our Process</h2>
            <p className="section__subtitle">
              A structured approach to ensure project success
            </p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step services-process">
                <div className="process-step__number">{step.number}</div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__description">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="services-cta">
            <div className="services-cta__content">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's discuss your requirements and create a custom solution
                that fits your needs and budget.
              </p>
              <div className="services-cta__actions">
                <CTAButton to="/contact" variant="primary" size="large">
                  Get Free Consultation
                </CTAButton>
                <CTAButton to="/portfolio" variant="secondary" size="large">
                  View Our Work
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import CTAButton from "../components/CTAButton";
import "./contacts.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const infoRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-info-item",
        {
          y: 40,
          opacity: 0,
          stagger: 0.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      gsap.fromTo(
        ".contact-form",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      content: "hello@ratxsolutions.com",
      link: "mailto:hello@ratxsolutions.com",
      description: "Send us an email anytime",
    },
    {
      icon: "📞",
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: "💬",
      title: "Live Chat",
      content: "Start Chat",
      link: "#chat",
      description: "Instant help during business hours",
    },
    {
      icon: "📍",
      title: "Visit Us",
      content: "123 Business Ave, Suite 100<br>New York, NY 10001",
      link: "#map",
      description: "Schedule a meeting in person",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical web development project take?",
      answer:
        "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we offer various support packages including maintenance, updates, and technical support. We ensure your project continues to perform optimally after launch.",
    },
    {
      question: "Can you work with our existing design/development team?",
      answer:
        "Absolutely! We often collaborate with in-house teams, providing specific expertise where needed while integrating seamlessly with your existing workflows.",
    },
    {
      question: "What is your typical response time for support requests?",
      answer:
        "We prioritize support requests based on urgency. Critical issues receive immediate attention (within 1 hour), while standard requests are typically addressed within 24 hours.",
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch"
        description="Get in touch with RATX SOLUTIONS. Let's discuss your project requirements and how we can help bring your ideas to life."
      />

      <Hero
        title="Let's Start Your Project"
        subtitle="Ready to bring your ideas to life? Contact us for a free consultation and let's discuss how we can help your business grow."
        primaryCTA={{
          text: "Schedule a Call",
          to: "#contact-form",
        }}
        variant="contact"
      />

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <div ref={infoRef} className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-info__intro">
                We'd love to hear from you. Choose the most convenient way to
                reach us, and we'll get back to you as soon as possible.
              </p>

              <div className="contact-info__items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-item__icon">{item.icon}</div>
                    <div className="contact-info-item__content">
                      <h3 className="contact-info-item__title">{item.title}</h3>
                      <div
                        className="contact-info-item__main"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                      <p className="contact-info-item__description">
                        {item.description}
                      </p>
                      <a href={item.link} className="contact-info-item__link">
                        Get in Touch →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="contact-social__links">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="contact-social__link"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="contact-social__link"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="contact-social__link"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="contact-social__link"
                  >
                    <InstagramIcon />
                  </a>
                  <WhatsAppLinks />
                  <GmailLinks />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              id="contact-form"
              className="contact-form-section"
            >
              <h2>Send us a Message</h2>
              <p className="contact-form__intro">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header text-center">
            <h2>Frequently Asked Questions</h2>
            <p className="section__subtitle">
              Quick answers to common questions
            </p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-item__question">{faq.question}</h3>
                <p className="faq-item__answer">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div
            className="text-center"
            style={{ marginTop: "var(--spacing-xl)" }}
          >
            <p>Still have questions?</p>
            <CTAButton
              to="#contact-form"
              variant="secondary"
              style={{ color: "var(--bg-earth-grey-green)", backgroundColor: "var(--accent)" }}
            >
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="section">
        <div className="container">
          <div className="map-section">
            <h2>Visit Our Office</h2>
            <div className="map-placeholder">
              <div className="map-placeholder__content">
                <LocationIcon />
                <h3>New York Office</h3>
                <p>123 Business Avenue, Suite 100</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <CTAButton
                  href="https://maps.google.com"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// const LocationIcon = () => (
//   <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
//   </svg>
// );

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 .03 5.34.03 11.92a11.84 11.84 0 0 0 1.62 5.98L0 24l6.27-1.64a11.93 11.93 0 0 0 5.73 1.46h.01c6.63 0 12-5.34 12-11.92 0-3.19-1.26-6.19-3.48-8.42ZM12 21.55c-1.8 0-3.56-.48-5.1-1.39l-.36-.21-3.72.97.99-3.63-.23-.37a9.8 9.8 0 0 1-1.46-5.01C2.12 6.58 6.56 2.2 12 2.2c2.6 0 5.05 1 6.89 2.83a9.63 9.63 0 0 1 2.88 6.89c0 5.37-4.44 9.73-9.77 9.73Zm5.44-7.27c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.09 8.09 0 0 1-2.38-1.47 8.7 8.7 0 0 1-1.6-1.97c-.17-.3 0-.45.13-.6.14-.15.3-.37.45-.55.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37s-1.04 1-1.04 2.43 1.07 2.82 1.22 3.02c.15.2 2.1 3.33 5.08 4.68.71.31 1.26.5 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
  </svg>
);

const GmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4.07l-8 4.93-8-4.93V6l8 5 8-5v2.07Z" />
  </svg>
);

const WhatsAppLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="footer-dropdown">
      <button
        className="contact-social__link"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="WhatsApp contacts"
      >
        <WhatsAppIcon />
      </button>

      {showMenu && (
        <div className="footer-dropdown__menu">
          <a
            href="https://wa.me/+923028053159"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dropdown__item"
          >
            +92 302 805 3159
          </a>
          <a
            href="https://wa.me/+923192152020"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dropdown__item"
          >
            +92 319 215 2020
          </a>
        </div>
      )}
    </div>
  );
};

const GmailLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="footer-dropdown">
      <button
        className="contact-social__link"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Gmail contacts"
      >
        <GmailIcon />
      </button>

      {showMenu && (
        <div className="footer-dropdown__menu">
          <a
            href="mailto:rawaha465@gmail.com"
            className="footer-dropdown__item"
          >
            rawaha465@gmail.com
          </a>
          <a
            href="mailto:tk0319215@gmail.com"
            className="footer-dropdown__item"
          >
            tk0319215@gmail.com
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import CTAButton from "./CTAButton";
import LoaderSpinner from "./LoaderSpinner";
import "./contact-form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const formRef = useRef();
  const successRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-form__field", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          successRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
        );
      }, successRef);

      return () => ctx.revert();
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.company || formData.service || "Contact form",
          message: formData.message,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        // If backend sends validation array: map it
        if (json?.errors && Array.isArray(json.errors)) {
          const serverErrors = {};
          json.errors.forEach((err) => {
            if (err.param) serverErrors[err.param] = err.msg;
          });
          setErrors((prev) => ({
            ...prev,
            ...serverErrors,
            submit: json.message || "Validation failed",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            submit: json.message || "Send failed",
          }));
        }
      } else {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      }
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        submit: "Network error. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div ref={successRef} className="contact-form__success">
        <div className="contact-form__success-icon">
          <SuccessIcon />
        </div>
        <h3>Thank You!</h3>
        <p>
          Your message has been sent successfully. We'll get back to you within
          24 hours.
        </p>
        <CTAButton onClick={() => setIsSuccess(false)} variant="primary">
          Send Another Message
        </CTAButton>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
    >
      {errors.submit && (
        <div className="contact-form__error contact-form__error--submit">
          {errors.submit}
        </div>
      )}

      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor="name" className="contact-form__label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`contact-form__input ${
              errors.name ? "contact-form__input--error" : ""
            }`}
            placeholder="Enter your full name"
            required
          />
          {errors.name && (
            <span className="contact-form__error">{errors.name}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email" className="contact-form__label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`contact-form__input ${
              errors.email ? "contact-form__input--error" : ""
            }`}
            placeholder="Enter your email address"
            required
          />
          {errors.email && (
            <span className="contact-form__error">{errors.email}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="company" className="contact-form__label">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="Enter your company name"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="service" className="contact-form__label">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="contact-form__select"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="data-entry">Data Entry</option>
            <option value="creative-writing">Creative Writing</option>
            <option value="multiple">Multiple Services</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="contact-form__field">
          <label htmlFor="budget" className="contact-form__label">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="contact-form__select"
          >
            <option value="">Select budget range</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-50k">$15,000 - $50,000</option>
            <option value="50k+">$50,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="message" className="contact-form__label">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`contact-form__textarea ${
              errors.message ? "contact-form__textarea--error" : ""
            }`}
            placeholder="Tell us about your project, timeline, and any specific requirements..."
            required
          />
          {errors.message && (
            <span className="contact-form__error">{errors.message}</span>
          )}
        </div>
      </div>

      <div className="contact-form__actions">
        <CTAButton
          type="submit"
          variant="primary"
          size="large"
          disabled={isSubmitting}
          className="contact-form__submit"
        >
          {isSubmitting ? (
            <>
              <LoaderSpinner size="small" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </CTAButton>
      </div>
    </form>
  );
};

const SuccessIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="var(--primary-green)" />
    <path
      d="M7 12l3 3 7-7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ContactForm;

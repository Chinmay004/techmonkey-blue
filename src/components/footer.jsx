"use client";

import React, { useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEYS = [
  "fbff9244-62dc-4bf2-a205-539d1a2666fa",
  "9b53701b-3b85-4c5f-baeb-36e61612d1fb",
];

const FooterLink = ({ href = "#", children }) => (
  <li className="relative">
    <a
      href={href}
      className="text-sm text-gray-400 hover:text-white transition-all duration-300 inline-block py-1.5 relative group"
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-3 transition-all duration-300"></span>
        <span>{children}</span>
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 transition-all duration-500 group-hover:w-full"></span>
    </a>
  </li>
);

const FooterSection = ({ title, children }) => (
  <div className="relative">
    <div className="absolute -left-2 top-0 w-0.5 h-6 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
    <h4 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-5 relative">
      <span className="relative z-10">{title}</span>
      <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-gradient-to-r from-blue-400 to-transparent"></span>
    </h4>
    {Array.isArray(children) ? (
      <ul className="space-y-1.5 relative z-10">
        {children}
      </ul>
    ) : (
      <div className="relative z-10">{children}</div>
    )}
  </div>
);

const FooterContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setSubmitError("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
    setErrors({ name: "", email: "", phone: "" });
    setSubmitError("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    let newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await Promise.all(
        WEB3FORMS_ACCESS_KEYS.map(async (accessKey) => {
          const response = await fetch(WEB3FORMS_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: accessKey,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              subject: "New TechMonkeys Website Inquiry",
              message: `Lead Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
            }),
          });

          const data = await response.json();
          if (!data.success) {
            throw new Error(data.message || "Submission failed");
          }
        })
      );

      setIsModalOpen(false);
      setShowThankYou(true);
      setFormData({ name: "", email: "", phone: "" });
      setErrors({ name: "", email: "", phone: "" });

      setTimeout(() => {
        setShowThankYou(false);
      }, 3000);
    } catch (error) {
      setSubmitError(
        "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-gray-950 via-black to-black text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Footer Content - Compact Design */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
            {/* Company Info */}
            <div className="lg:col-span-1 relative">
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-50"></div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  techmonkeys
                </span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">
                Transforming businesses with cutting-edge technology solutions.
              </p>
              {/* <div className="flex items-center gap-3 relative z-10">
                <a
                  href="https://www.linkedin.com/company/techmonkeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 hover:scale-110 hover:rotate-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 hover:from-blue-500/30 hover:to-blue-600/30 backdrop-blur-sm hover:border-blue-400/70 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/techmonkeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 hover:scale-110 hover:rotate-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 hover:from-blue-400/30 hover:to-cyan-500/30 backdrop-blur-sm hover:border-blue-400/70 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/techmonkeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 hover:scale-110 hover:rotate-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 hover:from-gray-500/30 hover:to-gray-600/30 backdrop-blur-sm hover:border-gray-400/70 hover:shadow-[0_0_15px_rgba(156,163,175,0.4)]"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div> */}
            </div>

            {/* Quick Links */}
            <FooterSection title="Quick Links">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#projects">Portfolio</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#connect">Contact</FooterLink>
            </FooterSection>

            {/* Contact Info - Compact */}
            <div className="lg:col-span-1 relative">
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-50"></div>
              <FooterSection title="Contact">
                <div className="space-y-3.5">
                  <a 
                    href="tel:+971503900886"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-all duration-300 group relative"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex items-center justify-center group-hover:border-blue-400/50 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">+971 50 390 0886</span>
                  </a>
                  <a 
                    href="mailto:support@techmonkey.space"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-all duration-300 break-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-purple-600/20 transition-all duration-300 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium">support@techmonkey.space</span>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">
                      VUNE0650, Compass Building - Al Hulaia, Al Hulaia Industrial Zone-FZ, Ras Al Khaimah, UAE
                    </span>
                  </div>
                </div>
              </FooterSection>
            </div>

            {/* QR Code & CTA */}
            <div className="lg:col-span-1 relative">
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-50"></div>
              <FooterSection title="Connect">
                <div className="space-y-5">
                  <button 
                    onClick={handleOpenModal}
                    className="group relative w-full bg-gradient-to-r from-white to-gray-50 text-black text-sm font-bold py-3 px-6 rounded-xl hover:from-gray-50 hover:to-white transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get In Touch
                      <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <div className="flex items-center justify-start">
                    <a
                      href="https://www.techmonkey.space"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src="/qrcode.png"
                        alt="QR Code - Visit techmonkey.space"
                        className="relative w-32 h-32 bg-white p-2.5 rounded-xl border-2 border-gray-700/50 group-hover:border-white/70 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                      />
                    </a>
                  </div>
                </div>
              </FooterSection>
            </div>
          </div>

          {/* Bottom Bar - Enhanced */}
          <div className="border-t border-gradient-to-r from-transparent via-gray-700/30 to-transparent pt-6 pb-6 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500 text-center md:text-left">
                © 2025 <span className="font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">TechMonkeys</span>. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs">
                <a href="#privacy" className="text-gray-500 hover:text-white transition-all duration-300 relative group font-medium">
                  <span className="relative z-10">Privacy Policy</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="#terms" className="text-gray-500 hover:text-white transition-all duration-300 relative group font-medium">
                  <span className="relative z-10">Terms of Service</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="#disclaimer" className="text-gray-500 hover:text-white transition-all duration-300 relative group font-medium">
                  <span className="relative z-10">Disclaimer</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* Connect Form Modal */}
    {isModalOpen && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
        onClick={handleCloseModal}
      >
        <div 
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 border border-gray-700 animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white">
              Let's Connect
            </h2>
            <button
              onClick={handleCloseModal}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl leading-none"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label 
                htmlFor="footer-name" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="footer-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.name 
                    ? "border-red-500 focus:ring-red-500" 
                    : "border-gray-700 focus:ring-white focus:border-white"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="footer-email" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="footer-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.email 
                    ? "border-red-500 focus:ring-red-500" 
                    : "border-gray-700 focus:ring-white focus:border-white"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="footer-phone" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="footer-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.phone 
                    ? "border-red-500 focus:ring-red-500" 
                    : "border-gray-700 focus:ring-white focus:border-white"
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

            {submitError && (
              <p className="text-sm text-red-400 text-center">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white text-black px-6 py-3 rounded-lg font-medium transition duration-300 hover:scale-105 active:scale-95 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    )}

    {/* Thank You Popup */}
    {showThankYou && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-10 border border-gray-700 animate-scale-in text-center">
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white mb-2">
              Thank You!
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              We've received your information and will reach out to you soon.
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default FooterContent;

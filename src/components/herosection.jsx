"use client";

import React, { useState } from "react";

export default function HeroSection() {
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

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
    setErrors({ name: "", email: "", phone: "" });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
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

    // Here you would typically send the data to your backend
    // For now, we'll just show the thank you message
    setIsModalOpen(false);
    setShowThankYou(true);
    setFormData({ name: "", email: "", phone: "" });
    setErrors({ name: "", email: "", phone: "" });

    // Auto-close thank you popup after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 scale-x-[-1]"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute top-0 left-0 z-20 p-4 sm:p-6 md:p-12 lg:p-16 mt-5">
          <span 
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-syne animate-logo-entry brand-name-gradient "
            style={{ animationDelay: "0s" }}
          >
            techmonkeys
          </span>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center md:justify-end px-4 sm:px-6 md:px-12 lg:px-16 pb-24 sm:pb-28 md:pb-20 lg:pb-24">
          <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <div className="mb-6 sm:mb-8 md:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight font-syne font-normal mb-2 sm:mb-2 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
                Your Personal
              </h1>
              <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight md:leading-none font-syne font-bold break-words md:whitespace-nowrap animate-fade-in-up2 opacity-0" style={{ animationDelay: "0.6s" }}>
                Digital <br className="md:hidden" />Agency
              </h1>
            </div>

            <button
              onClick={handleOpenModal}
              className="bg-white text-black px-6 py-2.5 sm:px-8 md:px-10 md:py-3.5 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-200 transition duration-300 mb-8 sm:mb-10 md:mb-20 animate-fade-in opacity-0 hover:scale-105 cursor-pointer"
              style={{ minHeight: "44px", minWidth: "44px", animationDelay: "1s" }}
            >
              Connect Now
            </button>

          <div className="hidden md:block max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
              <span className="block animate-text-reveal opacity-0" style={{ animationDelay: "1.3s" }}>
                We are a UAE Based Design Agency. Lorem ipsum dolor sit amet,
              </span>
              <span className="block animate-text-reveal opacity-0" style={{ animationDelay: "1.5s" }}>
                consectetur adipiscing elit. Elementum felis, sed ullamcorper
              </span>
              <span className="block animate-text-reveal opacity-0" style={{ animationDelay: "1.7s" }}>
                tempus faucibus in imperdiet. Semper justo mauris sed fusce erat
              </span>
              <span className="block animate-text-reveal opacity-0" style={{ animationDelay: "1.9s" }}>
                aenean tristique.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <p className="text-xs sm:text-sm text-gray-400 animate-fade-in opacity-0" style={{ animationDelay: "2.1s" }}>
          <span className="inline-block animate-bounce-subtle">Scroll for more</span>
        </p>
      </div>

      {/* <div className="absolute bottom-4 left-0 right-0 z-10 px-4 md:hidden">
        <p className="text-l text-gray-400 leading-relaxed mb-15 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          We are a UAE Based Design Agency. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Elementum felis, sed ullamcorper
          tempus faucibus in imperdiet. Semper justo mauris sed fusce erat
          aenean tristique.
        </p>
      </div> */}
      </div>

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
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
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
                  htmlFor="phone" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
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

              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-300 hover:scale-105 active:scale-95"
              >
                Submit
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
}

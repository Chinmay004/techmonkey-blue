import React from "react";

const ContactInfo = ({ label, children, icon }) => (
  <div className="group">
    <p className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase mb-3">
      {label}
    </p>
    <div className="text-base text-gray-200 group-hover:text-white transition-all duration-300">
      {children}
    </div>
  </div>
);

const FooterLink = ({ href = "#", children }) => (
  <li>
    <a
      href={href}
      className="text-sm text-gray-400 hover:text-white transition-all duration-300 inline-block py-2 relative group"
      style={{ minHeight: "44px" }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
);

const FooterSection = ({ title, children }) => (
  <div>
    <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-6">
      {title}
    </h4>
    <ul className="space-y-3">
      {children}
    </ul>
  </div>
);

const FooterContent = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-black to-black text-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      
      <div className="relative font-sans h-full w-full max-w-7xl mx-auto flex flex-col justify-between px-4 sm:px-8 md:px-14 lg:px-16">
        {/* CTA Section */}
        <div className="pt-16 md:pt-20 pb-12 md:pb-16 border-b border-gray-800/50">
          <div className="max-w-2xl">
            <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Let's discuss how we can transform your business with cutting-edge technology solutions.
            </p>
            <button 
              className="group relative bg-white text-black text-sm font-semibold py-4 px-10 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              style={{ minHeight: "48px" }}
            >
              <span className="relative z-10 tracking-wide">GET IN TOUCH</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                techmonkeys
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
                Enhance your Digital Strategy with innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons Placeholder */}
                {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300 hover:scale-110"
                    aria-label={social}
                  >
                    <span className="text-xs font-semibold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <FooterSection title="Quick Links">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#portfolio">Portfolio</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
            </FooterSection>

            {/* Resources */}
            <FooterSection title="Resources">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </FooterSection>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-6">
                Contact
              </h4>
              <div className="space-y-6">
                <ContactInfo label="Phone">
                  <a 
                    href="tel:+18901235261"
                    className="inline-block hover:text-white transition-colors duration-300"
                    style={{ minHeight: "44px", paddingTop: "4px", paddingBottom: "4px" }}
                  >
                    +1 890 123-52-61
                  </a>
                </ContactInfo>
                <ContactInfo label="Email">
                  <a 
                    href="mailto:info@logoipsum.com"
                    className="inline-block hover:text-white transition-colors duration-300 break-all"
                    style={{ minHeight: "44px", paddingTop: "4px", paddingBottom: "4px" }}
                  >
                    info@logoipsum.com
                  </a>
                </ContactInfo>
                <ContactInfo label="Hours">
                  <p className="text-base">24/7 Available</p>
                </ContactInfo>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50 pt-8 pb-8 md:pb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500 text-center md:text-left">
                © 2025 TechMonkeys. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs text-gray-500">
                <a href="#privacy" className="hover:text-gray-300 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-gray-300 transition-colors duration-300">
                  Terms of Service
                </a>
                <button className="hover:text-gray-300 transition-colors duration-300">
                  Disclaimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;

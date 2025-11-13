import React from "react";

const ContactInfo = ({ label, children }) => (
  <div>
    <p className="text-xs font-semibold tracking-wider text-gray-500 mb-2">
      {label}
    </p>
    <div className="text-base text-gray-300 hover:text-white transition-colors duration-300">
      {children}
    </div>
  </div>
);

const FooterLink = ({ href = "#", children }) => (
  <li>
    <a
      href={href}
      className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 inline-block py-2"
      style={{ minHeight: "44px", minWidth: "44px" }}
    >
      {children}
    </a>
  </li>
);

const FooterContent = () => {
  return (
    <div className="font-sans text-white h-full w-full max-w-7xl mx-auto flex flex-col justify-between px-4 sm:px-8 md:px-14">
      <div>
        {/* CTA Section */}
        <div className="mb-12 md:mb-16 pt-8 md:pt-14">
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl mb-4 max-w-lg">
            Do you have any questions?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 md:mb-8 max-w-md pt-2 md:pt-4">
            Feel free to send us your questions or request a free consultation.
          </p>
          <button 
            className="bg-white text-black text-sm font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            SEND A MESSAGE
          </button>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 mb-12 md:mb-16">
          <button 
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-gray-300 cursor-pointer transition-colors py-2"
            style={{ minHeight: "44px" }}
          >
            <span>Disclaimer</span>
            <span>+</span>
          </button>
        </div>

        {/* Footer Links */}
        <div className="mb-8 md:mb-12">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            <FooterLink>Services</FooterLink>
            <FooterLink>Pricing</FooterLink>
            <FooterLink>Sale</FooterLink>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Contacts</FooterLink>
          </ul>
        </div>
      </div>

      {/* Contact Info and Branding */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 md:gap-10 pb-8 md:pb-14">
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          <div className="space-y-6 md:space-y-8">
            <ContactInfo label="Sign Up">
              <a 
                href="tel:+18901235261"
                className="inline-block"
                style={{ minHeight: "44px", minWidth: "44px", paddingTop: "8px", paddingBottom: "8px" }}
              >
                +1 890 123-52-61
              </a>
            </ContactInfo>
            <ContactInfo label="Email">
              <a 
                href="mailto:info@logoipsum.com"
                className="inline-block"
                style={{ minHeight: "44px", minWidth: "44px", paddingTop: "8px", paddingBottom: "8px" }}
              >
                info@logoipsum.com
              </a>
            </ContactInfo>
          </div>
          <div className="space-y-6 md:space-y-8">
            <ContactInfo label="Opening Hours">
              <p className="text-base pt-2 pb-2">24/7</p>
            </ContactInfo>
          </div>
        </div>

        {/* Brand Section */}
        <div className="w-full lg:w-auto text-left lg:text-right mt-6 lg:mt-0">
          <h3 className="text-2xl md:text-3xl text-white mb-3 md:mb-4">techmonkeys</h3>
          <p className="text-sm text-gray-400 mb-3 md:mb-4 max-w-xs lg:ml-auto"></p>
          <p className="text-xs text-gray-600">Enhance your Digital Strategy with Tech Monkey<br />© 2025 — Copyright</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;

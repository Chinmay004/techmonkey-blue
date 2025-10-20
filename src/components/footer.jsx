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
      className="text-base text-gray-300 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

const FooterContent = () => {
  return (
    <div className="font-sans text-white h-full max-w-7xl flex flex-col justify-between">
      <div>
        <div className="mb-16">
          <h2 className="font-syne text-4xl md:text-5xl px-14 pt-14 mb-4 max-w-lg">
            Do you have any questions?
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-md px-14 pt-4">
            Feel free to send us your questions or request a free consultation.
          </p>
          <button className="bg-white text-black text-sm font-bold py-3 ml-14 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300">
            SEND A MESSAGE
          </button>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-400 cursor-pointer w-fit pl-14">
            <span>Disclaimer</span>
            <span>+</span>
          </div>
        </div>
        <div className="min-w-[100px] flex-col pl-14">
          <ul className="flex space-y-9 space-x-3">
            <FooterLink>Services</FooterLink>
            <FooterLink>Pricing</FooterLink>
            <FooterLink>Sale</FooterLink>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Contacts</FooterLink>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start gap-10 md:gap-16 pb-14 pl-14">
        <div className="flex flex-wrap items-start gap-10 sm:gap-16 lg:gap-24">
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24">
            <div className="space-y-8">
              <ContactInfo label="Sign Up">
                <a href="tel:+18901235261">+1 890 123-52-61</a>
              </ContactInfo>
              <ContactInfo label="Email">
                <a href="mailto:info@logoipsum.com">info@logoipsum.com</a>
              </ContactInfo>
            </div>
            <div className="space-y-8">
              <ContactInfo label="Opening Hours">
                <p className="text-base">24/7</p>
              </ContactInfo>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-auto text-left lg:text-right mt-10 lg:mt-0">
          <h3 className="text-3xl text-white mb-4">techmonkeys</h3>
          <p className="text-sm text-gray-400 mb-4 max-w-xs lg:ml-auto"></p>
          <p className="text-xs text-gray-600">© 2025 — Copyright</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;

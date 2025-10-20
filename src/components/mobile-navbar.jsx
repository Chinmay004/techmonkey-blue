"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Connect", href: "#connect" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className="fixed md:hidden top-6 right-6 z-50 p-2 rounded-md hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <Image
          src="/hamburger-menu.svg"
          width={32}
          height={32}
          alt="menu"
          className="w-8 h-8"
        />
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block text-white hover:text-blue-400 transition-colors duration-300 text-xl font-medium tracking-wider py-3"
                  style={{ minHeight: "44px", minWidth: "44px" }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isInHero, setIsInHero] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're in the hero section (first viewport height)
      const heroHeight = window.innerHeight;
      const isCurrentlyInHero = window.scrollY < heroHeight * 0.9;
      setIsInHero(isCurrentlyInHero);
      
      // If we're entering hero section, reset hover state
      if (isCurrentlyInHero) {
        setIsHovered(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check on initial load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Connect", href: "#connect" },
  ];

  // Navbar is visible if: in hero section OR hovered
  const isVisible = isInHero || isHovered;

  return (
    <>
      {/* Hover trigger area on the right edge - invisible trigger zone for non-hero sections */}
      {!isInHero && (
        <div
          className="hidden md:block fixed right-0 top-0 h-screen w-20 z-40"
          onMouseEnter={() => setIsHovered(true)}
        />
      )}
      
      <nav 
        className={`hidden md:flex fixed right-0 top-0 h-screen w-28 bg-black/20 backdrop-blur-2xl flex-col items-center justify-center z-50 transition-all duration-500 ease-in-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-full"
        }`}
        style={{
          pointerEvents: isVisible ? 'auto' : 'none'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          // Only hide on mouse leave if not in hero section
          if (!isInHero) {
            setIsHovered(false);
          }
        }}
      >
        <ul className="space-y-12 flex flex-col gap-28 items-center justify-between">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-white hover:text-blue-400 transition-colors duration-300 transform rotate-90 inline-block text-xl tracking-wider whitespace-nowrap"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

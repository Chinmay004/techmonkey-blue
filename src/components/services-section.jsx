"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ServiceCard = ({ title, description, items, iconSrc, largeIcon = false, noBottomMargin = false, animationDelay = "0s", flyDirection = "left", isVisible = false, isMobile = false }) => {
  return (
    <div 
      className={`relative rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden ${isVisible ? 'animate-card-bg' : 'service-card-hidden'}`}
      style={{
        backgroundColor: "#191919ff",
        border: "1px solid #2B2B2B"
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay"
        }}
      />

      {iconSrc && (
        <div className={`absolute bottom-0 right-0 pointer-events-none ${
          largeIcon 
            ? "w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]" 
            : "w-48 h-48 sm:w-64 sm:h-64 md:w-70 md:h-70"
        } ${isVisible ? 'animate-card-image' : ''}`}>
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            fill
            className="object-contain object-bottom-right"
          />
        </div>
      )}

      <div className={`relative z-10 space-y-4 sm:space-y-6 ${isVisible ? 'animate-card-text' : ''}`}>
        <h3 className="text-2xl sm:text-2xl font-bold text-white font-syne">
          {title}
        </h3>

        <ul className={`text-sm sm:text-base text-gray-400 ${noBottomMargin ? 'mb-0' : 'mb-40'}`} >
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-gray-500 mt-1">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Web Development and Design",
    items: [
      "Responsive & Progressive Websites – Seamless across devices and platforms.",
      "UX Systems that Learn from You – Interfaces that adapt intelligently.",
      "Connected Platforms & APIs – Integrations that make your web ecosystem smarter.",
      "Branding & Launch Strategies – From concept to deployment, every detail counts."
    ],
    iconSrc: "/web-development.svg"
  },
  {
    title: "Mobile App Development",
    items: [
      "The future lives in your hand. We build apps that feel crafted, not coded.",
      "Mobile Apps (iOS, Android)",
      "UX Systems that Learn from You",
      "Connected Devices & IoT",
      "App Branding & Launch Ecosystems"
    ],
    iconSrc: "/mobile-app-development.svg"
  },
  {
    title: "Branding",
    items: [
      "We craft identities that shape how the world remembers you.",
      "Brand Strategy & Naming Architecture",
      "Visual & Verbal Systems",
      "Cultural Positioning",
      "Rebranding for Scale & Legacy",
      '"Logos fade. Symbols live forever."'
    ],
    iconSrc: "/branding.svg"
  },
  {
    title: "CRM",
    items: [
      "We build CRMs that feel intelligent, not just functional.",
      "Smart Contact Management – Organize and track your customers effortlessly.",
      "AI-Driven Insights – Systems that learn and suggest the next best actions.",
      "Automated Workflows – Streamline tasks, follow-ups, and communications.",
      "Analytics & Reporting – Clear, actionable insights to grow your business."
    ],
    iconSrc: "/CRM.svg"
  }
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-syne">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 h-full">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              items={service.items}
              iconSrc={service.iconSrc}
              isVisible={isVisible}
              isMobile={isMobile}
            />
          ))}
          
          <div className="md:col-span-2 lg:col-span-3  ">
            <ServiceCard
              title={services[3].title}
              items={services[3].items}
              iconSrc={services[3].iconSrc}
              largeIcon={true}
              noBottomMargin={true}
              isVisible={isVisible}
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

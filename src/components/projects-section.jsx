"use client";

import React from "react";
import Image from "next/image";

const projectsData = [
  {
    id: "sartawi-1",
    category: "Real Estate",
    title: "Website Redesign for Sartawi Properties",
    description:
      "Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.",
    imageSrc: "/sartawi-project.png",
    imageAlt: "Sartawi Properties Website Preview",
    link: "https://sartawiproperties.com",
    useEmbed: true,
  },
  {
    id: "pacific-pearl",
    category: "Hospitality",
    title: "Website Redesign for Pacific Pearl Hotels",
    description:
      "Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.",
    imageSrc: "/pacific-pearl-hotels.png",
    imageAlt: "Pacific Pearl Hotels Website Preview",
    link: "https://pacificpearlhotels.com",
    useEmbed: false,
  },
  {
    id: "fixnex",
    category: "Maintenance",
    title: "Website Redesign for Fixnex Maintenance",
    description:
      "Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.",
    imageSrc: "/finex-project.png",
    imageAlt: "Fixnex Maintenance Website Preview",
    link: "https://fixnex.vercel.app",
    useEmbed: true,
  },
];

const StatItem = ({ label, value }) => (
  <div className="text-center">
    <p className="text-xs sm:text-sm text-gray-400 mb-2">{label}</p>
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
      {value}
    </p>
  </div>
);

const ProjectCard = ({ project }) => {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden border border-gray-800"
      style={{
        background:
          "linear-gradient(180deg, #121111 0%, #000000 50%, #000624 100%)",
      }}
    >
      <div className="p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12 lg:items-start">
          <div className="flex flex-col justify-start lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="inline-block w-fit">
              <span
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-white font-medium"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-syne text-white leading-tight">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 overflow-hidden group"
                style={{
                  minHeight: "44px",
                  minWidth: "44px",
                  background:
                    "linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(59, 130, 246, 0.6) 100%)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px 0 rgba(37, 99, 235, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="relative z-10">View Project</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.8) 100%)",
                  }}
                />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-end items-center lg:items-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900 group">
              {project.useEmbed ? (
                <div className="w-full h-full" style={{ overflow: 'hidden' }}>
                  <iframe
                    src={project.link}
                    title={project.imageAlt}
                    className="border-0"
                    style={{ 
                      width: '200%', 
                      height: '200%', 
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left'
                    }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[200%] animate-scroll-slow">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                aria-label="Open website in new tab"
                title="Open website"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-15">
            Our Portfolio
          </h2>
          <p className="text-xl sm:text-xl md:text-xl text-gray-300 max-w-full mx-auto leading-relaxed px-4">
            At Tech Monkeys, we deliver innovative, tailored solutions to meet
            your business needs. Our experienced team ensures every solution
            addresses current demands and supports long-term growth. We
            specialize in key tech areas that help your business stay
            competitive and thrive in a digital-first world.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 md:gap-24 lg:gap-32 mb-12 sm:mb-16 md:mb-20">
          <StatItem label="Total Clients" value="10 +" />
          <StatItem label="Total Projects" value="10 +" />
          <StatItem label="Countries" value="120 +" />
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
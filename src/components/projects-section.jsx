"use client";

import React, { useState } from "react";

const projectsData = [
  {
    id: "sartawi",
    name: "Sartawi Properties",
    category: "Real Estate",
    title: "Sartawi Properties",
    videoUrl: "/sartawi-project-video.mp4",
    link: "#",
  },
  {
    id: "pearl",
    name: "Pearl Pacific",
    category: "Hospitality",
    title: "Pearl Pacific Hotels",
    videoUrl: "/pearl-project-video.mp4",
    link: "#",
  },
  {
    id: "level-up",
    name: "Level Up Investments",
    category: "Fintech",
    title: "Level Up Investments",
    videoUrl: "/levelup-project-video.mp4",
    link: "#",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projectsData[1]);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-black text-white flex items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16"
    >
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 lg:gap-20 items-start">
        {/* Project List */}
        <div className="flex flex-col md:col-span-1 md:pt-16">
          <ul className="flex flex-row md:flex-col gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 hide-scrollbar">
            {projectsData.map((project) => (
              <li key={project.id} className="flex-shrink-0 md:flex-shrink">
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`text-lg sm:text-xl md:text-2xl font-montserrat transition-colors duration-300 text-left whitespace-nowrap md:whitespace-normal ${
                    selectedProject.id === project.id
                      ? "text-white font-medium"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                  style={{ minHeight: "44px", minWidth: "44px" }}
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Display Card */}
        <div
          className="relative md:col-span-4 rounded-2xl shadow-lg overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #00020E 0%, #000A54 100%)",
          }}
        >
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-700/30 blur-3xl opacity-50 rounded-full z-0" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6 sm:px-10 md:px-16 py-12 sm:py-20 md:py-32 h-full">
            {/* Project Info */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <span className="border border-gray-600 rounded-full px-4 py-1 text-xs sm:text-sm text-gray-300 w-fit">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-syne">
                {selectedProject.title}
              </h3>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900/50 hover:bg-blue-900/80 text-white px-6 py-3 rounded-full text-base sm:text-lg w-fit transition-colors duration-300"
                style={{ minHeight: "44px", minWidth: "44px" }}
              >
                View Project
              </a>
            </div>

            {/* Project Video */}
            <div className="flex items-center justify-center">
              <video
                key={selectedProject.id}
                className="rounded-lg shadow-2xl w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={selectedProject.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


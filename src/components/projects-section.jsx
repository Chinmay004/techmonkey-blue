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
      className="min-h-screen w-full bg-black text-white flex items-center justify-center py-24 px-8 md:px-16"
    >
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-20 items-start">
        <div className="flex flex-col md:col-span-1 pt-16">
          <ul className="space-y-6">
            {projectsData.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`text-2xl font-montserrat transition-colors duration-300 text-left ${
                    selectedProject.id === project.id
                      ? "text-white font-medium"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative md:col-span-4 rounded-2xl shadow-lg overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #00020E 0%, #000A54 100%)",
          }}
        >
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-700/30 blur-3xl opacity-50 rounded-full z-0" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-16 py-32 h-full">
            <div className="flex flex-col justify-center space-y-6">
              <span className="border border-gray-600 rounded-full px-4 py-1 text-sm text-gray-300 w-fit">
                {selectedProject.category}
              </span>
              <h3 className="text-4xl md:text-5xl font-syne">
                {selectedProject.title}
              </h3>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900/50 hover:bg-blue-900/80 text-white px-6 py-3 rounded-full text-lg w-fit transition-colors duration-300"
              >
                View Project
              </a>
            </div>

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


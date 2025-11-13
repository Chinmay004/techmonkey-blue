import React from "react";
import Image from "next/image";

const ProjectCard = ({ 
  category = "Real Estate", 
  title = "Website Redesign for Sartawi Properties",
  description = "Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.",
  buttonText = "View Project",
  buttonHref = "#",
  imageSrc = "/project-preview.png",
  imageAlt = "Project Preview",
  logos = [],
  onButtonClick
}) => {
  return (
    <div className="relative w-full h-full min-h-[500px] bg-black rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
        {/* Left Section - Content */}
        <div className="flex flex-col justify-between lg:w-1/2 z-10">
          <div>
            {/* Category Badge */}
            <div className="inline-block mb-6">
              <span className="px-5 py-2 border border-gray-600 rounded-full text-sm text-gray-300 font-medium">
                {category}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              {description}
            </p>
          </div>

          {/* View Project Button */}
          <div>
            <button
              onClick={onButtonClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ minHeight: "44px", minWidth: "44px" }}
            >
              {buttonText}
            </button>
          </div>
        </div>

        {/* Right Section - Project Preview */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-6">
          {/* Project Screenshot/Mockup */}
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Client Logos */}
          {logos && logos.length > 0 && (
            <div className="flex items-center justify-center gap-6 flex-wrap opacity-80">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="relative h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                >
                  {logo.src ? (
                    <Image
                      src={logo.src}
                      alt={logo.alt || `Client logo ${index + 1}`}
                      height={32}
                      width={logo.width || 100}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">{logo.name}</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Service Badge (Optional) */}
          <div className="mt-4">
            <span className="text-sm text-gray-500">Our Services</span>
          </div>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;

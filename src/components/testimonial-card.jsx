import React from "react";
import Image from "next/image";

const Star = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#FBBF24" : "none"}
    stroke={filled ? "#FBBF24" : "#4B5563"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-all duration-200"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function TestimonialCard({
  text,
  name,
  title,
  rating,
  imageUrl,
}) {
  return (
    <div
      className="group relative w-[320px] sm:w-[380px] md:w-[460px] lg:w-[580px] flex flex-col p-8 sm:p-10 rounded-2xl sm:rounded-3xl flex-shrink-0 h-full border hover:scale-[1.02] hover:border-blue-500/50 testimonial-card"
      style={{
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.98) 50%, rgba(15, 23, 42, 0.95) 100%)",
        borderColor: "rgba(59, 130, 246, 0.3)",
      }}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-blue-400"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < rating} />
          ))}
        </div>

        {/* Testimonial Text */}
        <div className="text-gray-100 text-[15px] sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed font-light flex-grow">
          <p className="relative z-10">"{text}"</p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-800/50">
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4))",
              }}
            />
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-gray-700/50 group-hover:ring-blue-500/50 transition-all duration-300 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <Image
                src={imageUrl}
                alt={name}
                width={56}
                height={56}
                className="rounded-full w-full h-full object-cover"
                unoptimized={imageUrl.startsWith('http')}
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-base sm:text-lg mb-1 truncate">
              {name}
            </p>
            <p className="text-gray-400 text-sm sm:text-base truncate">
              {title}
            </p>
          </div>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <div 
        className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

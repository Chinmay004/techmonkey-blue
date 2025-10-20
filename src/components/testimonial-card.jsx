import React from "react";
import Image from "next/image";

const Star = ({ filled }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "#3B82F6" : "none"}
    stroke={filled ? "#3B82F6" : "#3B82F6"}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-star mx-0.5 sm:w-6 sm:h-6"
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
      className="w-[280px] sm:w-[340px] md:w-[440px] lg:w-[580px] m-2 flex flex-col p-6 sm:p-8 border border-blue-800 rounded-lg flex-shrink-0 h-full"
      style={{
        background: "linear-gradient(253.29deg, #00114A 3.82%, #000000 96.51%)",
      }}
    >
      <div className="text-white text-base sm:text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
        {text}
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto gap-4 sm:gap-0">
        <div className="flex items-center">
          <Image
            src={imageUrl}
            alt={name}
            width={50}
            height={50}
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover flex-shrink-0"
          />
          <div className="ml-3 sm:ml-4">
            <p className="text-white font-semibold text-base sm:text-lg">{name}</p>
            <p className="text-gray-400 text-xs sm:text-sm">{title}</p>
          </div>
        </div>
        <div className="flex items-center border border-blue-700 rounded-full px-2 sm:px-3 py-1 sm:py-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < rating} />
          ))}
        </div>
      </div>
    </div>
  );
}

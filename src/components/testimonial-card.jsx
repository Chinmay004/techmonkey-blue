import React from "react";
import Image from "next/image";

const Star = ({ filled }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? "#3B82F6" : "none"}
    stroke={filled ? "#3B82F6" : "#3B82F6"}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-star mx-0.5"
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
      className="w-[300px] md:w-[580px] m-2 flex flex-col p-8 border border-blue-800 rounded-lg flex-shrink-0 h-full"
      style={{
        background: "linear-gradient(253.29deg, #00114A 3.82%, #000000 96.51%)",
      }}
    >
      <div className="text-white text-xl mb-10 leading-relaxed">{text}</div>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center">
          <Image
            src={imageUrl}
            alt={name}
            width={50}
            height={50}
            className="rounded-full w-12 h-12 object-cover"
          />
          <div className="ml-4">
            <p className="text-white font-semibold text-lg">{name}</p>
            <p className="text-gray-400 text-sm">{title}</p>
          </div>
        </div>
        <div className="flex items-center border border-blue-700 rounded-full px-3 py-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < rating} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function TestimonialCard({
  text,
  name,
  title,
  rating,
  imageUrl,
}) {
  return (
    <div
      className="w-[250px] md:w-[500px] m-2 flex flex-col py-20 px-36 border-1 border-blue-600 rounded-md"
      style={{
        background: "linear-gradient(253.29deg, #00114A 3.82%, #000000 96.51%)",
      }}
    >
      <div className="text-white text-sm">
      Lorem Ipsum
      </div>
      <div className="flex"></div>
    </div>
  );
}

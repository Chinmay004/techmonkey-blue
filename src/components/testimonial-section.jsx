import React from "react";
import TestimonialCard from "./testimonial-card.jsx";

const testimonialsData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    person: "Mickael Grants",
    title: "CEO of Apples to Oranges",
    rating: 5,
    imageUrl: "/person.png",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    person: "Jane Doe",
    title: "Founder of TechCorp",
    rating: 5,
    imageUrl: "/person.png",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    person: "John Smith",
    title: "Lead Developer at InnoVate",
    rating: 5,
    imageUrl: "/person.png",
  },
  {
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    person: "Sarah Lee",
    title: "Marketing Head at Solutions",
    rating: 5,
    imageUrl: "/person.png",
  },
];

const TestimonialsSection = () => {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee my-4">
        {duplicatedTestimonials.map((item, index) => (
          <div className="mx-2" key={index}>
            <TestimonialCard
              name={item.person}
              text={item.text}
              title={item.title}
              rating={item.rating}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;

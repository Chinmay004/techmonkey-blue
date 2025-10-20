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
    rating: 4,
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
  return testimonialsData.map((item, index) => (
    <TestimonialCard
      name={item.person}
      text={item.text}
      title={item.title}
      rating={item.rating}
      imageUrl={item.imageUrl}
      key={index}
    ></TestimonialCard>
  ));
};

export default TestimonialsSection;

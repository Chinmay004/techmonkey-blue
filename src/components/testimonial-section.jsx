import React from "react";
import TestimonialCard from "./testimonial-card.jsx";

const testimonialsData = [
  {
    text: "Tech Monkeys transformed our online presence completely. Their team delivered a stunning website redesign that increased our bookings by 40%. Professional, responsive, and truly understand hospitality industry needs.",
    person: "Ahmed Al-Rashid",
    title: "Owner, Pacific Pearl Hotels",
    rating: 5,
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed&backgroundColor=b6e3f4,c0aede,d1d4f9",
  },
  {
    text: "Outstanding work on our real estate platform! The website is fast, modern, and user-friendly. Tech Monkeys exceeded our expectations with their attention to detail and commitment to delivering quality on time.",
    person: "Fatima Zahra",
    title: "Director, Sartawi Properties",
    rating: 5,
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima&backgroundColor=ffd5dc,ffdfbf,d1d4f9",
  },
  {
    text: "Working with Tech Monkeys was a game-changer for our maintenance business. They created an intuitive platform that streamlined our operations and improved customer experience significantly. Highly recommended!",
    person: "Omar Hassan",
    title: "Founder, Fixnex Maintenance",
    rating: 5,
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar&backgroundColor=b6e3f4,c0aede,ffd5dc",
  },
  {
    text: "The team at Tech Monkeys is incredibly talented and professional. They brought our vision to life with a beautiful, functional website that perfectly represents our brand. The entire process was smooth and collaborative.",
    person: "Aisha Malik",
    title: "CEO, Digital Solutions Co.",
    rating: 5,
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&backgroundColor=ffd5dc,ffdfbf,c0aede",
  },
];

const TestimonialsSection = () => {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];
  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)",
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)",
        }}
      />
      
      {/* Cards Container */}
      <div className="flex w-max animate-marquee gap-4 sm:gap-6">
        {duplicatedTestimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.person}
            text={item.text}
            title={item.title}
            rating={item.rating}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;

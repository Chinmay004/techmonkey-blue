import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover object-bottom-left z-0 rotate-z-180"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* <div className="absolute inset-0 bg-black opacity-60 z-10"></div> */}
      <div className="absolute top-0 left-0 z-20 p-8 md:p-16">
        <span className="text-2xl md:text-4xl font-medium font-montserrat">
          techmonkeys
        </span>
      </div>

      <div className="absolute bottom-0 left-0 z-20 px-4 sm:px-8 md:px-16 my-12 sm:my-16 md:my-20 max-w-5xl pb-12 sm:pb-16 md:pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-syne font-normal">
          Enhance your Digital Strategy
          <br />
          with techmonkeys
        </h1>

        <button 
          className="bg-white text-black px-6 sm:px-8 mt-4 sm:mt-6 py-3 rounded-full text-base sm:text-lg hover:bg-gray-200 transition duration-300"
          style={{ minHeight: "44px", minWidth: "44px" }}
        >
          <a href="#connect">Connect Now</a>
        </button>
      </div>
    </div>
  );
}

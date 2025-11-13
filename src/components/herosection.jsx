import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 scale-x-[-1]"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute top-0 left-0 z-20 p-4 sm:p-6 md:p-12 lg:p-16">
        <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium font-montserrat">
          techmonkeys
        </span>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center md:justify-end px-4 sm:px-6 md:px-12 lg:px-16 pb-24 sm:pb-28 md:pb-20 lg:pb-24">
        <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <div className="mb-6 sm:mb-8 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight font-syne font-normal mb-2 sm:mb-2">
              Your Personal
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight md:leading-none font-syne font-bold break-words md:whitespace-nowrap">
              Digital <br className="md:hidden" />Agency
            </h1>
          </div>

          <button
            className="bg-white text-black px-6 py-2.5 sm:px-8 md:px-10 md:py-3.5 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-200 transition duration-300 mb-8 sm:mb-10 md:mb-20"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <a href="#connect">Connect Now</a>
          </button>

          <div className="hidden md:block max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
              We are a UAE Based Design Agency. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Elementum felis, sed ullamcorper
              tempus faucibus in imperdiet. Semper justo mauris sed fusce erat
              aenean tristique.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <p className="text-xs sm:text-sm text-gray-400">
          Scroll for more
        </p>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-10 px-4 md:hidden">
        <p className="text-l text-gray-400 leading-relaxed mb-15">
          We are a UAE Based Design Agency. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Elementum felis, sed ullamcorper
          tempus faucibus in imperdiet. Semper justo mauris sed fusce erat
          aenean tristique.
        </p>
      </div>
    </div>
  );
}

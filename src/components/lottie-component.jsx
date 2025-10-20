"use client";

import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";

const LottieComponent = ({ filename }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(`/scenes/${filename}`)
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, [filename]);

  const options = {
    animationData,
    loop: true,
  };

  const { View } = useLottie(options, {
    width: "100%",
  });

  return (
    <div className="w-full lg:w-auto px-4 sm:px-8 md:px-14 lg:px-28">
      <div className="flex items-start justify-center lg:justify-start">
        <div className="rounded-xl overflow-hidden w-full max-w-md lg:max-w-lg">
          {animationData ? View : "Loading animation..."}
        </div>
      </div>
    </div>
  );
};

export default LottieComponent;

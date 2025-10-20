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
    <div className="px-4 md:px-28">
      {" "}
      <div className="flex items-start gap-14">
        {" "}
        <div className="rounded-xl overflow-hidden">
          {animationData ? View : "Loading animation..."}
        </div>
      </div>
    </div>
  );
};

export default LottieComponent;

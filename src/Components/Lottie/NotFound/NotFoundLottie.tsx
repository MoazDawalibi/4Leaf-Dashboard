import React from "react";
import Lottie from "lottie-react"; // Default import
import animationData from "./NotFound.json"; // Import your Lottie JSON animation

const NotFoundLottie = () => {
  return (
    <div className="cc">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default NotFoundLottie;

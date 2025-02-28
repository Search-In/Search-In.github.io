import React from "react";
import doller from "../images/image4.png"; // Dollar Icon
import percentage from "../images/image5.png"; // Percentage Icon
import heroImage from "../images/image6.png"; // Rectangle Background

const CustomIcon = () => {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Outer Circle with White Background & Purple Outline */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-white outline outline-2 outline-[#ECE9FF]">
        
        {/* Inner Circle */}
        <div className="w-12 h-12 bg-[#ECE9FF] rounded-full flex items-center justify-center relative">
          {/* Hero Image (Rectangle) */}
          <img src={heroImage} alt="Hero Icon" className="w-8 h-8 " />

          {/* Dollar Icon Centered on Hero Image */}
          <img src={doller} alt="Dollar Icon" className="w-5 h-5 absolute" />
        </div>
        
      </div>

      {/* Shield Icon - Bottom Right */}
      <div className="absolute bottom-[-2px] right-[-0.7px] w-7 h-7 bg-[#6D5DFD] rounded-full flex items-center justify-center">
        <img src={percentage} alt="Percentage Icon" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default CustomIcon;

import React from "react";
import doller from "../images/image8.png"; // Dollar Icon
import percentage from "../images/image5.png"; // Percentage Icon
import heroImage from "../images/image7.png"; // Rectangle Background

const CustomIcon = () => {
  return (
    <div className="relative w-16 h-16">
      {/* Outer Circle with White Background & Purple Outline */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-white outline outline-2 outline-[#ECE9FF]">
        {/* Inner Circle */}
        <div className="w-12 h-12 bg-[#ECE9FF] rounded-full flex items-center justify-center">
          {/* White Rectangle and Percentage Icon Container */}
          <div className="relative flex items-center justify-center">
            {/* Rectangle Background */}
            <img src={heroImage} alt="" className="w-6 h-6" />
            
            {/* Percentage Icon */}
            <img 
              src={percentage} 
              alt="" 
              className="absolute w-2 h-2" 
            />
          </div>
        </div>
      </div>

      {/* Dollar Icon - Bottom Right */}
      <div className="absolute bottom-0 right-0">
        <div className="w-7 h-7 bg-[#6D5DFD] rounded-full flex items-center justify-center">
          <img 
            src={doller} 
            alt="" 
            className="w-4 h-4" 
          />
        </div>
      </div>
    </div>
  );
};

export default CustomIcon;
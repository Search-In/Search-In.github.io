import React from "react";
import location from "../images/image9.png"; // Location Icon
import home from "../images/image11.png"; // Home Icon
import heroImage from "../images/image12.png"; // Hero Image
import dot from "../images/image10.png"; // Dot
import cornerTopLeft from "../images/graphics22.png"; // Top-left Corner
import cornerTopRight from "../images/graphics23.png"; // Top-right Corner
import cornerBottomLeft from "../images/graphics26.png"; // Bottom-left Corner
import cornerBottomRight from "../images/graphics27.png"; // Bottom-right Corner

const CustomIcon = () => {
  return (
    <div className="relative w-16 h-16">
      {/* Outer Circle with Light Purple Background & White Border */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-white outline outline-2 outline-[#ECE9FF]">
        {/* Inner Circle (Lighter Purple) */}
        <div className="w-12 h-12 bg-[#ECE9FF] rounded-full flex items-center justify-center relative">
          {/* Location Icon */}
          <img src={location} alt="" className="w-4 h-5 z-10" />
          
          <div className="absolute flex items-center justify-center z-20">
            <img src={dot} alt="" className="w-1 h-1" />
          </div>
          {/* Four Corners */}
          <img 
            src={cornerTopLeft} 
            alt="" 
            className="absolute top-2 left-2.5 w-2 h-2 opacity-80"
          />
          <img 
            src={cornerTopRight} 
            alt="" 
            className="absolute top-2 right-2.5 w-2 h-2 opacity-80"
          />
          <img 
            src={cornerBottomLeft} 
            alt="" 
            className="absolute bottom-2 left-2.5 w-2 h-2 opacity-80"
          />
          <img 
            src={cornerBottomRight} 
            alt="" 
            className="absolute bottom-2 right-2.5 w-2 h-2 opacity-80"
          />
        </div>
      </div>

      {/* Home Icon - Bottom Right */}
      <div className="absolute bottom-0 right-0">
        <img src={home} alt="" className="w-6 h-6" />
        
        {/* Hero Image positioned inside home icon */}
        <img 
          src={heroImage} 
          alt="" 
          className="absolute bottom-[4px]  right-[3.5px] w-4 h-4 justify-center" 
        />
      </div>
    </div>
  );
};

export default CustomIcon;
import React from "react";
import {  Check, Shield } from "lucide-react";
import heroImage from "../images/image2.png"
const CustomIcon = () => {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Outer Circle with White Background & Purple Outline */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-white outline outline-2 outline-[#ECE9FF]">
        {/* Inner Circle */}
        <div className="w-12 h-12 bg-[#ECE9FF] rounded-full flex items-center justify-center relative">
  {/* Home Image with Checkmark */}
  <img src={heroImage} alt="Home Icon" className="w-8 h-8" />
  <Check size={12} className="absolute text-[#6D5DFD]" strokeWidth={3} />
</div>

      </div>

      {/* Shield Icon - Bottom Right */}
      {/* Proper Shield Shape - Adjusted for Accuracy */}
      <div className="absolute bottom-[-2px] right-[-0.7px] w-6 h-6 bg-[#6D5DFD] rounded-bl-[50%] rounded-br-[50%]  flex items-center justify-center ">
        <Shield size={16} className="text-[#ECE9FF]" strokeWidth={2} fill="white"  />
        <div className="absolute w-0.5 h-1 bg-[#6D5DFD] rounded-full"></div>
        
      </div>
    </div>
  );
};

export default CustomIcon;

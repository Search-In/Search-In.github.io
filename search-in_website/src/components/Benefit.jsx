import React from "react";
import heroImage from "../images/image3.png";

// Importing custom icons/images
import CustomIcon from "./customIcon1";
import CustomIcon2 from "./customicon2";
import CustomIcon3 from "./customicon3";
import CustomIcon4 from "./customicon4";

const Benefits = () => {
  const benefits = [
    {
      icon: <CustomIcon />,
      title: "Speed Meets Tradition",
      description:
        "Experience delivery times that rival quick commerce giants while supporting the local businesses you love.",
    },
    {
      icon: <CustomIcon2 />,
      title: "Real-Time Inventory Management",
      description:
        "Keep track of stock effortlessly, ensuring shelves are always stocked with what customers want.",
    },
    {
      icon: <CustomIcon3 />,
      title: "Minimal Changes Required",
      description:
        "Our solutions require minimal changes to store layouts, allowing supermarkets to maintain their charm while embracing innovation.",
    },
    {
      icon: <CustomIcon4 />,
      title: "Dark Store Setup",
      description:
        "Transform your supermarket into an efficient hub for quick deliveries without major renovations.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section */}
        <div className="bg-[#F8F7FF] p-8 md:p-10 flex flex-col items-start w-full md:w-[40%] lg:w-[35%] shadow-lg rounded-lg">
          <h1 className="text-[#1D1B48] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
            Local Meets <br />
            Lightning-Fast
          </h1>
          <p className="text-[#6E6C83] text-lg md:text-xl mb-6">
            Your Neighborhood Groceries <br />
            Delivered in Under 20 Minutes!
          </p>
          <a
            href="https://wa.me/9822221876?text=Hi%20Team%20I'm%20inquiring%20about%20the%20Quick%20Commerce%20Setup%20for%20my%20supermarket"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D1B48] text-white px-5 py-3 rounded-md font-medium text-lg hover:bg-[#2d2a6e] transition duration-300"
          >
            Become Q-Comm Ready
          </a>
          <div className="flex justify-center w-full mt-6">
            <img
              src={heroImage}
              alt="Fast Delivery Illustration"
              className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
            />
          </div>
        </div>

        {/* Right Section - Responsive Grid */}
        <div className="w-full md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Icon Section (Centered Above) */}
              <div className="w-16 h-16 bg-[#F2F0FF] rounded-full flex items-center justify-center shadow-md mb-4">
                {benefit.icon}
              </div>

              {/* Text Section - Bigger Title */}
              <h3 className="text-[#1D1B48] text-xl md:text-2xl lg:text-[1.75rem] font-bold mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;

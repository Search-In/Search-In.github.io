import React from "react";
import heroImage from "../images/image0.png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0E749A] text-white font-['DM Sans'] flex justify-center items-center">
      
      {/* Hero Section */}
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 lg:px-24 py-12 md:py-24 w-full max-w-7xl"
      >
        {/* Left Content - Moved Further Left */}
        <div className="space-y-6 text-left md:-ml-12 lg:-ml-20 xl:-ml-28">
          
          {/* Join Us Banner */}
          <div className="flex items-center bg-gray-800 rounded-full p-2 px-4 border border-white w-fit shadow-lg">
            <a
              href="https://wa.me/9822221876?text=Hi%20Team%20I'm%20inquiring%20about%20the%20Quick%20Commerce%20Setup%20for%20my%20supermarket"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-purple-700 font-semibold px-4 py-1 rounded-full hover:bg-gray-300 transition"
            >
              Join Us
            </a>
            <span className="text-white font-bold ml-3 text-sm">The Time Is NOW! 🔥</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[50px] md:text-[60px] lg:text-[65px] font-bold leading-tight">
            Empowering Local <br className="hidden md:block" />
            Supermarkets With <br className="hidden md:block" />
            Quick-Comm Delivery
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-200">
            Now Your Neighborhood Supermarkets Are Quick-Comm Ready!
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 items-center">
            <button className="bg-white text-[#007B9A] text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#007B9A] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            <img
              src={heroImage}
              alt="Supermarket Layout"
              className="rounded-lg max-w-full h-auto object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

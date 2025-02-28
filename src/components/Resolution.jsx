import React from "react";

const Resolution = () => {
  return (
    <section className="bg-black min-h-screen text-white flex items-center justify-center py-16 px-6">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 w-full text-left space-y-6">
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
        <a
          href="https://wa.me/9822221876?text=Hi%20Team%20I'm%20inquiring%20about%20the%20Quick%20Commerce%20Setup%20for%20my%20supermarket"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Get Started Today!
        </a>
      </div>

        {/* Right Section - Floating Cards */}
        <div className="relative w-full max-w-[380px] h-[250px] flex justify-center">
          {/* Card 1 - Fully Visible */}
          <div className="absolute top-0 w-full bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl shadow-xl transform sm:-rotate-[6deg] p-4 flex justify-between items-center">
            <div>
              <p className="text-green-400 font-semibold">Delivered</p>
              <p className="text-white text-sm opacity-80">Delivered in 8 Minutes.</p>
            </div>
            <p className="text-white text-lg font-bold">2.6 km</p>
          </div>

          {/* Card 2 - Slightly Faint */}
          <div className="absolute top-8 sm:left-4 w-full bg-white/5 border border-white/15 rounded-2xl backdrop-blur-md shadow-lg transform sm:-rotate-[6deg] p-4 flex justify-between items-center opacity-80">
            <div>
              <p className="text-yellow-400 font-semibold">In-Progress</p>
              <p className="text-white text-sm opacity-80">Picking up the order.</p>
            </div>
            <p className="text-white text-lg font-bold">1.2 km</p>
          </div>

          {/* Card 3 - Most Faint */}
          <div className="absolute top-16 sm:left-8 w-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-md transform sm:-rotate-[6deg] p-4 flex justify-between items-center opacity-60">
            <div>
              <p className="text-yellow-400 font-semibold">In-Progress</p>
              <p className="text-white text-sm opacity-80">Unexpected route difficulties.</p>
            </div>
            <p className="text-white text-lg font-bold">1.8 km</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resolution;

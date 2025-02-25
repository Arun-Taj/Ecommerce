import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="min-h-screen bg-custom-gradient flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center gap-6 text-center lg:text-left">
        <h1 className="text-[#090909] font-semibold text-sm sm:text-base md:text-lg">
          NEW ARRIVALS ONLY
        </h1>

        <div>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <h1 className="text-[#171717] font-bold text-5xl sm:text-6xl lg:text-7xl">
              New
            </h1>
            <img
              src={hand_icon}
              alt="Hand Icon"
              className="w-16 sm:w-20 lg:w-24"
            />
          </div>
          <p className="text-[#171717] font-bold text-5xl sm:text-6xl lg:text-7xl">
            Collections
          </p>
          <p className="text-[#171717] font-bold text-5xl sm:text-6xl lg:text-7xl">
            For Everyone
          </p>
        </div>

        <button className="flex items-center justify-center gap-3 w-full max-w-xs h-12 sm:h-14 rounded-3xl bg-[#ff4141] mt-4 text-lg sm:text-xl lg:text-2xl font-medium cursor-pointer mx-auto lg:mx-0 transition-transform hover:scale-105">
          <span>Latest Collections</span>
          <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <img
          src={hero_image}
          alt="Hero"
          className="w-11/12 sm:w-3/4 lg:w-4/5 max-w-md"
        />
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="min-h-screen bg-custom-gradient flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="hero-left flex-1 flex flex-col justify-center gap-5 px-6 lg:pl-[180px] text-center lg:text-left">
        <h1 className="text-[#090909] font-semibold text-lg sm:text-xl">
          NEW ARRIVALS ONLY
        </h1>
        <div>
          <div className="hand-hand-icon flex items-center gap-5 justify-center lg:justify-start">
            <h1 className="text-[#171717] text-[50px] sm:text-[60px] lg:text-[70px] font-bold">
              New
            </h1>
            <img
              src={hand_icon}
              alt="Hand Icon"
              className="w-[70px] sm:w-[90px] lg:w-[105px]"
            />
          </div>
          <p className="text-[#171717] text-[50px] sm:text-[60px] lg:text-[70px] font-bold">
            Collections
          </p>
          <p className="text-[#171717] text-[50px] sm:text-[60px] lg:text-[70px] font-bold">
            For everyone
          </p>
        </div>
        <div className="hero-latest-button flex justify-center items-center gap-3 w-full sm:w-[280px] lg:w-[310px] h-[60px] sm:h-[70px] rounded-3xl bg-[#ff4141] mt-4 text-lg sm:text-xl lg:text-2xl font-medium cursor-pointer mx-auto lg:mx-0">
          <div>Latest Collections</div>
          <img src={arrow} alt="Arrow Icon" />
        </div>
      </div>

      {/* Right Section */}
      <div className="hero-right flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <img
          src={hero_image}
          alt="Hero"
          className="w-[90%] sm:w-[70%] lg:w-[80%] max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;

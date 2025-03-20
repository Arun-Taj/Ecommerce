import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
import Menstyle1 from '../Assets/Menstyle1.png'
const Offer = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-10 px-4 bg-gradient-to-b from-pink-200 to-blue-100 overflow-hidden flex flex-col md:flex-row">
      {/* Left Section: Text */}
      <div className="flex flex-1 flex-col justify-center p-6">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">Exclusive</h1>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-2">Offers for you</h2>
        <p className="font-bold text-base md:text-lg mb-4">
          ONLY ON THE BEST SELLERS PRODUCTS
        </p>
        <button className="bg-red-600 rounded-lg text-white font-bold w-fit px-4 py-2 cursor-pointer">
          Check Now
        </button>
      </div>
      {/* Right Section: Image */}
      <div className="flex flex-1 items-center justify-center p-">
        <img
          src={Menstyle1}
          alt="Exclusive Offer"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;

import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="w-[65%] h-[80vh] flex m-auto px-[14px] py-0 mb-[150px] bg-gradient-to-b from-pink-200 to-blue-100 overflow-hidden mt-10">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <h2 className="font-bold text-3xl">Offers for you</h2>
        <p className="font-bold text-lg ">ONLY ON THE BEST SELLERS PRODUCTS</p>
        <button className="bg-red-600 rounded-lg text-white font-bold w-fit px-2 py-1 cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex flex-1 items-center justify-end ">
        <img src={exclusive_image} alt="" className="max-w-full h-auto object-contain"/>
      </div>
    </div>
  );
};

export default Offer;

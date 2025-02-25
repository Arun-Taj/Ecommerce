import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4 py-8 bg-gradient-to-t from-red-300 to-blue-300 flex flex-col items-center gap-8">
      <h1 className="font-bold text-2xl md:text-3xl text-center">
        Get Exclusive Offers on Your Email
      </h1>
      <p className="text-center text-base md:text-lg">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="w-full md:w-[730px] flex  md:flex-row items-center bg-white rounded-lg border border-black overflow-hidden">
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-3 border-none outline-none text-base"
        />
        <button className="bg-slate-800 text-white text-base md:text-xl px-6 py-3 md:py-4 rounded-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

import React from "react";
import { motion } from "framer-motion";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import WomenFashion from "../Assets/WomenFashion.png";
import { TbWorldSearch } from "react-icons/tb";
import Discovericon from '../Assets/Discovericon1.png'
import { FaArrowCircleRight } from "react-icons/fa";
import DropBox from '../Assets/DropBox.png'
import {Link} from 'react-router-dom'
import NewCollections from "../NewCollections/NewCollections";


const Hero = () => {
  return (
    <div className="min-h-screen bg-custom-gradient flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center gap-6 text-center lg:text-left">
        <motion.h2 
          className="text-[#090909] font-semibold text-sm sm:text-base md:text-lg flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           <span>Introducing Our Latest Drop</span>
          <motion.img
              src={DropBox}
              alt="DropBox"
              className="w-16 sm:w-20 lg:w-24"
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
        </motion.h2>

        <div>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <motion.h1
              className="text-[#171717] font-bold text-5xl sm:text-6xl lg:text-7xl flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
               <span>Discover</span><motion.img
              src={Discovericon}
              alt="DiscoverIcon"
              className="w-16 sm:w-20 lg:w-24"
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            </motion.h1>
            
          </div>
          <motion.p
            className="text-[#171717] font-bold text-5xl sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Your Next Style Statement
          </motion.p>
          <motion.p
            className="mt-2 text-gray-700 text-base sm:text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Curated designs & exclusive trends crafted just for you.
          </motion.p>
        </div>
        <Link smooth to="/newCollections">
        <motion.button
          className="flex items-center justify-center gap-3 w-full max-w-xs h-12 sm:h-14 rounded-3xl bg-[#ff4141] mt-4 text-lg sm:text-xl lg:text-2xl font-medium cursor-pointer mx-auto lg:mx-0"
          whileHover={{ scale: 1.05, backgroundColor: "#e22e2e" }}
          transition={{ duration: 0.3 }}
        >
          
          <span>Shop New Arrivals</span>
          <FaArrowCircleRight className="text-white"/>
        </motion.button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <motion.img
          src={WomenFashion}
          alt="Featured Fashion"
          className="w-11/12 sm:w-3/4 lg:w-4/5 max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-violet-100">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
        {/* Logo & Brand */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <img src={footer_logo} alt="Shopper Logo" className="w-16 h-auto" />
          <p className="font-bold font-mono text-2xl">SHOPPER</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-xl">
          <li className="cursor-pointer hover:text-gray-700">Products</li>
          <li className="cursor-pointer hover:text-gray-700">Offices</li>
          <li className="cursor-pointer hover:text-gray-700">Company</li>
          <li className="cursor-pointer hover:text-gray-700">About</li>
          <li className="cursor-pointer hover:text-gray-700">Contact</li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <FaInstagramSquare size={30} color="red" className="cursor-pointer" />
          <FaSquareWhatsapp size={30} color="green" className="cursor-pointer" />
          <FaSquareFacebook size={30} color="blue" className="cursor-pointer" />
        </div>

        {/* Divider & Copyright */}
        <div className="w-full mt-4">
          <hr className="border-t border-black" />
          <p className="text-center text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

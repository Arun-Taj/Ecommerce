import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="flex justify-around p-4 shadow-sm shadow-black">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Shopper Logo" />
        <p className="text-gray-900 text-3xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex items-center gap-12 text-gray-500 text-lg font-medium list-none">
        <li
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="w-4/5 h-0.5 rounded-lg bg-red-500 transition-all duration-300 ease-in-out" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Mens</Link>
          {menu === "mens" ? (
            <hr className="w-4/5 h-0.5 rounded-lg bg-red-500 transition-all duration-300 ease-in-out" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Womens</Link>
          {menu === "womens" ? (
            <hr className="w-4/5 h-0.5 rounded-lg bg-red-500 transition-all duration-300 ease-in-out" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="w-4/5 h-0.5 rounded-lg bg-red-500 transition-all duration-300 ease-in-out" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-11">
        <Link to="/login"><button className="w-40 h-11 border border-gray-500 rounded-full text-lg font-medium bg-white hover:bg-pink-100 active:bg-pink-200 transition-colors duration-300">
          Login
        </button></Link>
        
        <div className="relative">
          <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
          
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-sm flex items-center justify-center rounded-full">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

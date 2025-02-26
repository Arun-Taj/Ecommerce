import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <header className="sticky top-0 bg-white shadow-sm shadow-black z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="Shopper Logo" className="w-10 sm:w-12" />
          </Link>
          <Link to="/">
            <p className="text-gray-900 text-2xl sm:text-3xl font-bold">TAJPURIYA SHOP</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-12">
          <ul className="flex items-center gap-6 text-gray-500 text-sm sm:text-lg font-medium">
            {["shop", "men", "women", "kids"].map((item) => (
              <li
                key={item}
                className="flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => setMenu(item)}
              >
                <Link to={`/${item === "shop" ? "" : item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
                {menu === item && (
                  <hr className="w-4/5 h-0.5 rounded-lg bg-red-500 transition-all duration-300 ease-in-out" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-8">
          <Link to="/login">
            <button className=" sm:block w-28 sm:w-36 h-10 sm:h-11 border border-gray-500 rounded-full text-sm sm:text-lg font-medium bg-white hover:bg-pink-100 active:bg-pink-200 transition-colors duration-300">
              Login
            </button>
          </Link>
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <img src={cart_icon} alt="Cart Icon" className="w-6 sm:w-8" />
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs sm:text-sm flex items-center justify-center rounded-full">
              0
            </div>
            </Link>
            
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden bg-white border-t border-gray-200">
        <nav>
          <ul className="flex items-center justify-around text-gray-500 text-sm font-medium">
            {["shop", "men", "women", "kids"].map((item) => (
              <li
                key={item}
                className="cursor-pointer"
                onClick={() => setMenu(item)}
              >
                <Link
                  to={`/${item === "shop" ? "" : item}`}
                  className={`block py-2 ${
                    menu === item
                      ? "border-b-2 border-red-500 text-gray-900"
                      : "hover:text-gray-700 hover:font-extrabold"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

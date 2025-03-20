import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../ShopContext/ShopContext";


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["shop", "men", "women", "kids"];

  // Sidebar variants for slide-in effect
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link to="/" onClick={() => setMenu("shop")}>
            <motion.img
              src={logo}
              alt="Shopper Logo"
              className="w-12 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
          </Link>
          <Link to="/">
            <motion.p
              className="text-gray-900 text-2xl font-bold cursor-pointer"
              whileHover={{ color: "#e53e3e" }}
            >
              TAJPURIYA SHOP
            </motion.p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-6 text-gray-500 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item} onClick={() => setMenu(item)}>
                <Link
                  to={`/${item === "shop" ? "" : item}`}
                  className="relative group transition-colors duration-300 hover:text-gray-900"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {menu === item && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-red-500"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link to="/login">
            <motion.button
              className="w-28 h-10 border border-gray-500 rounded-full text-sm font-medium transition-all bg-white hover:bg-pink-100 active:bg-pink-200"
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.button>
          </Link>
          <Link to="/cart" className="relative">
            <motion.img
              src={cart_icon}
              alt="Cart Icon"
              className="w-8 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
              {getTotalCartItems()}
            </div>
          </Link>
          {/* Mobile Menu Icon */}
          <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              className="w-6 h-1 bg-gray-900 mb-1 rounded"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            />
            <motion.div
              className="w-6 h-1 bg-gray-900 mb-1 rounded"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.div
              className="w-6 h-1 bg-gray-900 rounded"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-50"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col items-center py-8 gap-6 text-gray-100 text-lg font-medium">
                {menuItems.map((item) => (
                  <li key={item} onClick={() => { setMenu(item); setIsOpen(false); }}>
                    <Link to={`/${item === "shop" ? "" : item}`} className="hover:text-gray-300">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import React, { useContext } from "react";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../ShopContext/ShopContext";

const DisplayProducts = ({ product }) => {

  const {addToCart}=useContext(ShopContext)
  const handleAddToCart = () => {
    // Display a confirmation alert before adding to the cart
    const confirmed = window.confirm("Do you really want to add this product to your cart?");
    if (confirmed) {
      addToCart(product.id);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Product Images */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={product.image}
                alt={`Thumbnail ${i}`}
                className="w-24 h-24 object-cover border rounded cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt="Main Product"
              className="w-full max-w-md object-cover rounded shadow-lg"
            />
          </div>
        </div>
        {/* Right Section: Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={star_dull_icon}
                  alt={`Star ${i + 1}`}
                  className="w-5 h-5"
                />
              ))}
            </div>
            <p className="ml-2 text-gray-600">(122)</p>
          </div>
          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <div className="text-xl text-gray-500 line-through">
              ${product.old_price}
            </div>
            <div className="text-2xl font-bold text-red-500">
              ${product.new_price}
            </div>
          </div>
          {/* Description */}
          <div className="mb-4 text-gray-700">
            <p>
              A lightweight, usually knitted, pullover shirt, close-fitting with a
              round neckline and short sleeves, worn as an undershirt garment.
            </p>
          </div>
          {/* Size Selection */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Select Size</h2>
            <div className="flex gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="w-10 h-10 flex items-center justify-center border rounded cursor-pointer hover:bg-gray-200"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          {/* Add to Cart Button */}
          <button className="px-4 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded transition duration-200 mb-4"    onClick={handleAddToCart}>
            ADD TO CART
          </button>
          {/* Additional Information */}
          <p className="text-gray-600">
            <span className="font-semibold">Category:</span> Women, T-Shirt, Crop
            Top
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;

import React, { useContext, useState } from "react";
import { ShopContext } from "../../ShopContext/ShopContext";

const Carts = () => {
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");

  // Merge cart items with product data and filter out items with zero quantity.
  const productsWithQuantity = Object.entries(cartItems)
    .map(([id, quantity]) => {
      // Find the product by matching the id
      const product = all_product.find((prod) => prod.id === parseInt(id, 10));
      return { ...product, quantity, id: parseInt(id, 10) };
    })
    .filter((product) => product.quantity > 0);

  // Calculate total price
  const total = productsWithQuantity.reduce(
    (sum, product) => sum + product.quantity * product.new_price,
    0
  );

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    // Implement your promo code logic here.
    alert(`Promo code "${promoCode}" applied!`);
    setPromoCode("");
  };

  const handleCheckout = () => {
    // Implement your checkout logic here (e.g., navigation to a checkout page)
    alert("Proceeding to checkout...");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {productsWithQuantity.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Desktop/Tablet Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left">Product</th>
                  <th className="py-3 px-4 border-b text-left">Details</th>
                  <th className="py-3 px-4 border-b text-center">Quantity</th>
                  <th className="py-3 px-4 border-b text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {productsWithQuantity.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    {/* Product Image */}
                    <td className="py-4 px-4 border-b">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded shadow"
                      />
                    </td>
                    {/* Title and Price */}
                    <td className="py-4 px-4 border-b">
                      <h2 className="text-xl font-semibold">{product.name}</h2>
                      <p className="text-gray-600">
                        Price: ${product.new_price.toFixed(2)}
                      </p>
                    </td>
                    {/* Quantity with controls */}
                    <td className="py-4 px-4 border-b text-center">
                      <div className="flex justify-center items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                        >
                          –
                        </button>
                        <span className="px-2">{product.quantity}</span>
                        <button
                          onClick={() => addToCart(product.id)}
                          className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    {/* Subtotal */}
                    <td className="py-4 px-4 border-b text-right">
                      ${(product.new_price * product.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {productsWithQuantity.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded shadow">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">
                      Price: ${product.new_price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                    >
                      –
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      ${(product.new_price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="mt-8 border-t pt-6 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Shipping Fee Section */}
              <div className="mb-4 md:mb-0">
                <div className="flex items-center">
                  <p className="text-gray-600 mr-2">Shipping Fee:</p>
                  <p className="text-lg font-bold text-green-600">Free</p>
                </div>
              </div>
              {/* Promo Code Input Section */}
              <div className="w-full md:w-auto">
                <form onSubmit={handlePromoSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full md:w-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="submit"
                    className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                  >
                    Apply Promo
                  </button>
                </form>
              </div>
            </div>

            {/* Total Price and Checkout Button */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-right">
                <h2 className="text-2xl font-bold">
                  Total: ${total.toFixed(2)}
                </h2>
              </div>
              <div className="mt-4 md:mt-0">
                <button
                  onClick={handleCheckout}
                  className="w-full md:w-auto px-6 py-3 bg-orange-600 text-white font-bold rounded hover:bg-orange-700 transition duration-200"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

            <div className="text-right text-gray-500 flex justify-center items-center">
              <p>
                * Shipping is free for orders over a specified amount. Promotional terms may apply.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carts;

import React, { useContext } from "react";
import { ShopContext } from "../../ShopContext/ShopContext";

const Carts = () => {
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {productsWithQuantity.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
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
                  <tr key={product.index} className="hover:bg-gray-50">
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
                          onClick={() => removeFromCart(product.index)}
                          className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                        >
                          –
                        </button>
                        <span className="px-2">{product.quantity}</span>
                        <button
                          onClick={() => addToCart(product.index)}
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
          {/* Total Section */}
          <div className="flex justify-end mt-8">
            <div className="text-right">
              <h2 className="text-2xl font-bold">
                Total: ${total.toFixed(2)}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carts;

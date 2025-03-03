import React from 'react';
import data_product from '../Assets/data';
import Items from '../Item/Items';

const RelatedProducts = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Related Products
      </h1>
      <hr className="mb-8 border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4  rounded-lg justify-items-center ">
        {data_product.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

import React from 'react';
import data_product from '../Assets/data';
import Items from '../Item/Items';

const Popular = () => {
  return (
    <div className="px-4 py-8">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-slate-950 font-bold text-2xl">POPULAR IN WOMEN</h1>
        <hr className="mb-8 border-gray-600 mx-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-60" />
      </div>
      {/* Grid Layout for Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center rounded-lg">
        {data_product.map((item) => (
          <Items
            key={item.id}
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

export default Popular;

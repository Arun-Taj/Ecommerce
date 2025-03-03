import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrum = ({ product }) => {
  return (
    <div className="container mx-auto my-6 px-4">
      <div className="flex flex-wrap items-center gap-2 font-medium capitalize">
        <span>HOME</span>
        <IoIosArrowForward size={20} />
        <span>SHOP</span>
        <IoIosArrowForward size={20} />
        <span>{product.category}</span>
        <IoIosArrowForward size={20} />
        <span>{product.name}</span>
      </div>
    </div>
  );
};

export default Breadcrum;

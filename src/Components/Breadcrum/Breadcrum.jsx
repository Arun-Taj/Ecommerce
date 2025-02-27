import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const Breadcrum = (props) => {
    const {product}=props
  return (
    <div className='flex items-center gap-2 font-medium my-6 mx-44'>
      HOME <IoIosArrowForward size={20}/> SHOP <IoIosArrowForward size={20}/>{product.category} <IoIosArrowForward size={20}/> {product.name}
    </div>
  )
}

export default Breadcrum

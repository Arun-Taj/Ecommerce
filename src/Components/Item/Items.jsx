import React from 'react'
import { Link } from 'react-router-dom'
const Items = (props) => {
  return (
    <div className='w-[350px] hover:scale-105 transition duration-600'>
     <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      
      <p className='my-1.5'>{props.name}</p>
      <div className='flex justify-between pr-8'>
        <div className='text-[#36f17e] text-lg font-medium'>
            ${props.new_price}
        </div>
        <div className='text-[#c0bebe] text-lg font-medium'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items

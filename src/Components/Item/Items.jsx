import React from 'react'

const Items = (props) => {
  return (
    <div className='w-[350px] hover:scale-105 transition duration-600'>
      <img src={props.image} alt="" />
      <p className='my-1.5'>{props.name}</p>
      <div className='flex gap-[20px]'>
        <div className='text-[#374151] text-lg font-medium'>
            ${props.new_price}
        </div>
        <div className='text-[#8c8c8c] text-lg font-medium'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items

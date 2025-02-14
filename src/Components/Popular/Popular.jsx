import React from 'react'
import data_product from '../Assets/data'
import Items from '../Item/Items'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-2 h-[90vh]'>
      <h1 className='text-slate-950 font-bold text-2xl'>POPULAR IN WOMEN</h1>
      <hr className='w-52 h-2 bg-black rounded-xl'/>
      <div className='flex mt-6 gap-4'>
        {
            data_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.new_price}/>
            })
        }
      </div>
    </div>
  )
}

export default Popular

import React from 'react'
import new_collections from './Assets/new_collections'
import Items from './Item/Items'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-2 h-[90vh]'>
      <h1 className='text-slate-950 font-bold text-2xl'>NEW COLLECTIONS</h1>
      <hr className='w-52 h-2 bg-black rounded-xl'/>
      <div className='grid grid-cols-4 gap-6 mt-4  rounded-lg'> 
        {new_collections.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.new_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections

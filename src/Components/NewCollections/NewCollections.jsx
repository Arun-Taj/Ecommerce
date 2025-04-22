import React from 'react'
import new_collections from '../Assets/new_collections'
import Items from '../Item/Items'
import useScrollToHash from '../Hero/useScrollToHash'

const NewCollections = () => {
  useScrollToHash();
  return (
    <div className=' gap-2 mb-[100px] '>
      <section id='newCollectionSection'>
      <h1 className='text-slate-950 font-bold text-2xl flex items-center justify-center'>NEW COLLECTIONS</h1>
      <hr className='mb-8 border-gray-600 mx-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-60 '/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4  rounded-lg justify-items-center'> 
        {new_collections.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div></section>
    </div>
  )
}

export default NewCollections

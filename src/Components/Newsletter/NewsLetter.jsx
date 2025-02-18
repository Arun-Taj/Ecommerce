import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[150px] bg-gradient-to-t from-red-300 to-blue-300 gap-[30px] '>
      <h1 className='font-bold text-3xl'>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-lg border border-solid border-black'>
        <input type="email" placeholder='Your email' className='w-full ml-4 py-5 border-none outline-none '/>
        <button className='bg-slate-800 px-6 py-4 rounded-full text-white text-xl font-serif'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter

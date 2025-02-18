import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-5 bg-violet-100'>
      <div className='font-bold font-mono text-2xl flex justify-center items-center gap-4'>
        <img src={footer_logo}  />
        <p>SHOPPER</p>
      </div>
      <ul className='flex list-none gap-10 text-xl '>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <div className='flex gap-4'>
        <div>
            <FaInstagramSquare size={30} color='red' className='cursor-pointer'/>
        </div>
        <div>
            <FaSquareWhatsapp size={30} color='green'className='cursor-pointer'/>
        </div>
        <div>
            <FaSquareFacebook size={30} color='blue'className='cursor-pointer'/>
        </div>
      </div>
      <div>
        <hr className='w-full border-none bg-black py-[1px]' />
        <p>@All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

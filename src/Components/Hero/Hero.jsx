import React from 'react'
import hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='h-[100vh] bg-custom-gradient flex'  >
        <div className='left'>
            <h1>NEW ARRIVALS ONLY</h1>
            <div className=''>
                <div className='hand-hand-icon'>
                    <h1 className=''>New</h1>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>For everyone</p>
            </div>
            <div className='hero-latest-button'>
                <div>Latest Collections</div>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="" />

        </div>
    </div>
  )
}

export default Hero
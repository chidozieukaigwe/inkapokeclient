import Image from 'next/image'
import React from 'react'
import OfferCountdown from './Countdown'


export default function Offer() {
  return (  
    <div className='bg-secondary h-screen flex flex-col md:flex-row md:justify-between md:h-[50vh] lg:h-screen'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Inka Poke Sales Offer</h1>
        <p className="text-white xl:text-xl">Wholesome Bowls, Vibrant Souls. A Nikkei & Hawaiian Experience in London</p>
        <OfferCountdown/>
        <button className='bg-primary text-white py-3 px-6 rounded-md'>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='flex-1 relative w-full md:h-full'>
        <Image src="/pokeheroimage.jpg" alt="" fill className='object-contain'/>
      </div>
    </div>
  )
}

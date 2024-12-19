"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1? 0 : prev + 1));
  //   }, 4000);
  //   return () => clearInterval(interval);
  // })

  const data = [
    {
      id: 1,
      title: "Discover our unique menu",
      image: "/slide2.jpg"
    },
    {
      id: 1,
      title: "always freshly made and served with love",
      image: "/slide2.jpg"
    },
    {
      id: 1,
      title: "The best Poke bar for friends",
      image: "/slide3.jpg"
    }
  ]

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-secondary'>
      {/* TEXT CONTAINER */}
    <div className='flex-1 flex justify-center items-center flex-col gap-8 text-white font-bold'>
      <h1 className='text-4xl md:text-6xl xl:text-7xl md:p-10 text-center uppercase p-4'>
        {data[currentSlide].title}
      </h1>
      <button className='bg-primary text-white py-4 px-8'>Order Now</button>
    </div>
        {/* IMAGE CONTAINER */}
    <div className='flex-1 relative w-full'>
      <Image src={data[currentSlide].image} alt='' fill className='object-cover'/>
    </div>
    </div>
  )
}

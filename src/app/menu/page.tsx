import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

export default function MenuPage() {
  return (

    // Add full width hero image with gradient like Poke
    <>
      
<div className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: `url(/pokeheroimage.jpg)`, backgroundSize: 'cover'}}>
  <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-500 opacity-75"></div>
  
  <main className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
            <span className="text-primary font-bold">Inka Menu</span> 
          </h2>
          <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 font-semibold">
          Bowls, Smoothies, Snacks and more. All the tasty and fresh ingredients refined and designed to always make different combinations and discover new flavors.
          </p>
        </div>
      </main>
  
</div>
      
<div className='p-4 lg:px-10 xl:px-20 h-[calc(100vh-3rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center gap-3'>
      {menu.map(category=>(
        <Link href={`/menu/${category.slug}`} key={category.id} style={{background: `linear-gradient(to right, rgba(239,158,138, 0.8), rgba(59,97,87, 0.8)),url(${category.img})`, backgroundSize: 'cover'}}  className='w-full h-1/3 md:h-1/2  text-white py-8 px-4'>
          <div className=''>
            <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-8'>{category.desc}</p>
            <button className="hidden md:block 2xl:block bg-secondary py-2 px-4 rounded-md">View Menu</button>
          </div>
        </Link>
      ))}
    </div>
    </>

 

    // Add Build Your Own Bowl - Use Featured Cmp as example component layout - turn into reusable component
  )
}

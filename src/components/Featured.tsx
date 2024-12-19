import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function Featured() {
  return (
    <div className='w-screen overflow-x-scroll text-primary'>
      {/* WRAPPER */}
        <div className='w-max flex'>
           {/* SINGLE ITEM */}
           {featuredProducts.map(product=>(
               <div className='w-screen md:w-[50vw] xl:w-[33vw] h-[80vh] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300' key={product.id}>
               {/* IMAGE CONTAINER */}
             {product.img && (
                <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                <Image src={product.img} alt='' fill className='object-contain'/>
              </div>
             )}
                  {/* TEXT CONTAINER */}
                  <div className="flex flex-1 flex-col gap-4 items-center text-center justify-center">
                    <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{product.title}</h1>
                    <p className='p-4 2xl:p-8'>{product.desc}</p>
                    <span className='text-xl font-bold'>£{product.price}</span>
                    <button className='bg-primary text-white rounded-md p-2'>Add to Cart</button>
                  </div>
            </div>
           ))}
        
        </div>
    </div>
  )
}

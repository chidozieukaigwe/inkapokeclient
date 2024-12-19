import { bowls } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryPage() {
  return (
    <div className='flex flex-wrap text-primary'>
        {bowls.map(item => (
          <Link className='w-full h-[60vh] border-r-1 border-b-2 border-primary sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-secondary even:text-white'  href={`/product/${item.id}`} key={item.id}>
            {/* Image Container */}
            {item.img && (
              <div className='relative h-[80%]'>
                  <Image src={item.img} alt='' fill className='object-contain'/>
              </div>
            )}
            {/* Text Container */}
            <div className='flex flex-col lg:flex-row items-center justify-between font-bold'>
              <h1 className='uppercase text-2xl p-2'>{item.title}</h1>
              <h2 className='group-hover:hidden text-xl'>£{item.price}</h2>
              <button className='hidden group-hover:block uppercase bg-primary text-white p-2 rounded-md'>Add to Cart</button>
            </div>
          </Link>
        ))}
    </div>
  )
}

import Link from 'next/link';
import React from 'react'

export default function Footer() {
  const d = new Date();
const year = d.getFullYear();
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-white flex items-center justify-between border-t-2 border-t-primary bg-primary'>
      <Link href="/" className='font-bold text-xl'>INKA POKE</Link>
      <p> &#169; {year} Inka Poke Co. </p>
    </div>
  )
}

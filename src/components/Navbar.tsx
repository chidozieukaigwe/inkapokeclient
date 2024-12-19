import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

export default function Navbar() {
  const user = false // @todo delete when backend is ready
  return (
    <div className='h-12 md:h-24 text-primary p-4 flex justify-between items-center border-b-2 border-b-primary uppercase lg:px-10 xl:px-20'>
        {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Logo */}
      <div className='text-xl text-center flex-1'>
        <Link href={"/"} className='font-bold'>
          Inka Poke
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu/>
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='flex md:absolute top-3 r-2 lg:static items-center gap-2 cursor-pointer bg-primary text-white px-1 rounded-md'>
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>12345678901</span>
        </div>
        {!user ?<Link href="/login">Login</Link> :
        <Link href="/orders">Orders</Link> }
        <CartIcon/>
      </div>
    </div>
  )
}

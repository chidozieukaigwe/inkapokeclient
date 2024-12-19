"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

export default function Menu() {
  const [open, setOpen] = useState(false)
  const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "About", url: "/"},
    {id: 3, title: "Menu", url: "/menu"},
    {id: 4, title: "Catering", url: "/"},
    {id: 5, title: "Contact", url: "/"}
  ];

  // @todo delete when backend 
  const user = false

  return (
    <div>
      {/* @TODO Create a proper hamburger menu */}
       {!open ?( <Image src="/open.png" alt='' width={20} height={20} onClick={()=>setOpen(true)}/>) :
        (<Image src="/close.png" alt='' width={20} height={20} onClick={()=>setOpen(false)} />  )}
    { open && (   <div className='bg-primary text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
        {links.map(link => (
          <Link href={link.url} key={link.id} onClick={() =>setOpen(false)}>
           {link.title}
          </Link>
        ))}
        {!user ? <Link href={"/login"} onClick={() =>setOpen(false)} >Login</Link> :
        <Link href={"/orders"}>Order</Link>}
        <div onClick={() =>setOpen(false)}>
          <CartIcon/>
        </div>
        </div>)}
    </div>
  )
}

import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='
    flex
    justify-center 
    sticky top-0 
    bg-background-color
    container
    p-2
    '
    >
        <Link href={'/'}>
        <p className='text-2xl font-black text-extra-color'>MIRZA.</p>
        </Link>
    </div>
  )
}


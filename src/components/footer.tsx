import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div
    className='
    container
    flex-row
    py-5
    px-9
    '>
        <div className='bg-primary-color w-100 h-0.5'></div>
        <h1 className='text-3xl font-bold py-5'>
            Say hello at!
        </h1>
        <ul
        className='
        flex
        flex-wrap
        justify-between
        text-xl
        '>
            <li className='
            hover:text-secondary-color'>
                <Link href={'https://www.linkedin.com/in/mahadbaig'} target="_blank">LinkedIn</Link></li>
            <li className='
            hover:text-secondary-color'>
                <Link href={'https://www.github.com/mahadbaig'} target="_blank">Github</Link></li>
            <li className='
            hover:text-secondary-color'>
                <Link href={'https://medium.com/@mirza.mahad'} target="_blank">Medium</Link></li>
            <li className='
            hover:text-secondary-color'>
                <Link href={'https://www.instagram.com/in/uxbymirza'} target="_blank">Instagram</Link></li>
        </ul>

    </div>
  )
}


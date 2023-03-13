import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = (props:any) => {
  const image = props.image
  const onoma = props.onoma
  const link = props.link
  return (
    <div className='
    p-3
    bg-primary-color
    w-fit
    '>
      <Link href={link} target="_blank">
      <div className=''>
        <Image src={image} alt={"Image"} width="400" />
      </div>
      
      <h2
      className='
      text-2xl
      mt-3
      text-extra-color
      font-bold'
      >
        {onoma}</h2>
      
      </Link>
    </div>
  )
}

export default Project
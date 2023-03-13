import React from 'react'
import  Project  from './project'
import image1 from '../assets/hero.jpg'

export const Projects = () => {
  return (
    <div
    id='projects'
    className='
    py-5
    '>
      <h1 className='text-6xl font-bold '>
       My Projects:
     </h1>
      <main className='
      mt-8
      flex
      flex-wrap
      gap-10
      justify-between
      '>
      <Project
      image =  {image1}
      onoma = "Panaverse DAO Website"
      link="https://www.github.com/mahadbaig"/>
       <Project
      image =  {image1}
      onoma = "Todo Application"
      link="https://www.github.com/mahadbaig"/>
      <Project
      image =  {image1}
      onoma = "React Robo Friends"
      link="https://www.github.com/mahadbaig"/>
      <Project
      image =  {image1}
      onoma = "Modern Website UI"
      link="https://www.github.com/mahadbaig"/>
       <Project
      image =  {image1}
      onoma = "Meme Generator"
      link="https://www.github.com/mahadbaig"/>
      <Project
      image =  {image1}
      onoma = "Note Taking Application"
      link="https://www.github.com/mahadbaig"/>
      
      </main>
      </div>
  )
}


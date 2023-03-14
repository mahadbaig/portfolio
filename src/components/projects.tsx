import React from 'react'
import  Project  from './project'
import panaverse from '../assets/Panaverse.png'
import robo from '../assets/robo.png'
import quiz from '../assets/quiz.png'
import tstodo from '../assets/tstodo.png'

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
      image =  {panaverse}
      onoma = "Panaverse DAO Website"
      link="https://panaversedao-website.vercel.app/"/>
       <Project
      image =  {quiz}
      onoma = "Quiz Application"
      link="https://quiz-application-mahadbaig.web.app/"/>
      <Project
      image =  {robo}
      onoma = "React Robo Friends"
      link="https://mahadbaig.github.io/react-robofriends/"/>
      <Project
      image =  {tstodo}
      onoma = "Typescript Todo App"
      link="https://mahadbaig.github.io/typescript_todo/"/>
       {/* <Project
      image =  {image1}
      onoma = "Meme Generator"
      link="https://www.github.com/mahadbaig"/> */}
      
      
      </main>
      </div>
  )
}


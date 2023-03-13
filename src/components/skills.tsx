import React from 'react'
import Skill from './skill'

export const Skills = () => {
  return (
    <div className='mt-20 mb-20'>
      <h1 className='text-6xl font-bold '>
        My Skillset:
      </h1>

      <div
      className='
      mt-8
      flex
      flex-wrap
      gap-10
      justify-between
      
      '>
      <Skill 
      skill = "Javascript"
      />
      <Skill 
      skill = "Typescript"
      />
      <Skill 
      skill = "React.JS"
      />
      <Skill 
      skill = "Next.JS"
      />
      <Skill 
      skill = "Tailwind CSS"
      />
      <Skill 
      skill = "Chakra UI"
      />
      <Skill 
      skill = "Node.JS"
      />
      <Skill 
      skill = "Figma"
      />
      <Skill 
      skill = "UX Research"
      />
      <Skill 
      skill = "UX & UI Design"
      />
      <Skill 
      skill = "UX Writing"
      />
      </div>
    </div>
  )
}


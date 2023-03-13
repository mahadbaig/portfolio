import React from 'react'

const Skill = (props:any) => {
    const skill = props.skill
  return (
    <div className=''>
        <h1
        className='
        bg-primary-color
        w-fit
        text-extra-color
        hover:text-white 
        hover:bg-secondary-color
        p-4
        px-12
        font-semibold
        text-xl
        '
        >
            {skill}
        </h1>
    </div>
  )
}

export default Skill
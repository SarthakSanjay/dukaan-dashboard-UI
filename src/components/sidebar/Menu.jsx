import React from 'react'

const Menu = ({text,icon}) => {
  return (
    <div className='flex px-4 py-1 text-white justify-start items-center  hover:bg-white/20 rounded-sm  w-full '>
        <span className='text-xl'>{icon}</span>
        <span className='px-2 text-md'>{text}</span>
    </div>
  )
}

export default Menu
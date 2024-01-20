import React from 'react'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import {FaChevronRight} from 'react-icons/fa'
const Card = ({head , amount , orders , reminder}) => {
  return (
    <>
    <div className={`w-1/3 mx-1   rounded-lg  ${reminder ? "bg-[#146eb4] hover:bg-[#0e4f82] text-white h-40":"bg-white text-black shadow-sm h-28"} flex flex-col justify-between`}>
       <div className='p-4 flex flex-col justify-around  h-28'>
       <h1 className='text-md flex items-center gap-2 '>{head} <IoIosHelpCircleOutline /></h1>
        <div className='flex justify-between items-center w-full'>
            <h1 className='text-3xl font-semibold '>{amount}</h1>
            {orders ? <span className='underline  flex items-center gap-2 '>{orders} <FaChevronRight /></span> : ''}
            
        </div>
       </div>
    {reminder ? <div className='relative px-4 w-full h-10 bg-[#0e4f82] flex justify-between items-center rounded-lg text-white '>
        <h1>Next Payment Date:</h1>
        <h1>Today , 4:00PM</h1>
    </div> : ''}
    </div>
    </>
  )
}

export default Card
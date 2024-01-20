import React from 'react'
import { IoIosHelpCircleOutline } from "react-icons/io";
import Menu from '../sidebar/Menu';
import Search from './Search';
import { RiMessage2Fill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className='w-full border-b border-[#e6e6e6] h-16 px-7 py-3 flex justify-between items-center'>
        <div className='text-black flex gap-2'>
            <h1 className='text-2xl'>Payouts</h1>
            <div className='text-md flex items-center gap-1'>
            <IoIosHelpCircleOutline />
             <span className='text-sm'>How it works</span></div>
        </div>
        <Search />
        <div className='flex text-2xl h-full gap-2 justify-center items-center'>
            <span className='bg-[#e6e6e6] text-[#4c4c4c] rounded-full p-2'><RiMessage2Fill /></span>
            <span className='bg-[#e6e6e6] text-[#4c4c4c] rounded-full p-2'><FaCaretDown /></span>
        </div>
    </div>
  )
}

export default Navbar
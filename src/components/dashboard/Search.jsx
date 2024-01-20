import React from 'react'
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className='bg-[#f2f2f2] text-[#4c4c4c] w-2/6 flex h-full justify-start items-center px-3 gap-2 rounded-md'>
        <IoSearch />
        <input className='bg-[#f2f2f2] h-full w-full' placeholder='Search features, tutorials, etc.' />
    </div>
  )
}

export default Search
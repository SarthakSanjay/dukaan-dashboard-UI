import React from 'react'
import { IoSearch } from "react-icons/io5";
const Search = ({order}) => {
  return (
    <div className={`${order ? 'bg-[#fafafa] w-1/4  border border-[#e6e6e6] ':'bg-[#f2f2f2] '} text-[#4c4c4c] w-2/6 flex h-full justify-start items-center px-3 gap-2 rounded-md`}>
        <IoSearch />
        <input className={`${order ? 'bg-[#fafafa] ':'bg-[#f2f2f2] '} outline-none  h-full w-full`} placeholder={order? "Order ID or transactions ID":'Search features, tutorials, etc.'} />
    </div>
  )
}

export default Search
import React from 'react'
import { CiWallet } from "react-icons/ci";
const Credit = () => {
  return (
    <div className='h-14 relative top-64 text-white bg-white/20 flex w-full justify-around pr-3 items-center rounded-md '>
        <div className='text-3xl bg-white/20 p-1 rounded-md '>
            <CiWallet />
        </div>
        <div className=' mr-3'>
            <h1 className='text-sm'>Available Credits</h1>
            <h1>224.10</h1>
        </div>
    </div>
  )
}

export default Credit
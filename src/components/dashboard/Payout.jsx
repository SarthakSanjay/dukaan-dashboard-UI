import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import Card from './Card'

const Payout = () => {
  return (
    <div className='h-full w-full bg-[#fafafa]  border-green-500 py-8 px-7'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl'>Overview</h1>
            <button className='bg-white text-[#4c4c4c] text-md w-[150px] flex justify-around items-center p-2 border border-[#e6e6e6]'>This Month <span><FaChevronDown /></span></button>
        </div>
        <div className='w-full flex '>
            <Card head="Next Payout" amount="₹2,312.23" orders="23 Orders" reminder={true} />
            <Card head="Amount Pending" amount="₹92,312.20" orders="23 Orders" reminder={false} />
            <Card head="Amount Processed" amount="₹23,92,312.19" orders={false} reminder={false} />
        </div>
        <h1 className='text-2xl my-7'>Transactions | This Month</h1>
        <div className='flex gap-3 text-lg'>
            <button className='bg-[#e6e6e6] px-3 py-1 rounded-full text-[#808080]'>Payouts (22)</button>
            <button className='bg-[#146eb4] px-3 py-1 rounded-full text-white'>Refunds (6)</button>
        </div>
    </div>
  )
}

export default Payout
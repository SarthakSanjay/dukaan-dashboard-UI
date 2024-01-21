import React from 'react'
import Search from './Search'
import { FiDownload } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import { orders } from '../../data/data';
import { GoDotFill } from "react-icons/go";
const OrdersContainer = () => {
  return (
    <div className='h-max w-full bg-white  border-black rounded-md mt-7 p-2'>
        <div className='h-10 w-full flex  justify-between'>
            <Search order={true} />
            <div className='h-full flex gap-2'>
                <button className='border border-[#e6e6e6] h-10 flex justify-center items-center w-20 rounded-md text-lg'>Sort <span className='text-[#808080]'><BiSortAlt2/></span></button>
                <button className='border border-[#e6e6e6] h-10 flex justify-center items-center w-10 rounded-md text-xl'><FiDownload /></button>
            </div>
        </div>
        <div>
            <div className='h-10 w-full bg-[#e6e6e6] mt-2 rounded-md flex justify-between items-center px-3 text-base text-black'>
                <span className='w-1/5'>Order ID</span>
                <span className='w-1/5'>Status</span>
                <span className='w-1/5'>Transaction ID</span>
                <span className='w-1/5'>Refund Date</span>
                <span className='w-1/5 text-end border '>Order Amount</span>
            </div>
            {orders.map((order)=>{
                return  <div className='h-10 w-full  flex justify-between items-center px-3  text-base text-[#505050] border border-x-0 border-t-0 border-b-[#e6e6e6]'>
                <span className='w-1/5 text-[#2679ba]'>{order['Order ID']}</span>
                <span className='w-1/5 flex items-center '>
                        <span className={`text-xl ${order['Status'] === "Successful" ? 'text-green-500':'text-[#808080]'}`}>
                            <GoDotFill />
                        </span>{order['Status']}
                </span>
                <span className='w-1/5'>{order['Transaction ID']}</span>
                <span className='w-1/5'>{order['Refund Date']}</span>
                <span className='w-1/5 text-end'>{order['Order Amount']}</span>
            </div>
            })}
        </div>
    </div>
  )
}

export default OrdersContainer
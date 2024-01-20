import React from 'react'
import Menu from './Menu'
import { GrHomeRounded } from "react-icons/gr";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineWindow ,MdOutlinePeopleAlt,MdOutlineColorLens} from "react-icons/md";
import {  PiChartBar, PiSpeakerHigh } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { HiCash } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
const SidebarMenu = () => {
  return (
    <div className='h-1/2  mt-5 flex flex-col justify-evenly'>
        <Menu icon={<GrHomeRounded />} text="Home" />
        <Menu icon={<LuClipboardList />} text="Orders" />
        <Menu icon={<MdOutlineWindow />} text="Products" />
        <Menu icon={<FiTruck />} text="Delivery" />
        <Menu icon={<PiSpeakerHigh />} text="Marketing" />
        <Menu icon={<PiChartBar />} text="Analytics" />
        <div className='bg-white/20 rounded-sm'><Menu icon={<HiCash />} text="Payouts" /></div>
        <Menu icon={<TbDiscount2 />} text="Discounts" />
        <Menu icon={<MdOutlinePeopleAlt />} text="Audience" />
        <Menu icon={<MdOutlineColorLens />} text="Appearence" />
        <Menu icon={<AiOutlineThunderbolt />} text="Plugins" />
    </div>
  )
}

export default SidebarMenu
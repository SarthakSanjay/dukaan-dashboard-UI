import React from "react";
import Logo from "./Logo";
import { FaChevronDown } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";
import Credit from "./Credit";
const Sidebar = () => {
  return (
    <div className="w-1/6 bg-[#1e2640] h-screen  px-4  fixed top-0 left-0">
    {/* top */}
      <div className="flex w-full text-white  justify-around items-center ">
        <div className="flex pt-3">
          <Logo />
          <div className="text-white flex flex-col justify-between px-2">
            <h1>Nishyan</h1>
            <a className="underline text-sm font-light">
              <p>Visit store</p>
            </a>
          </div>
        </div>
        <div className="text-xl">
        <FaChevronDown />
        </div>
      </div>
      {/* mid */}
      <SidebarMenu />
      {/* bottom */}

        <Credit />

    </div>
  );
};

export default Sidebar;

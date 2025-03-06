"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[30px] border-b-2 border-b-[#DB0011]/50 relative flex items-center justify-between bg-[#ffffff] p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/CTjGRUS.png" width={230} height={28} className="w-[130px]" alt="logo" />
      <div className="relative">
        <RiLogoutCircleLine className="text-2xl text-black" onClick={toggleNav}/>

        {open && (
          <div className="absolute mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#d71e28]">
              {user.holder.firstName}&nbsp;{user.holder.lastName}
            </p>
            <p
              className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#d71e28] border whitespace-nowrap text-white"
              onClick={handleLogout}
            >
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

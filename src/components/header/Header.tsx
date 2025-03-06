"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] border-b-2 border-b-[#DB0011]/50 relative border flex items-center justify-start bg-white px-[15px]">
      <Image src="https://i.imgur.com/CTjGRUS.png" width={230} height={28} className="w-[140px]" alt="logo" />
    </div>
  );
}

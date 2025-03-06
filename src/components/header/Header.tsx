"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative border flex items-center justify-center bg-white px-[15px]">
      <Image src="https://i.imgur.com/PsNaFEP.png" width={230} height={28} className="w-[170px]" alt="logo" />
    </div>
  );
}

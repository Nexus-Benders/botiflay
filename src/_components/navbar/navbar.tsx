import React from "react";
import Image from "next/image";
import Container from "../layout/container";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/nav-links";

export default function Navbar() {
  return (
    <div className="absolute w-full top-0 z-50">
      <Container>
        <DesktopNavbar />
      </Container>
    </div>
  );
}

const DesktopNavbar = () => {
  return (
    <div className="flex flex-row justify-between items-center py-5">
      <Link href={"/"}>
        <figure>
          <Image
            className="w-[175px] h-[40px]"
            src="/logo.png"
            alt="Botiflay logo"
            width={100}
            height={100}
            quality={100}
            priority
          />
        </figure>
      </Link>
      <div className="flex-1 flex justify-center items-center ">
        <ul className="flex flex-row gap-8  justify-between bg-[#15151514] w-fit px-8 py-4 rounded-full">
          {NAV_LINKS.map((link: { href: string; label: string }) => (
            <li key={link.label} className="group">
              <Link href={link.href} className="relative">
                {link.label}
              </Link>
              <div className="origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 border-b-2 border-[#BDED5B]" />
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-gradient-to-b  text-[16px] font-bold leading-[18px] from-0% from-[#0D0D0D] to-100%  to-[#002E23] hover:bg-gradient-to-t hover:from-100% hover:from-[#002E23] hover:to-0% hover:to-[#0D0D0D] duration-300 cursor-pointer text-white  py-3.5 px-8 rounded-full">
        Start Your Project
      </button>
    </div>
  );
};

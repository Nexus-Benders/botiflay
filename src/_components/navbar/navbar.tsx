"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "../layout/container";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/nav-links";
import { MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full ">
      <div className="absolute w-full top-0 z-50 left-1/2 -translate-x-1/2 ">
        <Container>
          <DesktopNavbar />
        </Container>
      </div>
      <MobileNavbar />
    </div>
  );
}

const DesktopNavbar = () => {
  return (
    <div className="lg:flex flex-row justify-between items-center py-5 hidden">
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
      <div
        data-property-1="Variant3"
        className="px-8 py-3.5 bg-gradient-to-t from-emerald-950 to-stone-950 rounded-[30px]
  shadow-[0px_2px_8px_rgba(0,0,0,0.15),inset_0px_1px_3.9px_rgba(255,255,255,0.25),inset_0px_4px_3.2px_rgba(255,255,255,0.25)]
   outline-1 outline-offset-[-1px] outline-zinc-700
  inline-flex justify-center items-center gap-2.5"
      >
        <div className="text-center justify-start text-zinc-100 text-base font-bold font-['Space_Grotesk'] leading-none">
          Start Your Project
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden flex flex-row justify-between items-center  w-full ">
      {!isOpen && (
        <div className="p-6 w-full flex flex-row justify-between items-center">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Botiflay logo"
              width={100}
              height={100}
            />
          </Link>
          <MenuIcon onClick={() => setIsOpen(!isOpen)} />
        </div>
      )}
      {isOpen && (
        <div className="w-screen pb-12 bg-zinc-800 shadow-[0px_4px_12.100000381469727px_0px_rgba(17,31,59,0.08)] backdrop-blur-md inline-flex flex-col justify-start items-center gap-8 p-6">
          <div className="flex flex-row justify-between items-center w-full">
            <Image
              src="/assets/logo-white.png"
              alt="Botiflay logo"
              width={100}
              height={100}
            />
            <XIcon className="text-white" onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div className="self-stretch px-4 flex flex-col justify-start items-center gap-12">
            <div className="self-stretch flex flex-col justify-center items-start gap-4">
              <div className="flex flex-col justify-center items-start gap-4">
                <div className="justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Home
                </div>
                <div className="justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Work
                </div>
                <div className="justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Service
                </div>
                <div className="justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Process
                </div>
                <div className="justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-normal">
                  About
                </div>
                <div className="justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Contact
                </div>
                <div className="justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Process
                </div>
              </div>
            </div>
            <div
              className="self-stretch px-6 py-3 bg-gradient-to-b from-zinc-700/0 to-gray-400/60 rounded-[100px] 
                shadow-[0px_10px_40px_0px_rgba(255,255,255,0.15),_0px_10px_10px_0px_rgba(0,0,0,0.10),_0px_4px_4px_0px_rgba(0,0,0,0.05),_inset_0px_8px_10px_0px_rgba(246,249,255,0.20)] 
                  outline-1 outline-offset-[-1px] outline-lime-500/0 backdrop-blur-[10px] inline-flex justify-center items-center gap-3"
            >
              <div className="text-center justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-none">
                Start A Project
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
  
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Service", href: "/service" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="lg:hidden w-full relative">
      {/* Header with logo and menu button */}
      <div className="p-6 w-full flex flex-row justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Botiflay logo"
            width={100}
            height={100}
          />
        </Link>
        
        {/* Animated Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex items-center justify-center transition-all duration-300 ease-out"
        >
          <div className="relative w-6 h-6">
            {/* Top line */}
            <span 
              className={`absolute top-1 left-0 w-6 h-0.5 bg-zinc-900 transition-all duration-300 ease-out ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            {/* Middle line */}
            <span 
              className={`absolute top-3 left-0 w-6 h-0.5 bg-zinc-900 transition-all duration-300 ease-out ${
                isOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            {/* Bottom line */}
            <span 
              className={`absolute top-5 left-0 w-6 h-0.5 bg-zinc-900 transition-all duration-300 ease-out ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isOpen ? 'opacity-60' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 left-0 right-0 bg-zinc-800 shadow-[0px_4px_12.100000381469727px_0px_rgba(17,31,59,0.08)] backdrop-blur-md transition-transform duration-500 ease-out ${
            isOpen 
              ? 'translate-y-0' 
              : '-translate-y-full'
          }`}
        >
          <div className="pb-12 flex flex-col justify-start items-center gap-8 p-6">
            {/* Header */}
            <div className="flex flex-row justify-between items-center w-full">
              <Image
                src="/assets/logo-white.png"
                alt="Botiflay logo"
                width={100}
                height={100}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <XIcon className="text-white w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="self-stretch px-4 flex flex-col justify-start items-center gap-12">
              <div className="self-stretch flex flex-col justify-center items-start gap-4">
                <div className="flex flex-col justify-center items-start gap-4">
                  {menuItems.map((item, index) => (
                    <Link 
                      key={item.label}
                      href={item.href}
                      className={`justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-normal transition-all duration-500 ease-out hover:text-[#BDED5B] hover:translate-x-2 ${
                        isOpen 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: isOpen ? `${index * 100 + 200}ms` : `${(menuItems.length - index - 1) * 50}ms`
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div
                className={`self-stretch px-6 py-3 bg-gradient-to-b from-zinc-700/0 to-gray-400/60 rounded-[100px] 
                  shadow-[0px_10px_40px_0px_rgba(255,255,255,0.15),_0px_10px_10px_0px_rgba(0,0,0,0.10),_0px_4px_4px_0px_rgba(0,0,0,0.05),_inset_0px_8px_10px_0px_rgba(246,249,255,0.20)] 
                    outline-1 outline-offset-[-1px] outline-lime-500/0 backdrop-blur-[10px] inline-flex justify-center items-center gap-3
                    transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0px_15px_50px_0px_rgba(255,255,255,0.25),_0px_15px_15px_0px_rgba(0,0,0,0.15)] ${
                      isOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                style={{
                  transitionDelay: isOpen ? `${menuItems.length * 100 + 400}ms` : '0ms'
                }}
              >
                <div className="text-center justify-start text-white text-base font-bold font-['Space_Grotesk'] leading-none">
                  Start A Project
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

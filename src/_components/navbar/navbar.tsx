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

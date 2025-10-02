import React from "react";
import Image from "next/image";
import Container from "../layout/container";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/nav-links";

export default function Navbar() {
  return (
    <Container>
      <DesktopNavbar />
    </Container>
  );
}

const DesktopNavbar = () => {
  return (
    <div className="flex flex-row justify-between items-center py-2">
      <figure>
        <Image src="/logo.png" alt="Botiflay logo" width={100} height={100} />
      </figure>
      <div className="flex-1 flex justify-center items-center ">
        <ul className="flex flex-row gap-8  justify-between bg-[#15151514] w-fit px-8 py-4 rounded-full">
          {NAV_LINKS.map((link: { href: string; label: string }) => (
            <li key={link.href} className="group">
              <Link href={link.href} className="relative">
                {link.label}
              </Link>
              <div className="origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 border-b-2 border-[#BDED5B]" />
            </li>
          ))}
        </ul>
      </div>
      <button>Start Your Project</button>
    </div>
  );
};

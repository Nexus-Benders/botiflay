import React from "react";
import Image from "next/image";
import Container from "../layout/container";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container>
      <DesktopNavbar />
    </Container>
  );
}

const DesktopNavbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <figure>
        <Image src="/logo.png" alt="Botiflay logo" width={100} height={100} />
      </figure>
      <div className="flex-1 flex justify-center items-center">
        <ul className="flex flex-row justify-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
        </ul>
      </div>
      <button>Start Your Project</button>
    </div>
  );
};

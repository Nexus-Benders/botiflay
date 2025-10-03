import React from "react";
import SectionHeader from "../headers/section-header";
import Image from "next/image";

export default function OurService() {
  return (
    <div className="flex justify-center items-center flex-col gap-14 h-dvh  text-center py-12 text-white">
      <SectionHeader hasBlackBg headline={"Our Service"} />
      <figure className="relative size-full pointer-events-none">
        <Image src={"/assets/service.png"} alt="service-image" fill />
      </figure>
    </div>
  );
}

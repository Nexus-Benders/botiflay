import React from "react";
import SectionHeader from "../headers/section-header";
import Image from "next/image";

export default function OurService() {
  return (
    <div className="flex justify-center items-center flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:h-dvh text-center py-8 sm:py-10 md:py-12 text-white">
      <SectionHeader hasBlackBg headline={"Our Service"} />
      <figure className="relative pointer-events-none w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3]">
        <Image src={"/assets/service.png"} alt="service-image" fill className="object-contain" />
      </figure>
    </div>
  );
}

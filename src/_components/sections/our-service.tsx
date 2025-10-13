import React from "react";
import SectionHeader from "../headers/section-header";
import Image from "next/image";

export default function OurService() {
  return (
    <div className="flex justify-center items-center flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:h-dvh text-center py-8 sm:py-10 md:py-12 text-white">
      <SectionHeader hasBlackBg headline={"Our Service"} />
      {/* Mobile Service Image */}
      <figure className="relative pointer-events-none w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] aspect-[9/16] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] lg:hidden">
        <Image
          src={"/assets/service-mobile.png"}
          alt="service-image-mobile"
          fill
          className="object-contain"
        />
      </figure>

      {/* Desktop Service Image */}
      <figure className="relative pointer-events-none w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] aspect-[4/3] hidden lg:block">
        <Image
          src={"/assets/service.png"}
          alt="service-image-desktop"
          fill
          className="object-contain"
        />
      </figure>
    </div>
  );
}

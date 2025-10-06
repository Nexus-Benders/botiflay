"use client";
import React, { useState } from "react";
import SectionHeader from "../headers/section-header";
import Image from "next/image";

export default function ContactUs() {
  const [option, setOption] = useState<"book-a-call" | "request-quote">(
    "request-quote"
  );
  return (
    <div className="flex flex-col space-y-12 justify-center items-center text-center">
      <SectionHeader hasBlackBg headline={<p>CONTACT US</p>} />

      <div className="flex flex-col   justify-center items-center w-full gap-14 pb-14">
        <div className="inline-flex text-nowrap w-fit mx-auto bg-[#1F1F1F] border border-[#2F2F2F] rounded-full shadow-sm cursor-pointer">
          <button
            onClick={() => setOption("book-a-call")}
            className={`px-8 py-3 rounded-full font-medium transition-all ${
              option === "book-a-call"
                ? `w-full relative rounded-full 
    bg-gradient-to-b from-[#8B8B8B] to-[#252525] duration-300
    text-white py-3 px-6 font-medium 
    cursor-pointer
    [border-image:linear-gradient(to_bottom,#474747,rgba(255,255,255,0))_1] 
    shadow-[inset_0_1px_3.9px_rgba(255,255,255,0.25),inset_0_4px_3.2px_rgba(255,255,255,0.25)] 
    transition-all 
    hover:from-[#8b8b8bd5] hover:to-[#252525]`
                : "text-[white] hover:text-[#6B7280]"
            }`}
          >
            Book A Call
          </button>
          <button
            onClick={() => setOption("request-quote")}
            className={`px-8 py-3 rounded-full font-medium transition-all ${
              option === "request-quote"
                ? `w-full relative rounded-full 
    bg-gradient-to-b from-[#8B8B8B] to-[#252525] duration-300
    text-white py-3 px-6 font-medium 
    cursor-pointer
    [border-image:linear-gradient(to_bottom,#474747,rgba(255,255,255,0))_1] 
    shadow-[inset_0_1px_3.9px_rgba(255,255,255,0.25),inset_0_4px_3.2px_rgba(255,255,255,0.25)] 
    transition-all 
    hover:from-[#8b8b8bd5] hover:to-[#252525]`
                : "text-[#9CA3AF] hover:text-[#6B7280]"
            }`}
          >
            Request Quote
          </button>
        </div>
        <figure className="max-w-[1080px] w-full lg:min-h-[480px] min-h-[380px] xl:min-h-[580px] h-full relative">
          <Image
            src={"/assets/calender.png"}
            alt="calender"
            layout="fill"
            className="object-contain"
          />
        </figure>
      </div>
    </div>
  );
}

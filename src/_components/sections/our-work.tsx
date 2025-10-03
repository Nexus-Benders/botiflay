import React from "react";
import SectionHeader from "../headers/section-header";
import Image from "next/image";

export default function OurWork() {
  return (
    <div className="py-12 flex flex-col justify-center items-center text-center">
      <SectionHeader headline={"Our Work"} hasBlackBg />
      <div>
        <ProjectCard />
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="bg-[#282828] border-[1px] border-[#292929] text-white rounded-2xl grid grid-cols-[63%_36%] gap-6 p-8">
      <figure className="w-full">
        <Image src={"/work/image1.png"} alt="" width={1000} height={1000} />
      </figure>
      <div className="bg-[#2D2D2D] rounded-2xl p-3">
        <h2 className="text-2xl font-bold mb-4">HARMONIC AI</h2>

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          A modern, intuitive dashboard design for managing Property and Tenant
          operations, agent performance, and automation tasks with real-time
          insights and streamlined workflows.
        </p>

        {/* Info Section */}
        <div className="space-y-3 text-gray-200">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-medium">Client</span>
            <span className="text-gray-400">Kaiko Studios</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-medium">Role</span>
            <span className="text-gray-400">UI.UX / Branding</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="font-medium">Client Rating</span>
            <span className="text-gray-400">5/5</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="bg-[#2A2A2A] text-gray-300 px-4 py-2 rounded-full text-sm">
            Web Design
          </span>
          <span className="bg-[#2A2A2A] text-gray-300 px-4 py-2 rounded-full text-sm">
            Figma
          </span>
          <span className="bg-[#2A2A2A] text-gray-300 px-4 py-2 rounded-full text-sm">
            UX Research
          </span>
        </div>
      </div>
    </div>
  );
}

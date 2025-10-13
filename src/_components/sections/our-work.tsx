import React from "react";
import SectionHeader from "../headers/section-header";
import Image from "next/image";

export default function OurWork() {
  const cardData = [
    {
      id: 1,
      title: "HARMONIC AI",
      description:
        "A modern, intuitive dashboard design for managing Property and Tenant operations, agent performance, and automation tasks with real-time insights and streamlined workflows.",
      client: "Kako Studios",
      role: "UI/UX / Branding",
      clientRating: "5/5",
      tags: ["Web Design", "Figma", "UX Research"],
      image: "image1.png",
    },
    {
      id: 2,
      title: "iCurley",
      description:
        "A clean and efficient interface for managing appointments, patient records, staff performance, and financial activities, built to streamline clinic operations with clarity and ease.",
      client: "Kristin Watson",
      role: "UI/UX",
      clientRating: "4.9/5",
      tags: ["Web Design", "UI/UX Design", "UX Research"],
      image: "image2.png",
    },
    {
      id: 3,
      title: "JOBBY",
      description:
        "A sleek and user-friendly mobile app design that helps users search, apply, and track job opportunities effortlessly, with personalized recommendations and a smooth application flow.",
      client: "Azin Savant",
      role: "UI/UX / Branding",
      clientRating: "5/5",
      tags: ["Mobile App", "UI/UX Design", "Branding"],
      image: "image3.png",
    },
    {
      id: 4,
      title: "PARCIER",
      description:
        "A modern and intuitive app design for tracking shipments, managing deliveries, and optimizing logistics operations with real-time updates and smart insights.",
      client: "Salaf Global",
      role: "UI/UX / Branding",
      clientRating: "4.9/5",
      tags: ["Mobile App", "UI/UX Design", "Branding"],
      image: "image4.png",
    },
  ];

  return (
    <div className="py-8 sm:py-10 md:py-12 flex flex-col justify-center items-center text-center">
      <SectionHeader headline={"Our Work"} hasBlackBg />
      <div className="flex flex-col gap-6 sm:gap-8 py-8 sm:py-10 md:py-12 w-full max-w-7xl mx-auto px-4">
        {cardData?.map((item, idx) => (
          <ProjectCard key={item.id} {...item} isReveresed={idx % 2 === 0} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  client,
  role,
  clientRating,
  tags,
  image,
  isReveresed,
}: {
  title: string;
  description: string;
  client: string;
  role: string;
  clientRating: string;
  tags: string[];
  image: string;
  isReveresed: boolean;
}) {
  return (
    <div className="bg-[#282828] border-[1px] border-[#292929] text-white rounded-2xl overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <figure className="w-full">
          <Image src={`/work/${image}`} alt={title} width={1000} height={1000} className="w-full h-auto" />
        </figure>
        <div className="bg-[#2D2D2D] p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl leading-[1.3] font-bold">{title}</h2>
            <p className="font-[400] text-sm sm:text-base leading-[1.6] text-gray-300">{description}</p>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="space-y-3 text-white font-[300] text-sm leading-6 tracking-[-2%]">
              <div className="flex justify-between border-b-[1px] border-[#ffffff54] pb-2">
                <span>Client</span>
                <span>{client}</span>
              </div>
              <div className="flex justify-between border-b-[1px] border-[#ffffff54] pb-2">
                <span>Role</span>
                <span>{role}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Client Rating</span>
                <span>{clientRating}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#FFFFFF26] font-[14px] leading-5 tracking-tight text-gray-300 px-3 py-1.5 rounded-full text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div
        className={`hidden lg:grid ${
          isReveresed ? "grid-cols-[36%_63%]" : "grid-cols-[63%_36%]"
        } gap-6 p-8`}
      >
        <figure className={`w-full ${isReveresed ? "order-2" : "order-1"}`}>
          <Image src={`/work/${image}`} alt={title} width={1000} height={1000} />
        </figure>
        <div
          className={`bg-[#2D2D2D] text-start rounded-2xl p-8 space-y-8 ${
            isReveresed ? "order-1" : "order-2"
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-[34px] leading-[44px] font-bold">{title}</h2>
            <p className="font-[400] text-lg leading-7">{description}</p>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div className="space-y-3 text-white font-[300] text-sm leading-7 tracking-[-2%]">
              <div className="flex justify-between border-b-[1px] border-[#ffffff54] pb-2">
                <span>Client</span>
                <span>{client}</span>
              </div>
              <div className="flex justify-between border-b-[1px] border-[#ffffff54] pb-2">
                <span>Role</span>
                <span>{role}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Client Rating</span>
                <span>{clientRating}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#FFFFFF26] font-[14px] leading-5 tracking-tight text-gray-300 px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

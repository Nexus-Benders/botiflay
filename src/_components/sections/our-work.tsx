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
    <div className="py-12 flex flex-col justify-center items-center text-center">
      <SectionHeader headline={"Our Work"} hasBlackBg />
      <div className="flex flex-col gap-4">
        {cardData?.map((item) => (
          <ProjectCard key={item.id} {...item} />
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
}: {
  title: string;
  description: string;
  client: string;
  role: string;
  clientRating: string;
  tags: string[];
  image: string;
}) {
  return (
    <div className="bg-[#282828] border-[1px] border-[#292929] text-white rounded-2xl grid grid-cols-[63%_36%] gap-6 p-8">
      <figure className="w-full">
        <Image src={`/work/${image}`} alt="" width={1000} height={1000} />
      </figure>
      <div className="bg-[#2D2D2D] rounded-2xl p-3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>

        {/* Info Section */}
        <div className="space-y-3 text-gray-200">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-medium">Client</span>
            <span className="text-gray-400">{client}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-medium">Role</span>
            <span className="text-gray-400">{role}</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="font-medium">Client Rating</span>
            <span className="text-gray-400">{clientRating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="bg-[#2A2A2A] text-gray-300 px-4 py-2 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import SectionHeader from "../headers/section-header";

export default function Growth() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="flex justify-center items-center text-center">
        <SectionHeader
          headline={
            <p>
              Crafting Designs <br /> That Drive Growth
            </p>
          }
          description="Creative solutions, seamless collaboration, and impactful results."
        />
      </div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="flex items-center justify-center pt-6 sm:pt-9">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
        {/* Growth Card */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-200 p-3">
          <div className="border rounded-2xl border-[#F5F5F6] p-4 sm:p-5 bg-[#FFFFFF]">
            <GradientText text="Growth" />
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-2 text-center py-3 sm:py-4">
              <div className="">
                <div className="text-[24px] sm:text-[28px] md:text-[32px] leading-[1.2] font-semibold text-[#0B0B0B] font-manrope">
                  80%
                </div>
                <CardParagraph text="Improved feedback" />
              </div>
              <div className="">
                <div className="text-[24px] sm:text-[28px] md:text-[32px] leading-[1.2] font-semibold text-[#0B0B0B] font-manrope">
                  56%
                </div>
                <CardParagraph text="New projects" />
              </div>
            </div>
            <CardStats type="Success" value="92%" />
          </div>
          <CardDetails
            text={
              "We have been transforming SaaS products for over 5 years by designing unique interfaces & driving growth."
            }
            title={
              <span>
                Success as a <br /> Service
              </span>
            }
          />
        </div>

        {/* Conversion Focused Card */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-200 p-3">
          <div className="border rounded-2xl relative border-[#F5F5F6] bg-[#FFFFFF] p-4 sm:p-5">
            <GradientText text="Conversion Focused" />

            <div className="flex flex-col items-center pt-3 sm:pt-4 space-y-3 sm:space-y-4">
              <div className="font-manrope font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[1.2] text-[#0B0B0B] tracking-[-2%]">
                200%
              </div>
              <div className="w-full h-[2px] absolute top-[75%] bg-[#F5F5F6]" />

              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-600 to-lime-600" />
                <div className="absolute inset-3 sm:inset-4 md:inset-5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          <CardDetails
            text={
              "Websites so stunning that it will increases your conversion rate by 200%, decrease the bounce."
            }
            title={"Conversion-Focused Design"}
          />
        </div>

        <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-200 p-3">
          <div className="border rounded-2xl relative border-[#F5F5F6] bg-[#FFFFFF] p-4 sm:p-5 space-y-3 sm:space-y-4">
            <GradientText text="Market Analytics" />
            <CardParagraph text="Stats will speak for itself" />

            <div className="space-y-2 sm:space-y-3">
              <CardStats type="User Rating" value="80%" />
              <CardStats type="Leads" value="150%" />
            </div>
          </div>
          <CardDetails
            text={
              "Designs that makes you and your venture shine in the crowd of similar looking websites."
            }
            title={"Stay Ahead of the Market"}
          />
        </div>
      </div>
    </div>
  );
}

function GradientText({ text }: { text: string }) {
  return (
    <h2 className="text-2xl leading-8 font-[500]  bg-gradient-to-r from-[#141C01] from-0% to-[#9DE500] to-[100%] text-transparent bg-clip-text">
      {text}
    </h2>
  );
}

function CardParagraph({ text }: { text: string }) {
  return (
    <p className="text-sm text-[#0B0B0B] font-[500] font-space-grotesk text-[16px] leading-[20px] tracking-[-2%]">
      {text}
    </p>
  );
}

function CardStats({ type, value }: { type: string; value: string }) {
  return (
    <div>
      <div className=" grid grid-cols-[30%_50%_10%] items-center justify-between mb-2 flex-row gap-3 p-2 px-4  border border-[#F5F5F6] rounded-full">
        <span className="text-[16px] font-[400] tracking-[-2%] leading-5 text-[#0B0B0B]">
          {type}
        </span>
        <div className="w-full bg-[#EAF8CB] rounded-full h-2">
          <div
            className="bg-lime-500 h-2 rounded-full"
            style={{ width: value === "150%" ? "70%" : value }}
          />
        </div>
        <span className="text-[16px] font-[400] tracking-[-2%] leading-5 text-[#0B0B0B]">
          {value}
        </span>
      </div>
      {/* Progress bar */}
    </div>
  );
}

function CardHeading({ text }: { text: React.ReactNode }) {
  return (
    <h3 className="text-[34px] leading-[44px] font-bold text-[#2F2F2F] ">
      {text}
    </h3>
  );
}

function CardDetails({
  text,
  title,
}: {
  text: string;
  title: React.ReactNode;
}) {
  return (
    <div className="pt-6 px-4 flex flex-col gap-2">
      <CardHeading text={title} />
      <p className="font-[400] text-lg leading-7 tracking-[-2%] text-[#393939]">
        {text}
      </p>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export default function PricingSection() {
  const [pricingModel, setPricingModel] = useState<"one-time" | "subscription">(
    "one-time"
  );
  const [landingPageDev, setLandingPageDev] = useState(true);
  const [fullWebsiteDev, setFullWebsiteDev] = useState(false);

  return (
    <div className="py-20 px-4 bg-[#F8F8F8]">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-[56px] leading-[70px] text-[#262626] uppercase mb-4">
            PRICING PLAN
          </h2>
          <p className="text-[18px] leading-[32px] text-[#434343] mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business. Whether you need a simple
            landing page or a full-scale custom website, we&apos;ve got you
            covered!
          </p>

          {/* Pricing Model Toggle */}
          <div className="inline-flex bg-white border border-[#E5E5E5] rounded-full p-1 shadow-sm">
            <button
              onClick={() => setPricingModel("one-time")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                pricingModel === "one-time"
                  ? "bg-gradient-to-b from-[#4A4A4A] to-[#6A6A6A] text-white shadow-sm"
                  : "text-[#9CA3AF] hover:text-[#6B7280]"
              }`}
            >
              One Time
            </button>
            <button
              onClick={() => setPricingModel("subscription")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                pricingModel === "subscription"
                  ? "bg-gradient-to-b from-[#4A4A4A] to-[#6A6A6A] text-white shadow-sm"
                  : "text-[#9CA3AF] hover:text-[#6B7280]"
              }`}
            >
              Subscription
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Landing Page + Dev */}
          <div className="bg-white rounded-2xl border border-[#F0F0F0] shadow-sm p-8">
            <div className="space-y-4">
              <CardTop
                label="LANDING PAGE + DEV"
                description="Everything you need to create a high-converting, visually striking landing page."
                price="1700"
                turnaround="10-15 business days turnaround"
                milestone="Payment as 2 Milestone"
              />

              <Features
                label="Design Only"
                description="15 days of free supports"
                features={[
                  "Single Page with style guide page",
                  "4 Hero Iterations for homepage",
                  "Free copywriting",
                  "Unlimited Revision",
                  "Full Responsive site",
                ]}
                setLandingPageDev={setLandingPageDev}
                landingPageDev={landingPageDev}
              />

              <Features
                label="With Development"
                description="15 days of free supports"
                features={[
                  "Webflow or framer development",
                  "Custom code included",
                  "Advanced Animations",
                  "Advanced SEO & CMS Integration",
                  "Integrations - Analytical tools",
                ]}
                setLandingPageDev={setFullWebsiteDev}
                landingPageDev={fullWebsiteDev}
                hasSwitch
              />
            </div>
          </div>

          {/* Card 2: Full Website */}
          <div className="bg-white rounded-2xl border border-[#F0F0F0] shadow-sm p-8">
            <div className="space-y-6">
              <CardTop
                label="FULL WEBSITE"
                description="A complete, custom-built website to elevate your brand and engage your audience."
                price="35000"
                turnaround="25-40 business days turnaround"
                milestone="Payment as 2 Milestone"
              />

              {/* Design Only Section */}
              <div className="border-t border-[#F0F0F0] pt-6">
                <h4 className="font-bold text-[18px] text-[#262626] mb-4">
                  Design Only
                </h4>
                <ul className="space-y-3">
                  {[
                    "Multi page -Max 10",
                    "Conversion-Focused Layout",
                    "Free copywriting",
                    "Unlimited Revision",
                    "2 Hero Iterations for homepage",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#262626] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-2 h-2 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-[14px] text-[#434343]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Development Section */}
              <div className="border-t border-[#F0F0F0] pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-[18px] text-[#262626]">
                    With Development
                  </h4>
                  <button
                    onClick={() => setFullWebsiteDev(!fullWebsiteDev)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      fullWebsiteDev ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        fullWebsiteDev ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-[14px] text-[#434343] mb-4">
                  30 days of free supports
                </p>
                <ul className="space-y-3">
                  {[
                    "Webflow or framer development",
                    "Custom code included",
                    "Advanced Animations",
                    "Advanced SEO & CMS Integration",
                    "Integrations - Analytical tools",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#262626] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-2 h-2 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span
                        className={`text-[14px] ${
                          fullWebsiteDev ? "text-[#434343]" : "text-[#9CA3AF]"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Custom (Dark Card) */}
          <div className="bg-gradient-to-b from-[#2D2D2D] to-[#3A3A3A] rounded-2xl shadow-lg p-8 text-white h-fit">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[24px] leading-[32px] text-white mb-3">
                  CUSTOM
                </h3>
                <p className="text-[16px] leading-[24px] text-white/90 mb-8">
                  Tailored solutions built to match your brand, vision, and
                  functionality needs.
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-b from-[#4A4A4A] to-[#6A6A6A] text-white py-3 px-6 rounded-lg font-medium shadow-sm hover:from-[#3A3A3A] hover:to-[#5A5A5A] transition-all">
                  Request Quote
                </button>
                <button className="w-full text-white text-center py-2 font-medium">
                  Book A Call
                </button>
              </div>

              {/* Services Section */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="font-bold text-[18px] text-white mb-4">
                  Services
                </h4>
                <ul className="space-y-3">
                  {[
                    "UI/UX Design",
                    "Branding",
                    "Webflow / Framer Developing",
                    "SaaS",
                    "Web application",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-2 h-2 text-[#2D2D2D]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-[14px] text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ label }: { label: string }) {
  return (
    <button
      className="w-full relative rounded-full 
    bg-gradient-to-b from-[#8B8B8B] to-[#252525] duration-300
    text-white py-3 px-6 font-medium 
    cursor-pointer
    [border-image:linear-gradient(to_bottom,#474747,rgba(255,255,255,0))_1] 
    shadow-[inset_0_1px_3.9px_rgba(255,255,255,0.25),inset_0_4px_3.2px_rgba(255,255,255,0.25)] 
    transition-all 
    hover:from-[#8b8b8bd5] hover:to-[#252525]"
    >
      {label}
    </button>
  );
}

function CardTop({
  label,
  description,
  price,
  turnaround,
  milestone,
}: {
  label: string;
  description: string;
  price: string;
  turnaround: string;
  milestone: string;
}) {
  return (
    <div>
      <h3 className="font-bold text-[24px] leading-[34px] text-[#434343] mb-3">
        {label}
      </h3>
      <p className="text-[14px] leading-[20px] font-[400] text-[#434343] mb-6">
        {description}
      </p>
      <div className="">
        <span className="font-bold text-[34px] leading-[44px] text-[#434343]">
          {price}
        </span>
        <span className="text-[14px] font-[400] leading-5 text-[#434343]">
          /Project
        </span>
      </div>
      <p className="text-[14px] text-[#434343] mb-2">{turnaround}</p>
      <p className="text-[14px] text-[#434343]">{milestone}</p>
      <p className="text-[12px] text-[#434343]">(50% advance, 50% on final)</p>

      <div className="space-y-1 mt-4">
        <Button label={"Get Started Today"} />
        <button className="w-full text-[#434343] text-[14px] leading-4 underline font-[500] text-center py-2 ">
          Book A Call
        </button>
      </div>
    </div>
  );
}

function Features({
  label,
  description,
  features,
  setLandingPageDev,
  landingPageDev,
  hasSwitch = false,
  hasDescription = false,
}: {
  label: string;
  description: string;
  features: string[];
  setLandingPageDev: (value: boolean) => void;
  landingPageDev: boolean;
  hasSwitch?: boolean;
  hasDescription?: boolean;
}) {
  return (
    <div className="border-t border-[#F0F0F0] pt-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className=" text-[18px] leading-6 text-[#262626] font-[500]">
          {label}
        </h4>
        {hasSwitch && (
          <button
            onClick={() => setLandingPageDev(!landingPageDev)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
              landingPageDev ? "bg-[#9DE500]" : "bg-[#EDEDED]"
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                landingPageDev ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
        )}
      </div>
      {hasDescription && (
        <p className="text-[14px] font-[400] leading-5 text-[#2F2F2F]">
          {description}
        </p>
      )}
      <ul className="space-y-3">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Image
              src={"/assets/Tick.png"}
              alt="tick"
              width={100}
              height={100}
              className="size-5"
            />
            <span className="text-[16px] font-[400] leading-[26px] text-[#434343]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

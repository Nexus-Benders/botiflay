import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-28 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[72px]">
      <div className="font-bold flex flex-col gap-4 sm:gap-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[1100px] mx-auto leading-[1.2] tracking-[-4%] px-4 text-start lg:text-center">
        <p className="text-[#163E59] ">
          Ever wonder why some startups shine while others fade? The secret is
          in the design.
        </p>
        <p className="text-[#9CA0A2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal">
          At BotiFlay, we help founders create innovative digital products that
          boost conversions, retain customers, and attract investors. Ready to
          make your product the next big thing?
        </p>
      </div>
      <Slider />
    </div>
  );
}

function Slider() {
  const images = [
    "/aboutSlide/04 Healthtec UX UI Design.png",
    "/aboutSlide/04 Issue Tracker App UX UI Design.png",
    "/aboutSlide/04 Logistic UX UI Design Service.png",
    "/aboutSlide/04 Sendo Financial App UX UI Design.png",
    "/aboutSlide/04 Travencio Travel ux ui design.png",
    "/aboutSlide/04 Uprankly - AI Powered Link building Outreach App.png",
    "/aboutSlide/05 AI Book Keeper UX UI Design App.png",
    "/aboutSlide/05 Job Finding APP UX UI Design.png",
    "/aboutSlide/05 Travencio Travel ux ui design.png",
    "/aboutSlide/05 Uprankly - AI Powered Link building Outreach App.png",
    "/aboutSlide/06 Job Finding APP UX UI Design.png",
    "/aboutSlide/06 Logistic UX UI Design Service.png",
    "/aboutSlide/06 Travencio Travel ux ui design.png",
    "/aboutSlide/07 AI Accounting App UX UI Design.png",
    "/aboutSlide/07 Dbuilder KIT Design.png",
    "/aboutSlide/07 Issue Tracker App UX UI Design.png",
    "/aboutSlide/07 Job Finding APP UX UI Design.png",
    "/aboutSlide/07 Poptics Marketing Tools.png",
    "/aboutSlide/08 AI Book Keeper UX UI Design App.png",
    "/aboutSlide/08 Issue Tracker App UX UI Design.png",
    "/aboutSlide/08 Logistic UX UI Design Service.png",
    "/aboutSlide/09 AI Accounting App UX UI Design.png",
    "/aboutSlide/09 Spendo.png",
    "/aboutSlide/10 Poptics Marketing Tools.png",
    "/aboutSlide/11 Poptics Marketing Tools.png",
    "/aboutSlide/12 Healthtec UX UI Design.png",
    "/aboutSlide/15 Krait AI.png",
    "/aboutSlide/Category Page.png",
    "/aboutSlide/Dashboard.png",
    "/aboutSlide/Desktop - 19.png",
    "/aboutSlide/Frame 1171277815.png",
    "/aboutSlide/Frame 1261155180.png",
    "/aboutSlide/Frame 1261155185.png",
    "/aboutSlide/Frame 27807.png",
    "/aboutSlide/Group 1321316998.png",
    "/aboutSlide/Group 1321316999.png",
    "/aboutSlide/Group 3447.png",
    "/aboutSlide/Home page.png",
    "/aboutSlide/iphone 15.png",
    "/aboutSlide/iphone 16.png",
    "/aboutSlide/iphone 17.png",
    "/aboutSlide/iphone 24.png",
    "/aboutSlide/iphone 30.png",
    "/aboutSlide/iphone 34.png",
    "/aboutSlide/property list.png",
    "/aboutSlide/Property.png",
    "/aboutSlide/Sign Up.png",
    "/aboutSlide/Transections Graph.png",
  ];

  return (
    <div className="max-h-[320px] sm:max-h-[420px] md:max-h-[520px] bg-[#FFFFFF] shadow-xl rounded-2xl overflow-hidden py-6 sm:py-8 md:py-12">
      <div className="flex gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6">
        {[0, 1, 2, 3, 4].map((colIndex) => (
          <div key={colIndex} className="flex-1 overflow-hidden">
            <div
              className={`flex flex-col gap-3 sm:gap-4 md:gap-6 ${
                colIndex % 2 === 0 ? "animate-slide-down" : "animate-slide-up"
              }`}
            >
              {/* Duplicate images for infinite scroll effect */}
              {[...images, ...images, ...images].map((img, imgIndex) => (
                <div
                  className={`flex flex-col gap-3 sm:gap-4 md:gap-6 ${
                    colIndex % 2 === 0
                      ? "animate-slide-down"
                      : "animate-slide-up"
                  }`}
                  key={imgIndex}
                >
                  <div
                    key={imgIndex}
                    className="relative rounded-xl sm:rounded-2xl max-h-32 sm:max-h-40 md:max-h-56 overflow-hidden aspect-[3/4] flex-shrink-0 "
                  >
                    <Image
                      width={100}
                      height={100}
                      src={img}
                      alt={`Gallery image ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority
                    />
                  </div>
                  <div className="bg-black/10 backdrop-blur-3xl h-2 sm:h-3 md:h-4 w-full rounded-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

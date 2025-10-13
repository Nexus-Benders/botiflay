import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-28 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[72px]">
      <div className="font-bold flex flex-col gap-4 sm:gap-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[1100px] mx-auto text-center leading-[1.2] tracking-[-4%] px-4">
        <p className="text-[#163E59]">
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
    "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1758531/pexels-photo-1758531.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400",
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
                  <div className="bg-[#727171] h-2 sm:h-3 md:h-4 w-full rounded-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

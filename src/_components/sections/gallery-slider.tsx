"use client";
import Image from "next/image";
import React from "react";

export default function GallerySlider() {
  return (
    <div>
      <Slider />
    </div>
  );
}

const Slider = () => {
  // Mock images from your design (replace with your actual URLs)
  const slides = [
    {
      id: 1,
      src: "https://unsplash.it/300/300",
      alt: "Video Solutions",
    },
    {
      id: 2,
      src: "https://unsplash.it/300/300",
      alt: "Targeted Ads",
    },
    {
      id: 3,
      src: "https://unsplash.it/300/300",
      alt: "Legal Advisors",
    },
    {
      id: 4,
      src: "https://unsplash.it/300/300",
      alt: "Architecture Firm",
    },
    {
      id: 5,
      src: "https://unsplash.it/300/300",
      alt: "Floyd Miles",
    },
  ];

  type MarqueeStyle = React.CSSProperties & {
    "--duration"?: string;
    "--direction"?: "normal" | "reverse";
  };

  const topRowStyle: MarqueeStyle = {
    "--duration": "200s",
    "--direction": "normal",
  };

  const bottomRowStyle: MarqueeStyle = {
    "--duration": "200s",
    "--direction": "reverse",
  };

  return (
    <div className="">
      <div className="slider relative overflow-hidden">
        {/* Top Row */}
        <div className="track pb-4" style={topRowStyle}>
          {[...slides, ...slides].map((slide, idx) => (
            <div
              key={`top-${slide.id}-${idx}`}
              className="flex-shrink-0 mx-2 first:ml-0 last:mr-0"
            >
              <Image
                width={400}
                height={250}
                src={slide.src}
                alt={slide.alt}
                className="w-72 h-44 lg:w-96 lg:h-72 object-cover rounded-xl shadow-lg  transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="track" style={bottomRowStyle}>
          {[...slides, ...slides].map((slide, idx) => (
            <div
              key={`bottom-${slide.id}-${idx}`}
              className="flex-shrink-0 mx-2 first:ml-0 last:mr-0"
            >
              <Image
                width={400}
                height={250}
                src={slide.src}
                alt={slide.alt}
                className="w-72 h-44 lg:w-96 lg:h-72 object-cover rounded-xl shadow-lg  transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Component-scoped styles for seamless infinite marquee */}
      <style jsx>{`
        .slider {
          position: relative;
        }
        .track {
          display: flex;
          width: max-content; /* shrink-wrap so translate works precisely */
          gap: 0.5rem; /* matches mx-2 on items */
          will-change: transform;
          animation-name: marqueeScroll;
          animation-duration: var(--duration, 40s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: var(--direction, normal);
        }
        /* Keep animating on hover */

        /* The trick: content is duplicated. We move exactly -50% to wrap seamlessly */
        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

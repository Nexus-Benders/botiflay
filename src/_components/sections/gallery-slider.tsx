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
  // Gallery images from public/gallery folder
  const slides1 = [
    {
      id: 1,
      src: "/gallery/slide1.1.png",
      alt: "Gallery Slide 1.1",
    },
    {
      id: 2,
      src: "/gallery/slide1.2.png",
      alt: "Gallery Slide 1.2",
    },
    {
      id: 3,
      src: "/gallery/slide1.3.png",
      alt: "Gallery Slide 1.3",
    },
    {
      id: 4,
      src: "/gallery/slide1.4.png",
      alt: "Gallery Slide 1.4",
    },
    {
      id: 5,
      src: "/gallery/slide1.5.png",
      alt: "Gallery Slide 1.5",
    },
  ];
  const slides2 = [
    {
      id: 1,
      src: "/gallery/slide2.1.png",
      alt: "Gallery Slide 2.1",
    },
    {
      id: 2,
      src: "/gallery/slide2.2.png",
      alt: "Gallery Slide 2.2",
    },
    {
      id: 3,
      src: "/gallery/slide2.3.png",
      alt: "Gallery Slide 2.3",
    },
    {
      id: 4,
      src: "/gallery/slide2.4.png",
      alt: "Gallery Slide 2.4",
    },
    {
      id: 5,
      src: "/gallery/slide2.5.png",
      alt: "Gallery Slide 2.5",
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
          {[...slides1, ...slides1].map((slide, idx) => (
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
          {[...slides2, ...slides2].map((slide, idx) => (
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

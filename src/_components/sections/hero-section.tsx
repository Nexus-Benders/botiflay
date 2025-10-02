import Image from "next/image";

const optData = [
  {
    id: 1,
    label: "4-6 week Delivery",
  },
  {
    id: 2,
    label: "Transparent Pricing",
  },
  {
    id: 3,
    label: "100% Money-Back guarantee",
  },
];
const logos = [
  { id: 1, src: "/assets/Mindscope.png", alt: "Mindscope" },
  { id: 2, src: "/assets/Mindscope.png", alt: "Mindscope" },
  { id: 3, src: "/assets/Mindscope.png", alt: "Mindscope" },
  { id: 4, src: "/assets/Mindscope.png", alt: "Mindscope" },
];

export default function HeroSection() {
  return (
    <div className="h-dvh flex justify-center items-center relative">
      <MiddleSection />
      <HeroFooter />
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="w-[854px] mx-auto flex justify-center items-center flex-col">
      <div className="border border-[#EDEDED] rounded-full min-w-[244px] flex flex-row gap-2 py-1.5 px-3.5">
        <figure>
          <Image
            src={"/assets/Avatar.png"}
            alt="avater-group"
            width={400}
            height={400}
            className="size-8 w-fit"
            quality={100}
            priority
          />
        </figure>
        <div className="flex flex-col gap-[2px]">
          <figure>
            <Image
              src={"/assets/star.png"}
              alt="avater-group"
              width={100}
              height={100}
              quality={100}
              priority
            />
          </figure>
          <p className="font-inter font-[500] text-[12px] leading-[14px]">
            150+ businesses scaled
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-[65px] leading-[65px] uppercase text-center">
          CRAFTING PREMIUM DESIGNS & DEVELOPMENT
        </h1>
        <div className="flex flex-row gap-5">
          {optData.map((item) => (
            <div
              key={item.id}
              className="flex flex-row gap-0 justify-start items-center"
            >
              <Image
                src={"/assets/Tick.png"}
                alt="tick"
                width={100}
                height={100}
                className="size-5"
              />
              <p className="text-[16px] leading-[26px] font-[400] text-[#434343]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <button
          className="px-10 py-[18px] rounded-[30px] relative text-white font-medium text-base transition-all duration-300 
         bg-gradient-to-b from-[#252525] to-[#8B8B8B] 
         border border-transparent 
         shadow-[inset_0_1px_3.9px_rgba(255,255,255,0.25),inset_0_4px_3.2px_rgba(255,255,255,0.25)]
         cursor-pointer hover:opacity-90"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

function HeroFooter() {
  return (
    <div className="flex flex-row gap-2 absolute bottom-14 left-0 ">
      <Collaboration />
    </div>
  );
}

function Collaboration() {
  return (
    <section className="w-full  max-w-[320px] flex flex-col gap-[14px] ">
      <h2 className="font-[500] text-[20px] leading-[24px] text-[#262626]">
        Collaboration With Us
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Left fog */}
        <div className="absolute left-0 top-0 z-20 h-full w-24 pointer-events-none bg-gradient-to-r from-white via-white/70 to-transparent" />

        {/* Right fog */}
        <div className="absolute right-0 top-0 z-20 h-full w-24 pointer-events-none bg-gradient-to-l from-white via-white/70 to-transparent" />

        {/* Sliding track */}
        <div className="flex w-max animate-infinite-scroll">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="z-10 flex items-center justify-center flex-shrink-0 w-32 h-8 px-6 grayscale hover:grayscale-0 transition"
            >
              <Image
                width={300}
                height={300}
                src={logo.src}
                alt={logo.alt}
                className="max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

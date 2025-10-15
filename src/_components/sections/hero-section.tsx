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
    <div className="max-h-dvh h-dvh grid grid-rows-[60%_30%] lg:grid-rows-[80%_20%]">
      <MiddleSection />
      <HeroFooter />
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="w-full max-w-[854px]   mx-auto flex justify-center items-center flex-col  gap-2 px-4 space-y-2">
      <div className="border border-[#EDEDED] rounded-full min-w-[244px] flex flex-row gap-2 py-1.5 px-3.5">
        <figure>
          <Image
            src={"/assets/Avatar.png"}
            alt="avater-group"
            width={400}
            height={400}
            className=" h-7 lg:h-12  w-full"
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
              className=" h-3 lg:h-4 w-auto"
            />
          </figure>
          <p className="font-inter font-[500] text-[12px] lg:text-[14px] leading-[14px] lg:leading-[16px]">
            150+ businesses scaled
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-4xl sm:text-[40px] md:text-[50px] lg:text-[65px] leading-[1.1] uppercase text-center">
          CRAFTING PREMIUM DESIGNS & DEVELOPMENT
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 justify-center items-center">
          {optData.map((item) => (
            <div
              key={item.id}
              className="flex flex-row gap-2 justify-start items-center"
            >
              <Image
                src={"/assets/Tick.png"}
                alt="tick"
                width={100}
                height={100}
                className="size-4 sm:size-5 flex-shrink-0"
              />
              <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] font-[400] text-[#434343] whitespace-nowrap">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 w-full lg:w-fit">
        <button
          className="px-6 w-full lg:w-fit sm:px-10 py-[12px] sm:py-[14px] rounded-[30px] relative text-white font-medium text-sm sm:text-base transition-all duration-300 
         bg-gradient-to-b from-[#8B8B8B] to-50% to-[#252525] 
         cursor-pointer hover:opacity-90"
        >
          Book A Call
        </button>
      </div>
    </div>
  );
}

function HeroFooter() {
  return (
    <div className="  flex flex-col sm:flex-row gap-4 sm:gap-2  lg:justify-between w-full px-4 items-center justify-center">
      <Collaboration />
      <Clutch />
    </div>
  );
}

function Collaboration() {
  return (
    <section className="w-full max-w-[320px] flex flex-col gap-[14px]">
      <h2 className="font-[500] text-center lg:text-start text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] text-[#262626]">
        Collaboration With Us
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Left fog */}
        <div className="absolute left-0 top-0 z-20 h-full w-12 sm:w-24 pointer-events-none bg-gradient-to-r from-white via-white/70 to-transparent" />

        {/* Right fog */}
        <div className="absolute right-0 top-0 z-20 h-full w-12 sm:w-24 pointer-events-none bg-gradient-to-l from-white via-white/70 to-transparent" />

        {/* Sliding track */}
        <div className="flex w-max animate-infinite-scroll">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="z-10 flex items-center justify-center flex-shrink-0 w-24 sm:w-32 h-6 sm:h-8 px-4 sm:px-6 grayscale hover:grayscale-0 transition"
            >
              <Image
                width={300}
                height={300}
                src={logo.src}
                alt={logo.alt}
                className="max-h-8 sm:max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clutch() {
  return (
    <div className="flex justify-center">
      <Image
        src={"/assets/clutch.png"}
        alt="Clutch"
        width={300}
        height={300}
        className="max-h-[28px] sm:max-h-[32px] w-auto"
      />
    </div>
  );
}
